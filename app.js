document.addEventListener('DOMContentLoaded',function () {
    setInterval(tiempo,1000);
})

    function tiempo(){
        const timer = document.getElementById('timer').value;        
        let cronometro = "1 Jan 2023";
        if(timer!='') cronometro = timer;
        document.querySelector('.year').innerHTML = cronometro;
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

        
        if(fecha.getSeconds()>=50) segundo.style.color = 'red';
        else segundo.style.color = '';
        if(fecha.getMinutes()>=55) minuto.style.color = 'red';
        else minuto.style.color = '';
        if(fecha.getHours>=23) hora.style.color = 'red';
        else hora.style.color = '';
        if(fecha.getDay>= fecha.getDay-334) dia.style.color = 'orange';
        else if (fecha.getDay>= fecha.getDay-355) dia.style.color = 'red';
        else dia.style.color = '';
    }


