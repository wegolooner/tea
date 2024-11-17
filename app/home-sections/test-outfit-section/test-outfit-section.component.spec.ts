import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOutfitSectionComponent } from './test-outfit-section.component';

describe('TestOutfitSectionComponent', () => {
  let component: TestOutfitSectionComponent;
  let fixture: ComponentFixture<TestOutfitSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestOutfitSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestOutfitSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
