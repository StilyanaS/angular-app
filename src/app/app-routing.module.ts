import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ItemDetailsComponent } from './pages/item-details/item-details.component';

const routes: Routes = [
  { path: 'item-list', component: ItemsListComponent },
  { path: 'item-details/:id', component: ItemDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
