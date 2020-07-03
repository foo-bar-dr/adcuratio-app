import { AuthService } from './../../services/auth.service';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import * as dataSourceJson from '../../../assets/data/sampleData.json';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'age', 'gender', 'email', 'phoneNo'];
  public dataSource;
  public dataJson;
  public rawData = false;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(public router: Router, private authService: AuthService) {
    this.dataJson = JSON.stringify(dataSourceJson.data);
    this.dataSource = new MatTableDataSource(dataSourceJson.data);
   }

   onLogOut() {
      this.authService.logoutUser();
      this.router.navigate(['/']).catch(() => console.log('An error occured'));
   }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}
