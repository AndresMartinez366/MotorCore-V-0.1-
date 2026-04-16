function Sidebar() {
  const menuItems = [
    "Dashboard",
    "Reparaciones",
    "Repuestos",
    "Clientes",
    "Reportes",
  ];

  return (
    <aside className="sidebar">
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;