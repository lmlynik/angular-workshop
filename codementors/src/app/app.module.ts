import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";

import { AppComponent } from "./app.component";
import { CatViewerComponent } from "./cat-viewer/cat-viewer.component";
import { CatDetailComponent } from "./cat-detail/cat-detail.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CatService } from "./cat.service";
import { AppRoutingModule } from ".//app-routing.module";
import { CatFormComponent } from "./cat-form/cat-form.component";
import { HttpClientModule } from "@angular/common/http";

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
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 750
    })
  ],
  providers: [CatService],
  bootstrap: [AppComponent]
})
export class AppModule {}
