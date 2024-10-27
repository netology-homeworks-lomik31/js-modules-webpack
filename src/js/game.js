import domain from './domain';

class Game {
    start() {
        console.log('game started');
    }
}

class GameSavingData {

}

function readGameSaving() {

}

function writeGameSaving() {

}

// Экспорт из модуля game класса Game в качестве дефолтного, класса GameSavingData и функций readGameSaving и writeGameSaving

export default Game;
export { GameSavingData, readGameSaving, writeGameSaving };
