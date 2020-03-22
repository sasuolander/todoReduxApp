import { Component, OnInit } from "@angular/core";
import { Store  } from "@ngrx/store";
import {IAppState } from "../core/storeInterface";
import { Iitem } from '../appInterface/itemInterface';
import { Observable } from 'rxjs';
import { NgbPaginationNext } from '@ng-bootstrap/ng-bootstrap';
import { removeItem } from '../core/action/editAction';

@Component({
  selector: "app-items",
  templateUrl: "./items.component.html",
  styleUrls: ["./items.component.css"]
})
export class ItemsComponent implements OnInit {
  items: Iitem[];
  constructor(private store: Store<IAppState>) {}

  ngOnInit() {
   this.store.subscribe(state => {
     this.items = state.taskStore.items;
   });
  }

  testFunction($event){
    const id =$event.target.value;
    console.log($event.target.value);
    this.store.dispatch(removeItem(id));
    console.log("test");
  }
}
