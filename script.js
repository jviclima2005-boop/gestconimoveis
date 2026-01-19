document.getElementById("leadForm").addEventListener("submit", function(e) {
  e.preventDefault(); // impede o envio normal do formulário

  // Pegando os valores
  let nome = document.getElementById("nome").value;
  let telefone = document.getElementById("telefone").value;
  let bairro = document.getElementById("bairro").value;
  let quartos = document.getElementById("quartos").value;
  let areaMin = document.getElementById("areaMin").value;
  let areaMax = document.getElementById("areaMax").value;

  // Número da Gestcon (coloque com DDI e DDD, sem espaços nem traços)
  let numeroWhatsApp = "5581991732930"; // <-- TROQUE PELO NÚMERO REAL

  // Mensagem que vai pro WhatsApp
  let mensagem = 
    `Olá, me chamo ${nome}!\n\n` +
    `Tenho interesse em um imóvel com as seguintes características:\n` +
    `📍 Bairro: ${bairro}\n` +
    `🛏 Quartos: ${quartos}\n` +
    `📐 Área mínima: ${areaMin} m²\n` +
    `📐 Área máxima: ${areaMax} m²\n\n` +
    `Meu WhatsApp: ${telefone}`;

  // Codifica a mensagem para URL
  let mensagemCodificada = encodeURIComponent(mensagem);

  // Abre o WhatsApp
  let url = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;
  window.open(url, "_blank");
});
