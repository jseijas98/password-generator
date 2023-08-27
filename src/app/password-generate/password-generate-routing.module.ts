import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordGenerateComponent } from './password-generate.component';


const routes: Routes = [
  { path:'', component: PasswordGenerateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasswordGenerateRoutingModule {}
