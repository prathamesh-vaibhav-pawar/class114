img = ""

function setup(){
    canvas = createCanvas(380,380)
    canvas.center()
    img = captureCanvas(VIDEO)
    img.hide()
}
function draw(){
    image(img,0,0,380,500)

}
function takePhoto(){
    save("snap.png")
}