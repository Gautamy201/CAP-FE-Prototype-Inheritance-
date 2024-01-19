class vehicles{
    constructor(){
        this.brand = "Tata Motors"
    }
    start(){
        console.log("start")
    }
    stop(){
        console.log("stop")
    }
}

class cars extends vehicles {
    constructor(model,year){
        super();
        this.model=model
        this.year=year
    }
}

const car_1 = new cars("Fortuner","2022");

console.log(car_1)
console.log(car_1.start())
console.log(car_1.stop())
