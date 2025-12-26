import { useState } from 'react';
import { Play, CheckCircle2, XCircle, RotateCcw } from 'lucide-react';

interface CodeEditorProps {
  title: string;
  description: string;
  initialCode: string;
  expectedOutput: string;
  onSuccess: () => void;
}

export default function CodeEditor({ title, description, initialCode, expectedOutput, onSuccess }: CodeEditorProps) {
  const [code, setCode] = useState(initialCode);
  const [result, setResult] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  });
  const [hasSucceeded, setHasSucceeded] = useState(false);

  const normalizeCode = (str: string) => {
    return str
      .trim()
      .replace(/\s+/g, ' ')
      .replace(/['"]/g, "'");
  };

  const runCode = () => {
    const normalizedCode = normalizeCode(code);
    const normalizedExpected = normalizeCode(expectedOutput);

    if (normalizedCode === normalizedExpected) {
      setResult({
        type: 'success',
        message: 'Perfect! Your code is correct.'
      });
      setHasSucceeded(true);
      onSuccess();
    } else {
      setResult({
        type: 'error',
        message: 'Not quite right. Check your code and try again.'
      });
    }
  };

  const reset = () => {
    setCode(initialCode);
    setResult({ type: null, message: '' });
  };

  return (
    <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden">
      <div className="bg-zinc-950 border-b border-zinc-800 px-6 py-4">
        <h3 className="text-xl text-cyan-400 mb-2">{title}</h3>
        <p className="text-zinc-400 text-sm">{description}</p>
      </div>

      <div className="p-6 space-y-4">
        <div className="relative">
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-48 bg-zinc-950 border border-zinc-700 rounded-lg p-4 font-mono text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
            placeholder="Write your Python code here..."
            spellCheck={false}
          />
          <div className="absolute top-2 right-2 flex gap-2">
            <button
              onClick={reset}
              className="p-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors"
              title="Reset code"
            >
              <RotateCcw className="w-4 h-4 text-zinc-400" />
            </button>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={runCode}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white rounded-lg transition-all"
          >
            <Play className="w-4 h-4" />
            Run Code
          </button>
        </div>

        {result.type && (
          <div
            className={`flex items-start gap-3 p-4 rounded-lg border ${
              result.type === 'success'
                ? 'bg-green-500/10 border-green-500/30'
                : 'bg-red-500/10 border-red-500/30'
            }`}
          >
            {result.type === 'success' ? (
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
            ) : (
              <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
            )}
            <div>
              <p className={result.type === 'success' ? 'text-green-400' : 'text-red-400'}>
                {result.message}
              </p>
              {result.type === 'error' && (
                <p className="text-zinc-400 text-sm mt-2">
                  Hint: Make sure your code matches the expected format exactly.
                </p>
              )}
            </div>
          </div>
        )}

        {hasSucceeded && (
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
            <p className="text-blue-400 text-sm">
              Great job! Feel free to experiment with the code to learn more.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
