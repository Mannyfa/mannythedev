import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    {
      command: '',
      output: 'Welcome to MannyOS v1.0.0. Type "help" to see available commands.',
      id: 'init'
    }
  ]);
  
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom when history updates
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // Focus input when clicking anywhere on the terminal
  const focusInput = () => {
    inputRef.current?.focus();
  };

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const trimmedCmd = input.trim();
      const lowerCmd = trimmedCmd.toLowerCase();
      let newOutput = '';

      // Command Logic Parser
      if (lowerCmd === 'clear') {
        setHistory([]);
        setInput('');
        return;
      }

      switch (lowerCmd) {
        case 'help':
          newOutput = (
            <div className="flex flex-col gap-1">
              <span>Available commands:</span>
              <span className="text-ice-300">whoami  - Display profile info</span>
              <span className="text-ice-300">skills  - List technical stack</span>
              <span className="text-ice-300">clear   - Clear the terminal</span>
              <span className="text-ice-300">date    - Show current date</span>
              <span className="text-ice-300">sudo    - Execute with root privileges</span>
              <span className="text-ice-300">cat resume.pdf - Open resume</span>
            </div>
          );
          break;
        case 'whoami':
          newOutput = 'Manny - Senior Frontend Engineer. Builder of digital experiences.';
          break;
        case 'skills':
          newOutput = 'React, TypeScript, Tailwind CSS, Framer Motion, Node.js, Next.js, Figma.';
          break;
        case 'date':
          newOutput = new Date().toString();
          break;
        case 'sudo':
          newOutput = 'Nice try. Permission denied. This incident will be reported.';
          break;
        case 'cat resume.pdf':
          newOutput = 'Opening resume... (If this were live, a PDF would download right now!)';
          // In a real app, you could do: window.open('/resume.pdf', '_blank');
          break;
        case '':
          newOutput = '';
          break;
        default:
          newOutput = `Command not found: ${trimmedCmd}. Type 'help' for a list of commands.`;
      }

      // Append to history
      setHistory((prev) => [
        ...prev,
        { command: trimmedCmd, output: newOutput, id: Date.now() }
      ]);
      
      // Clear input
      setInput('');
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="w-full max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-black/80 font-mono text-sm shadow-2xl backdrop-blur-md"
    >
      {/* Terminal Window Header (Mac Style) */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
        <span className="ml-2 text-xs text-slate-400">manny@portfolio:~</span>
      </div>

      {/* Terminal Body */}
      <div 
        className="h-64 overflow-y-auto p-4 text-slate-300"
        onClick={focusInput}
      >
        {/* Render History */}
        {history.map((entry) => (
          <div key={entry.id} className="mb-2">
            {entry.command && (
              <div className="flex items-center gap-2">
                <span className="text-green-400">manny@portfolio:~$</span>
                <span>{entry.command}</span>
              </div>
            )}
            {entry.output && <div className="mt-1 text-slate-400">{entry.output}</div>}
          </div>
        ))}

        {/* Active Input Line */}
        <div className="flex items-center gap-2">
          <span className="text-green-400">manny@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            autoComplete="off"
            spellCheck="false"
            autoFocus
            className="flex-1 bg-transparent text-slate-300 outline-none focus:ring-0 border-none p-0 m-0"
          />
        </div>
        
        {/* Invisible div to scroll to */}
        <div ref={bottomRef} />
      </div>
    </motion.div>
  );
}