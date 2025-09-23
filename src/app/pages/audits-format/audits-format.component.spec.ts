import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditsFormatComponent } from './audits-format.component';

describe('AuditsFormatComponent', () => {
  let component: AuditsFormatComponent;
  let fixture: ComponentFixture<AuditsFormatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuditsFormatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditsFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
