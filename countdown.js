// define a data de fim da contagem regressiva
var countDownDate = new Date("2023-05-31T11:10:36").getTime();

// atualiza a contagem regressiva a cada segundo
var x = setInterval(function () {

    // pega a data e hora atual
    var now = new Date().getTime();

    // calcula a diferença entre a data de fim e a data atual
    var distance = countDownDate - now;

    // calcula os dias, horas, minutos e segundos restantes
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // exibe a contagem regressiva no elemento com id "countdown"
    document.getElementById("countdown").innerHTML = days + " dias, " + hours + " horas, "
        + minutes + " minutos, " + seconds + " segundos.";

    // quando a contagem regressiva terminar, exibe uma mensagem
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRADO";
    }
}, 1000);