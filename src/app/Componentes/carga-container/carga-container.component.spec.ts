import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaContainerComponent } from './carga-container.component';

describe('CargaContainerComponent', () => {
  let component: CargaContainerComponent;
  let fixture: ComponentFixture<CargaContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
