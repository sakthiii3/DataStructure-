export default function Sidebar({ activeTab, setActiveTab }) {
  const menuItems = [
    { id: 'intro', label: 'Introduction' },
    { id: 'array', label: 'Array' },
    { id: 'linkedlist', label: 'Linked List' },
    { id: 'stack', label: 'Stack' },
    { id: 'queue', label: 'Queue' },
    { id: 'tree', label: 'Binary Search Tree' },
    { id: 'graph', label: 'Graph' },
    { id: 'hashing', label: 'Hashing' },
    { id: 'searching', label: 'Searching' },
    { id: 'sorting', label: 'Sorting' },
    { id: 'recursion', label: 'Recursion' }
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
