canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_width=100;
rover_height=90;

rover_x=10;
rover_y=10;

background_img="mars.jpg";
rover_img="rover.png";

function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_img;

    rover_imgTag=new Image();
    rover_imgTag.onload=uploadImage;
    rover_imgTag.src=rover_img;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadImage(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_Keydown);
function my_Keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed == '37'){
        left();
        console.log("left");
    }
    if(keypressed == '38'){
        up();
        console.log("up");
    }
    if(keypressed == '39'){
        right();
        console.log("right");
    }
    if(keypressed == '40'){
        down();
        console.log("down");
    }
}
function up(){

    if(rover_y >= 0)
    {
        rover_y = rover_y -10;
        console.log("When Up Arrow is Pressed, X= " + rover_x + " | y= "+ rover_y);
        uploadBackground();
        uploadImage();

    }
}

function down(){

    if(rover_y <= 500)
    {
        rover_y = rover_y + 10;
        console.log("When Down Arrow is Pressed, X= " + rover_x + " | y= "+ rover_y);
        uploadBackground();
        uploadImage();

    }
}

function left(){

    if(rover_x >= 0)
    {
        rover_x = rover_x - 10;
        console.log("When left Arrow is Pressed, X= " + rover_x + " | y= "+ rover_y);
        uploadBackground();
        uploadImage();

    }
}

function right(){

    if(rover_x <= 700)
    {
        rover_x = rover_x + 10;
        console.log("When Right Arrow is Pressed, X= " + rover_x + " | y= "+ rover_y);
        uploadBackground();
        uploadImage();

    }
}