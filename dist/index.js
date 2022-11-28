"use strict";

$(document).ready(function () {
  $('.weather-btn').on('click', function () {
    $.get("http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19", {
      "id": "702550"
    }, function (data) {
      var out = '';
      var info = '';
      var date = new Date();
      var hours = date.getHours();
      var minutes = date.getMinutes();
      out += '<p class="timer">' + hours + ':' + minutes + '</p><br>';
      out += '<p> Humidity: ' + data.main.humidity + ' %</p> <br>';
      out += '<p> Pressure: ' + data.main.pressure + ' hPa</p><br><br>';
      out += '<p> Wind: ' + Math.round(data.wind.speed) + ' km/h SSE</p><br>';
      info += '<img src="http://openweathermap.org/img/w/' + data.weather[0].icon + '.png"><br>';
      info += '<p class="temp"> <b>' + Math.round(data.main.temp) + '&#176;C</b></p><br>';
      info += '<p> Feels Like: <b>' + Math.round(data.main.feels_like) + ' &#176;C</b></p><br>';
      info += '<p> <b>' + data.weather[0].description + '</b></p><br>';
      $('.weather-01').html(out);
      $('.weather-02').html(info);
    });
  });
});