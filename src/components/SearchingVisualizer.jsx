import { useState } from 'react';

export default function SearchingVisualizer() {
  const [array] = useState([12, 34, 45, 56, 78, 89, 90]);
  const [target, setTarget] = useState('');
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [foundIndex, setFoundIndex] = useState(-1);
  const [isSearching, setIsSearching] = useState(false);

  const startLinearSearch = async () => {
    if (isSearching || target === '') return;
    setIsSearching(true);
    setFoundIndex(-1);
    
    const targetNum = parseInt(target);
    for (let i = 0; i < array.length; i++) {
      setCurrentIndex(i);
      await new Promise(r => setTimeout(r, 600)); // Sleep 600ms
      if (array[i] === targetNum) {
        setFoundIndex(i);
        break;
      }
    }
    setTimeout(() => {
        setIsSearching(false);
        setCurrentIndex(-1);
    }, 1000);
  };

  return (
    <div>
      <h2 style={{ marginBottom: '16px' }}>Linear Search Animation</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
        Iterates through the array block-by-block until the target is found. O(n) complexity.
      </p>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
        <input
          type="number"
          className="input-field"
          placeholder="Target value..."
          value={target}
          onChange={(e) => setTarget(e.target.value)}
        />
        <button className="btn btn-accent" onClick={startLinearSearch} disabled={isSearching}>
          Start Search
        </button>
      </div>

      <div className="visualizer-container" style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {array.map((item, i) => (
          <div
            key={i}
            className="data-block"
            style={{
              background: foundIndex === i 
                ? 'var(--success)' 
                : currentIndex === i 
                  ? 'var(--danger)' 
                  : 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
              transform: currentIndex === i ? 'scale(1.1)' : 'scale(1)',
              transition: 'all 0.3s'
            }}
          >
            {item}
          </div>
        ))}
      </div>
      
      {foundIndex !== -1 && (
        <p style={{ color: 'var(--success)', marginTop: '16px', fontWeight: 'bold' }}>
          Found {target} at index {foundIndex}!
        </p>
      )}
    </div>
  );
}
