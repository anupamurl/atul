"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var animations_1 = require("@angular/platform-browser/animations");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var demo_app_1 = require("./demo-app/demo-app");
var routes_1 = require("./demo-app/routes");
var material_1 = require("@angular/material");
var progress_bar_demo_1 = require("./progress-bar/progress-bar-demo");
var dialog_demo_1 = require("./dialog/dialog-demo");
var ripple_demo_1 = require("./ripple/ripple-demo");
var icon_demo_1 = require("./icon/icon-demo");
var gestures_demo_1 = require("./gestures/gestures-demo");
var input_demo_1 = require("./input/input-demo");
var card_demo_1 = require("./card/card-demo");
var radio_demo_1 = require("./radio/radio-demo");
var button_toggle_demo_1 = require("./button-toggle/button-toggle-demo");
var progress_circle_demo_1 = require("./progress-circle/progress-circle-demo");
var tooltip_demo_1 = require("./tooltip/tooltip-demo");
var list_demo_1 = require("./list/list-demo");
var baseline_demo_1 = require("./baseline/baseline-demo");
var grid_list_demo_1 = require("./grid-list/grid-list-demo");
var live_announcer_demo_1 = require("./live-announcer/live-announcer-demo");
var overlay_demo_1 = require("./overlay/overlay-demo");
var slide_toggle_demo_1 = require("./slide-toggle/slide-toggle-demo");
var toolbar_demo_1 = require("./toolbar/toolbar-demo");
var button_demo_1 = require("./button/button-demo");
var checkbox_demo_1 = require("./checkbox/checkbox-demo");
var slider_demo_1 = require("./slider/slider-demo");
var sidenav_demo_1 = require("./sidenav/sidenav-demo");
var portal_demo_1 = require("./portal/portal-demo");
var menu_demo_1 = require("./menu/menu-demo");
var tabs_demo_1 = require("./tabs/tabs-demo");
var chips_demo_1 = require("./chips/chips-demo");
var select_demo_1 = require("./select/select-demo");
var snack_bar_demo_1 = require("./snack-bar/snack-bar-demo");
var projection_demo_1 = require("./projection/projection-demo");
var platform_demo_1 = require("./platform/platform-demo");
var autocomplete_demo_1 = require("./autocomplete/autocomplete-demo");
var table_demo_1 = require("./table/table-demo");
var cdk_1 = require("@angular/cdk");
var DemoAppModule = (function () {
    function DemoAppModule() {
    }
    DemoAppModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                animations_1.BrowserAnimationsModule,
                material_1.MaterialModule,
                routes_1.demoRouting,
                cdk_1.CdkTableModule,
            ],
            providers: [],
            declarations: [
                autocomplete_demo_1.AutocompleteDemoComponent,
                baseline_demo_1.BaselineDemoComponent,
                button_demo_1.ButtonDemoComponent,
                button_toggle_demo_1.ButtonToggleDemoComponent,
                card_demo_1.CardDemoComponent,
                checkbox_demo_1.CheckboxDemoComponent,
                demo_app_1.HomeComponent,
                dialog_demo_1.DialogDemoComponent,
                gestures_demo_1.GesturesDemoComponent,
                grid_list_demo_1.GridListDemoComponent,
                icon_demo_1.IconDemoComponent,
                input_demo_1.InputDemoComponent,
                dialog_demo_1.JazzDialogComponent,
                list_demo_1.ListDemoComponent,
                live_announcer_demo_1.LiveAnnouncerDemoComponent,
                checkbox_demo_1.MdCheckboxDemoNestedChecklistComponent,
                menu_demo_1.MenuDemoComponent,
                overlay_demo_1.OverlayDemoComponent,
                portal_demo_1.PortalDemoComponent,
                progress_bar_demo_1.ProgressBarDemoComponent,
                progress_circle_demo_1.ProgressCircleDemoComponent,
                platform_demo_1.PlatformDemoComponent,
                radio_demo_1.RadioDemoComponent,
                ripple_demo_1.RippleDemoComponent,
                overlay_demo_1.RotiniPanelComponent,
                portal_demo_1.ScienceJokeComponent,
                sidenav_demo_1.SidenavDemoComponent,
                slider_demo_1.SliderDemoComponent,
                slide_toggle_demo_1.SlideToggleDemoComponent,
                snack_bar_demo_1.SnackBarDemoComponent,
                overlay_demo_1.SpagettiPanelComponent,
                tabs_demo_1.TabsDemoComponent,
                tabs_demo_1.SunnyTabContentComponent,
                tabs_demo_1.RainyTabContentComponent,
                tabs_demo_1.FoggyTabContentComponent,
                toolbar_demo_1.ToolbarDemoComponent,
                tooltip_demo_1.TooltipDemoComponent,
                table_demo_1.TableDemoComponent,
                projection_demo_1.ProjectionDemoComponent,
                chips_demo_1.ChipsDemoComponent,
                select_demo_1.SelectDemoComponent,
                dialog_demo_1.ContentElementDialogComponent,
                dialog_demo_1.IFrameDialogComponent,
            ],
            entryComponents: [
                dialog_demo_1.JazzDialogComponent,
                overlay_demo_1.RotiniPanelComponent,
                portal_demo_1.ScienceJokeComponent,
                overlay_demo_1.SpagettiPanelComponent,
            ],
        })
    ], DemoAppModule);
    return DemoAppModule;
}());
exports.DemoAppModule = DemoAppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYXRlcmlhbC9kZW1vLWFwcC9kZW1vLWFwcC1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFDekMsbUVBQStFO0FBQy9FLDBDQUErQztBQUMvQyxzQ0FBMkM7QUFDM0Msd0NBQWtFO0FBQ2xFLGdEQUFvRDtBQUNwRCw0Q0FBZ0Q7QUFDaEQsOENBQW1EO0FBQ25ELHNFQUE0RTtBQUM1RSxvREFBc0k7QUFDdEksb0RBQTJEO0FBQzNELDhDQUFxRDtBQUNyRCwwREFBaUU7QUFDakUsaURBQXdEO0FBQ3hELDhDQUFxRDtBQUNyRCxpREFBd0Q7QUFDeEQseUVBQStFO0FBQy9FLCtFQUFxRjtBQUNyRix1REFBOEQ7QUFDOUQsOENBQXFEO0FBQ3JELDBEQUFpRTtBQUNqRSw2REFBbUU7QUFDbkUsNEVBQWtGO0FBQ2xGLHVEQUE0RztBQUM1RyxzRUFBNEU7QUFDNUUsdURBQThEO0FBQzlELG9EQUEyRDtBQUMzRCwwREFBeUc7QUFDekcsb0RBQTJEO0FBQzNELHVEQUE4RDtBQUM5RCxvREFBaUY7QUFDakYsOENBQXFEO0FBQ3JELDhDQUM0QjtBQUM1QixpREFBd0Q7QUFDeEQsb0RBQTJEO0FBQzNELDZEQUFtRTtBQUNuRSxnRUFBdUU7QUFDdkUsMERBQWlFO0FBQ2pFLHNFQUE2RTtBQUM3RSxpREFBd0Q7QUFFeEQsb0NBQThDO0FBbUU5QztJQUFBO0lBQTZCLENBQUM7SUFBakIsYUFBYTtRQWxFekIsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLHFCQUFZO2dCQUNaLG1CQUFXO2dCQUNYLDJCQUFtQjtnQkFDbkIsaUJBQVU7Z0JBQ1Ysb0NBQXVCO2dCQUN2Qix5QkFBYztnQkFDZCxvQkFBVztnQkFDWCxvQkFBYzthQUNmO1lBQ0QsU0FBUyxFQUFFLEVBQ1Y7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osNkNBQXlCO2dCQUN6QixxQ0FBcUI7Z0JBQ3JCLGlDQUFtQjtnQkFDbkIsOENBQXlCO2dCQUN6Qiw2QkFBaUI7Z0JBQ2pCLHFDQUFxQjtnQkFDckIsd0JBQWE7Z0JBQ2IsaUNBQW1CO2dCQUNuQixxQ0FBcUI7Z0JBQ3JCLHNDQUFxQjtnQkFDckIsNkJBQWlCO2dCQUNqQiwrQkFBa0I7Z0JBQ2xCLGlDQUFtQjtnQkFDbkIsNkJBQWlCO2dCQUNqQixnREFBMEI7Z0JBQzFCLHNEQUFzQztnQkFDdEMsNkJBQWlCO2dCQUNqQixtQ0FBb0I7Z0JBQ3BCLGlDQUFtQjtnQkFDbkIsNENBQXdCO2dCQUN4QixrREFBMkI7Z0JBQzNCLHFDQUFxQjtnQkFDckIsK0JBQWtCO2dCQUNsQixpQ0FBbUI7Z0JBQ25CLG1DQUFvQjtnQkFDcEIsa0NBQW9CO2dCQUNwQixtQ0FBb0I7Z0JBQ3BCLGlDQUFtQjtnQkFDbkIsNENBQXdCO2dCQUN4QixzQ0FBcUI7Z0JBQ3JCLHFDQUFzQjtnQkFDdEIsNkJBQWlCO2dCQUNqQixvQ0FBd0I7Z0JBQ3hCLG9DQUF3QjtnQkFDeEIsb0NBQXdCO2dCQUN4QixtQ0FBb0I7Z0JBQ3BCLG1DQUFvQjtnQkFDcEIsK0JBQWtCO2dCQUNsQix5Q0FBdUI7Z0JBQ3ZCLCtCQUFrQjtnQkFDbEIsaUNBQW1CO2dCQUNuQiwyQ0FBNkI7Z0JBQzdCLG1DQUFxQjthQUN0QjtZQUNELGVBQWUsRUFBRTtnQkFDZixpQ0FBbUI7Z0JBQ25CLG1DQUFvQjtnQkFDcEIsa0NBQW9CO2dCQUNwQixxQ0FBc0I7YUFDdkI7U0FDRixDQUFDO09BRVcsYUFBYSxDQUFJO0lBQUQsb0JBQUM7Q0FBOUIsQUFBOEIsSUFBQTtBQUFqQixzQ0FBYSIsImZpbGUiOiJhcHAvbWF0ZXJpYWwvZGVtby1hcHAvZGVtby1hcHAtbW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9kZW1vLWFwcC9kZW1vLWFwcCc7XHJcbmltcG9ydCB7IGRlbW9Sb3V0aW5nIH0gZnJvbSAnLi9kZW1vLWFwcC9yb3V0ZXMnO1xyXG5pbXBvcnQgeyBNYXRlcmlhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgUHJvZ3Jlc3NCYXJEZW1vQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLWRlbW8nO1xyXG5pbXBvcnQgeyBKYXp6RGlhbG9nQ29tcG9uZW50LCBEaWFsb2dEZW1vQ29tcG9uZW50LCBDb250ZW50RWxlbWVudERpYWxvZ0NvbXBvbmVudCwgSUZyYW1lRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2cvZGlhbG9nLWRlbW8nO1xyXG5pbXBvcnQgeyBSaXBwbGVEZW1vQ29tcG9uZW50IH0gZnJvbSAnLi9yaXBwbGUvcmlwcGxlLWRlbW8nO1xyXG5pbXBvcnQgeyBJY29uRGVtb0NvbXBvbmVudCB9IGZyb20gJy4vaWNvbi9pY29uLWRlbW8nO1xyXG5pbXBvcnQgeyBHZXN0dXJlc0RlbW9Db21wb25lbnQgfSBmcm9tICcuL2dlc3R1cmVzL2dlc3R1cmVzLWRlbW8nO1xyXG5pbXBvcnQgeyBJbnB1dERlbW9Db21wb25lbnQgfSBmcm9tICcuL2lucHV0L2lucHV0LWRlbW8nO1xyXG5pbXBvcnQgeyBDYXJkRGVtb0NvbXBvbmVudCB9IGZyb20gJy4vY2FyZC9jYXJkLWRlbW8nO1xyXG5pbXBvcnQgeyBSYWRpb0RlbW9Db21wb25lbnQgfSBmcm9tICcuL3JhZGlvL3JhZGlvLWRlbW8nO1xyXG5pbXBvcnQgeyBCdXR0b25Ub2dnbGVEZW1vQ29tcG9uZW50IH0gZnJvbSAnLi9idXR0b24tdG9nZ2xlL2J1dHRvbi10b2dnbGUtZGVtbyc7XHJcbmltcG9ydCB7IFByb2dyZXNzQ2lyY2xlRGVtb0NvbXBvbmVudCB9IGZyb20gJy4vcHJvZ3Jlc3MtY2lyY2xlL3Byb2dyZXNzLWNpcmNsZS1kZW1vJztcclxuaW1wb3J0IHsgVG9vbHRpcERlbW9Db21wb25lbnQgfSBmcm9tICcuL3Rvb2x0aXAvdG9vbHRpcC1kZW1vJztcclxuaW1wb3J0IHsgTGlzdERlbW9Db21wb25lbnQgfSBmcm9tICcuL2xpc3QvbGlzdC1kZW1vJztcclxuaW1wb3J0IHsgQmFzZWxpbmVEZW1vQ29tcG9uZW50IH0gZnJvbSAnLi9iYXNlbGluZS9iYXNlbGluZS1kZW1vJztcclxuaW1wb3J0IHsgR3JpZExpc3REZW1vQ29tcG9uZW50IH0gZnJvbSAnLi9ncmlkLWxpc3QvZ3JpZC1saXN0LWRlbW8nO1xyXG5pbXBvcnQgeyBMaXZlQW5ub3VuY2VyRGVtb0NvbXBvbmVudCB9IGZyb20gJy4vbGl2ZS1hbm5vdW5jZXIvbGl2ZS1hbm5vdW5jZXItZGVtbyc7XHJcbmltcG9ydCB7IE92ZXJsYXlEZW1vQ29tcG9uZW50LCBTcGFnZXR0aVBhbmVsQ29tcG9uZW50LCBSb3RpbmlQYW5lbENvbXBvbmVudCB9IGZyb20gJy4vb3ZlcmxheS9vdmVybGF5LWRlbW8nO1xyXG5pbXBvcnQgeyBTbGlkZVRvZ2dsZURlbW9Db21wb25lbnQgfSBmcm9tICcuL3NsaWRlLXRvZ2dsZS9zbGlkZS10b2dnbGUtZGVtbyc7XHJcbmltcG9ydCB7IFRvb2xiYXJEZW1vQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3Rvb2xiYXItZGVtbyc7XHJcbmltcG9ydCB7IEJ1dHRvbkRlbW9Db21wb25lbnQgfSBmcm9tICcuL2J1dHRvbi9idXR0b24tZGVtbyc7XHJcbmltcG9ydCB7IE1kQ2hlY2tib3hEZW1vTmVzdGVkQ2hlY2tsaXN0Q29tcG9uZW50LCBDaGVja2JveERlbW9Db21wb25lbnQgfSBmcm9tICcuL2NoZWNrYm94L2NoZWNrYm94LWRlbW8nO1xyXG5pbXBvcnQgeyBTbGlkZXJEZW1vQ29tcG9uZW50IH0gZnJvbSAnLi9zbGlkZXIvc2xpZGVyLWRlbW8nO1xyXG5pbXBvcnQgeyBTaWRlbmF2RGVtb0NvbXBvbmVudCB9IGZyb20gJy4vc2lkZW5hdi9zaWRlbmF2LWRlbW8nO1xyXG5pbXBvcnQgeyBQb3J0YWxEZW1vQ29tcG9uZW50LCBTY2llbmNlSm9rZUNvbXBvbmVudCB9IGZyb20gJy4vcG9ydGFsL3BvcnRhbC1kZW1vJztcclxuaW1wb3J0IHsgTWVudURlbW9Db21wb25lbnQgfSBmcm9tICcuL21lbnUvbWVudS1kZW1vJztcclxuaW1wb3J0IHsgVGFic0RlbW9Db21wb25lbnQsIFN1bm55VGFiQ29udGVudENvbXBvbmVudCwgUmFpbnlUYWJDb250ZW50Q29tcG9uZW50LCBGb2dneVRhYkNvbnRlbnRDb21wb25lbnRcclxuICB9IGZyb20gJy4vdGFicy90YWJzLWRlbW8nO1xyXG5pbXBvcnQgeyBDaGlwc0RlbW9Db21wb25lbnQgfSBmcm9tICcuL2NoaXBzL2NoaXBzLWRlbW8nO1xyXG5pbXBvcnQgeyBTZWxlY3REZW1vQ29tcG9uZW50IH0gZnJvbSAnLi9zZWxlY3Qvc2VsZWN0LWRlbW8nO1xyXG5pbXBvcnQgeyBTbmFja0JhckRlbW9Db21wb25lbnQgfSBmcm9tICcuL3NuYWNrLWJhci9zbmFjay1iYXItZGVtbyc7XHJcbmltcG9ydCB7IFByb2plY3Rpb25EZW1vQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9qZWN0aW9uL3Byb2plY3Rpb24tZGVtbyc7XHJcbmltcG9ydCB7IFBsYXRmb3JtRGVtb0NvbXBvbmVudCB9IGZyb20gJy4vcGxhdGZvcm0vcGxhdGZvcm0tZGVtbyc7XHJcbmltcG9ydCB7IEF1dG9jb21wbGV0ZURlbW9Db21wb25lbnQgfSBmcm9tICcuL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUtZGVtbyc7XHJcbmltcG9ydCB7IFRhYmxlRGVtb0NvbXBvbmVudCB9IGZyb20gJy4vdGFibGUvdGFibGUtZGVtbyc7XHJcblxyXG5pbXBvcnQgeyBDZGtUYWJsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkayc7XHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgSHR0cE1vZHVsZSxcclxuICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxyXG4gICAgTWF0ZXJpYWxNb2R1bGUsXHJcbiAgICBkZW1vUm91dGluZyxcclxuICAgIENka1RhYmxlTW9kdWxlLFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEF1dG9jb21wbGV0ZURlbW9Db21wb25lbnQsXHJcbiAgICBCYXNlbGluZURlbW9Db21wb25lbnQsXHJcbiAgICBCdXR0b25EZW1vQ29tcG9uZW50LFxyXG4gICAgQnV0dG9uVG9nZ2xlRGVtb0NvbXBvbmVudCxcclxuICAgIENhcmREZW1vQ29tcG9uZW50LFxyXG4gICAgQ2hlY2tib3hEZW1vQ29tcG9uZW50LFxyXG4gICAgSG9tZUNvbXBvbmVudCxcclxuICAgIERpYWxvZ0RlbW9Db21wb25lbnQsXHJcbiAgICBHZXN0dXJlc0RlbW9Db21wb25lbnQsXHJcbiAgICBHcmlkTGlzdERlbW9Db21wb25lbnQsXHJcbiAgICBJY29uRGVtb0NvbXBvbmVudCxcclxuICAgIElucHV0RGVtb0NvbXBvbmVudCxcclxuICAgIEphenpEaWFsb2dDb21wb25lbnQsXHJcbiAgICBMaXN0RGVtb0NvbXBvbmVudCxcclxuICAgIExpdmVBbm5vdW5jZXJEZW1vQ29tcG9uZW50LFxyXG4gICAgTWRDaGVja2JveERlbW9OZXN0ZWRDaGVja2xpc3RDb21wb25lbnQsXHJcbiAgICBNZW51RGVtb0NvbXBvbmVudCxcclxuICAgIE92ZXJsYXlEZW1vQ29tcG9uZW50LFxyXG4gICAgUG9ydGFsRGVtb0NvbXBvbmVudCxcclxuICAgIFByb2dyZXNzQmFyRGVtb0NvbXBvbmVudCxcclxuICAgIFByb2dyZXNzQ2lyY2xlRGVtb0NvbXBvbmVudCxcclxuICAgIFBsYXRmb3JtRGVtb0NvbXBvbmVudCxcclxuICAgIFJhZGlvRGVtb0NvbXBvbmVudCxcclxuICAgIFJpcHBsZURlbW9Db21wb25lbnQsXHJcbiAgICBSb3RpbmlQYW5lbENvbXBvbmVudCxcclxuICAgIFNjaWVuY2VKb2tlQ29tcG9uZW50LFxyXG4gICAgU2lkZW5hdkRlbW9Db21wb25lbnQsXHJcbiAgICBTbGlkZXJEZW1vQ29tcG9uZW50LFxyXG4gICAgU2xpZGVUb2dnbGVEZW1vQ29tcG9uZW50LFxyXG4gICAgU25hY2tCYXJEZW1vQ29tcG9uZW50LFxyXG4gICAgU3BhZ2V0dGlQYW5lbENvbXBvbmVudCxcclxuICAgIFRhYnNEZW1vQ29tcG9uZW50LFxyXG4gICAgU3VubnlUYWJDb250ZW50Q29tcG9uZW50LFxyXG4gICAgUmFpbnlUYWJDb250ZW50Q29tcG9uZW50LFxyXG4gICAgRm9nZ3lUYWJDb250ZW50Q29tcG9uZW50LFxyXG4gICAgVG9vbGJhckRlbW9Db21wb25lbnQsXHJcbiAgICBUb29sdGlwRGVtb0NvbXBvbmVudCxcclxuICAgIFRhYmxlRGVtb0NvbXBvbmVudCxcclxuICAgIFByb2plY3Rpb25EZW1vQ29tcG9uZW50LFxyXG4gICAgQ2hpcHNEZW1vQ29tcG9uZW50LFxyXG4gICAgU2VsZWN0RGVtb0NvbXBvbmVudCxcclxuICAgIENvbnRlbnRFbGVtZW50RGlhbG9nQ29tcG9uZW50LFxyXG4gICAgSUZyYW1lRGlhbG9nQ29tcG9uZW50LFxyXG4gIF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbXHJcbiAgICBKYXp6RGlhbG9nQ29tcG9uZW50LFxyXG4gICAgUm90aW5pUGFuZWxDb21wb25lbnQsXHJcbiAgICBTY2llbmNlSm9rZUNvbXBvbmVudCxcclxuICAgIFNwYWdldHRpUGFuZWxDb21wb25lbnQsXHJcbiAgXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBEZW1vQXBwTW9kdWxlIHsgfVxyXG4iXX0=
