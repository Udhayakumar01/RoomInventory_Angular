import { Component } from '@angular/core';
import { Room, RoomList } from '../Rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent {
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
