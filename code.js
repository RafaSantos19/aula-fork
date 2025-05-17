document.addEventListener("DOMContentLoaded", function () {
    const isFan = confirm("Você é um verdadeiro fã do Rafael?");

    if (isFan) {
        alert("Obrigado! Você é muito bem-vindo(a) ao Fã Clube do Rafael!");
    } else {
        alert("Você não é bem-vindo(a) aqui! Saia imediatamente! >:(");
        document.body.innerHTML = "<h1 style='color: red; text-align: center;'>Você foi expulso do site! >:(</h1>";
    }
});