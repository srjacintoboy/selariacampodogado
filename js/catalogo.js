const API_URL = "COLE_AQUI_SEU_LINK_DA_API"; // depois eu te ajudo a colocar

fetch(API_URL)
  .then(res => res.json())
  .then(data => {

    const container = document.getElementById("produtos");

    data
      .filter(p => p.Status === "ATIVO")
      .forEach(p => {

        const card = document.createElement("div");
        card.className = "produto";

        card.innerHTML = `
          <img src="${p['Imagem URL']}" alt="${p['Nome do Produto']}">

          <h3>${p['Nome do Produto']}</h3>

          <p>${p['Descrição']}</p>

          <strong>R$ ${p['Preço (R$)']}</strong>

          <div class="botoes">

            <a href="${p['Link WhatsApp']}" target="_blank">
              Comprar no WhatsApp
            </a>

            <a href="${p['Link Shopee']}" target="_blank">
              Shopee
            </a>

          </div>
        `;

        container.appendChild(card);
      });

  })
  .catch(err => {
    console.error("Erro:", err);
  });
