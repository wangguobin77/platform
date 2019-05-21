!function(e){var t={initTree:function(t){var r=e.extend({},this.treegrid.defaults,t);return this.each(function(){var t=e(this);t.treegrid("setTreeContainer",e(this)),t.treegrid("setSettings",r),r.getRootNodes.apply(this,[e(this)]).treegrid("initNode",r),t.treegrid("getRootNodes").treegrid("render")})},initNode:function(t){return this.each(function(){var r=e(this);r.treegrid("setTreeContainer",t.getTreeGridContainer.apply(this)),r.treegrid("getChildNodes").treegrid("initNode",t),r.treegrid("initExpander").treegrid("initIndent").treegrid("initEvents").treegrid("initState").treegrid("initChangeEvent").treegrid("initSettingsEvents")})},initChangeEvent:function(){var t=e(this);return t.on("change",function(){var t=e(this);t.treegrid("render"),t.treegrid("getSetting","saveState")&&t.treegrid("saveState")}),t},initEvents:function(){var t=e(this);return t.on("collapse",function(){var t=e(this);t.removeClass("treegrid-expanded"),t.addClass("treegrid-collapsed")}),t.on("expand",function(){var t=e(this);t.removeClass("treegrid-collapsed"),t.addClass("treegrid-expanded")}),t},initSettingsEvents:function(){var t=e(this);return t.on("change",function(){var t=e(this);"function"==typeof t.treegrid("getSetting","onChange")&&t.treegrid("getSetting","onChange").apply(t)}),t.on("collapse",function(){var t=e(this);"function"==typeof t.treegrid("getSetting","onCollapse")&&t.treegrid("getSetting","onCollapse").apply(t)}),t.on("expand",function(){var t=e(this);"function"==typeof t.treegrid("getSetting","onExpand")&&t.treegrid("getSetting","onExpand").apply(t)}),t},initExpander:function(){var t=e(this),r=t.find("td").get(t.treegrid("getSetting","treeColumn")),i=t.treegrid("getSetting","expanderTemplate"),n=t.treegrid("getSetting","getExpander").apply(this);return n&&n.remove(),e(i).prependTo(r).click(function(){e(e(this).closest("tr")).treegrid("toggle")}),t},initIndent:function(){var t=e(this);t.find(".treegrid-indent").remove();for(var r=t.treegrid("getSetting","indentTemplate"),i=t.find(".treegrid-expander"),n=t.treegrid("getDepth"),d=0;d<n;d++)e(r).insertBefore(i);return t},initState:function(){var t=e(this);return t.treegrid("getSetting","saveState")&&!t.treegrid("isFirstInit")?t.treegrid("restoreState"):"expanded"===t.treegrid("getSetting","initialState")?t.treegrid("expand"):t.treegrid("collapse"),t},isFirstInit:function(){var t=e(this).treegrid("getTreeContainer");return void 0===t.data("first_init")&&t.data("first_init",void 0===e.cookie(t.treegrid("getSetting","saveStateName"))),t.data("first_init")},saveState:function(){var t=e(this);if("cookie"===t.treegrid("getSetting","saveStateMethod")){var r=e.cookie(t.treegrid("getSetting","saveStateName"))||"",i=""===r?[]:r.split(","),n=t.treegrid("getNodeId");t.treegrid("isExpanded")?e.inArray(n,i)===-1&&i.push(n):t.treegrid("isCollapsed")&&e.inArray(n,i)!==-1&&i.splice(e.inArray(n,i),1),e.cookie(t.treegrid("getSetting","saveStateName"),i.join(","))}return t},restoreState:function(){var t=e(this);if("cookie"===t.treegrid("getSetting","saveStateMethod")){var r=e.cookie(t.treegrid("getSetting","saveStateName")).split(",");e.inArray(t.treegrid("getNodeId"),r)!==-1?t.treegrid("expand"):t.treegrid("collapse")}return t},getSetting:function(t){return e(this).treegrid("getTreeContainer")?e(this).treegrid("getTreeContainer").data("settings")[t]:null},setSettings:function(t){e(this).treegrid("getTreeContainer").data("settings",t)},getTreeContainer:function(){return e(this).data("treegrid")},setTreeContainer:function(t){return e(this).data("treegrid",t)},getRootNodes:function(){return e(this).treegrid("getSetting","getRootNodes").apply(this,[e(this).treegrid("getTreeContainer")])},getAllNodes:function(){return e(this).treegrid("getSetting","getAllNodes").apply(this,[e(this).treegrid("getTreeContainer")])},isNode:function(){return null!==e(this).treegrid("getNodeId")},getNodeId:function(){return null===e(this).treegrid("getSetting","getNodeId")?null:e(this).treegrid("getSetting","getNodeId").apply(this)},getParentNodeId:function(){return e(this).treegrid("getSetting","getParentNodeId").apply(this)},getParentNode:function(){return null===e(this).treegrid("getParentNodeId")?null:e(this).treegrid("getSetting","getNodeById").apply(this,[e(this).treegrid("getParentNodeId"),e(this).treegrid("getTreeContainer")])},getChildNodes:function(){return e(this).treegrid("getSetting","getChildNodes").apply(this,[e(this).treegrid("getNodeId"),e(this).treegrid("getTreeContainer")])},getDepth:function(){return null===e(this).treegrid("getParentNode")?0:e(this).treegrid("getParentNode").treegrid("getDepth")+1},isRoot:function(){return 0===e(this).treegrid("getDepth")},isLeaf:function(){return 0===e(this).treegrid("getChildNodes").length},isLast:function(){if(e(this).treegrid("isNode")){var t=e(this).treegrid("getParentNode");if(null===t){if(e(this).treegrid("getNodeId")===e(this).treegrid("getRootNodes").last().treegrid("getNodeId"))return!0}else if(e(this).treegrid("getNodeId")===t.treegrid("getChildNodes").last().treegrid("getNodeId"))return!0}return!1},isFirst:function(){if(e(this).treegrid("isNode")){var t=e(this).treegrid("getParentNode");if(null===t){if(e(this).treegrid("getNodeId")===e(this).treegrid("getRootNodes").first().treegrid("getNodeId"))return!0}else if(e(this).treegrid("getNodeId")===t.treegrid("getChildNodes").first().treegrid("getNodeId"))return!0}return!1},isExpanded:function(){return e(this).hasClass("treegrid-expanded")},isCollapsed:function(){return e(this).hasClass("treegrid-collapsed")},isOneOfParentsCollapsed:function(){var t=e(this);return!t.treegrid("isRoot")&&(!!t.treegrid("getParentNode").treegrid("isCollapsed")||t.treegrid("getParentNode").treegrid("isOneOfParentsCollapsed"))},expand:function(){return this.treegrid("isLeaf")||this.treegrid("isExpanded")?this:(this.trigger("expand"),this.trigger("change"),this)},expandAll:function(){var t=e(this);return t.treegrid("getRootNodes").treegrid("expandRecursive"),t},expandRecursive:function(){return e(this).each(function(){var t=e(this);t.treegrid("expand"),t.treegrid("isLeaf")||t.treegrid("getChildNodes").treegrid("expandRecursive")})},collapse:function(){return e(this).each(function(){var t=e(this);t.treegrid("isLeaf")||t.treegrid("isCollapsed")||(t.trigger("collapse"),t.trigger("change"))})},collapseAll:function(){var t=e(this);return t.treegrid("getRootNodes").treegrid("collapseRecursive"),t},collapseRecursive:function(){return e(this).each(function(){var t=e(this);t.treegrid("collapse"),t.treegrid("isLeaf")||t.treegrid("getChildNodes").treegrid("collapseRecursive")})},toggle:function(){var t=e(this);return t.treegrid("isExpanded")?t.treegrid("collapse"):t.treegrid("expand"),t},render:function(){return e(this).each(function(){var t=e(this);t.treegrid("isOneOfParentsCollapsed")?t.hide():t.show(),t.treegrid("isLeaf")||(t.treegrid("renderExpander"),t.treegrid("getChildNodes").treegrid("render"))})},renderExpander:function(){return e(this).each(function(){var t=e(this),r=t.treegrid("getSetting","getExpander").apply(this);r?t.treegrid("isCollapsed")?(r.removeClass(t.treegrid("getSetting","expanderExpandedClass")),r.addClass(t.treegrid("getSetting","expanderCollapsedClass"))):(r.removeClass(t.treegrid("getSetting","expanderCollapsedClass")),r.addClass(t.treegrid("getSetting","expanderExpandedClass"))):(t.treegrid("initExpander"),t.treegrid("renderExpander"))})}};e.fn.treegrid=function(r){return t[r]?t[r].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof r&&r?void e.error("Method with name "+r+" does not exists for jQuery.treegrid"):t.initTree.apply(this,arguments)},e.fn.treegrid.defaults={initialState:"expanded",saveState:!1,saveStateMethod:"cookie",saveStateName:"tree-grid-state",expanderTemplate:'<span class="treegrid-expander"></span>',indentTemplate:'<span class="treegrid-indent"></span>',expanderExpandedClass:"treegrid-expander-expanded",expanderCollapsedClass:"treegrid-expander-collapsed",treeColumn:0,getExpander:function(){return e(this).find(".treegrid-expander")},getNodeId:function(){var t=/treegrid-([A-Za-z0-9_-]+)/;return t.test(e(this).attr("class"))?t.exec(e(this).attr("class"))[1]:null},getParentNodeId:function(){var t=/treegrid-parent-([A-Za-z0-9_-]+)/;return t.test(e(this).attr("class"))?t.exec(e(this).attr("class"))[1]:null},getNodeById:function(e,t){var r="treegrid-"+e;return t.find("tr."+r)},getChildNodes:function(e,t){var r="treegrid-parent-"+e;return t.find("tr."+r)},getTreeGridContainer:function(){return e(this).closest("table")},getRootNodes:function(t){var r=e.grep(t.find("tr"),function(t){var r=e(t).attr("class"),i=/treegrid-([A-Za-z0-9_-]+)/,n=/treegrid-parent-([A-Za-z0-9_-]+)/;return i.test(r)&&!n.test(r)});return e(r)},getAllNodes:function(t){var r=e.grep(t.find("tr"),function(t){var r=e(t).attr("class"),i=/treegrid-([A-Za-z0-9_-]+)/;return i.test(r)});return e(r)},onCollapse:null,onExpand:null,onChange:null}}(jQuery);
//# sourceMappingURL=jquery.treegrid.js.map
