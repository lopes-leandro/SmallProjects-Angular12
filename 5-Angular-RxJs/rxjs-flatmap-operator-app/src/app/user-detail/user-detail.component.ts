import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { UserInterface } from '../shared/interfaces/user.interface';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit, OnDestroy {

  user$!: Observable<UserInterface | undefined>;
  similarUsers$!: Observable<UserInterface[]>;
  isStreamActive: boolean;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute) { 
      this.isStreamActive = false;
    }

  ngOnInit(): void {
    this.isStreamActive = true;
    this.route.paramMap.pipe(
      takeWhile(() => !! this.isStreamActive)
    ).subscribe((params) => {
      const userId = params.get('uuid');
      this.similarUsers$ = this.userService.getSimilarUser(userId as string);
      this.user$ = this.userService.getUser(userId as string);
    })
  }

  ngOnDestroy(): void {
    this.isStreamActive = false;
  }

}
