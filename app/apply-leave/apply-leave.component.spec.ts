
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { ApplyLeaveComponent } from './apply-leave.component';
import { LeavePendingService } from '../leave-pending.service';
import { LeavehistoryService } from '../leavehistory.service';
import { of } from 'rxjs/observable/of';
import { EmployeeService } from '../employee.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { LeavePending } from '../leave-pending';


describe('ApplyLeaveComponent', () => { 
  let service: LeavePendingService;
    let httpMock: HttpTestingController;
  let component: ApplyLeaveComponent;
  let leaveDetails : LeavePending;
  let fixture: ComponentFixture<ApplyLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [FormsModule,HttpModule,RouterTestingModule,HttpClientTestingModule],
      declarations: [ ApplyLeaveComponent ], 
      providers:[LeavePendingService,LeavehistoryService,EmployeeService] 
    
    })
    .compileComponents();
  }));

  beforeEach(() => { 
    service = TestBed.get(LeavePendingService);
    httpMock = TestBed.get(HttpTestingController);
    fixture = TestBed.createComponent(ApplyLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
