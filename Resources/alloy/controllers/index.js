function Controller() {
    function doClick(e) {
        alert($.label.text);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {};
    $.__views.mainTabGroup = A$(Ti.UI.createTabGroup({
        id: "mainTabGroup"
    }), "TabGroup", null);
    $.__views.__alloyId1 = A$(Ti.UI.createWindow({
        id: "__alloyId1"
    }), "Window", null);
    $.__views.__alloyId0 = A$(Ti.UI.createTab({
        window: $.__views.__alloyId1,
        id: "__alloyId0"
    }), "Tab", null);
    $.__views.mainTabGroup.addTab($.__views.__alloyId0);
    $.__views.__alloyId3 = A$(Ti.UI.createWindow({
        id: "__alloyId3"
    }), "Window", null);
    $.__views.__alloyId2 = A$(Ti.UI.createTab({
        window: $.__views.__alloyId3,
        id: "__alloyId2"
    }), "Tab", null);
    $.__views.mainTabGroup.addTab($.__views.__alloyId2);
    $.__views.__alloyId5 = A$(Ti.UI.createWindow({
        id: "__alloyId5"
    }), "Window", null);
    $.__views.__alloyId4 = A$(Ti.UI.createTab({
        window: $.__views.__alloyId5,
        id: "__alloyId4"
    }), "Tab", null);
    $.__views.mainTabGroup.addTab($.__views.__alloyId4);
    $.__views.__alloyId7 = A$(Ti.UI.createWindow({
        id: "__alloyId7"
    }), "Window", null);
    $.__views.__alloyId6 = A$(Ti.UI.createTab({
        window: $.__views.__alloyId7,
        id: "__alloyId6"
    }), "Tab", null);
    $.__views.mainTabGroup.addTab($.__views.__alloyId6);
    $.__views.__alloyId9 = A$(Ti.UI.createWindow({
        id: "__alloyId9"
    }), "Window", null);
    $.__views.__alloyId8 = A$(Ti.UI.createTab({
        window: $.__views.__alloyId9,
        id: "__alloyId8"
    }), "Tab", null);
    $.__views.mainTabGroup.addTab($.__views.__alloyId8);
    $.addTopLevelView($.__views.mainTabGroup);
    _.extend($, $.__views);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;