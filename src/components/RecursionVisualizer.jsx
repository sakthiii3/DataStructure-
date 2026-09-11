import { useState } from 'react';

export default function RecursionVisualizer() {
  const [callStack, setCallStack] = useState([]);
  const [isRunning, setIsRunning] = useState(false);

  const calculateFactorial = async () => {
    if (isRunning) return;
    setIsRunning(true);
    setCallStack([]);

    const num = 5;
    let stack = [];

    // Simulate pushing to call stack
    for (let i = num; i > 0; i--) {
      stack.unshift(`factorial(${i})`);
      setCallStack([...stack]);
      await new Promise(r => setTimeout(r, 600));
    }
    
    // Simulate popping and returning
    for (let i = 1; i <= num; i++) {
      stack.shift();
      setCallStack([...stack]);
      await new Promise(r => setTimeout(r, 600));
    }

    setIsRunning(false);
  };

  return (
    <div>
      <h2 style={{ marginBottom: '16px' }}>Recursion Call Stack (Factorial 5)</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
        Visualizes how recursive function calls are pushed onto the call stack and then popped as they return.
      </p>

      <button className="btn btn-accent" onClick={calculateFactorial} disabled={isRunning} style={{ marginBottom: '24px' }}>
        Animate Factorial(5)
      </button>

      <div className="visualizer-container" style={{ borderBottom: '4px solid var(--border)' }}>
        {callStack.length === 0 && !isRunning && <div style={{ color: 'var(--text-muted)' }}>Call stack is empty</div>}
        {callStack.map((call, index) => (
          <div key={index} className="data-block animate-pop-in" style={{ background: 'var(--accent)', width: '200px' }}>
            {call}
          </div>
        ))}
      </div>
    </div>
  );
}
