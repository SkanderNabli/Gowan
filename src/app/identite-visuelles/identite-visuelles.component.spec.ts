import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentiteVisuellesComponent } from './identite-visuelles.component';

describe('IdentiteVisuellesComponent', () => {
  let component: IdentiteVisuellesComponent;
  let fixture: ComponentFixture<IdentiteVisuellesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentiteVisuellesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentiteVisuellesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
