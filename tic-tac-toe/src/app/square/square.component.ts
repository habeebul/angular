import { Component, OnInit, Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "app-square",
  templateUrl: "./square.component.html",
  styleUrls: ["./square.component.css"]
})
export class SquareComponent implements OnInit {
  @Input() squareValue;
  @Output() clkHandler = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}
