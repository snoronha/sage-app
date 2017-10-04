import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FastlinkComponent } from './fastlink.component';

describe('FastlinkComponent', () => {
  let component: FastlinkComponent;
  let fixture: ComponentFixture<FastlinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FastlinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FastlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
