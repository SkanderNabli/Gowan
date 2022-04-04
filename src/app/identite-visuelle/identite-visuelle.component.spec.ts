import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentiteVisuelleComponent } from './identite-visuelle.component';

describe('IdentiteVisuelleComponent', () => {
  let component: IdentiteVisuelleComponent;
  let fixture: ComponentFixture<IdentiteVisuelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentiteVisuelleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentiteVisuelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
