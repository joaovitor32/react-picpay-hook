export interface IBuyer {

  firstName: string;
  lastName: string;
  document: string;
  email: string;
  phone: string;

}

export default class Buyer {

  firstName: string;
  lastName: string;
  document: string;
  email: string;
  phone: string;

  constructor({ firstName, lastName, document, email, phone }: IBuyer) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.document = document;
    this.email = email;
    this.phone = phone;

  }

}