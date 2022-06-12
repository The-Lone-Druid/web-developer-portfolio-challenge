import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss'],
})
export class PartnersComponent implements OnInit {
  partners = [
    {
      id: 0,
      name: 'Walmart',
      logo: './assets/images/Logos/Walmart.svg',
    },
    {
      id: 1,
      name: 'JPMorgan',
      logo: './assets/images/Logos/JP Morgan.svg',
    },
    {
      id: 2,
      name: 'VISA',
      logo: './assets/images/Logos/Visa.svg',
    },
    {
      id: 3,
      name: 'tinder',
      logo: './assets/images/Logos/Tinder.svg',
    },
    {
      id: 4,
      name: 'SAMSUNG',
      logo: './assets/images/Logos/Samsung.svg',
    },
    {
      id: 5,
      name: 'verizon',
      logo: './assets/images/Logos/Verizon.svg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
