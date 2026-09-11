export default function TreeVisualizer() {
  return (
    <div>
      <h2 style={{ marginBottom: '16px' }}>Binary Search Tree</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
        A tree where left children are smaller than the parent, and right children are larger.
      </p>
      
      <div className="visualizer-container" style={{ position: 'relative', height: '300px' }}>
        <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
          {/* Edges */}
          <line x1="50%" y1="50" x2="30%" y2="150" stroke="var(--border)" strokeWidth="3" />
          <line x1="50%" y1="50" x2="70%" y2="150" stroke="var(--border)" strokeWidth="3" />
          <line x1="30%" y1="150" x2="20%" y2="250" stroke="var(--border)" strokeWidth="3" />
          <line x1="30%" y1="150" x2="40%" y2="250" stroke="var(--border)" strokeWidth="3" />
        </svg>

        {/* Nodes (using flex box absolute positioning over SVG) */}
        <div className="data-block animate-pop-in" style={{ position: 'absolute', top: '25px', left: 'calc(50% - 60px)', borderRadius: '50%' }}>50</div>
        <div className="data-block animate-pop-in" style={{ position: 'absolute', top: '125px', left: 'calc(30% - 60px)', borderRadius: '50%', animationDelay: '0.2s' }}>30</div>
        <div className="data-block animate-pop-in" style={{ position: 'absolute', top: '125px', left: 'calc(70% - 60px)', borderRadius: '50%', animationDelay: '0.4s' }}>70</div>
        <div className="data-block animate-pop-in" style={{ position: 'absolute', top: '225px', left: 'calc(20% - 60px)', borderRadius: '50%', animationDelay: '0.6s' }}>20</div>
        <div className="data-block animate-pop-in" style={{ position: 'absolute', top: '225px', left: 'calc(40% - 60px)', borderRadius: '50%', animationDelay: '0.8s' }}>40</div>
      </div>
    </div>
  );
}
