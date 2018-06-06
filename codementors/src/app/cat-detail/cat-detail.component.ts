import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Cat } from "../cat";
import { CatService } from "../cat.service";

@Component({
  selector: "app-cat-detail",
  templateUrl: "./cat-detail.component.html",
  styleUrls: ["./cat-detail.component.css"]
})
export class CatDetailComponent implements OnInit {
  @Input() cat: Cat;
  @Output() deleted = new EventEmitter<Cat>();

  constructor(private catService: CatService) {}

  ngOnInit() {}

  delete() {
    this.catService.deleteCat(this.cat);
  }
}
