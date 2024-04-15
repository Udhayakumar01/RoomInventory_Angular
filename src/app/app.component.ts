import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  //template: '<h1>My first angular app from inline</h1>',
  //styleUrl: './app.component.scss',
  styles: ['h1{color:red;}']
})
export class AppComponent {
  title = 'RoomInventoryApp';
}
