import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaIngressosComponent } from './tela-ingressos.component';

describe('TelaIngressosComponent', () => {
  let component: TelaIngressosComponent;
  let fixture: ComponentFixture<TelaIngressosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaIngressosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaIngressosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
