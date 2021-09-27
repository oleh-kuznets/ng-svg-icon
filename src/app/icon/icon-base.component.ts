import { Component, Input } from '@angular/core';

export type IconType = 'regular' | 'light' | 'solid' | string;

/**
 * @name IconConfig
 * @description an interface to define the configuration for the icon
 */
export interface IconConfig {

  /**
   * @description name of the icon being used
   */
  name: string;

  /**
   * @description type of the specified icon
   */
  type?: IconType;

  /**
   * @description fill color of the icon
   */
  fill?: string;

  /**
   * @description width of the icon in format '{X}px'
   */
  width?: string;

  /**
   * @description height of the icon in format '{X}px'
   */
  height?: string;

  /**
   * @description a class name to be applied to the component
   */
  className?: string;
}

@Component({
  selector: 'gbm-icon-base',
  template: ''
})
export class IconBaseComponent {

  /**
   * @description theme color or Hex value (#111111) used to fill the icon/SVG
   */
  @Input()
  public fill = '#000000';

  /**
   * @description width to set the icon (pixel based)
   */
  @Input()
  public width = '18px';

  /**
   * @description height to set the icon (pixel based)
   */
  @Input()
  public height = '18px';

  /**
   * @description custom CSS class
   */
  @Input()
  public className = '';

  /**
   * @description an icon type to apply, defaults to regular, can also be light or solid depending on the icon
   */
  @Input()
  public type: IconType = 'regular';

}
