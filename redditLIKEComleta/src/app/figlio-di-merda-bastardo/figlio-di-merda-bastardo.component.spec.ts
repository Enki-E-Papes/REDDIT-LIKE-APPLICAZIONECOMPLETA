import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiglioDiMerdaBastardoComponent } from './figlio-di-merda-bastardo.component';

describe('FiglioDiMerdaBastardoComponent', () => {
  let component: FiglioDiMerdaBastardoComponent;
  let fixture: ComponentFixture<FiglioDiMerdaBastardoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiglioDiMerdaBastardoComponent]
    });
    fixture = TestBed.createComponent(FiglioDiMerdaBastardoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
