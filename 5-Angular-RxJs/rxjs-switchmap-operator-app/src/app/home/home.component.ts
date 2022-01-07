import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from '../shared/interfaces/user-interface';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users$!: Observable<UserInterface[]>;

  constructor(private userService: UserService) { 
  }

  ngOnInit(): void {
    this.users$ = this.userService.getSimilarUser();
  }

}
