fetch('https:api.openweathermap.org/data/2.5/weather?lat=0.000000&lon=0.000000&appid=1f3c126c36b756e6cd712f00d03c25ae')
.then(res => res.json())
.then(data => console.log(data))