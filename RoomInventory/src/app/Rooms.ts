export interface Room{
    availableRooms:number;
    totalRooms?:number;
    bookedRooms:number
}

export interface RoomList{
    roomNumber:number;
    roomType:string;
    amenities?:string;
    price:number;
    photos:string;
    checkInTime:Date;
    checkOutTime:Date;
    ratings?:number;
}