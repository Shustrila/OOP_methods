export default class Character {
  constructor(obj) {
    this.level = obj.level;
    this.defence = obj.defence;
    this.attack = obj.attack;
    this.health = obj.health;
  }

  levelUp() {
    if (this.health <= 0) throw Error('нельзя повысить левел умершего');

    this.defence *= 1.2;
    this.attack *= 1.2;
    this.health = 100;
    this.level += 1;
    return this;
  }
}
