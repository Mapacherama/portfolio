"use strict";
/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Styles
require("@mdi/font/css/materialdesignicons.css");
require("vuetify/styles");
// Composables
var vuetify_1 = require("vuetify");
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
exports.default = (0, vuetify_1.createVuetify)({
    theme: {
        defaultTheme: 'dark',
    },
});
