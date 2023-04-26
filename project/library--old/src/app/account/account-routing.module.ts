import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SigninComponent } from "./signin/signin.component";
import { RegisterComponent } from "./register/register.component";
import { LayoutComponent } from "./layout/layout.component";

const routes : Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'signin', component: SigninComponent },
            { path: 'register', component: RegisterComponent }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule {}