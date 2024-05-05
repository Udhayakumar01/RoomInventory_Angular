import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Room, RoomList } from '../../Rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss'
})
export class RoomsListComponent {
@Input() rooms : RoomList[] = [];
@Output() selectedRoom:EventEmitter<RoomList> = new EventEmitter<RoomList>();
selectRoom(room : RoomList) : void
{
  this.selectedRoom.emit(room);
}
}
