export class Contact {
  id?: number;
  email!: string;
  message!: string;

  constructor(email: string, message: string) {
    this.email = email;
    this.message = message;
  }
}