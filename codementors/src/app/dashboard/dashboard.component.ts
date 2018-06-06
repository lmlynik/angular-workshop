import { Component, OnInit } from "@angular/core";
import { Cat } from "../cat";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
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

  constructor() {}

  ngOnInit() {}

  select(cat: Cat) {
    this.selectedCat = cat;
  }

  onDeleted(cat: Cat) {
    this.cats = this.cats.filter(c => c.id != cat.id);
    this.selectedCat = null;
  }
}
