const wheel = document.getElementById("wheel");
const btn = document.getElementById("spinBtn");
const winnerBig = document.getElementById("winnerBig");

let currentRotation = 0;

btn.addEventListener("click", () => {
    btn.disabled = true;

    // Limpiar emoji grande mientras gira
    winnerBig.textContent = "";

    const emojis = Array.from(document.querySelectorAll(".emoji"));
    const sectors = emojis.length;
    const anglePerSector = 360 / sectors;

    // Elegimos un sector al azar (0 a 7)
    const randomSector = Math.floor(Math.random() * sectors);

    // Ángulo original de ese sector (donde está dibujado en la rueda)
    const baseAngle = randomSector * anglePerSector;

    // Queremos que ese sector quede en la parte superior (0° bajo la flecha)
    // Como la rueda gira en sentido horario, usamos 360 - baseAngle
    const targetAngle = (360 - baseAngle + 360) % 360;

    // Cuántas vueltas completas dará (solo para que se vea bonito)
    const fullTurns = 5;

    // Ángulo actual mod 360
    const currentMod = ((currentRotation % 360) + 360) % 360;

    // Diferencia para llegar desde donde estamos hasta el ángulo objetivo
    const delta = (fullTurns * 360) + (targetAngle - currentMod);

    // Nuevo ángulo absoluto
    currentRotation += delta;

    // Aplicar giro
    wheel.style.transform = `rotate(${currentRotation}deg)`;

    // Después de que termine la animación (~4s) mostramos el ganador
    setTimeout(() => {
        const ganador = emojis[randomSector].textContent;
        winnerBig.textContent = ganador;

        btn.disabled = false;
    }, 4000);
});


