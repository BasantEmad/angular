import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDoctorsComponent } from './updatedoctors.component';

describe('UpdatedoctorsComponent', () => {
  let component: UpdateDoctorsComponent;
  let fixture: ComponentFixture<UpdateDoctorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDoctorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
