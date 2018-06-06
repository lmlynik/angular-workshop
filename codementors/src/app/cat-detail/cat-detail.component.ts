import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Cat } from "../cat";

@Component({
  selector: "app-cat-detail",
  templateUrl: "./cat-detail.component.html",
  styleUrls: ["./cat-detail.component.css"]
})
export class CatDetailComponent implements OnInit {
  @Input() cat: Cat;
  @Output() deleted = new EventEmitter<Cat>();

  constructor() {}

  ngOnInit() {}

  delete() {
    this.deleted.emit(this.cat);
  }
}
