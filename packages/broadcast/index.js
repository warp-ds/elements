import { WarpBroadcast } from './component';

if (!customElements.get('w-broadcast')) {
  customElements.define('w-broadcast', WarpBroadcast);
}

export { WarpBroadcast };
