import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpuslistComponent } from './helpuslist.component';

describe('HelpuslistComponent', () => {
  let component: HelpuslistComponent;
  let fixture: ComponentFixture<HelpuslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpuslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpuslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
