import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Cat } from "../cat";
import { CatService } from "../cat.service";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-cat-detail",
  templateUrl: "./cat-detail.component.html",
  styleUrls: ["./cat-detail.component.css"]
})
export class CatDetailComponent implements OnInit {
  @Input() cat: Cat;
  @Output() deleted = new EventEmitter<Cat>();

  constructor(private catService: CatService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      const id = params["id"];
      this.catService.getCatById(id).subscribe(cat => this.cat = cat);
    });
  }

  delete() {
    this.catService.deleteCat(this.cat);
  }
}
