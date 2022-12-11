import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinoComponenteFilhoComponent } from './treino-componente-filho.component';

describe('TreinoComponenteFilhoComponent', () => {
  let component: TreinoComponenteFilhoComponent;
  let fixture: ComponentFixture<TreinoComponenteFilhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreinoComponenteFilhoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreinoComponenteFilhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
