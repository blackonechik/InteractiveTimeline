export enum EventTypes {
  history = 'history',
  kino = 'kino',
  music = 'music',
  sports = 'sports',
  science = 'science',
  art = 'art',
}

export interface TimeLineProps {
  currentType: EventTypes;
  onTypeChange: (type: EventTypes) => void;
};

export type TimelineType = {
  [K in EventTypes]?: {
    name: string;
    events: Event[];
  };
};

export interface Event {
  year: number;
  description: string;
};