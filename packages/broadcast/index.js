import { WarpBroadcast } from './component';

if (!customElements.get('f-broadcast')) {
  customElements.define('f-broadcast', WarpBroadcast);
}

export { WarpBroadcast };
