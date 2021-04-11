function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const square = (document.getElementsByClassName('square'))[0];
square.addEventListener('click', () => {
    square.style.backgroundColor = 'rgb(' + getRandom(0, 255) + ', ' + getRandom(0, 255) + ', ' + getRandom(0, 255) + ')';
});

const timer = (document.getElementsByClassName('square square-timer'))[0];
let timerCount = 0;
let timerID;
timer.addEventListener('mouseover', () => {
    timerID = setInterval(() => {
        timerCount += 1;
        timer.textContent = timerCount.toString();
    }, 1000)
});
timer.addEventListener('mouseout', () => {
    clearInterval(timerID);
})

const ddContent = document.getElementById('dd-content');

function showContent() {
    ddContent.classList.toggle('show');
}

window.onclick = function(event) {
    if (!event.target.matches('.dropButton')) {
        if (ddContent.classList.contains('show'))
            ddContent.classList.remove('show');
    }
}

let is_moving = false;
const ball = document.getElementsByClassName('ball')[0];
const ballContainer = document.getElementsByClassName('ballContainer')[0];

ball.addEventListener('click', () => { is_moving = true; });

window.addEventListener('keyup', (event) => {
    if (event.key == 'Escape')
        is_moving = false;
})

window.addEventListener('mousemove', (event) => {
    if (is_moving) {
        let ball_x = event.pageX - ballContainer.offsetLeft - ball.offsetWidth / 2;
        let ball_y = event.pageY - ballContainer.offsetTop - ball.offsetHeight / 2;
        if (ball_x < 0)
            ball_x = 0;
        if (ball_y < 0)
            ball_y = 0;
        const border_x = ballContainer.offsetWidth - ball.offsetWidth - 4.5;
        const border_y = ballContainer.offsetHeight - ball.offsetHeight - 4.5;
        if (ball_x > border_x)
            ball_x = border_x;
        if (ball_y > border_y)
            ball_y = border_y;
        ball.style.left = ball_x + 'px';
        ball.style.top = ball_y + 'px';
        //console.log(border_x1, border_x2, border_y1, border_y2, ball_x, ball_y);
    }
})

const apiButton = document.getElementById('apiButton');
const table = document.getElementsByClassName('apiTable')[0];
let got_api = false;
apiButton.addEventListener('click', () => {
    if (!got_api) {
        got_api = true;
        fetch('https://www.breakingbadapi.com/api/episodes')
            .then((serial_data) => {
                return serial_data.json();
            })
            .then((serial_data) => {
                for (let i = 0; i < serial_data.length; i++) {
                    let row = table.insertRow();
                    let cell = row.insertCell();
                    cell.appendChild(document.createTextNode(serial_data[i].season));
                    cell = row.insertCell();
                    cell.appendChild(document.createTextNode(serial_data[i].episode_id));
                    cell = row.insertCell();
                    cell.appendChild(document.createTextNode(serial_data[i].title));
                    cell = row.insertCell();
                    cell.appendChild(document.createTextNode(serial_data[i].air_date));
                }
            });
    }
    if (table.classList.contains('showTable'))
        table.classList.remove('showTable');
    else {
        table.classList.add('showTable');
    }
})

//console.log(timer)