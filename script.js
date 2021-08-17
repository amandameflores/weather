document.querySelector('.busca').addEventListener('submit', async (event)=>{
    event.preventDefault();

    let input = document.querySelector('#searchInput').value;

    if (input !== '') {
        showWarning('Loading...')

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=ac3ea164e090ad6712e3138e6ce8362d&units=metric&lang=pt-br`;

        let results = await fetch(url);
        let json = await results.json();

        console.log(json);
    }
});

function showWarning(msg){
    document.querySelector('.aviso').innerHTML = msg;
}