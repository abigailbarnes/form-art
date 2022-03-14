let han_purple = '#5835E9';
let medium_slate_blue = '#8861FD';
let mauve = '#FABCFC';
let pink_flamingo = '#FD78FD';
let magenta = '#FF00FF';

let rgb = [han_purple, medium_slate_blue, mauve, pink_flamingo, magenta];

function section(x) // will translate to height, width
{
  let widthTenth = windowWidth / 10;
  for(let i = 0; i <= 10; i++)
  {
    if(x <= widthTenth * i)
    {
      return i;
    }
  }
}

//easing function
//take a consistent linear value and give it a 'curve' of slowdown or speed up
function easeOutSine(x)
{
  return sin((x * PI) / 2);
}

function bubble(x, y, end, color, radius = 1)
{
  if(radius <= end)
  //if(easeOutSine(radius) <= 1)
  {
    fill(color);
    ellipse(x, y, radius);
    //console.log(radius);
    //radius += easeOutSine(radius);
    radius += 5;

    //radius += sin((radius * PI) / 2);
    //think about python's lamba function or Java's arrow function
    //defining a new function of 'no name' in the argument, no name
    //we do this because we want to REFERENCE the function, but not running it
    setTimeout(() => bubble(x, y, end, color, radius), 100);
  }
}

function setup() 
{
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 255);
  frameRate(20);
}

function draw()
{
  //let rgb = [han_purple, medium_slate_blue, mauve, pink_flamingo, magenta];

  //let sect = section(mouseX);
  //console.log(sect);
  
  let random_color = Math.trunc(Math.random() * rgb.length);

  //console.log("random color");
  //console.log(random_color);

  //fill(rgb[random_color]);
  noStroke();
  //let end_radius = (Math.random() * 50) + 5;
  let end_radius = (Math.random() * 50);
  //ellipse(mouseX, mouseY, radius);
  bubble(mouseX, mouseY, end_radius, rgb[random_color]);

  //2 approaches
  //1. function
    //create a function that draws circles in an increasing size
  //2. object oriented programming

  //scale(4);
}