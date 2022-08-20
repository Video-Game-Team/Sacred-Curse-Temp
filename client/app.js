document.addEventListener('DOMContentLoaded', (event) => {
  console.log('We have successful DOM liftoff!');

  // grab a reference to elements
  const character = document.querySelector('.character');
  const map = document.querySelector('.map');

  

  // start in the middle of the map (state of character)
  let x = 850;
  let y = 260;

  const held_directions = []; // State of which arrow keys we are holding down
  const speed = 6; // determines how many pixels per frame the character is going to move

  // This will determine if the player is holding any actions down, then based on that, reposition the character on the map where they should be
  const placeCharacter = () => {
    // This will get the pixel size from the css byt grabbing the "--pixel-size from the css class". This will convert it all to a string?
    const pixelSize = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue(
        '--pixel-size'
      )
    );

    // He likes to use arrays for this, this will keep track of the order that the key movments where triggered by the user, in case there is a misfire, the order will be preserved in an array. The x and y pos are oblviously pixel positions top and left bottom

    const held_direction = held_directions[0];
    if (held_direction) {
      if (held_direction === directions.right) {
        x += speed;
      }
      if (held_direction === directions.left) {
        x -= speed;
      }
      if (held_direction === directions.down) {
        y += speed;
      }
      if (held_direction === directions.up) {
        y -= speed;
      }
      // The line below will say, if there is a direction being held, then trigger the css class "facing" in conjuction with the "held_direction" direction
      character.setAttribute('facing', held_direction);
    }
    // This below will trigger the "walking" css animation if a direction is held down
    character.setAttribute('walking', held_direction ? 'true' : 'false');

    const camera_left = pixelSize * 66;
    const camera_top = pixelSize * 42;

    // This will keep the code performant for the browser. This is a good rule to us, the "translate3d"
    map.style.transform = `translate3d( ${-x * pixelSize + camera_left}px, ${
      -y * pixelSize + camera_top
    }px, 0 )`;

    // This will keep the code performant for the browser. This is a good rule to us, the "translate3d"
    character.style.transform = `translate3d( ${x * pixelSize}px, ${
      y * pixelSize
    }px, 0 )`;
  };

  // Set up the game loop - this is the repetitive thing that happens every frame
  const step = () => {
    placeCharacter();
    window.requestAnimationFrame(() => {
      step();
    });
  };
  step(); // kick off the first step!

  /* Direction key state */
  const directions = {
    up: 'up',
    down: 'down',
    left: 'left',
    right: 'right',
  };
  const keys = {
    87: directions.up,
    65: directions.left,
    68: directions.right,
    83: directions.down,
    38: directions.up,
    37: directions.left,
    39: directions.right,
    40: directions.down,
  };

  document.addEventListener('keydown', (e) => {
    const dir = keys[e.which];
    if (dir && held_directions.indexOf(dir) === -1) {
      held_directions.unshift(dir);
    }
  });

  document.addEventListener('keyup', (e) => {
    const dir = keys[e.which];
    const index = held_directions.indexOf(dir);
    if (index > -1) {
      held_directions.splice(index, 1);
    }
  });
});
