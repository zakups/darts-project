import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZahleneingabeComponent } from './zahleneingabe.component';

describe('ZahleneingabeComponent', () => {
  let component: ZahleneingabeComponent;
  let fixture: ComponentFixture<ZahleneingabeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZahleneingabeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZahleneingabeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
