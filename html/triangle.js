const modelViewer = document.querySelector('model-viewer');

modelViewer.addEventListener('load', () => {
    // 1. Получаем доступ к внутренней сцене Three.js
    const symbols = Object.getOwnPropertySymbols(modelViewer);
    const sceneSymbol = symbols.find(s => s.description === 'scene');
    const scene = modelViewer[sceneSymbol];

    let totalTriangles = 0;

    // 2. Обходим все объекты в сцене
    scene.traverse((object) => {
        if (object.isMesh) {
            const geometry = object.geometry;

            // 3. Считаем треугольники
            // Если есть индекс, количество треугольников = индекс / 3
            // Если индекса нет, используем количество вершин / 3
            if (geometry.index !== null) {
                totalTriangles += geometry.index.count / 3;
            } else {
                totalTriangles += geometry.attributes.position.count / 3;
            }
        }
    });

    console.log(`Общее количество треугольников: ${totalTriangles}`);
    const triangle = document.getElementById('triangle');
    triangle.innerHTML = `△ ${totalTriangles}`
});
