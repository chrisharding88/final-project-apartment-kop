//to ensure the DOM is ready 
$('.slider').each(function(){
	var $this = $(this);
	var $group = $this.find('.slide-group');
	var $slides = $this.find('.slide');
	var buttonArray =[];
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
		//create a button element for the button
		var button = $('<button type="button" class="slide-btn">&bull,</button>');
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