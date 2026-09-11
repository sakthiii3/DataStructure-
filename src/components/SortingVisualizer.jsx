import { useState } from 'react';

export default function SortingVisualizer() {
  const [array, setArray] = useState([64, 34, 25, 12, 22, 11, 90]);
  const [isSorting, setIsSorting] = useState(false);
  const [activeIndices, setActiveIndices] = useState([]);

  const bubbleSort = async () => {
    if (isSorting) return;
    setIsSorting(true);
    let arr = [...array];
    let n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        setActiveIndices([j, j + 1]);
        await new Promise(r => setTimeout(r, 400));
        
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          setArray([...arr]);
          await new Promise(r => setTimeout(r, 400));
        }
      }
    }
    setActiveIndices([]);
    setIsSorting(false);
  };

  const resetArray = () => {
    setArray([64, 34, 25, 12, 22, 11, 90]);
  };

  return (
    <div>
      <h2 style={{ marginBottom: '16px' }}>Sorting Animation (Bubble Sort)</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
        Bubble sort repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. O(n^2).
      </p>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
        <button className="btn btn-accent" onClick={bubbleSort} disabled={isSorting}>
          Start Bubble Sort
        </button>
        <button className="btn" onClick={resetArray} disabled={isSorting}>
          Reset Array
        </button>
      </div>

      <div className="visualizer-container" style={{ flexDirection: 'row', alignItems: 'flex-end', height: '200px' }}>
        {array.map((item, i) => (
          <div
            key={i}
            style={{
              width: '40px',
              height: `${item * 2}px`,
              background: activeIndices.includes(i) ? 'var(--danger)' : 'var(--primary)',
              margin: '0 4px',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              color: 'white',
              paddingBottom: '8px',
              fontWeight: 'bold',
              transition: 'all 0.3s ease'
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
