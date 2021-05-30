import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZahlbuttonComponent } from './zahlbutton.component';

describe('ZahlbuttonComponent', () => {
  let component: ZahlbuttonComponent;
  let fixture: ComponentFixture<ZahlbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZahlbuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZahlbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
