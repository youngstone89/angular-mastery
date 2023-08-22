import { TestBed } from '@angular/core/testing';
import { SlideToggleComponent } from './slide-toggle.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

describe('SlideToggleComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [SlideToggleComponent],
    imports: [MatSlideToggleModule],
  }));

  it('should create', () => {
    let fixture = TestBed.createComponent(SlideToggleComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  })
})