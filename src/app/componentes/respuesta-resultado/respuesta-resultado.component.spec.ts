import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestaResultadoComponent } from './respuesta-resultado.component';

describe('RespuestaResultadoComponent', () => {
  let component: RespuestaResultadoComponent;
  let fixture: ComponentFixture<RespuestaResultadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespuestaResultadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RespuestaResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
