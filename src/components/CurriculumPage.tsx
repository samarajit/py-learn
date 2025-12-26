import { useState } from 'react';
import { ArrowLeft, BookOpen, Box, Database, Sparkles, FileCode, Star } from 'lucide-react';
import { PageType } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CurriculumPageProps {
  onNavigate: (page: PageType) => void;
}

const topics = [
  {
    id: 'basics' as PageType,
    title: 'Python Basics',
    description: 'Master the fundamentals of Python programming',
    icon: BookOpen,
    color: 'cyan',
    image: 'https://images.unsplash.com/photo-1667372531881-6f975b1c86db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxweXRob24lMjBwcm9ncmFtbWluZyUyMGNvZGV8ZW58MXx8fHwxNzYyMDIzMDEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    topics: ['Variables & Data Types', 'Operators', 'Control Flow', 'Functions', 'Print Statements'],
    level: 'Beginner',
    duration: '2-3 hours'
  },
  {
    id: 'oop' as PageType,
    title: 'Object-Oriented Programming',
    description: 'Learn to write organized and reusable code',
    icon: Box,
    color: 'purple',
    image: 'https://images.unsplash.com/photo-1653164521873-d4409facdf9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMHNoYXBlc3xlbnwxfHx8fDE3NjIwMTk4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    topics: ['Classes & Objects', 'Methods', 'Inheritance', 'Encapsulation', 'Polymorphism'],
    level: 'Intermediate',
    duration: '3-4 hours'
  },
  {
    id: 'dsa' as PageType,
    title: 'Data Structures & Algorithms',
    description: 'Efficient problem-solving with DSA',
    icon: Database,
    color: 'pink',
    image: 'https://images.unsplash.com/photo-1761039232971-bb55a290762c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwZGF0YSUyMHN0cnVjdHVyZXxlbnwxfHx8fDE3NjIwNjQzMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    topics: ['Lists & Arrays', 'Stacks & Queues', 'Searching', 'Sorting', 'Big O Notation'],
    level: 'Intermediate',
    duration: '4-5 hours'
  },
  {
    id: 'advanced-dsa' as PageType,
    title: 'Advanced DSA',
    description: 'Master complex data structures and algorithms',
    icon: Sparkles,
    color: 'orange',
    image: 'https://images.unsplash.com/photo-1664854953181-b12e6dda8b7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbGdvcml0aG0lMjBjb21wbGV4aXR5JTIwZ3JhcGh8ZW58MXx8fHwxNzYyMDY2MTAxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    topics: ['Trees & Graphs', 'Dynamic Programming', 'Recursion', 'Hash Tables', 'Advanced Sorting'],
    level: 'Advanced',
    duration: '5-6 hours'
  },
  {
    id: 'clean-code' as PageType,
    title: 'Clean Code Principles',
    description: 'Write maintainable and readable code',
    icon: FileCode,
    color: 'green',
    image: 'https://images.unsplash.com/photo-1606567111509-3989810b24f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1pbmltYWwlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyMDY2MTAyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    topics: ['Naming Conventions', 'Code Organization', 'DRY Principle', 'Comments & Documentation', 'Refactoring'],
    level: 'Intermediate',
    duration: '3-4 hours'
  },
  {
    id: 'best-practices' as PageType,
    title: 'Python Best Practices',
    description: 'Professional development standards',
    icon: Star,
    color: 'blue',
    image: 'https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYxOTcwNjczfDA&ixlib=rb-4.1.0&q=80&w=1080',
    topics: ['PEP 8 Standards', 'Error Handling', 'Testing', 'Virtual Environments', 'Code Review'],
    level: 'Intermediate',
    duration: '3-4 hours'
  }
];

