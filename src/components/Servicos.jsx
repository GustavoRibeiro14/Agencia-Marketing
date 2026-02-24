const servicos = [
  { titulo: "Gestão de Redes Sociais", descricao: "Criamos conteúdo estratégico e gerenciamos sua presença nas redes." },
  { titulo: "Tráfego Pago", descricao: "Campanhas no Google e Meta Ads para atrair clientes qualificados." },
  { titulo: "Criação de Sites", descricao: "Sites modernos, rápidos e otimizados para converter visitantes em clientes." },
]

function Servicos() {
  return (
    <section id="servicos" style={{ padding: "80px 40px", backgroundColor: "#f9f9f9", textAlign: "center" }}>
      <h2 style={{ fontSize: "36px", marginBottom: "50px", color: "#1a1a2e" }}>Nossos Serviços</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap" }}>
        {servicos.map((s, i) => (
          <div key={i} style={{
            backgroundColor: "#fff",
            borderRadius: "12px",
            padding: "40px 30px",
            width: "280px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)"
          }}>
            <h3 style={{ color: "#e94560", marginBottom: "15px" }}>{s.titulo}</h3>
            <p style={{ color: "#555" }}>{s.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Servicos