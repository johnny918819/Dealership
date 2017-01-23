class Car {
    public speedUp(speed: number) {
        this.speed = this.speed + speed;
    }
    public slowDown(speed: number) {
        this.speed = this.speed - speed;
        if (this.speed < 0) {
            this.speed = 0
        }
    }
    constructor(public year: number, public make: string, public model: string, public speed: number) {
    }
}

class UsedCar extends Car {
    public speedUp(speed: number) {
        super.speedUp(speed);
    }
    public slowDown(speed: number) {
        super.slowDown(speed);
        }
    constructor(public year: number, public make: string, public model: string, speed:number, public miles: number) {
        super(year, make, model, speed);
    }
}

class CertifiedUsedCar extends UsedCar {
    public speedUp(speed: number) {
        super.speedUp(speed);
    }
    public slowDown(speed: number) {
        super.slowDown(speed);
    }
    constructor(public year: number, public make: string, public model: string, speed: number, public miles: number, public warrantyMths: number) {
        super(year, make, model, speed, miles);
    }
}