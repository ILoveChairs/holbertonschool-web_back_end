export default class Building {
  constructor(sqft) {
    if (this.evacuationWarningMessage === undefined && !(this.prototype.constructor === Building)) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this.sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }
}
