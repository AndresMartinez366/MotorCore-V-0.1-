function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-layout">
        <Sidebar />
        <Dashboard />
      </div>
      <Footer />
    </div>
  );
}