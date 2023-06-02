import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicarPasantiaComponent } from './publicar-pasantia.component';

describe('PublicarPasantiaComponent', () => {
  let component: PublicarPasantiaComponent;
  let fixture: ComponentFixture<PublicarPasantiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicarPasantiaComponent]
    });
    fixture = TestBed.createComponent(PublicarPasantiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
