import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoTratamientoComponent } from './nuevo-tratamiento.component';

describe('NuevoTratamientoComponent', () => {
  let component: NuevoTratamientoComponent;
  let fixture: ComponentFixture<NuevoTratamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoTratamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoTratamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
