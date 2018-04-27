let hoverRin, hoverPana, hoverMaki, hoverUmi, hoverHonk, hoverKoto, hoverEli, hoverNozo, hoverNico; // hovering over girl icon
let textW, textH, textW2, textH2, jptextH2;	// positions of name text
let namesizeL, namesizeS; // font sizes for name text
let outlineColor, // color of icon outlines
		textColor,	// text color for names
		langColor, seasColor, // text colors of top right buttons
		boxColor1, boxColor2, boxColor3, // fill colors of top right buttons
		stripeColor,	// diagonal stripe color
		bgColor;	// background color
let Tx, Ty;	// x and y position of large girl sprite
let x = 200;	// x offset for slide in animation
let y = 0;	// y offset for bounce animation
let slide;	// able to slide in when selected
let bounce = -40;	// bounce height
let fallSpeed = 2.5;	// speed of returning to original position after bouncing
let slideSpeed = 20;	// speed of slide-in animation
let muse, aqours;	// mouse over Season Select button to click
let hoverJP, hoverEng;	// mouse over language select button to click
let onButton = false;	// hovering over any of the top buttons to click and not trigger bounce
let season = 1;	// which set of images to use
let lang = 0;	// english or japanese text
let fontReady = false; // JPFont starts unloaded
let vol;	// current volume, from 0 to defaultVol
let defaultVol = 0.2; // max volume
let muted = true;	// music is currently muted

