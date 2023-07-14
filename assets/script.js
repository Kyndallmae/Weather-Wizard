var tableBody = document.getElementById('table');
var fetchButton = document.getElementById('button');

function getApi() {

    var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}';
}
fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)

        for (var i = 0; i < data.length; i++) {
            var createTableRow = document.createElement('tr');
            var tableData = document.createElement('td');
            var link = document.createElement('a');










        }})

fetchButton.addEventListener('click', getApi);