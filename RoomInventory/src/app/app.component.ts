import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { Room, RoomList } from './Rooms';

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

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe',
      amenities: 'Air-Conditioner, Free Wi-Fi, TV, Beverages, Kitchen',
      price: 5000,
      photos: 'img',
      checkInTime: new Date(),
      checkOutTime: new Date()
    },
    {
      roomNumber: 2,
      roomType: 'Private Suite',
      amenities: 'Air-Conditioner, Free Wi-Fi, TV, Beverages, Kitchen',
      price: 5000,
      photos: 'img',
      checkInTime: new Date(),
      checkOutTime: new Date()
    },
    {
      roomNumber: 3,
      roomType: 'Deluxe Room',
      amenities: 'Air-Conditioner, Free Wi-Fi, TV, Beverages, Kitchen',
      price: 5000,
      photos: 'img',
      checkInTime: new Date(),
      checkOutTime: new Date()
    }
  ];
  toggle()
  {
      this.hideRooms = !this.hideRooms;
  }
}
