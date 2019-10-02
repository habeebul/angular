import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "tic-tac-toe";
  squares = ["", "", "", "", "", "", "", "", ""];
  looping = ["", "", ""];
  ind = 0;
  xIsNext = true;
  status = "Next player: X";
  clickHandler(i) {
    const squares = this.squares.slice();
    if (this.calculateWinner(this.squares) || this.squares[i]) {
      return "";
    }
    this.squares[i] = this.xIsNext ? "X" : "O";
    this.xIsNext = !this.xIsNext;

    const winner = this.calculateWinner(this.squares);
    if (winner) {
      this.status = "Winner : " + winner;
    } else {
      this.status = "Next player: " + (this.xIsNext ? "X" : "O");
    }
  }
  calculateWinner(squares) {
    let i = 0;
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }
}
