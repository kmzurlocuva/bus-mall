// Object Constructor: to manage photos
// Declare variable(s)
// Put objects in an array
var randomImage = new Object();
var products = [];
var barChart;
var data = {
  labels: [],
  datasets: [
    {
      label: "Total Votes",
      fillColor: "rgba(220,220,220,0.2)",
      strokeColor: "rgba(220,220,220,1)",
      pointColor: "rgba(220,220,220,1)",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: []
    }
  ]
};

function Product (name, path) {
  this.name = name;
  this.path = path;
  this.tally = 0;
  this.views = 0;
  data.labels.push(name)
  // console.log("tally in the Product function is a..." + typeof(this.tally));
  // console.log("'this' in the Product func is: " + this);
  products.push(this);

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
  totalVotes: 0,
  // barChart: null,


  leftEl: document.getElementById('image1'),
  midEl: document.getElementById('image2'),
  rightEl: document.getElementById('image3'),
  resultsEl: document.getElementById('results'),
  // tableEl: document.getElementById('list'),
  ctx: document.getElementById('resultsTable'),

  randNum: function() {
    return Math.floor(Math.random() * products.length);
    // console.log(random.Image.randNum);
  },


  getRandomImage: function() {
    counter.leftObj = products[counter.randNum()];
    counter.midObj = products[counter.randNum()];
    counter.rightObj = products[counter.randNum()];
    // console.log("get random image" + randNum1)

    if (counter.leftObj === counter.midObj || counter.leftObj === counter.rightObj || counter.rightObj === counter.midObj) { counter.getRandomImage();
    }



    // counter.leftObj = products[];
    counter.leftEl.src = counter.leftObj.path;
    counter.leftEl.id = counter.leftObj.name;

    // counter.midObj = products[randNum2];
    counter.midEl.src = counter.midObj.path;
    counter.midEl.id = counter.midObj.name;

    // counter.rightObj = products[randNum3];
    counter.rightEl.src = counter.rightObj.path;
    counter.rightEl.id = counter.rightObj.name;
  },

showResults: function() {
    if (counter.totalVotes % 15 === 0) {
      counter.resultsEl.hidden = false;

    } else {
      counter.resultsEl.hidden = true;
    };
  },

  renderList: function() {
    for (var i = 0; i < products.length; i++) {
    products[i].render();
    // console.log(products[i].name)
  }

}};


counter.resultsEl.addEventListener('click', function() {
  data.datasets[0].data = [];
 for (var i = 0; i < products.length; i++) {
     var setLocal = JSON.stringify(products[i]);
     localStorage.setItem(setLocal, 'click');

     data.datasets[0].data[i] = products[i].tally;
   }
   var ctx = document.getElementById('resultsTable').getContext('2d');
   barChart = new Chart(ctx).Bar(data);

 });

// showButton: function() {
//   products.resultsButton.hidden = false;
//   products.resultsButton.addEvent('click', function() {
//     counter.resultsButton.hidden = true;
//     counter.barChart = new Chart(counter.ctx).Bar(data);
//   })
// },
// }

//Register a 'submit'
counter.leftEl.addEventListener('click', function() {
  counter.leftObj.tally += 1;
  counter.totalVotes += 1;
  counter.showResults();
  console.log(counter.leftObj.name + ' has ' + counter.leftObj.tally);
  counter.getRandomImage();
});

counter.midEl.addEventListener('click', function() {
  counter.midObj.tally += 1;
  counter.totalVotes += 1;
  counter.showResults();
  console.log(counter.midObj.name + ' has ' + counter.midObj.tally);
  counter.getRandomImage();
});
counter.rightEl.addEventListener('click', function() {
  counter.rightObj.tally += 1;
  counter.totalVotes += 1;
  counter.showResults();
  console.log(counter.rightObj.name + ' has ' + counter.rightObj.tally);
  counter.getRandomImage();
});

// Product.prototype.render = function() {
//   var tableEl = document.getElementById('list');
//   var liEl = document.createElement('li');
//   liEl.textContent = this.name + ' has ' + this.tally;
//   tableEl.appendChild(liEl);

// };

if (localStorage = true) {
  JSON.parse(localStorage.getItem(products));
};

counter.getRandomImage();
