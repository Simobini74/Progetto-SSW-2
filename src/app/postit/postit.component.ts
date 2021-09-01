import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { PostserviceService } from '../postservice.service';
import { Post } from '../app.component';

@Component({
  selector: 'app-postit',
  templateUrl: './postit.component.html',
  styleUrls: ['./postit.component.css']
})
export class PostitComponent implements OnInit {
  @Input() key: string;
  @Input() postit: Array<Post>;

  constructor(private postservice: PostserviceService) { }
  creaPost = async (titolo: string, contenuto: string, importante: string) =>{
    await this.postservice.sendData(this.key, this.postit);




  }

  ngOnInit() {
  }

}