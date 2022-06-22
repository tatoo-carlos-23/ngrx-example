import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { APP_STATE } from '../interface/user.interface';
import { UserData } from '../store/actions/actions';
import { APP_STATE_REDUCERS } from '../store/app.reducer';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  name: string = ''
  lastname: string = ''

  // constructor(private store: Store<APP_STATE>) { }
  constructor(private store: Store<APP_STATE_REDUCERS>) { }

  ngOnInit(): void {
  }

  changeData() {
    this.store.dispatch(UserData({ name: this.name, apellido: this.lastname }))
  }

}
