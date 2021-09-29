import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UvasdemesaComponent } from './uvasdemesa.component';

describe('UvasdemesaComponent', () => {
  let component: UvasdemesaComponent;
  let fixture: ComponentFixture<UvasdemesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UvasdemesaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UvasdemesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
