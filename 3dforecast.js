var color = "#0500ff"
var place = "Miami"
var myUrl = "http://api.openweathermap.org/data/2.5/forecast/daily?q={" + place + "}&cnt=7&mode=json&units=imperial&appid=f052497bd343eaf43714ad0afe195a51"

$(document).ready(function(){
  $.ajax({url: myUrl, success: function(result){

    var forecast = result.list
    console.log(forecast)

    var hexTempColors = ["#0500ff", "#0400ff", "#0300ff", "#0200ff", "#0100ff", "#0002ff", "#0012ff", "#0022ff", "#0032ff", "#0044ff", "#0054ff", "#0064ff", "#0074ff", "#0084ff", "#0094ff", "#00a4ff", "#00b4ff", "#00c4ff", "#00d4ff", "#00e4ff", "#00fff4", "#00ffd0", "#00ffa8", "#00ff83", "#00ff5c", "#00ff36", "#00ff10", "#17ff00", "#3eff00", "#65ff00", "#8aff00", "#b0ff00", "#d7ff00", "#fdff00", "#FFfa00", "#FFf000", "#FFe600", "#FFdc00", "#FFd200", "#FFc800", "#FFbe00", "#FFb400", "#FFaa00", "#FFa000", "#FF9600", "#FF8c00", "#FF8200", "#FF7800", "#FF6e00", "#FF6400", "#FF5a00", "#FF5000", "#FF4600", "#FF3c00", "#FF3200", "#FF2800", "#FF1e00", "#FF1400", "#FF0000", "#FF0010", "#FF0020", "#FF0030", "#FF0040", "#FF0050", "#FF0060", "#FF0070", "#FF0080", "#FF0090"];

    for (var i = 0; i < forecast.length; i++) {

      temp = forecast[i].temp.day
      date = new Date(forecast[i].dt)
      color = hexTempColors[Math.floor(Math.floor(temp)/2 - 12)]
        $('#temperature').append('<a-sphere color="' + color + '" radius="5" fog="true" scale="0.2 0.2 0.2" position="'+ i*3 + ' 1 -3"></a-sphere>')
        $('#temperatureDisplay').append("<a-entity text='value: " + convertTimestamp(date) + ": " + temp + "F' anchor= 'center' material='color: red' position='" + ((i*3) + 0.5) + " 2.5 -3' scale='5 5 5'></a-entity>")
    }

  }})

})


function convertTimestamp(timestamp) {
  var d = new Date(timestamp * 1000),	// Convert the passed timestamp to milliseconds
		yyyy = d.getFullYear(),
		mm = ('0' + (d.getMonth() + 1)).slice(-2),	// Months are zero based. Add leading 0.
		dd = ('0' + d.getDate()).slice(-2),			// Add leading 0.
		hh = d.getHours(),
		h = hh,
		min = ('0' + d.getMinutes()).slice(-2),		// Add leading 0.
		ampm = 'AM',
		time;

	if (hh > 12) {
		h = hh - 12;
		ampm = 'PM';
	} else if (hh === 12) {
		h = 12;
		ampm = 'PM';
	} else if (hh == 0) {
		h = 12;
	}

	// ie: 2013-02-18, 8:35 AM
	time = yyyy + '-' + mm + '-' + dd;

	return time;
}
