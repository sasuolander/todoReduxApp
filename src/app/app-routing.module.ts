import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { TestRouteComponentComponent } from './testRouteComponent/testRouteComponent.component';

const routes: Routes= [
  {
    path: 'item',
    component:TestRouteComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    StoreRouterConnectingModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
