export default interface TableColumnTitle {
  title: string;
  property: string;
  hasSubtitle: boolean;
  hasInfoBtn: boolean;
  subtitle?: string;
  infoTitle?: string;
  infoHighlight?: string;
  infoText?: string;
  color?: string;
  tooltipColor?: string;
};
