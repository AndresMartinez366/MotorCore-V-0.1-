import DashboardCards from "../components/DashboardCards";

function Dashboard() {
  const repairStatus = [
    { label: "En proceso", value: 5 },
    { label: "Pendientes", value: 2 },
    { label: "Finalizadas", value: 12 },
  ];

  return (
    <section className="dashboard">
      <div className="dashboard-header">
        <h2>Panel Administrativo</h2>
        <span className="admin-badge">Admin</span>
      </div>

      <p>
        Bienvenido al área administrativa de MotorCore. Desde aquí puedes
        supervisar las reparaciones, repuestos y clientes del sistema.
      </p>

      
      <DashboardCards />

      <div className="dashboard-section">
        <h3>Estado de Reparaciones</h3>

        <div className="status-cards">
          {repairStatus.map((status, index) => (
            <div className="status-card" key={index}>
              <strong>{status.value}</strong>
              <span>{status.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
