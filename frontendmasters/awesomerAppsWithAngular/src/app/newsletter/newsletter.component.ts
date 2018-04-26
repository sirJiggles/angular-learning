import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscriber } from '../interfaces/Subscriber';
import { NotificationsService } from '../shared';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {
  subscriber: FormGroup;

  constructor(
    @Inject(FormBuilder) fb: FormBuilder,
    private ns: NotificationsService
  ) {
    this.subscriber = fb.group(
      {
        name: ['', [Validators.minLength(3), Validators.required]],
        email: ['', [Validators.email, Validators.required]]
      },
      null
    );
  }

  ngOnInit() {}

  submitForm({ value, valid }: { value: Subscriber; valid: boolean }) {
    if (valid) {
      this.ns.emit(`${value.name} subscribed!`);
      this.reset();
    }
  }

  reset() {
    this.subscriber.reset();
  }
}
