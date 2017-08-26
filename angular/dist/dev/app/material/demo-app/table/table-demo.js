"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var cdk_1 = require("@angular/cdk");
var material_1 = require("@angular/material");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var Observable_1 = require("rxjs/Observable");
var colors_1 = require("./colors");
var names_1 = require("./names");
require("rxjs/add/operator/startWith");
require("rxjs/add/observable/merge");
require("rxjs/add/observable/fromEvent");
require("rxjs/add/operator/map");
require("rxjs/add/operator/distinctUntilChanged");
require("rxjs/add/operator/debounceTime");
var TableDemoComponent = (function () {
    function TableDemoComponent() {
        this.displayedColumns = ['userId', 'userName', 'progress', 'color'];
        this.exampleDatabase = new ExampleDatabase();
        this.selection = new material_1.SelectionModel(true, []);
    }
    TableDemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
        Observable_1.Observable.fromEvent(this.filter.nativeElement, 'keyup')
            .debounceTime(150)
            .distinctUntilChanged()
            .subscribe(function () {
            if (!_this.dataSource) {
                return;
            }
            _this.dataSource.filter = _this.filter.nativeElement.value;
        });
    };
    TableDemoComponent.prototype.isAllSelected = function () {
        if (!this.dataSource) {
            return false;
        }
        if (this.selection.isEmpty()) {
            return false;
        }
        if (this.filter.nativeElement.value) {
            return this.selection.selected.length === this.dataSource.renderedData.length;
        }
        else {
            return this.selection.selected.length === this.exampleDatabase.data.length;
        }
    };
    TableDemoComponent.prototype.masterToggle = function () {
        var _this = this;
        if (!this.dataSource) {
            return;
        }
        if (this.isAllSelected()) {
            this.selection.clear();
        }
        else if (this.filter.nativeElement.value) {
            this.dataSource.renderedData.forEach(function (data) { return _this.selection.select(data.id); });
        }
        else {
            this.exampleDatabase.data.forEach(function (data) { return _this.selection.select(data.id); });
        }
    };
    __decorate([
        core_1.ViewChild(material_1.MdPaginator),
        __metadata("design:type", material_1.MdPaginator)
    ], TableDemoComponent.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild(material_1.MdSort),
        __metadata("design:type", material_1.MdSort)
    ], TableDemoComponent.prototype, "sort", void 0);
    __decorate([
        core_1.ViewChild('filter'),
        __metadata("design:type", core_1.ElementRef)
    ], TableDemoComponent.prototype, "filter", void 0);
    TableDemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'table-demo',
            templateUrl: 'table-demo.html',
            styleUrls: ['table-demo.css'],
        })
    ], TableDemoComponent);
    return TableDemoComponent;
}());
exports.TableDemoComponent = TableDemoComponent;
var ExampleDatabase = (function () {
    function ExampleDatabase() {
        this.dataChange = new BehaviorSubject_1.BehaviorSubject([]);
        for (var i = 0; i < 100; i++) {
            this.addUser();
        }
    }
    Object.defineProperty(ExampleDatabase.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    ExampleDatabase.prototype.addUser = function () {
        var copiedData = this.data.slice();
        copiedData.push(this.createNewUser());
        this.dataChange.next(copiedData);
    };
    ExampleDatabase.prototype.createNewUser = function () {
        var name = names_1.NAMES[Math.round(Math.random() * (names_1.NAMES.length - 1))] + ' ' +
            names_1.NAMES[Math.round(Math.random() * (names_1.NAMES.length - 1))].charAt(0) + '.';
        return {
            id: (this.data.length + 1).toString(),
            name: name,
            progress: Math.round(Math.random() * 100).toString(),
            color: colors_1.COLORS[Math.round(Math.random() * (colors_1.COLORS.length - 1))]
        };
    };
    return ExampleDatabase;
}());
exports.ExampleDatabase = ExampleDatabase;
var ExampleDataSource = (function (_super) {
    __extends(ExampleDataSource, _super);
    function ExampleDataSource(_exampleDatabase, _paginator, _sort) {
        var _this = _super.call(this) || this;
        _this._exampleDatabase = _exampleDatabase;
        _this._paginator = _paginator;
        _this._sort = _sort;
        _this._filterChange = new BehaviorSubject_1.BehaviorSubject('');
        _this.filteredData = [];
        _this.renderedData = [];
        _this._filterChange.subscribe(function () { return _this._paginator.pageIndex = 0; });
        return _this;
    }
    Object.defineProperty(ExampleDataSource.prototype, "filter", {
        get: function () { return this._filterChange.value; },
        set: function (filter) { this._filterChange.next(filter); },
        enumerable: true,
        configurable: true
    });
    ExampleDataSource.prototype.connect = function () {
        var _this = this;
        var displayDataChanges = [
            this._exampleDatabase.dataChange,
            this._sort.mdSortChange,
            this._filterChange,
            this._paginator.page,
        ];
        return Observable_1.Observable.merge.apply(Observable_1.Observable, displayDataChanges).map(function () {
            _this.filteredData = _this._exampleDatabase.data.slice().filter(function (item) {
                var searchStr = (item.name + item.color).toLowerCase();
                return searchStr.indexOf(_this.filter.toLowerCase()) !== -1;
            });
            var sortedData = _this.sortData(_this.filteredData.slice());
            var startIndex = _this._paginator.pageIndex * _this._paginator.pageSize;
            _this.renderedData = sortedData.splice(startIndex, _this._paginator.pageSize);
            return _this.renderedData;
        });
    };
    ExampleDataSource.prototype.disconnect = function () {
    };
    ExampleDataSource.prototype.sortData = function (data) {
        var _this = this;
        if (!this._sort.active || this._sort.direction === '') {
            return data;
        }
        return data.sort(function (a, b) {
            var propertyA = '';
            var propertyB = '';
            switch (_this._sort.active) {
                case 'userId':
                    _a = [a.id, b.id], propertyA = _a[0], propertyB = _a[1];
                    break;
                case 'userName':
                    _b = [a.name, b.name], propertyA = _b[0], propertyB = _b[1];
                    break;
                case 'progress':
                    _c = [a.progress, b.progress], propertyA = _c[0], propertyB = _c[1];
                    break;
                case 'color':
                    _d = [a.color, b.color], propertyA = _d[0], propertyB = _d[1];
                    break;
            }
            var valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            var valueB = isNaN(+propertyB) ? propertyB : +propertyB;
            return (valueA < valueB ? -1 : 1) * (_this._sort.direction === 'asc' ? 1 : -1);
            var _a, _b, _c, _d;
        });
    };
    return ExampleDataSource;
}(cdk_1.DataSource));
exports.ExampleDataSource = ExampleDataSource;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYXRlcmlhbC9kZW1vLWFwcC90YWJsZS90YWJsZS1kZW1vLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUF5RTtBQUN6RSxvQ0FBMEM7QUFDMUMsOENBQXdFO0FBQ3hFLHdEQUF1RDtBQUN2RCw4Q0FBNkM7QUFDN0MsbUNBQWtDO0FBQ2xDLGlDQUFnQztBQUNoQyx1Q0FBcUM7QUFDckMscUNBQW1DO0FBQ25DLHlDQUF1QztBQUN2QyxpQ0FBK0I7QUFDL0Isa0RBQWdEO0FBQ2hELDBDQUF3QztBQVF4QztJQU5BO1FBT0UscUJBQWdCLEdBQUcsQ0FBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNoRSxvQkFBZSxHQUFHLElBQUksZUFBZSxFQUFFLENBQUM7UUFDeEMsY0FBUyxHQUFHLElBQUkseUJBQWMsQ0FBUyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUF3Q25ELENBQUM7SUFqQ0MscUNBQVEsR0FBUjtRQUFBLGlCQVNDO1FBUkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekYsdUJBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDO2FBQ25ELFlBQVksQ0FBQyxHQUFHLENBQUM7YUFDakIsb0JBQW9CLEVBQUU7YUFDdEIsU0FBUyxDQUFDO1lBQ1QsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFBQyxNQUFNLENBQUM7WUFBQyxDQUFDO1lBQ2pDLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUMzRCxDQUFDLENBQUMs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UyxFQUFFLGlCQUFTLENBQWlCO29CQUFDLEtBQUssQ0FBQztnQkFDNUQsS0FBSyxVQUFVO29CQUFFLHFCQUF5QyxFQUF4QyxpQkFBUyxFQUFFLGlCQUFTLENBQXFCO29CQUFDLEtBQUssQ0FBQztnQkFDbEUsS0FBSyxVQUFVO29CQUFFLDZCQUFpRCxFQUFoRCxpQkFBUyxFQUFFLGlCQUFTLENBQTZCO29CQUFDLEtBQUssQ0FBQztnQkFDMUUsS0FBSyxPQUFPO29CQUFFLHVCQUEyQyxFQUExQyxpQkFBUyxFQUFFLGlCQUFTLENBQXVCO29CQUFDLEtBQUssQ0FBQztZQUNuRSxDQUFDO1lBRUQsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsU0FBUyxDQUFDO1lBQ3hELElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLFNBQVMsQ0FBQztZQUV4RCxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEtBQUssS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDOztRQUNoRixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCx3QkFBQztBQUFELENBcEVBLEFBb0VDLENBcEVzQyxnQkFBVSxHQW9FaEQ7QUFwRVksOENBQWlCIiwiZmlsZSI6ImFwcC9tYXRlcmlhbC9kZW1vLWFwcC90YWJsZS90YWJsZS1kZW1vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrJztcclxuaW1wb3J0IHsgTWRQYWdpbmF0b3IsIE1kU29ydCwgU2VsZWN0aW9uTW9kZWwgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMvQmVoYXZpb3JTdWJqZWN0JztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IENPTE9SUyB9IGZyb20gJy4vY29sb3JzJztcclxuaW1wb3J0IHsgTkFNRVMgfSBmcm9tICcuL25hbWVzJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9zdGFydFdpdGgnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvbWVyZ2UnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvZnJvbUV2ZW50JztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2Rpc3RpbmN0VW50aWxDaGFuZ2VkJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kZWJvdW5jZVRpbWUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ3RhYmxlLWRlbW8nLFxyXG4gIHRlbXBsYXRlVXJsOiAndGFibGUtZGVtby5odG1sJyxcclxuICBzdHlsZVVybHM6IFsndGFibGUtZGVtby5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYmxlRGVtb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgZGlzcGxheWVkQ29sdW1ucyA9IFsgJ3VzZXJJZCcsICd1c2VyTmFtZScsICdwcm9ncmVzcycsICdjb2xvciddO1xyXG4gIGV4YW1wbGVEYXRhYmFzZSA9IG5ldyBFeGFtcGxlRGF0YWJhc2UoKTtcclxuICBzZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uTW9kZWw8c3RyaW5nPih0cnVlLCBbXSk7XHJcbiAgZGF0YVNvdXJjZTogRXhhbXBsZURhdGFTb3VyY2UgfCBudWxsO1xyXG5cclxuICBAVmlld0NoaWxkKE1kUGFnaW5hdG9yKSBwYWdpbmF0b3I6IE1kUGFnaW5hdG9yO1xyXG4gIEBWaWV3Q2hpbGQoTWRTb3J0KSBzb3J0OiBNZFNvcnQ7XHJcbiAgQFZpZXdDaGlsZCgnZmlsdGVyJykgZmlsdGVyOiBFbGVtZW50UmVmO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBFeGFtcGxlRGF0YVNvdXJjZSh0aGlzLmV4YW1wbGVEYXRhYmFzZSwgdGhpcy5wYWdpbmF0b3IsIHRoaXMuc29ydCk7XHJcbiAgICBPYnNlcnZhYmxlLmZyb21FdmVudCh0aGlzLmZpbHRlci5uYXRpdmVFbGVtZW50LCAna2V5dXAnKVxyXG4gICAgICAgIC5kZWJvdW5jZVRpbWUoMTUwKVxyXG4gICAgICAgIC5kaXN0aW5jdFVudGlsQ2hhbmdlZCgpXHJcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoIXRoaXMuZGF0YVNvdXJjZSkgeyByZXR1cm47IH1cclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5maWx0ZXIgPSB0aGlzLmZpbHRlci5uYXRpdmVFbGVtZW50LnZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaXNBbGxTZWxlY3RlZCgpOiBib29sZWFuIHtcclxuICAgIGlmICghdGhpcy5kYXRhU291cmNlKSB7IHJldHVybiBmYWxzZTsgfVxyXG4gICAgaWYgKHRoaXMuc2VsZWN0aW9uLmlzRW1wdHkoKSkgeyByZXR1cm4gZmFsc2U7IH1cclxuXHJcbiAgICBpZiAodGhpcy5maWx0ZXIubmF0aXZlRWxlbWVudC52YWx1ZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWQubGVuZ3RoID09PSB0aGlzLmRhdGFTb3VyY2UucmVuZGVyZWREYXRhLmxlbmd0aDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZC5sZW5ndGggPT09IHRoaXMuZXhhbXBsZURhdGFiYXNlLmRhdGEubGVuZ3RoO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbWFzdGVyVG9nZ2xlKCkge1xyXG4gICAgaWYgKCF0aGlzLmRhdGFTb3VyY2UpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgaWYgKHRoaXMuaXNBbGxTZWxlY3RlZCgpKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0aW9uLmNsZWFyKCk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZmlsdGVyLm5hdGl2ZUVsZW1lbnQudmFsdWUpIHtcclxuICAgICAgdGhpcy5kYXRhU291cmNlLnJlbmRlcmVkRGF0YS5mb3JFYWNoKGRhdGEgPT4gdGhpcy5zZWxlY3Rpb24uc2VsZWN0KGRhdGEuaWQpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZXhhbXBsZURhdGFiYXNlLmRhdGEuZm9yRWFjaChkYXRhID0+IHRoaXMuc2VsZWN0aW9uLnNlbGVjdChkYXRhLmlkKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJEYXRhIHtcclxuICBpZDogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBwcm9ncmVzczogc3RyaW5nO1xyXG4gIGNvbG9yOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKiBBbiBleGFtcGxlIGRhdGFiYXNlIHRoYXQgdGhlIGRhdGEgc291cmNlIHVzZXMgdG8gcmV0cmlldmUgZGF0YSBmb3IgdGhlIHRhYmxlLiAqL1xyXG5leHBvcnQgY2xhc3MgRXhhbXBsZURhdGFiYXNlIHtcclxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgd2hlbmV2ZXIgdGhlIGRhdGEgaGFzIGJlZW4gbW9kaWZpZWQuICovXHJcbiAgZGF0YUNoYW5nZTogQmVoYXZpb3JTdWJqZWN0PFVzZXJEYXRhW10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxVc2VyRGF0YVtdPihbXSk7XHJcbiAgZ2V0IGRhdGEoKTogVXNlckRhdGFbXSB7IHJldHVybiB0aGlzLmRhdGFDaGFuZ2UudmFsdWU7IH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyBGaWxsIHVwIHRoZSBkYXRhYmFzZSB3aXRoIDEwMCB1c2Vycy5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHsgdGhpcy5hZGRVc2VyKCk7IH1cclxuICB9XHJcblxyXG4gIC8qKiBBZGRzIGEgbmV3IHVzZXIgdG8gdGhlIGRhdGFiYXNlLiAqL1xyXG4gIGFkZFVzZXIoKSB7XHJcbiAgICBjb25zdCBjb3BpZWREYXRhID0gdGhpcy5kYXRhLnNsaWNlKCk7XHJcbiAgICBjb3BpZWREYXRhLnB1c2godGhpcy5jcmVhdGVOZXdVc2VyKCkpO1xyXG4gICAgdGhpcy5kYXRhQ2hhbmdlLm5leHQoY29waWVkRGF0YSk7XHJcbiAgfVxyXG5cclxuICAvKiogQnVpbGRzIGFuZCByZXR1cm5zIGEgbmV3IFVzZXIuICovXHJcbiAgcHJpdmF0ZSBjcmVhdGVOZXdVc2VyKCkge1xyXG4gICAgY29uc3QgbmFtZSA9XHJcbiAgICAgICAgTkFNRVNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKE5BTUVTLmxlbmd0aCAtIDEpKV0gKyAnICcgK1xyXG4gICAgICAgIE5BTUVTW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChOQU1FUy5sZW5ndGggLSAxKSldLmNoYXJBdCgwKSArICcuJztcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpZDogKHRoaXMuZGF0YS5sZW5ndGggKyAxKS50b1N0cmluZygpLFxyXG4gICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICBwcm9ncmVzczogTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwKS50b1N0cmluZygpLFxyXG4gICAgICBjb2xvcjogQ09MT1JTW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChDT0xPUlMubGVuZ3RoIC0gMSkpXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEYXRhIHNvdXJjZSB0byBwcm92aWRlIHdoYXQgZGF0YSBzaG91bGQgYmUgcmVuZGVyZWQgaW4gdGhlIHRhYmxlLiBOb3RlIHRoYXQgdGhlIGRhdGEgc291cmNlXHJcbiAqIGNhbiByZXRyaWV2ZSBpdHMgZGF0YSBpbiBhbnkgd2F5LiBJbiB0aGlzIGNhc2UsIHRoZSBkYXRhIHNvdXJjZSBpcyBwcm92aWRlZCBhIHJlZmVyZW5jZVxyXG4gKiB0byBhIGNvbW1vbiBkYXRhIGJhc2UsIEV4YW1wbGVEYXRhYmFzZS4gSXQgaXMgbm90IHRoZSBkYXRhIHNvdXJjZSdzIHJlc3BvbnNpYmlsaXR5IHRvIG1hbmFnZVxyXG4gKiB0aGUgdW5kZXJseWluZyBkYXRhLiBJbnN0ZWFkLCBpdCBvbmx5IG5lZWRzIHRvIHRha2UgdGhlIGRhdGEgYW5kIHNlbmQgdGhlIHRhYmxlIGV4YWN0bHkgd2hhdFxyXG4gKiBzaG91bGQgYmUgcmVuZGVyZWQuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRXhhbXBsZURhdGFTb3VyY2UgZXh0ZW5kcyBEYXRhU291cmNlPGFueT4ge1xyXG4gIF9maWx0ZXJDaGFuZ2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KCcnKTtcclxuICBnZXQgZmlsdGVyKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9maWx0ZXJDaGFuZ2UudmFsdWU7IH1cclxuICBzZXQgZmlsdGVyKGZpbHRlcjogc3RyaW5nKSB7IHRoaXMuX2ZpbHRlckNoYW5nZS5uZXh0KGZpbHRlcik7IH1cclxuXHJcbiAgZmlsdGVyZWREYXRhOiBVc2VyRGF0YVtdID0gW107XHJcbiAgcmVuZGVyZWREYXRhOiBVc2VyRGF0YVtdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2V4YW1wbGVEYXRhYmFzZTogRXhhbXBsZURhdGFiYXNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX3BhZ2luYXRvcjogTWRQYWdpbmF0b3IsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfc29ydDogTWRTb3J0KSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuX2ZpbHRlckNoYW5nZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fcGFnaW5hdG9yLnBhZ2VJbmRleCA9IDApO1xyXG4gIH1cclxuXHJcbiAgLyoqIENvbm5lY3QgZnVuY3Rpb24gY2FsbGVkIGJ5IHRoZSB0YWJsZSB0byByZXRyaWV2ZSBvbmUgc3RyZWFtIGNvbnRhaW5pbmcgdGhlIGRhdGEgdG8gcmVuZGVyLiAqL1xyXG4gIGNvbm5lY3QoKTogT2JzZXJ2YWJsZTxVc2VyRGF0YVtdPiB7XHJcbiAgICAvLyBMaXN0ZW4gZm9yIGFueSBjaGFuZ2VzIGluIHRoZSBiYXNlIGRhdGEsIHNvcnRpbmcsIGZpbHRlcmluZywgb3IgcGFnaW5hdGlvblxyXG4gICAgY29uc3QgZGlzcGxheURhdGFDaGFuZ2VzID0gW1xyXG4gICAgICB0aGlzLl9leGFtcGxlRGF0YWJhc2UuZGF0YUNoYW5nZSxcclxuICAgICAgdGhpcy5fc29ydC5tZFNvcnRDaGFuZ2UsXHJcbiAgICAgIHRoaXMuX2ZpbHRlckNoYW5nZSxcclxuICAgICAgdGhpcy5fcGFnaW5hdG9yLnBhZ2UsXHJcbiAgICBdO1xyXG5cclxuICAgIHJldHVybiBPYnNlcnZhYmxlLm1lcmdlKC4uLmRpc3BsYXlEYXRhQ2hhbmdlcykubWFwKCgpID0+IHtcclxuICAgICAgLy8gRmlsdGVyIGRhdGFcclxuICAgICAgdGhpcy5maWx0ZXJlZERhdGEgPSB0aGlzLl9leGFtcGxlRGF0YWJhc2UuZGF0YS5zbGljZSgpLmZpbHRlcigoaXRlbTogVXNlckRhdGEpID0+IHtcclxuICAgICAgICBsZXQgc2VhcmNoU3RyID0gKGl0ZW0ubmFtZSArIGl0ZW0uY29sb3IpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgcmV0dXJuIHNlYXJjaFN0ci5pbmRleE9mKHRoaXMuZmlsdGVyLnRvTG93ZXJDYXNlKCkpICE9PSAtMTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBTb3J0IGZpbHRlcmVkIGRhdGFcclxuICAgICAgY29uc3Qgc29ydGVkRGF0YSA9IHRoaXMuc29ydERhdGEodGhpcy5maWx0ZXJlZERhdGEuc2xpY2UoKSk7XHJcblxyXG4gICAgICAvLyBHcmFiIHRoZSBwYWdlJ3Mgc2xpY2Ugb2YgdGhlIGZpbHRlcmVkIHNvcnRlZCBkYXRhLlxyXG4gICAgICBjb25zdCBzdGFydEluZGV4ID0gdGhpcy5fcGFnaW5hdG9yLnBhZ2VJbmRleCAqIHRoaXMuX3BhZ2luYXRvci5wYWdlU2l6ZTtcclxuICAgICAgdGhpcy5yZW5kZXJlZERhdGEgPSBzb3J0ZWREYXRhLnNwbGljZShzdGFydEluZGV4LCB0aGlzLl9wYWdpbmF0b3IucGFnZVNpemUpO1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJlZERhdGE7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRpc2Nvbm5lY3QoKSB7XHJcbiAgICAvL1xyXG4gIH1cclxuXHJcbiAgLyoqIFJldHVybnMgYSBzb3J0ZWQgY29weSBvZiB0aGUgZGF0YWJhc2UgZGF0YS4gKi9cclxuICBzb3J0RGF0YShkYXRhOiBVc2VyRGF0YVtdKTogVXNlckRhdGFbXSB7XHJcbiAgICBpZiAoIXRoaXMuX3NvcnQuYWN0aXZlIHx8IHRoaXMuX3NvcnQuZGlyZWN0aW9uID09PSAnJykgeyByZXR1cm4gZGF0YTsgfVxyXG5cclxuICAgIHJldHVybiBkYXRhLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgbGV0IHByb3BlcnR5QTogbnVtYmVyfHN0cmluZyA9ICcnO1xyXG4gICAgICBsZXQgcHJvcGVydHlCOiBudW1iZXJ8c3RyaW5nID0gJyc7XHJcblxyXG4gICAgICBzd2l0Y2ggKHRoaXMuX3NvcnQuYWN0aXZlKSB7XHJcbiAgICAgICAgY2FzZSAndXNlcklkJzogW3Byb3BlcnR5QSwgcHJvcGVydHlCXSA9IFthLmlkLCBiLmlkXTsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAndXNlck5hbWUnOiBbcHJvcGVydHlBLCBwcm9wZXJ0eUJdID0gW2EubmFtZSwgYi5uYW1lXTsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAncHJvZ3Jlc3MnOiBbcHJvcGVydHlBLCBwcm9wZXJ0eUJdID0gW2EucHJvZ3Jlc3MsIGIucHJvZ3Jlc3NdOyBicmVhaztcclxuICAgICAgICBjYXNlICdjb2xvcic6IFtwcm9wZXJ0eUEsIHByb3BlcnR5Ql0gPSBbYS5jb2xvciwgYi5jb2xvcl07IGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgdmFsdWVBID0gaXNOYU4oK3Byb3BlcnR5QSkgPyBwcm9wZXJ0eUEgOiArcHJvcGVydHlBO1xyXG4gICAgICBsZXQgdmFsdWVCID0gaXNOYU4oK3Byb3BlcnR5QikgPyBwcm9wZXJ0eUIgOiArcHJvcGVydHlCO1xyXG5cclxuICAgICAgcmV0dXJuICh2YWx1ZUEgPCB2YWx1ZUIgPyAtMSA6IDEpICogKHRoaXMuX3NvcnQuZGlyZWN0aW9uID09PSAnYXNjJyA/IDEgOiAtMSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19
