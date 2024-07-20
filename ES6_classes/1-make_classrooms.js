import ClassRoom from "./0-classroom";

export default function initializeRooms() {
  const myArray = [];

  myArray.push(new ClassRoom(19));
  myArray.push(new ClassRoom(20));
  myArray.push(new ClassRoom(34));

  return myArray;
}
