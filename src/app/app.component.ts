import { Component, VERSION } from '@angular/core';
import { PostserviceService } from './postservice.service';

export class Postit {
  titolo : string;
  contenuto: string;
  importante: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  name = 'Progetto SSW';
  title = 'Applicazione per Postit';
  selezione: Postit= new Postit();
  key : '';
  postsalvato: Array<Postit>=[];
  flag: boolean=false;
  constructor(private postservice: PostserviceService) {   
  }
  MostraPost(id: Postit) {
    this.selezione.titolo = id.titolo;
    this.selezione.contenuto = id.contenuto;
  }
  addPost(newPostit: Postit) {
    this.postservice.apiKEY = this.key;
    this.postsalvato.push(newPostit);
    let newmsg: string = JSON.stringify(this.postsalvato);
    this.postservice
      .postData(newmsg)
      .then(response => response.json(), error => alert(error));
  }
}


          
   


  

