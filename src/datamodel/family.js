import { Timestamp } from "@firebase/firestore";


export default class Family {
  #id;
  #lastName;
  #createdDate;
  #lastModifiedDate;
  
  constructor(lastName) {
    this.#lastName = lastName;
    this.#createdDate = Timestamp.fromDate(new Date());
    this.#lastModifiedDate = Timestamp.fromDate(new Date());
  }

  get lastName() {
    return this.#lastName;
  }

  set lastName(value) {
    this.#lastName = value;
  }
}