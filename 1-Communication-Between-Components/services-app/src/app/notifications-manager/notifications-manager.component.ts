import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { NotificationsService } from "../services/notifications.service";
import { first } from "rxjs/operators";

@Component({
  selector: 'app-notifications-manager',
  templateUrl: './notifications-manager.component.html',
  styleUrls: ['./notifications-manager.component.scss']
})
export class NotificationsManagerComponent implements OnInit {

  notificationsCount$: Observable<number>;

  constructor(private notificationsService: NotificationsService) { 
    this.notificationsCount$ = this.notificationsService.count$;
  }

  ngOnInit(): void {
    
  }

  getCountValue (callback: any) {
    this.notificationsCount$.pipe(first()).subscribe(callback)
  }

  addNotification() {
    this.getCountValue((countVal: number) => {
      this.notificationsService.setCount(++countVal)
    });
  }

  removeNotification() {}

  resetCount() {}

}
