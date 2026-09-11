import { useState } from 'react';

export default function StackVisualizer() {
  const [stack, setStack] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handlePush = () => {
    if (inputValue.trim() === '') return;
    if (stack.length >= 8) {
      alert("Stack Overflow! Maximum 8 elements allowed.");
      return;
    }
    setStack([...stack, inputValue]);
    setInputValue('');
  };

  const handlePop = () => {
    if (stack.length === 0) {
      alert("Stack Underflow! The stack is empty.");
      return;
    }
    const newStack = [...stack];
    newStack.pop();
    setStack(newStack);
  };

  return (
    <div>
      <h2 style={{ marginBottom: '16px' }}>Stack (LIFO)</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
        A Stack follows the Last-In-First-Out (LIFO) principle.
      </p>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
        <input
          type="text"
          className="input-field"
          placeholder="Enter value..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handlePush()}
        />
        <button className="btn btn-accent" onClick={handlePush}>Push</button>
        <button className="btn btn-danger" onClick={handlePop}>Pop</button>
      </div>

      <div className="visualizer-container" style={{ borderBottom: '4px solid var(--border)' }}>
        {stack.length === 0 && <div style={{ color: 'var(--text-muted)' }}>Stack is empty</div>}
        {stack.map((item, index) => (
          <div key={index} className="data-block animate-pop-in">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
