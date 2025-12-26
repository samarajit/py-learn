import { useState } from 'react';
import { ArrowLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import CodeEditor from './CodeEditor';
import TheoryQuestion from './TheoryQuestion';
import VisualDiagram from './VisualDiagram';
import { PageType } from '../App';

interface AdvancedDSAPageProps {
  onNavigate: (page: PageType) => void;
}

const sections = [
  'Trees & Binary Trees',
  'Graphs',
  'Dynamic Programming',
  'Hash Tables',
  'Knowledge Check'
];

export default function AdvancedDSAPage({ onNavigate }: AdvancedDSAPageProps) {
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
        return <TreesSection onComplete={() => markSectionComplete(0)} onNext={nextSection} />;
      case 1:
        return <GraphsSection onComplete={() => markSectionComplete(1)} onNext={nextSection} />;
      case 2:
        return <DPSection onComplete={() => markSectionComplete(2)} onNext={nextSection} />;
      case 3:
        return <HashTablesSection onComplete={() => markSectionComplete(3)} onNext={nextSection} />;
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
              <h2 className="text-xl mb-4 text-orange-400">Advanced DSA</h2>
              <nav className="space-y-2">
                {sections.map((section, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSection(index)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center justify-between gap-2 ${
                      currentSection === index
                        ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
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
                      className="h-full bg-gradient-to-r from-orange-500 to-red-500 transition-all"
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

function TreesSection({ onComplete, onNext }: { onComplete: () => void; onNext: () => void }) {
  const [codingComplete, setCodingComplete] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
          Trees & Binary Trees
        </h1>
        <p className="text-zinc-400">Learn hierarchical data structures</p>
      </div>

      <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 md:p-8 space-y-6">
        <div>
          <h3 className="text-xl text-orange-400 mb-3">What is a Tree?</h3>
          <p className="text-zinc-300 leading-relaxed">
            A tree is a hierarchical data structure consisting of nodes connected by edges. Each tree has a root node 
            and zero or more child nodes, forming a parent-child relationship.
          </p>
        </div>

        <div>
          <h3 className="text-xl text-red-400 mb-3">Binary Tree Properties</h3>
          <ul className="space-y-2 text-zinc-300">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span>Each node has at most two children (left and right)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span>Used for efficient searching and sorting operations</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span>Common traversals: Inorder, Preorder, Postorder</span>
            </li>
          </ul>
        </div>

        <div className="bg-zinc-950 rounded-lg p-4 font-mono text-sm border border-zinc-800">
          <div className="mb-2"><code className="text-purple-400">class</code> <code className="text-cyan-400">TreeNode</code><code className="text-zinc-400">:</code></div>
          <div className="ml-4 mb-2"><code className="text-purple-400">def</code> <code className="text-green-400">__init__</code><code className="text-zinc-400">(</code><code className="text-cyan-400">self</code><code className="text-zinc-400">, </code><code className="text-cyan-400">value</code><code className="text-zinc-400">):</code></div>
          <div className="ml-8 mb-2"><code className="text-cyan-400">self</code><code className="text-zinc-400">.</code><code className="text-cyan-400">value</code> <code className="text-pink-400">=</code> <code className="text-cyan-400">value</code></div>
          <div className="ml-8 mb-2"><code className="text-cyan-400">self</code><code className="text-zinc-400">.</code><code className="text-cyan-400">left</code> <code className="text-pink-400">=</code> <code className="text-purple-400">None</code></div>
          <div className="ml-8"><code className="text-cyan-400">self</code><code className="text-zinc-400">.</code><code className="text-cyan-400">right</code> <code className="text-pink-400">=</code> <code className="text-purple-400">None</code></div>
        </div>
      </div>

      <CodeEditor
        title="Coding Challenge: Create a Tree Node"
        description="Create a TreeNode class with value, left, and right attributes initialized to None"
        initialCode="# Create your TreeNode class\n"
        expectedOutput="class TreeNode:\n    def __init__(self, value):\n        self.value = value\n        self.left = None\n        self.right = None"
        onSuccess={() => {
          setCodingComplete(true);
          onComplete();
        }}
      />

      {codingComplete && (
        <button
          onClick={onNext}
          className="w-full py-3 bg-orange-500 hover:bg-orange-400 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          Continue to Next Section
          <ChevronRight className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

function GraphsSection({ onComplete, onNext }: { onComplete: () => void; onNext: () => void }) {
  const [codingComplete, setCodingComplete] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
          Graphs
        </h1>
        <p className="text-zinc-400">Model relationships and connections</p>
      </div>

      <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 md:p-8 space-y-6">
        <div>
          <h3 className="text-xl text-red-400 mb-3">Graph Fundamentals</h3>
          <p className="text-zinc-300 leading-relaxed">
            A graph consists of vertices (nodes) connected by edges. Graphs can represent networks, relationships, 
            paths, and many real-world connections.
          </p>
        </div>

        <div>
          <h3 className="text-xl text-pink-400 mb-3">Graph Representations</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
              <h4 className="text-cyan-400 mb-2">Adjacency List</h4>
              <p className="text-zinc-400 text-sm">Store neighbors for each vertex</p>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
              <h4 className="text-cyan-400 mb-2">Adjacency Matrix</h4>
              <p className="text-zinc-400 text-sm">2D array of connections</p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-950 rounded-lg p-4 font-mono text-sm border border-zinc-800">
          <div className="mb-2"><code className="text-zinc-500"># Adjacency List Representation</code></div>
          <div className="mb-2"><code className="text-cyan-400">graph</code> <code className="text-pink-400">=</code> <code className="text-zinc-400">{'{'}</code></div>
          <div className="ml-4 mb-2"><code className="text-yellow-400">'A'</code><code className="text-zinc-400">: [</code><code className="text-yellow-400">'B'</code><code className="text-zinc-400">, </code><code className="text-yellow-400">'C'</code><code className="text-zinc-400">],</code></div>
          <div className="ml-4 mb-2"><code className="text-yellow-400">'B'</code><code className="text-zinc-400">: [</code><code className="text-yellow-400">'A'</code><code className="text-zinc-400">, </code><code className="text-yellow-400">'D'</code><code className="text-zinc-400">],</code></div>
          <div className="ml-4 mb-2"><code className="text-yellow-400">'C'</code><code className="text-zinc-400">: [</code><code className="text-yellow-400">'A'</code><code className="text-zinc-400">]</code></div>
          <div><code className="text-zinc-400">{'}'}</code></div>
        </div>
      </div>

      <CodeEditor
        title="Coding Challenge: Create Graph"
        description="Create a graph dictionary with vertices 'X' and 'Y', where 'X' connects to 'Y'"
        initialCode="# Create your graph\n"
        expectedOutput="graph = {'X': ['Y'], 'Y': ['X']}"
        onSuccess={() => {
          setCodingComplete(true);
          onComplete();
        }}
      />

      {codingComplete && (
        <button
          onClick={onNext}
          className="w-full py-3 bg-red-500 hover:bg-red-400 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          Continue to Next Section
          <ChevronRight className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

function DPSection({ onComplete, onNext }: { onComplete: () => void; onNext: () => void }) {
  const [showContinue, setShowContinue] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Dynamic Programming
        </h1>
        <p className="text-zinc-400">Optimize recursive solutions with memoization</p>
      </div>

      <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 md:p-8 space-y-6">
        <div>
          <h3 className="text-xl text-pink-400 mb-3">What is Dynamic Programming?</h3>
          <p className="text-zinc-300 leading-relaxed">
            Dynamic Programming (DP) is an optimization technique that solves complex problems by breaking them down 
            into simpler subproblems and storing their solutions to avoid redundant calculations.
          </p>
        </div>

        <div>
          <h3 className="text-xl text-purple-400 mb-3">Key Concepts</h3>
          <ul className="space-y-2 text-zinc-300">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span><strong>Memoization:</strong> Store results of expensive function calls</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span><strong>Optimal Substructure:</strong> Solution can be built from optimal solutions of subproblems</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span><strong>Overlapping Subproblems:</strong> Same subproblems are solved multiple times</span>
            </li>
          </ul>
        </div>

        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
          <h4 className="text-blue-400 mb-2">Classic Example: Fibonacci</h4>
          <p className="text-zinc-300 text-sm mb-3">Without DP, calculating fib(n) recalculates the same values many times. With DP, we store results.</p>
          <div className="bg-zinc-950 rounded-lg p-3 font-mono text-xs">
            <div><code className="text-cyan-400">memo</code> <code className="text-pink-400">=</code> <code className="text-zinc-400">{'{}'}</code></div>
            <div><code className="text-purple-400">def</code> <code className="text-green-400">fib</code><code className="text-zinc-400">(</code><code className="text-cyan-400">n</code><code className="text-zinc-400">):</code></div>
            <div className="ml-4"><code className="text-purple-400">if</code> <code className="text-cyan-400">n</code> <code className="text-purple-400">in</code> <code className="text-cyan-400">memo</code><code className="text-zinc-400">:</code> <code className="text-purple-400">return</code> <code className="text-cyan-400">memo</code><code className="text-zinc-400">[</code><code className="text-cyan-400">n</code><code className="text-zinc-400">]</code></div>
          </div>
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

function HashTablesSection({ onComplete, onNext }: { onComplete: () => void; onNext: () => void }) {
  const [codingComplete, setCodingComplete] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Hash Tables
        </h1>
        <p className="text-zinc-400">Fast data lookup with O(1) average time</p>
      </div>

      <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 md:p-8 space-y-6">
        <div>
          <h3 className="text-xl text-purple-400 mb-3">Hash Tables in Python</h3>
          <p className="text-zinc-300 leading-relaxed">
            In Python, dictionaries are implemented as hash tables, providing fast key-value lookups. 
            Hash tables use a hash function to compute an index where values are stored.
          </p>
        </div>

        <div className="bg-zinc-950 rounded-lg p-4 font-mono text-sm border border-zinc-800">
          <div className="mb-2"><code className="text-zinc-500"># Dictionary (Hash Table)</code></div>
          <div className="mb-2"><code className="text-cyan-400">phonebook</code> <code className="text-pink-400">=</code> <code className="text-zinc-400">{'{'}</code></div>
          <div className="ml-4 mb-2"><code className="text-yellow-400">'Alice'</code><code className="text-zinc-400">: </code><code className="text-yellow-400">'123-4567'</code><code className="text-zinc-400">,</code></div>
          <div className="ml-4 mb-2"><code className="text-yellow-400">'Bob'</code><code className="text-zinc-400">: </code><code className="text-yellow-400">'987-6543'</code></div>
          <div className="mb-3"><code className="text-zinc-400">{'}'}</code></div>
          <div><code className="text-green-400">print</code><code className="text-zinc-400">(</code><code className="text-cyan-400">phonebook</code><code className="text-zinc-400">[</code><code className="text-yellow-400">'Alice'</code><code className="text-zinc-400">])</code>  <code className="text-zinc-500"># O(1) lookup</code></div>
        </div>
      </div>

      <CodeEditor
        title="Coding Challenge: Create Hash Table"
        description="Create a dictionary called 'scores' with keys 'Math' and 'Science' having values 95 and 88"
        initialCode="# Create your dictionary\n"
        expectedOutput="scores = {'Math': 95, 'Science': 88}"
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
          Continue to Knowledge Check
          <ChevronRight className="w-5 h-5" />
        </button>
      )}
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
        <p className="text-zinc-400">Test your advanced DSA knowledge</p>
      </div>

      <div className="space-y-6">
        <TheoryQuestion
          question="What is the maximum number of children a node can have in a binary tree?"
          options={["1", "2", "3", "Unlimited"]}
          correctIndex={1}
          explanation="In a binary tree, each node can have at most 2 children: a left child and a right child."
          onCorrect={() => {}}
        />

        <TheoryQuestion
          question="What is the main advantage of Dynamic Programming?"
          options={[
            "It uses more memory",
            "It avoids redundant calculations by storing results",
            "It makes code harder to read",
            "It only works for sorting"
          ]}
          correctIndex={1}
          explanation="Dynamic Programming stores the results of subproblems to avoid recalculating them, significantly improving performance for problems with overlapping subproblems."
          onCorrect={() => {
            setQuizComplete(true);
          }}
        />
      </div>

      {quizComplete && (
        <div className="bg-gradient-to-r from-green-500/20 to-orange-500/20 border border-green-500/30 rounded-xl p-8 text-center">
          <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto mb-4" />
          <h3 className="text-2xl mb-3 text-green-400">Amazing Progress!</h3>
          <p className="text-zinc-300 mb-6">
            You've completed Advanced DSA. You now understand complex data structures and optimization techniques.
          </p>
          <button
            onClick={onComplete}
            className="px-8 py-3 bg-gradient-to-r from-green-500 to-orange-500 hover:from-green-400 hover:to-orange-400 text-white rounded-lg transition-all"
          >
            Mark as Complete
          </button>
        </div>
      )}
    </div>
  );
}
