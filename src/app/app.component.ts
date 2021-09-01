import { Component, VERSION } from '@angular/core';
import { PostserviceService } from './postservice.service';

class Post {
  titolo : string;
  contenuto: string;
  constructor(titolo: string, contenuto: string) {
    this.titolo=titolo;
    this.contenuto=contenuto;
  }
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  name = 'Progetto SSW';
  title = 'Applicazione per Postit';
  key : string;
  postit: Array<Post>;
 
}
