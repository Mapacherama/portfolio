"use strict";
/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerPlugins = registerPlugins;
// Plugins
var vuetify_1 = __importDefault(require("./vuetify"));
var stores_1 = __importDefault(require("../stores"));
var router_1 = __importDefault(require("../router"));
function registerPlugins(app) {
    app
        .use(vuetify_1.default)
        .use(router_1.default)
        .use(stores_1.default);
}
