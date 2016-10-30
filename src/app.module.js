"use strict";
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./components/app.component");
var input_component_1 = require("./components/input.component");
core_1.NgModule({
    declarations: [
        app_component_1.AppComponent,
        input_component_1.InputComponent
    ],
    imports: [
        platform_browser_1.BrowserModule,
        forms_1.FormsModule,
        http_1.HttpModule
    ],
    exports: [input_component_1.InputComponent],
    providers: [],
    bootstrap: [input_component_1.InputComponent]
});
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
exports.AppModule = AppModule;
