var cat_list_names = [{
	clickCount : 0,
	name : 'Bella',
	imgSrc: 'img/22252709_010df3379e_z.jpg',
	nickname: ['Bell','Ting','lala']
},
{
	clickCount : 0,
	name : 'Chole',
	imgSrc: 'img/434164568_fea0ad4013_z.jpg',
	nickname: ['Cool','Blink']
},
{
    clickCount : 0,
	name : 'Lucy',
	imgSrc: 'img/1413379559_412a540d29_z.jpg',
	nickname: ['Lucky','Cutie','pinky']	
},
{
    clickCount : 0,
	name : 'Smokey',
	imgSrc: 'img/4154543904_6e2428c421_z.jpg',
	nickname: ['sleepy']	
}
];



var cat = function(data){
	this.clickCount = ko.observable(data.clickCount);
	this.nickname = ko.observable(data.nickname);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
    this.resultData = ko.observable();


     //This will compute if the incrementCounter counts more than 9
    //returns true if the clickcount variable is more than 9
    this.nickNameAccordintToCounter = ko.computed(function(){
    	return this.clickCount() > 9;
    },this);

    this.resultData({
    	cat_name: this.name,
    	cat_clickcount: this.clickCount,
    	cat_nick : this.nickname,
    	cat_nickNameAccordintToCounter: this.nickNameAccordintToCounter,
    	cat_imgSrc: this.imgSrc
    },this);
    
    
}
var ViewModel = function() {
	var self = this;
	
	this. catlist = ko.observableArray([]);
	
	cat_list_names.forEach(function(catItems){
		self.catlist.push( new cat(catItems) );
	});

	self.vmCat = ko.observable( this.catlist()[0] );

	self.onclick= function(clicked){
		self.vmCat(clicked);
	};

    this.incrementCounter = function(){
    	 self.vmCat().clickCount(self.vmCat().clickCount() + 1);
    };

};
 ko.applyBindings(new ViewModel());
