// Generated by Melange
'use strict';

var Jest = require("../node_modules/@glennsl/bs-jest/src/jest.js");
var Curry = require("melange.runtime/curry.js");
var Relude__Relude_IO = require("relude/./Relude_IO.js");
var Relude__Relude_Int = require("relude/./Relude_Int.js");
var Relude__Relude_ContT = require("relude/./Relude_ContT.js");
var Relude__Relude_Option = require("relude/./Relude_Option.js");
var Relude__Relude_Result = require("relude/./Relude_Result.js");
var Relude__Relude_List_Specializations = require("relude/list/Relude_List_Specializations.js");

var FilePath = {};

var Type = {};

var $$Error = {
  Type: Type
};

var Type$1 = {};

var Unit = {
  Type: Type$1
};

var Cont = Relude__Relude_ContT.Cont.WithResult(Type$1);

function readFileSuccess(filePath, onDone) {
  Curry._1(onDone, {
        TAG: /* Ok */0,
        _0: "Read file: " + filePath._0
      });
}

function writeFileSuccess(_filePath, _content, onDone) {
  Curry._1(onDone, {
        TAG: /* Ok */0,
        _0: undefined
      });
}

function writeFileError(filePath, _content, onDone) {
  Curry._1(onDone, {
        TAG: /* Error */1,
        _0: /* Error */{
          _0: "Failed to write file: " + filePath._0
        }
      });
}

function readFileSuccessCont(filePath) {
  return Curry._1(Cont.make, (function (param) {
                return readFileSuccess(filePath, param);
              }));
}

function readFileError(filePath) {
  return Curry._1(Cont.make, (function (param) {
                return Curry._1(param, {
                            TAG: /* Error */1,
                            _0: /* Error */{
                              _0: "Failed to read file: " + filePath._0
                            }
                          });
              }));
}

function writeFileSuccessCont(filePath, content) {
  return Curry._1(Cont.make, (function (param) {
                return writeFileSuccess(filePath, content, param);
              }));
}

function writeFileErrorCont(filePath, content) {
  return Curry._1(Cont.make, (function (param) {
                return writeFileError(filePath, content, param);
              }));
}

Jest.describe("ContT Identity", (function (param) {
        Jest.testAsync("pure", undefined, (function (onDone) {
                Curry._2(Cont.runContT, (function (param) {
                        
                      }), Curry._2(Cont.Infix.$less$$$great, Curry._2(Cont.Infix.$less$$$great, Curry._1(Cont.pure, 42), (function (value) {
                                return Jest.Expect.toEqual(42, Jest.Expect.expect(value));
                              })), onDone));
              }));
        Jest.testAsync("map (<$$>) success", undefined, (function (onDone) {
                Curry._2(Cont.runContT, (function (param) {
                        
                      }), Curry._2(Cont.Infix.$less$$$great, Curry._2(Cont.Infix.$less$$$great, Curry._1(Cont.make, (function (param) {
                                    return readFileSuccess(/* FilePath */{
                                                _0: "test.txt"
                                              }, param);
                                  })), (function (value) {
                                if (value.TAG === /* Ok */0) {
                                  return Jest.Expect.toEqual("Read file: test.txt", Jest.Expect.expect(value._0));
                                } else {
                                  return Jest.fail("Failed");
                                }
                              })), onDone));
              }));
        Jest.testAsync("bind (>>=) success", undefined, (function (onDone) {
                Curry._2(Cont.runContT, (function (param) {
                        
                      }), Curry._2(Cont.Infix.$less$$$great, Curry._2(Cont.Infix.$great$great$eq, Curry._1(Cont.make, (function (param) {
                                    return readFileSuccess(/* FilePath */{
                                                _0: "test1.txt"
                                              }, param);
                                  })), (function (content1) {
                                if (content1.TAG !== /* Ok */0) {
                                  return Curry._1(Cont.pure, Jest.fail("Failed 1"));
                                }
                                var content1$1 = content1._0;
                                return Curry._2(Cont.Infix.$great$great$eq, Curry._1(Cont.make, (function (param) {
                                                  return readFileSuccess(/* FilePath */{
                                                              _0: "test2.txt"
                                                            }, param);
                                                })), (function (content2) {
                                              if (content2.TAG !== /* Ok */0) {
                                                return Curry._1(Cont.pure, Jest.fail("Failed 2"));
                                              }
                                              var content2$1 = content2._0;
                                              return Curry._2(Cont.Infix.$less$$$great, Curry._1(Cont.make, (function (param) {
                                                                return readFileSuccess(/* FilePath */{
                                                                            _0: "test3.txt"
                                                                          }, param);
                                                              })), (function (content3) {
                                                            if (content3.TAG !== /* Ok */0) {
                                                              return Jest.fail("Failed 3");
                                                            }
                                                            var result = Curry._2(Relude__Relude_List_Specializations.$$String.joinWith, ", ", {
                                                                  hd: content1$1,
                                                                  tl: {
                                                                    hd: content2$1,
                                                                    tl: {
                                                                      hd: content3._0,
                                                                      tl: /* [] */0
                                                                    }
                                                                  }
                                                                });
                                                            return Jest.Expect.toEqual("Read file: test1.txt, Read file: test2.txt, Read file: test3.txt", Jest.Expect.expect(result));
                                                          }));
                                            }));
                              })), onDone));
              }));
      }));

