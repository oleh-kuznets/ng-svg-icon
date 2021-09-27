/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class IconService {

  private icons: any = {};

  /**
   * @description saves reference to Icon Component in local store
   */
  public registerIcon(iconObject: any): any {
    const iconName = Object.keys(iconObject)[0];

    if (!(iconName in this.icons)) {
      this.icons[iconName] = iconObject[iconName];
    }

    return this.icons;
  }

  /**
   * @description on initialization, we're call the Icon service to fetch the icon and create a component from the response
   */
  public getIcons(): any {
    return this.icons;
  }


  /**
   * @description on initialization, we're call the Icon service to fetch the icon and create a component from the response
   */
  public getIcon(iconKey = 'empty'): any {
    if (iconKey in this.icons) {
      return this.icons[iconKey];
    }

    return this.icons;
  }
}
