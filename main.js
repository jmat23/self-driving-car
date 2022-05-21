const canvas = document.getElementById("myCanvas");
canvas.width = 600;

const ctx = canvas.getContext("2d");
const road = new Road(canvas.width / 2, canvas.width * 0.9);
const car = new Car(road.getLaneCenter(2), 100, 60, 100, "AI");
const traffic = [
    new Car(road.getLaneCenter(2), -100, 60, 100, "DUMMY", 2.6),
    new Car(road.getLaneCenter(3), 100, 60, 100, "DUMMY", 2.2),
    new Car(road.getLaneCenter(1), -100, 60, 100, "DUMMY", 2.6),
    new Car(road.getLaneCenter(4), -100, 60, 100, "DUMMY", 2.2),
    new Car(road.getLaneCenter(1), -300, 60, 100, "DUMMY", 2.6),
    new Car(road.getLaneCenter(2), -200, 60, 100, "DUMMY", 2.2)
];

animate();

function animate() {
    for (let i = 0; i < traffic.length; i++) {
        traffic[i].update(road.borders, []);
    }
    car.update(road.borders, traffic);
    canvas.height = window.innerHeight;

    ctx.save();
    ctx.translate(0, -car.y + canvas.height * 0.8);

    road.draw(ctx);
    for (let i = 0; i < traffic.length; i++) {
        traffic[i].draw(ctx, "red");
    }
    car.draw(ctx, "blue");

    ctx.restore();
    requestAnimationFrame(animate);
}

