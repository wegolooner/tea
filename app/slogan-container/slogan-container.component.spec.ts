import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SloganContainerComponent } from './slogan-container.component';

describe('SloganContainerComponent', () => {
  let component: SloganContainerComponent;
  let fixture: ComponentFixture<SloganContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SloganContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SloganContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
