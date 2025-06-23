import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanliaccountComponent } from './quanliaccount.component';

describe('QuanliaccountComponent', () => {
  let component: QuanliaccountComponent;
  let fixture: ComponentFixture<QuanliaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuanliaccountComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuanliaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
