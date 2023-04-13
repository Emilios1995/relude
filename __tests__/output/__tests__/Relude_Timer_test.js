// Generated by Melange
'use strict';

var Jest = require("../node_modules/@glennsl/bs-jest/src/jest.js");
var Relude__Relude_Timer = require("relude/./Relude_Timer.js");

Jest.describe("Timer", (function (param) {
        Jest.test("delay", (function (param) {
                jest.useFakeTimers();
                var wasRun = {
                  contents: false
                };
                var f = function (param) {
                  wasRun.contents = true;
                };
                var wasRun1 = wasRun.contents;
                Relude__Relude_Timer.delay(50, f);
                jest.advanceTimersByTime(40);
                var wasRun2 = wasRun.contents;
                jest.advanceTimersByTime(40);
                var wasRun3 = wasRun.contents;
                return Jest.Expect.toEqual([
                            false,
                            false,
                            true
                          ], Jest.Expect.expect([
                                wasRun1,
                                wasRun2,
                                wasRun3
                              ]));
              }));
        Jest.test("repeat", (function (param) {
                jest.useFakeTimers();
                var runCount = {
                  contents: 0
                };
                var f = function (param) {
                  runCount.contents = runCount.contents + 1 | 0;
                };
                var runCount1 = runCount.contents;
                Relude__Relude_Timer.repeat(50, f);
                jest.advanceTimersByTime(40);
                var runCount2 = runCount.contents;
                jest.advanceTimersByTime(40);
                var runCount3 = runCount.contents;
                jest.advanceTimersByTime(40);
                var runCount4 = runCount.contents;
                jest.advanceTimersByTime(40);
                var runCount5 = runCount.contents;
                jest.advanceTimersByTime(40);
                var runCount6 = runCount.contents;
                return Jest.Expect.toEqual([
                            0,
                            0,
                            1,
                            2,
                            3,
                            4
                          ], Jest.Expect.expect([
                                runCount1,
                                runCount2,
                                runCount3,
                                runCount4,
                                runCount5,
                                runCount6
                              ]));
              }));
        Jest.test("repeatTimes", (function (param) {
                jest.useFakeTimers();
                var runCount = {
                  contents: 0
                };
                var f = function (param) {
                  runCount.contents = runCount.contents + 1 | 0;
                };
                var runCount1 = runCount.contents;
                Relude__Relude_Timer.repeatTimes(50, 3, f);
                jest.advanceTimersByTime(40);
                var runCount2 = runCount.contents;
                jest.advanceTimersByTime(40);
                var runCount3 = runCount.contents;
                jest.advanceTimersByTime(40);
                var runCount4 = runCount.contents;
                jest.advanceTimersByTime(40);
                var runCount5 = runCount.contents;
                jest.advanceTimersByTime(40);
                var runCount6 = runCount.contents;
                return Jest.Expect.toEqual([
                            0,
                            0,
                            1,
                            2,
                            3,
                            3
                          ], Jest.Expect.expect([
                                runCount1,
                                runCount2,
                                runCount3,
                                runCount4,
                                runCount5,
                                runCount6
                              ]));
              }));
      }));

/*  Not a pure module */
