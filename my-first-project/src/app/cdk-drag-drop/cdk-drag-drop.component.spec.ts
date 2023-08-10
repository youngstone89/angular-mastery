import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkDragDropComponent } from './cdk-drag-drop.component';

describe('CdkDragDropComponent', () => {
  let component: CdkDragDropComponent;
  let fixture: ComponentFixture<CdkDragDropComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CdkDragDropComponent]
    });
    fixture = TestBed.createComponent(CdkDragDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
