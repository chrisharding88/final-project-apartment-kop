	//to ensure the DOM is ready 
$(document).on('ready', function(){

	/* var count = 0;
	var images = ["../img/indoor-pool.jpg","../img/welcomecenter.jpg","../img/game-room.jpg","../img/room1.jpg"];
	var img_background = $("html.background");

	img_background.css("background","("+images[count]+")")

	setInterval(function(){
		img_background.fadeOut(500, function(){
			img_background.css("background","("+images[count++]+")");
			img_background.fadeIn(500);
		});
		if (count === img_background.length)
		{
			count = 0;
		}

	}, 5000);*/









	$('.slider').each(function(){
		var $this = $(this);
		var $group = $this.find('.slide-group');
		var $slides = $this.find('.slide');
		var buttonArray = [];
		var currentIndex = 0;
		var timeout;

		function advance () {
			clearTimeout(timeout);
			//start timer to run an anonymous function every 4 seconds
			timeout = setTimeout (function() {
				if (currentIndex < ($slides.length - 1)){
					move(currentIndex + 1);
				} else {
				   move(0);
				}

		  	}, 4000)
		}

		$.each($slides, function (index){
			var foo = $this;
			//create a button element for the button
			var $button = $('<button type="button" class="slide-btn">&bull,</button>');
			if (index === currentIndex) {
				$button.addClass('active');
			}
			$button.on('click', function() {
				move(index);
			}).appendTo($this.find('.slide-buttons'));
			buttonArray.push($button);
		});

		advance();	//Script is set up, call advance to move it




	}); //concludes the slide

}); // closes doc.ready