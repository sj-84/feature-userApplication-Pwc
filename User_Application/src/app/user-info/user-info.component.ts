import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { UserDetail } from '../type';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  public userInfo: UserDetail[] = [];

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this._dataService.getUserInformation().subscribe((data) => {
      this.userInfo = data;
      console.log('Data stored');
    })
  }
}
