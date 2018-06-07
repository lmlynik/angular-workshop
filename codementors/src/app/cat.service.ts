import { Injectable } from "@angular/core";
import { Cat } from "./cat";
import { Subject, Observable } from "rxjs/Rx";

@Injectable()
export class CatService {
  constructor() {}

  private cats: Cat[] = [
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

  private catDeletedSource = new Subject<Cat>();
  private catAddedSource = new Subject<Cat>();
  private catUpdatedSource = new Subject<Cat>();

  catDeleted = this.catDeletedSource.asObservable();
  catAdded = this.catAddedSource.asObservable();
  catUpdated = this.catUpdatedSource.asObservable();

  getCats(): Observable<Cat[]> {
    return Observable.of(this.cats);
  }

  getCatById(id: string): Observable<Cat> {
    return Observable.of(this.cats.find(cat => cat.id == id));
  }

  deleteCat(cat: Cat) {
    this.catDeletedSource.next(cat);
  }

  addCat(cat: Cat){
    this.catAddedSource.next(cat);
  }

  updateCat(cat: Cat){
    this.catUpdatedSource.next(cat);
  }
}
