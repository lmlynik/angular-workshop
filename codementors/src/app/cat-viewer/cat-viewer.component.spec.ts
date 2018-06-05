import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatViewerComponent } from './cat-viewer.component';

describe('CatViewerComponent', () => {
  let component: CatViewerComponent;
  let fixture: ComponentFixture<CatViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
