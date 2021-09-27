import * as IconsCatalog from './icons';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconComponent } from '../icon/icon.components';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ...IconsCatalog.List
  ],
  declarations: [IconComponent],
  exports: [IconComponent]
})
export class IconModule { }
