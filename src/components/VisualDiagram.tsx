interface VisualDiagramProps {
  type: 'pythonUses' | 'variables' | 'operators' | 'print' | 'oopConcept' | 'classObject' | 'methods' | 'inheritance' | 'dsaImportance' | 'lists' | 'stackQueue' | 'searching';
}

export default function VisualDiagram({ type }: VisualDiagramProps) {
  if (type === 'pythonUses') {
    return (
      <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6">
        <h4 className="text-center text-zinc-400 mb-6">Python Applications</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/30 rounded-xl flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <p className="text-sm text-zinc-300">Web Dev</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/30 rounded-xl flex items-center justify-center">
              <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <p className="text-sm text-zinc-300">Data Science</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-pink-500/20 to-pink-500/5 border border-pink-500/30 rounded-xl flex items-center justify-center">
              <svg className="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-sm text-zinc-300">AI/ML</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-green-500/20 to-green-500/5 border border-green-500/30 rounded-xl flex items-center justify-center">
              <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <p className="text-sm text-zinc-300">Automation</p>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'variables') {
    return (
      <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6">
        <h4 className="text-center text-zinc-400 mb-6">How Variables Work</h4>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <div className="text-center">
            <div className="px-6 py-4 bg-purple-500/20 border-2 border-purple-500/40 rounded-lg mb-2">
              <code className="text-purple-400">name</code>
            </div>
            <div className="text-sm text-zinc-500">Variable Name</div>
          </div>
          <div className="text-pink-400 text-2xl">=</div>
          <div className="text-center">
            <div className="px-6 py-4 bg-yellow-500/20 border-2 border-yellow-500/40 rounded-lg mb-2">
              <code className="text-yellow-400">"Alice"</code>
            </div>
            <div className="text-sm text-zinc-500">Value Stored</div>
          </div>
        </div>
        <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg text-center">
          <p className="text-sm text-zinc-300">
            The variable <code className="text-purple-400">name</code> now contains the value <code className="text-yellow-400">"Alice"</code>
          </p>
        </div>
      </div>
    );
  }

  if (type === 'operators') {
    return (
      <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6">
        <h4 className="text-center text-zinc-400 mb-6">Operator Priority</h4>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-sm">1</div>
            <div className="flex-1 p-3 bg-zinc-900 rounded-lg border border-zinc-700">
              <span className="text-zinc-300">Parentheses: <code className="text-pink-400">()</code></span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-sm">2</div>
            <div className="flex-1 p-3 bg-zinc-900 rounded-lg border border-zinc-700">
              <span className="text-zinc-300">Multiplication & Division: <code className="text-pink-400">* / // %</code></span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-sm">3</div>
            <div className="flex-1 p-3 bg-zinc-900 rounded-lg border border-zinc-700">
              <span className="text-zinc-300">Addition & Subtraction: <code className="text-pink-400">+ -</code></span>
            </div>
          </div>
        </div>
        <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
          <p className="text-sm text-zinc-300">Example: <code className="text-cyan-400">2 + 3 * 4</code> = <code className="text-green-400">14</code> (not 20)</p>
        </div>
      </div>
    );
  }

  if (type === 'print') {
    return (
      <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6">
        <h4 className="text-center text-zinc-400 mb-6">How Print Works</h4>
        <div className="flex flex-col items-center gap-4">
          <div className="w-full max-w-md p-4 bg-cyan-500/20 border-2 border-cyan-500/40 rounded-lg">
            <code className="text-cyan-400">print("Hello")</code>
          </div>
          <div className="text-cyan-400 text-2xl">↓</div>
          <div className="w-full max-w-md p-4 bg-green-500/20 border-2 border-green-500/40 rounded-lg text-center">
            <span className="text-green-400">Console Output</span>
            <div className="mt-2 p-3 bg-zinc-950 rounded font-mono text-sm text-white">
              Hello
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'oopConcept') {
    return (
      <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6">
        <h4 className="text-center text-zinc-400 mb-6">OOP Building Blocks</h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg text-center">
            <div className="text-3xl mb-2">📦</div>
            <div className="text-purple-400">Class</div>
            <div className="text-xs text-zinc-400 mt-1">Blueprint</div>
          </div>
          <div className="p-4 bg-pink-500/10 border border-pink-500/30 rounded-lg text-center">
            <div className="text-3xl mb-2">🎁</div>
            <div className="text-pink-400">Object</div>
            <div className="text-xs text-zinc-400 mt-1">Instance</div>
          </div>
          <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-center">
            <div className="text-3xl mb-2">🏷️</div>
            <div className="text-cyan-400">Attributes</div>
            <div className="text-xs text-zinc-400 mt-1">Properties</div>
          </div>
          <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-center">
            <div className="text-3xl mb-2">⚙️</div>
            <div className="text-green-400">Methods</div>
            <div className="text-xs text-zinc-400 mt-1">Behaviors</div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'classObject') {
    return (
      <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6">
        <h4 className="text-center text-zinc-400 mb-6">Class vs Object</h4>
        <div className="flex items-center justify-center gap-6 flex-wrap">
          <div className="text-center">
            <div className="w-32 h-32 bg-purple-500/20 border-2 border-purple-500/40 rounded-lg flex items-center justify-center mb-3">
              <div className="text-center">
                <div className="text-purple-400 mb-1">Dog Class</div>
                <div className="text-xs text-zinc-400">name</div>
                <div className="text-xs text-zinc-400">age</div>
              </div>
            </div>
            <div className="text-sm text-purple-400">Blueprint</div>
          </div>
          <div className="text-pink-400 text-2xl">→</div>
          <div className="space-y-3">
            <div className="w-32 h-20 bg-pink-500/20 border-2 border-pink-500/40 rounded-lg flex items-center justify-center">
              <div className="text-center text-xs">
                <div className="text-pink-400">Buddy</div>
                <div className="text-zinc-400">age: 3</div>
              </div>
            </div>
            <div className="w-32 h-20 bg-pink-500/20 border-2 border-pink-500/40 rounded-lg flex items-center justify-center">
              <div className="text-center text-xs">
                <div className="text-pink-400">Max</div>
                <div className="text-zinc-400">age: 5</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'methods') {
    return (
      <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6">
        <h4 className="text-center text-zinc-400 mb-6">Object with Methods</h4>
        <div className="max-w-sm mx-auto p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg">
          <div className="text-center mb-4">
            <div className="text-xl text-purple-400 mb-2">Dog Object</div>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-zinc-950 rounded-lg border border-cyan-500/30">
              <div className="text-cyan-400 text-sm mb-1">Attributes</div>
              <div className="text-xs text-zinc-300">name: "Buddy"</div>
              <div className="text-xs text-zinc-300">age: 3</div>
            </div>
            <div className="p-3 bg-zinc-950 rounded-lg border border-green-500/30">
              <div className="text-green-400 text-sm mb-1">Methods</div>
              <div className="text-xs text-zinc-300">bark()</div>
              <div className="text-xs text-zinc-300">sit()</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'inheritance') {
    return (
      <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6">
        <h4 className="text-center text-zinc-400 mb-6">Inheritance Hierarchy</h4>
        <div className="flex flex-col items-center gap-4">
          <div className="w-48 p-4 bg-blue-500/20 border-2 border-blue-500/40 rounded-lg text-center">
            <div className="text-blue-400">Animal</div>
            <div className="text-xs text-zinc-400 mt-1">name, age</div>
          </div>
          <div className="text-blue-400 text-2xl">↓</div>
          <div className="flex gap-4">
            <div className="w-40 p-4 bg-green-500/20 border-2 border-green-500/40 rounded-lg text-center">
              <div className="text-green-400">Dog</div>
              <div className="text-xs text-zinc-400 mt-1">bark()</div>
            </div>
            <div className="w-40 p-4 bg-purple-500/20 border-2 border-purple-500/40 rounded-lg text-center">
              <div className="text-purple-400">Cat</div>
              <div className="text-xs text-zinc-400 mt-1">meow()</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'dsaImportance') {
    return (
      <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6">
        <h4 className="text-center text-zinc-400 mb-6">DSA Performance Impact</h4>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-24 text-sm text-zinc-400">Bad Choice</div>
            <div className="flex-1 h-8 bg-red-500/20 border border-red-500/30 rounded relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-xs text-red-400">Slow & Inefficient</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-24 text-sm text-zinc-400">Good Choice</div>
            <div className="flex-1 h-8 bg-green-500/20 border border-green-500/30 rounded relative overflow-hidden">
              <div className="w-1/3 h-full bg-green-500/40"></div>
              <div className="absolute inset-0 flex items-center justify-center text-xs text-green-400">Fast & Efficient</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'lists') {
    return (
      <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6">
        <h4 className="text-center text-zinc-400 mb-6">List Structure</h4>
        <div className="flex justify-center gap-2">
          {['apple', 'banana', 'cherry'].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-24 h-20 bg-purple-500/20 border-2 border-purple-500/40 rounded-lg flex items-center justify-center mb-2">
                <span className="text-sm text-purple-400">{item}</span>
              </div>
              <div className="text-xs text-zinc-500">index {index}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === 'stackQueue') {
    return (
      <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="text-center">
            <h4 className="text-cyan-400 mb-4">Stack - LIFO</h4>
            <div className="space-y-2 flex flex-col-reverse">
              <div className="h-12 bg-cyan-500/20 border border-cyan-500/40 rounded flex items-center justify-center text-sm">Item 1</div>
              <div className="h-12 bg-cyan-500/20 border border-cyan-500/40 rounded flex items-center justify-center text-sm">Item 2</div>
              <div className="h-12 bg-cyan-500/30 border-2 border-cyan-500/60 rounded flex items-center justify-center text-sm">Item 3 ← Top</div>
            </div>
          </div>
          <div className="text-center">
            <h4 className="text-pink-400 mb-4">Queue - FIFO</h4>
            <div className="space-y-2">
              <div className="h-12 bg-pink-500/30 border-2 border-pink-500/60 rounded flex items-center justify-center text-sm">Item 1 ← Front</div>
              <div className="h-12 bg-pink-500/20 border border-pink-500/40 rounded flex items-center justify-center text-sm">Item 2</div>
              <div className="h-12 bg-pink-500/20 border border-pink-500/40 rounded flex items-center justify-center text-sm">Item 3</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'searching') {
    return (
      <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6">
        <h4 className="text-center text-zinc-400 mb-6">Binary Search Visualization</h4>
        <div className="space-y-4">
          <div className="flex justify-center gap-1">
            {[1, 3, 5, 7, 9, 11, 13].map((num, idx) => (
              <div
                key={idx}
                className={`w-12 h-12 border-2 rounded flex items-center justify-center text-sm ${
                  idx === 3 ? 'bg-green-500/20 border-green-500/40 text-green-400' : 'bg-zinc-900 border-zinc-700 text-zinc-400'
                }`}
              >
                {num}
              </div>
            ))}
          </div>
          <div className="text-center text-sm text-zinc-400">
            Target: 7 → Found at middle position
          </div>
        </div>
      </div>
    );
  }

  return null;
}
