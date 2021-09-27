import {
  Component,
  ComponentFactoryResolver,
  Input,
  OnChanges,
  SimpleChanges,
  Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { IconBaseComponent, IconConfig } from './icon-base.component';
import { IconService } from './icon.service';

@Component({
  selector: 'app-icon',
  template: '<ng-template #iconComponent></ng-template>',
  styleUrls: ['./icon.component.less']
})
export class IconComponent extends IconBaseComponent implements OnChanges {

  /**
   * @description name of the icon used to lookup
   */
  @Input()
  public name!: string;

  /**
   * @description container to render icon
   */
  @ViewChild('iconComponent', { read: ViewContainerRef, static: true })
  public container!: ViewContainerRef;

  public icon!: unknown;
  public icons!: unknown;

  constructor(
    private resolver: ComponentFactoryResolver,
    private iconService: IconService
  ) {
    super();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    Object.keys(changes).map(attributeType => {
      if (
        attributeType
        && changes[attributeType].currentValue
        && changes[attributeType].currentValue !== changes[attributeType].previousValue
      ) {
        this.updateIcon();
      }
    });
  }

  /**
   * @description call the IconService to fetch the icon and create a component from the response
   */
  public updateIcon(): void {
    if (this.setIcon(this.iconService.getIcon(this.name))) {
      this.setIconProperties(this.createComponent(this.icon as Type<unknown>) as IconConfig);
    }
  }

  /**
   * @description sets the icon returned from IconService
   */
  public setIcon(icon: unknown): unknown {
    return (this.icon = icon);
  }

  /**
   * @description sets the icons properties
   */
  public setIconProperties(
    component: IconConfig,
    width = this.width,
    height = this.height,
    fill = this.fill,
    type = this.type,
    className = this.className
  ): IconConfig {
    component.width = width;
    component.height = height;
    component.className = className ? `app-custom-icon ${className}` : 'app-custom-icon';
    component.type = type;
    component.fill = fill;

    return component;
  }

  /**
   * @description create a component using the factory resolver and inserts into parent component (Icon)
   */
  public createComponent(component: Type<unknown>): unknown | null {
    if (component) {
      const componentFactory = this.resolver.resolveComponentFactory(component); // Create component factory for Icon
      this.container.clear(); // Clear target Icons Container
      const componentRef = this.container.createComponent(componentFactory); // Create and inject component into parent inner container
      return componentRef.instance;
    }

    return null;
  }

}
