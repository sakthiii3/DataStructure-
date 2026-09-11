import { useState } from 'react';

export default function QueueVisualizer() {
  const [queue, setQueue] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleEnqueue = () => {
    if (inputValue.trim() === '') return;
    if (queue.length >= 8) {
      alert("Queue Full! Maximum 8 elements allowed.");
      return;
    }
    setQueue([...queue, inputValue]);
    setInputValue('');
  };

  const handleDequeue = () => {
    if (queue.length === 0) {
      alert("Queue Empty!");
      return;
    }
    const newQueue = [...queue];
    newQueue.shift();
    setQueue(newQueue);
  };

  return (
    <div>
      <h2 style={{ marginBottom: '16px' }}>Queue (FIFO)</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
        A Queue follows the First-In-First-Out (FIFO) principle.
      </p>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
        <input
          type="text"
          className="input-field"
          placeholder="Enter value..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleEnqueue()}
        />
        <button className="btn btn-accent" onClick={handleEnqueue}>Enqueue</button>
        <button className="btn btn-danger" onClick={handleDequeue}>Dequeue</button>
      </div>

      <div className="visualizer-container" style={{ flexDirection: 'row', justifyContent: 'flex-start', overflowX: 'auto' }}>
        {queue.length === 0 && <div style={{ color: 'var(--text-muted)', margin: 'auto' }}>Queue is empty</div>}
        {queue.map((item, index) => (
          <div key={index} className="data-block animate-pop-in" style={{ margin: '0 8px' }}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
