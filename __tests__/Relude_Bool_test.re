open Jest;
open Expect;

module Bool = Relude.Bool;

describe("Bool", () => {
  test("ifElse true", () =>
    expect(Bool.ifElse(() => "true", () => "false", true))
    |> toEqual("true")
  );

  test("ifElse false", () =>
    expect(Bool.ifElse(() => "true", () => "false", false))
    |> toEqual("false")
  );

  test("inverse", () =>
    expect(Bool.inverse(true)) |> toEqual(false)
  );

  test("inverse", () =>
    expect(Bool.inverse(false)) |> toEqual(true)
  );
});