var IOE = Relude__Relude_IO.WithError(Type);

var ContIO = Relude__Relude_ContT.WithMonadAndResult(IOE.Monad, Type$1);

function stringToIntCB(str, onDone) {
  return Relude__Relude_IO.flatMap((function (i) {
                return Curry._1(onDone, {
                            TAG: /* Ok */0,
                            _0: i
                          });
              }), Relude__Relude_Option.fold(Relude__Relude_IO.$$throw(/* Error */{
                      _0: "Failed"
                    }), Relude__Relude_IO.pure, Relude__Relude_Int.fromString(str)));
}

function stringToIntCont(str) {
  return Curry._1(ContIO.make, (function (param) {
                return stringToIntCB(str, param);
              }));
}

function assertIntIO(expected, actual, onDone) {
  Curry._1(onDone, Jest.Expect.toEqual(expected, Jest.Expect.expect(actual)));
  return Relude__Relude_IO.unit;
}

function failIO(onDone) {
  Curry._1(onDone, Jest.fail("Failed"));
  return Relude__Relude_IO.unit;
}

Jest.describe("ContT IO", (function (param) {
        Jest.testAsync("map", undefined, (function (onDone) {
                Relude__Relude_IO.unsafeRunAsync((function (param) {
                        
                      }), Curry._2(ContIO.runContT, (function (i) {
                            if (i.TAG === /* Ok */0) {
                              return assertIntIO(84, i._0, onDone);
                            }
                            Curry._1(onDone, Jest.fail("Failed"));
                            return Relude__Relude_IO.unit;
                          }), Curry._2(ContIO.Infix.$less$$$great, Curry._1(ContIO.make, (function (param) {
                                    return stringToIntCB("42", param);
                                  })), (function (res) {
                                return Relude__Relude_Result.map((function (a) {
                                              return (a << 1);
                                            }), res);
                              }))));
              }));
        Jest.testAsync("Cont.map2", undefined, (function (onDone) {
                Relude__Relude_IO.unsafeRunAsync((function (param) {
                        
                      }), Curry._2(ContIO.runContT, (function (a) {
                            if (a.TAG === /* Ok */0) {
                              return assertIntIO(85, a._0, onDone);
                            }
                            Curry._1(onDone, Jest.fail("Failed"));
                            return Relude__Relude_IO.unit;
                          }), Curry._3(ContIO.map2, (function (res1, res2) {
                                if (res1.TAG === /* Ok */0 && res2.TAG === /* Ok */0) {
                                  return {
                                          TAG: /* Ok */0,
                                          _0: res1._0 + res2._0 | 0
                                        };
                                } else {
                                  return {
                                          TAG: /* Error */1,
                                          _0: /* Error */{
                                            _0: "error"
                                          }
                                        };
                                }
                              }), Curry._1(ContIO.make, (function (param) {
                                    return stringToIntCB("42", param);
                                  })), Curry._1(ContIO.make, (function (param) {
                                    return stringToIntCB("43", param);
                                  })))));
              }));
      }));

exports.FilePath = FilePath;
exports.$$Error = $$Error;
exports.Unit = Unit;
exports.Cont = Cont;
exports.readFileSuccess = readFileSuccess;
exports.writeFileSuccess = writeFileSuccess;
exports.writeFileError = writeFileError;
exports.readFileSuccessCont = readFileSuccessCont;
exports.readFileError = readFileError;
exports.writeFileSuccessCont = writeFileSuccessCont;
exports.writeFileErrorCont = writeFileErrorCont;
exports.IOE = IOE;
exports.ContIO = ContIO;
exports.stringToIntCB = stringToIntCB;
exports.stringToIntCont = stringToIntCont;
exports.assertIntIO = assertIntIO;
exports.failIO = failIO;
/* Cont Not a pure module */