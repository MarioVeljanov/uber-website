fetch('https://api.openweathermap.org/data/2.5/weather?id=785842&appid=656e3d718164280c73b6b1e64db63ab1')
    .then(function (resp) { return resp.json(); })
    .then(function (data) {
        console.log(data);
        document.querySelector('.package-name').textContent = data.name;
        document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273.15) + '&deg;';
        document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
        //https://openweathermap.org/img/wn/02d@2x.png
        document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {
        // catch any errors
    });

