var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.nickname = ko.observable('chubby');
	this.name = ko.observable('Infant');
	this.imgSrc = ko.observable('img/22252709_010df3379e_z.jpg');

    //adding array of nicknames to display
    this.list = ko.observableArray([
        {name : 'Tommy'},
        {name : 'Pimpong'},
        {name : 'pinky'}
    	]);

   //Increments the clickCount for every click
    this.incrementCounter = function(){
    	 this.clickCount(this.clickCount() + 1);
    }

    //This will compute if the incrementCounter counts more than 9
    //returns true if the clickcount variable is more than 9
    this.nickNameAccordintToCounter = ko.computed(function(){
    	return this.clickCount() > 9;
    },this);
};
 ko.applyBindings(new ViewModel());
