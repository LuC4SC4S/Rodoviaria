//Array 2D para relacionar as distâncias
var distances = [[0, 13, 500, -1, 69, -1, 28],
                [13, 0, -1, 50, 100, -1, 50],
                [500, -1, 0, 20, 50, -1, -1],
                [-1, 50, 25, 0, -1, 96, -1],
                [70, 100, 50, -1, 0, 85, 96],
                [-1, -1, -1, 96, 85, 0, -1],
                [60, 50, -1, -1, 96, -1, 0]];

//Array 2D para relacionar o preço da passagem entre os destinos
var ticketValue = [[0, 4.50, 200.00, -1, 75.00, -1, 8.50],
                [4.50, 0, -1, 50.00, 120.00, -1, 65.90],
                [200.00, -1, 0, 6.75, 12.30, -1, -1],
                [-1, 2.75, 7.50, 0, -1, 95.50, -1],
                [82.00, 120.00, 12.30, -1, 0, 76.80, 90.50],
                [-1, -1, -1, 95.50, 76.80, 0, -1],
                [8.50, 65.90, -1, -1, 90.50, -1, 0]];

const round = (num, places) => {
    return +(parseFloat(num).toFixed(places));
}
// Função que retorna a distância de um destino a outro
function distance(){
    var x = document.getElementById("go").selectedIndex;
    var y = document.getElementById("back").selectedIndex;

    var a = document.getElementById("go").value;
    var b = document.getElementById("back").value;

    var pricePerKm = distances[x][y] / ticketValue[x][y]

    if (distances[x][y] < 0) {
        document.getElementById("modal-content").innerHTML = "Nos desculpe. Mas esta viagem não está disponivel em nosso itinerário."

    }else if (distances[x][y] == 0) {
        document.getElementById("modal-content").innerHTML = "Por favor, escolha um destino diferente do de partida."
    }else {
        document.getElementById("modal-content").innerHTML = "A sua viagem de " + a + " para " + b + " terá a distância de " + distances[x][y] + "km. <br>"
        + "No total sua viagem custará R$" + ticketValue[x][y] + ". E terá o custo por quilômetro de aproximadamente R$" + round(pricePerKm, 2) + "."
    }
}
