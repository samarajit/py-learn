import { useState } from 'react';
import { ArrowLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import CodeEditor from './CodeEditor';
import TheoryQuestion from './TheoryQuestion';
import { PageType } from '../App';

interface CleanCodePageProps {
  onNavigate: (page: PageType) => void;
}

const sections = [
  'Naming Conventions',
  'Code Organization',
  'DRY Principle',
  'Comments & Documentation',
  'Knowledge Check'
];

export default function CleanCodePage({ onNavigate }: CleanCodePageProps) {
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
        return <NamingSection onComplete={() => markSectionComplete(0)} onNext={nextSection} />;
      case 1:
        return <OrganizationSection onComplete={() => markSectionComplete(1)} onNext={nextSection} />;
      case 2:
        return <DRYSection onComplete={() => markSectionComplete(2)} onNext={nextSection} />;
      case 3:
        return <DocumentationSection onComplete={() => markSectionComplete(3)} onNext={nextSection} />;
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
              <h2 className="text-xl mb-4 text-green-400">Clean Code Principles</h2>
              <nav className="space-y-2">
                {sections.map((section, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSection(index)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center justify-between gap-2 ${
                      currentSection === index
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
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
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all"
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

function NamingSection({ onComplete, onNext }: { onComplete: () => void; onNext: () => void }) {
  const [showContinue, setShowContinue] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
          Naming Conventions
        </h1>
        <p className="text-zinc-400">Choose meaningful and descriptive names</p>
      </div>

      <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 md:p-8 space-y-6">
        <div>
          <h3 className="text-xl text-green-400 mb-3">Why Good Names Matter</h3>
          <p className="text-zinc-300 leading-relaxed">
            Good variable and function names make code self-documenting. They should clearly express intent 
            and purpose without requiring additional comments.
          </p>
        </div>

        <div>
          <h3 className="text-xl text-emerald-400 mb-3">Python Naming Rules</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-zinc-950 border border-green-500/20 rounded-lg p-4">
              <h4 className="text-green-400 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Do This
              </h4>
              <code className="text-sm text-green-300">total_price = 100</code><br/>
              <code className="text-sm text-green-300">calculate_tax()</code><br/>
              <code className="text-sm text-green-300">is_valid</code>
            </div>
            <div className="bg-zinc-950 border border-red-500/20 rounded-lg p-4">
              <h4 className="text-red-400 mb-2 flex items-center gap-2">
                <span className="w-4 h-4">✗</span>
                Avoid This
              </h4>
              <code className="text-sm text-red-300">tp = 100</code><br/>
              <code className="text-sm text-red-300">calc()</code><br/>
              <code className="text-sm text-red-300">x</code>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl text-cyan-400 mb-3">Case Styles</h3>
          <ul className="space-y-3 text-zinc-300">
            <li><strong>snake_case:</strong> Variables and functions - <code className="text-green-400">user_name</code></li>
            <li><strong>PascalCase:</strong> Classes - <code className="text-purple-400">UserAccount</code></li>
            <li><strong>UPPER_CASE:</strong> Constants - <code className="text-orange-400">MAX_SIZE</code></li>
          </ul>
        </div>

        <button
          onClick={() => {
            setShowContinue(true);
            onComplete();
          }}
          className="w-full py-3 bg-green-500 hover:bg-green-400 text-white rounded-lg transition-colors"
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

function OrganizationSection({ onComplete, onNext }: { onComplete: () => void; onNext: () => void }) {
  const [showContinue, setShowContinue] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          Code Organization
        </h1>
        <p className="text-zinc-400">Structure your code for readability</p>
      </div>

      <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 md:p-8 space-y-6">
        <div>
          <h3 className="text-xl text-emerald-400 mb-3">Organize by Functionality</h3>
          <p className="text-zinc-300 leading-relaxed">
            Group related code together. Keep functions small and focused on a single task. 
            Use modules and packages to organize larger projects.
          </p>
        </div>

        <div>
          <h3 className="text-xl text-cyan-400 mb-3">Best Practices</h3>
          <ul className="space-y-2 text-zinc-300">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span>One function should do one thing well</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span>Keep functions short (ideally under 20 lines)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span>Group related functions in the same file</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span>Use blank lines to separate logical sections</span>
            </li>
          </ul>
        </div>

        <button
          onClick={() => {
            setShowContinue(true);
            onComplete();
          }}
          className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-white rounded-lg transition-colors"
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

function DRYSection({ onComplete, onNext }: { onComplete: () => void; onNext: () => void }) {
  const [codingComplete, setCodingComplete] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          DRY Principle
        </h1>
        <p className="text-zinc-400">Don't Repeat Yourself</p>
      </div>

      <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 md:p-8 space-y-6">
        <div>
          <h3 className="text-xl text-cyan-400 mb-3">What is DRY?</h3>
          <p className="text-zinc-300 leading-relaxed">
            DRY stands for "Don't Repeat Yourself". Every piece of knowledge should have a single, 
            unambiguous representation in your code. Avoid duplicating logic.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-red-400 mb-2">Bad: Repetitive Code</h4>
            <div className="bg-zinc-950 rounded-lg p-3 font-mono text-xs border border-red-500/20">
              <div className="mb-1"><code className="text-cyan-400">price1</code> <code className="text-pink-400">=</code> <code className="text-green-400">100</code> <code className="text-pink-400">*</code> <code className="text-green-400">1.1</code></div>
              <div className="mb-1"><code className="text-cyan-400">price2</code> <code className="text-pink-400">=</code> <code className="text-green-400">200</code> <code className="text-pink-400">*</code> <code className="text-green-400">1.1</code></div>
              <div><code className="text-cyan-400">price3</code> <code className="text-pink-400">=</code> <code className="text-green-400">150</code> <code className="text-pink-400">*</code> <code className="text-green-400">1.1</code></div>
            </div>
          </div>
          <div>
            <h4 className="text-green-400 mb-2">Good: DRY Code</h4>
            <div className="bg-zinc-950 rounded-lg p-3 font-mono text-xs border border-green-500/20">
              <div className="mb-1"><code className="text-purple-400">def</code> <code className="text-green-400">add_tax</code><code className="text-zinc-400">(</code><code className="text-cyan-400">price</code><code className="text-zinc-400">):</code></div>
              <div className="ml-4 mb-2"><code className="text-purple-400">return</code> <code className="text-cyan-400">price</code> <code className="text-pink-400">*</code> <code className="text-green-400">1.1</code></div>
              <div className="mb-1"><code className="text-cyan-400">price1</code> <code className="text-pink-400">=</code> <code className="text-green-400">add_tax</code><code className="text-zinc-400">(</code><code className="text-green-400">100</code><code className="text-zinc-400">)</code></div>
            </div>
          </div>
        </div>
      </div>

      <CodeEditor
        title="Coding Challenge: Apply DRY"
        description="Create a function 'greet' that takes a name parameter and returns 'Hello, name!'"
        initialCode="# Create your greet function\n"
        expectedOutput="def greet(name):\n    return f'Hello, {name}!'"
        onSuccess={() => {
          setCodingComplete(true);
          onComplete();
        }}
      />

      {codingComplete && (
        <button
          onClick={onNext}
          className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-zinc-950 rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          Continue to Next Section
          <ChevronRight className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

function DocumentationSection({ onComplete, onNext }: { onComplete: () => void; onNext: () => void }) {
  const [showContinue, setShowContinue] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Comments & Documentation
        </h1>
        <p className="text-zinc-400">Write code that explains itself</p>
      </div>

      <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 md:p-8 space-y-6">
        <div>
          <h3 className="text-xl text-blue-400 mb-3">When to Comment</h3>
          <p className="text-zinc-300 leading-relaxed">
            Comments should explain WHY, not WHAT. Good code should be self-explanatory. 
            Use comments for complex logic, edge cases, or important decisions.
          </p>
        </div>

        <div>
          <h3 className="text-xl text-purple-400 mb-3">Docstrings</h3>
          <div className="bg-zinc-950 rounded-lg p-4 font-mono text-xs border border-zinc-800">
            <div className="mb-1"><code className="text-purple-400">def</code> <code className="text-green-400">calculate_discount</code><code className="text-zinc-400">(</code><code className="text-cyan-400">price</code><code className="text-zinc-400">, </code><code className="text-cyan-400">percentage</code><code className="text-zinc-400">):</code></div>
            <div className="ml-4 mb-1"><code className="text-yellow-400">"""</code></div>
            <div className="ml-4 mb-1"><code className="text-yellow-400">Calculate discount amount.</code></div>
            <div className="ml-4 mb-1"><code className="text-yellow-400"></code></div>
            <div className="ml-4 mb-1"><code className="text-yellow-400">Args:</code></div>
            <div className="ml-4 mb-1"><code className="text-yellow-400">    price: Original price</code></div>
            <div className="ml-4 mb-1"><code className="text-yellow-400">    percentage: Discount percentage</code></div>
            <div className="ml-4 mb-1"><code className="text-yellow-400">Returns:</code></div>
            <div className="ml-4 mb-1"><code className="text-yellow-400">    Discount amount</code></div>
            <div className="ml-4 mb-2"><code className="text-yellow-400">"""</code></div>
            <div className="ml-4"><code className="text-purple-400">return</code> <code className="text-cyan-400">price</code> <code className="text-pink-400">*</code> <code className="text-zinc-400">(</code><code className="text-cyan-400">percentage</code> <code className="text-pink-400">/</code> <code className="text-green-400">100</code><code className="text-zinc-400">)</code></div>
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
        <p className="text-zinc-400">Test your clean code knowledge</p>
      </div>

      <div className="space-y-6">
        <TheoryQuestion
          question="Which naming style should you use for Python variables?"
          options={["camelCase", "snake_case", "PascalCase", "kebab-case"]}
          correctIndex={1}
          explanation="Python conventions use snake_case for variables and functions, as specified in PEP 8."
          onCorrect={() => {}}
        />

        <TheoryQuestion
          question="What does the DRY principle stand for?"
          options={[
            "Do Repeat Yourself",
            "Don't Repeat Yourself",
            "Debug Regularly Yearly",
            "Document Required Years"
          ]}
          correctIndex={1}
          explanation="DRY stands for Don't Repeat Yourself. It means avoiding code duplication by extracting common logic into reusable functions."
          onCorrect={() => {
            setQuizComplete(true);
          }}
        />
      </div>

      {quizComplete && (
        <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-8 text-center">
          <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto mb-4" />
          <h3 className="text-2xl mb-3 text-green-400">Well Done!</h3>
          <p className="text-zinc-300 mb-6">
            You've mastered Clean Code principles. Your code will now be more readable and maintainable.
          </p>
          <button
            onClick={onComplete}
            className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white rounded-lg transition-all"
          >
            Mark as Complete
          </button>
        </div>
      )}
    </div>
  );
}
