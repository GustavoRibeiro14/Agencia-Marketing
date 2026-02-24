function Hero() {
  return (
    <section style={{
      backgroundColor: "#1a1a2e",
      color: "#fff",
      padding: "200px 40px",
      textAlign: "center",
    }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
        Transformamos sua marca em <span style={{ color: "#e94560" }}>resultados</span>
      </h1>
      <p style={{ fontSize: "20px", marginBottom: "40px", color: "#ccc" }}>
        Estratégias digitais que geram vendas, visibilidade e crescimento real para o seu negócio.
      </p>
      <a href="#contato" style={{
        backgroundColor: "#e94560",
        color: "#fff",
        padding: "15px 40px",
        borderRadius: "30px",
        textDecoration: "none",
        fontSize: "18px",
        fontWeight: "bold"
      }}>
        Fale com a gente
      </a>
    </section>
  )
}

export default Hero