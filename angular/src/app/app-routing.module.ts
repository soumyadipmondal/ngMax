import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ReceipeListComponent } from './receipes/receipe-list/receipe-list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ReceipeDetailComponent } from './receipes/receipe-detail/receipe-detail.component';
import { ReceipesComponent } from './receipes/receipes.component';
import { ReceipeEditComponent } from './receipes/receipe-edit/receipe-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/receipecontainer', pathMatch: 'full' },
  {
    
    path: 'receipecontainer',
    component: ReceipesComponent,
    children: [
      {
        path: '',
        redirectTo: 'receipecontainer',
        pathMatch:'full',
      },

      {
        path: 'receipedetails/new',
        component: ReceipeEditComponent
      },

      {
        path: 'receipedetails/:id',
        component: ReceipeDetailComponent
      },
      {
        path: 'receipedetails/:id/edit',
        component: ReceipeEditComponent
      }
    ]
  },
  
  {
    path: 'shop',
    component: ShoppingListComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, FormsModule, ReactiveFormsModule]
})
export class AppRoutingModule { }
