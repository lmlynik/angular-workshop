import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cat-viewer',
  templateUrl: './cat-viewer.component.html',
  styleUrls: ['./cat-viewer.component.css']
})
export class CatViewerComponent implements OnInit {

  @Input() name: string;
  @Input("say") somethingToSay;

  isHungry: boolean;
  color: string = "grey";
  favoriteFoods = [
    "Caviar",
    "Sardines"
  ];

  constructor() { }

  ngOnInit() {
  }

  say(){
    alert(this.name + " says " + this.somethingToSay + (this.isHungry ? "!!!!" : ""));
  }
}
