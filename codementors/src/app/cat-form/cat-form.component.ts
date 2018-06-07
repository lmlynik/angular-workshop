import { Component, OnInit } from "@angular/core";
import { CatService } from "../cat.service";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-cat-form",
  templateUrl: "./cat-form.component.html",
  styleUrls: ["./cat-form.component.css"]
})
export class CatFormComponent implements OnInit {
  name: string;
  img: string;
  id?: string;
  edit: boolean;
  constructor(private catService: CatService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      const id = params["id"];
      this.edit = true;
      this.catService.getCatById(id).subscribe(cat => {
        this.img = cat.img;
        this.id = cat.id;
        this.name = cat.name;
      });
    });
  }

  save() {
    if(this.edit && !!this.id){
      this.catService.updateCat(
        {
          id: this.id,
          name: this.name,
          img: this.img,
          foods: []
        }
      );
    }
    this.catService.addCat({
      name: this.name,
      img: this.img,
      foods: []
    });
  }
}
