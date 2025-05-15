let currentScene = "scene1";
const textEl = document.getElementById("text");
const choicesEl = document.getElementById("choices");
const gameEl = document.getElementById("game");

function typeText(element, text) {
    // Встановлюємо текст без анімації
    element.textContent = text;
}

function showScene(id) {
    const sceneData = story[id];
    currentScene = id;

    // Встановлюємо фоне сцени
    gameEl.style.backgroundImage = `url('${sceneData.background}')`;

    // Відображаєм текст
    typeText(textEl, sceneData.text);

    if (sceneData.next) {
        // Кнопка "Далі"
        const btn = document.createElement("button");
        btn.textContent = "Далі";
        btn.onclick = () => showScene(sceneData.next);
        choicesEl.innerHTML = "";
        choicesEl.appendChild(btn);
    }
}

// Запускаємо першу сцену
showScene(currentScene);
