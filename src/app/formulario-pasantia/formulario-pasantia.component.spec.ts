import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPasantiaComponent } from './formulario-pasantia.component';

describe('FormularioPasantiaComponent', () => {
  let component: FormularioPasantiaComponent;
  let fixture: ComponentFixture<FormularioPasantiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioPasantiaComponent]
    });
    fixture = TestBed.createComponent(FormularioPasantiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
