"use strict";$(document).ready(function(){$(".weather-btn").on("click",function(){$.get("http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19",{id:"702550"},function(e){var t="",r="",i=new Date;t+='<p class="timer">'+i.getHours()+":"+i.getMinutes()+"</p><br>",t+="<p> Humidity: "+e.main.humidity+" %</p> <br>",t+="<p> Pressure: "+e.main.pressure+" hPa</p><br><br>",t+="<p> Wind: "+Math.round(e.wind.speed)+" km/h SSE</p><br>",r+='<img src="http://openweathermap.org/img/w/'+e.weather[0].icon+'.png"><br>',r+='<p class="temp"> <b>'+Math.round(e.main.temp)+"&#176;C</b></p><br>",r+="<p> Feels Like: <b>"+Math.round(e.main.feels_like)+" &#176;C</b></p><br>",r+="<p> <b>"+e.weather[0].description+"</b></p><br>",$(".weather-01").html(t),$(".weather-02").html(r)})})});