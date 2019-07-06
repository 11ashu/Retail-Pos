import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';
@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.scss']
})
export class TopnavbarComponent implements OnInit {

  constructor(public _authService: AuthenticationService) { }

  ngOnInit() {
  }

}
