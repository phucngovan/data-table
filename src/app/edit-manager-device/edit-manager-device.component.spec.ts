import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditManagerDeviceComponent } from './edit-manager-device.component';

describe('EditManagerDeviceComponent', () => {
  let component: EditManagerDeviceComponent;
  let fixture: ComponentFixture<EditManagerDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditManagerDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditManagerDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
