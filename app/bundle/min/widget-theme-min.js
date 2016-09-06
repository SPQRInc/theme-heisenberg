!function(n){function t(o){if(e[o])return e[o].exports;var d=e[o]={exports:{},id:o,loaded:!1};return n[o].call(d.exports,d,d.exports,t),d.loaded=!0,d.exports}var e={};return t.m=n,t.c=e,t.p="",t(0)}({0:function(n,t,e){var o,d;o=e(9),o&&o.__esModule&&Object.keys(o).length>1&&console.warn("[vue-loader] app/components/widget-theme.vue: named exports in *.vue files are ignored."),d=e(10),n.exports=o||{},n.exports.__esModule&&(n.exports=n.exports["default"]),d&&(("function"==typeof n.exports?n.exports.options||(n.exports.options={}):n.exports).template=d)},9:function(n,t){"use strict";n.exports={section:{label:"Theme",priority:90},props:["widget","config"]},window.Widgets.components.theme=n.exports},10:function(n,t){n.exports='\n\n    <div class="uk-form-horizontal">\n\n        <div class="uk-form-row">\n            <label for="form-theme-panel" class="uk-form-label">{{ \'Panel Style\' | trans }}</label>\n            <div class="uk-form-controls">\n                <select id="form-theme-panel" class="uk-form-width-large" v-model="widget.theme.panel">\n                    <option value="">{{ \'None\' | trans }}</option>\n                    <option value="uk-panel-box">{{ \'Box\' | trans }}</option>\n                    <option value="uk-panel-box uk-panel-box-primary">{{ \'Box Primary\' | trans }}</option>\n                    <option value="uk-panel-box uk-panel-box-secondary">{{ \'Box Secondary\' | trans }}</option>\n                    <option value="uk-panel-header">{{ \'Header\' | trans }}</option>\n                </select>\n            </div>\n        </div>\n\n    </div>\n    \n<hr />\n	\n	<div class="uk-form-horizontal">\n\n        <div class="uk-form-row">\n            <label for="form-widget-headline-hide" class="uk-form-label">{{ \'Headline\' | trans }}</label>\n            <div class="uk-form-controls uk-form-controls-text">\n                <label><input type="checkbox" class="uk-form-width-large" v-model="widget.theme.hide_headline"> {{\'Hide Headline\'|trans}}</label>\n            </div>\n        </div>\n\n    </div>\n    \n<hr />\n	\n	<div class="uk-form-horizontal">\n\n        <div class="uk-form-row">\n            <label for="form-widget-mobile-hide" class="uk-form-label">{{ \'Mobile\' | trans }}</label>\n            <div class="uk-form-controls uk-form-controls-text">\n                <label><input type="checkbox" class="uk-form-width-large" v-model="widget.theme.hide_mobile"> {{\'Hide Widget on Mobile\'|trans}}</label>\n            </div>\n        </div>\n\n    </div>\n    \n<hr />\n	\n	<div class="uk-form-horizontal">\n\n        <div class="uk-form-row">\n            <label for="form-widget-color-invert" class="uk-form-label">{{ \'Color\' | trans }}</label>\n            <div class="uk-form-controls uk-form-controls-text">\n                <label><input type="checkbox" class="uk-form-width-large" v-model="widget.theme.color_invert"> {{\'Invert Text Color\'|trans}}</label>\n            </div>\n        </div>\n\n    </div>\n<hr />\n    <div class="uk-form-horizontal">\n\n        <div class="uk-form-row">\n            <label for="form-widget-size" class="uk-form-label">{{ \'Widget Size\' | trans }} <a class="" data-uk-toggle="{target:\'#widget-size\'}"><i class="uk-icon-info-circle"></i></a></label>\n            <div class="uk-form-controls">\n				<label><input type="text" v-model="widget.theme.widget_size"></label>\n            </div>\n        </div>\n        <div id="widget-size" class="uk-form-row uk-hidden">\n			<div class="uk-alert uk-alert-warning">\n	        	<p>{{\'Note: This only works if "Widget Auto Size" is disabled in the theme settings!\'|trans}}</p>\n			</div>\n	        <div class="uk-alert">\n	        	<p>{{\'The grid supports 1, 2, 3, 4, 5, 6 and 10 unit divisions. This table gives you an overview of the classes that can be applied to units.\'|trans}}</p>\n				<div class="uk-overflow-container">\n				<table class="uk-table uk-text-nowrap">\n				<thead>\n				<tr>\n				<th>Class</th>\n				<th>Description</th>\n				</tr>\n				</thead>\n				<tbody>\n				<tr>\n				<td>\n				<code>1-1</code>\n				</td>\n				<td>Fills 100% of the available width.</td>\n				</tr>\n				<tr>\n				<td>\n				<code>1-2</code>\n				</td>\n				<td>Divides the grid into halves.</td>\n				</tr>\n				<tr>\n				<td>\n				<code>1-3</code>\n				to\n				<code>2-3</code>\n				</td>\n				<td>Divides the grid into thirds.</td>\n				</tr>\n				<tr>\n				<td>\n				<code>1-4</code>\n				to\n				<code>3-4</code>\n				</td>\n				<td>Divides the grid into fourths.</td>\n				</tr>\n				<tr>\n				<td>\n				<code>1-5</code>\n				to\n				<code>4-5</code>\n				</td>\n				<td>Divides the grid into fifths.</td>\n				</tr>\n				<tr>\n				<td>\n				<code>1-6</code>\n				to\n				<code>5-6</code>\n				</td>\n				<td>Divides the grid into sixths.</td>\n				</tr>\n				<tr>\n				<td>\n				<code>1-10</code>\n				to\n				<code>9-10</code>\n				</td>\n				<td>Divides the grid into tenths.</td>\n				</tr>\n				</tbody>\n				</table>\n				</div>\n	        </div>\n	    </div>\n    </div>\n    \n    <div class="uk-form-horizontal">\n\n        <div class="uk-form-row">\n            <label for="form-widget-push-left" class="uk-form-label">{{ \'Widget Push Left\' | trans }} <a class="" data-uk-toggle="{target:\'#widget-push-left\'}"><i class="uk-icon-info-circle"></i></a></label>\n            <div class="uk-form-controls">\n				<label><input type="text" v-model="widget.theme.widget_push"></label>\n            </div>\n        </div>\n        <div id="widget-push-left" class="uk-form-row uk-hidden">\n			<div class="uk-alert uk-alert-warning">\n	        	<p>{{\'Note: This only works if "Widget Auto Size" is disabled in the theme settings!\'|trans}}</p>\n			</div>\n	        <div class="uk-alert">\n	        	<p>{{‘The grid supports 1, 2, 3, 4, 5, 6 and 10 unit divisions. This table gives you an overview of the classes that can be applied to units.\'|trans}}</p>\n				<div class="uk-overflow-container">\n				<table class="uk-table uk-text-nowrap">\n				<thead>\n				<tr>\n				<th>Class</th>\n				<th>Description</th>\n				</tr>\n				</thead>\n				<tbody>\n				<tr>\n				<td>\n				<code>1-1</code>\n				</td>\n				<td>Fills 100% of the available width.</td>\n				</tr>\n				<tr>\n				<td>\n				<code>1-2</code>\n				</td>\n				<td>Divides the grid into halves.</td>\n				</tr>\n				<tr>\n				<td>\n				<code>1-3</code>\n				to\n				<code>2-3</code>\n				</td>\n				<td>Divides the grid into thirds.</td>\n				</tr>\n				<tr>\n				<td>\n				<code>1-4</code>\n				to\n				<code>3-4</code>\n				</td>\n				<td>Divides the grid into fourths.</td>\n				</tr>\n				<tr>\n				<td>\n				<code>1-5</code>\n				to\n				<code>4-5</code>\n				</td>\n				<td>Divides the grid into fifths.</td>\n				</tr>\n				<tr>\n				<td>\n				<code>1-6</code>\n				to\n				<code>5-6</code>\n				</td>\n				<td>Divides the grid into sixths.</td>\n				</tr>\n				<tr>\n				<td>\n				<code>1-10</code>\n				to\n				<code>9-10</code>\n				</td>\n				<td>Divides the grid into tenths.</td>\n				</tr>\n				</tbody>\n				</table>\n				</div>\n	        </div>\n	    </div>\n    \n    </div>\n\n'}});