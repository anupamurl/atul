"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var GridListDemoComponent = (function () {
    function GridListDemoComponent() {
        this.tiles = [
            { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
            { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
        ];
        this.dogs = [
            { name: 'Porter', human: 'Kara' },
            { name: 'Mal', human: 'Jeremy' },
            { name: 'Koby', human: 'Igor' },
            { name: 'Razzle', human: 'Ward' },
            { name: 'Molly', human: 'Rob' },
            { name: 'Husi', human: 'Matias' },
        ];
        this.basicRowHeight = 80;
        this.fixedCols = 4;
        this.fixedRowHeight = 100;
        this.ratioGutter = 1;
        this.fitListHeight = '400px';
        this.ratio = '4:1';
    }
    GridListDemoComponent.prototype.addTileCols = function () { this.tiles[2].cols++; };
    GridListDemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'grid-list-demo',
            templateUrl: 'grid-list-demo.html',
            styleUrls: ['grid-list-demo.css'],
            providers: [material_1.MdIconRegistry]
        })
    ], GridListDemoComponent);
    return GridListDemoComponent;
}());
exports.GridListDemoComponent = GridListDemoComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYXRlcmlhbC9kZW1vLWFwcC9ncmlkLWxpc3QvZ3JpZC1saXN0LWRlbW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBMEM7QUFDMUMsOENBQW1EO0FBU25EO0lBUEE7UUFRRSxVQUFLLEdBQVU7WUFDYixFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUM7WUFDbkQsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFDO1lBQ3BELEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBQztZQUNyRCxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUM7U0FDbkQsQ0FBQztRQUVGLFNBQUksR0FBYTtZQUNmLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO1lBQ2pDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFO1lBQ2hDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO1lBQy9CLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO1lBQ2pDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO1lBQy9CLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFO1NBQ2xDLENBQUM7UUFFRixtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNwQixjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsbUJBQWMsR0FBRyxHQUFHLENBQUM7UUFDckIsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFDaEIsa0JBQWEsR0FBRyxPQUFPLENBQUM7UUFDeEIsVUFBSyxHQUFHLEtBQUssQ0FBQztJQUdoQixDQUFDO0lBREMsMkNBQVcsR0FBWCxjQUFnQixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQXhCNUIscUJBQXFCO1FBUGpDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUscUJBQXFCO1lBQ2xDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO1lBQ2pDLFNBQVMsRUFBRSxDQUFDLHlCQUFjLENBQUM7U0FDNUIsQ0FBQztPQUNXLHFCQUFxQixDQXlCakM7SUFBRCw0QkFBQztDQXpCRCxBQXlCQyxJQUFBO0FBekJZLHNEQUFxQiIsImZpbGUiOiJhcHAvbWF0ZXJpYWwvZGVtby1hcHAvZ3JpZC1saXN0L2dyaWQtbGlzdC1kZW1vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1kSWNvblJlZ2lzdHJ5IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ2dyaWQtbGlzdC1kZW1vJyxcclxuICB0ZW1wbGF0ZVVybDogJ2dyaWQtbGlzdC1kZW1vLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydncmlkLWxpc3QtZGVtby5jc3MnXSxcclxuICBwcm92aWRlcnM6IFtNZEljb25SZWdpc3RyeV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEdyaWRMaXN0RGVtb0NvbXBvbmVudCB7XHJcbiAgdGlsZXM6IGFueVtdID0gW1xyXG4gICAge3RleHQ6ICdPbmUnLCBjb2xzOiAzLCByb3dzOiAxLCBjb2xvcjogJ2xpZ2h0Ymx1ZSd9LFxyXG4gICAge3RleHQ6ICdUd28nLCBjb2xzOiAxLCByb3dzOiAyLCBjb2xvcjogJ2xpZ2h0Z3JlZW4nfSxcclxuICAgIHt0ZXh0OiAnVGhyZWUnLCBjb2xzOiAxLCByb3dzOiAxLCBjb2xvcjogJ2xpZ2h0cGluayd9LFxyXG4gICAge3RleHQ6ICdGb3VyJywgY29sczogMiwgcm93czogMSwgY29sb3I6ICcjRERCREYxJ30sXHJcbiAgXTtcclxuXHJcbiAgZG9nczogT2JqZWN0W10gPSBbXHJcbiAgICB7IG5hbWU6ICdQb3J0ZXInLCBodW1hbjogJ0thcmEnIH0sXHJcbiAgICB7IG5hbWU6ICdNYWwnLCBodW1hbjogJ0plcmVteScgfSxcclxuICAgIHsgbmFtZTogJ0tvYnknLCBodW1hbjogJ0lnb3InIH0sXHJcbiAgICB7IG5hbWU6ICdSYXp6bGUnLCBodW1hbjogJ1dhcmQnIH0sXHJcbiAgICB7IG5hbWU6ICdNb2xseScsIGh1bWFuOiAnUm9iJyB9LFxyXG4gICAgeyBuYW1lOiAnSHVzaScsIGh1bWFuOiAnTWF0aWFzJyB9LFxyXG4gIF07XHJcblxyXG4gIGJhc2ljUm93SGVpZ2h0ID0gODA7XHJcbiAgZml4ZWRDb2xzID0gNDtcclxuICBmaXhlZFJvd0hlaWdodCA9IDEwMDtcclxuICByYXRpb0d1dHRlciA9IDE7XHJcbiAgZml0TGlzdEhlaWdodCA9ICc0MDBweCc7XHJcbiAgcmF0aW8gPSAnNDoxJztcclxuXHJcbiAgYWRkVGlsZUNvbHMoKSB7IHRoaXMudGlsZXNbMl0uY29scysrOyB9XHJcbn1cclxuIl19
