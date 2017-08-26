"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var demo_app_1 = require("./demo-app");
var autocomplete_demo_1 = require("../autocomplete/autocomplete-demo");
var button_demo_1 = require("../button/button-demo");
var baseline_demo_1 = require("../baseline/baseline-demo");
var button_toggle_demo_1 = require("../button-toggle/button-toggle-demo");
var tabs_demo_1 = require("../tabs/tabs-demo");
var grid_list_demo_1 = require("../grid-list/grid-list-demo");
var gestures_demo_1 = require("../gestures/gestures-demo");
var live_announcer_demo_1 = require("../live-announcer/live-announcer-demo");
var list_demo_1 = require("../list/list-demo");
var icon_demo_1 = require("../icon/icon-demo");
var toolbar_demo_1 = require("../toolbar/toolbar-demo");
var input_demo_1 = require("../input/input-demo");
var checkbox_demo_1 = require("../checkbox/checkbox-demo");
var overlay_demo_1 = require("../overlay/overlay-demo");
var portal_demo_1 = require("../portal/portal-demo");
var progress_bar_demo_1 = require("../progress-bar/progress-bar-demo");
var progress_circle_demo_1 = require("../progress-circle/progress-circle-demo");
var slide_toggle_demo_1 = require("../slide-toggle/slide-toggle-demo");
var slider_demo_1 = require("../slider/slider-demo");
var sidenav_demo_1 = require("../sidenav/sidenav-demo");
var radio_demo_1 = require("../radio/radio-demo");
var card_demo_1 = require("../card/card-demo");
var menu_demo_1 = require("../menu/menu-demo");
var ripple_demo_1 = require("../ripple/ripple-demo");
var dialog_demo_1 = require("../dialog/dialog-demo");
var tooltip_demo_1 = require("../tooltip/tooltip-demo");
var table_demo_1 = require("../table/table-demo");
exports.demoRoutes = [
    {
        path: 'demo',
        component: demo_app_1.HomeComponent,
        children: [
            { path: 'autocomplete', component: autocomplete_demo_1.AutocompleteDemoComponent },
            { path: 'button', component: button_demo_1.ButtonDemoComponent },
            { path: 'card', component: card_demo_1.CardDemoComponent },
            { path: 'radio', component: radio_demo_1.RadioDemoComponent },
            { path: 'sidenav', component: sidenav_demo_1.SidenavDemoComponent },
            { path: 'slide-toggle', component: slide_toggle_demo_1.SlideToggleDemoComponent },
            { path: 'slider', component: slider_demo_1.SliderDemoComponent },
            { path: 'progress-circle', component: progress_circle_demo_1.ProgressCircleDemoComponent },
            { path: 'progress-bar', component: progress_bar_demo_1.ProgressBarDemoComponent },
            { path: 'portal', component: portal_demo_1.PortalDemoComponent },
            { path: 'overlay', component: overlay_demo_1.OverlayDemoComponent },
            { path: 'checkbox', component: checkbox_demo_1.CheckboxDemoComponent },
            { path: 'input', component: input_demo_1.InputDemoComponent },
            { path: 'toolbar', component: toolbar_demo_1.ToolbarDemoComponent },
            { path: 'icon', component: icon_demo_1.IconDemoComponent },
            { path: 'list', component: list_demo_1.ListDemoComponent },
            { path: 'menu', component: menu_demo_1.MenuDemoComponent },
            { path: 'live-announcer', component: live_announcer_demo_1.LiveAnnouncerDemoComponent },
            { path: 'gestures', component: gestures_demo_1.GesturesDemoComponent },
            { path: 'grid-list', component: grid_list_demo_1.GridListDemoComponent },
            { path: 'tabs', component: tabs_demo_1.TabsDemoComponent,
                children: [
                    { path: '', redirectTo: 'sunny-tab', pathMatch: 'full' },
                    { path: 'sunny-tab', component: tabs_demo_1.SunnyTabContentComponent },
                    { path: 'rainy-tab', component: tabs_demo_1.RainyTabContentComponent },
                    { path: 'foggy-tab', component: tabs_demo_1.FoggyTabContentComponent },
                ]
            },
            { path: 'button-toggle', component: button_toggle_demo_1.ButtonToggleDemoComponent },
            { path: 'baseline', component: baseline_demo_1.BaselineDemoComponent },
            { path: 'ripple', component: ripple_demo_1.RippleDemoComponent },
            { path: 'dialog', component: dialog_demo_1.DialogDemoComponent },
            { path: 'tooltip', component: tooltip_demo_1.TooltipDemoComponent },
            { path: 'table', component: table_demo_1.TableDemoComponent },
        ]
    }
];
exports.demoRouting = router_1.RouterModule.forChild(exports.demoRoutes);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYXRlcmlhbC9kZW1vLWFwcC9kZW1vLWFwcC9yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwwQ0FBdUQ7QUFDdkQsdUNBQTJDO0FBQzNDLHVFQUE4RTtBQUM5RSxxREFBNEQ7QUFDNUQsMkRBQWtFO0FBQ2xFLDBFQUFnRjtBQUNoRiwrQ0FDZ0Y7QUFDaEYsOERBQW9FO0FBQ3BFLDJEQUFrRTtBQUNsRSw2RUFBbUY7QUFDbkYsK0NBQXNEO0FBQ3RELCtDQUFzRDtBQUN0RCx3REFBK0Q7QUFDL0Qsa0RBQXlEO0FBQ3pELDJEQUFrRTtBQUNsRSx3REFBK0Q7QUFDL0QscURBQTREO0FBQzVELHVFQUE2RTtBQUM3RSxnRkFBc0Y7QUFDdEYsdUVBQTZFO0FBQzdFLHFEQUE0RDtBQUM1RCx3REFBK0Q7QUFDL0Qsa0RBQXlEO0FBQ3pELCtDQUFzRDtBQUN0RCwrQ0FBc0Q7QUFDdEQscURBQTREO0FBQzVELHFEQUE0RDtBQUM1RCx3REFBK0Q7QUFDL0Qsa0RBQXlEO0FBRTVDLFFBQUEsVUFBVSxHQUFXO0lBQ2hDO1FBQ0UsSUFBSSxFQUFFLE1BQU07UUFDWixTQUFTLEVBQUUsd0JBQWE7UUFDeEIsUUFBUSxFQUFFO1lBQ1IsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSw2Q0FBeUIsRUFBRTtZQUM5RCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGlDQUFtQixFQUFFO1lBQ2xELEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsNkJBQWlCLEVBQUU7WUFDOUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSwrQkFBa0IsRUFBRTtZQUNoRCxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLG1DQUFvQixFQUFFO1lBQ3BELEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsNENBQXdCLEVBQUU7WUFDN0QsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxpQ0FBbUIsRUFBRTtZQUNsRCxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsa0RBQTJCLEVBQUU7WUFDbkUsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSw0Q0FBd0IsRUFBRTtZQUM3RCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGlDQUFtQixFQUFFO1lBQ2xELEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsbUNBQW9CLEVBQUU7WUFDcEQsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxxQ0FBcUIsRUFBRTtZQUN0RCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLCtCQUFrQixFQUFFO1lBQ2hELEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsbUNBQW9CLEVBQUU7WUFDcEQsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw2QkFBaUIsRUFBRTtZQUM5QyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDZCQUFpQixFQUFFO1lBQzlDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsNkJBQWlCLEVBQUU7WUFDOUMsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLGdEQUEwQixFQUFFO1lBQ2pFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUscUNBQXFCLEVBQUU7WUFDdEQsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxzQ0FBcUIsRUFBRTtZQUN2RCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDZCQUFpQjtnQkFDMUMsUUFBUSxFQUFFO29CQUNSLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7b0JBQ3hELEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsb0NBQXdCLEVBQUU7b0JBQzFELEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsb0NBQXdCLEVBQUU7b0JBQzFELEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsb0NBQXdCLEVBQUU7aUJBQzNEO2FBQ0Y7WUFDRCxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLDhDQUF5QixFQUFFO1lBQy9ELEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUscUNBQXFCLEVBQUU7WUFDdEQsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxpQ0FBbUIsRUFBRTtZQUNsRCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGlDQUFtQixFQUFFO1lBQ2xELEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsbUNBQW9CLEVBQUU7WUFDcEQsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSwrQkFBa0IsRUFBRTtTQUNqRDtLQUNGO0NBQ0YsQ0FBQztBQUVXLFFBQUEsV0FBVyxHQUF5QixxQkFBWSxDQUFDLFFBQVEsQ0FBQyxrQkFBVSxDQUFDLENBQUMiLCJmaWxlIjoiYXBwL21hdGVyaWFsL2RlbW8tYXBwL2RlbW8tYXBwL3JvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMgfSAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2RlbW8tYXBwJztcclxuaW1wb3J0IHsgQXV0b2NvbXBsZXRlRGVtb0NvbXBvbmVudCB9IGZyb20gJy4uL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUtZGVtbyc7XHJcbmltcG9ydCB7IEJ1dHRvbkRlbW9Db21wb25lbnQgfSBmcm9tICcuLi9idXR0b24vYnV0dG9uLWRlbW8nO1xyXG5pbXBvcnQgeyBCYXNlbGluZURlbW9Db21wb25lbnQgfSBmcm9tICcuLi9iYXNlbGluZS9iYXNlbGluZS1kZW1vJztcclxuaW1wb3J0IHsgQnV0dG9uVG9nZ2xlRGVtb0NvbXBvbmVudCB9IGZyb20gJy4uL2J1dHRvbi10b2dnbGUvYnV0dG9uLXRvZ2dsZS1kZW1vJztcclxuaW1wb3J0IHsgVGFic0RlbW9Db21wb25lbnQsIFN1bm55VGFiQ29udGVudENvbXBvbmVudCxcclxuICBSYWlueVRhYkNvbnRlbnRDb21wb25lbnQsIEZvZ2d5VGFiQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4uL3RhYnMvdGFicy1kZW1vJztcclxuaW1wb3J0IHsgR3JpZExpc3REZW1vQ29tcG9uZW50IH0gZnJvbSAnLi4vZ3JpZC1saXN0L2dyaWQtbGlzdC1kZW1vJztcclxuaW1wb3J0IHsgR2VzdHVyZXNEZW1vQ29tcG9uZW50IH0gZnJvbSAnLi4vZ2VzdHVyZXMvZ2VzdHVyZXMtZGVtbyc7XHJcbmltcG9ydCB7IExpdmVBbm5vdW5jZXJEZW1vQ29tcG9uZW50IH0gZnJvbSAnLi4vbGl2ZS1hbm5vdW5jZXIvbGl2ZS1hbm5vdW5jZXItZGVtbyc7XHJcbmltcG9ydCB7IExpc3REZW1vQ29tcG9uZW50IH0gZnJvbSAnLi4vbGlzdC9saXN0LWRlbW8nO1xyXG5pbXBvcnQgeyBJY29uRGVtb0NvbXBvbmVudCB9IGZyb20gJy4uL2ljb24vaWNvbi1kZW1vJztcclxuaW1wb3J0IHsgVG9vbGJhckRlbW9Db21wb25lbnQgfSBmcm9tICcuLi90b29sYmFyL3Rvb2xiYXItZGVtbyc7XHJcbmltcG9ydCB7IElucHV0RGVtb0NvbXBvbmVudCB9IGZyb20gJy4uL2lucHV0L2lucHV0LWRlbW8nO1xyXG5pbXBvcnQgeyBDaGVja2JveERlbW9Db21wb25lbnQgfSBmcm9tICcuLi9jaGVja2JveC9jaGVja2JveC1kZW1vJztcclxuaW1wb3J0IHsgT3ZlcmxheURlbW9Db21wb25lbnQgfSBmcm9tICcuLi9vdmVybGF5L292ZXJsYXktZGVtbyc7XHJcbmltcG9ydCB7IFBvcnRhbERlbW9Db21wb25lbnQgfSBmcm9tICcuLi9wb3J0YWwvcG9ydGFsLWRlbW8nO1xyXG5pbXBvcnQgeyBQcm9ncmVzc0JhckRlbW9Db21wb25lbnQgfSBmcm9tICcuLi9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLWRlbW8nO1xyXG5pbXBvcnQgeyBQcm9ncmVzc0NpcmNsZURlbW9Db21wb25lbnQgfSBmcm9tICcuLi9wcm9ncmVzcy1jaXJjbGUvcHJvZ3Jlc3MtY2lyY2xlLWRlbW8nO1xyXG5pbXBvcnQgeyBTbGlkZVRvZ2dsZURlbW9Db21wb25lbnQgfSBmcm9tICcuLi9zbGlkZS10b2dnbGUvc2xpZGUtdG9nZ2xlLWRlbW8nO1xyXG5pbXBvcnQgeyBTbGlkZXJEZW1vQ29tcG9uZW50IH0gZnJvbSAnLi4vc2xpZGVyL3NsaWRlci1kZW1vJztcclxuaW1wb3J0IHsgU2lkZW5hdkRlbW9Db21wb25lbnQgfSBmcm9tICcuLi9zaWRlbmF2L3NpZGVuYXYtZGVtbyc7XHJcbmltcG9ydCB7IFJhZGlvRGVtb0NvbXBvbmVudCB9IGZyb20gJy4uL3JhZGlvL3JhZGlvLWRlbW8nO1xyXG5pbXBvcnQgeyBDYXJkRGVtb0NvbXBvbmVudCB9IGZyb20gJy4uL2NhcmQvY2FyZC1kZW1vJztcclxuaW1wb3J0IHsgTWVudURlbW9Db21wb25lbnQgfSBmcm9tICcuLi9tZW51L21lbnUtZGVtbyc7XHJcbmltcG9ydCB7IFJpcHBsZURlbW9Db21wb25lbnQgfSBmcm9tICcuLi9yaXBwbGUvcmlwcGxlLWRlbW8nO1xyXG5pbXBvcnQgeyBEaWFsb2dEZW1vQ29tcG9uZW50IH0gZnJvbSAnLi4vZGlhbG9nL2RpYWxvZy1kZW1vJztcclxuaW1wb3J0IHsgVG9vbHRpcERlbW9Db21wb25lbnQgfSBmcm9tICcuLi90b29sdGlwL3Rvb2x0aXAtZGVtbyc7XHJcbmltcG9ydCB7IFRhYmxlRGVtb0NvbXBvbmVudCB9IGZyb20gJy4uL3RhYmxlL3RhYmxlLWRlbW8nO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbW9Sb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7XHJcbiAgICBwYXRoOiAnZGVtbycsXHJcbiAgICBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7IHBhdGg6ICdhdXRvY29tcGxldGUnLCBjb21wb25lbnQ6IEF1dG9jb21wbGV0ZURlbW9Db21wb25lbnQgfSxcclxuICAgICAgeyBwYXRoOiAnYnV0dG9uJywgY29tcG9uZW50OiBCdXR0b25EZW1vQ29tcG9uZW50IH0sXHJcbiAgICAgIHsgcGF0aDogJ2NhcmQnLCBjb21wb25lbnQ6IENhcmREZW1vQ29tcG9uZW50IH0sXHJcbiAgICAgIHsgcGF0aDogJ3JhZGlvJywgY29tcG9uZW50OiBSYWRpb0RlbW9Db21wb25lbnQgfSxcclxuICAgICAgeyBwYXRoOiAnc2lkZW5hdicsIGNvbXBvbmVudDogU2lkZW5hdkRlbW9Db21wb25lbnQgfSxcclxuICAgICAgeyBwYXRoOiAnc2xpZGUtdG9nZ2xlJywgY29tcG9uZW50OiBTbGlkZVRvZ2dsZURlbW9Db21wb25lbnQgfSxcclxuICAgICAgeyBwYXRoOiAnc2xpZGVyJywgY29tcG9uZW50OiBTbGlkZXJEZW1vQ29tcG9uZW50IH0sXHJcbiAgICAgIHsgcGF0aDogJ3Byb2dyZXNzLWNpcmNsZScsIGNvbXBvbmVudDogUHJvZ3Jlc3NDaXJjbGVEZW1vQ29tcG9uZW50IH0sXHJcbiAgICAgIHsgcGF0aDogJ3Byb2dyZXNzLWJhcicsIGNvbXBvbmVudDogUHJvZ3Jlc3NCYXJEZW1vQ29tcG9uZW50IH0sXHJcbiAgICAgIHsgcGF0aDogJ3BvcnRhbCcsIGNvbXBvbmVudDogUG9ydGFsRGVtb0NvbXBvbmVudCB9LFxyXG4gICAgICB7IHBhdGg6ICdvdmVybGF5JywgY29tcG9uZW50OiBPdmVybGF5RGVtb0NvbXBvbmVudCB9LFxyXG4gICAgICB7IHBhdGg6ICdjaGVja2JveCcsIGNvbXBvbmVudDogQ2hlY2tib3hEZW1vQ29tcG9uZW50IH0sXHJcbiAgICAgIHsgcGF0aDogJ2lucHV0JywgY29tcG9uZW50OiBJbnB1dERlbW9Db21wb25lbnQgfSxcclxuICAgICAgeyBwYXRoOiAndG9vbGJhcicsIGNvbXBvbmVudDogVG9vbGJhckRlbW9Db21wb25lbnQgfSxcclxuICAgICAgeyBwYXRoOiAnaWNvbicsIGNvbXBvbmVudDogSWNvbkRlbW9Db21wb25lbnQgfSxcclxuICAgICAgeyBwYXRoOiAnbGlzdCcsIGNvbXBvbmVudDogTGlzdERlbW9Db21wb25lbnQgfSxcclxuICAgICAgeyBwYXRoOiAnbWVudScsIGNvbXBvbmVudDogTWVudURlbW9Db21wb25lbnQgfSxcclxuICAgICAgeyBwYXRoOiAnbGl2ZS1hbm5vdW5jZXInLCBjb21wb25lbnQ6IExpdmVBbm5vdW5jZXJEZW1vQ29tcG9uZW50IH0sXHJcbiAgICAgIHsgcGF0aDogJ2dlc3R1cmVzJywgY29tcG9uZW50OiBHZXN0dXJlc0RlbW9Db21wb25lbnQgfSxcclxuICAgICAgeyBwYXRoOiAnZ3JpZC1saXN0JywgY29tcG9uZW50OiBHcmlkTGlzdERlbW9Db21wb25lbnQgfSxcclxuICAgICAgeyBwYXRoOiAndGFicycsIGNvbXBvbmVudDogVGFic0RlbW9Db21wb25lbnQsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICdzdW5ueS10YWInLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxyXG4gICAgICAgICAgeyBwYXRoOiAnc3VubnktdGFiJywgY29tcG9uZW50OiBTdW5ueVRhYkNvbnRlbnRDb21wb25lbnQgfSxcclxuICAgICAgICAgIHsgcGF0aDogJ3JhaW55LXRhYicsIGNvbXBvbmVudDogUmFpbnlUYWJDb250ZW50Q29tcG9uZW50IH0sXHJcbiAgICAgICAgICB7IHBhdGg6ICdmb2dneS10YWInLCBjb21wb25lbnQ6IEZvZ2d5VGFiQ29udGVudENvbXBvbmVudCB9LFxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAgeyBwYXRoOiAnYnV0dG9uLXRvZ2dsZScsIGNvbXBvbmVudDogQnV0dG9uVG9nZ2xlRGVtb0NvbXBvbmVudCB9LFxyXG4gICAgICB7IHBhdGg6ICdiYXNlbGluZScsIGNvbXBvbmVudDogQmFzZWxpbmVEZW1vQ29tcG9uZW50IH0sXHJcbiAgICAgIHsgcGF0aDogJ3JpcHBsZScsIGNvbXBvbmVudDogUmlwcGxlRGVtb0NvbXBvbmVudCB9LFxyXG4gICAgICB7IHBhdGg6ICdkaWFsb2cnLCBjb21wb25lbnQ6IERpYWxvZ0RlbW9Db21wb25lbnQgfSxcclxuICAgICAgeyBwYXRoOiAndG9vbHRpcCcsIGNvbXBvbmVudDogVG9vbHRpcERlbW9Db21wb25lbnQgfSxcclxuICAgICAgeyBwYXRoOiAndGFibGUnLCBjb21wb25lbnQ6IFRhYmxlRGVtb0NvbXBvbmVudCB9LFxyXG4gICAgXVxyXG4gIH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZW1vUm91dGluZyA6IE1vZHVsZVdpdGhQcm92aWRlcnMgPSBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoZGVtb1JvdXRlcyk7XHJcbiJdfQ==
