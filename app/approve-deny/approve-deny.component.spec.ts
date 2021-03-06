import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveDenyComponent } from './approve-deny.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LeavePendingService } from '../leave-pending.service';
import { LeavehistoryService } from '../leavehistory.service';
import { RouterTestingModule } from '@angular/router/testing';
import { EmployeeService } from '../employee.service';

describe('ApproveDenyComponent', () => {
  let component: ApproveDenyComponent;
  let fixture: ComponentFixture<ApproveDenyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({ 
      imports : [FormsModule,HttpModule,RouterTestingModule],
      declarations: [ ApproveDenyComponent ],
      providers:[LeavePendingService,LeavehistoryService,EmployeeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveDenyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
