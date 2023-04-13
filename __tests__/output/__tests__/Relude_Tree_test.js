// Generated by Melange
'use strict';

var Jest = require("../node_modules/@glennsl/bs-jest/src/jest.js");
var Curry = require("melange.runtime/curry.js");
var Bastet__Option = require("bastet/./Option.js");
var Belt_MapString = require("melange.belt/./belt_MapString.js");
var Relude__Relude_Int = require("relude/./Relude_Int.js");
var Relude__Relude_List = require("relude/./Relude_List.js");
var Relude__Relude_Tree = require("relude/./Relude_Tree.js");
var Relude__Relude_String = require("relude/./Relude_String.js");
var Relude__Relude_NonEmpty = require("relude/./Relude_NonEmpty.js");
var Relude__Relude_List_Instances = require("relude/list/Relude_List_Instances.js");
var Relude__Relude_Option_Instances = require("relude/option/Relude_Option_Instances.js");

var testTree1 = Relude__Relude_Tree.make(1, {
      hd: Relude__Relude_Tree.pure(2),
      tl: {
        hd: Relude__Relude_Tree.pure(3),
        tl: /* [] */0
      }
    });

var testTree2 = Relude__Relude_Tree.make(1, {
      hd: Relude__Relude_Tree.make(2, {
            hd: Relude__Relude_Tree.pure(21),
            tl: {
              hd: Relude__Relude_Tree.pure(22),
              tl: /* [] */0
            }
          }),
      tl: {
        hd: Relude__Relude_Tree.make(3, {
              hd: Relude__Relude_Tree.pure(31),
              tl: {
                hd: Relude__Relude_Tree.pure(32),
                tl: /* [] */0
              }
            }),
        tl: {
          hd: Relude__Relude_Tree.make(4, {
                hd: Relude__Relude_Tree.pure(41),
                tl: {
                  hd: Relude__Relude_Tree.pure(42),
                  tl: /* [] */0
                }
              }),
          tl: /* [] */0
        }
      }
    });

Jest.describe("Tree", (function (param) {
        Jest.test("pure", (function (param) {
                return Jest.Expect.toEqual({
                            value: 42,
                            children: /* [] */0
                          }, Jest.Expect.expect(Relude__Relude_Tree.pure(42)));
              }));
        Jest.test("singleton", (function (param) {
                return Jest.Expect.toEqual({
                            value: 42,
                            children: /* [] */0
                          }, Jest.Expect.expect(Relude__Relude_Tree.singleton(42)));
              }));
        Jest.test("isSingleton", (function (param) {
                return Jest.Expect.toEqual([
                            true,
                            false
                          ], Jest.Expect.expect([
                                Relude__Relude_Tree.isSingleton(Relude__Relude_Tree.pure(42)),
                                Relude__Relude_Tree.isSingleton(Relude__Relude_Tree.make(42, {
                                          hd: Relude__Relude_Tree.pure(33),
                                          tl: /* [] */0
                                        }))
                              ]));
              }));
        Jest.test("make", (function (param) {
                return Jest.Expect.toEqual({
                            value: 42,
                            children: {
                              hd: Relude__Relude_Tree.pure(1),
                              tl: {
                                hd: Relude__Relude_Tree.pure(2),
                                tl: /* [] */0
                              }
                            }
                          }, Jest.Expect.expect(Relude__Relude_Tree.make(42, {
                                    hd: Relude__Relude_Tree.pure(1),
                                    tl: {
                                      hd: Relude__Relude_Tree.pure(2),
                                      tl: /* [] */0
                                    }
                                  })));
              }));
        Jest.test("unmake", (function (param) {
                return Jest.Expect.toEqual([
                            1,
                            {
                              hd: Relude__Relude_Tree.pure(2),
                              tl: {
                                hd: Relude__Relude_Tree.pure(3),
                                tl: /* [] */0
                              }
                            }
                          ], Jest.Expect.expect(Relude__Relude_Tree.unmake(testTree1)));
              }));
        Jest.test("fill", (function (param) {
                var m = Belt_MapString.fromArray([[
                        "k",
                        {
                          hd: "a",
                          tl: {
                            hd: "b",
                            tl: /* [] */0
                          }
                        }
                      ]]);
                var lookup = function (key) {
                  return Belt_MapString.getWithDefault(m, key, /* [] */0);
                };
                var actual = Relude__Relude_Tree.fill(lookup, "k");
                var expected = Relude__Relude_Tree.make("k", {
                      hd: Relude__Relude_Tree.pure("a"),
                      tl: {
                        hd: Relude__Relude_Tree.pure("b"),
                        tl: /* [] */0
                      }
                    });
                return Jest.Expect.toEqual(expected, Jest.Expect.expect(actual));
              }));
        Jest.test("getValue", (function (param) {
                return Jest.Expect.toEqual(1, Jest.Expect.expect(Relude__Relude_Tree.getValue(testTree1)));
              }));
        Jest.test("setValue", (function (param) {
                return Jest.Expect.toEqual({
                            value: 100,
                            children: {
                              hd: Relude__Relude_Tree.pure(2),
                              tl: {
                                hd: Relude__Relude_Tree.pure(3),
                                tl: /* [] */0
                              }
                            }
                          }, Jest.Expect.expect(Relude__Relude_Tree.setValue(100, testTree1)));
              }));
        Jest.test("modifyValue", (function (param) {
                return Jest.Expect.toEqual({
                            value: 6,
                            children: {
                              hd: Relude__Relude_Tree.pure(2),
                              tl: {
                                hd: Relude__Relude_Tree.pure(3),
                                tl: /* [] */0
                              }
                            }
                          }, Jest.Expect.expect(Relude__Relude_Tree.modifyValue((function (a) {
                                      return a + 5 | 0;
                                    }), testTree1)));
              }));
        Jest.test("getChildren", (function (param) {
                return Jest.Expect.toEqual({
                            hd: Relude__Relude_Tree.pure(2),
                            tl: {
                              hd: Relude__Relude_Tree.pure(3),
                              tl: /* [] */0
                            }
                          }, Jest.Expect.expect(Relude__Relude_Tree.getChildren(testTree1)));
              }));
        Jest.test("getChildAt", (function (param) {
                return Jest.Expect.toEqual([
                            Relude__Relude_Tree.pure(3),
                            undefined
                          ], Jest.Expect.expect([
                                Relude__Relude_Tree.getChildAt(1, testTree1),
                                Relude__Relude_Tree.getChildAt(2, testTree1)
                              ]));
              }));
        Jest.test("setChildren", (function (param) {
                return Jest.Expect.toEqual({
                            value: 1,
                            children: {
                              hd: Relude__Relude_Tree.pure(42),
                              tl: {
                                hd: Relude__Relude_Tree.pure(43),
                                tl: /* [] */0
                              }
                            }
                          }, Jest.Expect.expect(Relude__Relude_Tree.setChildren({
                                    hd: Relude__Relude_Tree.pure(42),
                                    tl: {
                                      hd: Relude__Relude_Tree.pure(43),
                                      tl: /* [] */0
                                    }
                                  }, testTree1)));
              }));
        Jest.test("modifyChildren", (function (param) {
                return Jest.Expect.toEqual({
                            value: 1,
                            children: {
                              hd: Relude__Relude_Tree.pure(200),
                              tl: {
                                hd: Relude__Relude_Tree.pure(300),
                                tl: /* [] */0
                              }
                            }
                          }, Jest.Expect.expect(Relude__Relude_Tree.modifyChildren((function (children) {
                                      return Relude__Relude_List.map(function (child) {
                                                    return Relude__Relude_Tree.modifyValue((function (a) {
                                                                  return Math.imul(a, 100);
                                                                }), child);
                                                  })(children);
                                    }), testTree1)));
              }));
        Jest.test("prependChild", (function (param) {
                return Jest.Expect.toEqual({
                            value: 1,
                            children: {
                              hd: Relude__Relude_Tree.pure(0),
                              tl: {
                                hd: Relude__Relude_Tree.pure(2),
                                tl: {
                                  hd: Relude__Relude_Tree.pure(3),
                                  tl: /* [] */0
                                }
                              }
                            }
                          }, Jest.Expect.expect(Relude__Relude_Tree.prependChild(Relude__Relude_Tree.pure(0), testTree1)));
              }));
        Jest.test("appendChild", (function (param) {
                return Jest.Expect.toEqual({
                            value: 1,
                            children: {
                              hd: Relude__Relude_Tree.pure(2),
                              tl: {
                                hd: Relude__Relude_Tree.pure(3),
                                tl: {
                                  hd: Relude__Relude_Tree.pure(0),
                                  tl: /* [] */0
                                }
                              }
                            }
                          }, Jest.Expect.expect(Relude__Relude_Tree.appendChild(Relude__Relude_Tree.pure(0), testTree1)));
              }));
        Jest.test("prependChildren", (function (param) {
                return Jest.Expect.toEqual({
                            value: 1,
                            children: {
                              hd: Relude__Relude_Tree.pure(-1),
                              tl: {
                                hd: Relude__Relude_Tree.pure(0),
                                tl: {
                                  hd: Relude__Relude_Tree.pure(2),
                                  tl: {
                                    hd: Relude__Relude_Tree.pure(3),
                                    tl: /* [] */0
                                  }
                                }
                              }
                            }
                          }, Jest.Expect.expect(Relude__Relude_Tree.prependChildren({
                                    hd: Relude__Relude_Tree.pure(-1),
                                    tl: {
                                      hd: Relude__Relude_Tree.pure(0),
                                      tl: /* [] */0
                                    }
                                  }, testTree1)));
              }));
        Jest.test("appendChildren", (function (param) {
                return Jest.Expect.toEqual({
                            value: 1,
                            children: {
                              hd: Relude__Relude_Tree.pure(2),
                              tl: {
                                hd: Relude__Relude_Tree.pure(3),
                                tl: {
                                  hd: Relude__Relude_Tree.pure(-1),
                                  tl: {
                                    hd: Relude__Relude_Tree.pure(0),
                                    tl: /* [] */0
                                  }
                                }
                              }
                            }
                          }, Jest.Expect.expect(Relude__Relude_Tree.appendChildren({
                                    hd: Relude__Relude_Tree.pure(-1),
                                    tl: {
                                      hd: Relude__Relude_Tree.pure(0),
                                      tl: /* [] */0
                                    }
                                  }, testTree1)));
              }));
        Jest.test("toNonEmptyList", (function (param) {
                return Jest.Expect.toEqual(Relude__Relude_NonEmpty.List.make(1, {
                                hd: 2,
                                tl: {
                                  hd: 21,
                                  tl: {
                                    hd: 22,
                                    tl: {
                                      hd: 3,
                                      tl: {
                                        hd: 31,
                                        tl: {
                                          hd: 32,
                                          tl: {
                                            hd: 4,
                                            tl: {
                                              hd: 41,
                                              tl: {
                                                hd: 42,
                                                tl: /* [] */0
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }), Jest.Expect.expect(Relude__Relude_Tree.toNonEmptyList(testTree2)));
              }));
        Jest.test("toNonEmptyArray", (function (param) {
                return Jest.Expect.toEqual(Relude__Relude_NonEmpty.$$Array.make(1, [
                                2,
                                21,
                                22,
                                3,
                                31,
                                32,
                                4,
                                41,
                                42
                              ]), Jest.Expect.expect(Relude__Relude_Tree.toNonEmptyArray(testTree2)));
              }));
        Jest.test("zipWith", (function (param) {
                var tree1 = Relude__Relude_Tree.make(1, {
                      hd: Relude__Relude_Tree.pure(2),
                      tl: {
                        hd: Relude__Relude_Tree.pure(3),
                        tl: {
                          hd: Relude__Relude_Tree.pure(4),
                          tl: /* [] */0
                        }
                      }
                    });
                var tree2 = Relude__Relude_Tree.make(100, {
                      hd: Relude__Relude_Tree.pure(200),
                      tl: {
                        hd: Relude__Relude_Tree.pure(300),
                        tl: /* [] */0
                      }
                    });
                var actual = Relude__Relude_Tree.zipWith((function (prim0, prim1) {
                        return prim0 + prim1 | 0;
                      }), tree1, tree2);
                var expected = Relude__Relude_Tree.make(101, {
                      hd: Relude__Relude_Tree.pure(202),
                      tl: {
                        hd: Relude__Relude_Tree.pure(303),
                        tl: /* [] */0
                      }
                    });
                return Jest.Expect.toEqual(expected, Jest.Expect.expect(actual));
              }));
        Jest.test("zip", (function (param) {
                var tree1 = Relude__Relude_Tree.make(1, {
                      hd: Relude__Relude_Tree.pure(2),
                      tl: {
                        hd: Relude__Relude_Tree.pure(3),
                        tl: {
                          hd: Relude__Relude_Tree.pure(4),
                          tl: /* [] */0
                        }
                      }
                    });
                var tree2 = Relude__Relude_Tree.make(100, {
                      hd: Relude__Relude_Tree.pure(200),
                      tl: {
                        hd: Relude__Relude_Tree.pure(300),
                        tl: /* [] */0
                      }
                    });
                var actual = Relude__Relude_Tree.zip(tree1, tree2);
                var expected = Relude__Relude_Tree.make([
                      1,
                      100
                    ], {
                      hd: Relude__Relude_Tree.pure([
                            2,
                            200
                          ]),
                      tl: {
                        hd: Relude__Relude_Tree.pure([
                              3,
                              300
                            ]),
                        tl: /* [] */0
                      }
                    });
                return Jest.Expect.toEqual(expected, Jest.Expect.expect(actual));
              }));
        Jest.test("map", (function (param) {
                return Jest.Expect.toEqual(Relude__Relude_Tree.make("1", {
                                hd: Relude__Relude_Tree.pure("2"),
                                tl: {
                                  hd: Relude__Relude_Tree.pure("3"),
                                  tl: /* [] */0
                                }
                              }), Jest.Expect.expect(Relude__Relude_Tree.map((function (prim) {
                                      return String(prim);
                                    }), testTree1)));
              }));
        Jest.test("apply", (function (param) {
                var testTreeF = Relude__Relude_Tree.make((function (a) {
                        return Math.imul(a, 10);
                      }), {
                      hd: Relude__Relude_Tree.pure(function (a) {
                            return Math.imul(a, 100);
                          }),
                      tl: {
                        hd: Relude__Relude_Tree.pure(function (a) {
                              return Math.imul(a, 1000);
                            }),
                        tl: /* [] */0
                      }
                    });
                var actual = Relude__Relude_Tree.apply(testTreeF, testTree1);
                var expected = Relude__Relude_Tree.make(10, {
                      hd: Relude__Relude_Tree.make(20, /* [] */0),
                      tl: {
                        hd: Relude__Relude_Tree.make(30, /* [] */0),
                        tl: {
                          hd: Relude__Relude_Tree.make(100, {
                                hd: Relude__Relude_Tree.pure(200),
                                tl: {
                                  hd: Relude__Relude_Tree.pure(300),
                                  tl: /* [] */0
                                }
                              }),
                          tl: {
                            hd: Relude__Relude_Tree.make(1000, {
                                  hd: Relude__Relude_Tree.pure(2000),
                                  tl: {
                                    hd: Relude__Relude_Tree.pure(3000),
                                    tl: /* [] */0
                                  }
                                }),
                            tl: /* [] */0
                          }
                        }
                      }
                    });
                return Jest.Expect.toEqual(expected, Jest.Expect.expect(actual));
              }));
        Jest.test("flatMap", (function (param) {
                var f = function (a) {
                  return Relude__Relude_Tree.make(String(Math.imul(a, 10)), {
                              hd: Relude__Relude_Tree.pure(String(Math.imul(a, 100))),
                              tl: {
                                hd: Relude__Relude_Tree.pure(String(Math.imul(a, 1000))),
                                tl: /* [] */0
                              }
                            });
                };
                var actual = Curry._2(Relude__Relude_Tree.flatMap, f, testTree1);
                var expected = Relude__Relude_Tree.make("10", {
                      hd: Relude__Relude_Tree.pure("100"),
                      tl: {
                        hd: Relude__Relude_Tree.pure("1000"),
                        tl: {
                          hd: Relude__Relude_Tree.make("20", {
                                hd: Relude__Relude_Tree.pure("200"),
                                tl: {
                                  hd: Relude__Relude_Tree.pure("2000"),
                                  tl: /* [] */0
                                }
                              }),
                          tl: {
                            hd: Relude__Relude_Tree.make("30", {
                                  hd: Relude__Relude_Tree.pure("300"),
                                  tl: {
                                    hd: Relude__Relude_Tree.pure("3000"),
                                    tl: /* [] */0
                                  }
                                }),
                            tl: /* [] */0
                          }
                        }
                      }
                    });
                return Jest.Expect.toEqual(expected, Jest.Expect.expect(actual));
              }));
        Jest.test("extend", (function (param) {
                var f = function (tree) {
                  return Relude__Relude_Tree.foldLeft((function (prim0, prim1) {
                                return prim0 + prim1 | 0;
                              }), 0, tree);
                };
                var actual = Relude__Relude_Tree.extend(f, testTree2);
                var expected = Relude__Relude_Tree.make(199, {
                      hd: Relude__Relude_Tree.make(45, {
                            hd: Relude__Relude_Tree.pure(21),
                            tl: {
                              hd: Relude__Relude_Tree.pure(22),
                              tl: /* [] */0
                            }
                          }),
                      tl: {
                        hd: Relude__Relude_Tree.make(66, {
                              hd: Relude__Relude_Tree.pure(31),
                              tl: {
                                hd: Relude__Relude_Tree.pure(32),
                                tl: /* [] */0
                              }
                            }),
                        tl: {
                          hd: Relude__Relude_Tree.make(87, {
                                hd: Relude__Relude_Tree.pure(41),
                                tl: {
                                  hd: Relude__Relude_Tree.pure(42),
                                  tl: /* [] */0
                                }
                              }),
                          tl: /* [] */0
                        }
                      }
                    });
                return Jest.Expect.toEqual(expected, Jest.Expect.expect(actual));
              }));
        Jest.test("foldLeft", (function (param) {
                return Jest.Expect.toEqual({
                            hd: 21,
                            tl: {
                              hd: 22,
                              tl: {
                                hd: 2,
                                tl: {
                                  hd: 31,
                                  tl: {
                                    hd: 32,
                                    tl: {
                                      hd: 3,
                                      tl: {
                                        hd: 41,
                                        tl: {
                                          hd: 42,
                                          tl: {
                                            hd: 4,
                                            tl: {
                                              hd: 1,
                                              tl: /* [] */0
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }, Jest.Expect.expect(Relude__Relude_Tree.foldLeft((function (acc, value) {
                                      return Relude__Relude_List.append(value, acc);
                                    }), /* [] */0, testTree2)));
              }));
        Jest.test("foldRight", (function (param) {
                return Jest.Expect.toEqual({
                            hd: 42,
                            tl: {
                              hd: 41,
                              tl: {
                                hd: 4,
                                tl: {
                                  hd: 32,
                                  tl: {
                                    hd: 31,
                                    tl: {
                                      hd: 3,
                                      tl: {
                                        hd: 22,
                                        tl: {
                                          hd: 21,
                                          tl: {
                                            hd: 2,
                                            tl: {
                                              hd: 1,
                                              tl: /* [] */0
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }, Jest.Expect.expect(Relude__Relude_Tree.foldRight(Relude__Relude_List.append, /* [] */0, testTree2)));
              }));
        Jest.test("Fold_Map", (function (param) {
                var FoldMap = Relude__Relude_Tree.Foldable.Fold_Map(Relude__Relude_String.Monoid);
                var actual = Curry._2(FoldMap.fold_map, (function (a) {
                        return String(a) + "-";
                      }), testTree2);
                return Jest.Expect.toEqual("21-22-2-31-32-3-41-42-4-1-", Jest.Expect.expect(actual));
              }));
        Jest.test("Fold_Map_Any", (function (param) {
                var FoldMapAny = Relude__Relude_Tree.Foldable.Fold_Map_Any(Relude__Relude_List_Instances.MonoidAny);
                var actual = Curry._2(FoldMapAny.fold_map, (function (a) {
                        return {
                                hd: Math.imul(a, 10),
                                tl: {
                                  hd: Math.imul(a, 20),
                                  tl: /* [] */0
                                }
                              };
                      }), testTree1);
                return Jest.Expect.toEqual({
                            hd: 20,
                            tl: {
                              hd: 40,
                              tl: {
                                hd: 30,
                                tl: {
                                  hd: 60,
                                  tl: {
                                    hd: 10,
                                    tl: {
                                      hd: 20,
                                      tl: /* [] */0
                                    }
                                  }
                                }
                              }
                            }
                          }, Jest.Expect.expect(actual));
              }));
        Jest.test("Fold_Map_Plus", (function (param) {
                var FoldMapPlus = Relude__Relude_Tree.Foldable.Fold_Map_Plus(Bastet__Option.Plus);
                var actual = Curry._2(FoldMapPlus.fold_map, (function (a) {
                        if (a % 2 === 0) {
                          return a;
                        }
                        
                      }), testTree1);
                return Jest.Expect.toEqual(2, Jest.Expect.expect(actual));
              }));
        Jest.test("unfold", (function (param) {
                var f = function (a) {
                  if (a < 4) {
                    return [
                            a,
                            a + 1 | 0
                          ];
                  }
                  
                };
                var actual = Relude__Relude_Tree.unfold(f, 0);
                var expected = Relude__Relude_Tree.make(0, {
                      hd: Relude__Relude_Tree.make(1, {
                            hd: Relude__Relude_Tree.make(2, {
                                  hd: Relude__Relude_Tree.make(3, {
                                        hd: Relude__Relude_Tree.make(4, /* [] */0),
                                        tl: /* [] */0
                                      }),
                                  tl: /* [] */0
                                }),
                            tl: /* [] */0
                          }),
                      tl: /* [] */0
                    });
                return Jest.Expect.toEqual(expected, Jest.Expect.expect(actual));
              }));
        Jest.test("traverse", (function (param) {
                var TreeOption = Relude__Relude_Tree.WithApplicative(Relude__Relude_Option_Instances.Applicative);
                var actual = Curry._2(TreeOption.Traversable.traverse, (function (a) {
                        return a + 100 | 0;
                      }), Relude__Relude_Tree.make(1, {
                          hd: Relude__Relude_Tree.pure(2),
                          tl: {
                            hd: Relude__Relude_Tree.pure(3),
                            tl: /* [] */0
                          }
                        }));
                var expected = Relude__Relude_Tree.make(101, {
                      hd: Relude__Relude_Tree.pure(102),
                      tl: {
                        hd: Relude__Relude_Tree.pure(103),
                        tl: /* [] */0
                      }
                    });
                return Jest.Expect.toEqual(expected, Jest.Expect.expect(actual));
              }));
        Jest.test("sequence", (function (param) {
                var TreeOption = Relude__Relude_Tree.WithApplicative(Relude__Relude_Option_Instances.Applicative);
                var actual = Curry._1(TreeOption.Traversable.sequence, Relude__Relude_Tree.make(1, {
                          hd: Relude__Relude_Tree.pure(2),
                          tl: {
                            hd: Relude__Relude_Tree.pure(3),
                            tl: /* [] */0
                          }
                        }));
                var expected = Relude__Relude_Tree.make(1, {
                      hd: Relude__Relude_Tree.pure(2),
                      tl: {
                        hd: Relude__Relude_Tree.pure(3),
                        tl: /* [] */0
                      }
                    });
                return Jest.Expect.toEqual(expected, Jest.Expect.expect(actual));
              }));
        Jest.test("filter", (function (param) {
                var actual = Relude__Relude_Tree.filter((function (a) {
                        return a < 30;
                      }), testTree2);
                var expected = Relude__Relude_Tree.make(1, {
                      hd: Relude__Relude_Tree.make(2, {
                            hd: Relude__Relude_Tree.pure(21),
                            tl: {
                              hd: Relude__Relude_Tree.pure(22),
                              tl: /* [] */0
                            }
                          }),
                      tl: {
                        hd: Relude__Relude_Tree.pure(3),
                        tl: {
                          hd: Relude__Relude_Tree.pure(4),
                          tl: /* [] */0
                        }
                      }
                    });
                return Jest.Expect.toEqual(expected, Jest.Expect.expect(actual));
              }));
        Jest.test("showBy", (function (param) {
                return Jest.Expect.toEqual("Tree 1 [Tree 2 [], Tree 3 []]", Jest.Expect.expect(Relude__Relude_Tree.showBy((function (prim) {
                                      return String(prim);
                                    }), testTree1)));
              }));
        Jest.test("Show", (function (param) {
                var Show = Relude__Relude_Tree.Show(Relude__Relude_Int.Show);
                return Jest.Expect.toEqual("Tree 1 [Tree 2 [], Tree 3 []]", Jest.Expect.expect(Curry._1(Show.show, testTree1)));
              }));
        Jest.test("showPrettyBy", (function (param) {
                var tree = Relude__Relude_Tree.make(1, {
                      hd: Relude__Relude_Tree.make(2, {
                            hd: Relude__Relude_Tree.make(21, {
                                  hd: Relude__Relude_Tree.pure(211),
                                  tl: {
                                    hd: Relude__Relude_Tree.pure(212),
                                    tl: /* [] */0
                                  }
                                }),
                            tl: {
                              hd: Relude__Relude_Tree.make(22, /* [] */0),
                              tl: /* [] */0
                            }
                          }),
                      tl: {
                        hd: Relude__Relude_Tree.make(3, {
                              hd: Relude__Relude_Tree.pure(31),
                              tl: {
                                hd: Relude__Relude_Tree.make(32, {
                                      hd: Relude__Relude_Tree.pure(321),
                                      tl: {
                                        hd: Relude__Relude_Tree.pure(322),
                                        tl: /* [] */0
                                      }
                                    }),
                                tl: /* [] */0
                              }
                            }),
                        tl: /* [] */0
                      }
                    });
                var actual = Relude__Relude_Tree.showPrettyBy((function (prim) {
                        return String(prim);
                      }), tree);
                return Jest.Expect.toEqual("1\n|- 2\n   |- 21\n      |- 211\n      |- 212\n   |- 22\n|- 3\n   |- 31\n   |- 32\n      |- 321\n      |- 322\n", Jest.Expect.expect(actual));
              }));
        Jest.test("eqBy", (function (param) {
                var eq1 = Relude__Relude_Tree.eqBy(Relude__Relude_Int.eq, testTree1, testTree1);
                var eq2 = Relude__Relude_Tree.eqBy(Relude__Relude_Int.eq, testTree1, testTree2);
                var eq3 = Relude__Relude_Tree.eqBy(Relude__Relude_Int.eq, testTree1, Relude__Relude_Tree.pure(42));
                return Jest.Expect.toEqual([
                            true,
                            false,
                            false
                          ], Jest.Expect.expect([
                                eq1,
                                eq2,
                                eq3
                              ]));
              }));
        Jest.test("Eq", (function (param) {
                var Eq = Relude__Relude_Tree.Eq(Relude__Relude_Int.Eq);
                var eq1 = Curry._2(Eq.eq, testTree1, testTree1);
                var eq2 = Curry._2(Eq.eq, testTree1, testTree2);
                var eq3 = Curry._2(Eq.eq, testTree1, Relude__Relude_Tree.pure(42));
                return Jest.Expect.toEqual([
                            true,
                            false,
                            false
                          ], Jest.Expect.expect([
                                eq1,
                                eq2,
                                eq3
                              ]));
              }));
      }));

exports.testTree1 = testTree1;
exports.testTree2 = testTree2;
/* testTree1 Not a pure module */