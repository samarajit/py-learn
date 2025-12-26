import { useState } from 'react';
import { ArrowLeft, ChevronRight, CheckCircle2, XCircle } from 'lucide-react';
import CodeEditor from './CodeEditor';
import TheoryQuestion from './TheoryQuestion';
import VisualDiagram from './VisualDiagram';
import { PageType } from '../App';

interface BasicsPageProps {
  onNavigate: (page: PageType) => void;
}

const sections = [
  'Introduction to Python',
  'Variables & Data Types',
  'Basic Operators',
  'Print Function',
  'Knowledge Check'
];

export default function BasicsPage({ onNavigate }: BasicsPageProps) {
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
        return <IntroSection onComplete={() => markSectionComplete(0)} onNext={nextSection} />;
      case 1:
        return <VariablesSection onComplete={() => markSectionComplete(1)} onNext={nextSection} />;
      case 2:
        return <OperatorsSection onComplete={() => markSectionComplete(2)} onNext={nextSection} />;
      case 3:
        return <PrintSection onComplete={() => markSectionComplete(3)} onNext={nextSection} />;
      case 4:
        return <KnowledgeCheckSection onComplete={() => markSectionComplete(4)} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
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
          {/* Sidebar */}
          <aside className="w-64 flex-shrink-0">
            <div className="sticky top-24">
              <h2 className="text-xl mb-4 text-cyan-400">Python Basics</h2>
              <nav className="space-y-2">
                {sections.map((section, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSection(index)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center justify-between gap-2 ${
                      currentSection === index
                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
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
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all"
                      style={{ width: `${(completedSections.size / sections.length) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-white">{completedSections.size}/{sections.length}</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 max-w-4xl">
            {renderSection()}
          </main>
        </div>
      </div>
    </div>
  );
}

// Section Components
function IntroSection({ onComplete, onNext }: { onComplete: () => void; onNext: () => void }) {
  const [showContinue, setShowContinue] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Introduction to Python
        </h1>
        <p className="text-zinc-400">Learn what Python is and why it's great for beginners</p>
      </div>

      <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-8 space-y-6">
        <div>
          <h3 className="text-xl text-cyan-400 mb-3">What is Python?</h3>
          <p className="text-zinc-300 leading-relaxed">
            Python is a high-level, interpreted programming language known for its simplicity and readability. 
            It was created by Guido van Rossum and first released in 1991. Python's design philosophy emphasizes 
            code readability with its use of significant indentation.
          </p>
        </div>

        <div>
          <h3 className="text-xl text-purple-400 mb-3">Why Learn Python?</h3>
          <ul className="space-y-3 text-zinc-300">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span><strong>Easy to Learn:</strong> Simple syntax that reads like English</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span><strong>Versatile:</strong> Used for web development, data science, AI, automation, and more</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span><strong>Large Community:</strong> Extensive libraries and helpful community support</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span><strong>High Demand:</strong> Top employers are actively seeking Python developers</span>
            </li>
          </ul>
        </div>

        <VisualDiagram type="pythonUses" />

        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
          <h4 className="text-blue-400 mb-2">Your First Python Program</h4>
          <p className="text-zinc-300 mb-4">Here's the classic "Hello, World!" program in Python:</p>
          <div className="bg-zinc-950 rounded-lg p-4 font-mono text-sm border border-zinc-800">
            <code className="text-green-400">print</code>
            <code className="text-zinc-400">(</code>
            <code className="text-yellow-400">"Hello, World!"</code>
            <code className="text-zinc-400">)</code>
          </div>
          <p className="text-zinc-400 mt-3 text-sm">
            That's it! Just one line to display text. You'll learn more about the print function soon.
          </p>
        </div>

        <button
          onClick={() => {
            setShowContinue(true);
            onComplete();
          }}
          className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-zinc-950 rounded-lg transition-colors"
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

function VariablesSection({ onComplete, onNext }: { onComplete: () => void; onNext: () => void }) {
  const [codingComplete, setCodingComplete] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Variables & Data Types
        </h1>
        <p className="text-zinc-400">Store and work with different types of data</p>
      </div>

      <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-8 space-y-6">
        <div>
          <h3 className="text-xl text-purple-400 mb-3">What are Variables?</h3>
          <p className="text-zinc-300 leading-relaxed">
            Variables are containers for storing data values. Think of them as labeled boxes where you can 
            store information to use later in your program.
          </p>
        </div>

        <div className="bg-zinc-950 rounded-lg p-4 font-mono text-sm border border-zinc-800">
          <div className="mb-2"><code className="text-cyan-400">name</code> <code className="text-pink-400">=</code> <code className="text-yellow-400">"Alice"</code></div>
          <div className="mb-2"><code className="text-cyan-400">age</code> <code className="text-pink-400">=</code> <code className="text-green-400">25</code></div>
          <div><code className="text-cyan-400">is_student</code> <code className="text-pink-400">=</code> <code className="text-purple-400">True</code></div>
        </div>

        <VisualDiagram type="variables" />

        <div>
          <h3 className="text-xl text-pink-400 mb-3">Common Data Types</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
              <h4 className="text-cyan-400 mb-2">String (str)</h4>
              <p className="text-zinc-400 text-sm mb-2">Text data in quotes</p>
              <code className="text-sm text-yellow-400">"Hello"</code>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
              <h4 className="text-cyan-400 mb-2">Integer (int)</h4>
              <p className="text-zinc-400 text-sm mb-2">Whole numbers</p>
              <code className="text-sm text-green-400">42</code>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
              <h4 className="text-cyan-400 mb-2">Float</h4>
              <p className="text-zinc-400 text-sm mb-2">Decimal numbers</p>
              <code className="text-sm text-green-400">3.14</code>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
              <h4 className="text-cyan-400 mb-2">Boolean (bool)</h4>
              <p className="text-zinc-400 text-sm mb-2">True or False</p>
              <code className="text-sm text-purple-400">True</code>
            </div>
          </div>
        </div>
      </div>

      <CodeEditor
        title="Coding Challenge: Create Variables"
        description="Create three variables: 'city' with value 'New York', 'population' with value 8000000, and 'is_capital' with value False"
        initialCode="# Create your variables below\n"
        expectedOutput="city = 'New York'\npopulation = 8000000\nis_capital = False"
        onSuccess={() => {
          setCodingComplete(true);
          onComplete();
        }}
      />

      {codingComplete && (
        <button
          onClick={onNext}
          className="w-full py-3 bg-purple-500 hover:bg-purple-400 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          Continue to Next Section
          <ChevronRight className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

function OperatorsSection({ onComplete, onNext }: { onComplete: () => void; onNext: () => void }) {
  const [codingComplete, setCodingComplete] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl mb-4 bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
          Basic Operators
        </h1>
        <p className="text-zinc-400">Perform calculations and operations</p>
      </div>

      <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-8 space-y-6">
        <div>
          <h3 className="text-xl text-pink-400 mb-3">Arithmetic Operators</h3>
          <p className="text-zinc-300 leading-relaxed mb-4">
            Use these operators to perform mathematical calculations:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-cyan-400">Addition</span>
                <code className="text-pink-400">+</code>
              </div>
              <code className="text-sm text-zinc-400">5 + 3 = 8</code>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-cyan-400">Subtraction</span>
                <code className="text-pink-400">-</code>
              </div>
              <code className="text-sm text-zinc-400">10 - 4 = 6</code>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-cyan-400">Multiplication</span>
                <code className="text-pink-400">*</code>
              </div>
              <code className="text-sm text-zinc-400">6 * 7 = 42</code>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-cyan-400">Division</span>
                <code className="text-pink-400">/</code>
              </div>
              <code className="text-sm text-zinc-400">15 / 3 = 5.0</code>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-cyan-400">Floor Division</span>
                <code className="text-pink-400">//</code>
              </div>
              <code className="text-sm text-zinc-400">17 // 5 = 3</code>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-cyan-400">Modulus</span>
                <code className="text-pink-400">%</code>
              </div>
              <code className="text-sm text-zinc-400">17 % 5 = 2</code>
            </div>
          </div>
        </div>

        <VisualDiagram type="operators" />

        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
          <h4 className="text-blue-400 mb-2">Example</h4>
          <div className="bg-zinc-950 rounded-lg p-4 font-mono text-sm border border-zinc-800">
            <div className="mb-2"><code className="text-cyan-400">x</code> <code className="text-pink-400">=</code> <code className="text-green-400">10</code></div>
            <div className="mb-2"><code className="text-cyan-400">y</code> <code className="text-pink-400">=</code> <code className="text-green-400">3</code></div>
            <div className="mb-2"><code className="text-cyan-400">result</code> <code className="text-pink-400">=</code> <code className="text-cyan-400">x</code> <code className="text-pink-400">+</code> <code className="text-cyan-400">y</code></div>
            <div><code className="text-zinc-500"># result is now 13</code></div>
          </div>
        </div>
      </div>

      <CodeEditor
        title="Coding Challenge: Calculate Total"
        description="Create a variable 'total' that calculates 25 + 17 * 2"
        initialCode="# Calculate the total below\n"
        expectedOutput="total = 25 + 17 * 2"
        onSuccess={() => {
          setCodingComplete(true);
          onComplete();
        }}
      />

      {codingComplete && (
        <button
          onClick={onNext}
          className="w-full py-3 bg-pink-500 hover:bg-pink-400 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          Continue to Next Section
          <ChevronRight className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

function PrintSection({ onComplete, onNext }: { onComplete: () => void; onNext: () => void }) {
  const [codingComplete, setCodingComplete] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl mb-4 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
          Print Function
        </h1>
        <p className="text-zinc-400">Display output to the screen</p>
      </div>

      <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-8 space-y-6">
        <div>
          <h3 className="text-xl text-green-400 mb-3">The print() Function</h3>
          <p className="text-zinc-300 leading-relaxed">
            The print() function is used to display information to the user. It's one of the most commonly 
            used functions in Python and essential for debugging and showing results.
          </p>
        </div>

        <div>
          <h4 className="text-cyan-400 mb-3">Basic Usage</h4>
          <div className="bg-zinc-950 rounded-lg p-4 font-mono text-sm border border-zinc-800 mb-2">
            <code className="text-green-400">print</code>
            <code className="text-zinc-400">(</code>
            <code className="text-yellow-400">"Hello, World!"</code>
            <code className="text-zinc-400">)</code>
          </div>
          <p className="text-zinc-400 text-sm">Output: Hello, World!</p>
        </div>

        <div>
          <h4 className="text-cyan-400 mb-3">Printing Variables</h4>
          <div className="bg-zinc-950 rounded-lg p-4 font-mono text-sm border border-zinc-800 mb-2">
            <div className="mb-2"><code className="text-cyan-400">name</code> <code className="text-pink-400">=</code> <code className="text-yellow-400">"Python"</code></div>
            <div><code className="text-green-400">print</code><code className="text-zinc-400">(</code><code className="text-cyan-400">name</code><code className="text-zinc-400">)</code></div>
          </div>
          <p className="text-zinc-400 text-sm">Output: Python</p>
        </div>

        <div>
          <h4 className="text-cyan-400 mb-3">Printing Multiple Items</h4>
          <div className="bg-zinc-950 rounded-lg p-4 font-mono text-sm border border-zinc-800 mb-2">
            <div className="mb-2"><code className="text-cyan-400">age</code> <code className="text-pink-400">=</code> <code className="text-green-400">25</code></div>
            <div><code className="text-green-400">print</code><code className="text-zinc-400">(</code><code className="text-yellow-400">"I am"</code><code className="text-zinc-400">, </code><code className="text-cyan-400">age</code><code className="text-zinc-400">, </code><code className="text-yellow-400">"years old"</code><code className="text-zinc-400">)</code></div>
          </div>
          <p className="text-zinc-400 text-sm">Output: I am 25 years old</p>
        </div>

        <VisualDiagram type="print" />
      </div>

      <CodeEditor
        title="Coding Challenge: Print a Message"
        description="Print the message 'Learning Python is fun!' to the screen"
        initialCode="# Write your print statement below\n"
        expectedOutput="print('Learning Python is fun!')"
        onSuccess={() => {
          setCodingComplete(true);
          onComplete();
        }}
      />

      {codingComplete && (
        <button
          onClick={onNext}
          className="w-full py-3 bg-green-500 hover:bg-green-400 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          Continue to Knowledge Check
          <ChevronRight className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

function KnowledgeCheckSection({ onComplete }: { onComplete: () => void }) {
  const [quizComplete, setQuizComplete] = useState(false);
  const [codingComplete, setCodingComplete] = useState(false);

  const allComplete = quizComplete && codingComplete;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
          Knowledge Check
        </h1>
        <p className="text-zinc-400">Test what you've learned about Python basics</p>
      </div>

      <div className="space-y-6">
        <TheoryQuestion
          question="What is the correct way to create a variable named 'count' with the value 10?"
          options={[
            "count = 10",
            "var count = 10",
            "int count = 10",
            "count := 10"
          ]}
          correctIndex={0}
          explanation="In Python, you create a variable by simply writing the variable name, followed by =, and then the value. No special keywords like 'var' or 'int' are needed."
          onCorrect={() => {}}
        />

        <TheoryQuestion
          question="Which of these is NOT a valid data type in Python?"
          options={[
            "string",
            "integer",
            "character",
            "boolean"
          ]}
          correctIndex={2}
          explanation="Python doesn't have a separate 'character' data type. Single characters are just strings with length 1."
          onCorrect={() => {}}
        />

        <TheoryQuestion
          question="What will be the result of: 10 // 3"
          options={[
            "3.33",
            "3",
            "4",
            "Error"
          ]}
          correctIndex={1}
          explanation="The // operator performs floor division, which divides and rounds down to the nearest whole number. 10 // 3 = 3"
          onCorrect={() => {
            setQuizComplete(true);
          }}
        />
      </div>

      <CodeEditor
        title="Final Coding Challenge"
        description="Create variables: 'first_name' with value 'John', 'last_name' with value 'Doe', and 'full_name' that combines them with a space. Then print the full_name."
        initialCode="# Write your code below\n"
        expectedOutput="first_name = 'John'\nlast_name = 'Doe'\nfull_name = first_name + ' ' + last_name\nprint(full_name)"
        onSuccess={() => {
          setCodingComplete(true);
        }}
      />

      {allComplete && (
        <div className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/30 rounded-xl p-8 text-center">
          <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto mb-4" />
          <h3 className="text-2xl mb-3 text-green-400">Congratulations!</h3>
          <p className="text-zinc-300 mb-6">
            You've successfully completed the Python Basics module. You now understand variables, 
            data types, operators, and the print function.
          </p>
          <button
            onClick={onComplete}
            className="px-8 py-3 bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 text-white rounded-lg transition-all"
          >
            Mark as Complete
          </button>
        </div>
      )}
    </div>
  );
}
