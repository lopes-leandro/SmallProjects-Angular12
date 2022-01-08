import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  dataComments$: Observable<string>;

  constructor(private userService: UserService) {
    this.dataComments$ = this.userService.getDataComments();
   }
   
  ngOnInit(): void {
  }

}
