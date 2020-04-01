import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-table',
  templateUrl: './header-table.component.html',
  styleUrls: ['./header-table.component.scss']
})
export class HeaderTableComponent implements OnInit {
  public showAdvanced : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  resetFilter() {
  }

}
