import { useState } from 'react';
import { ArrowLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import CodeEditor from './CodeEditor';
import TheoryQuestion from './TheoryQuestion';
import VisualDiagram from './VisualDiagram';
import { PageType } from '../App';

interface DSAPageProps {
  onNavigate: (page: PageType) => void;
}

const sections = [
  'Introduction to DSA',
  'Lists & Arrays',
  'Stacks & Queues',
  'Searching Algorithms',
  'Knowledge Check'
];

export default function DSAPage({ onNavigate }: DSAPageProps) {
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
        return <ListsSection onComplete={() => markSectionComplete(1)} onNext={nextSection} />;
      case 2:
        return <StacksQueuesSection onComplete={() => markSectionComplete(2)} onNext={nextSection} />;
      case 3:
        return <SearchingSection onComplete={() => markSectionComplete(3)} onNext={nextSection} />;
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
          <aside className="w-64 flex-shrink-0">
            <div className="sticky top-24">
              <h2 className="text-xl mb-4 text-pink-400">Data Structures & Algorithms</h2>
              <nav className="space-y-2">
                {sections.map((section, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSection(index)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center justify-between gap-2 ${
                      currentSection === index
                        ? 'bg-pink-500/20 text-pink-400 border border-pink-500/30'
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
                      className="h-full bg-gradient-to-r from-pink-500 to-orange-500 transition-all"
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

function IntroSection({ onComplete, onNext }: { onComplete: () => void; onNext: () => void }) {
  const [showContinue, setShowContinue] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl mb-4 bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
          Introduction to DSA
        </h1>
        <p className="text-zinc-400">Master data structures and algorithms for efficient programming</p>
      </div>

      <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-8 space-y-6">
        <div>
          <h3 className="text-xl text-pink-400 mb-3">What are Data Structures?</h3>
          <p className="text-zinc-300 leading-relaxed">
            Data structures are specialized formats for organizing, storing, and managing data efficiently. 
            They provide different ways to store collections of data based on the operations you need to perform.
          </p>
        </div>

        <div>
          <h3 className="text-xl text-orange-400 mb-3">What are Algorithms?</h3>
          <p className="text-zinc-300 leading-relaxed">
            Algorithms are step-by-step procedures or formulas for solving problems. They define how to manipulate 
            data structures to accomplish specific tasks efficiently.
          </p>
        </div>

        <div>
          <h3 className="text-xl text-cyan-400 mb-3">Why Learn DSA?</h3>
          <ul className="space-y-3 text-zinc-300">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span><strong>Efficiency:</strong> Write code that runs faster and uses less memory</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span><strong>Problem Solving:</strong> Develop systematic approaches to complex problems</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span><strong>Interviews:</strong> Essential for technical interviews at top companies</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span><strong>Foundation:</strong> Core knowledge for advanced programming concepts</span>
            </li>
          </ul>
        </div>

        <VisualDiagram type="dsaImportance" />

        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
          <h4 className="text-blue-400 mb-2">Time Complexity</h4>
          <p className="text-zinc-300">
            An important concept in DSA is analyzing how the runtime of an algorithm grows with input size. 
            We use Big O notation to express this - you'll learn more about this as we progress.
          </p>
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
            Continue to Next Section
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}

function ListsSection({ onComplete, onNext }: { onComplete: () => void; onNext: () => void }) {
  const [codingComplete, setCodingComplete] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Lists & Arrays
        </h1>
        <p className="text-zinc-400">Work with sequential collections of data</p>
      </div>

      <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-8 space-y-6">
        <div>
          <h3 className="text-xl text-purple-400 mb-3">Python Lists</h3>
          <p className="text-zinc-300 leading-relaxed">
            Lists are ordered, mutable collections that can store items of different types. They're one of the 
            most commonly used data structures in Python.
          </p>
        </div>

        <div className="bg-zinc-950 rounded-lg p-4 font-mono text-sm border border-zinc-800">
          <div className="mb-2"><code className="text-cyan-400">numbers</code> <code className="text-pink-400">=</code> <code className="text-zinc-400">[</code><code className="text-green-400">1</code><code className="text-zinc-400">, </code><code className="text-green-400">2</code><code className="text-zinc-400">, </code><code className="text-green-400">3</code><code className="text-zinc-400">, </code><code className="text-green-400">4</code><code className="text-zinc-400">, </code><code className="text-green-400">5</code><code className="text-zinc-400">]</code></div>
          <div className="mb-2"><code className="text-cyan-400">fruits</code> <code className="text-pink-400">=</code> <code className="text-zinc-400">[</code><code className="text-yellow-400">"apple"</code><code className="text-zinc-400">, </code><code className="text-yellow-400">"banana"</code><code className="text-zinc-400">, </code><code className="text-yellow-400">"cherry"</code><code className="text-zinc-400">]</code></div>
        </div>

        <div>
          <h3 className="text-xl text-pink-400 mb-3">Common List Operations</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
              <h4 className="text-cyan-400 mb-2 text-sm">Append</h4>
              <code className="text-xs text-zinc-300">list.append(item)</code>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
              <h4 className="text-cyan-400 mb-2 text-sm">Insert</h4>
              <code className="text-xs text-zinc-300">list.insert(index, item)</code>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
              <h4 className="text-cyan-400 mb-2 text-sm">Remove</h4>
              <code className="text-xs text-zinc-300">list.remove(item)</code>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
              <h4 className="text-cyan-400 mb-2 text-sm">Access</h4>
              <code className="text-xs text-zinc-300">list[index]</code>
            </div>
          </div>
        </div>

        <VisualDiagram type="lists" />

        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
          <h4 className="text-blue-400 mb-2">List Indexing</h4>
          <p className="text-zinc-300 mb-3">
            Lists are zero-indexed, meaning the first element is at index 0. You can also use negative 
            indices to count from the end.
          </p>
          <div className="bg-zinc-950 rounded-lg p-3 font-mono text-sm">
            <div><code className="text-cyan-400">fruits</code><code className="text-zinc-400">[</code><code className="text-green-400">0</code><code className="text-zinc-400">]</code>  <code className="text-zinc-500"># "apple"</code></div>
            <div><code className="text-cyan-400">fruits</code><code className="text-zinc-400">[-</code><code className="text-green-400">1</code><code className="text-zinc-400">]</code> <code className="text-zinc-500"># "cherry"</code></div>
          </div>
        </div>
      </div>

      <CodeEditor
        title="Coding Challenge: Work with Lists"
        description="Create a list called 'colors' with three colors, then append 'purple' to it"
        initialCode="# Create and modify your list below\n"
        expectedOutput="colors = ['red', 'blue', 'green']\ncolors.append('purple')"
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

function StacksQueuesSection({ onComplete, onNext }: { onComplete: () => void; onNext: () => void }) {
  const [codingComplete, setCodingComplete] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Stacks & Queues
        </h1>
        <p className="text-zinc-400">Learn linear data structures with specific access patterns</p>
      </div>

      <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-8 space-y-6">
        <div>
          <h3 className="text-xl text-cyan-400 mb-3">Stack - LIFO (Last In, First Out)</h3>
          <p className="text-zinc-300 leading-relaxed mb-4">
            A stack is like a stack of plates. You can only add or remove items from the top. 
            The last item added is the first one to be removed.
          </p>
          
          <div className="bg-zinc-950 rounded-lg p-4 font-mono text-sm border border-zinc-800">
            <div className="mb-2"><code className="text-cyan-400">stack</code> <code className="text-pink-400">=</code> <code className="text-zinc-400">[]</code></div>
            <div className="mb-2"><code className="text-cyan-400">stack</code><code className="text-zinc-400">.</code><code className="text-green-400">append</code><code className="text-zinc-400">(</code><code className="text-green-400">1</code><code className="text-zinc-400">)</code>  <code className="text-zinc-500"># Push</code></div>
            <div className="mb-2"><code className="text-cyan-400">stack</code><code className="text-zinc-400">.</code><code className="text-green-400">append</code><code className="text-zinc-400">(</code><code className="text-green-400">2</code><code className="text-zinc-400">)</code>  <code className="text-zinc-500"># Push</code></div>
            <div><code className="text-cyan-400">item</code> <code className="text-pink-400">=</code> <code className="text-cyan-400">stack</code><code className="text-zinc-400">.</code><code className="text-green-400">pop</code><code className="text-zinc-400">()</code>  <code className="text-zinc-500"># Pop - returns 2</code></div>
          </div>
        </div>

        <div>
          <h3 className="text-xl text-blue-400 mb-3">Queue - FIFO (First In, First Out)</h3>
          <p className="text-zinc-300 leading-relaxed mb-4">
            A queue is like a line of people. The first person to arrive is the first one to be served. 
            Items are added at the back and removed from the front.
          </p>
          
          <div className="bg-zinc-950 rounded-lg p-4 font-mono text-sm border border-zinc-800">
            <div className="mb-2"><code className="text-purple-400">from</code> <code className="text-cyan-400">collections</code> <code className="text-purple-400">import</code> <code className="text-cyan-400">deque</code></div>
            <div className="mb-2"><code className="text-cyan-400">queue</code> <code className="text-pink-400">=</code> <code className="text-cyan-400">deque</code><code className="text-zinc-400">()</code></div>
            <div className="mb-2"><code className="text-cyan-400">queue</code><code className="text-zinc-400">.</code><code className="text-green-400">append</code><code className="text-zinc-400">(</code><code className="text-green-400">1</code><code className="text-zinc-400">)</code>  <code className="text-zinc-500"># Enqueue</code></div>
            <div><code className="text-cyan-400">item</code> <code className="text-pink-400">=</code> <code className="text-cyan-400">queue</code><code className="text-zinc-400">.</code><code className="text-green-400">popleft</code><code className="text-zinc-400">()</code>  <code className="text-zinc-500"># Dequeue</code></div>
          </div>
        </div>

        <VisualDiagram type="stackQueue" />

        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
          <h4 className="text-blue-400 mb-2">Real-World Examples</h4>
          <ul className="text-zinc-300 space-y-2 text-sm">
            <li><strong>Stack:</strong> Browser history, undo/redo functionality</li>
            <li><strong>Queue:</strong> Print job queue, customer service lines</li>
          </ul>
        </div>
      </div>

      <CodeEditor
        title="Coding Challenge: Implement a Stack"
        description="Create an empty stack list, push the numbers 10, 20, 30 to it"
        initialCode="# Create your stack below\n"
        expectedOutput="stack = []\nstack.append(10)\nstack.append(20)\nstack.append(30)"
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

function SearchingSection({ onComplete, onNext }: { onComplete: () => void; onNext: () => void }) {
  const [codingComplete, setCodingComplete] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl mb-4 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
          Searching Algorithms
        </h1>
        <p className="text-zinc-400">Find elements efficiently in data structures</p>
      </div>

      <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-8 space-y-6">
        <div>
          <h3 className="text-xl text-green-400 mb-3">Linear Search</h3>
          <p className="text-zinc-300 leading-relaxed mb-4">
            Linear search checks every element one by one until it finds the target or reaches the end. 
            Simple but can be slow for large datasets.
          </p>
          
          <div className="bg-zinc-950 rounded-lg p-4 font-mono text-sm border border-zinc-800">
            <div className="mb-2"><code className="text-purple-400">def</code> <code className="text-green-400">linear_search</code><code className="text-zinc-400">(</code><code className="text-cyan-400">arr</code><code className="text-zinc-400">, </code><code className="text-cyan-400">target</code><code className="text-zinc-400">):</code></div>
            <div className="ml-4 mb-2"><code className="text-purple-400">for</code> <code className="text-cyan-400">i</code> <code className="text-purple-400">in</code> <code className="text-green-400">range</code><code className="text-zinc-400">(</code><code className="text-green-400">len</code><code className="text-zinc-400">(</code><code className="text-cyan-400">arr</code><code className="text-zinc-400">)):</code></div>
            <div className="ml-8 mb-2"><code className="text-purple-400">if</code> <code className="text-cyan-400">arr</code><code className="text-zinc-400">[</code><code className="text-cyan-400">i</code><code className="text-zinc-400">]</code> <code className="text-pink-400">==</code> <code className="text-cyan-400">target</code><code className="text-zinc-400">:</code></div>
            <div className="ml-12 mb-2"><code className="text-purple-400">return</code> <code className="text-cyan-400">i</code></div>
            <div className="ml-4"><code className="text-purple-400">return</code> <code className="text-pink-400">-</code><code className="text-green-400">1</code></div>
          </div>
        </div>

        <div>
          <h3 className="text-xl text-cyan-400 mb-3">Binary Search</h3>
          <p className="text-zinc-300 leading-relaxed mb-4">
            Binary search works on sorted arrays. It repeatedly divides the search space in half, 
            making it much faster than linear search for large datasets.
          </p>
          
          <div className="bg-zinc-950 rounded-lg p-4 font-mono text-sm border border-zinc-800">
            <div className="mb-2"><code className="text-purple-400">def</code> <code className="text-green-400">binary_search</code><code className="text-zinc-400">(</code><code className="text-cyan-400">arr</code><code className="text-zinc-400">, </code><code className="text-cyan-400">target</code><code className="text-zinc-400">):</code></div>
            <div className="ml-4 mb-2"><code className="text-cyan-400">left</code><code className="text-zinc-400">, </code><code className="text-cyan-400">right</code> <code className="text-pink-400">=</code> <code className="text-green-400">0</code><code className="text-zinc-400">, </code><code className="text-green-400">len</code><code className="text-zinc-400">(</code><code className="text-cyan-400">arr</code><code className="text-zinc-400">)</code> <code className="text-pink-400">-</code> <code className="text-green-400">1</code></div>
            <div className="ml-4 mb-2"><code className="text-purple-400">while</code> <code className="text-cyan-400">left</code> <code className="text-pink-400">&lt;=</code> <code className="text-cyan-400">right</code><code className="text-zinc-400">:</code></div>
            <div className="ml-8 mb-2"><code className="text-cyan-400">mid</code> <code className="text-pink-400">=</code> <code className="text-zinc-400">(</code><code className="text-cyan-400">left</code> <code className="text-pink-400">+</code> <code className="text-cyan-400">right</code><code className="text-zinc-400">)</code> <code className="text-pink-400">//</code> <code className="text-green-400">2</code></div>
            <div className="ml-8 mb-2"><code className="text-purple-400">if</code> <code className="text-cyan-400">arr</code><code className="text-zinc-400">[</code><code className="text-cyan-400">mid</code><code className="text-zinc-400">]</code> <code className="text-pink-400">==</code> <code className="text-cyan-400">target</code><code className="text-zinc-400">:</code></div>
            <div className="ml-12 mb-2"><code className="text-purple-400">return</code> <code className="text-cyan-400">mid</code></div>
            <div className="ml-8 mb-2"><code className="text-purple-400">elif</code> <code className="text-cyan-400">arr</code><code className="text-zinc-400">[</code><code className="text-cyan-400">mid</code><code className="text-zinc-400">]</code> <code className="text-pink-400">&lt;</code> <code className="text-cyan-400">target</code><code className="text-zinc-400">:</code></div>
            <div className="ml-12 mb-2"><code className="text-cyan-400">left</code> <code className="text-pink-400">=</code> <code className="text-cyan-400">mid</code> <code className="text-pink-400">+</code> <code className="text-green-400">1</code></div>
            <div className="ml-8 mb-2"><code className="text-purple-400">else</code><code className="text-zinc-400">:</code></div>
            <div className="ml-12 mb-2"><code className="text-cyan-400">right</code> <code className="text-pink-400">=</code> <code className="text-cyan-400">mid</code> <code className="text-pink-400">-</code> <code className="text-green-400">1</code></div>
            <div className="ml-4"><code className="text-purple-400">return</code> <code className="text-pink-400">-</code><code className="text-green-400">1</code></div>
          </div>
        </div>

        <VisualDiagram type="searching" />

        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
          <h4 className="text-blue-400 mb-2">Time Complexity Comparison</h4>
          <div className="space-y-2 text-sm text-zinc-300">
            <div className="flex justify-between">
              <span>Linear Search:</span>
              <code className="text-orange-400">O(n)</code>
            </div>
            <div className="flex justify-between">
              <span>Binary Search:</span>
              <code className="text-green-400">O(log n)</code>
            </div>
          </div>
        </div>
      </div>

      <CodeEditor
        title="Coding Challenge: Check if Element Exists"
        description="Use the 'in' operator to check if 5 exists in the list [1, 2, 3, 4, 5]"
        initialCode="# Write your code below\nnumbers = [1, 2, 3, 4, 5]\n"
        expectedOutput="numbers = [1, 2, 3, 4, 5]\nresult = 5 in numbers"
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
        <p className="text-zinc-400">Test your understanding of DSA concepts</p>
      </div>

      <div className="space-y-6">
        <TheoryQuestion
          question="What is the time complexity of accessing an element in a list by index?"
          options={[
            "O(1) - Constant time",
            "O(n) - Linear time",
            "O(log n) - Logarithmic time",
            "O(n^2) - Quadratic time"
          ]}
          correctIndex={0}
          explanation="Accessing an element by index in a list is O(1) because Python can directly calculate the memory address and retrieve the value instantly, regardless of list size."
          onCorrect={() => {}}
        />

        <TheoryQuestion
          question="Which data structure follows the LIFO principle?"
          options={[
            "Queue",
            "Stack",
            "List",
            "Dictionary"
          ]}
          correctIndex={1}
          explanation="A Stack follows LIFO (Last In, First Out) - the last element added is the first one to be removed, like a stack of plates."
          onCorrect={() => {}}
        />

        <TheoryQuestion
          question="What is required for binary search to work correctly?"
          options={[
            "The list must be empty",
            "The list must be sorted",
            "The list must have duplicates",
            "The list must be reversed"
          ]}
          correctIndex={1}
          explanation="Binary search requires a sorted list because it relies on dividing the search space based on comparing the target with the middle element."
          onCorrect={() => {
            setQuizComplete(true);
          }}
        />
      </div>

      <CodeEditor
        title="Final Coding Challenge"
        description="Create a list called 'nums' with [10, 20, 30], then use pop() to remove the last element"
        initialCode="# Write your code below\n"
        expectedOutput="nums = [10, 20, 30]\nnums.pop()"
        onSuccess={() => {
          setCodingComplete(true);
        }}
      />

      {allComplete && (
        <div className="bg-gradient-to-r from-green-500/20 to-pink-500/20 border border-green-500/30 rounded-xl p-8 text-center">
          <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto mb-4" />
          <h3 className="text-2xl mb-3 text-green-400">Outstanding!</h3>
          <p className="text-zinc-300 mb-6">
            You've completed the Data Structures and Algorithms module. You now have a solid foundation 
            in essential data structures and searching algorithms.
          </p>
          <button
            onClick={onComplete}
            className="px-8 py-3 bg-gradient-to-r from-green-500 to-pink-500 hover:from-green-400 hover:to-pink-400 text-white rounded-lg transition-all"
          >
            Mark as Complete
          </button>
        </div>
      )}
    </div>
  );
}
