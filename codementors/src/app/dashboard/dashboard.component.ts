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
  catDeletionSub: Subscription;
  cats: Cat[];

  constructor(private catService: CatService) {}

  ngOnInit() {
    this.catDeletionSub = 
    this.catService.catDeleted
    .subscribe(deletedCat =>
      this.onDeleted(deletedCat)
    );

    this.catService.getCats().subscribe(cats => this.cats = cats);
  }

  ngOnDestroy() {
    this.catDeletionSub.unsubscribe();
  }
  
  onDeleted(cat: Cat) {
    this.cats = this.cats.filter(c => c.id != cat.id);
  }
}
