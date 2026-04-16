function DashboardCards() {
  const stats = [
    { title: "Reparaciones Activas", value: 8 },
    { title: "Repuestos en Stock", value: 125 },
    { title: "Clientes Registrados", value: 34 },
    { title: "Servicios Finalizados", value: 92 },
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