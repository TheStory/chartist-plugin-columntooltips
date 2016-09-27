# Column tooltips plugin for Chartist.js

This plugin gives ability to display column tooltips in Chartist.js charts.

## Available options and their defaults

```javascript
var defaultPluginOptions = {

  /** 
   * Class names used by the plugin
   * @type {Object}
   */
  classNames: {
    /** Decoration line */
    line: 'ct-line',

    /** Decoration line group*/
    lineGroup: 'ct-lines',

    /** Hover column */
    column: 'ct-column',

    /** Hover column group */
    columnGroup: 'ct-columns',

    /** Hover column */
    point: 'ct-custom-point',

    /** Hover column group */
    pointGroup: 'ct-column-point-group',

    /** Hover column groups */
    pointGroups: 'ct-column-point-groups',

    /** Tooltip */
    tooltip: 'ct-column-tooltip',

    /** Tooltip cloud */
    cloud: 'ct-cloud',
  },

  /**
   * Show decorative line on column hover
   * @defaultvalue
   */
  showLine: true,

  /**
   * Show points on column hover - needs showPoint option to be true
   * @defaultvalue
   */
  showPointsOnHover: true,

}
```
