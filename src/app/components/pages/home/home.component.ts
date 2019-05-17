import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/services/api.service';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['name', 'label'];
  dataSource: any;
  messageError: string;
  constructor(private apiService: ApiserviceService, private router: Router) { }

  ngOnInit() {
    this.apiService.getJson().subscribe(info => {
      this.dataSource = info;
    }, (error) => {
      this.messageError = error.message;
    });
  }
  selectRow(row) {
    this.router.navigate(['/order', row.token])
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
