import Character from '../src/js/character.js';

describe('TEST: character', () => {
  test('level up', () => {
    const character = new Character({
      level: 3,
      defence: 40,
      attack: 25,
      health: 60,
    });
    const expected = {
      level: 4,
      defence: 48,
      attack: 30,
      health: 100,
    };

    expect(character.levelUp()).toEqual(expected);
  });


  test('health equal to zero', () => {
    const character = new Character({
      level: 3,
      defence: 40,
      attack: 25,
      health: 0,
    });

    expect(() => character.levelUp()).toThrow();
  });

  test('health less than zero', () => {
    const character = new Character({
      level: 3,
      defence: 40,
      attack: 25,
      health: -60,
    });

    expect(() => character.levelUp()).toThrow();
  });
});
