import {
  AfterContentInit,
  Component,
  ContentChild,
  ContentChildren, EventEmitter,
  Input,
  OnInit, Output,
  QueryList,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {CoreTableConfig} from '../../modules/interfaces/common';
import {MatPaginator} from "@angular/material/paginator";
import { MatSort } from '@angular/material/sort';
import {MatColumnDef, MatTable, MatTableDataSource} from "@angular/material/table";
import {ReplaySubject} from "rxjs";

@Component({
  selector: 'app-core-table',
  templateUrl: './core-table.component.html',
  styleUrls: ['./core-table.component.scss']
})
export class CoreTableComponent implements OnInit, AfterContentInit {

  @Input() config: CoreTableConfig;

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  @ContentChild(MatSort, {static: true})
  sort: MatSort;

  @Input()
  displayedColumns: string[];

  displayedExpandable = [];

  @Input()
  rowTemplate: TemplateRef<any>;

  @ViewChild(MatTable, { static: true })
  table: MatTable<any>;

  @ContentChildren(MatColumnDef)
  columnDefs: QueryList<MatColumnDef>;

  expandedElement: any = null;

  matDataSource = new ReplaySubject<MatTableDataSource<any>>();

  @Input()
  set dataSource(dataSource: any[]) {
    if (dataSource) {
      const matDataSource = new MatTableDataSource(dataSource);
      matDataSource.paginator = this.paginator;
      matDataSource.sort = this.sort;
      this.matDataSource.next(matDataSource);
    }
  }

  @Output() createEventClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.columnDefs.forEach(columnDef => this.table.addColumnDef(columnDef));
  }

  public createEvent(): void {
    console.log(1232)
    this.createEventClick.emit('');
  }

  public trackByFn(): void {}

}
