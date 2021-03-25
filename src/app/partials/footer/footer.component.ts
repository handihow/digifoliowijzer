import { Component, OnInit } from '@angular/core';
import {
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons';

interface NavBarItem {
  name: string;
  link: string;
  description: string[];
  image: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faExternalLinkAlt = faExternalLinkAlt;
  navBarItems: NavBarItem[] = [
    {
      name: "LEV-WN scholengroep",
      link: "https://levwn.nl/",
      description: [
        "LEV scholengroep West Nederland heeft deze innovatievraag ingediend.",
        "De vereniging deelt nu de uitkomsten in de vorm van deze webapplicatie,",
        "waarmee scholen ook zelf handvatten kunnen maken en ontvangen."
      ],
      image: "https://firebasestorage.googleapis.com/v0/b/digifoliowijzer.appspot.com/o/zw%20-%20lev-wn.png?alt=media&token=c0d6f702-d935-4154-969e-462e5b3ff882"
    },
    {
      name: "Kennisnet",
      link: "https://www.kennisnet.nl/",
      description: [
        "Tijdens het proces zijn verschillende instrumenten gebruikt, waarbij de toolkit",
        "‘Verkenning Digitaal Portfolio’ belangrijke inzichten gaf.",
        "Met deze toolkit breng je in kaart hoe op school leerlingen worden begeleid in",
        "hun leerproces, en op welke momenten een digitaal portfolio hierin kan ondersteunen."
      ],
      image: "https://firebasestorage.googleapis.com/v0/b/digifoliowijzer.appspot.com/o/logos%20grijs-22.png?alt=media&token=c0fa0a6c-d2c6-4a55-bd1f-551422ee2f03"

    },
    {
      name: "PO-raad",
      link: "https://www.poraad.nl/",
      description: [
        "Met behulp van het project 'innovatievragen' ondersteunt de PO-Raad haar leden bij verandervraagstukken",
        "op het gebied van ICT en Anders organiseren."
      ],
      image: "https://firebasestorage.googleapis.com/v0/b/digifoliowijzer.appspot.com/o/zw%20-%20poraad.png?alt=media&token=883e6756-ea3e-4cb9-99f7-e91bff32f225"

    },
    {
      name: "O21- samen doordacht onderwijs digitaliseren",
      link: "https://www.o21.nu/",
      description: [
        "Onderwijsadviesbureau O21 heeft LEV WN scholengroep begeleid tijdens het proces.",
        "Ook heeft het bedrijf een grote hand gehad in het uitdenken en tot stand brengen van deze tool."
      ],
      image: "https://firebasestorage.googleapis.com/v0/b/digifoliowijzer.appspot.com/o/LogoZW.png?alt=media&token=0287201d-bb35-4202-912b-dd3f53fce5a9"

    },
    {
      name: "HandiHow - ontwikkelaars voor het onderwijs",
      link: "https://handihow.com/nl_nl",
      description: [
        "HandiHow heeft deze web applicatie in opdracht geprogrammeerd.",
        "De source code van deze tool is openbaar beschikbaar op GitHub."
      ],
      image: "https://firebasestorage.googleapis.com/v0/b/digifoliowijzer.appspot.com/o/logos%20grijs-18.png?alt=media&token=73008d4f-0ed8-4197-ac65-f65fcfe1f696"

    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
