document.addEventListener("DOMContentLoaded", () => {
  const inicioNamoro = new Date("2025-07-22T00:00:00"); // 🗓️ Altere para sua data real
  const contador = document.getElementById("contador-amor");

  function atualizarTempo() {
    const agora = new Date();
    let diff = agora - inicioNamoro;

    const segundos = Math.floor(diff / 1000) % 60;
    const minutos = Math.floor(diff / 1000 / 60) % 60;
    const horas = Math.floor(diff / 1000 / 60 / 60) % 24;
    const dias = Math.floor(diff / 1000 / 60 / 60 / 24) % 30;
    const meses = Math.floor(diff / 1000 / 60 / 60 / 24 / 30);

    contador.innerHTML = `❤️ Eu te amo há:<br>💖 ${meses} mês(es), 💕 ${dias} dia(s), 💞 ${horas} hora(s), 💓 ${minutos} minuto(s) e 💘 ${segundos} segundo(s)`;
  }

  atualizarTempo();
  setInterval(atualizarTempo, 1000);
});
