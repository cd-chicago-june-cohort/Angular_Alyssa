import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductUpdateComponent } from './product-update/product-update.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent}, 
  {path: 'products', pathMatch: 'full', component: ProductListComponent},
  {path: 'products/new', component: ProductCreateComponent},
  {path: 'products/edit/:productid', component: ProductUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
