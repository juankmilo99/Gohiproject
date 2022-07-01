import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaDimencionComponent } from './encuesta-dimencion.component';

describe('EncuestaDimencionComponent', () => {
  let component: EncuestaDimencionComponent;
  let fixture: ComponentFixture<EncuestaDimencionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncuestaDimencionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestaDimencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
