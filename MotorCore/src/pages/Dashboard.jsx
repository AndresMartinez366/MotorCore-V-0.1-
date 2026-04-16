import DashboardCards from "../components/DashboardCards";

function Dashboard() {
  return (
    <section className="dashboard">
      <h2>Dashboard MotorCore</h2>
      <p>Resumen general del sistema de reparación y repuestos</p>

      <DashboardCards />
    </section>
  );
}

export default Dashboard;