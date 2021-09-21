import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WerbungComponent } from './werbung.component';

describe('WerbungComponent', () => {
  let component: WerbungComponent;
  let fixture: ComponentFixture<WerbungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WerbungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WerbungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
