import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CatViewerComponent } from './cat-viewer/cat-viewer.component';
import { CatDetailComponent } from './cat-detail/cat-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CatService } from './cat.service';
import { AppRoutingModule } from './/app-routing.module';
import { CatFormComponent } from './cat-form/cat-form.component';


@NgModule({
  declarations: [
    AppComponent,
    CatViewerComponent,
    CatDetailComponent,
    DashboardComponent,
    CatFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [CatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
