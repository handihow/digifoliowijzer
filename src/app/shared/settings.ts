import TableRow from "../models/table.row.model";
import TableColumnTitle from "../models/table.title.model";

export default class Settings {
  public static ageRows: TableRow[] = [
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

  public static standardTitles: TableColumnTitle[] = [
    {
      title: 'Ontwikkeling',
      property: 'development',
      hasSubtitle: true,
      hasInfoBtn: true,
      color: 'is-info',
      tooltipColor: 'has-tooltip-info',
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
      color: 'is-warning',
      tooltipColor: 'has-tooltip-warning',
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
      color: 'is-link',
      tooltipColor: 'has-tooltip-link',
      subtitle: 'product',
      infoTitle: 'Presentatieportfolio (product)',
      infoHighlight: 'Producten waar een leerling trots op is of goed in is',
      infoText:
        'Presenteert de pronkstukken van een leerling, er is te zien wat een leerling kan en al heeft bereikt, maar niet wat en hoe iets is geleerd.',
    },
  ];

  public static additionalRequirementRows: TableRow[] = [
    {
      title: "Ouders en kinderen kunnen ook thuis inloggen op het digitale portfolio.",
      property: "canLoginAtHome"
    },
    {
      title: "De inhoud van het digitale portfolio is af te drukken.",
      property: "canBePrinted"
    },
    {
      title: "Het digitale portfolio heeft een automatische koppeling met verwerkingssoftware en/of LOVS.",
      property: "isLinkedToStudentTrackingSystem"
    },
    {
      title: "Je kunt zelf  leerlijnen en leerdoelen toevoegen aan het digitale portfolio.",
      property: "canBeAddedStudentProgramsAndGoals"
    },
    {
      title: "Leerlingen kunnen zelf kiezen en plannen aan welke doelen ze werken.",
      property: "studentCanCreatePlanning"
    },
    {
      title: "Je kunt in het digitale portfolio als leerkracht doelen selecteren waar een kind een bepaalde periode aan moet werken.",
      property: "teacherCanSelectGoals"
    },
    {
      title: "In de omgeving van het digitale portfolio kun je (chat)berichten uitwisselen met leerlingen.",
      property: "hasChatFunctionality"
    },
    {
      title: "In de omgeving van het digitale portfolio kun je ook een groepsoverzicht genereren.",
      property: "hasGroupOverviewFunctionality"
    },
    {
      title: "Verslagen van kindgesprekken vormen onderdeel van het digitale portfolio.",
      property: "reportsOfConversationsWithStudentsArePartOfPortfolio"
    },
    {
      title: "Het digitale portfolio fungeert ook als een communicatiemiddel met ouders (voor bijv. het versturen van planningen of nieuwsbrieven).",
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
      width: 20,
      style: { font: { bold: true } },
      numFmt:'@'
    },
    {
      header: 'Beoordeling',
      key: 'evaluation',
      width: 20,
      style: { font: { bold: true } },
      numFmt:'@'
    },
    {
      header: 'Presentatie',
      key: 'presentation',
      width: 20,
      style: { font: { bold: true } },
      numFmt:'@'
    },
  ];

}
