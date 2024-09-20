let ctx;

let bkg;
let bkgRatio;
let bkgWidth;
let bkgHeight;

let img;
let imgRatio;
let imgWidth;
let imgHeight;

function setup() {
  // ctx = createCanvas(720, 400);
  ctx = createCanvas(windowWidth, windowHeight);
  // ctx.elt.style.border = '1px solid red';

  bkg = loadImage('img/background.jpg');
  img = loadImage('img/lecter2.png');

  // get image ratio: > 1 if portrait; < 1 if landscape
  imgRatio = img.width / img.weight;
  // depending on ratio, scale down width or height of the image
  imgWidth = imgRatio > 1 ? ctx.width : (img.width * (ctx.height / img.height));
  imgHeight = imgRatio > 1 ? (img.height * (ctx.width / img.width)) : ctx.height;

  // scale background image to foreground image
  bkgRatio = bkg.width / bkg.weight;
  // depending on ratio, scale down width or height of the image
  bkgWidth = bkgRatio > 1 ? imgWidth : (bkg.width * (imgHeight / bkg.height));
  bkgHeight = bkgRatio > 1 ? (bkg.height * (imgWidth / bkg.width)) : imgHeight;

  console.log(`Ctx: w${ctx.width} h${ctx.height}`);
  console.log(`Img: w${imgWidth} h${imgHeight}`);
  console.log(`Bkg: w${bkgWidth} h${bkgHeight}`);

  // noLoop();
  tint(28, 180, 49);
  filter(BLUR, 3);
}

function draw() {
  background(255);

  imageMode(CENTER);

  let distX = map(mouseX, 0, width, -15, 15);
  let distY = map(mouseY, 0, height, -10, 10);

  // if (bkgRatio > 1 ? bkg.width > imgWidth : bkg.height > imgHeight) {
  //   image(bkg, ctx.width / 2 - distX, ctx.height / 2 - distY, bkgWidth, bkgHeight);
  // } else {
  //   image(bkg, ctx.width / 2 + distX, ctx.height / 2 + distY, bkg.width, bkg.height);
  // }

  if (imgRatio > 1 ? img.width > ctx.width : img.height > ctx.height) {
    image(bkg, ctx.width / 2 - distX, ctx.height / 2.8 - distY, imgWidth * 0.9, imgHeight * 0.9);
    image(img, ctx.width / 2 + distX, ctx.height / 2 + distY, imgWidth, imgHeight);
  } else {
    image(bkg, ctx.width / 2 - distX, ctx.height / 2.8 - distY, bkgWidth * 0.9, bkgHeight * 0.9);
    tint(29, 120, 249, 80);
    image(img, ctx.width / 2 + distX + 2, ctx.height / 2 - 2 + distY, img.width, img.height);
    tint(249, 120, 1, 80);
    image(img, ctx.width / 2 + distX + 2, ctx.height / 2 - 4 + distY, img.width, img.height);
    tint(28, 180, 49)
    image(img, ctx.width / 2 + (distX / 2), ctx.height / 2 + (distY / 2), img.width, img.height);
  }

}
