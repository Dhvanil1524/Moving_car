let car = document.querySelector("#car-pic");

let posX = 90;
let posY = 90;

document.addEventListener("keydown", (event) => {
    const steps = 10;

    switch(event.key){
        case 'w':
            posY -= steps;
            break;
        case 's':
            posY += steps;
            break;
        case 'a':
            posX -= steps;
            break;
        case 'd':
            posX +=steps;
            break;
        default:
            alert("Press w,a,s,d keys only please !");
    }

    car.style.top = `${posY}px`;
    car.style.left = `${posX}px`;
});
