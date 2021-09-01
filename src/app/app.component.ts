import { Component, VERSION } from '@angular/core';
import { PostserviceService } from './postservice.service';

export class Post {
  titolo : string;
  contenuto: string;
  importante: number;
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
RichiediChiave =async (key:string=null)=>{
  if (key===null){
  const k =await this.postservice.requestKey();
  this.RichiediChiave(k); } 
  else{
    const datas = await this.postservice.getData(key, data => JSON.parse(data));
    if(!datas.error) {
      this.key = key;
      if(Object.keys(datas).length > 0) {
        let data = datas.filter(item => item.importante == 1);
        for(var item of data) {
          let post = new Post['pluto'];
          post.importante = item.importante;
          post.titolo = item.titolo;
          post.contenuto = item.contenuto;
          this.postit.push(post);

          
        }
      }
    } else {
      alert("Chiave non valida");
    }

    
    }


  
 }
 
}
