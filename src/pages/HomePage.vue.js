"use strict";
/// <reference types="../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var projects = (0, vue_1.ref)([]);
var selectedProject = (0, vue_1.ref)(null);
var fetchProjects = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, data, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch('https://api.github.com/users/Mapacherama/repos?sort=updated')];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                data = _a.sent();
                projects.value = data
                    .filter(function (repo) { return !repo.fork; })
                    .sort(function (a, b) { return new Date(b.updated_at) - new Date(a.updated_at); })
                    .slice(0, 5);
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.error("Error fetching GitHub repositories:", error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var formatDate = function (dateString) {
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};
var openModal = function (project) {
    selectedProject.value = project;
};
var closeModal = function () {
    selectedProject.value = null;
};
(0, vue_1.onMounted)(fetchProjects);
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_components;
    var __VLS_directives;
    ['profile-image', 'project-card', 'close-btn', 'social-link',];
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        id: ("app"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
        id: ("about"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)(__assign({ class: ("title") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("subtitle") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("profile-container") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ src: ("../assets/profile.jpg"), alt: ("Portrait of Jerôme") }, { class: ("profile-image") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
        id: ("projects"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(__assign({ class: ("title") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("projects-grid") }));
    var _loop_1 = function (project, index) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign(__assign({ onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                __VLS_ctx.openModal(project);
            } }, { key: ((project.id)) }), { class: ("project-card") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
        (project.name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("tech") }));
        (project.language || "Unknown Tech");
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("updated-text") }));
        (__VLS_ctx.formatDate(project.updated_at));
    };
    for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.projects)); _i < _a.length; _i++) {
        var _b = _a[_i], project = _b[0], index = _b[1];
        _loop_1(project, index);
    }
    if (__VLS_ctx.selectedProject) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ onClick: (__VLS_ctx.closeModal) }, { class: ("modal-overlay") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ onClick: function () { } }, { class: ("modal-content") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
        (__VLS_ctx.selectedProject.name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.selectedProject.description || "No description available");
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(__assign({ href: ((__VLS_ctx.selectedProject.html_url)), target: ("_blank") }, { class: ("project-link") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: (__VLS_ctx.closeModal) }, { class: ("close-btn") }));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
        id: ("socials"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(__assign({ class: ("title") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("social-icons") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(__assign({ href: ("https://github.com/Mapacherama"), target: ("_blank") }, { class: ("social-link") }));
    var __VLS_0 = {}.VIcon;
    /** @type { [typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ] } */ ;
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_1), false));
    __VLS_5.slots.default;
    var __VLS_5;
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(__assign({ href: ("https://www.linkedin.com/in/jerome-tesselaar/"), target: ("_blank") }, { class: ("social-link") }));
    var __VLS_6 = {}.VIcon;
    /** @type { [typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ] } */ ;
    // @ts-ignore
    var __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
    var __VLS_8 = __VLS_7.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_7), false));
    __VLS_11.slots.default;
    var __VLS_11;
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(__assign({ href: ("https://www.instagram.com/mapacherama/"), target: ("_blank") }, { class: ("social-link") }));
    var __VLS_12 = {}.VIcon;
    /** @type { [typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ] } */ ;
    // @ts-ignore
    var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
    var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_13), false));
    __VLS_17.slots.default;
    var __VLS_17;
    ['title', 'subtitle', 'profile-container', 'profile-image', 'title', 'projects-grid', 'project-card', 'tech', 'updated-text', 'modal-overlay', 'modal-content', 'project-link', 'close-btn', 'title', 'social-icons', 'social-link', 'social-link', 'social-link',];
    var __VLS_slots;
    var $slots;
    var __VLS_inheritedAttrs;
    var $attrs;
    var __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
var __VLS_self = (await Promise.resolve().then(function () { return __importStar(require('vue')); })).defineComponent({
    setup: function () {
        return {
            projects: projects,
            selectedProject: selectedProject,
            formatDate: formatDate,
            openModal: openModal,
            closeModal: closeModal,
        };
    },
});
exports.default = (await Promise.resolve().then(function () { return __importStar(require('vue')); })).defineComponent({
    setup: function () {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
