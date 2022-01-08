document.addEventListener('DOMContentLoaded',function () {
    setInterval(tiempo,1000);
})


    function tiempo(){
        const cronometro = "1 Jan 2023";
        const tiempo = parseInt((new Date(cronometro).getTime()/31557600000-51)*365);
        const otrotiempo = Math.ceil((new Date().getTime() - 1609437600000)/31557600000*365);
       
        const fecha = new Date();
        const horas = Math.abs(parseInt(fecha.getHours()-23));
        const minutos = Math.abs(parseInt(fecha.getMinutes()-59));
        const segundos = Math.abs( parseInt(fecha.getSeconds()-59));

        let dia = document.querySelector('.dias');
        let hora = document.querySelector('.horas');
        let minuto = documenhora = document.querySelector('.minutos');
        let segundo = documenhora = document.querySelector('.segundos');    

        dia.innerHTML = tiempo - otrotiempo;
        hora.innerHTML = horas;
        minuto.innerHTML = minutos;
        segundo.innerHTML = segundos; 
    }