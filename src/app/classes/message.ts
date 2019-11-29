import { User } from './user';

export class Message {
    message: string;
    createdAt: any;
    sender: User;
    photoUrl: string;
    sanitizedPhotoUrl: any;

    constructor({message, createdAt, sender}) {
        this.message = message;
        this.createdAt = createdAt;
        this.sender = new User(sender);
    }
}
