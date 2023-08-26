import { describe, it, expect } from "vitest";
import { settingsFormSchema } from "@/components/SettingsForm";

describe("test settings config", () => {
  it("should allow no Sonarr or Radarr integrations", () => {
    expect(
      settingsFormSchema.safeParse({
        theme: "dark",
        ENABLE_SONARR: false,
        SONARR_URL: undefined,
        SONARR_API_KEY: undefined,
        ENABLE_RADARR: false,
        RADARR_URL: undefined,
        RADARR_API_KEY: undefined,
        ENABLE_JELLYFIN: false,
        JELLYFIN_URL: undefined,
        JELLYFIN_API_KEY: undefined,
      }).success,
    ).to.equal(true);
  });

  it("should not allow Sonarr integration without API key and URL", () => {
    expect(
      settingsFormSchema.safeParse({
        theme: "dark",
        ENABLE_SONARR: true,
        SONARR_URL: undefined,
        SONARR_API_KEY: "",
        ENABLE_RADARR: false,
        RADARR_URL: undefined,
        RADARR_API_KEY: undefined,
        ENABLE_JELLYFIN: false,
        JELLYFIN_URL: undefined,
        JELLYFIN_API_KEY: undefined,
      }).success,
    ).to.equal(false);
  });

  it("should allow Sonarr integration with API key and URL", () => {
    expect(
      settingsFormSchema.safeParse({
        theme: "dark",
        ENABLE_SONARR: true,
        SONARR_URL: "http://testendpoint.test",
        SONARR_API_KEY: "TEST_API_KEY_FOR_TESTING",
        ENABLE_RADARR: false,
        RADARR_URL: undefined,
        RADARR_API_KEY: undefined,
        ENABLE_JELLYFIN: false,
        JELLYFIN_URL: undefined,
        JELLYFIN_API_KEY: undefined,
      }).success,
    ).to.equal(true);
  });

  it("should not allow Radarr integration without API key and URL", () => {
    expect(
      settingsFormSchema.safeParse({
        theme: "dark",
        ENABLE_SONARR: false,
        SONARR_URL: undefined,
        SONARR_API_KEY: undefined,
        ENABLE_RADARR: true,
        RADARR_URL: "",
        RADARR_API_KEY: "",
        ENABLE_JELLYFIN: false,
        JELLYFIN_URL: undefined,
        JELLYFIN_API_KEY: undefined,
      }).success,
    ).to.equal(false);
  });
  it("should allow Radarr integration with API key and URL", () => {
    expect(
      settingsFormSchema.safeParse({
        theme: "dark",
        ENABLE_SONARR: true,
        SONARR_URL: "http://testendpoint.test",
        SONARR_API_KEY: "TEST_API_KEY_FOR_TESTING",
        ENABLE_RADARR: false,
        RADARR_URL: undefined,
        RADARR_API_KEY: undefined,
        ENABLE_JELLYFIN: false,
        JELLYFIN_URL: undefined,
        JELLYFIN_API_KEY: undefined,
      }).success,
    ).to.equal(true);
  });

  it("should not allow sonarr or radarr integration without API key and URL", () => {
    expect(
      settingsFormSchema.safeParse({
        theme: "dark",
        ENABLE_SONARR: true,
        SONARR_URL: undefined,
        SONARR_API_KEY: undefined,
        ENABLE_RADARR: true,
        RADARR_URL: undefined,
        RADARR_API_KEY: undefined,
        ENABLE_JELLYFIN: false,
        JELLYFIN_URL: undefined,
        JELLYFIN_API_KEY: undefined,
      }).success,
    ).to.equal(false);
  });
});
