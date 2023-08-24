const scrollbar = document.documentElement.style;

// Обработчик для наведения на полосу прокрутки
scrollbar.cursor = "default"; // Устанавливаем стандартный курсор
scrollbar.setProperty("scrollbar-width", "thin"); // Уменьшаем ширину полосы прокрутки

// Обработчик для ухода с полосы прокрутки
scrollbar.cursor = "auto"; // Восстанавливаем автоматический курсор
scrollbar.removeProperty("scrollbar-width"); // Восстанавливаем ширину полосы прокрутки
