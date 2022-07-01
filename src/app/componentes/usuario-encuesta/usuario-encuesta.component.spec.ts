import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioEncuestaComponent } from './usuario-encuesta.component';

describe('UsuarioEncuestaComponent', () => {
  let component: UsuarioEncuestaComponent;
  let fixture: ComponentFixture<UsuarioEncuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioEncuestaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioEncuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
