// Generated by Melange
'use strict';

var Jest = require("../node_modules/@glennsl/bs-jest/src/jest.js");
var Curry = require("melange.runtime/curry.js");
var Relude__Relude_Throttle = require("relude/./Relude_Throttle.js");

Jest.describe("Throttle", (function (param) {
        Jest.test("throttle (leading=false)", (function (param) {
                jest.useFakeTimers();
                var runCount = {
                  contents: 0
                };
                var f = function (param) {
                  runCount.contents = runCount.contents + 1 | 0;
                };
                var runCount1 = runCount.contents;
                var throttled = Relude__Relude_Throttle.throttle(200, false, f);
                Curry._1(throttled.f, undefined);
                Curry._1(throttled.f, undefined);
                Curry._1(throttled.f, undefined);
                var runCount2 = runCount.contents;
                jest.advanceTimersByTime(100);
                Curry._1(throttled.f, undefined);
                Curry._1(throttled.f, undefined);
                Curry._1(throttled.f, undefined);
                var runCount3 = runCount.contents;
                jest.advanceTimersByTime(100);
                Curry._1(throttled.f, undefined);
                Curry._1(throttled.f, undefined);
                Curry._1(throttled.f, undefined);
                var runCount4 = runCount.contents;
                return Jest.Expect.toEqual([
                            0,
                            1,
                            1,
                            2
                          ], Jest.Expect.expect([
                                runCount1,
                                runCount2,
                                runCount3,
                                runCount4
                              ]));
              }));
        Jest.test("throttle (leading=true)", (function (param) {
                jest.useFakeTimers();
                var runCount = {
                  contents: 0
                };
                var f = function (param) {
                  runCount.contents = runCount.contents + 1 | 0;
                };
                var runCount1 = runCount.contents;
                var throttled = Relude__Relude_Throttle.throttle(200, true, f);
                Curry._1(throttled.f, undefined);
                Curry._1(throttled.f, undefined);
                Curry._1(throttled.f, undefined);
                var runCount2 = runCount.contents;
                jest.advanceTimersByTime(100);
                Curry._1(throttled.f, undefined);
                Curry._1(throttled.f, undefined);
                Curry._1(throttled.f, undefined);
                var runCount3 = runCount.contents;
                jest.advanceTimersByTime(100);
                Curry._1(throttled.f, undefined);
                Curry._1(throttled.f, undefined);
                Curry._1(throttled.f, undefined);
                var runCount4 = runCount.contents;
                return Jest.Expect.toEqual([
                            0,
                            2,
                            2,
                            3
                          ], Jest.Expect.expect([
                                runCount1,
                                runCount2,
                                runCount3,
                                runCount4
                              ]));
              }));
      }));

/*  Not a pure module */
