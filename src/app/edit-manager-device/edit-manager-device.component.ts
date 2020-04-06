import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-edit-manager-device',
  templateUrl: './edit-manager-device.component.html',
  styleUrls: ['./edit-manager-device.component.scss']
})
export class EditManagerDeviceComponent implements OnInit {
  public check = false;
  public dropdownOptions = [
    'WeTrack2', 'OB22' , 'HVT001', 'TG102LE', 'TG102V', 'TG102E', 'GT06N', 'AT4'
  ];
  public iconData = [
    'Taxi', 'Xe con' , 'Xe tải', 'Xe container', 'Xe máy', 'Mô tô', 'Định hướng', 'khác'
  ];
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
  public iconConfig = {
    displayKey: 'description',
    search: false,
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

  constructor() { }

  ngOnInit(): void {
  }
  selectionChanged(event) {
    console.log(event.value);
  }
  addBorder() {
    // tslint:disable-next-line:no-unused-expression
    this.check === true;
  }
}
