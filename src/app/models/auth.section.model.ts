//defines which sections there are in the authenticated realm
export default interface AuthSection {
  id: string;
  step: number;
  steps: number;
  title: string;
  color: string;
  nextPageButtonText: string;
  currentPage: string;
  previousPage: string | null;
  nextPage: string;
}
