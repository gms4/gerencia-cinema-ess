import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaCadastroClienteComponent } from './tela-cadastro-cliente.component';

describe('TelaCadastroClienteComponent', () => {
  let component: TelaCadastroClienteComponent;
  let fixture: ComponentFixture<TelaCadastroClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaCadastroClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaCadastroClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
