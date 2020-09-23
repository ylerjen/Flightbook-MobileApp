import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlightStatisticPageRoutingModule } from './flight-statistic-routing.module';

import { FlightStatisticPage } from './flight-statistic.page';
import { TranslateModule } from '@ngx-translate/core';
import { FlightFilterComponent } from '../../form/flight-filter/flight-filter.component';
import { FormModule } from 'src/app/form/form.module';
import { ApplicationPipesModule } from 'src/app/application-pipes/application-pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlightStatisticPageRoutingModule,
    TranslateModule.forChild(),
    FormModule,
    ApplicationPipesModule
  ],
  declarations: [FlightStatisticPage],
  entryComponents: [FlightFilterComponent]
})
export class FlightStatisticPageModule {}
