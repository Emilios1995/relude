// Generated by Melange
'use strict';

var Jest = require("../node_modules/@glennsl/bs-jest/src/jest.js");
var Curry = require("melange.runtime/curry.js");
var Relude__Relude_IO = require("relude/./Relude_IO.js");
var Relude__Relude_Result = require("relude/./Relude_Result.js");
var Relude__Relude_ResultT = require("relude/./Relude_ResultT.js");

var Type = {};

var $$Error = {
  Type: Type
};

var IOE = Relude__Relude_IO.WithError({});

var ResultIOE = Relude__Relude_ResultT.WithMonadAndError(IOE.Monad, {});

Jest.describe("ResultT", (function (param) {
        Jest.testAsync("make", undefined, (function (onDone) {
                Relude__Relude_IO.unsafeRunAsync((function (param) {
                        if (param.TAG !== /* Ok */0) {
                          return Curry._1(onDone, Jest.fail("fail"));
                        }
                        var assertion = param._0;
                        if (assertion.TAG === /* Ok */0) {
                          return Curry._1(onDone, assertion._0);
                        } else {
                          return Curry._1(onDone, Jest.fail("fail"));
                        }
                      }), Curry._1(ResultIOE.runResultT, Curry._2(ResultIOE.map, (function (a) {
                                return Jest.Expect.toEqual(42, Jest.Expect.expect(a));
                              }), Curry._1(ResultIOE.make, Curry._1(IOE.pure, Relude__Relude_Result.ok(42))))));
              }));
        Jest.testAsync("withResultT/mapError", undefined, (function (onDone) {
                Relude__Relude_IO.unsafeRunAsync((function (param) {
                        if (param.TAG !== /* Ok */0) {
                          return Curry._1(onDone, Jest.fail("fail"));
                        }
                        var assertion = param._0;
                        if (assertion.TAG === /* Ok */0) {
                          return Curry._1(onDone, Jest.fail("fail"));
                        } else {
                          return Curry._1(onDone, assertion._0);
                        }
                      }), Curry._1(ResultIOE.runResultT, Curry._2(ResultIOE.mapError, (function (e) {
                                return Jest.Expect.toEqual("hihi", Jest.Expect.expect(e.message));
                              }), Curry._2(ResultIOE.withResultT, (function (e) {
                                    return {
                                            message: e.message + e.message
                                          };
                                  }), Curry._1(ResultIOE.make, Relude__Relude_IO.pure({
                                          TAG: /* Error */1,
                                          _0: {
                                            message: "hi"
                                          }
                                        }))))));
              }));
        Jest.testAsync("map", undefined, (function (onDone) {
                Relude__Relude_IO.unsafeRunAsync((function (param) {
                        if (param.TAG !== /* Ok */0) {
                          return Curry._1(onDone, Jest.fail("fail"));
                        }
                        var assertion = param._0;
                        if (assertion.TAG === /* Ok */0) {
                          return Curry._1(onDone, assertion._0);
                        } else {
                          return Curry._1(onDone, Jest.fail("fail"));
                        }
                      }), Curry._1(ResultIOE.runResultT, Curry._2(ResultIOE.map, (function (a) {
                                return Jest.Expect.toEqual(2, Jest.Expect.expect(a));
                              }), Curry._1(ResultIOE.pure, 2))));
              }));
        Jest.testAsync("apply", undefined, (function (onDone) {
                Relude__Relude_IO.unsafeRunAsync((function (param) {
                        if (param.TAG !== /* Ok */0) {
                          return Curry._1(onDone, Jest.fail("fail"));
                        }
                        var assertion = param._0;
                        if (assertion.TAG === /* Ok */0) {
                          return Curry._1(onDone, assertion._0);
                        } else {
                          return Curry._1(onDone, Jest.fail("fail"));
                        }
                      }), Curry._1(ResultIOE.runResultT, Curry._2(ResultIOE.apply, Curry._1(ResultIOE.pure, (function (a) {
                                    return Jest.Expect.toEqual(2, Jest.Expect.expect(a));
                                  })), Curry._1(ResultIOE.pure, 2))));
              }));
        Jest.testAsync("pure", undefined, (function (onDone) {
                Relude__Relude_IO.unsafeRunAsync((function (param) {
                        if (param.TAG !== /* Ok */0) {
                          return Curry._1(onDone, Jest.fail("fail"));
                        }
                        var assertion = param._0;
                        if (assertion.TAG === /* Ok */0) {
                          return Curry._1(onDone, assertion._0);
                        } else {
                          return Curry._1(onDone, Jest.fail("fail"));
                        }
                      }), Curry._1(ResultIOE.runResultT, Curry._2(ResultIOE.map, (function (a) {
                                return Jest.Expect.toEqual(2, Jest.Expect.expect(a));
                              }), Curry._1(ResultIOE.pure, 2))));
              }));
        Jest.testAsync("bind/flatMap", undefined, (function (onDone) {
                Relude__Relude_IO.unsafeRunAsync((function (param) {
                        if (param.TAG !== /* Ok */0) {
                          return Curry._1(onDone, Jest.fail("fail"));
                        }
                        var assertion = param._0;
                        if (assertion.TAG === /* Ok */0) {
                          return Curry._1(onDone, assertion._0);
                        } else {
                          return Curry._1(onDone, Jest.fail("fail"));
                        }
                      }), Curry._1(ResultIOE.runResultT, Curry._2(ResultIOE.flatMap, (function (a) {
                                return Curry._1(ResultIOE.pure, Jest.Expect.toEqual(2, Jest.Expect.expect(a)));
                              }), Curry._1(ResultIOE.pure, 2))));
              }));
        Jest.testAsync("subflatMap", undefined, (function (onDone) {
                Relude__Relude_IO.unsafeRunAsync((function (param) {
                        if (param.TAG !== /* Ok */0) {
                          return Curry._1(onDone, Jest.fail("fail"));
                        }
                        var assertion = param._0;
                        if (assertion.TAG === /* Ok */0) {
                          return Curry._1(onDone, assertion._0);
                        } else {
                          return Curry._1(onDone, Jest.fail("fail"));
                        }
                      }), Curry._1(ResultIOE.runResultT, Curry._2(ResultIOE.map, (function (a) {
                                return Jest.Expect.toEqual(5, Jest.Expect.expect(a));
                              }), Curry._2(ResultIOE.subflatMap, (function (a) {
                                    return Relude__Relude_Result.pure(a + 3 | 0);
                                  }), Curry._1(ResultIOE.pure, 2)))));
              }));
        Jest.testAsync("semiflatMap", undefined, (function (onDone) {
                Relude__Relude_IO.unsafeRunAsync((function (param) {
                        if (param.TAG !== /* Ok */0) {
                          return Curry._1(onDone, Jest.fail("fail"));
                        }
                        var assertion = param._0;
                        if (assertion.TAG === /* Ok */0) {
                          return Curry._1(onDone, assertion._0);
                        } else {
                          return Curry._1(onDone, Jest.fail("fail"));
                        }
                      }), Curry._1(ResultIOE.runResultT, Curry._2(ResultIOE.map, (function (a) {
                                return Jest.Expect.toEqual(5, Jest.Expect.expect(a));
                              }), Curry._2(ResultIOE.semiflatMap, (function (a) {
                                    return Relude__Relude_IO.pure(a + 3 | 0);
                                  }), Curry._1(ResultIOE.pure, 2)))));
              }));
        Jest.testAsync("cond", undefined, (function (onDone) {
                Relude__Relude_IO.unsafeRunAsync((function (param) {
                        if (param.TAG !== /* Ok */0) {
                          return Curry._1(onDone, Jest.fail("fail"));
                        }
                        var assertion = param._0;
                        if (assertion.TAG === /* Ok */0) {
                          return Curry._1(onDone, assertion._0);
                        } else {
                          return Curry._1(onDone, Jest.fail("fail"));
                        }
                      }), Curry._1(ResultIOE.runResultT, Curry._2(ResultIOE.map, (function (a) {
                                return Jest.Expect.toEqual(100, Jest.Expect.expect(a));
                              }), Curry._4(ResultIOE.cond, (function (a) {
                                    return 9000 > a;
                                  }), 100, {
                                  message: "It's over 9000"
                                }, Curry._1(ResultIOE.pure, 500)))));
              }));
        Jest.testAsync("condError", undefined, (function (onDone) {
                Relude__Relude_IO.unsafeRunAsync((function (param) {
                        if (param.TAG !== /* Ok */0) {
                          return Curry._1(onDone, Jest.fail("fail"));
                        }
                        var assertion = param._0;
                        if (assertion.TAG === /* Ok */0) {
                          return Curry._1(onDone, Jest.fail("fail"));
                        } else {
                          return Curry._1(onDone, assertion._0);
                        }
                      }), Curry._1(ResultIOE.runResultT, Curry._2(ResultIOE.mapError, (function (e) {
                                return Jest.Expect.toEqual("It's over 9000", Jest.Expect.expect(e.message));
                              }), Curry._2(ResultIOE.map, (function (a) {
                                    return Jest.Expect.toEqual(100, Jest.Expect.expect(a));
                                  }), Curry._3(ResultIOE.condError, (function (a) {
                                        return 9000 > a;
                                      }), {
                                      message: "It's over 9000"
                                    }, Curry._1(ResultIOE.pure, 10000))))));
              }));
      }));

exports.$$Error = $$Error;
exports.IOE = IOE;
exports.ResultIOE = ResultIOE;
/* IOE Not a pure module */