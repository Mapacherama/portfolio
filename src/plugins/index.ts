// src/plugins/index.ts

import vuetify from './vuetify.ts';
import pinia from '../stores/index.ts';

import type { App } from 'vue';

export function registerPlugins(app: App) {
  app.use(vuetify).use(pinia);
}
