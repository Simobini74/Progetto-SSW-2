import { Component, VERSION } from '@angular/core';
import { PostserviceService } from './postservice.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Progetto SSW';
  title = 'Applicazione per Postit';
  key : string;
  postit= Array<Post>;

  constructor(private postservice: PostserviceService) {
    this.postit = new Array<Post>();
  }

 inviaChiave = async (key: string = null) =>{
  const k = await this.postservice.requestKey();
  this.inviaChiave(k);

 }
}
