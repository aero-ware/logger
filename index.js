"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var colors_1 = __importDefault(require("colors"));
var date_fns_1 = require("date-fns");
exports.default = {
    success: function (message) {
        console.log(colors_1.default.green("[logger] " + date_fns_1.format(Date.now(), "hh:mm:ss aa") + " | " + message));
    },
    info: function (message) {
        console.log(colors_1.default.blue("[logger] " + date_fns_1.format(Date.now(), "hh:mm:ss aa") + " | " + message));
    },
    warn: function (message) {
        console.log(colors_1.default.yellow("[logger] " + date_fns_1.format(Date.now(), "hh:mm:ss aa") + " | " + message));
    },
    error: function (message) {
        console.log(colors_1.default.red("[logger] " + date_fns_1.format(Date.now(), "hh:mm:ss aa") + " | " + message));
    },
};
