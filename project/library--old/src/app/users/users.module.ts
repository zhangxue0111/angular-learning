import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';

import { UserRoutingModule } from "./user-routing.module";
import { LayoutComponent } from "./layout/layout.component";
import { ListComponent } from "./list/list.component";
import { AddEditComponent } from "./add-edit/add-edit.component";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        UserRoutingModule
    ],
    declarations: [
        LayoutComponent,
        ListComponent,
        AddEditComponent
    ]
    
})
export class UserModule {}