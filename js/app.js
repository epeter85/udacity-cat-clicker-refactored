/*jshint esversion: 6 */

$(function(){

    var model = {

        init: function() {

            this.cats = [
            {
              name: 'Larry',
              img: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg',
              clicks: 0
            }, {
              name:'Bob',
              img: 'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg',
              clicks: 0
            }, {
              name:'Mike',
              img: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg',
              clicks: 0
            }, {
              name:'Steve',
              img: 'https://images.pexels.com/photos/730896/pexels-photo-730896.jpeg',
              clicks: 0
            }, {
              name:'Edgar',
              img: 'https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg',
              clicks: 0
            }
          ];

          this.currentCat = 0;

          this.adminVisible = false;

        }
    };


    var octopus = {

        getCats: function() {
            return model.cats;
        },

        getCurrentCat: function() {
            return model.cats[model.currentCat];
        },

        setCurrentCat: function(index) {
            model.currentCat = index;
            catView.render();
            adminView.render();
        },

        increaseClick: function() {
            model.cats[model.currentCat].clicks ++;
            catView.render();
        },

        toggleAdmin: function() {

          this.$AdminSection = $('#adminForm');
          //on admin button
          if(model.adminVisible) {
            this.$AdminSection.hide();
            model.adminVisible = false;
          }else{
            adminView.render();
            this.$AdminSection.show();
            model.adminVisible = true;
          }
        },

        updateCurrentCat: function() {

          let $nameField =  $('#nameField');
          let $imgUrlField =  $('#imgUrlField');
          let $clicksField = $('#clicksField');
          //on save button
          model.cats[model.currentCat].name = $nameField.val();
          model.cats[model.currentCat].img = $imgUrlField.val();
          model.cats[model.currentCat].clicks = $clicksField.val();
          catView.render();
          menuView.render();

        },

        init: function() {
            model.init();
            menuView.init();
            catView.init();
            adminView.init();
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
          htmlStr += '<li class="">'+
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

    var adminView = {

      init: function() {
        var cat;
        //add listeners to buttons
        this.$AdminBtn = $('#adminBtn');
        this.$AdminBtn.on('click', function(e) {
            octopus.toggleAdmin();
        });

        this.$CancelBtn = $('#cancelBtn');
        this.$CancelBtn.on('click', function(e) {
            octopus.toggleAdmin();
        });

        this.$SaveBtn = $('#saveBtn');
        this.$SaveBtn.on('click', function(e) {
            octopus.toggleAdmin();
            octopus.updateCurrentCat();
        });

      },

      render: function(){

        let currentCat = octopus.getCurrentCat();
        //populate current cat name
        let $nameField =  $('#nameField');
        let $imgUrlField =  $('#imgUrlField');
        let $clicksField =  $('#clicksField');

        $nameField.val(currentCat.name);
        //populate current cat img url
        $imgUrlField.val(currentCat.img);
        //populate current cat img url
        $clicksField.val(currentCat.clicks);

      }

    };

    octopus.init();
});
