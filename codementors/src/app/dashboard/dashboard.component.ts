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
  selectedCat: Cat;
  cats: Cat[] = [
    {
      id: "1",
      name: "Kicek",
      img:
        "https://pbs.twimg.com/profile_images/630664501776527361/nIK2xTUE_400x400.jpg",
      foods: []
    },
    {
      id: "2",
      name: "Ozzy",
      img: "http://i0.kym-cdn.com/photos/images/original/000/460/633/a41.png",
      foods: []
    },
    {
      id: "3",
      name: "Ciapek",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1515433106i/24859156.png",
      foods: []
    }
  ];

  constructor(private catService: CatService) {}

  ngOnInit() {
    this.catDeletionSub = this.catService.catDeleted.subscribe(deletedCat =>
      this.onDeleted(deletedCat)
    );
  }

  ngOnDestroy() {
    this.catDeletionSub.unsubscribe();
  }

  select(cat: Cat) {
    this.selectedCat = cat;
  }

  onDeleted(cat: Cat) {
    this.cats = this.cats.filter(c => c.id != cat.id);
    this.selectedCat = null;
  }
}
