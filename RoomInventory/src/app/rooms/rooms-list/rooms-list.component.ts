import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { Room, RoomList } from '../../Rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges {

@Input() rooms : RoomList[] = [];

@Input() title = '';

@Output() selectedRoom:EventEmitter<RoomList> = new EventEmitter<RoomList>();

ngOnInit(): void {
  
}

ngOnChanges(changes: SimpleChanges): void {
  console.log(changes);
  if(changes['title'])
    this.title = changes['title'].currentValue.toUpperCase();
}

selectRoom(room : RoomList) : void
{
  this.selectedRoom.emit(room);
}
}
