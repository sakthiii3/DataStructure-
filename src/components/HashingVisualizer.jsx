import { useState } from 'react';

export default function HashingVisualizer() {
  const [hashTable, setHashTable] = useState(Array(10).fill(null));
  const [inputValue, setInputValue] = useState('');

  const handleHash = () => {
    const val = parseInt(inputValue);
    if (isNaN(val)) return;

    let index = val % 10;
    const newTable = [...hashTable];
    
    // Linear Probing
    let start = index;
    while (newTable[index] !== null) {
      index = (index + 1) % 10;
      if (index === start) {
        alert("Hash Table Full!");
        return;
      }
    }
    
    newTable[index] = val;
    setHashTable(newTable);
    setInputValue('');
  };

  return (
    <div>
      <h2 style={{ marginBottom: '16px' }}>Hash Table (Linear Probing)</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
        Hash Function: <code>value % 10</code>. If a collision occurs, it probes linearly to the next slot.
      </p>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
        <input
          type="number"
          className="input-field"
          placeholder="Enter a number..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleHash()}
        />
        <button className="btn btn-accent" onClick={handleHash}>Insert</button>
      </div>

      <div className="visualizer-container" style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {hashTable.map((item, index) => (
          <div key={index} style={{ margin: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div 
              style={{
                width: '60px', height: '60px', 
                border: '2px solid var(--border)', 
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: item ? 'var(--primary)' : 'transparent',
                borderRadius: '8px', fontWeight: 'bold', fontSize: '1.2rem'
              }}
              className={item ? "animate-pop-in" : ""}
            >
              {item || '-'}
            </div>
            <div style={{ marginTop: '4px', color: 'var(--text-muted)' }}>{index}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
