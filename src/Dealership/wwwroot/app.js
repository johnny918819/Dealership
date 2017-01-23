var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Car = (function () {
    function Car(year, make, model, speed) {
        this.year = year;
        this.make = make;
        this.model = model;
        this.speed = speed;
    }
    Car.prototype.speedUp = function (speed) {
        this.speed = this.speed + speed;
    };
    Car.prototype.slowDown = function (speed) {
        this.speed = this.speed - speed;
        if (this.speed < 0) {
            this.speed = 0;
        }
    };
    return Car;
}());
var UsedCar = (function (_super) {
    __extends(UsedCar, _super);
    function UsedCar(year, make, model, speed, miles) {
        var _this = _super.call(this, year, make, model, speed) || this;
        _this.year = year;
        _this.make = make;
        _this.model = model;
        _this.miles = miles;
        return _this;
    }
    UsedCar.prototype.speedUp = function (speed) {
        _super.prototype.speedUp.call(this, speed);
    };
    UsedCar.prototype.slowDown = function (speed) {
        _super.prototype.slowDown.call(this, speed);
    };
    return UsedCar;
}(Car));
var CertifiedUsedCar = (function (_super) {
    __extends(CertifiedUsedCar, _super);
    function CertifiedUsedCar(year, make, model, speed, miles, warrantyMths) {
        var _this = _super.call(this, year, make, model, speed, miles) || this;
        _this.year = year;
        _this.make = make;
        _this.model = model;
        _this.miles = miles;
        _this.warrantyMths = warrantyMths;
        return _this;
    }
    CertifiedUsedCar.prototype.speedUp = function (speed) {
        _super.prototype.speedUp.call(this, speed);
    };
    CertifiedUsedCar.prototype.slowDown = function (speed) {
        _super.prototype.slowDown.call(this, speed);
    };
    return CertifiedUsedCar;
}(UsedCar));
