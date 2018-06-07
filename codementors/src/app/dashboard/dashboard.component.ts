import { Component, OnInit, OnDestroy } from "@angular/core";
import { Cat } from "../cat";
import { CatService } from "../cat.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit, OnDestroy {
  catsUpdatedSub: Subscription;
  cats: Cat[];

  constructor(private catService: CatService) {}
  catUpdate(cats: Cat[]) {
    this.cats = cats;
  }

  ngOnInit() {
    const catUpdate = (cats: Cat[]) => (this.cats = cats);
    this.catsUpdatedSub = this.catService.catsUpdated.subscribe(catUpdate);
    this.catService.getCats().subscribe(catUpdate);
  }

  ngOnDestroy() {
    this.catsUpdatedSub.unsubscribe();
  }
}
