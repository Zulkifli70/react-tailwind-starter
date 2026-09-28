import { describe, it, expect } from "vitest";
import { hitung } from "./hitung.js";

describe("fungsi tambah", () => {
  it("harus nambah dengan benar", () => {
    expect(hitung(2, 3)).toBe(5);
  });
});
