import React from 'react';
import { CheckCircle, XCircle, BookOpen, Lightbulb, ArrowLeft, ArrowRight, Flag, CheckSquare, Zap, Trophy, Clock, Star } from 'lucide-react';
import QuizHeader from '../ui/QuizHeader';
import OptionButton from '../ui/OptionButton';
import CommentSection from '../ui/CommentSection';
import SolutionPanel from '../ui/SolutionPanel';
import TheoryModal from '../ui/TheoryModal';
import { shouldShowTheoryButton } from '../../utils/quizHelpers';
import '../../styles/components/QuizView.css';

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
  const currentStreak = answers.reduce((streak, answer, index) => {
    if (index > currentExerciseIndex) return streak;
    return answer === level.exercises[index]?.correct ? streak + 1 : 0;
  }, 0);

  // Garantir que timeSpent sempre tenha um valor válido
  const displayTime = timeSpent && !timeSpent.includes('NaN') ? timeSpent : '00:00';

  // Tela de resultados
  if (showResults) {
    const percentage = Math.round((score / totalExercises) * 100);
    const getRankByScore = (score) => {
      if (score >= 90) return 'Homo Sapiens';
      if (score >= 75) return 'Gorila';
      if (score >= 60) return 'Chimpanzé';
      if (score >= 40) return 'Macaco-Prego';
      return 'Iniciante';
    };

    return (
      <div className="ape-quiz-screen">
        <div className="ape-results-screen">
          <div className="ape-results-header">
            <h1 className="ape-results-title">Desafio do Lab Concluído!</h1>
            <p className="ape-results-subtitle">Performance em {level.name} - Rank: {getRankByScore(percentage)}</p>
          </div>

          <div className="ape-results-summary">
            <div className="ape-score-card-large">
              <div className="ape-score-header">
                <Trophy className="ape-score-icon" />
                <span>Pontuação Final</span>
              </div>
              <div className="ape-score-value-large">
                {score}<span>/{totalExercises}</span>
              </div>
              <div className="ape-score-percentage-large">
                {percentage}% de Eficiência
              </div>
              <div className="ape-progress-bar-large">
                <div
                  className="ape-progress-fill-large"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>

            <div className="ape-results-stats">
              <div className="ape-stat-result">
                <span className="ape-stat-label">Respostas Corretas</span>
                <span className="ape-stat-value">{score}</span>
              </div>
              <div className="ape-stat-result">
                <span className="ape-stat-label">Respostas Incorretas</span>
                <span className="ape-stat-value">{totalExercises - score}</span>
              </div>
              <div className="ape-stat-result">
                <span className="ape-stat-label">Sequência Máxima</span>
                <span className="ape-stat-value">{maxStreak}</span>
              </div>
              <div className="ape-stat-result">
                <span className="ape-stat-label">Tempo no Lab</span>
                <span className="ape-stat-value">{displayTime}</span>
              </div>
            </div>
          </div>
          <div className="ape-results-actions">
            <button 
              onClick={() => onGoToExercise(0)} 
              className="ape-btn ape-btn-secondary"
            >
              <ArrowLeft size={20} />
              Revisar Desafios
            </button>
            <button onClick={onFinishQuiz} className="ape-btn ape-btn-primary">
              <CheckSquare size={20} />
              Concluir Lab
            </button>
          </div>
          <div className="ape-questions-review">
            <h3 className="ape-review-title">
              <Star size={24} />
              Análise do Desempenho
            </h3>
            <div className="ape-questions-grid">
              {level.exercises.map((ex, index) => {
                const userAnswer = answers[index];
                const isCorrect = userAnswer !== undefined && userAnswer === ex.correct;
                const isAnswered = userAnswer !== undefined;
                
                return (
                  <div
                    key={index}
                    className={`ape-question-review-item ${isAnswered ? (isCorrect ? 'correct' : 'incorrect') : 'unanswered'}`}
                    onClick={() => {
                      onGoToExercise(index);
                    }}
                  >
                    <div className="ape-question-number">Desafio {index + 1}</div>
                    <div className="ape-question-status">
                      {isAnswered ? (
                        isCorrect ? (
                          <CheckCircle size={20} className="ape-correct-icon" />
                        ) : (
                          <XCircle size={20} className="ape-incorrect-icon" />
                        )
                      ) : (
                        <div className="ape-unanswered-icon">?</div>
                      )}
                    </div>
                    <div className="ape-question-preview">
                      {ex.question.substring(0, 50)}...
                    </div>
                    <div className="ape-question-status-text">
                      {isAnswered ? (isCorrect ? 'Dominado' : 'Lacuna') : 'Pendente'}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Tela normal do quiz
  return (
    <div className="ape-quiz-screen">
      {showTheory && exercise.theoryPoints && (
        <TheoryModal
          theory={exercise.theoryPoints}
          onClose={onCloseTheory}
        />
      )}

      <QuizHeader
        currentExercise={currentExerciseIndex}
        totalExercises={totalExercises}
        onBack={onBack}
        onShowTheory={onShowTheory}
        showTheoryButton={showTheoryButton}
        difficulty={level.difficulty || 'medium'}
        xpReward={level.xp || 0}
        score={score}
        streak={maxStreak}
        timeSpent={displayTime}
        showStats={true}
      />

      {/* Navegação entre questões */}
      <div className="ape-questions-navigation">
        <div className="ape-nav-buttons">
          <button 
            onClick={onPrevious} 
            disabled={currentExerciseIndex === 0}
            className="ape-nav-btn"
          >
            <ArrowLeft size={16} />
            Anterior
          </button>
          
          <div className="ape-questions-dots">
            {level.exercises.map((_, index) => {
              const isAnswered = answers[index] !== undefined;
              const isCurrent = index === currentExerciseIndex;
              
              return (
                <button
                  key={index}
                  onClick={() => onGoToExercise(index)}
                  className={`ape-question-dot ${isCurrent ? 'current' : ''} ${isAnswered ? 'answered' : 'unanswered'}`}
                  title={`Desafio ${index + 1}`}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
          
          <button 
            onClick={onNext} 
            className="ape-nav-btn"
          >
            {isLastExercise && allQuestionsAnswered ? 'Ver Resultados' : 'Próximo'}
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <div className="ape-question-container">
        <div className="ape-question-card">
          <div className="ape-question-header">
            <h2 className="ape-question-text">{exercise.question}</h2>
            <div className="ape-question-meta">
              <span className="ape-question-number-badge">
                Desafio {currentExerciseIndex + 1} de {totalExercises}
              </span>
              {answers[currentExerciseIndex] !== undefined && (
                <span className="ape-answered-badge">
                  <CheckCircle size={16} />
                  Resolvido
                </span>
              )}
            </div>
          </div>
          <div className="ape-options-grid">
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
            currentStreak={currentStreak}
          />
        )}

        {/* Botão para ir direto aos resultados quando todas as questões estiverem respondidas */}
        {allQuestionsAnswered && !showSolution && !showResults && (
          <div className="ape-finish-quiz-section">
            <button 
              onClick={onShowResults}
              className="ape-finish-btn"
            >
              <Flag size={20} />
              Analisar Performance
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizView;