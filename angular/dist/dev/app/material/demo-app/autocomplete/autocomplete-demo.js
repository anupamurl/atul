"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
require("rxjs/add/operator/startWith");
var AutocompleteDemoComponent = (function () {
    function AutocompleteDemoComponent() {
        var _this = this;
        this.currentState = '';
        this.topHeightCtrl = new forms_1.FormControl(0);
        this.tdDisabled = false;
        this.states = [
            { code: 'AL', name: 'Alabama' },
            { code: 'AK', name: 'Alaska' },
            { code: 'AZ', name: 'Arizona' },
            { code: 'AR', name: 'Arkansas' },
            { code: 'CA', name: 'California' },
            { code: 'CO', name: 'Colorado' },
            { code: 'CT', name: 'Connecticut' },
            { code: 'DE', name: 'Delaware' },
            { code: 'FL', name: 'Florida' },
            { code: 'GA', name: 'Georgia' },
            { code: 'HI', name: 'Hawaii' },
            { code: 'ID', name: 'Idaho' },
            { code: 'IL', name: 'Illinois' },
            { code: 'IN', name: 'Indiana' },
            { code: 'IA', name: 'Iowa' },
            { code: 'KS', name: 'Kansas' },
            { code: 'KY', name: 'Kentucky' },
            { code: 'LA', name: 'Louisiana' },
            { code: 'ME', name: 'Maine' },
            { code: 'MD', name: 'Maryland' },
            { code: 'MA', name: 'Massachusetts' },
            { code: 'MI', name: 'Michigan' },
            { code: 'MN', name: 'Minnesota' },
            { code: 'MS', name: 'Mississippi' },
            { code: 'MO', name: 'Missouri' },
            { code: 'MT', name: 'Montana' },
            { code: 'NE', name: 'Nebraska' },
            { code: 'NV', name: 'Nevada' },
            { code: 'NH', name: 'New Hampshire' },
            { code: 'NJ', name: 'New Jersey' },
            { code: 'NM', name: 'New Mexico' },
            { code: 'NY', name: 'New York' },
            { code: 'NC', name: 'North Carolina' },
            { code: 'ND', name: 'North Dakota' },
            { code: 'OH', name: 'Ohio' },
            { code: 'OK', name: 'Oklahoma' },
            { code: 'OR', name: 'Oregon' },
            { code: 'PA', name: 'Pennsylvania' },
            { code: 'RI', name: 'Rhode Island' },
            { code: 'SC', name: 'South Carolina' },
            { code: 'SD', name: 'South Dakota' },
            { code: 'TN', name: 'Tennessee' },
            { code: 'TX', name: 'Texas' },
            { code: 'UT', name: 'Utah' },
            { code: 'VT', name: 'Vermont' },
            { code: 'VA', name: 'Virginia' },
            { code: 'WA', name: 'Washington' },
            { code: 'WV', name: 'West Virginia' },
            { code: 'WI', name: 'Wisconsin' },
            { code: 'WY', name: 'Wyoming' },
        ];
        this.tdStates = this.states;
        this.stateCtrl = new forms_1.FormControl({ code: 'CA', name: 'California' });
        this.reactiveStates = this.stateCtrl.valueChanges
            .startWith(this.stateCtrl.value)
            .map(function (val) { return _this.displayFn(val); })
            .map(function (name) { return _this.filterStates(name); });
    }
    AutocompleteDemoComponent.prototype.displayFn = function (value) {
        return value && typeof value === 'object' ? value.name : value;
    };
    AutocompleteDemoComponent.prototype.filterStates = function (val) {
        return val ? this.states.filter(function (s) { return new RegExp("^" + val, 'gi').test(s.name); })
            : this.states;
    };
    __decorate([
        core_1.ViewChild(forms_1.NgModel),
        __metadata("design:type", forms_1.NgModel)
    ], AutocompleteDemoComponent.prototype, "modelDir", void 0);
    __decorate([
        core_1.ViewChild('reactiveAuto'),
        __metadata("design:type", Object)
    ], AutocompleteDemoComponent.prototype, "reactiveAuto", void 0);
    __decorate([
        core_1.ViewChild('tdAuto'),
        __metadata("design:type", Object)
    ], AutocompleteDemoComponent.prototype, "tdAuto", void 0);
    AutocompleteDemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'autocomplete-demo',
            templateUrl: 'autocomplete-demo.html',
            styleUrls: ['autocomplete-demo.css'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], AutocompleteDemoComponent);
    return AutocompleteDemoComponent;
}());
exports.AutocompleteDemoComponent = AutocompleteDemoComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYXRlcmlhbC9kZW1vLWFwcC9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLWRlbW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBd0U7QUFDeEUsd0NBQXNEO0FBQ3RELHVDQUFxQztBQVNyQztJQW1FRTtRQUFBLGlCQU9DO1FBeEVELGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLGtCQUFhLEdBQUcsSUFBSSxtQkFBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBS25DLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFNbkIsV0FBTSxHQUFHO1lBQ1AsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUM7WUFDN0IsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUM7WUFDNUIsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUM7WUFDN0IsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUM7WUFDOUIsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUM7WUFDaEMsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUM7WUFDOUIsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUM7WUFDakMsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUM7WUFDOUIsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUM7WUFDN0IsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUM7WUFDN0IsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUM7WUFDNUIsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUM7WUFDM0IsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUM7WUFDOUIsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUM7WUFDN0IsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUM7WUFDMUIsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUM7WUFDNUIsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUM7WUFDOUIsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUM7WUFDL0IsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUM7WUFDM0IsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUM7WUFDOUIsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUM7WUFDbkMsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUM7WUFDOUIsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUM7WUFDL0IsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUM7WUFDakMsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUM7WUFDOUIsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUM7WUFDN0IsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUM7WUFDOUIsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUM7WUFDNUIsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUM7WUFDbkMsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUM7WUFDaEMsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUM7WUFDaEMsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUM7WUFDOUIsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBQztZQUNwQyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBQztZQUNsQyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBQztZQUMxQixFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBQztZQUM5QixFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztZQUM1QixFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBQztZQUNsQyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBQztZQUNsQyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFDO1lBQ3BDLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFDO1lBQ2xDLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFDO1lBQy9CLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFDO1lBQzNCLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFDO1lBQzFCLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFDO1lBQzdCLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFDO1lBQzlCLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFDO1lBQ2hDLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFDO1lBQ25DLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFDO1lBQy9CLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFDO1NBQzlCLENBQUM7UUFHQSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLG1CQUFXLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUMsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZO2FBQzVDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQzthQUMvQixHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFuQixDQUFtQixDQUFDO2FBQy9CLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQXZCLENBQXVCLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsNkNBQVMsR0FBVCxVQUFVLEtBQVU7UUFDbEIsTUFBTSxDQUFDLEtBQUssSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEdBQUcsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDakUsQ0FBQztJQUVELGdEQUFZLEdBQVosVUFBYSxHQUFXO1FBQ3RCLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxJQUFJLE1BQU0sQ0FBQyxNQUFJLEdBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUF4QyxDQUF3QyxDQUFDO2NBQ2pFLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDM0IsQ0FBQztJQXpFbUI7UUFBbkIsZ0JBQVMsQ0FBQyxlQUFPLENBQUM7a0NBQVcsZUFBTzsrREFBQztJQUNYO1FBQTFCLGdCQUFTLENBQUMsY0FBYyxDQUFDOzttRUFBbUI7SUFDeEI7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7OzZEQUFhO0lBWnRCLHlCQUF5QjtRQVByQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztZQUNwQyxhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtTQUN0QyxDQUFDOztPQUNXLHlCQUF5QixDQXFGckM7SUFBRCxnQ0FBQztDQXJGRCxBQXFGQyxJQUFBO0FBckZZLDhEQUF5QiIsImZpbGUiOiJhcHAvbWF0ZXJpYWwvZGVtby1hcHAvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS1kZW1vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBOZ01vZGVsIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3N0YXJ0V2l0aCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnYXV0b2NvbXBsZXRlLWRlbW8nLFxyXG4gIHRlbXBsYXRlVXJsOiAnYXV0b2NvbXBsZXRlLWRlbW8uaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ2F1dG9jb21wbGV0ZS1kZW1vLmNzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIEF1dG9jb21wbGV0ZURlbW9Db21wb25lbnQge1xyXG4gIHN0YXRlQ3RybDogRm9ybUNvbnRyb2w7XHJcbiAgY3VycmVudFN0YXRlID0gJyc7XHJcbiAgdG9wSGVpZ2h0Q3RybCA9IG5ldyBGb3JtQ29udHJvbCgwKTtcclxuXHJcbiAgcmVhY3RpdmVTdGF0ZXM6IGFueTtcclxuICB0ZFN0YXRlczogYW55W107XHJcblxyXG4gIHRkRGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgQFZpZXdDaGlsZChOZ01vZGVsKSBtb2RlbERpcjogTmdNb2RlbDtcclxuICBAVmlld0NoaWxkKCdyZWFjdGl2ZUF1dG8nKSByZWFjdGl2ZUF1dG8gOmFueTtcclxuICBAVmlld0NoaWxkKCd0ZEF1dG8nKSB0ZEF1dG8gOmFueTtcclxuXHJcbiAgc3RhdGVzID0gW1xyXG4gICAge2NvZGU6ICdBTCcsIG5hbWU6ICdBbGFiYW1hJ30sXHJcbiAgICB7Y29kZTogJ0FLJywgbmFtZTogJ0FsYXNrYSd9LFxyXG4gICAge2NvZGU6ICdBWicsIG5hbWU6ICdBcml6b25hJ30sXHJcbiAgICB7Y29kZTogJ0FSJywgbmFtZTogJ0Fya2Fuc2FzJ30sXHJcbiAgICB7Y29kZTogJ0NBJywgbmFtZTogJ0NhbGlmb3JuaWEnfSxcclxuICAgIHtjb2RlOiAnQ08nLCBuYW1lOiAnQ29sb3JhZG8nfSxcclxuICAgIHtjb2RlOiAnQ1QnLCBuYW1lOiAnQ29ubmVjdGljdXQnfSxcclxuICAgIHtjb2RlOiAnREUnLCBuYW1lOiAnRGVsYXdhcmUnfSxcclxuICAgIHtjb2RlOiAnRkwnLCBuYW1lOiAnRmxvcmlkYSd9LFxyXG4gICAge2NvZGU6ICdHQScsIG5hbWU6ICdHZW9yZ2lhJ30sXHJcbiAgICB7Y29kZTogJ0hJJywgbmFtZTogJ0hhd2FpaSd9LFxyXG4gICAge2NvZGU6ICdJRCcsIG5hbWU6ICdJZGFobyd9LFxyXG4gICAge2NvZGU6ICdJTCcsIG5hbWU6ICdJbGxpbm9pcyd9LFxyXG4gICAge2NvZGU6ICdJTicsIG5hbWU6ICdJbmRpYW5hJ30sXHJcbiAgICB7Y29kZTogJ0lBJywgbmFtZTogJ0lvd2EnfSxcclxuICAgIHtjb2RlOiAnS1MnLCBuYW1lOiAnS2Fuc2FzJ30sXHJcbiAgICB7Y29kZTogJ0tZJywgbmFtZTogJ0tlbnR1Y2t5J30sXHJcbiAgICB7Y29kZTogJ0xBJywgbmFtZTogJ0xvdWlzaWFuYSd9LFxyXG4gICAge2NvZGU6ICdNRScsIG5hbWU6ICdNYWluZSd9LFxyXG4gICAge2NvZGU6ICdNRCcsIG5hbWU6ICdNYXJ5bGFuZCd9LFxyXG4gICAge2NvZGU6ICdNQScsIG5hbWU6ICdNYXNzYWNodXNldHRzJ30sXHJcbiAgICB7Y29kZTogJ01JJywgbmFtZTogJ01pY2hpZ2FuJ30sXHJcbiAgICB7Y29kZTogJ01OJywgbmFtZTogJ01pbm5lc290YSd9LFxyXG4gICAge2NvZGU6ICdNUycsIG5hbWU6ICdNaXNzaXNzaXBwaSd9LFxyXG4gICAge2NvZGU6ICdNTycsIG5hbWU6ICdNaXNzb3VyaSd9LFxyXG4gICAge2NvZGU6ICdNVCcsIG5hbWU6ICdNb250YW5hJ30sXHJcbiAgICB7Y29kZTogJ05FJywgbmFtZTogJ05lYnJhc2thJ30sXHJcbiAgICB7Y29kZTogJ05WJywgbmFtZTogJ05ldmFkYSd9LFxyXG4gICAge2NvZGU6ICdOSCcsIG5hbWU6ICdOZXcgSGFtcHNoaXJlJ30sXHJcbiAgICB7Y29kZTogJ05KJywgbmFtZTogJ05ldyBKZXJzZXknfSxcclxuICAgIHtjb2RlOiAnTk0nLCBuYW1lOiAnTmV3IE1leGljbyd9LFxyXG4gICAge2NvZGU6ICdOWScsIG5hbWU6ICdOZXcgWW9yayd9LFxyXG4gICAge2NvZGU6ICdOQycsIG5hbWU6ICdOb3J0aCBDYXJvbGluYSd9LFxyXG4gICAge2NvZGU6ICdORCcsIG5hbWU6ICdOb3J0aCBEYWtvdGEnfSxcclxuICAgIHtjb2RlOiAnT0gnLCBuYW1lOiAnT2hpbyd9LFxyXG4gICAge2NvZGU6ICdPSycsIG5hbWU6ICdPa2xhaG9tYSd9LFxyXG4gICAge2NvZGU6ICdPUicsIG5hbWU6ICdPcmVnb24nfSxcclxuICAgIHtjb2RlOiAnUEEnLCBuYW1lOiAnUGVubnN5bHZhbmlhJ30sXHJcbiAgICB7Y29kZTogJ1JJJywgbmFtZTogJ1Job2RlIElzbGFuZCd9LFxyXG4gICAge2NvZGU6ICdTQycsIG5hbWU6ICdTb3V0aCBDYXJvbGluYSd9LFxyXG4gICAge2NvZGU6ICdTRCcsIG5hbWU6ICdTb3V0aCBEYWtvdGEnfSxcclxuICAgIHtjb2RlOiAnVE4nLCBuYW1lOiAnVGVubmVzc2VlJ30sXHJcbiAgICB7Y29kZTogJ1RYJywgbmFtZTogJ1RleGFzJ30sXHJcbiAgICB7Y29kZTogJ1VUJywgbmFtZTogJ1V0YWgnfSxcclxuICAgIHtjb2RlOiAnVlQnLCBuYW1lOiAnVmVybW9udCd9LFxyXG4gICAge2NvZGU6ICdWQScsIG5hbWU6ICdWaXJnaW5pYSd9LFxyXG4gICAge2NvZGU6ICdXQScsIG5hbWU6ICdXYXNoaW5ndG9uJ30sXHJcbiAgICB7Y29kZTogJ1dWJywgbmFtZTogJ1dlc3QgVmlyZ2luaWEnfSxcclxuICAgIHtjb2RlOiAnV0knLCBuYW1lOiAnV2lzY29uc2luJ30sXHJcbiAgICB7Y29kZTogJ1dZJywgbmFtZTogJ1d5b21pbmcnfSxcclxuICBdO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMudGRTdGF0ZXMgPSB0aGlzLnN0YXRlcztcclxuICAgIHRoaXMuc3RhdGVDdHJsID0gbmV3IEZvcm1Db250cm9sKHtjb2RlOiAnQ0EnLCBuYW1lOiAnQ2FsaWZvcm5pYSd9KTtcclxuICAgIHRoaXMucmVhY3RpdmVTdGF0ZXMgPSB0aGlzLnN0YXRlQ3RybC52YWx1ZUNoYW5nZXNcclxuICAgICAgICAuc3RhcnRXaXRoKHRoaXMuc3RhdGVDdHJsLnZhbHVlKVxyXG4gICAgICAgIC5tYXAodmFsID0+IHRoaXMuZGlzcGxheUZuKHZhbCkpXHJcbiAgICAgICAgLm1hcChuYW1lID0+IHRoaXMuZmlsdGVyU3RhdGVzKG5hbWUpKTtcclxuICB9XHJcblxyXG4gIGRpc3BsYXlGbih2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnID8gdmFsdWUubmFtZSA6IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZmlsdGVyU3RhdGVzKHZhbDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdmFsID8gdGhpcy5zdGF0ZXMuZmlsdGVyKHMgPT4gbmV3IFJlZ0V4cChgXiR7dmFsfWAsICdnaScpLnRlc3Qocy5uYW1lKSlcclxuICAgICAgICAgICAgICAgOiB0aGlzLnN0YXRlcztcclxuICB9XHJcblxyXG59XHJcbiJdfQ==
