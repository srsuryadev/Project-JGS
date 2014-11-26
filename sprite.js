var 

s_player,
s_bg,
s_fg,
s_fb,
s_wa,
s_whatsapp,
s_gf,
s_hangout,
s_library,
s_books,
s_lectures,
s_buttons,
s_text;



function Sprite(img, x, y, width, height) {
	this.img = img;
	this.x = x*2;
	this.y = y*2;
	this.width = width*2;
	this.height = height*2;
};


Sprite.prototype.draw = function(ctx, x, y) {
	ctx.drawImage(this.img, this.x, this.y, this.width, this.height,
		x, y, this.width, this.height);
};

function initSprites(img){


	s_bg = new Sprite(img,   0, 0, 550, 600);
	s_bg.color = "#FFFFFF";
	s_fg = new Sprite(img, 138, 0, 112,  56);
	img.src="res/man.png";
	s_player=new Sprite(img, -22,-22, 220, 220);
	var fbpic=new Image();
	fbpic.src="res/fb.png";
	s_fb=new Sprite(fbpic,0,0,220,220);
	var wa=new Image();
	wa.src="res/wa.png";
	s_wa=new Sprite(wa,0,0,220,220);
	
}