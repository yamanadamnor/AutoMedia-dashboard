import { describe, it, expect } from "vitest";
import { settingsFormSchema } from "@/components/SettingsForm";

describe("test settings config", () => {
  it("should allow no Sonarr, Radarr or Jellyfin integrations", () => {
    expect(
      settingsFormSchema.safeParse({
        ENABLE_SONARR: false,
        SONARR_URL: "not valid url",
        SONARR_API_KEY: "api not key",
        ENABLE_RADARR: false,
        RADARR_URL: "not valid url",
        RADARR_API_KEY: "api not key",
        ENABLE_JELLYFIN: false,
        JELLYFIN_URL: "not valid url",
        JELLYFIN_API_KEY: "api not key",
      }).success,
    ).to.equal(true);
  });

  it("should not allow Sonarr integration without API key and URL", () => {
    expect(
      settingsFormSchema.safeParse({
        ENABLE_SONARR: true,
        SONARR_URL: "",
        SONARR_API_KEY: "",
        ENABLE_RADARR: false,
        RADARR_URL: "",
        RADARR_API_KEY: "",
        ENABLE_JELLYFIN: false,
        JELLYFIN_URL: "",
        JELLYFIN_API_KEY: "",
      }).success,
    ).to.equal(false);
  });

  it("should allow Sonarr integration with API key and URL", () => {
    expect(
      settingsFormSchema.safeParse({
        ENABLE_SONARR: true,
        SONARR_URL: "http://testendpoint.test",
        SONARR_API_KEY: "TEST_API_KEY_FOR_TESTING",
        ENABLE_RADARR: false,
        RADARR_URL: "",
        RADARR_API_KEY: "",
        ENABLE_JELLYFIN: false,
        JELLYFIN_URL: "",
        JELLYFIN_API_KEY: "",
      }).success,
    ).to.equal(true);
  });

  it("should not allow Radarr integration without API key and URL", () => {
    expect(
      settingsFormSchema.safeParse({
        ENABLE_SONARR: false,
        SONARR_URL: "",
        SONARR_API_KEY: "",
        ENABLE_RADARR: true,
        RADARR_URL: "",
        RADARR_API_KEY: "",
        ENABLE_JELLYFIN: false,
        JELLYFIN_URL: "",
        JELLYFIN_API_KEY: "",
      }).success,
    ).to.equal(false);
  });
  it("should allow Radarr integration with API key and URL", () => {
    expect(
      settingsFormSchema.safeParse({
        ENABLE_SONARR: false,
        SONARR_URL: "",
        SONARR_API_KEY: "",
        ENABLE_RADARR: true,
        RADARR_URL: "http://testendpoint.test",
        RADARR_API_KEY: "TEST_API_KEY_FOR_TESTING",
        ENABLE_JELLYFIN: false,
        JELLYFIN_URL: "",
        JELLYFIN_API_KEY: "",
      }).success,
    ).to.equal(true);
  });

  it("should not allow Jellyfin integration without API key and URL", () => {
    expect(
      settingsFormSchema.safeParse({
        ENABLE_SONARR: false,
        SONARR_URL: "",
        SONARR_API_KEY: "",
        ENABLE_RADARR: false,
        RADARR_URL: "",
        RADARR_API_KEY: "",
        ENABLE_JELLYFIN: true,
        JELLYFIN_URL: "",
        JELLYFIN_API_KEY: "",
      }).success,
    ).to.equal(false);
  });

  it("should allow Jellyfin integration with API key and URL", () => {
    expect(
      settingsFormSchema.safeParse({
        ENABLE_SONARR: false,
        SONARR_URL: "",
        SONARR_API_KEY: "",
        ENABLE_RADARR: false,
        RADARR_URL: "",
        RADARR_API_KEY: "",
        ENABLE_JELLYFIN: true,
        JELLYFIN_URL: "http://testendpoint.test",
        JELLYFIN_API_KEY: "TEST_API_KEY_FOR_TESTING",
      }).success,
    ).to.equal(true);
  });

  it("should not allow Sonarr, Radarr or Jellyfin integration without API key and URL", () => {
    expect(
      settingsFormSchema.safeParse({
        ENABLE_SONARR: true,
        SONARR_URL: "",
        SONARR_API_KEY: "",
        ENABLE_RADARR: true,
        RADARR_URL: "",
        RADARR_API_KEY: "",
        ENABLE_JELLYFIN: true,
        JELLYFIN_URL: "",
        JELLYFIN_API_KEY: "",
      }).success,
    ).to.equal(false);
  });
});
