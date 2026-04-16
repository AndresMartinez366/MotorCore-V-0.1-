import logo from "../assets/logo.png";

function Header() {
  const user = {
    name: "Andres Hunk",
    role: "Administrador",
  };

  return (
    <header className="header">
      <img src={logo} alt="Logo MotorCore" className="logo" />

      <h1>MotorCore</h1>

      <div className="user-info">
        <span className="user-name">{user.name}</span>
        <span className="user-role">{user.role}</span>
      </div>
    </header>
  );
}

export default Header;
