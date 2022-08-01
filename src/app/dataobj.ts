import { Time } from "@angular/common";

export class data {
    item: string;
    description: string;
    time: string;
    picked: boolean;
}

//   Create a small TODO application which does the following:
// 1. Add an item to the list
// 2. Remove an item to the list
// 3. Mark an item as completed
// Each item should include a title and a Description and the timestamp on which the item was added
// Design the app in such a way that the operations performed by the TODO can be reused across multiple components.