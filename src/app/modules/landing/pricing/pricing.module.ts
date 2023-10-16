import { NgModule } from '@angular/core';
import { PricingComponent } from './pricing.component';
import {FuseCardModule} from '@fuse/components/card';
import {SharedModule} from 'app/shared/shared.module';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";



@NgModule({
    declarations: [
        PricingComponent
    ],
    exports: [
        PricingComponent
    ],
    imports: [
        MatButtonModule,
        MatIconModule,
        FuseCardModule,
        SharedModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule
    ]
})
export class PricingModule { }
