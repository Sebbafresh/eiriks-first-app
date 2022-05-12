import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public lagOppsett: string[] = ["Ronaldo","Eirik", "Messi", "Holding", "Haaland", "Oedegaard", "Xhaka", "Kane", "Saka"];
  

  public ngAfterViewInit(){
  
    
    this.byttInnSpiller("Ronaldo", 1);

    

  }


  // Denne metoden skal sette innbytteren inn på en viss plass i lagOppsett
  public byttInnSpiller(innbytter: string, plassILagoppsett: number){
    // this.lagOppsett.forEach((spillerNavn, plass) => {
    //   if (plassILagoppsett == plass){
    //     this.lagOppsett[plassILagoppsett] = innbytter;
    //   }

    // })

    this.lagOppsett[plassILagoppsett] = innbytter;
      
    console.log("Dette er laget nå: ", this.lagOppsett);

  }

  

  public spillFotballKamp(maalLag1: number, maalLag2: number){
    if(maalLag1 > maalLag2) {
      console.log("Arsenal suger")
    } else {
      console.log("Xhaka player of the year, idiott")
    }
    
  }
 

  
}
