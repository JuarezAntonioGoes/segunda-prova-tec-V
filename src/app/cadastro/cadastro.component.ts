import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BillsService } from '../bills.service';

interface Bill {
  amount: number;
  product: string;
  paymentMethod: string;
  customer: string;
}

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  public bills: Array<Bill> = [];

  constructor(private billsService: BillsService) {}

  ngOnInit(): void {}

  onSubmit(f: NgForm): void {
    this.postItems(f.value);
  }

  getItems(customer: string): void {
    this.billsService.getBills(customer).subscribe(
      (response) => {
        console.log(response);
      },
      (err) => {}
    );
  }

  postItems(data: Bill): void {
    this.billsService.postBills(data).subscribe(
      (response) => {
        this.bills.push(response);
      },
      (err) => {}
    );
  }

  deleteItem(id: number): void {
    this.billsService.deleteBills(id).subscribe(
      (response) => {
        console.log(response);
      },
      (err) => {}
    );
  }
}
