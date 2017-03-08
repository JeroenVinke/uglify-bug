### Not working with 2.8.9
```
define("aurelia-templating-resources/binding-mode-behaviors",["exports","aurelia-binding","aurelia-metadata"],function(i,n,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.TwoWayBindingBehavior=i.OneWayBindingBehavior=i.OneTimeBindingBehavior=void 0;var o,d,a,r={bind:function(i,n,e){i.originalMode=i.mode,i.mode=this.mode},unbind:function(i,n){i.mode=i.originalMode,i.originalMode=null}};i.OneTimeBindingBehavior=(_dec=(0,e.mixin)(r))(o=function(){this.mode=n.bindingMode.oneTime})||o,i.OneWayBindingBehavior=(_dec2=(0,e.mixin)(r))(d=function(){this.mode=n.bindingMode.oneWay})||d,i.TwoWayBindingBehavior=(_dec3=(0,e.mixin)(r))(a=function(){this.mode=n.bindingMode.twoWay})||a});
```

### Working with 2.8.5
```
define("aurelia-templating-resources/binding-mode-behaviors",["exports","aurelia-binding","aurelia-metadata"],function(i,n,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.TwoWayBindingBehavior=i.OneWayBindingBehavior=i.OneTimeBindingBehavior=void 0;var o,d,a,r,t,m,g={bind:function(i,n,e){i.originalMode=i.mode,i.mode=this.mode},unbind:function(i,n){i.mode=i.originalMode,i.originalMode=null}};i.OneTimeBindingBehavior=(o=(0,e.mixin)(g),o(d=function(){this.mode=n.bindingMode.oneTime})||d),i.OneWayBindingBehavior=(a=(0,e.mixin)(g),a(r=function(){this.mode=n.bindingMode.oneWay})||r),i.TwoWayBindingBehavior=(t=(0,e.mixin)(g),t(m=function(){this.mode=n.bindingMode.twoWay})||m)});
```