const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if (isMobile) {console.log("Пользователь зашел с телефона или планшета")
} else {
    console.log("Пользователь зашел с компьютера")
    
    import('./eye.js')
        .then((module) => {
            module.initAnimations();
        })
        .catch((err) => {
            console.error("Ошибка загрузки анимаций:", err);
        });
}