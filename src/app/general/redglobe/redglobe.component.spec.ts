import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedglobeComponent } from './redglobe.component';

describe('RedglobeComponent', () => {
  let component: RedglobeComponent;
  let fixture: ComponentFixture<RedglobeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedglobeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedglobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
