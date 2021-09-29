import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimsonComponent } from './crimson.component';

describe('CrimsonComponent', () => {
  let component: CrimsonComponent;
  let fixture: ComponentFixture<CrimsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrimsonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrimsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
