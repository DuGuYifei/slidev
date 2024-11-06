document.addEventListener('DOMContentLoaded', function () {
    const counterDisplay = document.getElementById('counter');
    let count = 5;
    const colors = ['purple', 'green', 'blue', 'yellow'];

    // 创建颜色按钮
    colors.forEach(color => {
        for (let j = 1; j <= 2; j++) {
            const container = document.querySelector('.' + color + '-buttons-' + j);
            for (let i = 1 + 5 * (j - 1); i <= 5 * j; i++) {  // 内循环每个行容器添加五个按钮
                const button = document.createElement('button');
                button.textContent = i;
                button.addEventListener('click', function () {
                    if (count >= i) {
                        count -= i;
                        counterDisplay.textContent = count;
                        document.getElementById('black').style.width = `${parseInt(document.getElementById('black').style.width) + i}%`;
                        let progressBar = document.getElementById(color);
                        let newWidth = parseInt(progressBar.style.width) + i;
                        progressBar.style.width = `${newWidth}%`;
                        if (newWidth >= 30) {
                            progressBar.classList.add('glow');  // 添加发光效果
                        } else {
                            progressBar.classList.remove('glow');  // 移除发光效果
                        }
                    }
                });
                container.appendChild(button);
            }
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

    let timerId = setInterval(() => {
        if (count < 10) {
            count++;
            counterDisplay.textContent = count;
        }
    }, 1000);

    let stopButton = document.getElementById('stop-button');
    stopButton.addEventListener('click', function() {
        if (stopButton.textContent == 'Start') {
            timerId = setInterval(() => {
                if (count < 10) {
                    count++;
                    counterDisplay.textContent = count;
                }
            }, 1000);
            stopButton.textContent = 'Stop';
            return;
        }
        clearInterval(timerId);
        stopButton.textContent = 'Start';
    });
});
