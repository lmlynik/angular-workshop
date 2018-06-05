import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cat-viewer',
  templateUrl: './cat-viewer.component.html',
  styleUrls: ['./cat-viewer.component.css']
})
export class CatViewerComponent implements OnInit {

  @Input() name: string;
  @Input("say") somethingToSay;
  constructor() { }

  ngOnInit() {
  }

  say(){
    alert(this.somethingToSay);
  }
}
