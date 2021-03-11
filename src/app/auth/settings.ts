import Row from "./moscow.row.model";
import MoscowColumnTitle from "./moscow.title.model";

export default class Settings {
  public static ageRows: Row[] = [
    {
      title: '4-6 jaar',
      property: 'fourToSix',
    },
    {
      title: '7-9 jaar',
      property: 'sevenToNine',
    },
    {
      title: '10-12 jaar',
      property: 'tenToTwelve',
    },
  ];

  public static standardTitles: MoscowColumnTitle[] = [
    {
      title: 'Ontwikkeling',
      property: 'development',
      hasSubtitle: true,
      hasInfoBtn: true,
      subtitle: 'proces',
      infoTitle: 'Ontwikkelingsportfolio (proces)',
      infoHighlight: 'Zichtbaar maken van een ontwikkeling',
      infoText:
        'Een ontwikkelingsportfolio laat zien hoe iemand zich (heeft) ontwikkelt, en laat dus groei zien. De lerende neemt informatie op over de eigen competenties en het functioneren door het systematisch terugblikken. Dit is een goed instrument voor reflectie, het stimuleert ook metacognitieve leeractiviteiten. De lerende moet duidelijk geïnformeerd worden over het niveau van de behaalde en te behalen competenties. Formatief van eigenschappen.',
    },
    {
      title: 'Beoordeling',
      property: 'evaluation',
      hasSubtitle: true,
      hasInfoBtn: true,
      subtitle: 'evaluatie',
      infoTitle: 'Beoordelingsportfolio (evaluatie)',
      infoHighlight:
        'Zichtbaar maken van het eindresultaat van de ontwikkeling',
      infoText:
        'De nadruk bij een beoordelingsportfolio ligt vooral op de evaluatie en beoordeling van hetgeen wat is bereikt, alleen wordt dit niet door de leerling zelf beoordeeld. Het gepresenteerde \'bewijs\' kan zowel summatief als formatief worden ingezet.',
    },
    {
      title: 'Presentatie',
      property: 'presentation',
      hasSubtitle: true,
      hasInfoBtn: true,
      subtitle: 'product',
      infoTitle: 'Presentatieportfolio (product)',
      infoHighlight: 'Producten waar een leerling trots op is of goed in is',
      infoText:
        'Presenteert de pronkstukken van een leerling, er is te zien wat een leerling kan en al heeft bereikt, maar niet wat en hoe iets is geleerd.',
    },
  ];

  public static additionalRequirementRows: Row[] = [
    {
      title: "Wil je dat ouders en kinderen ook thuis kunnen inloggen op het digitale portfolio?",
      property: "canLoginAtHome"
    },
    {
      title: "Wil je dat het digitale portfolio af te drukken is?",
      property: "canBePrinted"
    },
    {
      title: "Wil je dat het digitale portfolio een automatische koppeling heeft met verwerkingssoftware en/of LOVS?",
      property: "isLinkedToStudentTrackingSystem"
    },
    {
      title: "Wil je zelf leerlijnen en leerdoelen kunnen toevoegen aan het digitale portfolio?",
      property: "canBeAddedStudentProgramsAndGoals"
    },
    {
      title: "Wil je dat leerlingen zelf kunnen kiezen en plannen aan welke doelen ze werken?",
      property: "studentCanCreatePlanning"
    },
    {
      title: "Wil je als leerkracht doelen kunnen selecteren voor kinderen in het digitale portfolio waar een kind een bepaalde periode aan moet werken?",
      property: "teacherCanSelectGoals"
    },
    {
      title: "Wil je als leerkracht via het digitale portfolio kunnen chatten met kinderen?",
      property: "hasChatFunctionality"
    },
    {
      title: "Wil je in de omgeving van het digitale portfolio een groepsoverzicht hebben van alle kinderen?",
      property: "hasGroupOverviewFunctionality"
    },
    {
      title: "Wil je dat verslagjes van kindgesprekken onderdeel worden van je digitale portfolio?",
      property: "reportsOfConversationsWithStudentsArePartOfPortfolio"
    },
    {
      title: "Wil je dat het digitale portfolio ook fungeert als een communicatiemiddel met ouders voor bijv. het versturen van planningen of nieuwsbrieven?",
      property: "isCommunicationPlatformWithParents"
    }
  ];

  public static html2canvasOpt = {
      width: 1000,
      height: 1410
  };

  public static sheetColumns = [
    {
      header: 'Ontwikkeling',
      key: 'development',
      width: 30,
      style: { font: { bold: true } },
    },
    {
      header: 'Beoordeling',
      key: 'evaluation',
      width: 30,
      style: { font: { bold: true } },
    },
    {
      header: 'Presentatie',
      key: 'presentation',
      width: 30,
      style: { font: { bold: true } },
    },
  ];

}
