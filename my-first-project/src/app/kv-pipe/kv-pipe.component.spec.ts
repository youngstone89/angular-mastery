import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KvPipeComponent } from './kv-pipe.component';

describe('KvPipeComponent', () => {
  let component: KvPipeComponent;
  let fixture: ComponentFixture<KvPipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KvPipeComponent]
    });
    fixture = TestBed.createComponent(KvPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
