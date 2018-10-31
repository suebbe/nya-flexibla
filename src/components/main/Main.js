import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
      <div className="main-content">
        <div className="first-wrapper">
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
            <p>Klicka <b>här</b> för att skicka en intresseanmälan till oss. Vi
            återkopplar till dig snarast. Vi tar hand om intergrationen till ditt
            nuvarande bokföringssystem och sköter om administrationen åt dig vid
            en affär.</p>
           </div>
           <div className="col">
            <h3>Vill du veta mer?</h3>
            <p>Du är varmt välkommen med dina frågor och funderingar. Vår support
            svarar mer är gärna på dina frågor via både telefon och epost.</p>
           </div>
          </div>
        </div>
        <div className="footer-wrapper">
          <div className="row fourth-row">
            <div className="col">
              <h5>Kontakt</h5>
              <p>
                 <i class="fas fa-phone"></i>&emsp;  0771-7350 300 <br/>
                 <i class="fas fa-envelope"></i>&emsp;  info@flexiblakontoret.nu</p>
            </div>
            <div className="col">
              <h5>Öppettider</h5>
              <p> Mån - Fre: &emsp; 08:00 - 16:00 </p>
            </div>
            <div className="col">
            <h5>Sociala Medier</h5>
            <p><a href="#"><i class="fab fa-facebook"></i> </a> &emsp; <a href="#"><i class="fab fa-instagram"></i></a>  </p>
            </div>
            <p>
            <i class="fas fa-home"></i> &emsp; Karlsbodavägen 2
                168 67 Bromma
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
