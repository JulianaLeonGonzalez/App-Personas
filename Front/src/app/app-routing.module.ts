import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ListComponent} from './list/list.component';
import { FormComponent } from './form/form.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/listPersons', pathMatch: 'full' },
  { path: 'listPersons', component:  ListComponent}, //RecipeStartComponent
  { path: 'addPerson', component: FormComponent } // RecipeEditComponent
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
