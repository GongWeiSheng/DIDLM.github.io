document.addEventListener('DOMContentLoaded', function() {
    // 获取所有导航链接
    const navLinks = document.querySelectorAll('nav a');

    // 为每个导航链接添加点击事件监听器
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // 阻止默认链接行为

            // 获取目标部分的 ID（例如点击 "Home" 时，获取到 "home"）
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // 计算目标部分的顶部偏移量
                const offsetTop = targetSection.offsetTop;

                // 使用 smooth scroll 动画滚动到目标部分
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
