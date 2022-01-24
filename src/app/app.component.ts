import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public name = 'Angular ' + VERSION.full;
  public class = 'hey';
  public hello() {
    return 'Stormtrooper';
  }
}