function preload() {
	// Muse images
	rin = loadImage("https://raw.githubusercontent.com/qmochi/waifuselect/master/rin.png");
	rinT = loadImage("https://raw.githubusercontent.com/qmochi/waifuselect/master/RinT.png");
		
	pana = loadImage("https://raw.githubusercontent.com/qmochi/waifuselect/master/hanayo.png");
	panaT = loadImage("https://raw.githubusercontent.com/qmochi/waifuselect/master/HanayoT.png");

	maki = loadImage("https://raw.githubusercontent.com/qmochi/waifuselect/master/maki.jpg");
	makiT = loadImage("https://raw.githubusercontent.com/qmochi/waifuselect/master/MakiT.png");

	umi = loadImage("https://raw.githubusercontent.com/qmochi/waifuselect/master/umi.png");
	umiT = loadImage("https://raw.githubusercontent.com/qmochi/waifuselect/master/UmiT.png");
		
	honk = loadImage("https://raw.githubusercontent.com/qmochi/waifuselect/master/honoka.png");
	honkT = loadImage("https://raw.githubusercontent.com/qmochi/waifuselect/master/HonokaT.png");

	koto = loadImage("https://raw.githubusercontent.com/qmochi/waifuselect/master/kotori.jpg");
	kotoT = loadImage("https://raw.githubusercontent.com/qmochi/waifuselect/master/KotoriT.png");

	eli = loadImage("https://raw.githubusercontent.com/qmochi/waifuselect/master/eli.jpg");
	eliT = loadImage("https://raw.githubusercontent.com/qmochi/waifuselect/master/eliT.png");

	nozo = loadImage("https://raw.githubusercontent.com/qmochi/waifuselect/master/nozomi.png");
	nozoT = loadImage("https://raw.githubusercontent.com/qmochi/waifuselect/master/NozomiT.png");

	nico = loadImage("https://raw.githubusercontent.com/qmochi/waifuselect/master/nico.png");
	nicoT = loadImage("https://raw.githubusercontent.com/qmochi/waifuselect/master/NicoT.png");

	// Aqours images
	ruby = loadImage("https://raw.githubusercontent.com/qmochi/waifuselect/master/ruby.png");
	rubyT = loadImage("https://raw.githubusercontent.com/qmochi/waifuselect/master/rubyT.png");
		
	yoshi = loadImage("https://raw.githubusercontent.com/qmochi/waifuselect/master/yoshiko.png");
	yoshiT = loadImage("https://raw.githubusercontent.com/qmochi/waifuselect/master/yoshikoT.png");

	hanamaru = loadImage("https://raw.githubusercontent.com/qmochi/waifuselect/master/hanamaru.jpg");
	hanamaruT = loadImage("https://raw.githubusercontent.com/qmochi/waifuselect/master/hanamaruT.png");

	you = loadImage("https://raw.githubusercontent.com/qmochi/waifuselect/master/you.png");
	youT = loadImage("https://raw.githubusercontent.com/qmochi/waifuselect/master/youT.png");
		
	chika = loadImage("https://raw.githubusercontent.com/qmochi/waifuselect/master/chika.jpg");
	chikaT = loadImage("https://raw.githubusercontent.com/qmochi/waifuselect/master/chikaT.png");

	riko = loadImage("https://raw.githubusercontent.com/qmochi/waifuselect/master/riko.png");
	rikoT = loadImage("https://raw.githubusercontent.com/qmochi/waifuselect/master/rikoT.png");

	mari = loadImage("https://raw.githubusercontent.com/qmochi/waifuselect/master/mari.png");
	mariT = loadImage("https://raw.githubusercontent.com/qmochi/waifuselect/master/mariT.png");

	kanan = loadImage("https://raw.githubusercontent.com/qmochi/waifuselect/master/kanan.png");
	kananT = loadImage("https://raw.githubusercontent.com/qmochi/waifuselect/master/kananT.png");

	dia = loadImage("https://raw.githubusercontent.com/qmochi/waifuselect/master/dia.jpg");
	diaT = loadImage("https://raw.githubusercontent.com/qmochi/waifuselect/master/diaT.png");
	
	logo = loadImage("https://raw.githubusercontent.com/qmochi/waifuselect/master/logo.png");
	
	// start music
	song = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/sif.mp3");
	song2 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/sif2.mp3");
	
	// Muse voice clips
	rinS = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/rin.mp3");
	rinS2 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/rin2.mp3");
	rinS3 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/rin3.mp3");
	rinS4 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/rin4.mp3");
	
	panaS = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/pana.mp3");
	panaS2 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/pana2.mp3");
	panaS3 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/pana3.mp3");
	panaS4 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/pana4.mp3");
	
	makiS = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/maki.mp3");
	makiS2 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/maki2.mp3");
	makiS3 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/maki3.mp3");
	makiS4 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/maki4.mp3");

	umiS = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/umi.mp3");
	umiS2 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/umi2.mp3");
	umiS3 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/umi3.mp3");
	umiS4 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/umi4.mp3");

	honkS = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/honk.mp3");
	honkS2 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/honk2.mp3");
	honkS3 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/honk3.mp3");
	honkS4 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/honk4.mp3");

	kotoS = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/koto.mp3");
	kotoS2 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/koto2.mp3");
	kotoS3 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/koto3.mp3");
	kotoS4 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/koto4.mp3");
	
	eliS = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/eli.mp3");
	eliS2 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/eli2.mp3");
	eliS3 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/eli3.mp3");
	eliS4 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/eli4.mp3");
	
	nozoS = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/nozo.mp3");
	nozoS2 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/nozo2.mp3");
	nozoS3 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/nozo3.mp3");
	nozoS4 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/nozo4.mp3");
	
	nicoS = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/nico.mp3");
	nicoS2 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/nico2.mp3");
	nicoS3 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/nico3.mp3");
	nicoS4 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/nico4.mp3");

	// Aqours voice clips
	rubyS = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/ruby.mp3");
	rubyS2 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/ruby2.mp3");
	rubyS3 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/ruby3.mp3");
	rubyS4 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/ruby4.mp3");
		
	yoshiS = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/yoshiko.mp3");
	yoshiS2 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/yoshiko2.mp3");
	yoshiS3 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/yoshiko3.mp3");
	yoshiS4 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/yoshiko4.mp3");

	hanamaruS = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/hanamaru.mp3");
	hanamaruS2 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/hanamaru2.mp3");
	hanamaruS3 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/hanamaru3.mp3");
	hanamaruS4 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/hanamaru4.mp3");	

	youS = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/you.mp3");
	youS2 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/you2.mp3");
	youS3 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/you3.mp3");
	youS4 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/you4.mp3");
		
	chikaS = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/chika.mp3");
	chikaS2 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/chika2.mp3");
	chikaS3 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/chika3.mp3");
	chikaS4 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/chika4.mp3");

	rikoS = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/riko.mp3");
	rikoS2 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/riko2.mp3");
	rikoS3 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/riko3.mp3");
	rikoS4 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/riko4.mp3");

	mariS = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/mari.mp3");
	mariS2 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/mari2.mp3");
	mariS3 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/mari3.mp3");
	mariS4 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/mari4.mp3");

	kananS = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/kanan.mp3");
	kananS2 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/kanan2.mp3");
	kananS3 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/kanan3.mp3");
	kananS4 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/kanan4.mp3");

	diaS = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/dia.mp3");
	diaS2 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/dia2.mp3");
	diaS3 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/dia3.mp3");
	diaS4 = loadSound("https://raw.githubusercontent.com/qmochi/waifuselect/master/dia4.mp3");
	
}

function fontRead() {
	fontReady = true;
}

