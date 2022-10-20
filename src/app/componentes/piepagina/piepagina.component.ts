import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-piepagina',
  templateUrl: './piepagina.component.html',
  styleUrls: ['./piepagina.component.css']
})
export class PiepaginaComponent implements OnInit {

  miPortfolio:any;

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miPortfolio=data;
    } );
  }

}
