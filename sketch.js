let hoverRin, hoverPana, hoverMaki, hoverUmi, hoverHonk, hoverKoto, hoverEli, hoverNozo, hoverNico;
let textW, textH, textW2, textH2;
let outlineColor, textColor, stripeColor, bgColor, boxColor1, boxColor2;
let Tx;
let x = 200;
let slide;
let muse, aqours;
let season = 1;

function preload() {
	song = createAudio("sif.mp3");
	
}

function setup() {
	createCanvas(960,720);
	
	// Muse
	rin = loadImage("rin.png");
	rinT = loadImage("RinT.png");
		
	pana = loadImage("hanayo.png");
	panaT = loadImage("HanayoT.png");

	maki = loadImage("maki.jpg");
	makiT = loadImage("MakiT.png");

	umi = loadImage("umi.png");
	umiT = loadImage("UmiT.png");
		
	honk = loadImage("honoka.png");
	honkT = loadImage("HonokaT.png");

	koto = loadImage("kotori.jpg");
	kotoT = loadImage("KotoriT.png");

	eli = loadImage("eli.jpg");
	eliT = loadImage("eliT.png");

	nozo = loadImage("nozomi.png");
	nozoT = loadImage("NozomiT.png");

	nico = loadImage("nico.png");
	nicoT = loadImage("NicoT.png");

	// Aqours
	ruby = loadImage("ruby.png");
	rubyT = loadImage("rubyT.png");
		
	yoshi = loadImage("yoshiko.png");
	yoshiT = loadImage("yoshikoT.png");

	hanamaru = loadImage("hanamaru.jpg");
	hanamaruT = loadImage("hanamaruT.png");

	you = loadImage("you.png");
	youT = loadImage("youT.png");
		
	chika = loadImage("chika.jpg");
	chikaT = loadImage("chikaT.png");

	riko = loadImage("riko.png");
	rikoT = loadImage("rikoT.png");

	mari = loadImage("mari.png");
	mariT = loadImage("mariT.png");

	kanan = loadImage("kanan.png");
	kananT = loadImage("kananT.png");

	dia = loadImage("dia.jpg");
	diaT = loadImage("diaT.png");
	
	// logo
	logo = loadImage("logo.png");
				
	// play music
	song.volume(0.09);
	song.loop();

	textW = (width * 0.09);
	textH = (height * 0.29);
	textW2 = (width * 0.095);
	textH2 = (height * 0.18);
	Tx = (0.5 * width);
	
	// default colors
	outlineColor = color(255, 255, 255);
	textColor = color(255,255,255);
	stripeColor = color(255, 170, 200);
	bgColor = color(100, 180, 255);
	noStroke();
}

