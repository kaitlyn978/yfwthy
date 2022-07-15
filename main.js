function preload(){
}
    function setup(){
canvas=createCanvas(640, 480);
canvas.position(110,250);
video=createCapture(VIDEO);
video.hide();

tint_color="";
    }
    function draw(){
        image(video,160,120,320,260);
        tint(tint_color);

        

        fill(0,230,230);
        stroke(0,225,225);
        rect(140,100,350,10);


    
        fill(0,0,150);
        stroke(0,0,150);
        rect(490,100,10,290);

        fill(0,230,230);
        stroke(0,225,225);
        rect(140,390,360,10);

       
        fill(0,0,150);
        stroke(0,0,150);
        rect(140,110,10,290);
        
        
    }
    function take_snapshot(){
        save('hi.png')
    }
function filter_tint(){
    tint_color=document.getElementById("color_name").value;
}