import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { PostserviceService } from '../postservice.service';


@Component({
  selector: 'app-postit',
  templateUrl: './postit.component.html',
  styleUrls: ['./postit.component.css']
})
export class PostitComponent implements OnInit {
  @Input() key: string;  
  @Input() postit: Array<Post>;
  creazione_post: boolean;
  post_visualizzato: number;
  ngOnInit(): void { }
  constructor(private postservice: PostserviceService) {
    this.creazione_post = false;
    this.post_visualizzato = -1;
   }
  creaPost = async (titolo: string, contenuto: string, importante: string) =>{
    if(titolo.trim().length !== 0 && contenuto.trim().length !== 0) {     
     
    await this.postservice.sendData(this.key, this.postit);




  }}

 
  

}