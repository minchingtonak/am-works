// TODO multiple links
export interface ResumeItem {
  title: string;
  start: number;
  startMonth?: string;
  end?: number | string;
  endMonth?: string;
  description?: string;
  url: string;
  styles?: string;
  role?: string;
  bullets?: string[];
  organization?: string;
}
