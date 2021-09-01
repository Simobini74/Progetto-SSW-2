import { Injectable } from '@angular/core';

@Injectable(
 { providedIn: 'root'}
)
export class PostserviceService {
  URLbase : string;

  constructor() { this.URLbase = "https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/kvaas-giwjg/service/kvaas/incoming_webhook";}

  requestKey = () => {
    return fetch(this.URLbase + "/new", {method: "POST"})
    .then(response => response.json(), error => alert(error));
  }
  getData = (key: string, callback: any) => {
    return fetch(this.URLbase + "/get?key=" + key)
    .then(response => response.json(), error => alert(error))
    .then(data => callback(data));}
  sendData = (key: string, msg: {}) => {
    return fetch(this.URLbase + "/post?key=" + key + "&msg=" + JSON.stringify(msg), {method: "POST"})
    .then(response => response.json(), error => alert(error));
     }

}