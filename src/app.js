class Drone {
    constructor(id) {
        this._id = id;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }
}

let drone = new Drone('A123', 'Flyer');
let drone2 = new Drone('B456', 'Twirl');

drone.id = 'A852';
console.log('drone Id: ' + drone.id);