import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenSourceCodeComponent } from './open-source-code.component';

describe('OpenSourceCodeComponent', () => {
  let component: OpenSourceCodeComponent;
  let fixture: ComponentFixture<OpenSourceCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenSourceCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenSourceCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
