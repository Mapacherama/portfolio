"use strict";
/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Plugins
var index_ts_1 = require("./plugins/index.ts");
// Components
var App_vue_1 = __importDefault(require("./App.vue"));
require("./assets/global.css");
// Composables
var vue_1 = require("vue");
var app = (0, vue_1.createApp)(App_vue_1.default);
(0, index_ts_1.registerPlugins)(app);
app.mount('#app');
