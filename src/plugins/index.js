"use strict";
// src/plugins/index.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerPlugins = registerPlugins;
var vuetify_ts_1 = __importDefault(require("./vuetify.ts"));
var index_ts_1 = __importDefault(require("../stores/index.ts"));
function registerPlugins(app) {
    app.use(vuetify_ts_1.default).use(index_ts_1.default);
}
