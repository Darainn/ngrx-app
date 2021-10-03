import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { MaterialModule } from '../shared/modules/material-module';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    ListRoutingModule,
    MaterialModule,
    MatButtonModule,
    FormsModule,
  ],
  exports: [ListComponent],
})
export class ListModule {}
