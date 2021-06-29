import { Component, OnInit } from '@angular/core';
import { BillsService } from '../bills.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit {
  constructor(private billsService: BillsService) {}

  public bills: any;

  ngOnInit(): void {
  }

  
}
