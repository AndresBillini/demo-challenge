import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from 'src/app/services/api.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.less']
})
export class OrderComponent implements OnInit {
  id: string;
  selectOptionValues: Array<any> = [];
  referenceRules = [];
  constructor(private route: ActivatedRoute, private apiService: ApiserviceService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.apiService.getJson().subscribe(info => {
      this.referenceRules = info;
    });
  }

  checkValues(typeOfInput: string, values: any) {
    
    if((typeof values === 'string' || values === null) && typeOfInput === 'input'){
      return true;
    } else if(typeOfInput === 'select' && typeof values === 'object' && values !== null) {
      return true;
    }
  }
}
