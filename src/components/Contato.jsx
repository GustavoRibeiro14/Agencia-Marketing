function Contato() {
  return (
    <section id="contato" style={{ padding: "80px 40px", backgroundColor: "#f9f9f9", textAlign: "center" }}>
      <h2 style={{ fontSize: "36px", marginBottom: "10px", color: "#1a1a2e" }}>Fale com a gente</h2>
      <p style={{ color: "#555", marginBottom: "40px" }}>Preencha o formulário e entraremos em contato em até 24h.</p>
      <form style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "15px", maxWidth: "500px", margin: "0 auto" }}>
        <input placeholder="Seu nome" style={{ width: "100%", padding: "15px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "16px" }} />
        <input placeholder="Seu e-mail" style={{ width: "100%", padding: "15px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "16px" }} />
        <textarea placeholder="Sua mensagem" rows="5" style={{ width: "100%", padding: "15px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "16px" }} />
        <button type="button" style={{
          backgroundColor: "#e94560",
          color: "#fff",
          padding: "15px 40px",
          borderRadius: "30px",
          border: "none",
          fontSize: "18px",
          fontWeight: "bold",
          cursor: "pointer"
        }}>
          Enviar mensagem
        </button>
      </form>
    </section>
  )
}

export default Contato