document.addEventListener('DOMContentLoaded', function () {
    const counterDisplay = document.getElementById('counter');
    let count = 5;
    const colors = ['purple', 'green', 'blue', 'yellow'];

    // 创建颜色按钮
    colors.forEach(color => {
        const container = document.querySelector('.' + color + '-buttons');
        for (let i = 1; i <= 10; i++) {
            const button = document.createElement('button');
            button.textContent = i;
            button.addEventListener('click', function () {
                if (count >= i) {
                    count -= i;
                    counterDisplay.textContent = count;
                    document.getElementById('black').style.width = `${parseInt(document.getElementById('black').style.width) + i}%`;
                    document.getElementById(color).style.width = `${parseInt(document.getElementById(color).style.width) + i}%`;
                }
            });
            container.appendChild(button);
        }
    });

    // 白色按钮减少计数器
    document.querySelector('.common-button').addEventListener('click', function () {
        if (count >= 2) {
            count -= 2;
            counterDisplay.textContent = count;
            document.getElementById('black').style.width = `${parseInt(document.getElementById('black').style.width) + 2}%`;
        }
    });

    // 新增加的增加计数器的按钮
    document.querySelector('.increase-counter').addEventListener('click', function () {
        if (count < 10) {
            count++;
            counterDisplay.textContent = count;
        }
    });

    // 重置按钮
    document.querySelector('.clear').addEventListener('click', function () {
        colors.forEach(color => {
            document.getElementById(color).style.width = '0%';
        });
        document.getElementById('black').style.width = '0%';
    });
});
