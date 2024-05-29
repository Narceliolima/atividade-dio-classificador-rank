let wins = 255;
let loses = 175;

const level = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"];
const winRate = [0, 10, 20, 50, 80, 90, 100, Infinity];

function calcWinrate (wins, loses){
    return wins - loses;
}

function defineRank(heroWinRate){
    let index = 9999;
    let iterator = 1;

    while(index==9999){
        if(heroWinRate>winRate[iterator -1]&&heroWinRate<=winRate[iterator]){
            index = iterator-1;
        }
        else{
            iterator++;
        }
    }

    return level[index];
}

const heroWinRate = calcWinrate(wins, loses);
const heroRank = defineRank(heroWinRate);

console.log(`O Herói tem de saldo de ${heroWinRate} está no nível de ${heroRank}`);