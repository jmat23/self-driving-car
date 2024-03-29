const carCanvas = document.getElementById("carCanvas");
carCanvas.width = 600;

const networkCanvas = document.getElementById("networkCanvas");
networkCanvas.width = 700;

const carCtx = carCanvas.getContext("2d");
const networkCtx = networkCanvas.getContext("2d");

const road = new Road(carCanvas.width / 2, carCanvas.width * 0.9);
const car = new Car(road.getLaneCenter(1), 100, 80, 120, "AI");
const traffic = [
    new Car(road.getLaneCenter(1), -100, 80, 120, "DUMMY", 2.6),
];

animate();

function animate(time) {
    for (let i = 0; i < traffic.length; i++) {
        traffic[i].update(road.borders, []);
    }

    car.update(road.borders, traffic);

    carCanvas.height = window.innerHeight;
    networkCanvas.height = window.innerHeight;

    carCtx.save();
    carCtx.translate(0, -car.y + carCanvas.height * 0.8);

    road.draw(carCtx);

    for (let i = 0; i < traffic.length; i++) {
        traffic[i].draw(carCtx, "red");
    }
    
    car.draw(carCtx, "blue");

    carCtx.restore();

    networkCtx.lineDashOffset = -time / 50;
    Visualiser.drawNetwork(networkCtx, car.brain);
    requestAnimationFrame(animate);
}

