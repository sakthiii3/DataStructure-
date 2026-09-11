import { useState } from 'react';

export default function GraphVisualizer() {
  const [matrix, setMatrix] = useState([
    [0, 1, 0, 1],
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [1, 0, 1, 0]
  ]);

  const toggleEdge = (i, j) => {
    const newMatrix = [...matrix];
    newMatrix[i][j] = newMatrix[i][j] === 0 ? 1 : 0;
    // Undirected graph symmetry
    newMatrix[j][i] = newMatrix[i][j];
    setMatrix(newMatrix);
  };

  return (
    <div>
      <h2 style={{ marginBottom: '16px' }}>Graph (Adjacency Matrix)</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
        An undirected graph represented as a matrix. Click cells to toggle edges between vertices!
      </p>

      <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
        <div>
          {matrix.map((row, i) => (
            <div key={i} style={{ display: 'flex' }}>
              {row.map((val, j) => (
                <div
                  key={`${i}-${j}`}
                  onClick={() => toggleEdge(i, j)}
                  style={{
                    width: '60px', height: '60px', border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: val === 1 ? 'var(--primary)' : 'var(--bg-card)',
                    cursor: 'pointer', transition: 'all 0.2s',
                    fontSize: '1.2rem', fontWeight: 'bold'
                  }}
                >
                  {val}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="visualizer-container" style={{ position: 'relative', width: '300px', height: '300px', margin: 0 }}>
          <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
            {matrix[0][1] === 1 && <line x1="50" y1="50" x2="250" y2="50" stroke="var(--primary)" strokeWidth="4" />}
            {matrix[0][2] === 1 && <line x1="50" y1="50" x2="250" y2="250" stroke="var(--primary)" strokeWidth="4" />}
            {matrix[0][3] === 1 && <line x1="50" y1="50" x2="50" y2="250" stroke="var(--primary)" strokeWidth="4" />}
            
            {matrix[1][2] === 1 && <line x1="250" y1="50" x2="250" y2="250" stroke="var(--primary)" strokeWidth="4" />}
            {matrix[1][3] === 1 && <line x1="250" y1="50" x2="50" y2="250" stroke="var(--primary)" strokeWidth="4" />}
            
            {matrix[2][3] === 1 && <line x1="250" y1="250" x2="50" y2="250" stroke="var(--primary)" strokeWidth="4" />}
          </svg>
          
          <div className="data-block" style={{ position: 'absolute', top: '25px', left: '25px', width: '50px', borderRadius: '50%', zIndex: 2 }}>0</div>
          <div className="data-block" style={{ position: 'absolute', top: '25px', left: '225px', width: '50px', borderRadius: '50%', zIndex: 2 }}>1</div>
          <div className="data-block" style={{ position: 'absolute', top: '225px', left: '225px', width: '50px', borderRadius: '50%', zIndex: 2 }}>2</div>
          <div className="data-block" style={{ position: 'absolute', top: '225px', left: '25px', width: '50px', borderRadius: '50%', zIndex: 2 }}>3</div>
        </div>
      </div>
    </div>
  );
}
