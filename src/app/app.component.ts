import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public num = 0;
  public array = ['Juan', 'Lucas', 'Casas', 'Hector', 'Jota'];
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
  public addToNum() {
    this.num += 1;
    this.num %= this.array.length;
  }
}
