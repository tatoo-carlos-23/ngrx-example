import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { APP_STATE, USER_PROP } from '../interface/user.interface';
import { UserData } from '../store/actions/actions';
import { APP_STATE_REDUCERS } from '../store/app.reducer';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  subscriptionUserStore: Subscription = new Subscription()
  userName: string = ''

  constructor(private store: Store<APP_STATE_REDUCERS>) { }


  ngOnDestroy(): void {
    this.subscriptionUserStore.unsubscribe()
  }

  ngOnInit(): void {
    this.subscriptionUserStore = this.store.select('user').subscribe(d => {
      this.userName = d.fullname || ''
    })
  }


}
