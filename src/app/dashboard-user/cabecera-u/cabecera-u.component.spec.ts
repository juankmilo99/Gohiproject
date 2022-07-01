import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraUComponent } from './cabecera-u.component';

describe('CabeceraUComponent', () => {
  let component: CabeceraUComponent;
  let fixture: ComponentFixture<CabeceraUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabeceraUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeceraUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
