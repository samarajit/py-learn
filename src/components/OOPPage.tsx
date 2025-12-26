import { useState } from 'react';
import { ArrowLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import CodeEditor from './CodeEditor';
import TheoryQuestion from './TheoryQuestion';
import VisualDiagram from './VisualDiagram';
import { PageType } from '../App';

interface OOPPageProps {
  onNavigate: (page: PageType) => void;
}

const sections = [
  'Introduction to OOP',
  'Classes & Objects',
  'Methods & Attributes',
  'Inheritance',
  'Knowledge Check'
];

export default function OOPPage({ onNavigate }: OOPPageProps) {
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
        return <ClassesSection onComplete={() => markSectionComplete(1)} onNext={nextSection} />;
      case 2:
        return <MethodsSection onComplete={() => markSectionComplete(2)} onNext={nextSection} />;
      case 3:
        return <InheritanceSection onComplete={() => markSectionComplete(3)} onNext={nextSection} />;
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
              <h2 className="text-xl mb-4 text-purple-400">Object-Oriented Programming</h2>
              <nav className="space-y-2">
                {sections.map((section, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSection(index)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center justify-between gap-2 ${
                      currentSection === index
                        ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
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
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all"
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
        <h1 className="text-4xl mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Introduction to OOP
        </h1>
        <p className="text-zinc-400">Understand the principles of Object-Oriented Programming</p>
      </div>

      <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-8 space-y-6">
        <div>
          <h3 className="text-xl text-purple-400 mb-3">What is Object-Oriented Programming?</h3>
          <p className="text-zinc-300 leading-relaxed">
            Object-Oriented Programming (OOP) is a programming paradigm that organizes code around objects and classes 
            rather than functions and logic. It helps create reusable, modular, and maintainable code.
          </p>
        </div>

        <div>
          <h3 className="text-xl text-pink-400 mb-3">Four Pillars of OOP</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
              <h4 className="text-cyan-400 mb-2">Encapsulation</h4>
              <p className="text-zinc-400 text-sm">Bundle data and methods that work on that data within one unit</p>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
              <h4 className="text-cyan-400 mb-2">Inheritance</h4>
              <p className="text-zinc-400 text-sm">Create new classes based on existing classes to reuse code</p>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
              <h4 className="text-cyan-400 mb-2">Polymorphism</h4>
              <p className="text-zinc-400 text-sm">Use a single interface to represent different types</p>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
              <h4 className="text-cyan-400 mb-2">Abstraction</h4>
              <p className="text-zinc-400 text-sm">Hide complex implementation details and show only essential features</p>
            </div>
          </div>
        </div>

        <VisualDiagram type="oopConcept" />

        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
          <h4 className="text-blue-400 mb-2">Real-World Analogy</h4>
          <p className="text-zinc-300">
            Think of a car: it's an object with properties (color, model, speed) and methods (accelerate, brake, turn). 
            You don't need to know how the engine works internally to drive it - that's abstraction and encapsulation!
          </p>
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

function ClassesSection({ onComplete, onNext }: { onComplete: () => void; onNext: () => void }) {
  const [codingComplete, setCodingComplete] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Classes & Objects
        </h1>
        <p className="text-zinc-400">Learn to create and use classes and objects</p>
      </div>

      <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-8 space-y-6">
        <div>
          <h3 className="text-xl text-purple-400 mb-3">What is a Class?</h3>
          <p className="text-zinc-300 leading-relaxed">
            A class is a blueprint for creating objects. It defines the properties (attributes) and behaviors (methods) 
            that objects created from the class will have.
          </p>
        </div>

        <div className="bg-zinc-950 rounded-lg p-4 font-mono text-sm border border-zinc-800">
          <div className="mb-2"><code className="text-purple-400">class</code> <code className="text-cyan-400">Dog</code><code className="text-zinc-400">:</code></div>
          <div className="ml-4 mb-2"><code className="text-purple-400">def</code> <code className="text-green-400">__init__</code><code className="text-zinc-400">(</code><code className="text-cyan-400">self</code><code className="text-zinc-400">, </code><code className="text-cyan-400">name</code><code className="text-zinc-400">, </code><code className="text-cyan-400">age</code><code className="text-zinc-400">):</code></div>
          <div className="ml-8 mb-2"><code className="text-cyan-400">self</code><code className="text-zinc-400">.</code><code className="text-cyan-400">name</code> <code className="text-pink-400">=</code> <code className="text-cyan-400">name</code></div>
          <div className="ml-8"><code className="text-cyan-400">self</code><code className="text-zinc-400">.</code><code className="text-cyan-400">age</code> <code className="text-pink-400">=</code> <code className="text-cyan-400">age</code></div>
        </div>

        <div>
          <h3 className="text-xl text-pink-400 mb-3">Creating Objects</h3>
          <p className="text-zinc-300 leading-relaxed mb-4">
            An object is an instance of a class. You can create multiple objects from the same class.
          </p>
          <div className="bg-zinc-950 rounded-lg p-4 font-mono text-sm border border-zinc-800">
            <div className="mb-2"><code className="text-cyan-400">my_dog</code> <code className="text-pink-400">=</code> <code className="text-cyan-400">Dog</code><code className="text-zinc-400">(</code><code className="text-yellow-400">"Buddy"</code><code className="text-zinc-400">, </code><code className="text-green-400">3</code><code className="text-zinc-400">)</code></div>
            <div><code className="text-cyan-400">your_dog</code> <code className="text-pink-400">=</code> <code className="text-cyan-400">Dog</code><code className="text-zinc-400">(</code><code className="text-yellow-400">"Max"</code><code className="text-zinc-400">, </code><code className="text-green-400">5</code><code className="text-zinc-400">)</code></div>
          </div>
        </div>

        <VisualDiagram type="classObject" />

        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
          <h4 className="text-blue-400 mb-2">The __init__ Method</h4>
          <p className="text-zinc-300">
            The __init__ method is a special method called a constructor. It's automatically called when you create 
            a new object and is used to initialize the object's attributes.
          </p>
        </div>
      </div>

      <CodeEditor
        title="Coding Challenge: Create a Class"
        description="Create a class called 'Car' with __init__ method that takes 'brand' and 'model' as parameters"
        initialCode="# Create your Car class below\n"
        expectedOutput="class Car:\n    def __init__(self, brand, model):\n        self.brand = brand\n        self.model = model"
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

function MethodsSection({ onComplete, onNext }: { onComplete: () => void; onNext: () => void }) {
  const [codingComplete, setCodingComplete] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl mb-4 bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
          Methods & Attributes
        </h1>
        <p className="text-zinc-400">Define behaviors and access object properties</p>
      </div>

      <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-8 space-y-6">
        <div>
          <h3 className="text-xl text-pink-400 mb-3">Class Methods</h3>
          <p className="text-zinc-300 leading-relaxed mb-4">
            Methods are functions defined inside a class that describe the behaviors of objects. 
            The first parameter is always 'self', which refers to the instance.
          </p>
          
          <div className="bg-zinc-950 rounded-lg p-4 font-mono text-sm border border-zinc-800">
            <div className="mb-2"><code className="text-purple-400">class</code> <code className="text-cyan-400">Dog</code><code className="text-zinc-400">:</code></div>
            <div className="ml-4 mb-2"><code className="text-purple-400">def</code> <code className="text-green-400">__init__</code><code className="text-zinc-400">(</code><code className="text-cyan-400">self</code><code className="text-zinc-400">, </code><code className="text-cyan-400">name</code><code className="text-zinc-400">):</code></div>
            <div className="ml-8 mb-3"><code className="text-cyan-400">self</code><code className="text-zinc-400">.</code><code className="text-cyan-400">name</code> <code className="text-pink-400">=</code> <code className="text-cyan-400">name</code></div>
            <div className="ml-4 mb-2"><code className="text-purple-400">def</code> <code className="text-green-400">bark</code><code className="text-zinc-400">(</code><code className="text-cyan-400">self</code><code className="text-zinc-400">):</code></div>
            <div className="ml-8"><code className="text-green-400">print</code><code className="text-zinc-400">(</code><code className="text-yellow-400">f&quot;</code><code className="text-zinc-400">{'{'}</code><code className="text-cyan-400">self</code><code className="text-zinc-400">.</code><code className="text-cyan-400">name</code><code className="text-zinc-400">{'}'}</code><code className="text-yellow-400"> says Woof!&quot;</code><code className="text-zinc-400">)</code></div>
          </div>
        </div>

        <div>
          <h3 className="text-xl text-cyan-400 mb-3">Accessing Attributes</h3>
          <p className="text-zinc-300 leading-relaxed mb-4">
            You can access an object's attributes using dot notation.
          </p>
          <div className="bg-zinc-950 rounded-lg p-4 font-mono text-sm border border-zinc-800">
            <div className="mb-2"><code className="text-cyan-400">my_dog</code> <code className="text-pink-400">=</code> <code className="text-cyan-400">Dog</code><code className="text-zinc-400">(</code><code className="text-yellow-400">"Buddy"</code><code className="text-zinc-400">)</code></div>
            <div className="mb-2"><code className="text-green-400">print</code><code className="text-zinc-400">(</code><code className="text-cyan-400">my_dog</code><code className="text-zinc-400">.</code><code className="text-cyan-400">name</code><code className="text-zinc-400">)</code>  <code className="text-zinc-500"># Output: Buddy</code></div>
            <div><code className="text-cyan-400">my_dog</code><code className="text-zinc-400">.</code><code className="text-green-400">bark</code><code className="text-zinc-400">()</code>  <code className="text-zinc-500"># Output: Buddy says Woof!</code></div>
          </div>
        </div>

        <VisualDiagram type="methods" />
      </div>

      <CodeEditor
        title="Coding Challenge: Add a Method"
        description="Create a class 'Calculator' with a method 'add' that takes two parameters and returns their sum"
        initialCode="# Create your Calculator class below\n"
        expectedOutput="class Calculator:\n    def add(self, a, b):\n        return a + b"
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

function InheritanceSection({ onComplete, onNext }: { onComplete: () => void; onNext: () => void }) {
  const [codingComplete, setCodingComplete] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl mb-4 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
          Inheritance
        </h1>
        <p className="text-zinc-400">Reuse code by creating child classes</p>
      </div>

      <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-8 space-y-6">
        <div>
          <h3 className="text-xl text-green-400 mb-3">What is Inheritance?</h3>
          <p className="text-zinc-300 leading-relaxed">
            Inheritance allows you to create a new class based on an existing class. The new class (child) 
            inherits attributes and methods from the existing class (parent), promoting code reuse.
          </p>
        </div>

        <div className="bg-zinc-950 rounded-lg p-4 font-mono text-sm border border-zinc-800">
          <div className="mb-2"><code className="text-purple-400">class</code> <code className="text-cyan-400">Animal</code><code className="text-zinc-400">:</code></div>
          <div className="ml-4 mb-2"><code className="text-purple-400">def</code> <code className="text-green-400">__init__</code><code className="text-zinc-400">(</code><code className="text-cyan-400">self</code><code className="text-zinc-400">, </code><code className="text-cyan-400">name</code><code className="text-zinc-400">):</code></div>
          <div className="ml-8 mb-3"><code className="text-cyan-400">self</code><code className="text-zinc-400">.</code><code className="text-cyan-400">name</code> <code className="text-pink-400">=</code> <code className="text-cyan-400">name</code></div>
          <div className="mb-3"></div>
          <div className="mb-2"><code className="text-purple-400">class</code> <code className="text-cyan-400">Dog</code><code className="text-zinc-400">(</code><code className="text-cyan-400">Animal</code><code className="text-zinc-400">):</code></div>
          <div className="ml-4 mb-2"><code className="text-purple-400">def</code> <code className="text-green-400">bark</code><code className="text-zinc-400">(</code><code className="text-cyan-400">self</code><code className="text-zinc-400">):</code></div>
          <div className="ml-8"><code className="text-green-400">print</code><code className="text-zinc-400">(</code><code className="text-yellow-400">"Woof!"</code><code className="text-zinc-400">)</code></div>
        </div>

        <VisualDiagram type="inheritance" />

        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
          <h4 className="text-blue-400 mb-2">Benefits of Inheritance</h4>
          <ul className="text-zinc-300 space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
              <span>Code reusability - Don't repeat yourself</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
              <span>Logical hierarchy - Model real-world relationships</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
              <span>Easier maintenance - Update parent class affects all children</span>
            </li>
          </ul>
        </div>
      </div>

      <CodeEditor
        title="Coding Challenge: Create Inheritance"
        description="Create a parent class 'Vehicle' with attribute 'brand', and a child class 'Car' that inherits from Vehicle"
        initialCode="# Create your classes below\n"
        expectedOutput="class Vehicle:\n    def __init__(self, brand):\n        self.brand = brand\n\nclass Car(Vehicle):\n    pass"
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
        <p className="text-zinc-400">Test your understanding of OOP concepts</p>
      </div>

      <div className="space-y-6">
        <TheoryQuestion
          question="What is the purpose of the __init__ method in a Python class?"
          options={[
            "To initialize object attributes when an object is created",
            "To delete an object",
            "To print object information",
            "To inherit from parent class"
          ]}
          correctIndex={0}
          explanation="The __init__ method is a constructor that initializes an object's attributes when the object is created. It's automatically called when you create a new instance."
          onCorrect={() => {}}
        />

        <TheoryQuestion
          question="What does 'self' represent in a class method?"
          options={[
            "The class itself",
            "The current instance of the class",
            "A global variable",
            "The parent class"
          ]}
          correctIndex={1}
          explanation="'self' refers to the current instance of the class. It's used to access attributes and methods of the object."
          onCorrect={() => {}}
        />

        <TheoryQuestion
          question="Which OOP principle allows a child class to inherit properties from a parent class?"
          options={[
            "Encapsulation",
            "Polymorphism",
            "Inheritance",
            "Abstraction"
          ]}
          correctIndex={2}
          explanation="Inheritance is the OOP principle that allows a child class to inherit attributes and methods from a parent class, promoting code reuse."
          onCorrect={() => {
            setQuizComplete(true);
          }}
        />
      </div>

      <CodeEditor
        title="Final Coding Challenge"
        description="Create a class 'Student' with attributes 'name' and 'grade', and a method 'display_info' that prints the student information"
        initialCode="# Write your code below\n"
        expectedOutput="class Student:\n    def __init__(self, name, grade):\n        self.name = name\n        self.grade = grade\n    def display_info(self):\n        print(f'{self.name} - Grade: {self.grade}')"
        onSuccess={() => {
          setCodingComplete(true);
        }}
      />

      {allComplete && (
        <div className="bg-gradient-to-r from-green-500/20 to-purple-500/20 border border-green-500/30 rounded-xl p-8 text-center">
          <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto mb-4" />
          <h3 className="text-2xl mb-3 text-green-400">Excellent Work!</h3>
          <p className="text-zinc-300 mb-6">
            You've mastered the fundamentals of Object-Oriented Programming in Python. You now understand 
            classes, objects, methods, and inheritance.
          </p>
          <button
            onClick={onComplete}
            className="px-8 py-3 bg-gradient-to-r from-green-500 to-purple-500 hover:from-green-400 hover:to-purple-400 text-white rounded-lg transition-all"
          >
            Mark as Complete
          </button>
        </div>
      )}
    </div>
  );
}
