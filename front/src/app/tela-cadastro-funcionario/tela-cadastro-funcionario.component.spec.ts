import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaCadastroFuncionarioComponent } from './tela-cadastro-funcionario.component';

describe('TelaCadastroFuncionarioComponent', () => {
  let component: TelaCadastroFuncionarioComponent;
  let fixture: ComponentFixture<TelaCadastroFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaCadastroFuncionarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaCadastroFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
