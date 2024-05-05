import { Component, Input } from '@angular/core';
import { RoomList } from '../../Rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss'
})
export class RoomsListComponent {
@Input() rooms : RoomList[] = [];
}
