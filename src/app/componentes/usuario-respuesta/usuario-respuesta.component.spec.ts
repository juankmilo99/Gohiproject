import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioRespuestaComponent } from './usuario-respuesta.component';

describe('UsuarioRespuestaComponent', () => {
  let component: UsuarioRespuestaComponent;
  let fixture: ComponentFixture<UsuarioRespuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioRespuestaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioRespuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
