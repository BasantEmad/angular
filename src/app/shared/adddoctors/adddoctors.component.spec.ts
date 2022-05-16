import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {AdddoctorsComponent} from './adddoctors.component';

describe('AdddoctorsComponent', () => {
  let component: AdddoctorsComponent;
  let fixture: ComponentFixture<AdddoctorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddoctorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
