import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { UserInterface } from '../interfaces/user-interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  usersApiUrl = 'https://api.randomuser.me?results=10&seed=packt';
  commentsJsonUrl = 'assets/data/comments.json';

  constructor(private http: HttpClient) { }

  getUser(userId: string): Observable<UserInterface | any> {
    return this.http.get<{ results: UserInterface[] }>(this.usersApiUrl).pipe(
      map((resp) => resp.results.find((user) => user.login.uuid === userId))
    );
  }

  getSimilarUser(userId?: string): Observable<UserInterface[]> {
    return this.http.get<{ results: UserInterface[] }>(this.usersApiUrl).pipe(
      map((resp) => resp.results.filter(user => {
        // console.log(user);        
        return user.login.uuid !== userId;
      })
      )
    )
  }

  searchUsers(username: string): Observable<UserInterface[]> {
    return this.getSimilarUser().pipe(map(users => {
      if (!username) {
        return users
      }
      return users.filter(user => {
        const query = username.toLowerCase();
        return (
          user.email.toLowerCase().includes(query) ||
          user.name.first.toLowerCase().includes(query) ||
          user.name.last.toLowerCase().includes(query)
        )
      })
    }))
  }

  getDataComments(): Observable<string> {
    return this.http.get<{ __comments: string }>(this.commentsJsonUrl).pipe(
      map((resp) => resp.__comments)
    )
  }
}
