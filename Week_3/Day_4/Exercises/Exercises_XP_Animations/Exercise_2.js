let redbox = document.getElementById("animate");
//redbox.style.transition = "1";
let yellowbox = document.getElementById("container");
let interval;
count = 10;

const myMove = () => {
    interval = setInterval(() => {

        if (count <= (yellowbox.clientWidth - redbox.clientWidth)) {
            redbox.style.left = `${count}px`;
            count += 10;
        }
        else {
            clearInterval(interval);
        }
    }, 1);

}





