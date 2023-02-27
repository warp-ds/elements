import { FabricBroadcast } from './component';

if (!customElements.get('f-broadcast')) {
  customElements.define('f-broadcast', FabricBroadcast);
}

export { FabricBroadcast };
