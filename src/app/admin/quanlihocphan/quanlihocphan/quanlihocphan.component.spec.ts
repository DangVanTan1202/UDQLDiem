import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlihocphanComponent } from './quanlihocphan.component';

describe('QuanlihocphanComponent', () => {
  let component: QuanlihocphanComponent;
  let fixture: ComponentFixture<QuanlihocphanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuanlihocphanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuanlihocphanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
