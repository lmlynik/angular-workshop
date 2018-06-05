import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CatViewerComponent } from './cat-viewer/cat-viewer.component';


@NgModule({
  declarations: [
    AppComponent,
    CatViewerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
