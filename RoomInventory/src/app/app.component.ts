import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { Room } from './Rooms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: '<h1>My first angular app from inline</h1>', -- inline HTML Template
  styleUrl: './app.component.scss',
  //styles: ['h1{color:red;}'] -- inline Style
})
export class AppComponent {
  title = 'RoomInventoryApp';
  numberOfRooms = 10;
  hideRooms = true;
  room:Room = {
    availableRooms : 20,
    totalRooms : 30,
    bookedRooms : 10
  }
  toggle()
  {
      this.hideRooms = !this.hideRooms;
  }
}
