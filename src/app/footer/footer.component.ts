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
        "LEV scholengroep West Nederland heeft de innovatievraag ingediend.",
        "De vereniging deelt nu de uitkomsten in de vorm van deze web applicatie.",
        "De verzamelde informatie is via links beschikbaar in de tool."
      ],
      image: "https://firebasestorage.googleapis.com/v0/b/digifoliowijzer.appspot.com/o/logos%20grijs-21.png?alt=media&token=f6c1bc39-9a21-4c5c-a333-96bf37b27956"
    },
    {
      name: "Kennisnet",
      link: "https://www.kennisnet.nl/",
      description: [
        "Kennisnet heeft de toolkit Verkenning Digitaal Portfolio gepubliceerd.",
        "De toolkit is veelvuldig gebruikt tijdens het traject.",
        "De toolkit is prominent aanwezig in de downloadbare links."
      ],
      image: "https://firebasestorage.googleapis.com/v0/b/digifoliowijzer.appspot.com/o/logos%20grijs-22.png?alt=media&token=c0fa0a6c-d2c6-4a55-bd1f-551422ee2f03"

    },
    {
      name: "PO-raad",
      link: "https://www.poraad.nl/",
      description: [
        "De PO-raad organiseert de innovatievragen.",
        "De vereniging verleent ook de subsidie om de uitkomsten mogelijk te maken."
      ],
      image: "https://firebasestorage.googleapis.com/v0/b/digifoliowijzer.appspot.com/o/logos%20grijs-19.png?alt=media&token=ea0f301e-b1e0-4331-851e-eaf12bdb1be4"

    },
    {
      name: "O21- samen doordacht onderwijs digitaliseren",
      link: "https://www.o21.nu/",
      description: [
        "Onderwijsadviesbureau O21 heeft LEV WN scholengroep begeleid tijdens het proces.",
        "Ook heeft het bedrijf een grote hand gehad in het uitdenken en tot stand brengen van deze tool."
      ],
      image: "https://firebasestorage.googleapis.com/v0/b/digifoliowijzer.appspot.com/o/logos%20grijs-20.png?alt=media&token=b8ea767b-e281-4688-9b34-ff3d561a10c7"

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
