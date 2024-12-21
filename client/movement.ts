import { Player, MAX_HEIGHT, MAX_WIDTH } from "./index";

const moveRate = 2;

type Direction = 'up' | 'down' | 'left' | 'right'

function updatePosition(player: Player, direction: Direction) {
    const position = player.position;
    switch(direction) {
        case 'up':
            if (player.position.y <= 0) return;
            player.position = {x: position.x, y: position.y - moveRate}
            break;
        case 'down':  
            if (player.position.y >= MAX_HEIGHT) return;  
            player.position = {x: position.x, y: position.y + moveRate}
            break;
        case 'left':
            if (player.position.x <= 0) return;
            player.position = {x: position.x - moveRate, y: position.y}
            break;
        case 'right':     
            if (player.position.x >= MAX_WIDTH) return;   
            player.position = {x: position.x + moveRate, y: position.y}
            break;
    }
  }

export function refresh(player: Player) {
    if (player._element) {
        player._element.style.top = `${player.position.y.toString()}px`
        player._element.style.left = `${player.position.x.toString()}px`
    }
}

export function setupListener(player: Player) {
    return window.addEventListener(
    "keydown",
    (event) => {
      if (event.defaultPrevented) {
        return; // Do nothing if event already handled
      }
  
      switch (event.code) {
        case "KeyS":
        case "ArrowDown":
          // Handle "back"
          updatePosition(player, 'down');
          break;
        case "KeyW":
        case "ArrowUp":
          // Handle "forward"
          updatePosition(player, 'up');
          break;
        case "KeyA":
        case "ArrowLeft":
          // Handle "turn left"
          updatePosition(player, 'left');
          break;
        case "KeyD":
        case "ArrowRight":
          // Handle "turn right"
          updatePosition(player, 'right');
          break;
      }
  
      refresh(player);
  
      if (event.code !== "Tab") {
        // Consume the event so it doesn't get handled twice,
        // as long as the user isn't trying to move focus away
        event.preventDefault();
      }
    },
    true,
  );
}