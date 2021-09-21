tint_color = ""
y = 10

function preload()
{
  
}

function setup()
{
  canvas = createCanvas(400, 400);
  canvas.center()
  video = createCapture(VIDEO)
  video.hide();
  
}

function draw()
{
  image(video, 0, 0, 400, 400)
  tint(tint_color)
  circle(10,10,20)
  circle(10,390,20)
  circle(390,10,20)
  circle(390,390,20);
  
}

function take_snapshot()
{
  save("image.png")
}