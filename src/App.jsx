import { useState } from 'react';
import Sidebar from './components/Sidebar';
import StackVisualizer from './components/StackVisualizer';
import QueueVisualizer from './components/QueueVisualizer';
import ArrayVisualizer from './components/ArrayVisualizer';
import LinkedListVisualizer from './components/LinkedListVisualizer';
import TreeVisualizer from './components/TreeVisualizer';
import GraphVisualizer from './components/GraphVisualizer';
import HashingVisualizer from './components/HashingVisualizer';
import SearchingVisualizer from './components/SearchingVisualizer';
import SortingVisualizer from './components/SortingVisualizer';
import RecursionVisualizer from './components/RecursionVisualizer';
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState('stack');

  return (
    <div className="app-layout">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="main-content">
        <div className="glass-card animate-slide-in">
          {activeTab === 'array' && <ArrayVisualizer />}
          {activeTab === 'linkedlist' && <LinkedListVisualizer />}
          {activeTab === 'stack' && <StackVisualizer />}
          {activeTab === 'queue' && <QueueVisualizer />}
          {activeTab === 'tree' && <TreeVisualizer />}
          {activeTab === 'graph' && <GraphVisualizer />}
          {activeTab === 'hashing' && <HashingVisualizer />}
          {activeTab === 'searching' && <SearchingVisualizer />}
          {activeTab === 'sorting' && <SortingVisualizer />}
          {activeTab === 'recursion' && <RecursionVisualizer />}
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
