import { Component, VERSION } from '@angular/core';
import { PostserviceService } from './postservice.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Progetto SSW';
  title = 'Applicazione per Postit'
}
