function setup() {
  createCanvas(410, 410);
  fill(0)
}
let a
let b
function draw() {
  background(0,255,255);
  fill(0)
  for(let i = 0; i<81; i++){
    if(Math.abs(i%9*50-mouseX)!=0){
      a = 1/(sqrt((i%9*50-mouseX)**2+(floor(i/9)*50-mouseY)**2)+4)*200*(i%9*50-mouseX)/Math.abs(i%9*50-mouseX)
    }
    if(Math.abs(floor(i/9)*50-mouseY)!=0){
      b = 1/((sqrt((i%9*50-mouseX)**2+(floor(i/9)*50-mouseY)**2))+4)*200*(floor(i/9)*50-mouseY)/Math.abs(floor(i/9)*50-mouseY)
    }
    fill(0)
    square((i%9*50)+a,floor(i/9)*50+b,10)
    line((i%9*50)+5,floor(i/9)*50+5,(i%9*50)+a+5,floor(i/9)*50+b+5)
  }
  console.log(1/((sqrt(2%9*50-mouseX)**2+(floor(2/9)*50-mouseY)**2)+0.05)*100)
}
