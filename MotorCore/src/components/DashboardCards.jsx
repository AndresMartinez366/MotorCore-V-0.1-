function DashboardCards() {
  const stats = [
    { title: "Motos atendidas hoy", value: 6 },
    { title: "Reparaciones activas", value: 8 },
    { title: "Repuestos críticos", value: 3 },
    { title: "Servicios del mes", value: 42 },
  ];

  return (
    <div className="dashboard-cards">
      {stats.map((item, index) => (
        <div className="card" key={index}>
          <h3>{item.value}</h3>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;
