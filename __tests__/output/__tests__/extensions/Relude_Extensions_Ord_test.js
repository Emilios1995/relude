// Generated by Melange
'use strict';

var Jest = require("../../node_modules/@glennsl/bs-jest/src/jest.js");
var Curry = require("melange.runtime/curry.js");
var Relude__Relude_Int = require("relude/./Relude_Int.js");
var Relude__Relude_Ord = require("relude/./Relude_Ord.js");
var Relude__Relude_List = require("relude/./Relude_List.js");
var Relude__Relude_String = require("relude/./Relude_String.js");
var Relude__Relude_Tuple2 = require("relude/./Relude_Tuple2.js");

function getName(user) {
  return user.name;
}

function getAge(user) {
  return user.age;
}

var EqByName = Curry._1(Relude__Relude_String.EqBy, {
      f: getName
    });

var EqByAge = Curry._1(Relude__Relude_Int.EqBy, {
      f: getAge
    });

function f(user) {
  return [
          user.name,
          user.age
        ];
}

var EqByNameAndAge = Relude__Relude_Tuple2.EqBy(Relude__Relude_String.Eq, Relude__Relude_Int.Eq, {
      f: f
    });

var OrdByName = Curry._1(Relude__Relude_String.OrdBy, {
      f: getName
    });

var OrdByAge = Curry._1(Relude__Relude_Int.OrdBy, {
      f: getAge
    });

function compareByNameThenAge(param, param$1) {
  return Relude__Relude_Ord.by((function (user) {
                return [
                        user.name,
                        user.age
                      ];
              }), (function (param, param$1) {
                return Relude__Relude_Tuple2.compareBy(Relude__Relude_String.compare, Relude__Relude_Int.compare, param, param$1);
              }), param, param$1);
}

var OrdByNameThenAge1_eq = EqByNameAndAge.eq;

var OrdByNameThenAge1 = {
  eq: OrdByNameThenAge1_eq,
  compare: compareByNameThenAge
};

function f$1(user) {
  return [
          user.name,
          user.age
        ];
}

var OrdByNameThenAge2 = Relude__Relude_Tuple2.OrdBy(Relude__Relude_String.Ord, Relude__Relude_Int.Ord, {
      f: f$1
    });

var User = {
  getName: getName,
  getAge: getAge,
  EqByName: EqByName,
  EqByAge: EqByAge,
  EqByNameAndAge: EqByNameAndAge,
  OrdByName: OrdByName,
  OrdByAge: OrdByAge,
  compareByNameThenAge: compareByNameThenAge,
  OrdByNameThenAge1: OrdByNameThenAge1,
  OrdByNameThenAge2: OrdByNameThenAge2
};

var user1 = {
  id: "1",
  name: "Andy",
  age: 100
};

var user2 = {
  id: "2",
  name: "Andy",
  age: 100
};

var user3 = {
  id: "3",
  name: "Andy",
  age: 99
};

var user4 = {
  id: "4",
  name: "Bob",
  age: 100
};

var user5 = {
  id: "5",
  name: "Bob",
  age: 100
};

var user6 = {
  id: "6",
  name: "Bob",
  age: 99
};

var users1_1 = {
  hd: user2,
  tl: {
    hd: user3,
    tl: {
      hd: user4,
      tl: {
        hd: user5,
        tl: {
          hd: user6,
          tl: /* [] */0
        }
      }
    }
  }
};

var users1 = {
  hd: user1,
  tl: users1_1
};

var users2_1 = {
  hd: user1,
  tl: {
    hd: user3,
    tl: {
      hd: user4,
      tl: {
        hd: user6,
        tl: {
          hd: user2,
          tl: /* [] */0
        }
      }
    }
  }
};

var users2 = {
  hd: user5,
  tl: users2_1
};

Jest.describe("Extensions_Ord", (function (param) {
        Jest.test("compareWithConversion", (function (param) {
                var compare = Curry._1(Relude__Relude_String.compareWithConversion, (function (user) {
                        return user.name;
                      }));
                return Jest.Expect.toEqual({
                            hd: user1,
                            tl: {
                              hd: user3,
                              tl: {
                                hd: user2,
                                tl: {
                                  hd: user5,
                                  tl: {
                                    hd: user4,
                                    tl: {
                                      hd: user6,
                                      tl: /* [] */0
                                    }
                                  }
                                }
                              }
                            }
                          }, Jest.Expect.expect(Relude__Relude_List.sortBy(compare, users2)));
              }));
        Jest.test("compareReversed", (function (param) {
                return Jest.Expect.toEqual({
                            hd: "e",
                            tl: {
                              hd: "d",
                              tl: {
                                hd: "c",
                                tl: {
                                  hd: "b",
                                  tl: {
                                    hd: "a",
                                    tl: /* [] */0
                                  }
                                }
                              }
                            }
                          }, Jest.Expect.expect(Relude__Relude_List.sortBy(Relude__Relude_String.compareReversed, {
                                    hd: "c",
                                    tl: {
                                      hd: "b",
                                      tl: {
                                        hd: "a",
                                        tl: {
                                          hd: "e",
                                          tl: {
                                            hd: "d",
                                            tl: /* [] */0
                                          }
                                        }
                                      }
                                    }
                                  })));
              }));
        Jest.test("OrdByName", (function (param) {
                return Jest.Expect.toEqual({
                            hd: user1,
                            tl: {
                              hd: user3,
                              tl: {
                                hd: user2,
                                tl: {
                                  hd: user5,
                                  tl: {
                                    hd: user4,
                                    tl: {
                                      hd: user6,
                                      tl: /* [] */0
                                    }
                                  }
                                }
                              }
                            }
                          }, Jest.Expect.expect(Relude__Relude_List.sort(OrdByName, users2)));
              }));
        Jest.test("OrdByAge", (function (param) {
                return Jest.Expect.toEqual({
                            hd: user3,
                            tl: {
                              hd: user6,
                              tl: {
                                hd: user5,
                                tl: {
                                  hd: user1,
                                  tl: {
                                    hd: user4,
                                    tl: {
                                      hd: user2,
                                      tl: /* [] */0
                                    }
                                  }
                                }
                              }
                            }
                          }, Jest.Expect.expect(Relude__Relude_List.sort(OrdByAge, users2)));
              }));
        Jest.test("OrdByNameThenAge1", (function (param) {
                return Jest.Expect.toEqual({
                            hd: user3,
                            tl: {
                              hd: user1,
                              tl: {
                                hd: user2,
                                tl: {
                                  hd: user6,
                                  tl: {
                                    hd: user5,
                                    tl: {
                                      hd: user4,
                                      tl: /* [] */0
                                    }
                                  }
                                }
                              }
                            }
                          }, Jest.Expect.expect(Relude__Relude_List.sort(OrdByNameThenAge1, users2)));
              }));
        Jest.test("OrdByNameThenAge2", (function (param) {
                return Jest.Expect.toEqual({
                            hd: user3,
                            tl: {
                              hd: user1,
                              tl: {
                                hd: user2,
                                tl: {
                                  hd: user6,
                                  tl: {
                                    hd: user5,
                                    tl: {
                                      hd: user4,
                                      tl: /* [] */0
                                    }
                                  }
                                }
                              }
                            }
                          }, Jest.Expect.expect(Relude__Relude_List.sort(OrdByNameThenAge2, users2)));
              }));
      }));

exports.User = User;
exports.user1 = user1;
exports.user2 = user2;
exports.user3 = user3;
exports.user4 = user4;
exports.user5 = user5;
exports.user6 = user6;
exports.users1 = users1;
exports.users2 = users2;
/* EqByName Not a pure module */