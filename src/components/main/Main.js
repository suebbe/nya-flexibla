import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
      <div className="main-content-wrapper">
        <div className="row first-row">
         <div className="col center-align">
           <h1>En smidig administrationstjänst för proffshantverkare</h1>
           <p>Att hantera administration parallellt med yrket som hantverkare
           kan vara en utmanande situation. Nu har vi förmånen att kunna erbjuda
           lösningen till våra kunder, en webbaserad abonnemangstjänst i vilken
           du direkt kan registrera allt ifrån inköp av material och arbetstid till
           fakturering och betalning.</p>
         </div>
        </div>
        <div className="row second-row">
         <div className="col">
           <h3>Vad erbjuder lösningen?</h3>
           <p>Kundregister, arbetsorder, inköpt material, tidrapportering och
           fakturering – allt hanteras på samma ställe i tjänsten som heter
           Flexibla Kontoret. Här registrerar du snabbt, smidigt och utan
           krånglig administration, du gör det på plats när du har allt i färskt
           minne, inga lappar behövs längre.</p>
         </div>
         <div className="col">
           <h3>Hur fungerar det?</h3>
           <p>Flexibla Kontoret är molnbaserat. Här ingår bland annat drift, back-up,
           säkerhetslösningar och ett arbetsverktyg för stöd i ditt pågående
           arbete. Du loggar enkelt in via webben.</p>
           <p>
           - Tillgång till vår in-house support.<br/>
           - Synkning med externa bokföringssystem.<br/>
           - Fakturor, tidrapporter och arbetsordrar på ett och samma ställe.<br/>
           - Enkelt att administrera själv.<br/>
           </p>
         </div>
        </div>
        <div className="row third-row">
         <div className="col">
          <h3>Hur blir jag kund hos er?</h3>
          <p>Klicka <b><a href="#">här</a></b> för att skicka en intresseanmälan till oss. Vi
          återkopplar till dig snarast. Vi tar hand om intergrationen till ditt
          nuvarande bokföringssystem och sköter om administrationen åt dig vid
          en affär.</p>
         </div>
         <div className="col">
          <h3>Boka utbildningstillfälle?</h3>
          <p>Du är varmt välkommen att boka in tillfälle för utbildning genom att klicka <a href="#"><b>här</b>.</a></p>
         </div>
        </div>
      </div>
    );
  }
}

export default Main;
