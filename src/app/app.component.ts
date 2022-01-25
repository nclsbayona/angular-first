import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public name = 'Angular ' + VERSION.full;
  public class = 'hey';
  public cls = 'Hey';
  public disp = true;
  public display() {
    return this.disp;
  }
  public hello() {
    return 'Stormtrooper';
  }
  public show() {
    console.log(this.cls);
  }
}
