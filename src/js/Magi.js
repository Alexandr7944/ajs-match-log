/* eslint-disable no-underscore-dangle */
import Character from './Charaster';

class Magi extends Character {
  constructor(name, type, attack, defence) {
    super(name, type, attack, defence);
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }

  set actualAttack(x) {
    this.stoned = x;
    this._actualAttack = this.stoned - Math.round(Math.log2(x)) * 5;
  }

  get actualAttack() {
    return this._actualAttack;
  }
}

export default Magi;
