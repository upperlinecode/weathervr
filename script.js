var color = "#0500ff"
var place = "New York"
var myUrl = "http://api.openweathermap.org/data/2.5/weather?q={" + place + "}&units=imperial&appid=f052497bd343eaf43714ad0afe195a51"
$(document).ready(function(){
  $.ajax({url: myUrl, success: function(result){
  var temp = result.main.temp

  var hexTempColors = ["#0500ff", "#0400ff", "#0300ff", "#0200ff", "#0100ff", "#0002ff", "#0012ff", "#0022ff", "#0032ff", "#0044ff", "#0054ff", "#0064ff", "#0074ff", "#0084ff", "#0094ff", "#00a4ff", "#00b4ff", "#00c4ff", "#00d4ff", "#00e4ff", "#00fff4", "#00ffd0", "#00ffa8", "#00ff83", "#00ff5c", "#00ff36", "#00ff10", "#17ff00", "#3eff00", "#65ff00", "#8aff00", "#b0ff00", "#d7ff00", "#fdff00", "#FFfa00", "#FFf000", "#FFe600", "#FFdc00", "#FFd200", "#FFc800", "#FFbe00", "#FFb400", "#FFaa00", "#FFa000", "#FF9600", "#FF8c00", "#FF8200", "#FF7800", "#FF6e00", "#FF6400", "#FF5a00", "#FF5000", "#FF4600", "#FF3c00", "#FF3200", "#FF2800", "#FF1e00", "#FF1400", "#FF0000", "#FF0010", "#FF0020", "#FF0030", "#FF0040", "#FF0050", "#FF0060", "#FF0070", "#FF0080", "#FF0090"]
  color = hexTempColors[Math.floor(Math.floor(temp)/2 - 12)]
    $('#temperature').append('<a-sphere color="' + color + '" radius="5" fog="true" scale="0.2 0.2 0.2" position="0 1 -3"></a-sphere>')
    $('#temperatureDisplay').append("<a-entity text='value: " + place + ": " + temp + "F' anchor= 'center' material='color: red' position='1.5 2.5 -3' scale='5 5 5'></a-entity>")

  }})


})
