import { Component, DoCheck, OnInit } from '@angular/core';
import { Room, RoomList } from '../Rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit, DoCheck {
  
  title = 'RoomInventoryApp';
  numberOfRooms = 10;
  hideRooms = true;
  room:Room = {
    availableRooms : 20,
    totalRooms : 30,
    bookedRooms : 10
  }
  selectedRooms!:RoomList;
  roomList: RoomList[] = []
  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Deluxe',
        amenities: 'Air-Conditioner, Free Wi-Fi, TV, Beverages, Kitchen',
        price: 5000,
        photos: 'img',
        checkInTime: new Date(),
        checkOutTime: new Date(),
        ratings:3.2
      },
      {
        roomNumber: 2,
        roomType: 'Private Suite',
        amenities: 'Air-Conditioner, Free Wi-Fi, TV, Beverages, Kitchen',
        price: 5000,
        photos: 'img',
        checkInTime: new Date(),
        checkOutTime: new Date(),
        ratings:4.6
      },
      {
        roomNumber: 3,
        roomType: 'Deluxe Room',
        amenities: 'Air-Conditioner, Free Wi-Fi, TV, Beverages, Kitchen',
        price: 5000,
        photos: 'img',
        checkInTime: new Date(),
        checkOutTime: new Date(),
        ratings:4.2
      }
    ];
  }

  ngDoCheck(): void {
    console.log('On Change is Called');
  }


  selectedRoom(room : RoomList)
  {
    this.selectedRooms = room;
    console.log(room);
  }
  addRoom()
  {
    const room:RoomList = {
      roomNumber: 4,
      roomType: 'Deluxe Room',
      amenities: 'Air-Conditioner, Free Wi-Fi, TV, Beverages, Kitchen',
      price: 5000,
      photos: 'img',
      checkInTime: new Date(),
      checkOutTime: new Date(),
      ratings:4.2
    } 
    this.roomList = [...this.roomList, room];
  }
  toggle()
  {
      this.hideRooms = !this.hideRooms;
      this.title = 'Rooms List';
  }

}
