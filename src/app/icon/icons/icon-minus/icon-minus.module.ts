import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconService } from '../../icon.service';
import { IconMinusComponent } from './icon-minus.component';

@NgModule({
  imports: [CommonModule],
  declarations: [IconMinusComponent]
})
export class IconMinusModule {
  constructor(iconService: IconService) {
    iconService.registerIcon({ minus: IconMinusComponent });
  }
}
