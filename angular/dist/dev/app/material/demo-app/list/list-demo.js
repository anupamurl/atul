"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ListDemoComponent = (function () {
    function ListDemoComponent() {
        this.items = [
            'Pepper',
            'Salt',
            'Paprika'
        ];
        this.contacts = [
            { name: 'Nancy', headline: 'Software engineer' },
            { name: 'Mary', headline: 'TPM' },
            { name: 'Bobby', headline: 'UX designer' }
        ];
        this.messages = [
            {
                from: 'Nancy',
                subject: 'Brunch?',
                message: 'Did you want to go on Sunday? I was thinking that might work.',
            },
            {
                from: 'Mary',
                subject: 'Summer BBQ',
                message: 'Wish I could come, but I have some prior obligations.',
            },
            {
                from: 'Bobby',
                subject: 'Oui oui',
                message: 'Do you have Paris reservations for the 15th? I just booked!',
            }
        ];
        this.links = [
            { name: 'Inbox' },
            { name: 'Outbox' },
            { name: 'Spam' },
            { name: 'Trash' }
        ];
        this.thirdLine = false;
        this.infoClicked = false;
    }
    ListDemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'list-demo',
            templateUrl: 'list-demo.html',
            styleUrls: ['list-demo.css'],
        })
    ], ListDemoComponent);
    return ListDemoComponent;
}());
exports.ListDemoComponent = ListDemoComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYXRlcmlhbC9kZW1vLWFwcC9saXN0L2xpc3QtZGVtby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUEwQztBQVExQztJQU5BO1FBT0UsVUFBSyxHQUFhO1lBQ2hCLFFBQVE7WUFDUixNQUFNO1lBQ04sU0FBUztTQUNWLENBQUM7UUFFRixhQUFRLEdBQVU7WUFDaEIsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxtQkFBbUIsRUFBQztZQUM5QyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBQztZQUMvQixFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBQztTQUN6QyxDQUFDO1FBRUYsYUFBUSxHQUFVO1lBQ2hCO2dCQUNFLElBQUksRUFBRSxPQUFPO2dCQUNiLE9BQU8sRUFBRSxTQUFTO2dCQUNsQixPQUFPLEVBQUUsK0RBQStEO2FBQ3pFO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLE1BQU07Z0JBQ1osT0FBTyxFQUFFLFlBQVk7Z0JBQ3JCLE9BQU8sRUFBRSx1REFBdUQ7YUFDakU7WUFDRDtnQkFDRSxJQUFJLEVBQUUsT0FBTztnQkFDYixPQUFPLEVBQUUsU0FBUztnQkFDbEIsT0FBTyxFQUFFLDZEQUE2RDthQUN2RTtTQUNGLENBQUM7UUFFRixVQUFLLEdBQVU7WUFDYixFQUFDLElBQUksRUFBRSxPQUFPLEVBQUM7WUFDZixFQUFDLElBQUksRUFBRSxRQUFRLEVBQUM7WUFDaEIsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDO1lBQ2QsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDO1NBRWhCLENBQUM7UUFFRixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGdCQUFXLEdBQVksS0FBSyxDQUFDO0lBQy9CLENBQUM7SUF6Q1ksaUJBQWlCO1FBTjdCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLGdCQUFnQjtZQUM3QixTQUFTLEVBQUUsQ0FBQyxlQUFlLENBQUM7U0FDN0IsQ0FBQztPQUNXLGlCQUFpQixDQXlDN0I7SUFBRCx3QkFBQztDQXpDRCxBQXlDQyxJQUFBO0FBekNZLDhDQUFpQiIsImZpbGUiOiJhcHAvbWF0ZXJpYWwvZGVtby1hcHAvbGlzdC9saXN0LWRlbW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdsaXN0LWRlbW8nLFxyXG4gIHRlbXBsYXRlVXJsOiAnbGlzdC1kZW1vLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydsaXN0LWRlbW8uY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaXN0RGVtb0NvbXBvbmVudCB7XHJcbiAgaXRlbXM6IHN0cmluZ1tdID0gW1xyXG4gICAgJ1BlcHBlcicsXHJcbiAgICAnU2FsdCcsXHJcbiAgICAnUGFwcmlrYSdcclxuICBdO1xyXG5cclxuICBjb250YWN0czogYW55W10gPSBbXHJcbiAgICB7bmFtZTogJ05hbmN5JywgaGVhZGxpbmU6ICdTb2Z0d2FyZSBlbmdpbmVlcid9LFxyXG4gICAge25hbWU6ICdNYXJ5JywgaGVhZGxpbmU6ICdUUE0nfSxcclxuICAgIHtuYW1lOiAnQm9iYnknLCBoZWFkbGluZTogJ1VYIGRlc2lnbmVyJ31cclxuICBdO1xyXG5cclxuICBtZXNzYWdlczogYW55W10gPSBbXHJcbiAgICB7XHJcbiAgICAgIGZyb206ICdOYW5jeScsXHJcbiAgICAgIHN1YmplY3Q6ICdCcnVuY2g/JyxcclxuICAgICAgbWVzc2FnZTogJ0RpZCB5b3Ugd2FudCB0byBnbyBvbiBTdW5kYXk/IEkgd2FzIHRoaW5raW5nIHRoYXQgbWlnaHQgd29yay4nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZnJvbTogJ01hcnknLFxyXG4gICAgICBzdWJqZWN0OiAnU3VtbWVyIEJCUScsXHJcbiAgICAgIG1lc3NhZ2U6ICdXaXNoIEkgY291bGQgY29tZSwgYnV0IEkgaGF2ZSBzb21lIHByaW9yIG9ibGlnYXRpb25zLicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBmcm9tOiAnQm9iYnknLFxyXG4gICAgICBzdWJqZWN0OiAnT3VpIG91aScsXHJcbiAgICAgIG1lc3NhZ2U6ICdEbyB5b3UgaGF2ZSBQYXJpcyByZXNlcnZhdGlvbnMgZm9yIHRoZSAxNXRoPyBJIGp1c3QgYm9va2VkIScsXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbiAgbGlua3M6IGFueVtdID0gW1xyXG4gICAge25hbWU6ICdJbmJveCd9LFxyXG4gICAge25hbWU6ICdPdXRib3gnfSxcclxuICAgIHtuYW1lOiAnU3BhbSd9LFxyXG4gICAge25hbWU6ICdUcmFzaCd9XHJcblxyXG4gIF07XHJcblxyXG4gIHRoaXJkTGluZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGluZm9DbGlja2VkOiBib29sZWFuID0gZmFsc2U7XHJcbn1cclxuIl19
