import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { AppComponent } from "./app.component";
import { ItemsComponent } from "./items/items.component";
import { EditItemComponent } from "./editItem/editItem.component";
import { environment } from "src/environments/environment";
import { reducers } from './core/mainReducer';

@NgModule({
  declarations: [AppComponent, ItemsComponent, EditItemComponent],
  imports: [
    NgbModule,
    BrowserModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