export default function CurriculumPage({ onNavigate }: CurriculumPageProps) {
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

      <div className="container mx-auto px-6 py-16">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Course Curriculum
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Choose your learning path. Each module is designed to build your Python skills progressively.
          </p>
        </div>

        {/* Topic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {topics.map((topic) => (
            <TopicCard key={topic.id} topic={topic} onNavigate={onNavigate} />
          ))}
        </div>

        {/* Learning Path Info */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl mb-6 text-center">Recommended Learning Path</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4">
              <div className="px-4 md:px-6 py-2 md:py-3 bg-cyan-500/20 border border-cyan-500/30 rounded-lg text-center">
                <span className="text-cyan-400 text-sm md:text-base">1. Basics</span>
              </div>
              <div className="text-zinc-500 text-xl md:text-2xl rotate-90 md:rotate-0">→</div>
              <div className="px-4 md:px-6 py-2 md:py-3 bg-purple-500/20 border border-purple-500/30 rounded-lg text-center">
                <span className="text-purple-400 text-sm md:text-base">2. OOP</span>
              </div>
              <div className="text-zinc-500 text-xl md:text-2xl rotate-90 md:rotate-0">→</div>
              <div className="px-4 md:px-6 py-2 md:py-3 bg-pink-500/20 border border-pink-500/30 rounded-lg text-center">
                <span className="text-pink-400 text-sm md:text-base">3. DSA</span>
              </div>
              <div className="text-zinc-500 text-xl md:text-2xl rotate-90 md:rotate-0">→</div>
              <div className="px-4 md:px-6 py-2 md:py-3 bg-orange-500/20 border border-orange-500/30 rounded-lg text-center">
                <span className="text-orange-400 text-sm md:text-base">4. Advanced</span>
              </div>
            </div>
            <p className="text-zinc-400 text-center mt-6 text-sm md:text-base">
              Start with the basics and progress through each module at your own pace. Each topic builds on the previous one.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface TopicCardProps {
  topic: typeof topics[0];
  onNavigate: (page: PageType) => void;
}

function TopicCard({ topic, onNavigate }: TopicCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = topic.icon;
  
  const colorClasses = {
    cyan: {
      border: 'border-cyan-500/30',
      bg: 'bg-cyan-500/10',
      text: 'text-cyan-400',
      hover: 'hover:border-cyan-500/50',
      gradient: 'from-cyan-500/20 to-cyan-500/5'
    },
    purple: {
      border: 'border-purple-500/30',
      bg: 'bg-purple-500/10',
      text: 'text-purple-400',
      hover: 'hover:border-purple-500/50',
      gradient: 'from-purple-500/20 to-purple-500/5'
    },
    pink: {
      border: 'border-pink-500/30',
      bg: 'bg-pink-500/10',
      text: 'text-pink-400',
      hover: 'hover:border-pink-500/50',
      gradient: 'from-pink-500/20 to-pink-500/5'
    },
    orange: {
      border: 'border-orange-500/30',
      bg: 'bg-orange-500/10',
      text: 'text-orange-400',
      hover: 'hover:border-orange-500/50',
      gradient: 'from-orange-500/20 to-orange-500/5'
    },
    green: {
      border: 'border-green-500/30',
      bg: 'bg-green-500/10',
      text: 'text-green-400',
      hover: 'hover:border-green-500/50',
      gradient: 'from-green-500/20 to-green-500/5'
    },
    blue: {
      border: 'border-blue-500/30',
      bg: 'bg-blue-500/10',
      text: 'text-blue-400',
      hover: 'hover:border-blue-500/50',
      gradient: 'from-blue-500/20 to-blue-500/5'
    }
  }[topic.color];

  return (
    <div 
      className="flip-card-container group perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`flip-card-inner relative w-full h-96 transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front of Card - Image */}
        <div className="flip-card-face flip-card-front absolute inset-0 backface-hidden rounded-2xl overflow-hidden border border-zinc-800">
          <div className="relative w-full h-full">
            <ImageWithFallback
              src={topic.image}
              alt={topic.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
              <div className={`inline-flex items-center gap-2 px-3 py-1 ${colorClasses.bg} ${colorClasses.border} border rounded-full mb-3`}>
                <Icon className={`w-4 h-4 ${colorClasses.text}`} />
                <span className={`text-xs md:text-sm ${colorClasses.text}`}>{topic.level}</span>
              </div>
              <h3 className="text-xl md:text-2xl mb-2">{topic.title}</h3>
              <p className="text-zinc-400 text-xs md:text-sm">Tap or hover to see details</p>
            </div>
          </div>
        </div>

        {/* Back of Card - Details */}
        <div className={`flip-card-face flip-card-back absolute inset-0 backface-hidden rounded-2xl border ${colorClasses.border} bg-gradient-to-br ${colorClasses.gradient} backdrop-blur-sm rotate-y-180 p-4 md:p-6 flex flex-col`}>
          <div className="flex items-start justify-between mb-4">
            <div className={`w-10 h-10 md:w-12 md:h-12 ${colorClasses.bg} rounded-xl flex items-center justify-center`}>
              <Icon className={`w-5 h-5 md:w-6 md:h-6 ${colorClasses.text}`} />
            </div>
            <div className={`px-2 md:px-3 py-1 bg-zinc-950 border ${colorClasses.border} rounded-full text-xs ${colorClasses.text}`}>
              {topic.duration}
            </div>
          </div>

          <h3 className={`text-xl md:text-2xl mb-2 ${colorClasses.text}`}>{topic.title}</h3>
          <p className="text-zinc-300 mb-4 text-xs md:text-sm">{topic.description}</p>

          <div className="flex-1">
            <h4 className="text-xs md:text-sm text-zinc-400 mb-3">What you'll learn:</h4>
            <ul className="space-y-2">
              {topic.topics.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-xs md:text-sm text-zinc-300">
                  <div className={`w-1.5 h-1.5 ${colorClasses.bg} rounded-full mt-1.5 flex-shrink-0`}></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(topic.id);
            }}
            className={`w-full py-2 md:py-3 text-sm md:text-base bg-gradient-to-r ${colorClasses.gradient} border ${colorClasses.border} ${colorClasses.text} rounded-lg transition-all hover:scale-105 mt-4`}
          >
            Start Learning
          </button>
        </div>
      </div>
    </div>
  );
}
