import { describe, expect, it } from "vitest";
import { parseSettings } from "@/utils/parseSettings";
import type { Setting } from "@prisma/client";

const settingsMock = [
  { key: "theme", value: "dark" },
  { key: "ENABLE_RADARR", value: "false" },
  { key: "RADARR_API_KEY", value: "dfffffffffffffffffffffffff" },
  { key: "RADARR_URL", value: "http://kjkjkjkjkjk" },
  { key: "ENABLE_SONARR", value: "false" },
  { key: "SONARR_API_KEY", value: "jjjjjjjjjjjj" },
  { key: "SONARR_URL", value: "http://kjkjkjkjkjk" },
] as Setting[];

const parsedSettingsMock = {
  theme: "dark",
  ENABLE_RADARR: false,
  RADARR_API_KEY: "dfffffffffffffffffffffffff",
  RADARR_URL: "http://kjkjkjkjkjk",
  ENABLE_SONARR: false,
  SONARR_API_KEY: "jjjjjjjjjjjj",
  SONARR_URL: "http://kjkjkjkjkjk",
};

describe("test settings utils", () => {
  it("Should parse array objects containing key value pairs to an object literal", () => {
    const parsedSettings = parseSettings(settingsMock);
    expect(parsedSettings).toEqual(parsedSettingsMock);
  });
});
