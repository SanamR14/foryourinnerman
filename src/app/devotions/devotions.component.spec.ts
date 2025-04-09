import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevotionsComponent } from './devotions.component';

describe('DevotionsComponent', () => {
  let component: DevotionsComponent;
  let fixture: ComponentFixture<DevotionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevotionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
