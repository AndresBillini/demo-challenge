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
    /* Getting Data */
    this.id = this.route.snapshot.paramMap.get('id');
    this.apiService.getData(this.id).subscribe(info => {
      this.referenceRules = info;
      console.log(info);
    });
    this.apiService.getPokemons().subscribe(info => {
      console.log(info);
    });
  }

  checkValues(typeOfInput: string, values: any) {
    /* Filter of fieldValues */
    if((typeof values === 'string' || values === null) && typeOfInput === 'input'){
      return true;
    } else if(typeOfInput === 'select' && typeof values === 'object' && values !== null) {
      return true;
    }
  }
}
