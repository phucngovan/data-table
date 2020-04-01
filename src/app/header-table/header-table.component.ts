import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-table',
  templateUrl: './header-table.component.html',
  styleUrls: ['./header-table.component.scss']
})
export class HeaderTableComponent implements OnInit {
  public showAdvanced = false;
  public datas = [
    {
      id: 2,
      imei: '359647090228276',
      name: 'OB22 - Alex - BMV',
      userName: 'developer',
      typeName: 'OB22',
      simno: '0862713692',
      serviceExpire: '2020-10-24 07:23:10',
      warrantyExpiredDate: '2020-10-24 07:23:10'
    },
    {
      id: 3,
      imei: '359647090228276',
      name: 'OB22 - Alex - BMV',
      userName: 'developer',
      typeName: 'OB22',
      simno: '0862713692',
      serviceExpire: '2020-10-24 07:23:10',
      warrantyExpiredDate: '2020-10-24 07:23:10'
    },
    {
      id: 4,
      imei: '359647090228276',
      name: 'OB22 - Alex - BMV',
      userName: 'developer',
      typeName: 'OB22',
      simno: '0862713692',
      serviceExpire: '2020-10-24 07:23:10',
      warrantyExpiredDate: '2020-10-24 07:23:10'
    },
    {
      id: 5,
      imei: '359647090228276',
      name: 'OB22 - Alex - BMV',
      userName: 'developer',
      typeName: 'OB22',
      simno: '0862713692',
      serviceExpire: '2020-10-24 07:23:10',
      warrantyExpiredDate: '2020-10-24 07:23:10'
    },
    {
      id: 6,
      imei: '359647090228276',
      name: 'OB22 - Alex - BMV',
      userName: 'developer',
      typeName: 'OB22',
      simno: '0862713692',
      serviceExpire: '2020-10-24 07:23:10',
      warrantyExpiredDate: '2020-10-24 07:23:10'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  resetFilter() {
  }

}
