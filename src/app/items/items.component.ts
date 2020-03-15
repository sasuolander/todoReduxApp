import { Component, OnInit } from "@angular/core";
import { Store  } from "@ngrx/store";
import {IAppState } from "../core/storeInterface";
import { Iitem } from '../appInterface/itemInterface';
import { Observable } from 'rxjs';
import { NgbPaginationNext } from '@ng-bootstrap/ng-bootstrap';

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
}
