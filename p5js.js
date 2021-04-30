//https://openprocessing.org/sketch/create
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255,255,255);
	x = 0
	y = 0
	pX = 0
	pY = 0
}

function draw() {
	clear()
	textSize(32)
	lerpX = lerp(x, mouseX, 0.05)
	lerpY = lerp(y, mouseY, 0.05)
	//
	dirX = Math.sign(lerpX-x)
	dirY = Math.sign(lerpY-y)
	//
	diffX = Math.abs(lerpX-x)
	diffY = Math.abs(lerpY-y)
	if(diffX + diffY > 2) {
		angle = atan(diffY/diffX)
		fill(255,255,255)
		text(rad2deg(angle), 20, 50)
		adyX = cos(angle+Math.PI/2) * 10
		text("adyX:" + adyX, 20, 100)
		opY = sin(angle+Math.PI/2) * 10
		text("opY: " + opY, 20, 150)
		fill(200,200,200)
		triangle(lerpX+adyX*dirX, lerpY+opY*dirY, lerpX-adyX*dirX, lerpY-opY*dirY, x-(diffX*dirX*1.5), y-(diffY*dirY*1.5))
	}
	x = lerpX
	y = lerpY
	fill(255,255,255)
	circle(x, y, 20);
}

function rad2deg(angle) {
	angle = angle * (180/Math.PI);
	return angle
}
/*
h = diffY/diffX
*/
