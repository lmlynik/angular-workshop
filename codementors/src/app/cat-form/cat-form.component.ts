import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat.service';

@Component({
  selector: 'app-cat-form',
  templateUrl: './cat-form.component.html',
  styleUrls: ['./cat-form.component.css']
})
export class CatFormComponent implements OnInit {
  name: string;
  img: string;
  constructor(private catService: CatService) { }

  ngOnInit() {
  }

  add(){
    this.catService.addCat({name:this.name, img: this.img});
  }

}
