import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlidiemComponent } from './quanlidiem.component';

describe('QuanlidiemComponent', () => {
  let component: QuanlidiemComponent;
  let fixture: ComponentFixture<QuanlidiemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuanlidiemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuanlidiemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
