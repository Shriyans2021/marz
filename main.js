canvas = document.getElementById('mycanvas');
ctx = canvas.getContext("2d");
rover_width = 100;
 rover_height = 90;
  background_image = "mars.jpg";
   rover_image = "rover.png";
    rover_x = 10; rover_y = 10;
    function add(){
        bg_it = new Image() ; 
        bg_it.onload = ub;
        bg_it.src = background_image;

        rover_it = new Image();
        rover_it.onload = uploadrover;
        rover_it.src = rover_image;
    }

    function ub () {
        ctx.drawImage(bg_it, 0, 0, canvas.width, canvas.height)
    }

    function uploadrover() {
    ctx.drawImage(rover_it, rover_x,rover_y, rover_width, rover_height);
    }

    window.addEventListener("keydown", my_keydown);

    function my_keydown(e)
    {
        keyPressed = e.keyCode;
        console.log(keyPressed);
        if(keyPressed == '38')
    {
    up();
    console.log("up");
    }
    if (keyPressed == '40')
     {
    down();
    console.log(down);
}
if (keyPressed == '37')
{
    left();
    console.log("left");
}
if (keyPressed == '37')
{
    left();
    console.log("left");
}
    
}

function up ()
{
    if(rover_y >= 0)
    {
        rover_y -= 10;
        ub();
        uploadrover();
        console.log("when up arrow is pressed = "+ rover_x + "-" + rover_y);
    }
}

    function down ()
{
    if(rover_y <= 500)
    {
        rover_y += 10;
        console.log("when down arrow is pressed, x  = " + rover_x + " | y = " + rover_y);
        ub();
        uploadrover();
    }
}

function left ()
{
    if(rover_x >= 0)
    {
        rover_x -= 10;
        console.log("when left arrow is pressed, x  = " + rover_x + " | y= " + rover_y);
        ub();
        uploadrover();
    }
}
    function up ()
{
    if(rover_x <= 700)
    {
        rover_x += 10;
        console.log("when up arrow is pressed = "+ rover_x + "-" + rover_y);
        ub();
        uploadrover();
    }
}