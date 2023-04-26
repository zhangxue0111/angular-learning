import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { matcher: (url) => {
    if (url.length === 1 && url[0].path.match(/^@[\w]+$/gm)) {
      return {
        consumed: url,
        posParams: {
          username: new UrlSegment(url[0].path.substr(1), {})
        }
      };
    }
    return null;
  }, 
    component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
