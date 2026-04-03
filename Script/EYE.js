// глаз
const eye = document.getElementById('eye-svg');
// зрачок
const pupil = document.getElementById('pupil');

document.addEventListener('mousemove', (e) => {
  const rect = eye.getBoundingClientRect();
  
  // Находим центр глаза в пикселях на экране
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  // Расстояние от мыши до центра
  const dx = e.clientX - centerX;
  const dy = e.clientY - centerY;
  
  // Угол направления
  const angle = Math.atan2(dy, dx);
  
  // Переводим ограничение из единиц SVG в пиксели экрана
  // В этом SVG ширина 960 единиц. Ограничим движение зрачка ~80 единицами.
  const maxDistanceInSvg = 80; 
  const maxDistancePx = (maxDistanceInSvg * rect.width) / 960;
  
  // Текущая дистанция (не больше максимума)
  const distance = Math.min(Math.hypot(dx, dy) / 5, maxDistancePx);

  // Считаем финальное смещение
  const x = Math.cos(angle) * distance;
  const y = Math.sin(angle) * distance;

  // Применяем трансформацию. 
  // Мы используем scale, чтобы пересчитать пиксели обратно в единицы SVG
  const svgScale = 960 / rect.width;
  pupil.setAttribute('transform', `translate(${x * svgScale}, ${y * svgScale})`);
});


// курсор ливнул
document.addEventListener('mouseleave', () => {
    pupil.style.fill = 'red';
});