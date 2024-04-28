function setup(){
    canvas = createCanvas(500,500)
    canvas.position(1000,100)
    v1 = createCapture(VIDEO)
mymodel = ml5.poseNet(v1,modelLoaded)
mymodel.on('pose',gotPoses)
}
function modelLoaded(){
console.log("model has loaded👍🏻")
}
nosex = 0
nosey = 0
rwx = 0
lwx = 0
space = 0

function gotPoses(results){
if(results.length > 0 ){
    console.log(results)
nosex = results[0].pose.nose.x
nosey = results[0].pose.nose.y
rwx = results[0].pose.rightWrist.x
lwx = results[0].pose. leftWrist.x
space = lwx-rwx
}
}
function draw(){
    background("red")
    fill ("white")
    text("Miss Tvarita",nosex,nosey)
    textSize( space)
}








