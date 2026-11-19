import { useEffect, useMemo, useRef, useState } from 'react';
import { IntroScreen } from './components/IntroScreen';
import { LoadingScreen } from './components/LoadingScreen';
import { QuestionScreen } from './components/QuestionScreen';
import { ResultScreen } from './components/ResultScreen';
import { QUESTIONS, calculateQuizResult } from './data/quizData';

type QuizStage = 'intro' | 'questions' | 'loading' | 'result';

const INITIAL_ANSWERS = (): Array<number | null> =>
  Array(QUESTIONS.length).fill(null);

export default function App() {
  const [stage, setStage] = useState<QuizStage>('intro');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Array<number | null>>(INITIAL_ANSWERS);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const advanceTimerRef = useRef<number | null>(null);
  const loadingTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (advanceTimerRef.current !== null) {
        window.clearTimeout(advanceTimerRef.current);
      }
      if (loadingTimerRef.current !== null) {
        window.clearTimeout(loadingTimerRef.current);
      }
    };
  }, []);

  const clearPendingTimers = () => {
    if (advanceTimerRef.current !== null) {
      window.clearTimeout(advanceTimerRef.current);
      advanceTimerRef.current = null;
    }
    if (loadingTimerRef.current !== null) {
      window.clearTimeout(loadingTimerRef.current);
      loadingTimerRef.current = null;
    }
  };

  const handleStart = () => {
    clearPendingTimers();
    setAnswers(INITIAL_ANSWERS());
    setQuestionIndex(0);
    setIsTransitioning(false);
    setStage('questions');
    window.scrollTo({ top: 0 });
  };

  const handleSelectAnswer = (points: 2 | 1 | 0) => {
    if (isTransitioning) {
      return;
    }

    const updatedAnswers = [...answers];
    updatedAnswers[questionIndex] = points;
    setAnswers(updatedAnswers);
    setIsTransitioning(true);

    const isLastQuestion = questionIndex === QUESTIONS.length - 1;

    advanceTimerRef.current = window.setTimeout(() => {
      advanceTimerRef.current = null;
      setIsTransitioning(false);

      if (isLastQuestion) {
        setStage('loading');
        window.scrollTo({ top: 0 });

        loadingTimerRef.current = window.setTimeout(() => {
          loadingTimerRef.current = null;
          setStage('result');
          window.scrollTo({ top: 0 });
        }, 1300);
      } else {
        setQuestionIndex((prev) => prev + 1);
      }
    }, 220);
  };

  const handleBack = () => {
    if (isTransitioning || questionIndex === 0) {
      return;
    }
    setQuestionIndex((prev) => Math.max(0, prev - 1));
  };

  const handleReset = () => {
    clearPendingTimers();
    setAnswers(INITIAL_ANSWERS());
    setQuestionIndex(0);
    setIsTransitioning(false);
    setStage('intro');
    window.scrollTo({ top: 0 });
  };

  const resultSummary = useMemo(
    () => calculateQuizResult(answers),
    [answers],
  );

  return (
    <main className="min-h-dvh w-full bg-[var(--bg-page)] text-[var(--text-primary)]">
      <div className="w-full max-w-[600px] mx-auto px-4 py-5 sm:py-8">
        {stage === 'intro' && <IntroScreen onStart={handleStart} />}

        {stage === 'questions' && (
          <QuestionScreen
            questionIndex={questionIndex}
            selectedValue={answers[questionIndex]}
            isTransitioning={isTransitioning}
            onSelectAnswer={handleSelectAnswer}
            onBack={handleBack}
          />
        )}

        {stage === 'loading' && <LoadingScreen />}

        {stage === 'result' && (
          <ResultScreen result={resultSummary} onReset={handleReset} />
        )}
      </div>
    </main>
  );
}
