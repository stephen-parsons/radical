import { MAX_HEIGHT, MAX_WIDTH } from ".";
import { CharacterName } from "./types";

export function createCharacterElement(name: CharacterName): HTMLElement{ 
    const element = document.createElement<"img">("img");
    element.setAttribute('src', `/assets/${name}.png`);
    element.setAttribute('class', 'character');
    document.getElementById('map-container')?.append(element);
    return element
}

export function repositionContainer(container: HTMLElement) {
    const clientRec = document.body.getBoundingClientRect()
    const left = (clientRec.width - MAX_WIDTH) / 2;
    if (left > 0) container.style.left = `${left.toString()}px`;
    const top = (clientRec.height - MAX_HEIGHT) / 2;
    if (top > 0) container.style.top = `${top.toString()}px`;
}

export function createMap() {
    const container = document.createElement('div');
    container.id = 'map-container'
    document.body.append(container)
    addEventListener("resize", () => {
        repositionContainer(container)
    });
    repositionContainer(container)
    const map = document.createElement<'img'>('img');
    map.setAttribute('src', '/assets/sf.png');
    map.setAttribute('class', 'map');
    container.append(map);
    return map;
}