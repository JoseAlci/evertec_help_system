import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokensFormatComponent } from './tokens-format.component';

describe('TokensFormatComponent', () => {
  let component: TokensFormatComponent;
  let fixture: ComponentFixture<TokensFormatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TokensFormatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TokensFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
