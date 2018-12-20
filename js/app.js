/*jshint esversion: 6 */

$(function(){

    var model = {

        init: function() {

            this.cats = [
            {
              name: 'Larry',
              img: 'img/kitten.jpg',
              clicks: 0
            }, {
              name:'Bob',
              img: 'img/cat.jpg',
              clicks: 0
            }, {
              name:'Mike',
              img: 'img/kittens.jpg',
              clicks: 0
            }, {
              name:'Steve',
              img: 'img/cat.jpg',
              clicks: 0
            }, {
              name:'Edgar',
              img: 'img/kitten.jpg',
              clicks: 0
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

        setCurrentCat: function(index) {
            model.currentCat = index;
            catView.render();
        },

        increaseClick: function() {
            model.cats[model.currentCat].clicks ++;
            catView.render();
        },

        init: function() {
            model.init();
            menuView.init();
            catView.init();
        }
    };


    var menuView = {

        init: function() {
          this.$catList = $('#menuView');
          this.$catList.on('click', 'li', function(e) {
            var index = $( "li" ).index( this );
            octopus.setCurrentCat(index);
            return false;
        });
          menuView.render();
        },

        render: function(){
          let htmlStr = '';
          octopus.getCats().forEach(function(cat){
          htmlStr += '<li class="" data-id=cat>'+
                  cat.name +
                  '</li>';
          });
          this.$catList.html( htmlStr );
        }
    };

    var catView = {

        init: function() {
          this.$mainView = $('#catView');
          this.$mainView.on('click', 'img', function(e) {
            octopus.increaseClick();
            return false;
        });
          catView.render();
        },

        render: function(){
          let htmlStr = '';
          let currentCat = octopus.getCurrentCat();
          htmlStr += '<h1>' +
                  currentCat.name +
                  '</h1><img src=' + currentCat.img +
                  '><p>Number of clicks: ' + currentCat.clicks + '</p>';
          this.$mainView.html( htmlStr );

        }
    };

    octopus.init();
});
