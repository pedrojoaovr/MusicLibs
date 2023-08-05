import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarPensanmentosComponent } from './criar-pensanmentos.component';

describe('CriarPensanmentosComponent', () => {
  let component: CriarPensanmentosComponent;
  let fixture: ComponentFixture<CriarPensanmentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarPensanmentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarPensanmentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
