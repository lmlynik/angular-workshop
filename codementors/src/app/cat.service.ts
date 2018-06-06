import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Cat } from "./cat";

@Injectable()
export class CatService {
  constructor() {}

  private catDeletedSource = new Subject<Cat>();

  catDeleted = this.catDeletedSource.asObservable();

  deleteCat(cat: Cat) {
    this.catDeletedSource.next(cat);
  }
}