function setup() {
	if (windowWidth > windowHeight) {
	createCanvas(windowHeight*1.25, windowHeight);
	} else createCanvas(windowWidth, windowWidth*0.75);
	
	noStroke();
	
	jpfont = loadFont("rodin.OTF", fontRead);
	if (!muted) {
		vol = defaultVol;	
	} else vol = 0;
	
	// x offset of sprites for sliding in
	x = 200;
	y = 0;

	// default colors
	outlineColor = color(255, 255, 255);
	textColor = color(255,255,255);
	stripeColor = color(255, 170, 200);
	bgColor = color(100, 180, 255);
	
}

function draw() {
	background(bgColor);
	
	// location of name text
	textW = (width * 0.09);
	textH = (height * 0.29);
	textW2 = (width * 0.095); // last name
	textH2 = (height * 0.18);
	
	// location of Japanese name text
	jptextH2 = (height * 0.16);
	
	// name font sizes
	namesizeL = (width/10); // scale with canvas size
	namesizeS = (width/32);
	
	// location of icon images
	Tx = (0.5 * width);
	Ty = (0.1 * height);
	
	// change font depending on language
	if (lang == 1) {
		if (fontReady) {
		textFont(jpfont);
		} else textFont('Yu Gothic');	// if Rodin.otf loads, use that for jpfont - otherwise use this. Meiryo backup option
	} else if (lang == 0) {
		textFont('Helvetica');
	}
	
	// background stripe
	push();
		stroke(stripeColor);
		strokeWeight(width / 4);
		strokeCap(PROJECT);
		line(width, 0, width / 2, height)
	pop();
	
	// rotating circles
			// default circle rotation values
		let rot1 = (-0.01 * frameCount);
		let rot2 = (0.02 * frameCount);
		let rot3 = (-0.018 * frameCount);
	push();
		noFill();
		stroke(255,255,255,140);
		strokeCap(SQUARE);
		translate(width*0.75,height*0.6);
			push();
				rotate(rot1);
				strokeWeight(width/14);
				arc(0,0, width*0.7,width*0.7, 0, PI+QUARTER_PI);
			pop();
				push();
					rotate(rot2);
					strokeWeight(width/40);
					arc(0,0, width*0.535,width*0.535, 0, PI-1);
				pop();
					push();
						rotate(rot3);
						strokeWeight(width/20);
						arc(0,0, width*0.4,width*0.4, 0, HALF_PI);
					pop();
	pop();
	
	// music player
	song.setVolume(vol);
	song2.setVolume(vol);
		// change music with season
	if (season == 1) {
		if (song2.isPlaying()) {
			song2.stop();
			song.loop();
		} else if (!song.isPlaying()) {
			song.loop();
		}
	}
	if (season == 2) {
		if (song.isPlaying()) {
			song.stop();
			song2.loop();
		} else if (!song2.isPlaying()) {
			song2.loop();
		}
	}
	
	// mouse hovering over button
	if (mouseX > width-360 && mouseX < width-60 && mouseY > 20 && mouseY < 60) {
		onButton = true;
	} else onButton = false;
	
	// mute button
	if (mouseX > width-360 && mouseX < width-280 && mouseY > 20 && mouseY < 60) {
			boxColor3 = color(255,255,255);
	}	else if (!muted) {
			boxColor3 = color(144, 203, 237);
	} else boxColor3 = color(133, 134, 229);
	
	// language select button
	if (mouseX > width-270 && mouseX < width-180 && mouseY > 20 && mouseY < 60) {
			boxColor1 = color(255,255,255);
			if (lang == 0) {
				langColor = color(97, 127, 249)
				hoverJP = true;
				hoverEng = false;
			} else if (lang == 1) {
				langColor = color(242, 106, 142)
				hoverJP = false;
				hoverEng = true;	
			}
	} else if (lang == 0) { // if English
			langColor = color(255,255,255);	
			boxColor1 = color(97, 127, 249);
	} else if (lang == 1) {	// if JP
			langColor = color(255, 255, 255);
			boxColor1 = color(242, 106, 142);
	}
	
	// season select button
	if (mouseX > width-170 && mouseX < width-60 && mouseY > 20 && mouseY < 60) {
			boxColor2 = color(255,255,255);
			if (season == 1) {
				seasColor = color(255, 58, 156);
				muse = false;
				aqours = true;
			} else if (season == 2) {
				seasColor = color(100,190,255);
				muse = true;
				aqours = false;	
			}
	} else if (season == 1) {
			seasColor = color(255,255,255);
			boxColor2 = color(255, 58, 156);
		} else if (season == 2) {
			seasColor = color(255,255,255);
			boxColor2 = color(100,190,255);
	}
	
	// season select boxes
	push();
		translate(width-220,20);
		textSize(20);
		textFont('Helvetica');
	
		push();	// white outline
			fill(255,255,255);
			scale(1.5);
			quad(-80,0, 120,0, 100,30, -100,30);
		pop();
	
		// music volume toggle
		push();
			translate(-113,0);
			fill(boxColor3);
			quad(0,5, 63,5, 40,40, -23,40);
			textSize(18);
			textStyle(NORMAL);
			if (vol > 0) {
				text('🔊',8,29);
			} else {
				text('🔈',8,29);
			}
		pop();	
		
		// ENG/JP
		push();	
			translate(-15,0);
			fill(boxColor1);
			quad(-25,5, 63,5, 39,40, -47,40);
		pop();
			push();
				fill(langColor);
				if (lang == 0) {
					textStyle(ITALIC);
					text("ENG",-30,30);
				} else if (lang == 1) {
						textStyle(BOLD);
						textFont(jpfont);
						text("日本語",-40,30);	
				}
			pop();
		
		// MUSE/AQOURS
		push();	
			translate(54,0);
			fill(boxColor2);
			quad(5,5, 113,5, 90,40, -19,40);
		pop();
			push();	// text inside box
				translate(79,0);
				fill(seasColor);
			if (lang == 0) {
				textStyle(ITALIC);
				if (season == 1) {
					//text("µ's",5,30);
					text("MUSE",-8,30);	
				} else if (season == 2) {
					text("AQOURS",-22,30);				
				}
			} else if (lang == 1) {
				textStyle(BOLD);
				textFont(jpfont);
					if (season == 1) {
						//text("µ's",5,30);
						text("ミューズ",-18,30);	
				} else if (season == 2) {
						text("アクア",-8,30);				
				}
			}
			pop();
	
	pop();

	// title
	fill(textColor);
	if (!hoverRin && !hoverPana && !hoverMaki && !hoverUmi && !hoverHonk && !hoverKoto && !hoverEli && !hoverNozo && !hoverNico) {
		if (lang == 0) {
		push();
		textSize(namesizeS);
		textStyle(NORMAL);
		text("CHOOSE YOUR", textW2, textH2);
			textSize(namesizeL);
			textStyle(BOLD);
			text("WAIFU", textW, textH);
		pop();
		}
		else if (lang == 1) {
		push();
		textSize(namesizeL);
			textStyle(BOLD);
		text("ワイフ", textW - 10, textH2 + 40);
			textSize(namesizeS);
			textStyle(NORMAL);
			text("を選ぶ", textW2, textH);
		pop();
		}
	}
	
	fill(outlineColor); // icon outline color
	textSize(namesizeL);	// big name font size
	textStyle(BOLD);
	
	// sprite slide in animations
	if (slide == true && x > 0) {
		x = x - 20;
	}
	if (x <= 0) {
		slide = false;
	}
	
	// come back down after bounce animation
	if (y < 0) {
		y += fallSpeed;
	}

	// logo
	push();
		tint(255,180);
		image(logo, width-260,height-70, logo.width/4,logo.height/4);
	pop();
		
// ANIME GIRLS!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	
	// RIN
	if (mouseX > width * 0.08 && mouseY > height * 0.37 &&
		mouseX < width * 0.21 && mouseY < height * 0.54) {
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
			bgColor = color(245, 170, 40);
			outlineColor = color(255, 230, 120);
			stripeColor = color(255, 230, 120);
			rect(0.075 * width, height * 0.362, height / 5.5, height / 5.5);
			image(rinT,
				Tx + x, Ty + y, // dx,dy - x/y coordinates of destination rectangle
				0.5 * width, 0.9 * height, // dWidth,dHeight - width/height of destination rect
				0, 0, // sx,sy - x/y coords of subsection rect to draw img
				width * 0.75, height * 1.67); // sWidth,sHeight - width/height of img subsection
			push();
				fill(textColor);
				if (lang == 0) {
				text('RIN', textW, textH);
					textStyle(NORMAL);
					textSize(namesizeS);
					text('HOSHIZORA', textW2, textH2);
				} else if (lang == 1) {
				text('凛', textW, textH);
					textStyle(NORMAL);
					textSize(namesizeS);
					text('星空', textW2, jptextH2);
				}
			pop();
		} else if (season == 2) {
				// RUBY
				slide = true;
				bgColor = color(230, 30, 90);
				outlineColor = color(255, 220, 255);
				stripeColor = color(255, 230, 240);
				rect(0.075 * width, height * 0.362, height / 5.5, height / 5.5)
				image(rubyT,
					Tx + x, Ty + y,
					0.5 * width, 0.9 * height,
					0, 0,
					width * 0.75, height * 1.67);
				push();
					fill(textColor);
					if (lang == 0) {
					text('RUBY', textW, textH);
						textStyle(NORMAL);
						textSize(namesizeS);
						text('KUROSAWA', textW2, textH2);
					} else if (lang == 1) {
					text('ルビィ', textW, textH);
						textStyle(NORMAL);
						textSize(namesizeS);
						text('黒澤', textW2, jptextH2);
					}
				pop();	
				}
	}

	// HANAYO
	if (mouseX > width * 0.22 && mouseX < width * 0.35 && 
			mouseY > height * 0.37 && mouseY < height * 0.54) {
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
			bgColor = color(142, 229, 105);
			outlineColor = color(220, 255, 180);
			stripeColor = color(240, 255, 170);
			rect(0.215 * width, height * 0.362, height / 5.5, height / 5.5)
			image(panaT,
				Tx + x, Ty + y,
				0.5 * width, 0.9 * height,
				0, 0,
				width * 0.75, height * 1.67);
			push();
				fill(textColor);
				if (lang == 0) {
				text('HANAYO', textW, textH);
					textStyle(NORMAL);
					textSize(namesizeS);
					text('KOIZUMI', textW2, textH2);
				} else if (lang == 1) {
				text('花陽', textW, textH);
					textStyle(NORMAL);
					textSize(namesizeS);
					text('小泉', textW2, jptextH2);
				}
			pop();	
		} else if (season == 2) { // YOSHIKO
				slide = true;
				bgColor = color(142, 162, 178);
				outlineColor = color(96, 158, 209);
				stripeColor = color(16, 94, 150);
				rect(0.215 * width, height * 0.362, height / 5.5, height / 5.5)
				image(yoshiT,
					Tx + x, Ty + y,
					0.5 * width, 0.9 * height,
					0, 0,
					width * 0.75, height * 1.67);
				push();
					fill(textColor);
					if (lang == 0) {
					text('YOSHIKO', textW, textH);
						textStyle(NORMAL);
						textSize(namesizeS);
						text('TSUSHIMA', textW2, textH2);
					} else if (lang == 1) {
					text('善子', textW, textH);
						textStyle(NORMAL);
						textSize(namesizeS);
						text('津島', textW2, jptextH2);	
					}
				pop();	
			}
	}

	// MAKI
	if (mouseX > width * 0.36 && mouseX < width * 0.49 && 
			mouseY > height * 0.37 && mouseY < height * 0.54) {
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
				Tx + x, Ty + y,
				0.5 * width, 0.9 * height,
				0, 0,
				width * 0.75, height * 1.67);
			push();
				fill(textColor);
				if (lang == 0) {
				text('MAKI', textW, textH);
					textStyle(NORMAL);
					textSize(namesizeS);
					text('NISHIKINO', textW2, textH2);
				} else if (lang == 1) {
				text('真姫', textW, textH);
					textStyle(NORMAL);
					textSize(namesizeS);
					text('西木野', textW2, jptextH2);
				}
			pop();
		} else if (season == 2) { // HANAMARU
				slide = true;
				bgColor = color(198, 196, 53);
				outlineColor = color(255, 252, 81);
				stripeColor = color(255, 252, 181);
				rect(0.355 * width, height * 0.362, height / 5.5, height / 5.5)
				image(hanamaruT,
					Tx + x, Ty + y,
					0.5 * width, 0.9 * height,
					0, 0,
					width * 0.75, height * 1.67);
					push();
					fill(textColor);
				if (lang == 0) {
				text('HANAMARU', textW, textH);
					textStyle(NORMAL);
					textSize(namesizeS);
					text('KUNIKIDA', textW2, textH2);
				} else if (lang == 1) {
				text('花丸', textW, textH);
					textStyle(NORMAL);
					textSize(namesizeS);
					text('国木田', textW2, jptextH2);
				}
				pop();			
		}
	}

	// UMI
	if (mouseX > width * 0.1 && mouseX < width * 0.23 && 
			mouseY > height * 0.56 && mouseY < height * 0.73) {
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
				Tx + x, Ty + y,
				0.5 * width, 0.9 * height,
				0, 0,
				width * 0.75, height * 1.67);
			push();
				fill(textColor);
				if (lang == 0) {
				text('UMI', textW, textH);
					textStyle(NORMAL);
					textSize(namesizeS);
					text('SONODA', textW2, textH2);
				} else if (lang == 1) {
				text('海未', textW, textH);
					textStyle(NORMAL);
					textSize(namesizeS);
					text('園田', textW2, jptextH2);
				}
			pop();
		} else if (season == 2) { // YOU
				slide = true;
				bgColor = color(76, 159, 255);
				outlineColor = color(244, 253, 255);
				stripeColor = color(244, 253, 255);
				rect(0.095 * width, height * 0.553, height / 5.5, height / 5.5)
				image(youT,
					Tx + x + x, Ty + y,
					0.5 * width, 0.9 * height,
					0, 0,
					width * 0.75, height * 1.67);
				push();
					fill(textColor);
				if (lang == 0) {
				text('YOU', textW, textH);
					textStyle(NORMAL);
					textSize(namesizeS);
					text('WATANABE', textW2, textH2);
				} else if (lang == 1) {
				text('曜', textW, textH);
					textStyle(NORMAL);
					textSize(namesizeS);
					text('渡辺', textW2, jptextH2);
				}
				pop();	
			}
	}

	// HONOKA
	if (mouseX > width * 0.24 && mouseX < width * 0.37 &&
			mouseY > height * 0.56 && mouseY < height * 0.73) {
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
				Tx + x, Ty + y,
				0.5 * width, 0.9 * height,
				0, 0,
				width * 0.75, height * 1.67);
			push();
				fill(textColor);
				if (lang == 0) {
				text('HONOKA', textW, textH);
					textStyle(NORMAL);
					textSize(namesizeS);
					text('KOUSAKA', textW2, textH2);
				} else if (lang == 1) {
				text('穂乃果', textW, textH);
					textStyle(NORMAL);
					textSize(namesizeS);
					text('高坂', textW2, jptextH2);
				}
			pop();
		} else if (season == 2) { // CHIKA
				slide = true;
				bgColor = color(255, 144, 40);
				outlineColor = color(255, 209, 61);
				stripeColor = color(255, 209, 61);
				rect(0.235 * width, height * 0.553, height / 5.5, height / 5.5)
				image(chikaT,
					Tx + x, Ty + y,
					0.5 * width, 0.9 * height,
					0, 0,
					width * 0.75, height * 1.67);
				push();
					fill(textColor);
				if (lang == 0) {
				text('CHIKA', textW, textH);
					textStyle(NORMAL);
					textSize(namesizeS);
					text('TAKAMI', textW2, textH2);
				} else if (lang == 1) {
				text('千歌', textW, textH);
					textStyle(NORMAL);
					textSize(namesizeS);
					text('高海', textW2, jptextH2);
				}
				pop();	
			}
	}

	// KOTORI
	if (mouseX > width * 0.38 && mouseX < width * 0.51 &&
		mouseY > height * 0.56 && mouseY < height * 0.73) {
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
		bgColor = color(109, 216, 204);
		outlineColor = color(150, 255, 250);
		stripeColor = color(190, 255, 230);
		rect(0.375 * width, height * 0.553, height / 5.5, height / 5.5)
		image(kotoT,
			Tx + x, Ty + y,
			0.5 * width, 0.9 * height,
			0, 0,
			width * 0.75, height * 1.67);
		push();
			fill(textColor);
				if (lang == 0) {
				text('KOTORI', textW, textH);
					textStyle(NORMAL);
					textSize(namesizeS);
					text('MINAMI', textW2, textH2);
				} else if (lang == 1) {
				text('ことり', textW, textH);
					textStyle(NORMAL);
					textSize(namesizeS);
					text('南', textW2, jptextH2);
				}
		pop();
		} else if (season == 2) { // RIKO
				slide = true;
				bgColor = color(145, 68, 136);
				outlineColor = color(234, 162, 204);
				stripeColor = color(236, 184, 239);
				rect(0.375 * width, height * 0.553, height / 5.5, height / 5.5)
				image(rikoT,
					Tx + x, Ty + y,
					0.5 * width, 0.9 * height,
					0, 0,
					width * 0.75, height * 1.67);
				push();
					fill(textColor);
				if (lang == 0) {
				text('RIKO', textW, textH);
					textStyle(NORMAL);
					textSize(namesizeS);
					text('SAKURAUCHI', textW2, textH2);
				} else if (lang == 1) {
				text('梨子', textW, textH);
					textStyle(NORMAL);
					textSize(namesizeS);
					text('桜内', textW2, jptextH2);
				}
				pop();
			}
	}

	// ELI
	if (mouseX > width * 0.12 && mouseX < width * 0.25 &&
		mouseY > height * 0.75 && mouseY < height * 0.92) {
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
			Tx + x, Ty + y,
			0.5 * width, 0.9 * height,
			0, 0,
			width * 0.75, height * 1.67);
		push();
			fill(textColor);
				if (lang == 0) {
				text('ELI', textW, textH);
					textStyle(NORMAL);
					textSize(namesizeS);
					text('AYASE', textW2, textH2);
				} else if (lang == 1) {
				text('絵里', textW, textH);
					textStyle(NORMAL);
					textSize(namesizeS);
					text('絢瀬', textW2, jptextH2);
				}
		pop();
		} else if (season == 2) { // MARI
			slide = true;
			bgColor = color(182, 127, 255);
			outlineColor = color(184, 100, 252);
			stripeColor = color(202, 183, 255);
			rect(0.115 * width, height * 0.743, height / 5.5, height / 5.5)
			image(mariT,
				Tx + x, Ty + y,
				0.5 * width, 0.9 * height,
				0, 0,
				width * 0.75, height * 1.67);
			push();
				fill(textColor);
				if (lang == 0) {
				text('MARI', textW, textH);
					textStyle(NORMAL);
					textSize(namesizeS);
					text('OHARA', textW2, textH2);
				} else if (lang == 1) {
				text('鞠莉', textW, textH);
					textStyle(NORMAL);
					textSize(namesizeS);
					text('小原', textW2, jptextH2);
				}
			pop();
			}
	}

	// NOZOMI
	if (mouseX > width * 0.26 && mouseX < width * 0.39 &&
		mouseY > height * 0.75 && mouseY < height * 0.92) {
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
			Tx + x, Ty + y,
			0.5 * width, 0.9 * height,
			0, 0,
			width * 0.75, height * 1.67);
		push();
			fill(textColor);
				if (lang == 0) {
				text('NOZOMI', textW, textH);
					textStyle(NORMAL);
					textSize(namesizeS);
					text('TOJO', textW2, textH2);
				} else if (lang == 1) {
				text('希', textW, textH);
					textStyle(NORMAL);
					textSize(namesizeS);
					text('東條', textW2, jptextH2);
				}
		pop();
		} else if (season == 2) { // KANAN
				slide = true;
				bgColor = color(50, 64, 168);
				outlineColor = color(180, 255, 255);
				stripeColor = color(79, 239, 239);
				rect(0.255 * width, height * 0.743, height / 5.5, height / 5.5)
				image(kananT,
					Tx + x, Ty + y,
					0.5 * width, 0.9 * height,
					0, 0,
					width * 0.75, height * 1.67);
				push();
					fill(textColor);
				if (lang == 0) {
				text('KANAN', textW, textH);
					textStyle(NORMAL);
					textSize(namesizeS);
					text('MATSUURA', textW2, textH2);
				} else if (lang == 1) {
				text('果南', textW, textH);
					textStyle(NORMAL);
					textSize(namesizeS);
					text('松浦', textW2, jptextH2);
				}
				pop();
			}
	}

	// NICO
	if (mouseX > width * 0.4 && mouseX < width * 0.53 &&
		mouseY > height * 0.75 && mouseY < height * 0.92) {
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
				if (lang == 0) {
				text('NICO', textW, textH);
					textStyle(NORMAL);
					textSize(namesizeS);
					text('YAZAWA', textW2, textH2);
				} else if (lang == 1) {
				text('にこ', textW, textH);
					textStyle(NORMAL);
					textSize(namesizeS);
					text('矢澤', textW2, jptextH2);
				}
		pop();
		image(nicoT,
			Tx + x, Ty + y,
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
				if (lang == 0) {
				text('DIA', textW, textH);
					textStyle(NORMAL);
					textSize(namesizeS);
					text('KUROSAWA', textW2, textH2);
				} else if (lang == 1) {
				text('ダイヤ', textW, textH);
					textStyle(NORMAL);
					textSize(namesizeS);
					text('黒澤', textW2, jptextH2);
				}
				pop();
				image(diaT,
					Tx + x, Ty + y,
					0.5 * width, 0.9 * height,
					0, 0,
					width * 0.75, height * 1.67);
			}
	}

	// icons
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
	
	// copyrights
	push();
		fill(255,255,255,90);
		textSize(height/70);
		textStyle(NORMAL);
		textFont('Helvetica');
		text("©2013 プロジェクトラブライブ  ©KLabGames  ©bushiroad", 10,height-10);
	pop();

}

