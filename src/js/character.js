export default class Character {
  constructor(obj) {
    this.level = obj.level;
    this.defence = obj.defence;
    this.attack = obj.attack;
    this.health = obj.health;
  }

  levelUp() {
    if (this.health <= 0) throw Error('нельзя повысить левел умершего');

    this.defence *= (20 / 100) + 1;
    this.attack *= (20 / 100) + 1;
    this.level += 1;
    return this;
  }
}
