import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './theme/admin/admin.component';
import { ProductServicesComponent } from './catalogos/product-services/product-services.component';

const routes: Routes = [
  {path: '' , redirectTo: 'AdminComponent', pathMatch: 'full'},
  { path: 'table', component: ProductServicesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
