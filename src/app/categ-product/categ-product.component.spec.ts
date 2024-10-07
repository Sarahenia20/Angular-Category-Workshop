import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategProductComponent } from './categ-product.component';

describe('CategProductComponent', () => {
  let component: CategProductComponent;
  let fixture: ComponentFixture<CategProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategProductComponent]
    });
    fixture = TestBed.createComponent(CategProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
