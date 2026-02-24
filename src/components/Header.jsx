function Header() {
  return (
    <header style={{
      backgroundColor: "#0f0f0f",
      margin: "0px",
      padding: "20px 40px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <h1 style={{ color: "#fff", fontSize: "24px", margin: 0 }}>
        AgênciaPro
      </h1>
      <nav style={{ display: "flex", gap: "30px" }}>
        <a href="#servicos" style={{ color: "#fff", textDecoration: "none" }}>Serviços</a>
        <a href="#depoimentos" style={{ color: "#fff", textDecoration: "none" }}>Depoimentos</a>
        <a href="#contato" style={{ color: "#fff", textDecoration: "none" }}>Contato</a>
      </nav>
    </header>
  )
}

export default Header