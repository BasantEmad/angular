import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddHelpusComponent } from './addhelpus.component';

describe('AddhelpusComponent', () => {
  let component: AddHelpusComponent;
  let fixture: ComponentFixture<AddHelpusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHelpusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHelpusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
