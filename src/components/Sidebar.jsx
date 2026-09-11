export default function Sidebar({ activeTab, setActiveTab }) {
  const menuItems = [
    { id: 'intro', label: 'Introduction' },
    { id: 'stack', label: 'Stack Visualizer' },
    { id: 'queue', label: 'Queue Visualizer' }
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-title">DS Lab Web</div>
      {menuItems.map(item => (
        <div
          key={item.id}
          className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
          onClick={() => setActiveTab(item.id)}
        >
          {item.label}
        </div>
      ))}
    </aside>
  );
}
