import { setupListener, refresh } from "./movement"
import { createCharacterElement, createMap } from "./setup";
import { CharacterName, Position } from "./types"

export const MAX_WIDTH = 1024;
export const MAX_HEIGHT = 768;



export class Player {
    _name: CharacterName
    _health: Number
    _lives: Number
    _playerId: Number //1,2,3,4
    _xPosition: number = 0
    _yPosition: number = 0
    _element: HTMLElement | null = null;
    

    constructor(name: CharacterName, playerId: Number){
        this._name = name;
        this._health = 100;
        this._lives = 3;
        this._playerId = playerId;
        this._element = createCharacterElement(name);
        this._xPosition = MAX_WIDTH / 2
        this._yPosition = MAX_HEIGHT / 2
        refresh(this);
    }

    get position(): Position {
        return { x: this._xPosition, y: this._yPosition }
    }

    set position({ x, y }: Position) {
        this._xPosition = x;
        this._yPosition = y;
    }
}

class Game {
    _running: boolean;
    _map: HTMLElement;

    constructor(){
        this._running = true;
        this._map = createMap();
    }
}

const game = new Game();
const player1 = new Player("stephen", 1);
setupListener(player1);
console.log(game._running);
console.log(player1._name);