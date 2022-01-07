import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { mergeMap, takeWhile } from 'rxjs/operators';
import { UserInterface } from '../shared/interfaces/user.interface';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit, OnDestroy {

  user: UserInterface | any;
  similarUsers: UserInterface[] | any;
  isStreamActive: boolean;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute) {
    this.isStreamActive = false;
  }

  ngOnInit(): void {
    this.isStreamActive = true;
    this.route.paramMap.pipe(
      takeWhile(() => !!this.isStreamActive),
      mergeMap(params => {
        this.user = null;
        this.similarUsers = null;
        const userId = params.get('uuid');
        return this.userService.getUser(userId as string)
          .pipe(
            mergeMap((user: UserInterface) => {
              this.user = user;
              return this.userService.getSimilarUser(userId as string)
            })
          );
      })
    ).subscribe((similarUsers: UserInterface[]) => {
      // setTimeout(() => {
      //   this.similarUsers = similarUsers
      // }, 3000);
      this.similarUsers = similarUsers
    })
  }

  ngOnDestroy(): void {
    this.isStreamActive = false;
  }

}
