/*jshint esversion: 6 */

$(function(){

    var model = {

        init: function() {

            this.cats = [
            {
              name: 'Larry',
              img: 'img/kitten.jpg'
            }, {
              name:'Bob',
              img: 'img/cat.jpg'
            }, {
              name:'Mike',
              img: 'img/kittens.jpg'
            }, {
              name:'Steve',
              img: 'img/cat.jpg'
            }, {
              name:'Edgar',
              img: 'img/kitten.jpg'
            }
          ];

          this.currentCat = 0;

        },

        getAllCats: function() {
            return this.cats;
        },

        getCurrentCat: function() {
            return this.cats[this.currentCat];
        }
    };


    var octopus = {

        getCats: function() {
            return model.getAllCats();
        },

        getCurrentCat: function() {
            return model.getCurrentCat();
        },

        init: function() {
            model.init();
            menuView.init();
            catView.init();
        }
    };


    var menuView = {

        init: function() {
          this.catList = $('#menuView ul');
          menuView.render();
        },

        render: function(){
          let htmlStr = '';
          octopus.getCats().forEach(function(cat){
          htmlStr += '<li class="">'+
                  cat.name +
                  '</li>';
          });
          this.catList.html( htmlStr );
        }
    };

    var catView = {

        init: function() {
          this.mainView = $('#catView');
          catView.render();
        },

        render: function(){
          let htmlStr = '';
          let currentCat = octopus.getCurrentCat();
          htmlStr += '<h1>' +
                  currentCat.name +
                  '</h1><img src=' + currentCat.img +
                  '><p>Number of clicks: ' + '</p>';
          this.mainView.html( htmlStr );
        }
    };

    octopus.init();
});

// (function () {
//   "use strict";
//   class Cat {
//
//     constructor(name, imageSrc) {
//       this.name = name;
//       this.imageSrc = imageSrc;
//       this.clicks = 0;
//     }
//
//     render() {
//       console.log('rendering');
//
//       let main = document.getElementById('main');
//
//       //add wrapper
//       let wrapper = document.createElement("div");
//       wrapper.id = this.name;
//       main.appendChild(wrapper);
//
//       //add cat name
//       let title = document.createElement("h1");
//       let titleNode = document.createTextNode(this.name);
//       title.appendChild(titleNode);
//       wrapper.appendChild(title);
//
//       //add cat image
//       let img = document.createElement("img");
//       img.src = this.imageSrc;
//       wrapper.appendChild(img);
//
//       //add counter
//       let tally = document.createElement("p");
//       let textNode = document.createTextNode('Number of clicks: 0');
//       tally.appendChild(textNode);
//       wrapper.appendChild(tally);
//
//       img.addEventListener('click', this.updateCount.bind(this));
//
//     }
//
//     updateCount() {
//       this.clicks++;
//       let elem = document.getElementById(this.name);
//       let copy = elem.getElementsByTagName("p")[0];
//       copy.innerHTML = 'Number of clicks: ' + this.clicks;
//     }
//   }
//
//   const cats = [
//     ['Larry', 'img/kitten.jpg'],
//     ['Bob', 'img/cat.jpg'],
//     ['Mike', 'img/kittens.jpg'],
//     ['Steve', 'img/cat.jpg'],
//     ['Edgar', 'img/kitten.jpg']
//   ];
//
//   const catList = [];
//
//   function init() {
//
//     //initiate cat objects
//     for (let i = 0, len = cats.length; i < len; i++) {
//       catList[i] = new Cat(cats[i][0], cats[i][1]);
//     }
//
//     //create menu
//     let menu = document.getElementById('menu');
//     let menuUL = document.createElement("ul");
//     menu.appendChild(menuUL);
//
//     for (let x = 0, len = catList.length; x < len; x++) {
//       let menuLI = document.createElement("li");
//       let elemTitle = document.createTextNode(catList[x].name);
//       menuLI.appendChild(elemTitle);
//       menuUL.appendChild(menuLI);
//
//       menuLI.addEventListener('click', menuSelect.bind(catList[x]));
//     }
//
//   }
//
//   function menuSelect() {
//
//     let main = document.getElementById('main');
//     if (main.firstChild != null) {
//       main.removeChild(main.firstChild);
//     }
//     this.render();
//
//   }
//
//   init();
//
// }());
