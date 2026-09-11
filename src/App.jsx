import { useState } from 'react';
import Sidebar from './components/Sidebar';
import StackVisualizer from './components/StackVisualizer';
import QueueVisualizer from './components/QueueVisualizer';
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState('stack');

  return (
    <div className="app-layout">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="main-content">
        <div className="glass-card animate-slide-in">
          {activeTab === 'stack' && <StackVisualizer />}
          {activeTab === 'queue' && <QueueVisualizer />}
          {activeTab === 'intro' && (
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>Welcome to Data Structures Lab</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                Select a data structure from the sidebar to start learning interactively.
                Watch how elements are pushed, popped, and enqueued in real-time with visual animations!
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
