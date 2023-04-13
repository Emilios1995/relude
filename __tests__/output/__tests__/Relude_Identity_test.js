// Generated by Melange
'use strict';

var Jest = require("../node_modules/@glennsl/bs-jest/src/jest.js");
var Relude__Relude_Int = require("relude/./Relude_Int.js");
var Relude__Relude_Identity = require("relude/./Relude_Identity.js");

Jest.describe("Identity", (function (param) {
        Jest.test("pure", (function (param) {
                return Jest.Expect.toEqual(5, Jest.Expect.expect(Relude__Relude_Identity.pure(5)));
              }));
        Jest.test("unwrap with pure", (function (param) {
                return Jest.Expect.toEqual(5, Jest.Expect.expect(Relude__Relude_Identity.unwrap(Relude__Relude_Identity.pure(5))));
              }));
        Jest.test("unwrap without pure", (function (param) {
                return Jest.Expect.toEqual(5, Jest.Expect.expect(Relude__Relude_Identity.unwrap(5)));
              }));
        Jest.test("map", (function (param) {
                return Jest.Expect.toEqual(7, Jest.Expect.expect(Relude__Relude_Identity.map((function (a) {
                                      return a + 2 | 0;
                                    }), 5)));
              }));
        Jest.test("apply", (function (param) {
                return Jest.Expect.toEqual(7, Jest.Expect.expect(Relude__Relude_Identity.apply((function (a) {
                                      return a + 2 | 0;
                                    }), 5)));
              }));
        Jest.test("bind", (function (param) {
                return Jest.Expect.toEqual(7, Jest.Expect.expect(Relude__Relude_Identity.bind(5, (function (a) {
                                      return a + 2 | 0;
                                    }))));
              }));
        Jest.test("show", (function (param) {
                return Jest.Expect.toEqual("5", Jest.Expect.expect(Relude__Relude_Identity.show(Relude__Relude_Int.Show, 5)));
              }));
        Jest.test("eq true", (function (param) {
                return Jest.Expect.toEqual(true, Jest.Expect.expect(Relude__Relude_Identity.eq(Relude__Relude_Int.Eq, 5, 5)));
              }));
        Jest.test("eq false", (function (param) {
                return Jest.Expect.toEqual(false, Jest.Expect.expect(Relude__Relude_Identity.eq(Relude__Relude_Int.Eq, 5, 10)));
              }));
      }));

/*  Not a pure module */