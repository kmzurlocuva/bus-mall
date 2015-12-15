// Object Constructor: to manage photos
// Declare variable(s)
// Put objects in an array
var randomImage = new Object();
var products = [];

// randomImage.randNum = function(min,max) {
//   return Math.floor(Math.random() * (max - 1) + 1);
// }
function Product (name, path) {
  this.bag = name;
  this.path = path;
  this.tally = 0;
  this.views = 0;
  // console.log("tally in the Product function is a..." + typeof(this.tally));
  // console.log("'this' in the Product func is: " + this);
  products.push(this);
  totalClicks = 0;
}


var bag = new Product('bag', 'img/bag0.jpg');
var banana = new Product('banana', 'img/banana0.jpg');
var boots = new Product('boots', 'img/boots0.jpg');
var chair = new Product('chair', 'img/chair0.jpg');
var cthulhu = new Product('cthulhu', 'img/cthulhu0.jpg');
var dragon = new Product('dragon', 'img/dragon0.jpg');
var pen = new Product('pen', 'img/pen0.jpg');
var scissors = new Product('scissors', 'img/scissors0.jpg');
var shark = new Product('shark', 'img/shark0.jpg');
var sweep = new Product('sweep', 'img/sweep0.png');
var unicorn = new Product('unicorn', 'img/unicorn0.jpg');
var usb = new Product('usb', 'img/usb0.gif');
var water_can = new Product('water_can', 'img/water_can0.jpg');
var wine_glass = new Product('wine_glass', 'img/wine_glass0.jpg');


var counter = {
  leftObj: null,
  midObj: null,
  rightObj: null,

  leftEl: document.getElementById('image1'),
  midEl: document.getElementById('image2'),
  rightEl: document.getElementById('image3'),
  resultsEl: document.getElementById('results'),

  randNum: function() {
    return Math.floor(Math.random() * products.length);
    // console.log(random.Image.randNum);
  },


  getRandomImage: function() {
    var randNum1 = counter.randNum();
    var randNum2 = counter.randNum();
    var randNum3 = counter.randNum();
    console.log("get random image" + randNum1)

    if (counter.leftObj === counter.midObj || counter.leftObj === counter.rightObj || counter.rightObj === counter.midObj) {
      counter.getRandomImage();


    counter.leftObj = products[randNum1];
    counter.leftEl.src = counter.leftObj.path;
    counter.leftEl.id = counter.leftObj.name;

    counter.midObj = products[randNum2];
    counter.midEl.src = counter.midObj.path;
    counter.midEl.id = counter.midObj.name;

    counter.rightObj = products[randNum3];
    counter.rightEl.src = counter.rightObj.path;
    counter.rightEl.id = counter.rightObj.name;
  }
}
  results: function() {
    if (counter.totalClicks % 15 === 0) {
      counter.resultsEl.hidden = false;
      }
    }



//Register a 'submit'
counter.leftEl.addEventListener('click', function() {
  counter.leftEl.tally += 1;
  counter.leftEl.totalClicks += 1;
  // counter.getRandomImage();
})

counter.midEl.addEventListener('click', function() {
  counter.midEl.tally += 1;
  counter.midEl.totalClicks += 1;
  // counter.getRandomImage();
  })
counter.rightEl.addEventListener('click', function() {
  counter.rightEl.tally += 1;
  counter.rightEl.totalClicks += 1;
  // counter.getRandomImage();
  results();
  getRandomImage();
});
counter.getRandomImage();


//After further analysis, you realize that you'll need the following domain models:

  //A set of Product objects to manage all the attributes and behaviors around the product photos... hmm... how to make multiple objects easily?
  //A single ranker object to manage all the attributes and behaviors around a visitor's product-ranking experience.
