var Towers = (function(Towers) {


  var Hanoi = Towers.Hanoi = function() {
    this.towers = [[3, 2, 1], [], []];
  }

  Hanoi.prototype.isWon = function () {
    // move all the discs to the last tower
    return this.towers[2].length == 3;
  };

  Hanoi.prototype.isValidMove = function (startTowerIdx, endTowerIdx) {
    var startTower = this.towers[startTowerIdx];
    var endTower = this.towers[endTowerIdx];

    if (startTower.length === 0) {
      return false;
    } else if (endTower.length == 0) {
      return true;
    } else {
      var topStartDisc = startTower[startTower.length - 1];
      var topEndDisc = endTower[startTower.length - 1];
      return topStartDisc < topEndDisc;
    }
  };

  Hanoi.prototype.move = function (startTowerIdx, endTowerIdx) {
    if (this.isValidMove(startTowerIdx, endTowerIdx)) {
      this.towers[endTowerIdx].push(this.towers[startTowerIdx].pop());
      return true;
    } else {
      return false;
    }
  };


	return Towers;
})(Towers || {});