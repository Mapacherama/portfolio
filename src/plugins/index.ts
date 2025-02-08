// src/plugins/index.ts

import vuetify from './vuetify';
import pinia from '../stores/index';

import type { App } from 'vue';

export function registerPlugins(app: App) {
  app.use(vuetify).use(pinia);
}
