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
  constructor(private postservice: PostserviceService) {
    this.postit = new Array<Post>();
  }
RichiediChiave =async (key:string)=>{
  const k =await this.postservice.requestKey();
  this.RichiediChiave(k);
 }
}
