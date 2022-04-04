import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDesignsComponent } from './web-designs.component';

describe('WebDesignsComponent', () => {
  let component: WebDesignsComponent;
  let fixture: ComponentFixture<WebDesignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebDesignsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDesignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
