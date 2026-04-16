function Sidebar() {
  const menuItems = [
    "Dashboard",
    "Reparaciones",
    "Repuestos",
    "Clientes",
    "Administración",
  ];

  return (
    <aside className="sidebar">
      <p className="sidebar-title">Admin</p>

      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
