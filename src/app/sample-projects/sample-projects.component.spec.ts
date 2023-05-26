import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleProjectsComponent } from './sample-projects.component';

describe('SampleProjectsComponent', () => {
  let component: SampleProjectsComponent;
  let fixture: ComponentFixture<SampleProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
