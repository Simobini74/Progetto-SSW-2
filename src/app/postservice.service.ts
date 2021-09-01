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

}