import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorUComponent } from './contenedor-u.component';

describe('ContenedorUComponent', () => {
  let component: ContenedorUComponent;
  let fixture: ComponentFixture<ContenedorUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
