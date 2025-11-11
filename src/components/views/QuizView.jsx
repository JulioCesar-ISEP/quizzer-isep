import React from 'react';
import { CheckCircle, XCircle, BookOpen, Lightbulb, ArrowLeft, ArrowRight, Flag, CheckSquare } from 'lucide-react';
import QuizHeader from '../ui/QuizHeader';
import QuizStats from '../ui/QuizStats';
import OptionButton from '../ui/OptionButton';
import CommentSection from '../ui/CommentSection';
import SolutionPanel from '../ui/SolutionPanel';
import TheoryModal from '../ui/TheoryModal';
import { shouldShowTheoryButton } from '../../utils/quizHelpers';

const QuizView = ({
  level,
  exercise,
  currentExerciseIndex,
  totalExercises,
  selectedAnswer,
  showSolution,
  showResults,
  answers,
  score,
  maxStreak,
  timeSpent,
  onAnswer,
  onNext,
  onPrevious,
  onGoToExercise,
  onShowResults,
  onFinishQuiz,
  onBack,
  onShowTheory,
  comments,
  currentComment,
  onSaveComment,
  showTheory,
  onCloseTheory
}) => {
  if (!exercise || !level) return null;

  const commentKey = `${level.id}-${currentExerciseIndex}`;
  const hasComment = comments[commentKey];
  const showTheoryButton = shouldShowTheoryButton(exercise);
  const isLastExercise = currentExerciseIndex === totalExercises - 1;
  const allQuestionsAnswered = answers.length === totalExercises && answers.every(answer => answer !== undefined);

  // Garantir que timeSpent sempre tenha um valor válido
  const displayTime = timeSpent && !timeSpent.includes('NaN') ? timeSpent : '00:00';

  // Tela de resultados
  if (showResults) {
    return (
      <div className="quiz-screen">
        <div className="results-screen">
          <div className="results-header">
            <h1 className="results-title">Resultados do Quiz</h1>
            <p className="results-subtitle">Confira seu desempenho em {level.name}</p>
          </div>

          <div className="results-summary">
            <div className="score-card-large">
              <div className="score-header">
                <CheckSquare className="score-icon" />
                <span>Pontuação Final</span>
              </div>
              <div className="score-value-large">
                {score}<span>/{totalExercises}</span>
              </div>
              <div className="score-percentage-large">
                {Math.round((score / totalExercises) * 100)}%
              </div>
              <div className="progress-bar-large">
                <div
                  className="progress-fill"
                  style={{ width: `${(score / totalExercises) * 100}%` }}
                />
              </div>
            </div>

            <div className="results-stats">
              <div className="stat-result">
                <span className="stat-label">Questões Corretas</span>
                <span className="stat-value">{score}</span>
              </div>
              <div className="stat-result">
                <span className="stat-label">Questões Incorretas</span>
                <span className="stat-value">{totalExercises - score}</span>
              </div>
              <div className="stat-result">
                <span className="stat-label">Melhor Sequência</span>
                <span className="stat-value">{maxStreak}</span>
              </div>
              <div className="stat-result">
                <span className="stat-label">Tempo Total</span>
                <span className="stat-value">{displayTime}</span>
              </div>
            </div>
          </div>

          <div className="questions-review">
            <h3 className="review-title">Revisão das Questões</h3>
            <div className="questions-grid">
              {level.exercises.map((ex, index) => {
                const userAnswer = answers[index];
                const isCorrect = userAnswer !== undefined && userAnswer === ex.correct;
                const isAnswered = userAnswer !== undefined;
                
                return (
                  <div
                    key={index}
                    className={`question-review-item ${isAnswered ? (isCorrect ? 'correct' : 'incorrect') : 'unanswered'}`}
                    onClick={() => {
                      onGoToExercise(index);
                    }}
                  >
                    <div className="question-number">Questão {index + 1}</div>
                    <div className="question-status">
                      {isAnswered ? (
                        isCorrect ? (
                          <CheckCircle size={20} className="correct-icon" />
                        ) : (
                          <XCircle size={20} className="incorrect-icon" />
                        )
                      ) : (
                        <div className="unanswered-icon">?</div>
                      )}
                    </div>
                    <div className="question-preview">
                      {ex.question.substring(0, 50)}...
                    </div>
                    <div className="question-status-text">
                      {isAnswered ? (isCorrect ? 'Correta' : 'Incorreta') : 'Não respondida'}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="results-actions">
            <button 
              onClick={() => onGoToExercise(0)} 
              className="btn btn-secondary"
            >
              <ArrowLeft size={20} />
              Revisar Questões
            </button>
            <button onClick={onFinishQuiz} className="btn btn-primary">
              <CheckSquare size={20} />
              Finalizar Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Tela normal do quiz
  return (
    <div className="quiz-screen">
      {showTheory && exercise.theoryPoints && (
        <TheoryModal
          theory={exercise.theoryPoints}
          onClose={onCloseTheory}
        />
      )}

      <QuizHeader
        levelName={level.name}
        currentExercise={currentExerciseIndex}
        totalExercises={totalExercises}
        onBack={onBack}
        onShowTheory={onShowTheory}
        showTheoryButton={showTheoryButton}
      />

      <div className="quiz-content">
        <QuizStats
          score={score}
          streak={maxStreak}
          timeSpent={displayTime}
          currentExercise={currentExerciseIndex}
          totalExercises={totalExercises}
        />

        {/* Navegação entre questões */}
        <div className="questions-navigation">
          <div className="nav-buttons">
            <button 
              onClick={onPrevious} 
              disabled={currentExerciseIndex === 0}
              className="nav-btn"
            >
              <ArrowLeft size={16} />
              Anterior
            </button>
            
            <div className="questions-dots">
              {level.exercises.map((_, index) => {
                const isAnswered = answers[index] !== undefined;
                const isCurrent = index === currentExerciseIndex;
                
                return (
                  <button
                    key={index}
                    onClick={() => onGoToExercise(index)}
                    className={`question-dot ${isCurrent ? 'current' : ''} ${isAnswered ? 'answered' : 'unanswered'}`}
                    title={`Questão ${index + 1}`}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>
            
            <button 
              onClick={onNext} 
              className="nav-btn"
            >
              {isLastExercise && allQuestionsAnswered ? 'Ver Resultados' : 'Próxima'}
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div className="question-container">
          <div className="question-card">
            <div className="question-header">
              <h2 className="question-text">{exercise.question}</h2>
              <div className="question-meta">
                <span className="question-number-badge">
                  Questão {currentExerciseIndex + 1} de {totalExercises}
                </span>
                {answers[currentExerciseIndex] !== undefined && (
                  <span className="answered-badge">
                    <CheckCircle size={16} />
                    Respondida
                  </span>
                )}
              </div>
            </div>
            <div className="options-grid">
              {exercise.options.map((option, index) => (
                <OptionButton
                  key={index}
                  option={option}
                  index={index}
                  isSelected={selectedAnswer === index}
                  isCorrect={index === exercise.correct}
                  showSolution={showSolution}
                  onSelect={onAnswer}
                  disabled={showSolution || answers[currentExerciseIndex] !== undefined}
                />
              ))}
            </div>
          </div>

          {!showSolution && answers[currentExerciseIndex] === undefined && (
            <CommentSection
              comment={currentComment}
              onSaveComment={onSaveComment}
              hasComment={hasComment}
            />
          )}

          {showSolution && (
            <SolutionPanel
              isCorrect={selectedAnswer === exercise.correct}
              explanation={exercise.explanation}
              code={exercise.code}
              theoryPoints={exercise.theoryPoints}
              hasComment={hasComment}
              comment={comments[commentKey]}
              onNext={onNext}
              onPrevious={onPrevious}
              isLastExercise={isLastExercise}
              allQuestionsAnswered={allQuestionsAnswered}
            />
          )}

          {/* Botão para ir direto aos resultados quando todas as questões estiverem respondidas */}
          {allQuestionsAnswered && !showSolution && !showResults && (
            <div className="finish-quiz-section">
              <button 
                onClick={onShowResults}
                className="btn btn-success finish-btn"
              >
                <Flag size={20} />
                Ver Resultados Finais
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizView;