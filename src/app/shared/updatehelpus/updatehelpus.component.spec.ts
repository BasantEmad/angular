import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {UpdateHelpusComponent} from './updatehelpus.component';

describe('UpdatehelpusComponent', () => {
  let component: UpdateHelpusComponent;
  let fixture: ComponentFixture<UpdateHelpusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateHelpusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHelpusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
