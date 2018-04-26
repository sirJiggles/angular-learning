import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NotificationsService {
  private subject = new Subject();
  public notifications$ = this.subject.asObservable();
  constructor() {}

  emit(notification: string) {
    this.subject.next(notification);
  }
}
