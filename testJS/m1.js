/**
 * Created by I067382 on 11/2/2017.
 */

"use strict";

let a = 1;

module.exports = {
    get: () => {
        return a;
    },

    set: (input) => {
        a = input;
    }
};