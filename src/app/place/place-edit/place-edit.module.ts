import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaceEditPageRoutingModule } from './place-edit-routing.module';

import { PlaceEditPage } from './place-edit.page';
import { TranslateModule } from '@ngx-translate/core';
import { FormModule } from '../../form/form.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaceEditPageRoutingModule,
    TranslateModule.forChild(),
    FormModule
  ],
  declarations: [PlaceEditPage]
})
export class PlaceEditPageModule {}
