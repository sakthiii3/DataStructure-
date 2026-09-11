import { useState } from 'react';

export default function ArrayVisualizer() {
  const [array, setArray] = useState([10, 20, 30, 40, 50]);
  const [inputValue, setInputValue] = useState('');
  const [indexValue, setIndexValue] = useState('');

  const handleInsert = () => {
    if (inputValue.trim() === '') return;
    const idx = parseInt(indexValue);
    if (isNaN(idx) || idx < 0 || idx > array.length) {
      alert(`Index must be between 0 and ${array.length}`);
      return;
    }
    if (array.length >= 10) {
      alert("Array Full! Maximum 10 elements.");
      return;
    }
    const newArr = [...array];
    newArr.splice(idx, 0, inputValue);
    setArray(newArr);
    setInputValue('');
    setIndexValue('');
  };

  const handleDelete = () => {
    const idx = parseInt(indexValue);
    if (isNaN(idx) || idx < 0 || idx >= array.length) {
      alert(`Index must be between 0 and ${array.length - 1}`);
      return;
    }
    const newArr = [...array];
    newArr.splice(idx, 1);
    setArray(newArr);
    setIndexValue('');
  };

  return (
    <div>
      <h2 style={{ marginBottom: '16px' }}>Array Operations</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
        An array stores elements in contiguous memory locations. Insert or delete at specific indices to see how elements shift!
      </p>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
        <input
          type="text"
          className="input-field"
          placeholder="Value to Insert"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <input
          type="number"
          className="input-field"
          placeholder="Index"
          style={{ width: '100px' }}
          value={indexValue}
          onChange={(e) => setIndexValue(e.target.value)}
        />
        <button className="btn btn-accent" onClick={handleInsert}>Insert at Index</button>
        <button className="btn btn-danger" onClick={handleDelete}>Delete at Index</button>
      </div>

      <div className="visualizer-container" style={{ flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
        {array.length === 0 && <div style={{ color: 'var(--text-muted)' }}>Array is empty</div>}
        {array.map((item, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="data-block animate-pop-in" style={{ margin: '4px' }}>
              {item}
            </div>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>[{index}]</span>
          </div>
        ))}
      </div>
    </div>
  );
}
