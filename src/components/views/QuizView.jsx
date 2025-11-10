import React from 'react';
import { CheckCircle, XCircle, BookOpen, Lightbulb } from 'lucide-react';
import QuizHeader from '../ui/QuizHeader';
import QuizStats from '../ui/QuizStats';
import OptionButton from '../ui/OptionButton';
import CommentSection from '../ui/CommentSection';
import SolutionPanel from '../ui/SolutionPanel';
import TheoryModal from '../ui/TheoryModal';
import { shouldShowTheoryButton, getOptionState } from '../../utils/quizHelpers';

const QuizView = ({
  level,
  exercise,
  currentExerciseIndex,
  totalExercises,
  selectedAnswer,
  showSolution,
  score,
  streak,
  timeSpent,
  onAnswer,
  onNext,
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
          streak={streak}
          timeSpent={timeSpent}
        />

        <div className="question-container">
          <div className="question-card">
            <h2 className="question-text">{exercise.question}</h2>
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
                  disabled={showSolution}
                />
              ))}
            </div>
          </div>

          {!showSolution && (
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
              isLastExercise={isLastExercise}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizView;