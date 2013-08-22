var TicTacToe = (function (TicTacToe) {

	var tttUI = TicTacToe.tttUI = function(){
	}

	tttUI.prototype.generateGrid = function(x, y){

		var board = "<div id='board'></div>";
		$('body').prepend(board);


		_.times(x, function(i){
			var row = "<div class='row row-" + i + "'></div>";
			$('#board').append(row);
			_.times(y, function(j) {
				var cell = "<div  id='" + i + "-" + j + "'class='cell'></div>";
				$('.row-' + i).append(cell);
			});
		});

	}


	tttUI.prototype.listener = function() {

		$('.cell').on('click', function(){

			var id = $(this).attr("id");
			var coords = id.split('-');
			//check if valid move
			if (game.valid(coords)) {
				console.log(coords);
				game.placeMark(coords);
				$(this).addClass(game.player);
				var winner = game.winner()
				if (winner) {
					alert("The winner is " + winner);
				}
				game.switchPlayer();
			}

		});
	}

	tttUI.prototype.play = function(){
		game = new TicTacToe.Game();
		this.generateGrid(3,3);
		this.listener();
	}


	//update coords on game
	//check for win condition
	//change the player


	return TicTacToe;
})(TicTacToe || {});


$(function () {
	g = new TicTacToe.tttUI();
	g.play();
});
