import { useState } from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

interface TheoryQuestionProps {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  onCorrect: () => void;
}

export default function TheoryQuestion({ question, options, correctIndex, explanation, onCorrect }: TheoryQuestionProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = () => {
    if (selectedIndex !== null) {
      setShowResult(true);
      if (selectedIndex === correctIndex) {
        onCorrect();
      }
    }
  };

  const reset = () => {
    setSelectedIndex(null);
    setShowResult(false);
  };

  const isCorrect = selectedIndex === correctIndex;

  return (
    <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 space-y-4">
      <h3 className="text-lg text-white">{question}</h3>

      <div className="space-y-3">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => !showResult && setSelectedIndex(index)}
            disabled={showResult}
            className={`w-full text-left p-4 rounded-lg border transition-all ${
              showResult
                ? index === correctIndex
                  ? 'bg-green-500/10 border-green-500/30 text-green-400'
                  : index === selectedIndex
                  ? 'bg-red-500/10 border-red-500/30 text-red-400'
                  : 'bg-zinc-950 border-zinc-800 text-zinc-500'
                : selectedIndex === index
                ? 'bg-cyan-500/20 border-cyan-500/30 text-cyan-400'
                : 'bg-zinc-950 border-zinc-700 text-zinc-300 hover:border-cyan-500/30'
            }`}
          >
            <div className="flex items-center justify-between">
              <span>{option}</span>
              {showResult && index === correctIndex && (
                <CheckCircle2 className="w-5 h-5 text-green-400" />
              )}
              {showResult && index === selectedIndex && index !== correctIndex && (
                <XCircle className="w-5 h-5 text-red-400" />
              )}
            </div>
          </button>
        ))}
      </div>

      {!showResult ? (
        <button
          onClick={handleSubmit}
          disabled={selectedIndex === null}
          className={`w-full py-3 rounded-lg transition-colors ${
            selectedIndex === null
              ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
              : 'bg-cyan-500 hover:bg-cyan-400 text-zinc-950'
          }`}
        >
          Submit Answer
        </button>
      ) : (
        <>
          <div
            className={`p-4 rounded-lg border ${
              isCorrect
                ? 'bg-green-500/10 border-green-500/30'
                : 'bg-red-500/10 border-red-500/30'
            }`}
          >
            <div className="flex items-start gap-3 mb-2">
              {isCorrect ? (
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              ) : (
                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              )}
              <div>
                <p className={isCorrect ? 'text-green-400' : 'text-red-400'}>
                  {isCorrect ? 'Correct!' : 'Incorrect'}
                </p>
                <p className="text-zinc-300 text-sm mt-2">{explanation}</p>
              </div>
            </div>
          </div>
          <button
            onClick={reset}
            className="w-full py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors"
          >
            Try Again
          </button>
        </>
      )}
    </div>
  );
}
