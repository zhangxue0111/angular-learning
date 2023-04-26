import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const userModule = () => import('./users/users.module').then(x => x.UserModule);

const routes: Routes = [
  { path: 'account', loadChildren: accountModule },
  { path: 'users', loadChildren: userModule } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


