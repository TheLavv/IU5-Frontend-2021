function addParams(params, url) {
    let paramArr = Object.entries(params);
    for (const [key, value] of paramArr) {
        url.searchParams.append(key, value);
    }
}

const params = {
    q: 'Москва',
    appid: 'aed6bd52ec5ebf5b1f40aa5ea739aad6',
    lang: 'ru',
    units: 'metric',
};

const cur_url = new URL('https://api.openweathermap.org/data/2.5/weather');
const forecast_url = new URL('https://api.openweathermap.org/data/2.5/forecast');

document.addEventListener('DOMContentLoaded', () => {
    addParams(params, cur_url);
    addParams(params, forecast_url);
    getWeatherData(cur_url).then((w_data) => {
        treatCurrentWeather(w_data);
    });
    getWeatherData(forecast_url).then((w_data) => {
        treatForecastWeather(w_data);
    });
});

function getWeatherData(url) {
    return fetch(url)
        .then((w_data) => w_data.json())
        .then((w_data) => w_data)
}

const btn = document.getElementsByClassName('navbar-searchContainer-button')[0];
const searchField = document.getElementsByClassName('navbar-searchContainer-searchField')[0];

function changeCity(cur_url, forecast_url, cityName) {
    cur_url.searchParams.delete('q');
    forecast_url.searchParams.delete('q');
    cur_url.searchParams.append('q', cityName);
    forecast_url.searchParams.append('q', cityName);
}

function treatImage(data) {
    switch (data.weather[0].icon.substring(0, 2)) {
        case '01':
            document.getElementsByClassName('content-infoCard')[0].style.backgroundImage = "url('images/sunny.jpg')";
            break;
        case '02':
            document.getElementsByClassName('content-infoCard')[0].style.backgroundImage = "url('images/lil_cloudy.jpg')";
            break;
        case '03':
            document.getElementsByClassName('content-infoCard')[0].style.backgroundImage = "url('images/cloudy.jpg')";
            break;
        case '04':
            document.getElementsByClassName('content-infoCard')[0].style.backgroundImage = "url('images/very_cloudy.jpg')";
            break;
        case '09':
            document.getElementsByClassName('content-infoCard')[0].style.backgroundImage = "url('images/very_rainy.jpg')";
            break;
        case '10':
            document.getElementsByClassName('content-infoCard')[0].style.backgroundImage = "url('images/rainy.jpg')";
            break;
        case '11':
            document.getElementsByClassName('content-infoCard')[0].style.backgroundImage = "url('images/thunder.jpg')";
            break;
        case '13':
            document.getElementsByClassName('content-infoCard')[0].style.backgroundImage = "url('images/snowy.jpg')";
            break;
        case '50':
            document.getElementsByClassName('content-infoCard')[0].style.backgroundImage = "url('images/misty.jpg')";
            break;
        default:
            document.getElementsByClassName('content-infoCard')[0].style.backgroundImage = "url('images/sunny.jpg')";
            break;
    }
}

function capitalize(str) {
    let word_arr = str.split(' ');
    let res = "";
    for (let i = 0; i < word_arr.length; i++) {
        res += word_arr[i][0].toUpperCase() + word_arr[i].slice(1);
        if (i != word_arr.length - 1)
            res += ' ';
    }
    return res;
}

function treatCurrentWeather(data) {
    treatImage(data);
    document.getElementsByClassName('content-infoCard-main-city')[0].innerHTML = data.name;
    document.getElementsByClassName('temp')[0].innerHTML = (data.main.temp > 0 ? `+${Math.round(data.main.temp)}` : `${Math.round(data.main.temp)}`) + '℃';
    document.getElementsByClassName('content-infoCard-additional-icon')[0].src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
    document.getElementsByClassName('content-infoCard-additional-info-status')[0].innerHTML = capitalize(data.weather[0].description);
    document.getElementsByClassName('content-infoCard-additional-info-humidity')[0].innerHTML = 'Влажность: ' + data.main.humidity + ' %';
    document.getElementsByClassName('content-infoCard-additional-info-cloudiness')[0].innerHTML = 'Облачность: ' + data.clouds.all + ' %';
    document.getElementsByClassName('content-infoCard-additional-info-wind')[0].innerHTML = 'Ветер: ' + data.wind.speed + ' м/сек';
}

function treatForecastWeather(data) {
    for (let i = 0; i < 5; i++) {
        document.getElementsByClassName('content-infoCard-forecast-card-time')[i].innerHTML = data.list[i].dt_txt.split(' ')[0];
        document.getElementsByClassName('content-infoCard-forecast-card-date')[i].innerHTML = data.list[i].dt_txt.split(' ')[1];
        document.getElementsByClassName('content-infoCard-forecast-card-temp')[i].innerHTML = (data.list[i].main.temp > 0 ? `+${Math.round(data.list[i].main.temp)}` : `${Math.round(data.list[i].main.temp)}`) + '℃';
        document.getElementsByClassName('content-infoCard-forecast-card-icon')[i].src = `https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png`;
    }
}

btn.onclick = () => {
    let cityName = searchField.value;
    changeCity(cur_url, forecast_url, cityName);
    getWeatherData(cur_url).then((w_data) => {
            treatCurrentWeather(w_data);
        })
        .catch(() => {
            alert('Неверный ввод! Пожалуйста, повторите попытку.')
        });
    getWeatherData(forecast_url).then((w_data) => {
        treatForecastWeather(w_data);
    });
};
searchField.addEventListener('keyup', (event) => {
    if (event.key == 'Enter')
        btn.onclick();
});