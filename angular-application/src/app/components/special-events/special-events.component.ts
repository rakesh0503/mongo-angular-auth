import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.scss']
})
export class SpecialEventsComponent implements OnInit {

  spacielEvents: any = []
  constructor(private _SpacielEvent: EventService, private _router: Router) { }

  ngOnInit(): void {
    this._SpacielEvent.getEvent().subscribe(res => {
      this.spacielEvents = res;
    }, err => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          this._router.navigate(['/login'])
        }
      }
    })
  }

}
