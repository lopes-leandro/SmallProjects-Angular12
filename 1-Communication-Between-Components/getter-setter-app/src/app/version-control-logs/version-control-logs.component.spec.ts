import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionControlLogsComponent } from './version-control-logs.component';

describe('VersionControlLogsComponent', () => {
  let component: VersionControlLogsComponent;
  let fixture: ComponentFixture<VersionControlLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersionControlLogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionControlLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
