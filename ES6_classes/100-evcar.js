/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range;
  }

  get range() {
    return this._range;
  }

  set range(value) {
    this._range = value;
  }

  cloneCar() {
    return new Car(undefined, undefined, undefined);
  }
}
