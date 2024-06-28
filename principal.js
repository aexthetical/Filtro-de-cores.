
function setup(){
    canva=createCanvas(300,300)
    background(0)
   video=createCapture(VIDEO) 
   video.hide()
   filtro=""
}
function draw(){
 image(video,0,0,300,300)
 tint (filtro)
}
function aplicar (){
    filtro=document.getElementById("cor").value
}
function foto(){
    save ("foto.png")
}