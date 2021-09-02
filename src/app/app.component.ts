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
  postalvato: Array<Postit>={};
  flag: boolean=false;
  constructor(private postservice: PostserviceService) {   
  }
  MostraPost(id: Postit) {
    this.selezione.titolo = id.titolo;
    this.selezione.contenuto = id.contenuto;
  }
}


          
   


  

