document.querySelector('.busca').addEventListener('submit', async (event)=>{
    event.preventDefault();

    let input = document.querySelector('#searchInput').value;

    if (input !== '') {
        showWarning('Loading...')

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=ac3ea164e090ad6712e3138e6ce8362d&units=metric&lang=pt-br`;

        let results = await fetch(url);
        let json = await results.json();

        if (json.cod === 200){
            showInfo({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                tempIcon: json.weather[0].icon,
                
            });

        } else {
            showWarning('Não foi possível encontrar essa localização.');
        } 
    }
});

function showInfo(json) {

}

function showWarning(msg){
    document.querySelector('.aviso').innerHTML = msg;
}