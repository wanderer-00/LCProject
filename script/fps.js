let lastTime = performance.now();
let frameCount = 0;
const fpsDisplay = document.getElementById('fps-counter');

function updateFPS() {
    const now = performance.now();
    frameCount++;

    if (now >= lastTime + 1000) {
        const fps = Math.round((frameCount * 1000) / (now - lastTime));
        fpsDisplay.innerHTML = `FPS: ${fps}`;
        frameCount = 0;
        lastTime = now;
    }

    requestAnimationFrame(updateFPS);
}

requestAnimationFrame(updateFPS);