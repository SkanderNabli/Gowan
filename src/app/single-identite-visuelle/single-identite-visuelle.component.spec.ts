import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleIdentiteVisuelleComponent } from './single-identite-visuelle.component';

describe('SingleIdentiteVisuelleComponent', () => {
  let component: SingleIdentiteVisuelleComponent;
  let fixture: ComponentFixture<SingleIdentiteVisuelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleIdentiteVisuelleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleIdentiteVisuelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
