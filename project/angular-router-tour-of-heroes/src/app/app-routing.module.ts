import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { authGuard } from './auth/auth.guard';

const adminModule = () => import('./admin/admin.module').then(m => m.AdminModule);
const crisisCenterModule = () => import('./crisis-center/crisis-center.module').then(m => m.CrisisCenterModule);

const routes: Routes = [
  { path: 'admin', 
    loadChildren: adminModule, 
    canMatch: [authGuard] 
  },
  {
    path: 'crisis-center',
    loadChildren: crisisCenterModule
    // data: { preload: true }
  },
  { path: '', redirectTo: '/heroes', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
