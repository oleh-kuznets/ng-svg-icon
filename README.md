# NG SVG Icon version 1.0.0

* Angular Version: **12.2.0**
* Browser List:
    * Google Chrome
    * Mozilla Firefox
    * Opera
    * Safari
    * Microsoft Edge
    * Potenitally should works in IE11

**Note**: it's an open-source code, just copy the `icon` folder to your project and add it to the `app.module` imports and enjoy!

**Demo**: currently unavailble

## Start Dev Environment

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/` (default url).

## Usage

`<app-icon [name]="iconName" [fill]="iconFill" [type]="iconType" [width]="iconWidth" [height]="iconWidth" [className]="iconClassName"></app-icon>`

 - **name** [`required`] [`string`] - Example: icon-plus.module.ts > `iconService.registerIcon({ plus: IconPlusComponent })` > `plus` will be an icon name
 - **fill** [`optional`] [`string`] - Example: enter a valid color for `fill` css property (#000, red), [`default: #000000`]
 - **type** [`optional`] [`IconType`] - Example: enter a valid type (`light` | `regular` | `solid`) if you added it to your icon, [`default: regular`]
 - **width** [`optional`] [`string`] - Example: ('40px'), [`default: 18px`]
 - **height** [`optional`] [`string`] - Example: ('40px'), [`default: 18px`]
 - **className** [`optional`] [`string`] - Custom CSS class, [`default: ''`]

## Adding New Icon

1. Add your icon by the same principle as `IconPlusComponent` or `IconMinusComponent`
2. Register your icon module in `index.ts`
3. Enjoy!