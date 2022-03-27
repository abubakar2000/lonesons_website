import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  public services: any[] = [
    {
      title: 'Transporation',
      description: '',
      image: ''
    },
    {
      title: 'Warehouse & Distribution',
      description: '',
      image: ''
    },
    {
      title: 'Air Consolidation',
      description: '',
      image: ''
    },
    {
      title: 'Door to Door Delivery',
      description: '',
      image: ''
    },
    {
      title: 'Road Transport',
      description: '',
      image: ''
    },
    {
      title: 'Rail Transport',
      description: '',
      image: ''
    },
    {
      title: 'Air Freight Management',
      description: '',
      image: ''
    },
    {
      title: 'Sea Freight Management',
      description: '',
      image: ''
    },
    {
      title: 'Custom Clearance',
      description: '',
      image: ''
    },
    {
      title: 'LCL Consolidation & De-consolidation',
      description: '',
      image: ''
    },
  ]

  public supplyChainExecution: any[] = [
    {
      title: 'Mobile Handheld'
    },
    {
      title: 'Order Management'
    },
    {
      title: 'Transportation'
    },
    {
      title: 'Revers Logistics'
    },
    {
      title: 'Warehouse Management'
    },
    {
      title: 'Service Parts'
    },
    {
      title: 'Fleet Management'
    },
    {
      title: 'Inventory Management'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

  scroll(){
    window.scroll({
      behavior:'smooth',
      top:window.innerHeight - 300,
      left:0
    })
  }

}