function mousePressed(){
	// toggle music
	if (mouseX > width-360 && mouseX < width-280 && mouseY > 20 && mouseY < 60) {
		mute();
	}
	
	// toggle language
	if (mouseX > width-270 && mouseX < width-180 && mouseY > 20 && mouseY < 60) {
		language();
	}
	
	// toggle season
	if (mouseX > width-170 && mouseX < width-60 && mouseY > 20 && mouseY < 60) {
		seas();
	}

	// click on girl
	if (hoverRin || hoverPana || hoverMaki || hoverUmi || hoverHonk || hoverKoto || hoverEli || hoverNozo || hoverNico) {
		if (!onButton) {
			y = bounce;
				
			if (hoverRin) {
				if (season == 1) {
					playVoice([rinS, rinS2, rinS3, rinS4]);
				} else if (season == 2) {
					playVoice([rubyS, rubyS2, rubyS3, rubyS4]);
				}
			} else if (hoverPana) {
				if (season == 1) {
					playVoice([panaS, panaS2, panaS3, panaS4]);
				} else if (season == 2) {
					playVoice([yoshiS, yoshiS2, yoshiS3, yoshiS4]);
				}
			} else if (hoverMaki) {
				if (season == 1) {
					playVoice([makiS, makiS2, makiS3, makiS4]);
				} else if (season == 2) {
					playVoice([hanamaruS, hanamaruS2, hanamaruS3, hanamaruS4]);
				}
			} else if (hoverUmi) {
				if (season == 1) {
					playVoice([umiS, umiS2, umiS3, umiS4]);
				} else if (season == 2) {
					playVoice([youS, youS2, youS3, youS4]);
				} 
			}	else if (hoverHonk) {
				if (season == 1) {
					playVoice([honkS, honkS2, honkS3, honkS4]);
				} else if (season == 2) {
					playVoice([chikaS, chikaS2, chikaS3, chikaS4]);
				}
			} else if (hoverKoto) {
				if (season == 1) {
					playVoice([kotoS, kotoS2, kotoS3, kotoS4]);
				} else if (season == 2) {
					playVoice([rikoS, rikoS2, rikoS3, rikoS4]);
				}
			} else if (hoverEli) {
				if (season == 1) {
					playVoice([eliS, eliS2, eliS3, eliS4]);
				} else if (season == 2) {
					playVoice([mariS, mariS2, mariS3, mariS4]);
				}
			} else if (hoverNozo) {
				if (season == 1) {
					playVoice([nozoS, nozoS2, nozoS3, nozoS4]);
				} else if (season == 2) {
					playVoice([kananS, kananS2, kananS3, kananS4]);
				}
			} else if (hoverNico) {
				if (season == 1) {
					playVoice([nicoS, nicoS2, nicoS3, nicoS4]);
				} else if (season == 2) {
					playVoice([diaS, diaS2, diaS3, diaS4]);
				}
			}
		}
	}

}

