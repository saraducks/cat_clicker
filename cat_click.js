var all_cats = $.(".a")

$(function(){
	 
	var model={
		current_cat : null,
		cats : [{
			Count : 0,
			cat_name : "sid",
			img : 'http://www.cutestpaw.com/wp-content/uploads/2011/11/cute-cat.jpg'
		},
		{
			Count : 0,
			cat_name : "cindy",
			img : 'http://www.findcatnames.com/wp-content/uploads/2014/09/453768-cats-cute.jpg'
		},
		{
			Count : 0,
			cat_name : "cindy",
			img : 'http://www.laughspark.info/thumbfiles/705X705/cute-cat-with-beanie-and-glasses-635731307117442594-13752.jpg'
		}
		]
	};

	var octopus={
		init:function(){
           model.current_cat : cats[0];
           catlistview.init();
           catlistview.catview();
		},
		currentcat:function(){
			return model.current_cat;
		},
		setCurrentCat: function(cat) {
           model.current_cat = cat;
        },
        getCats:function(){
        	return model.cats;
        },
		computecatcount:function(){
			model.current_cat.Count++;
			catview.render();
		}
     };
    var catview={  
    	init:function(){
    	  this.catelem = document.getElementId('cat');
          this.catname = document.getElementById('name');
          this.catcount = document.getElementById('cat-count');
          this.catimg = document.getElementById('cat-img');

          this.catimg.addEventListener('click',function(){
        	octopus.computecatcount();
          });
          this.render();
    	},

    	render:function(){
    		var currentcat = octopus.currentcat
    		this.catcount.textContent = currentcat.Count;
    		this.catimg.src = currentcat.img;
    		this.catname.textContent = currentcat.cat_name;
    	}
        
     };
     vat catListview={
     	var catnewlist = octopus.getCats;
     	

     	init:function(){

     	}

     };

  octopus.init();
});