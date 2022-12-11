import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinoComponentePaiComponent } from './treino-componente-pai.component';

describe('TreinoComponentePaiComponent', () => {
  let component: TreinoComponentePaiComponent;
  let fixture: ComponentFixture<TreinoComponentePaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreinoComponentePaiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreinoComponentePaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
