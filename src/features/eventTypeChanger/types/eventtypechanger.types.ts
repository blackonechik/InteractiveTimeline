import { EventTypes } from '../../timeLine';

export interface EventTypeChangerProps {
	currentType: EventTypes;
  onTypeChange: (type: EventTypes) => void;
}