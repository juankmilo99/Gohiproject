import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioDashUComponent } from './inicio-dash-u.component';

describe('InicioDashUComponent', () => {
  let component: InicioDashUComponent;
  let fixture: ComponentFixture<InicioDashUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioDashUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioDashUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
