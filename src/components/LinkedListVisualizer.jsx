import { useState } from 'react';

export default function LinkedListVisualizer() {
  const [list, setList] = useState(['Head', 'Node 1', 'Tail']);
  const [inputValue, setInputValue] = useState('');

  const handleAppend = () => {
    if (inputValue.trim() === '') return;
    if (list.length >= 8) {
      alert("List Too Long! Maximum 8 nodes.");
      return;
    }
    setList([...list, inputValue]);
    setInputValue('');
  };

  const handlePrepend = () => {
    if (inputValue.trim() === '') return;
    if (list.length >= 8) {
      alert("List Too Long! Maximum 8 nodes.");
      return;
    }
    setList([inputValue, ...list]);
    setInputValue('');
  };

  const handleRemoveEnd = () => {
    if (list.length === 0) return;
    const newList = [...list];
    newList.pop();
    setList(newList);
  };

  return (
    <div>
      <h2 style={{ marginBottom: '16px' }}>Singly Linked List</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
        Nodes are linked via pointers. Prepending is O(1), appending is O(n) (if no tail pointer).
      </p>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
        <input
          type="text"
          className="input-field"
          placeholder="Node Value..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="btn btn-accent" onClick={handlePrepend}>Prepend</button>
        <button className="btn btn-accent" onClick={handleAppend}>Append</button>
        <button className="btn btn-danger" onClick={handleRemoveEnd}>Remove Tail</button>
      </div>

      <div className="visualizer-container" style={{ flexDirection: 'row', justifyContent: 'flex-start', overflowX: 'auto', padding: '40px 20px' }}>
        {list.length === 0 && <div style={{ color: 'var(--text-muted)', margin: 'auto' }}>List is empty</div>}
        {list.map((item, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center' }} className="animate-slide-in">
            <div className="data-block" style={{ borderRadius: '50px', width: '100px' }}>
              {item}
            </div>
            {index < list.length - 1 && (
              <div style={{ color: 'var(--primary)', fontWeight: 'bold', margin: '0 8px', fontSize: '1.5rem' }}>
                →
              </div>
            )}
            {index === list.length - 1 && (
              <div style={{ color: 'var(--text-muted)', margin: '0 8px', fontStyle: 'italic' }}>
                → NULL
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
