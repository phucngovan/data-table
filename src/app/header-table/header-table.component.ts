import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-table',
  templateUrl: './header-table.component.html',
  styleUrls: ['./header-table.component.scss']
})
export class HeaderTableComponent implements OnInit {
  public showAdvanced = false;
  public dropdownOptions = [
    'WeTrack2', 'OB22' , 'HVT001', 'TG102LE', 'TG102V', 'TG102E', 'GT06N', 'AT4'
  ];
  public dropdownSim = ['VIETTEL', 'MOBILE'];
  public dropdownActiveTime = ['Kích hoạt bảo hành', 'Hạn dịch vụ', 'Hạn bảo hành'];
  public categoryService = ['Sắp hết hạn', 'Đã hết hạn', 'Đang hoạt động'];
  public  optionStatus = ['Kích hoạt', 'Không kích hoạt'];
  public configStatus = {
    displayKey: 'description',
    search: false,
    height: '180px',
    placeholder: 'Trạng thái',
    customComparator: () => {},
    limitTo: 4 ,
    moreText: 'more',
    noResultsFound: 'No results found!',
    searchPlaceholder: 'Search',
    searchOnKey: 'name',
    clearOnSelection: false,
    inputDirection: 'ltr'
  }

  public config = {
    displayKey: 'description',
    search: true,
    height: '180px',
    placeholder: 'Loại thiết bị',
    customComparator: () => {},
    limitTo: 4 ,
    moreText: 'more',
    noResultsFound: 'No results found!',
    searchPlaceholder: 'Search',
    searchOnKey: 'name',
    clearOnSelection: false,
    inputDirection: 'ltr'
  };
  public configSim = {
    displayKey: 'description',
    search: false,
    height: '180px',
    placeholder: 'Loại sim',
    customComparator: () => {},
    limitTo: 4 ,
    moreText: 'more',
    noResultsFound: 'No results found!',
    searchPlaceholder: 'Search',
    searchOnKey: 'name',
    clearOnSelection: false,
    inputDirection: 'ltr'
  };
  public activeTime = {
    displayKey: 'description',
    search: false,
    height: '180px',
    placeholder: 'Thời gian kích hoạt',
    customComparator: () => {},
    limitTo: 4 ,
    moreText: 'more',
    noResultsFound: 'No results found!',
    searchPlaceholder: 'Search',
    searchOnKey: 'name',
    clearOnSelection: false,
    inputDirection: 'ltr'
  };
  public termService = {
    displayKey: 'description',
    search: false,
    height: '180px',
    placeholder: 'Hạn dịch vụ',
    customComparator: () => {},
    limitTo: 4 ,
    moreText: 'more',
    noResultsFound: 'No results found!',
    searchPlaceholder: 'Search',
    searchOnKey: 'name',
    clearOnSelection: false,
    inputDirection: 'ltr'
  }
  public fakeData = [
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
  selectionChanged(event) {
    console.log(event);
  }
  resetFilter() {
  }

}
