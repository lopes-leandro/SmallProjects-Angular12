import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, switchMap, takeWhile } from 'rxjs/operators';
import { UserInterface } from '../shared/interfaces/user.interface';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  users: UserInterface[];
  searchForm: FormGroup;
  isStreamActive: boolean;

  constructor(private userService: UserService) {
    this.users = []
    this.isStreamActive = false;
    this.searchForm = new FormGroup({
      username: new FormControl('', []),
    })
  }


  ngOnInit(): void {
    this.isStreamActive = true;
    this.searchUsers();
    this.searchForm
      .get('username')?.valueChanges
      .pipe(
        takeWhile(() => !!this.isStreamActive),
        debounceTime(600),
        // switchMap((query) => this.userService.searchUsers(query))
      )
      .subscribe((users) => {    
        // this.users = users;
        this.searchUsers();
      })
  }

  ngOnDestroy(): void {
    this.isStreamActive = false;
  }

  searchUsers() {
    const query = this.searchForm.get('username')?.value;
    this.userService.searchUsers(query).subscribe((users) => {
      this.users = users;
    })

  }

}
