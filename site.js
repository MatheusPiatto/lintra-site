// Configuração do site: endereços do sistema, contato e Instagram. Sem dependências.
(function () {
  var local = location.hostname === "localhost" || location.hostname === "127.0.0.1";
  var APP = local ? "http://localhost:5180" : "https://app.lintratech.com.br";
  // Número comercial no formato internacional, só dígitos (ex.: 5511999999999). Vazio = botão escondido.
  var WHATSAPP = "";

  // Botões do sistema: data-app="/caminho"
  document.querySelectorAll("[data-app]").forEach(function (a) { a.href = APP + (a.getAttribute("data-app") || ""); });
  document.querySelectorAll("[data-whats]").forEach(function (a) {
    if (!WHATSAPP) { a.hidden = true; return; }
    a.href = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(a.getAttribute("data-whats") || "Olá! Quero conhecer o CoachApp.");
  });
  var ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();

  // Os servidores gratuitos dormem sem uso: acorda o login e a API do CoachApp enquanto a pessoa lê o site,
  // para o "Testar grátis" e o primeiro login não esperarem ~40 s (login, CoachApp e Barbaly).
  if (!local && window.fetch) {
    ["https://id.lintratech.com.br/health", "https://coachapp-api-7xfe.onrender.com/health",
     "https://barbaly-api.onrender.com/health"].forEach(function (u) {
      fetch(u, { mode: "no-cors" }).catch(function () {});
    });
  }

  // Instagram: publicações listadas em instagram.json, exibidas com o incorporador oficial.
  var caixa = document.getElementById("posts");
  if (!caixa) return;
  fetch("instagram.json", { cache: "no-cache" }).then(function (r) { return r.json(); }).then(function (cfg) {
    var posts = (cfg.posts || []).filter(function (u) { return /^https:\/\/www\.instagram\.com\/(p|reel)\/[\w-]+\/?$/.test(u); }).slice(0, 3);
    if (!posts.length) return;
    caixa.innerHTML = "";
    posts.forEach(function (url) {
      var b = document.createElement("blockquote");
      b.className = "instagram-media";
      b.setAttribute("data-instgrm-permalink", url);
      b.setAttribute("data-instgrm-version", "14");
      var a = document.createElement("a");
      a.href = url; a.textContent = "Ver esta publicação no Instagram"; a.target = "_blank"; a.rel = "noopener";
      b.appendChild(a);
      caixa.appendChild(b);
    });
    var s = document.createElement("script");
    s.async = true; s.src = "https://www.instagram.com/embed.js";
    document.body.appendChild(s);
  }).catch(function () { /* mantém o cartão com o link do perfil */ });
})();
