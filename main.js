canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");
roverwidth = 100;
roverheight = 90;
roverx = 10;
rovery = 10;

imgarray=["Mars one.jpeg","Mars2.jpeg","Mars3.jpeg","Mars4.jpeg"];
random_number = Math.floor(Math.random() * 4);
backgroundimage = imgarray[random_number];
roverimage = "rover.png";

function add() {
    backgroundimageobj = new Image();
    backgroundimageobj.onload = uploadbackgroundimage;
    backgroundimageobj.src = backgroundimage;

    roverimageobj = new Image();
    roverimageobj.onload = uploadroverimage;
    roverimageobj.src = roverimage;

}

function uploadbackgroundimage() {
    ctx.drawImage(backgroundimageobj, 0, 0, canvas.width, canvas.height);

}

function uploadroverimage() {
    ctx.drawImage(roverimageobj, roverx, rovery, roverwidth, roverheight);


}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);
    if (keypressed == '38') {

        console.log("up");
        up();

    } else if (keypressed == '40') {

        console.log("down");
        down();

    } else if (keypressed == '37') {

        console.log("left");
        left();

    } else if (keypressed == '39') {

        console.log("right");
        right();

    }
}

function up() {


    if (rovery > 10) {
        rovery = rovery - 10;
        uploadbackgroundimage();
        uploadroverimage();


    }
}

function down() {


    if (rovery < 590) {
        rovery = rovery + 10;
        uploadbackgroundimage();
        uploadroverimage();


    }
}

function left() {


    if (roverx > 10) {
        roverx = roverx - 10;
        uploadbackgroundimage();
        uploadroverimage();


    }
}

function right() {


    if (roverx < 790) {
        roverx = roverx + 10;
        uploadbackgroundimage();
        uploadroverimage();


    }
}



