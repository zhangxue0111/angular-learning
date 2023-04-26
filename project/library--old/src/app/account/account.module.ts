import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { AccountRoutingModule } from "./account-routing.module";
import { LayoutComponent } from "./layout/layout.component";
import { SigninComponent } from "./signin/signin.component";
import { RegisterComponent } from "./register/register.component";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AccountRoutingModule
    ],
    declarations: [
        LayoutComponent,
        SigninComponent,
        RegisterComponent
    ]
})
export class AccountModule {}