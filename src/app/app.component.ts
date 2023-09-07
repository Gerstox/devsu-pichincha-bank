import { Component } from '@angular/core';
import { AlertService } from './services/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'devsu-pichincha-bank';

  options = {
    autoClose: false,
    keepAfterRouteChange: false
  };

  constructor(protected alertService: AlertService) {}
}
