import { Code2, BookOpen, Lightbulb, Rocket, CheckCircle2, Database, Box } from 'lucide-react';
import { PageType } from '../App';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-hidden">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="w-8 h-8 text-cyan-400" />
            <span className="text-2xl tracking-tight">Py-Learn Web</span>
          </div>
          <button
            onClick={() => onNavigate('basics')}
            className="px-6 py-2 bg-cyan-500 hover:bg-cyan-400 text-zinc-950 rounded-lg transition-colors"
          >
            Start Learning
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-cyan-400">Interactive Python Learning</span>
            </div>
          </div>
          
          <h1 className="text-6xl mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Master Python Programming
          </h1>
          
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            Learn Python from scratch through interactive coding challenges, visual explanations, and hands-on practice. No prior experience needed.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => onNavigate('basics')}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white rounded-lg transition-all transform hover:scale-105"
            >
              Begin Your Journey
            </button>
            <button 
              onClick={() => onNavigate('curriculum')}
              className="px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg border border-zinc-700 transition-colors">
              View Curriculum
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-purple-500/20 rounded-lg rotate-12 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-cyan-500/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 border-2 border-pink-500/20 rounded-lg -rotate-12 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl text-center mb-16">How It Works</h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-colors">
            <div className="w-14 h-14 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6">
              <BookOpen className="w-7 h-7 text-cyan-400" />
            </div>
            <h3 className="text-xl mb-4 text-cyan-400">1. Read & Learn</h3>
            <p className="text-zinc-400">
              Start with clear, concise theory explanations. Each concept is broken down with visual diagrams and real-world examples.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-colors">
            <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
              <Code2 className="w-7 h-7 text-purple-400" />
            </div>
            <h3 className="text-xl mb-4 text-purple-400">2. Code & Practice</h3>
            <p className="text-zinc-400">
              Apply what you learned with interactive coding challenges. Write real Python code and get instant feedback.
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-500/10 to-pink-500/5 border border-pink-500/20 rounded-2xl p-8 hover:border-pink-500/40 transition-colors">
            <div className="w-14 h-14 bg-pink-500/20 rounded-xl flex items-center justify-center mb-6">
              <CheckCircle2 className="w-7 h-7 text-pink-400" />
            </div>
            <h3 className="text-xl mb-4 text-pink-400">3. Test Knowledge</h3>
            <p className="text-zinc-400">
              Verify your understanding with theory questions and practical coding exercises before moving forward.
            </p>
          </div>
        </div>
      </section>

      {/* Instructions Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto bg-zinc-900/50 border border-zinc-800 rounded-2xl p-10">
          <div className="flex items-center gap-3 mb-8">
            <Lightbulb className="w-8 h-8 text-yellow-400" />
            <h2 className="text-3xl">Getting Started Guide</h2>
          </div>

          <div className="space-y-6 text-zinc-300">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                1
              </div>
              <div>
                <h4 className="text-white mb-2">Choose Your Topic</h4>
                <p>Navigate through different Python topics starting with the basics. Each topic builds on previous knowledge.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                2
              </div>
              <div>
                <h4 className="text-white mb-2">Learn Through Theory</h4>
                <p>Read through the theory sections with visual aids. Take your time to understand each concept thoroughly.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                3
              </div>
              <div>
                <h4 className="text-white mb-2">Practice with Code</h4>
                <p>Complete coding challenges by writing actual Python code. Your code will be validated automatically.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                4
              </div>
              <div>
                <h4 className="text-white mb-2">Answer Quiz Questions</h4>
                <p>Test your knowledge with multiple-choice questions. Get immediate feedback on your answers.</p>
              </div>
            </div>
          </div>

          <div className="mt-10 p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
            <h4 className="text-blue-400 mb-2">Pro Tip</h4>
            <p className="text-zinc-300">
              Don't rush through the content. Programming is best learned by doing. Try to solve challenges on your own before checking solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Course Topics Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl text-center mb-16">Learning Path</h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <button
            onClick={() => onNavigate('basics')}
            className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all text-left group"
          >
            <div className="w-14 h-14 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <BookOpen className="w-7 h-7 text-cyan-400" />
            </div>
            <h3 className="text-xl mb-4 text-cyan-400">Python Basics</h3>
            <p className="text-zinc-400 mb-4">
              Master the fundamentals: variables, data types, operators, and control flow.
            </p>
            <div className="text-cyan-400 text-sm">Start Here →</div>
          </button>

          <button
            onClick={() => onNavigate('oop')}
            className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all text-left group"
          >
            <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Box className="w-7 h-7 text-purple-400" />
            </div>
            <h3 className="text-xl mb-4 text-purple-400">Object-Oriented Programming</h3>
            <p className="text-zinc-400 mb-4">
              Learn classes, objects, inheritance, and OOP principles for better code organization.
            </p>
            <div className="text-purple-400 text-sm">Explore →</div>
          </button>

          <button
            onClick={() => onNavigate('dsa')}
            className="bg-gradient-to-br from-pink-500/10 to-pink-500/5 border border-pink-500/20 rounded-2xl p-8 hover:border-pink-500/40 transition-all text-left group"
          >
            <div className="w-14 h-14 bg-pink-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Database className="w-7 h-7 text-pink-400" />
            </div>
            <h3 className="text-xl mb-4 text-pink-400">Data Structures & Algorithms</h3>
            <p className="text-zinc-400 mb-4">
              Master essential data structures and algorithms for efficient problem-solving.
            </p>
            <div className="text-pink-400 text-sm">Dive In →</div>
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <Rocket className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
          <h2 className="text-4xl mb-6">Ready to Start Coding?</h2>
          <p className="text-xl text-zinc-400 mb-8">
            Join thousands of learners mastering Python programming. Your journey begins now.
          </p>
          <button
            onClick={() => onNavigate('basics')}
            className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white rounded-lg transition-all transform hover:scale-105 text-lg"
          >
            Start Learning Python
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-zinc-400 mb-2">Py-Learn Web - Master Python Programming from Scratch</p>
          <p className="text-zinc-500 text-sm">
            Made with love by{' '}
            <a
              href="https://github.com/samarajit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors underline"
            >
              samar
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
