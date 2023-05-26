import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuerryEnvironmentComponent } from './querry-environment.component';

describe('QuerryEnvironmentComponent', () => {
  let component: QuerryEnvironmentComponent;
  let fixture: ComponentFixture<QuerryEnvironmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuerryEnvironmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuerryEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
