const relogio = document.querySelector('.relogio');

var segundos = 0;
let time;

function create_time(segundos) {
    let temp = new Date(segundos * 1000);
    return temp.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}//criar time 0 


function start_relogio() {
    time = setInterval(function () { segundos++; relogio.innerHTML = create_time(segundos) }, 1000);

}//crio contador



document.addEventListener('click', function (a) {
    //Funcionalidades
    const elemento_click = a.target
    console.log(elemento_click);

    if (elemento_click.classList.contains('start')) {
        clearInterval(time);
        relogio.style.color = 'green';
        start_relogio()
    }//start time

    if (elemento_click.classList.contains('stop')) {
        relogio.style.color = 'red';
        clearInterval(time);
    }//stop time

    if (elemento_click.classList.contains('clear')) {
        clearInterval(time);
        relogio.innerHTML = '00:00:00';
        segundos = 0
        relogio.style.color = 'black';
    }// clear time

})

