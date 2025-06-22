import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlisinhvienComponent } from './quanlisinhvien.component';

describe('QuanlisinhvienComponent', () => {
  let component: QuanlisinhvienComponent;
  let fixture: ComponentFixture<QuanlisinhvienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuanlisinhvienComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuanlisinhvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
