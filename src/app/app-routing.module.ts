import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { ItemListServiceComponent } from './pages/item-list-service/item-list-service.component';

const routes: Routes = [
  { path: '', component: ItemsListComponent },
  { path: 'items-service', component: ItemListServiceComponent },
  { path: 'item-details/:id', component: ItemDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    provideRouter(routes,withComponentInputBinding())
  ]
})
export class AppRoutingModule { }
