/* eslint-disable no-underscore-dangle */
class Character {
  constructor(name, type, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }

  set stoned(distance) {
    this._stoned = distance < 11
      ? this.attack * ((11 - distance) / 10)
      : 0;
  }

  get stoned() {
    return this._stoned;
  }
}

export default Character;
