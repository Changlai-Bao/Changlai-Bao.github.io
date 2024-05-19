document.addEventListener('DOMContentLoaded', (event) => {
    document.body.style.visibility = 'visible';
    document.body.style.opacity = '1';

    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.target === "_blank") {
                // 对于在新标签页打开的链接，不处理
                return;
            }
            if (link.href) {
                e.preventDefault();
                document.body.classList.add('fade-out');
                setTimeout(() => {
                    window.location.href = link.href;
                }, 200); // 与CSS动画时间相匹配
            }
        });
    });
});
