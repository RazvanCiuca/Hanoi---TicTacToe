var Towers = (function(Towers) {
	var hanoiUI = Towers.hanoiUI = function() {
		this.game = new Towers.Hanoi();
		this.board = this.generateBoard();
		this.move = [];
	};

	hanoiUI.prototype.play = function () {
		this.render();
		this.listener();
	}

	hanoiUI.prototype.generateBoard = function() {
		var board = "<div id='board'></div>";
		$('body').prepend(board);

		_.times(3, function(i){
			var tower = "<div class='tower tower-"+ i + "' data-id='" + i + "'></div>";
			$('#board').append(tower);
		});
	}

	hanoiUI.prototype.render = function() {
		$('.tower').empty();
		$.each(this.game.towers, function(i,tower){
			for (var j = 0; j < tower.length ; j++) {
				$('.tower-' + i).append("<div id='t-" + tower[j] + "'> </div>");
			}
		})
	}

	hanoiUI.prototype.listener = function() {

		var hUI = this;
		$('.tower').on('click', function(){
			if (hUI.move.length === 0){
				console.log("picked up")
				hUI.move.push( $(this).data("id"));
			} else {
				hUI.move.push( $(this).data('id') );
				//check valid move
				if ( hUI.game.isValidMove(hUI.move[0], hUI.move[1]) ){
					console.log("dropped up")
					hUI.game.move( hUI.move[0], hUI.move[1] );
					hUI.move = [];
					hUI.render();
					if( hUI.game.isWon() ){
						alert("You win!");
					}
				} else {
					console.log("invalid move")
					hUI.move = [];
				}
			}

		});


	}

	return Towers;
})(Towers || {});


$(function () {
	g = new Towers.hanoiUI();
	g.play();
});
