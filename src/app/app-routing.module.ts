import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'password-generator',loadChildren: ()=>import('./password-generate/password-generate.module').then(m=>m.PasswordGenerateModule)},
  { path: '**', redirectTo: 'password-generator' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
