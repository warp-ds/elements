import { css } from 'lit'; 
export const styles = css`.w-pageindicator {
  display: grid;
  justify-content: center;
  height: max-content;
  pointer-events: none;
}

.w-pageindicator--container {
  display: grid;
  grid-auto-flow: column;
  gap: 8px;
}

.w-pageindicator--dot {
  background-color: var(--w-s-color-background-disabled);
  border-radius: 5px;
  width: 10px;
  height: 10px;
}

.w-pageindicator--selecteddot {
  background-color: var(--w-s-color-icon-selected);
}`;