function keyTyped() {
	// toggle mute music
  if (key === 'm') {
		mute();
	}
	
	// toggle language
	if (key === 'l') {
		if (lang == 0) {
			lang = 1;
		} else if (lang == 1) {
			lang = 0;
		}
	}
	return false;
	
}

function seas() {
	if (muse) {
			season = 1;
			// cycle background color if still on default
			if (!hoverRin && !hoverPana && !hoverMaki && !hoverUmi && !hoverHonk && !hoverKoto && !hoverEli && !hoverNozo && !hoverNico) {
				bgColor = color(100, 180, 255);
				stripeColor = color(255, 170, 200);
			}
	} else if (aqours) {
			season = 2;
			// cycle background color if still on default
			if (!hoverRin && !hoverPana && !hoverMaki && !hoverUmi && !hoverHonk && !hoverKoto && !hoverEli && !hoverNozo && !hoverNico) {
				stripeColor = color(100, 180, 255);
				bgColor = color(255, 170, 200);
			}
		}
	
}

function language() {
	if (hoverJP) {
		lang = 1;
	} else if (hoverEng) {
			lang = 0;
		}
	
}

function mute() {
	if (vol > 0) {
			vol = 0;
			muted = true;
	} else {
		vol = defaultVol;
		muted = false;
	}
	
}

function playVoice(clips) {
	let voice = random(clips);
	voice.setVolume(0.42);
		if (voice.isPlaying()) {
			voice.stop();
			voice.play();
		} else voice.play();
	
}

function windowResized() {
	if (windowWidth > windowHeight) {
		resizeCanvas(windowHeight*1.25, windowHeight);
	} else resizeCanvas(windowWidth, windowWidth*0.75);
}
