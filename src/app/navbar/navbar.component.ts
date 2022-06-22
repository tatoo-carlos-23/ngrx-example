import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { APP_STATE, USER_PROP } from '../interface/user.interface';
import { UserData } from '../store/actions/actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userName: string = ''

  constructor(private store: Store<APP_STATE>) { }

  ngOnInit(): void {
    this.store.subscribe((d) => {
      console.log('NGRX ==> ', d);
      this.userName = d.user.name + ' ' + d.user.apellido
    })
  }

  changeData() {
    this.store.dispatch(UserData({ name: '...' }))
  }

}
