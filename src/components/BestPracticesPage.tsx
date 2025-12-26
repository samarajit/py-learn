import { useState } from 'react';
import { ArrowLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import TheoryQuestion from './TheoryQuestion';
import { PageType } from '../App';

interface BestPracticesPageProps {
  onNavigate: (page: PageType) => void;
}

const sections = [
  'PEP 8 Standards',
  'Error Handling',
  'Testing Basics',
  'Virtual Environments',
  'Knowledge Check'
];

export default function BestPracticesPage({ onNavigate }: BestPracticesPageProps) {
  const [currentSection, setCurrentSection] = useState(0);
  const [completedSections, setCompletedSections] = useState<Set<number>>(new Set());

  const markSectionComplete = (index: number) => {
    setCompletedSections(prev => new Set([...prev, index]));
  };

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const renderSection = () => {
    switch (currentSection) {
      case 0:
        return <PEP8Section onComplete={() => markSectionComplete(0)} onNext={nextSection} />;
      case 1:
        return <ErrorHandlingSection onComplete={() => markSectionComplete(1)} onNext={nextSection} />;
      case 2:
        return <TestingSection onComplete={() => markSectionComplete(2)} onNext={nextSection} />;
      case 3:
        return <VirtualEnvSection onComplete={() => markSectionComplete(3)} onNext={nextSection} />;
      case 4:
        return <KnowledgeCheckSection onComplete={() => markSectionComplete(4)} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="flex gap-8">
          <aside className="w-64 flex-shrink-0 hidden md:block">
            <div className="sticky top-24">
              <h2 className="text-xl mb-4 text-blue-400">Python Best Practices</h2>
              <nav className="space-y-2">
                {sections.map((section, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSection(index)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center justify-between gap-2 ${
                      currentSection === index
                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                        : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 border border-transparent'
                    }`}
                  >
                    <span className="truncate">{section}</span>
                    {completedSections.has(index) && (
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                    )}
                  </button>
                ))}
              </nav>
              
              <div className="mt-8 p-4 bg-zinc-900 rounded-lg border border-zinc-800">
                <div className="text-sm text-zinc-400 mb-2">Progress</div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all"
                      style={{ width: `${(completedSections.size / sections.length) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-white">{completedSections.size}/{sections.length}</span>
                </div>
              </div>
            </div>
          </aside>

          <main className="flex-1 max-w-4xl">
            {renderSection()}
          </main>
        </div>
      </div>
    </div>
  );
}

function PEP8Section({ onComplete, onNext }: { onComplete: () => void; onNext: () => void }) {
  const [showContinue, setShowContinue] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
          PEP 8 Standards
        </h1>
        <p className="text-zinc-400">Python's official style guide</p>
      </div>

      <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 md:p-8 space-y-6">
        <div>
          <h3 className="text-xl text-blue-400 mb-3">What is PEP 8?</h3>
          <p className="text-zinc-300 leading-relaxed">
            PEP 8 is Python's official style guide. It provides conventions for writing clean, readable Python code 
            that other developers can easily understand and maintain.
          </p>
        </div>

        <div>
          <h3 className="text-xl text-indigo-400 mb-3">Key Guidelines</h3>
          <ul className="space-y-3 text-zinc-300">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span><strong>Indentation:</strong> Use 4 spaces per indentation level</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span><strong>Line Length:</strong> Maximum 79 characters per line</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span><strong>Blank Lines:</strong> Two blank lines between functions, one between methods</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span><strong>Imports:</strong> One import per line at the top of the file</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span><strong>Whitespace:</strong> No trailing whitespace, space after commas</span>
            </li>
          </ul>
        </div>

        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
          <h4 className="text-blue-400 mb-2">Example</h4>
          <div className="bg-zinc-950 rounded-lg p-3 font-mono text-xs">
            <div className="mb-1"><code className="text-zinc-500"># Good PEP 8 style</code></div>
            <div className="mb-1"><code className="text-purple-400">def</code> <code className="text-green-400">calculate_total</code><code className="text-zinc-400">(</code><code className="text-cyan-400">items</code><code className="text-zinc-400">, </code><code className="text-cyan-400">tax_rate</code><code className="text-zinc-400">):</code></div>
            <div className="ml-4 mb-1"><code className="text-cyan-400">subtotal</code> <code className="text-pink-400">=</code> <code className="text-green-400">sum</code><code className="text-zinc-400">(</code><code className="text-cyan-400">items</code><code className="text-zinc-400">)</code></div>
            <div className="ml-4"><code className="text-purple-400">return</code> <code className="text-cyan-400">subtotal</code> <code className="text-pink-400">*</code> <code className="text-zinc-400">(</code><code className="text-green-400">1</code> <code className="text-pink-400">+</code> <code className="text-cyan-400">tax_rate</code><code className="text-zinc-400">)</code></div>
          </div>
        </div>

        <button
          onClick={() => {
            setShowContinue(true);
            onComplete();
          }}
          className="w-full py-3 bg-blue-500 hover:bg-blue-400 text-white rounded-lg transition-colors"
        >
          I Understand
        </button>

        {showContinue && (
          <button
            onClick={onNext}
            className="w-full py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            Continue to Next Section
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}

function ErrorHandlingSection({ onComplete, onNext }: { onComplete: () => void; onNext: () => void }) {
  const [showContinue, setShowContinue] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Error Handling
        </h1>
        <p className="text-zinc-400">Handle errors gracefully with try-except</p>
      </div>

      <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 md:p-8 space-y-6">
        <div>
          <h3 className="text-xl text-indigo-400 mb-3">Try-Except Blocks</h3>
          <p className="text-zinc-300 leading-relaxed">
            Error handling prevents your program from crashing when unexpected situations occur. 
            Use try-except blocks to catch and handle exceptions gracefully.
          </p>
        </div>

        <div className="bg-zinc-950 rounded-lg p-4 font-mono text-sm border border-zinc-800">
          <div className="mb-1"><code className="text-purple-400">try</code><code className="text-zinc-400">:</code></div>
          <div className="ml-4 mb-1"><code className="text-cyan-400">age</code> <code className="text-pink-400">=</code> <code className="text-green-400">int</code><code className="text-zinc-400">(</code><code className="text-green-400">input</code><code className="text-zinc-400">(</code><code className="text-yellow-400">"Enter age: "</code><code className="text-zinc-400">))</code></div>
          <div className="ml-4 mb-2"><code className="text-green-400">print</code><code className="text-zinc-400">(</code><code className="text-yellow-400">f"You are </code><code className="text-zinc-400">{'{'}</code><code className="text-cyan-400">age</code><code className="text-zinc-400">{'}'}</code><code className="text-yellow-400"> years old"</code><code className="text-zinc-400">)</code></div>
          <div className="mb-1"><code className="text-purple-400">except</code> <code className="text-cyan-400">ValueError</code><code className="text-zinc-400">:</code></div>
          <div className="ml-4"><code className="text-green-400">print</code><code className="text-zinc-400">(</code><code className="text-yellow-400">"Please enter a valid number"</code><code className="text-zinc-400">)</code></div>
        </div>

        <div>
          <h3 className="text-xl text-purple-400 mb-3">Common Exception Types</h3>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-3">
              <code className="text-orange-400 text-sm">ValueError</code>
              <p className="text-zinc-400 text-xs mt-1">Invalid value for operation</p>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-3">
              <code className="text-orange-400 text-sm">TypeError</code>
              <p className="text-zinc-400 text-xs mt-1">Wrong data type</p>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-3">
              <code className="text-orange-400 text-sm">KeyError</code>
              <p className="text-zinc-400 text-xs mt-1">Key doesn't exist in dict</p>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-3">
              <code className="text-orange-400 text-sm">IndexError</code>
              <p className="text-zinc-400 text-xs mt-1">Index out of range</p>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            setShowContinue(true);
            onComplete();
          }}
          className="w-full py-3 bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg transition-colors"
        >
          I Understand
        </button>

        {showContinue && (
          <button
            onClick={onNext}
            className="w-full py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            Continue to Next Section
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}

function TestingSection({ onComplete, onNext }: { onComplete: () => void; onNext: () => void }) {
  const [showContinue, setShowContinue] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Testing Basics
        </h1>
        <p className="text-zinc-400">Ensure code quality with tests</p>
      </div>

      <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 md:p-8 space-y-6">
        <div>
          <h3 className="text-xl text-purple-400 mb-3">Why Test Your Code?</h3>
          <p className="text-zinc-300 leading-relaxed">
            Testing helps catch bugs early, ensures code works as expected, and makes refactoring safer. 
            It's a professional practice that saves time in the long run.
          </p>
        </div>

        <div>
          <h3 className="text-xl text-pink-400 mb-3">Types of Tests</h3>
          <ul className="space-y-2 text-zinc-300">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span><strong>Unit Tests:</strong> Test individual functions or methods</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span><strong>Integration Tests:</strong> Test how components work together</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span><strong>End-to-End Tests:</strong> Test entire workflows</span>
            </li>
          </ul>
        </div>

        <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-6">
          <h4 className="text-purple-400 mb-2">Simple Test Example</h4>
          <div className="bg-zinc-950 rounded-lg p-3 font-mono text-xs">
            <div className="mb-1"><code className="text-purple-400">def</code> <code className="text-green-400">add</code><code className="text-zinc-400">(</code><code className="text-cyan-400">a</code><code className="text-zinc-400">, </code><code className="text-cyan-400">b</code><code className="text-zinc-400">):</code></div>
            <div className="ml-4 mb-2"><code className="text-purple-400">return</code> <code className="text-cyan-400">a</code> <code className="text-pink-400">+</code> <code className="text-cyan-400">b</code></div>
            <div className="mb-1"><code className="text-zinc-500"># Test</code></div>
            <div className="mb-1"><code className="text-purple-400">assert</code> <code className="text-green-400">add</code><code className="text-zinc-400">(</code><code className="text-green-400">2</code><code className="text-zinc-400">, </code><code className="text-green-400">3</code><code className="text-zinc-400">)</code> <code className="text-pink-400">==</code> <code className="text-green-400">5</code></div>
            <div><code className="text-green-400">print</code><code className="text-zinc-400">(</code><code className="text-yellow-400">"Test passed!"</code><code className="text-zinc-400">)</code></div>
          </div>
        </div>

        <button
          onClick={() => {
            setShowContinue(true);
            onComplete();
          }}
          className="w-full py-3 bg-purple-500 hover:bg-purple-400 text-white rounded-lg transition-colors"
        >
          I Understand
        </button>

        {showContinue && (
          <button
            onClick={onNext}
            className="w-full py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            Continue to Next Section
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}

function VirtualEnvSection({ onComplete, onNext }: { onComplete: () => void; onNext: () => void }) {
  const [showContinue, setShowContinue] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
          Virtual Environments
        </h1>
        <p className="text-zinc-400">Isolate project dependencies</p>
      </div>

      <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 md:p-8 space-y-6">
        <div>
          <h3 className="text-xl text-pink-400 mb-3">What are Virtual Environments?</h3>
          <p className="text-zinc-300 leading-relaxed">
            Virtual environments create isolated Python installations for each project. 
            This prevents dependency conflicts and keeps your global Python installation clean.
          </p>
        </div>

        <div>
          <h3 className="text-xl text-red-400 mb-3">Creating a Virtual Environment</h3>
          <div className="bg-zinc-950 rounded-lg p-4 border border-zinc-800">
            <div className="mb-2 text-sm text-zinc-400">Command Line:</div>
            <code className="text-green-400 text-sm">python -m venv myenv</code>
            <div className="mt-3 mb-2 text-sm text-zinc-400">Activate (Windows):</div>
            <code className="text-green-400 text-sm">myenv\Scripts\activate</code>
            <div className="mt-3 mb-2 text-sm text-zinc-400">Activate (Mac/Linux):</div>
            <code className="text-green-400 text-sm">source myenv/bin/activate</code>
          </div>
        </div>

        <div>
          <h3 className="text-xl text-cyan-400 mb-3">Benefits</h3>
          <ul className="space-y-2 text-zinc-300">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span>Isolate project dependencies</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span>Avoid version conflicts</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span>Easy project sharing with requirements.txt</span>
            </li>
          </ul>
        </div>

        <button
          onClick={() => {
            setShowContinue(true);
            onComplete();
          }}
          className="w-full py-3 bg-pink-500 hover:bg-pink-400 text-white rounded-lg transition-colors"
        >
          I Understand
        </button>

        {showContinue && (
          <button
            onClick={onNext}
            className="w-full py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            Continue to Knowledge Check
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}

function KnowledgeCheckSection({ onComplete }: { onComplete: () => void }) {
  const [quizComplete, setQuizComplete] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
          Knowledge Check
        </h1>
        <p className="text-zinc-400">Test your best practices knowledge</p>
      </div>

      <div className="space-y-6">
        <TheoryQuestion
          question="What is the recommended indentation level in PEP 8?"
          options={["2 spaces", "4 spaces", "1 tab", "8 spaces"]}
          correctIndex={1}
          explanation="PEP 8 recommends using 4 spaces per indentation level for consistency and readability."
          onCorrect={() => {}}
        />

        <TheoryQuestion
          question="What block is used to handle exceptions in Python?"
          options={["if-else", "try-except", "while-break", "for-continue"]}
          correctIndex={1}
          explanation="The try-except block is used to catch and handle exceptions, preventing program crashes."
          onCorrect={() => {
            setQuizComplete(true);
          }}
        />
      </div>

      {quizComplete && (
        <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-xl p-8 text-center">
          <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto mb-4" />
          <h3 className="text-2xl mb-3 text-green-400">Congratulations!</h3>
          <p className="text-zinc-300 mb-6">
            You've completed Python Best Practices. You're now ready to write professional-quality Python code.
          </p>
          <button
            onClick={onComplete}
            className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-400 hover:to-blue-400 text-white rounded-lg transition-all"
          >
            Mark as Complete
          </button>
        </div>
      )}
    </div>
  );
}
