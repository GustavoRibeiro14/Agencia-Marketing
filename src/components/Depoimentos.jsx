const depoimentos = [
  { nome: "Carlos Silva", texto: "A AgênciaPro triplicou nossas vendas em 3 meses. Resultado incrível!" },
  { nome: "Ana Souza", texto: "Profissionais sérios e comprometidos. Recomendo demais!" },
  { nome: "Pedro Alves", texto: "Finalmente uma agência que entrega o que promete. Muito satisfeito." },
]

function Depoimentos() {
  return (
    <section id="depoimentos" style={{ padding: "80px 40px", backgroundColor: "#1a1a2e", textAlign: "center" }}>
      <h2 style={{ fontSize: "36px", marginBottom: "50px", color: "#fff" }}>O que nossos clientes dizem</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap" }}>
        {depoimentos.map((d, i) => (
          <div key={i} style={{
            backgroundColor: "#fff",
            borderRadius: "12px",
            padding: "40px 30px",
            width: "280px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)"
          }}>
            <p style={{ color: "#555", marginBottom: "20px", fontStyle: "italic" }}>"{d.texto}"</p>
            <strong style={{ color: "#e94560" }}>{d.nome}</strong>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Depoimentos