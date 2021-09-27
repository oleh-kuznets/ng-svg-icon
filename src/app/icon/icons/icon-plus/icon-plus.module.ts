import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconService } from '../../icon.service';
import { IconPlusComponent } from './icon-plus.component';

@NgModule({
  imports: [CommonModule],
  declarations: [IconPlusComponent]
})
export class IconPlusModule {
  constructor(iconService: IconService) {
    iconService.registerIcon({ plus: IconPlusComponent });
  }
}