function draw() {
	
	if (slide == true && x > 0) {
		x = x - 20;
	}
	
	if (x <= 0) {
		slide = false;
	}

	background(bgColor);
	
	// background stripe
	push();
		stroke(stripeColor);
		strokeWeight(width / 4);
		strokeCap(PROJECT);
		line(width, 0, width / 2, height)
	pop();
	
	// rotating circles
	push();
		noFill();
		stroke(255,255,255,140);
		strokeCap(SQUARE);
		translate(width*0.75,height*0.6);
		push();
			rotate(-0.01 * frameCount);
			strokeWeight(width/14);
			arc(0,0, width*0.7,width*0.7, 0, PI+QUARTER_PI);
		pop();
		push();
			rotate(0.02 * frameCount);
			strokeWeight(width/40);
			arc(0,0, width*0.535,width*0.535, 0, PI-1);
		pop();
		push();
			rotate(-0.018 * frameCount);
			strokeWeight(width/20);
			arc(0,0, width*0.4,width*0.4, 0, HALF_PI);
		pop();
	pop();
		
	// title
	fill(textColor);
	textSize(width / 16);
	textStyle(BOLD);
	if (!hoverRin && !hoverPana && !hoverMaki && !hoverUmi && !hoverHonk && !hoverKoto && !hoverEli && !hoverNozo && !hoverNico) {
		text("CHOOSE YOUR WAIFU", width * 0.05, height * 0.25);
	}
	
	// season select button
	if (mouseX > width-260 && mouseX < width-160 &&
		 	mouseY > 20 && mouseY < 60) {	// highlighting MUSE
			boxColor1 = color(255,255,100);
			muse = true;
			aqours = false;
	} else {
		boxColor1 = color(120,160,255);
	}
	
	if (mouseX > width-160 && mouseX < width-40 &&
		 	mouseY > 20 && mouseY < 60) {	//highlighting AQOURS
			boxColor2 = color(255,255,100);
			muse = false;
			aqours = true;
	} else {
		boxColor2 = color(255,160,120);
	}
	
	// season select boxes
	push();
		translate(width-200,20);
		textSize(20);
	
		push();	// white outline
			fill(255,255,255);
			scale(1.5);
			quad(-30,0, 120,0,
					 100,30, -50,30);
		pop();
	
		push();	// MUSE
			translate(-15,0);
			fill(boxColor1);
			quad(-25,5, 63,5,
				 	39,40, -47,40);
		pop();
		push();
			textStyle(ITALIC);
			fill(255,160,230);
			text("MUSE",-36,30);
		pop();
		
		push();	// AQOURS
			translate(54,0);
			fill(boxColor2);
			quad(5,5, 113,5,
				 	90,40, -19,40);
		pop();
		push();
			translate(79,0);
			textStyle(ITALIC);
			fill(125,210,255);
			text("AQOURS",-16,30);
		pop();
	pop();
	
	fill(outlineColor); // icon outline color
	textSize(width/10);	// big name font size

	// RIN
	if (mouseX > width * 0.08 &&
		mouseY > height * 0.37 &&
		mouseX < width * 0.21 &&
		mouseY < height * 0.54) {
		hoverRin = true;
		hoverPana = false;
		hoverMaki = false;
		hoverUmi = false;
		hoverHonk = false;
		hoverKoto = false;
		hoverEli = false;
		hoverNozo = false;
		hoverNico = false;
	}

	if (hoverRin) {
		if (season == 1) {
			slide = true;
			bgColor = color(235, 160, 40);
			outlineColor = color(255, 230, 120);
			stripeColor = color(255, 230, 120);
			rect(0.075 * width, height * 0.362, height / 5.5, height / 5.5);
			image(rinT,
				Tx + x, 0.1 * height, // dx,dy - x/y coordinates of destination rectangle
				0.5 * width, 0.9 * height, // dWidth,dHeight - height/width of destination rect
				0, 0, // sx,sy - x/y coords of subsection rect to draw img
				width * 0.75, height * 1.67); // sWidth,sHeight - width/height of img subsection
			push();
				fill(textColor);
				text('RIN', textW, textH);
					textStyle(NORMAL);
					textSize(width / 32);
					text('HOSHIZORA', textW2, textH2);
			pop();
		} else if (season == 2) {
				// RUBY
				slide = true;
				bgColor = color(230, 30, 90);
				outlineColor = color(255, 220, 255);
				stripeColor = color(255, 230, 240);
				rect(0.075 * width, height * 0.362, height / 5.5, height / 5.5)
				image(rubyT,
					Tx + x, 0.1 * height,
					0.5 * width, 0.9 * height,
					0, 0,
					width * 0.75, height * 1.67);
				push();
					fill(textColor);
					text('RUBY', textW, textH);
						textStyle(NORMAL);
						textSize(width / 32);
						text('KUROSAWA', textW2, textH2);
				pop();	
				}
	}

	// HANAYO
	if (mouseX > width * 0.22 &&
		mouseY > height * 0.37 &&
		mouseX < width * 0.35 &&
		mouseY < height * 0.54) {
		hoverRin = false;
		hoverPana = true;
		hoverMaki = false;
		hoverUmi = false;
		hoverHonk = false;
		hoverKoto = false;
		hoverEli = false;
		hoverNozo = false;
		hoverNico = false;
	}

	if (hoverPana) {
		if (season == 1) {
			slide = true;
			bgColor = color(152, 239, 115);
			outlineColor = color(220, 255, 180);
			stripeColor = color(240, 255, 170);
			rect(0.215 * width, height * 0.362, height / 5.5, height / 5.5)
			image(panaT,
				Tx + x, 0.1 * height,
				0.5 * width, 0.9 * height,
				0, 0,
				width * 0.75, height * 1.67);
			push();
				fill(textColor);
				text('HANAYO', textW, textH);
					textStyle(NORMAL);
					textSize(width / 32);
					text('KOIZUMI', textW2, textH2);
			pop();	
		} else if (season == 2) { // YOSHIKO
				slide = true;
				bgColor = color(31, 64, 104);
				outlineColor = color(220, 145, 255);
				stripeColor = color(220, 145, 255);
				rect(0.215 * width, height * 0.362, height / 5.5, height / 5.5)
				image(yoshiT,
					Tx + x, 0.1 * height,
					0.5 * width, 0.9 * height,
					0, 0,
					width * 0.75, height * 1.67);
				push();
					fill(textColor);
					text('YOSHIKO', textW, textH);
						textStyle(NORMAL);
						textSize(width / 32);
						text('TSUSHIMA', textW2, textH2);
				pop();	
			}
	}


	// MAKI
	if (mouseX > width * 0.36 &&
		mouseY > height * 0.37 &&
		mouseX < width * 0.49 &&
		mouseY < height * 0.54) {
		hoverRin = false;
		hoverPana = false;
		hoverMaki = true;
		hoverUmi = false;
		hoverHonk = false;
		hoverKoto = false;
		hoverEli = false;
		hoverNozo = false;
		hoverNico = false;
	}

	if (hoverMaki) {
		if (season == 1) {
			slide = true;
			bgColor = color(237, 101, 129);
			outlineColor = color(255, 170, 200);
			stripeColor = color(255, 170, 200);
			rect(0.355 * width, height * 0.362, height / 5.5, height / 5.5)
			image(makiT,
				Tx + x, 0.1 * height,
				0.5 * width, 0.9 * height,
				0, 0,
				width * 0.75, height * 1.67);
			push();
				fill(textColor);
				text('MAKI', textW, textH);
					textStyle(NORMAL);
					textSize(width / 32);
					text('NISHIKINO', textW2, textH2);
			pop();
		} else if (season == 2) { // HANAMARU
				slide = true;
				bgColor = color(198, 196, 53);
				outlineColor = color(255, 252, 81);
				stripeColor = color(255, 252, 181);
				rect(0.355 * width, height * 0.362, height / 5.5, height / 5.5)
				image(hanamaruT,
					Tx + x, 0.1 * height,
					0.5 * width, 0.9 * height,
					0, 0,
					width * 0.75, height * 1.67);
					push();
					fill(textColor);
					text('HANAMARU', textW, textH);
						textStyle(NORMAL);
						textSize(width / 32);
						text('KUNIKIDA', textW2, textH2);
				pop();			
		}
	}

	// UMI
	if (mouseX > width * 0.1 &&
		mouseY > height * 0.56 &&
		mouseX < width * 0.23 &&
		mouseY < height * 0.73) {
		hoverRin = false;
		hoverPana = false;
		hoverMaki = false;
		hoverUmi = true;
		hoverHonk = false;
		hoverKoto = false;
		hoverEli = false;
		hoverNozo = false;
		hoverNico = false;
	}

	if (hoverUmi) {
		if (season == 1) {
			slide = true;
			bgColor = color(82, 104, 220);
			outlineColor = color(140, 170, 255);
			stripeColor = color(140, 170, 255);
			rect(0.095 * width, height * 0.553, height / 5.5, height / 5.5)
			image(umiT,
				Tx + x, 0.1 * height,
				0.5 * width, 0.9 * height,
				0, 0,
				width * 0.75, height * 1.67);
			push();
				fill(textColor);
				text('UMI', textW, textH);
					textStyle(NORMAL);
					textSize(width / 32);
					text('SONODA', textW2, textH2);
			pop();
		} else if (season == 2) { // YOU
				slide = true;
				bgColor = color(76, 159, 255);
				outlineColor = color(244, 253, 255);
				stripeColor = color(244, 253, 255);
				rect(0.095 * width, height * 0.553, height / 5.5, height / 5.5)
				image(youT,
					Tx + x, 0.1 * height,
					0.5 * width, 0.9 * height,
					0, 0,
					width * 0.75, height * 1.67);
				push();
					fill(textColor);
					text('YOU', textW, textH);
						textStyle(NORMAL);
						textSize(width / 32);
						text('WATANABE', textW2, textH2);
				pop();	
			}
	}

	// HONOKA
	if (mouseX > width * 0.24 &&
		mouseY > height * 0.56 &&
		mouseX < width * 0.37 &&
		mouseY < height * 0.73) {
		hoverRin = false;
		hoverPana = false;
		hoverMaki = false;
		hoverUmi = false;
		hoverHonk = true;
		hoverKoto = false;
		hoverEli = false;
		hoverNozo = false;
		hoverNico = false;
	}

	if (hoverHonk) {
		if (season == 1) {
			slide = true;
			bgColor = color(245, 131, 80);
			outlineColor = color(255, 215, 150);
			stripeColor = color(255, 215, 150);
			rect(0.235 * width, height * 0.553, height / 5.5, height / 5.5)
			image(honkT,
				Tx + x, 0.1 * height,
				0.5 * width, 0.9 * height,
				0, 0,
				width * 0.75, height * 1.67);
			push();
				fill(textColor);
				text('HONOKA', textW, textH);
					textStyle(NORMAL);
					textSize(width / 32);
					text('KOUSAKA', textW2, textH2);
			pop();
		} else if (season == 2) { // CHIKA
				slide = true;
				bgColor = color(255, 144, 40);
				outlineColor = color(255, 209, 61);
				stripeColor = color(255, 209, 61);
				rect(0.235 * width, height * 0.553, height / 5.5, height / 5.5)
				image(chikaT,
					Tx + x, 0.1 * height,
					0.5 * width, 0.9 * height,
					0, 0,
					width * 0.75, height * 1.67);
				push();
					fill(textColor);
					text('CHIKA', textW, textH);
						textStyle(NORMAL);
						textSize(width / 32);
						text('TAKAMI', textW2, textH2);
				pop();	
			}
	}

	// KOTORI
	if (mouseX > width * 0.38 &&
		mouseY > height * 0.56 &&
		mouseX < width * 0.51 &&
		mouseY < height * 0.73) {
		hoverRin = false;
		hoverPana = false;
		hoverMaki = false;
		hoverUmi = false;
		hoverHonk = false;
		hoverKoto = true;
		hoverEli = false;
		hoverNozo = false;
		hoverNico = false;
	}

	if (hoverKoto) {
		if (season == 1) {
		slide = true;
		bgColor = color(129, 226, 204);
		outlineColor = color(150, 255, 250);
		stripeColor = color(190, 255, 230);
		rect(0.375 * width, height * 0.553, height / 5.5, height / 5.5)
		image(kotoT,
			Tx + x, 0.1 * height,
			0.5 * width, 0.9 * height,
			0, 0,
			width * 0.75, height * 1.67);
		push();
			fill(textColor);
			text('KOTORI', textW, textH);
				textStyle(NORMAL);
				textSize(width / 32);
				text('MINAMI', textW2, textH2);
		pop();
		} else if (season == 2) { // RIKO
				slide = true;
				bgColor = color(135, 31, 91);
				outlineColor = color(234, 162, 204);
				stripeColor = color(239, 162, 178);
				rect(0.375 * width, height * 0.553, height / 5.5, height / 5.5)
				image(rikoT,
					Tx + x, 0.1 * height,
					0.5 * width, 0.9 * height,
					0, 0,
					width * 0.75, height * 1.67);
				push();
					fill(textColor);
					text('RIKO', textW, textH);
						textStyle(NORMAL);
						textSize(width / 32);
						text('SAKURAUCHI', textW2, textH2);
				pop();
			}
	}

	// ELI
	if (mouseX > width * 0.12 &&
		mouseY > height * 0.75 &&
		mouseX < width * 0.25 &&
		mouseY < height * 0.92) {
		hoverRin = false;
		hoverPana = false;
		hoverMaki = false;
		hoverUmi = false;
		hoverHonk = false;
		hoverKoto = false;
		hoverEli = true;
		hoverNozo = false;
		hoverNico = false;
	}

	if (hoverEli) {
		if (season == 1) {
		slide = true;
		bgColor = color(120, 180, 255);
		outlineColor = color(130, 220, 255);
		stripeColor = color(170, 220, 255);
		rect(0.115 * width, height * 0.743, height / 5.5, height / 5.5)
		image(eliT,
			Tx + x, 0.1 * height,
			0.5 * width, 0.9 * height,
			0, 0,
			width * 0.75, height * 1.67);
		push();
			fill(textColor);
			text('ELI', textW, textH);
				textStyle(NORMAL);
				textSize(width / 32);
				text('AYASE', textW2, textH2);
		pop();
		} else if (season == 2) { // MARI
			slide = true;
			bgColor = color(161, 122, 255);
			outlineColor = color(184, 100, 252);
			stripeColor = color(146, 64, 247);
			rect(0.115 * width, height * 0.743, height / 5.5, height / 5.5)
			image(mariT,
				Tx + x, 0.1 * height,
				0.5 * width, 0.9 * height,
				0, 0,
				width * 0.75, height * 1.67);
			push();
				fill(textColor);
				text('MARI', textW, textH);
					textStyle(NORMAL);
					textSize(width / 32);
					text('OHARA', textW2, textH2);
			pop();
			}
	}

	// NOZOMI
	if (mouseX > width * 0.26 &&
		mouseY > height * 0.75 &&
		mouseX < width * 0.39 &&
		mouseY < height * 0.92) {
		hoverRin = false;
		hoverPana = false;
		hoverMaki = false;
		hoverUmi = false;
		hoverHonk = false;
		hoverKoto = false;
		hoverEli = false;
		hoverNozo = true;
		hoverNico = false;
	}

	if (hoverNozo) {
		if (season == 1) {
		slide = true;
		bgColor = color(130, 100, 255);
		outlineColor = color(225, 170, 255);
		stripeColor = color(220, 180, 255);
		rect(0.255 * width, height * 0.743, height / 5.5, height / 5.5)
		image(nozoT,
			Tx + x, 0.1 * height,
			0.5 * width, 0.9 * height,
			0, 0,
			width * 0.75, height * 1.67);
		push();
			fill(textColor);
			text('NOZOMI', textW, textH);
				textStyle(NORMAL);
				textSize(width / 32);
				text('TOJO', textW2, textH2);
		pop();
		} else if (season == 2) { // KANAN
				slide = true;
				bgColor = color(50, 64, 168);
				outlineColor = color(180, 255, 255);
				stripeColor = color(79, 239, 239);
				rect(0.255 * width, height * 0.743, height / 5.5, height / 5.5)
				image(kananT,
					Tx + x, 0.1 * height,
					0.5 * width, 0.9 * height,
					0, 0,
					width * 0.75, height * 1.67);
				push();
					fill(textColor);
					text('KANAN', textW, textH);
						textStyle(NORMAL);
						textSize(width / 32);
						text('MATSUURA', textW2, textH2);
				pop();
			}
	}

	// NICO
	if (mouseX > width * 0.4 &&
		mouseY > height * 0.75 &&
		mouseX < width * 0.53 &&
		mouseY < height * 0.92) {
		hoverRin = false;
		hoverPana = false;
		hoverMaki = false;
		hoverUmi = false;
		hoverHonk = false;
		hoverKoto = false;
		hoverEli = false;
		hoverNozo = false;
		hoverNico = true;
	}

	if (hoverNico) {
		if (season == 1) {
		slide = true;
		bgColor = color(235, 133, 186);
		outlineColor = color(255, 230, 255);
		stripeColor = color(255, 190, 250);
		rect(0.395 * width, height * 0.743, height / 5.5, height / 5.5);
		push();
			fill(textColor);
			text('NICO', textW, textH);
				textStyle(NORMAL);
				textSize(width / 32);
				text('YAZAWA', textW2, textH2);
		pop();
		image(nicoT,
			Tx + x, 0.1 * height,
			0.5 * width, 0.9 * height,
			0, 0,
			width * 0.75, height * 1.67);
		} else if (season == 2) { // DIA
				slide = true;
				bgColor = color(68, 41, 61);
				outlineColor = color(163, 0, 81);
				stripeColor = color(178, 67, 110);
				rect(0.395 * width, height * 0.743, height / 5.5, height / 5.5);
				push();
					fill(textColor);
						text('DIA', textW, textH);
						textStyle(NORMAL);
						textSize(width / 32);
						text('KUROSAWA', textW2, textH2);
				pop();
				image(diaT,
					Tx + x, 0.1 * height,
					0.5 * width, 0.9 * height,
					0, 0,
					width * 0.75, height * 1.67);
			}
	}

	// icons
	push();
	fill(200,230,255);	// placeholders while loading
		rect(0.08 * width, height * 0.37, height / 6, height / 6);
		rect(0.22 * width, height * 0.37, height / 6, height / 6);
		rect(0.36 * width, height * 0.37, height / 6, height / 6);
		rect(0.1 * width, height * 0.56, height / 6, height / 6);
		rect(0.24 * width, height * 0.56, height / 6, height / 6)
		rect(0.38 * width, height * 0.56, height / 6, height / 6);
		rect(0.12 * width, height * 0.75, height / 6, height / 6);
		rect(0.26 * width, height * 0.75, height / 6, height / 6)
		rect(0.4 * width, height * 0.75, height / 6, height / 6);
	pop();
	if (season == 1) {	// Muse icons
	image(rin, 0.08 * width, height * 0.37, height / 6, height / 6);
	image(pana, 0.22 * width, height * 0.37, height / 6, height / 6);
	image(maki, 0.36 * width, height * 0.37, height / 6, height / 6);
	image(umi, 0.1 * width, height * 0.56, height / 6, height / 6);
	image(honk, 0.24 * width, height * 0.56, height / 6, height / 6)
	image(koto, 0.38 * width, height * 0.56, height / 6, height / 6);
	image(eli, 0.12 * width, height * 0.75, height / 6, height / 6);
	image(nozo, 0.26 * width, height * 0.75, height / 6, height / 6)
	image(nico, 0.4 * width, height * 0.75, height / 6, height / 6);
	} else if (season == 2) {	// Aqours icons
	image(ruby, 0.08 * width, height * 0.37, height / 6, height / 6);
	image(yoshi, 0.22 * width, height * 0.37, height / 6, height / 6);
	image(hanamaru, 0.36 * width, height * 0.37, height / 6, height / 6);
	image(you, 0.1 * width, height * 0.56, height / 6, height / 6);
	image(chika, 0.24 * width, height * 0.56, height / 6, height / 6)
	image(riko, 0.38 * width, height * 0.56, height / 6, height / 6);
	image(mari, 0.12 * width, height * 0.75, height / 6, height / 6);
	image(kanan, 0.26 * width, height * 0.75, height / 6, height / 6)
	image(dia, 0.4 * width, height * 0.75, height / 6, height / 6);
	}
	
	// logo
	// 5image(logo, 20,5, logo.width/4,logo.height/4);
	
	// copyrights
	push();
		fill(255,255,255,90);
		textSize(height/70);
		textStyle(NORMAL);
		text("©2013 プロジェクトラブライブ  ©KLabGames  ©bushiroad", 10,height-10);
	pop();
	
}

function mousePressed(){
	if (muse) {
		season = 1	
	} else if (aqours) {
		season = 2;
	}
	
}
	