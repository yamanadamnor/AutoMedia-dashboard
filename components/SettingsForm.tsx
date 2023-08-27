import { poster } from "@/utils/poster";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Image from "next/image";

import { Input } from "@/ui/Input";
import { Switch } from "@/ui/Switch";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/Form";
import { AnimatePresence, motion } from "framer-motion";

export const settingsFormSchema = z
  .object({
    ENABLE_RADARR: z.boolean(),
    RADARR_API_KEY: z.string().optional(),
    RADARR_URL: z.string().optional(),

    ENABLE_SONARR: z.boolean(),
    SONARR_API_KEY: z.string().optional(),
    SONARR_URL: z.string().optional(),

    ENABLE_JELLYFIN: z.boolean(),
    JELLYFIN_API_KEY: z.string().optional(),
    JELLYFIN_URL: z.string().optional(),
  })
  .superRefine(
    (
      {
        ENABLE_SONARR,
        SONARR_URL,
        SONARR_API_KEY,
        ENABLE_RADARR,
        RADARR_URL,
        RADARR_API_KEY,
        ENABLE_JELLYFIN,
        JELLYFIN_URL,
        JELLYFIN_API_KEY,
      },
      ctx,
    ) => {
      const apiKeyValidation = z.string().min(10);
      const urlValidation = z.string().url();

      // Validate SONARR_URL and SONARR_API_KEY if ENABLE_SONARR is true
      if (ENABLE_SONARR) {
        const isSonarrUrlValid =
          !!SONARR_URL && urlValidation.safeParse(SONARR_URL).success;
        const isSonarrApiKeyValid =
          !!SONARR_API_KEY &&
          apiKeyValidation.safeParse(SONARR_API_KEY).success;

        if (!isSonarrUrlValid) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Invalid url",
            path: ["SONARR_URL"],
          });
        }

        if (!isSonarrApiKeyValid) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Invalid API key",
            path: ["SONARR_API_KEY"],
          });
        }
      }

      // Validate RADARR_URL and RADARR_API_KEY if ENABLE_RADARR is true
      if (ENABLE_RADARR) {
        const isRadarrUrlValid =
          !!RADARR_URL && urlValidation.safeParse(RADARR_URL).success;
        const isRadarrApiKeyValid =
          !!RADARR_API_KEY &&
          apiKeyValidation.safeParse(RADARR_API_KEY).success;

        if (!isRadarrUrlValid) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Invalid url",
            path: ["RADARR_URL"],
          });
        }

        if (!isRadarrApiKeyValid) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Invalid API key",
            path: ["RADARR_API_KEY"],
          });
        }
      }

      // Validate JELLYFIN_URL and JELLYFIN_API_KEY if ENABLE_JELLYFIN is true
      if (ENABLE_JELLYFIN) {
        const isJellyfinUrlValid =
          !!JELLYFIN_URL && urlValidation.safeParse(JELLYFIN_URL).success;
        const isJellyfinApiKeyValid =
          !!JELLYFIN_API_KEY &&
          apiKeyValidation.safeParse(JELLYFIN_API_KEY).success;

        if (!isJellyfinUrlValid) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Invalid url",
            path: ["JELLYFIN_URL"],
          });
        }

        if (!isJellyfinApiKeyValid) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Invalid API key",
            path: ["JELLYFIN_API_KEY"],
          });
        }
      }
    },
  );

export const test = z.object({});

export type SettingsFormValues = z.infer<typeof settingsFormSchema>;

export const SettingsForm = ({
  settings,
}: {
  settings?: SettingsFormValues;
}) => {
  const initial = { opacity: 0, height: 0 };
  const animate = { opacity: 1, height: "auto" };
  const exit = { opacity: 0, height: 0 };
  const form = useForm<SettingsFormValues>({
    resolver: zodResolver(settingsFormSchema),
    defaultValues: { ...settings },
  });

  const watchAllFields = form.watch();

  const handleSubmit = async (values: SettingsFormValues) => {
    try {
      await poster("/api/settings", values);
      toast.success("Updated settings");
    } catch {
      toast.error("Could not update settings");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        id="settingsForm"
        className="scrollbar flex max-h-[800px] flex-col gap-y-5 overflow-y-scroll"
      >
        <div className="space-y-10 rounded-md border border-zinc-700 px-4 py-3">
          <FormField
            control={form.control}
            name="ENABLE_SONARR"
            render={({ field }) => (
              <FormItem className="flex items-center justify-between">
                <Image
                  src="/img/sonarr.svg"
                  width={30}
                  height={30}
                  alt="Sonarr icon"
                />
                <div>
                  <FormLabel>Enable Sonarr</FormLabel>
                  <FormDescription className="text-zinc-400">
                    Enable Sonarr integration for the calendar widget
                  </FormDescription>
                </div>

                <FormControl>
                  <Switch
                    className="flex"
                    checked={field.value}
                    name={field.name}
                    onCheckedChange={field.onChange}
                    ref={field.ref}
                    onBlur={field.onBlur}
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />
          <AnimatePresence>
            {watchAllFields.ENABLE_SONARR && (
              <motion.div
                className="space-y-4"
                key="sonarr"
                initial={initial}
                animate={animate}
                exit={exit}
              >
                <FormField
                  control={form.control}
                  name="SONARR_API_KEY"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sonarr API key</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your Sonarr API key"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="SONARR_URL"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sonarr url</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your Sonarr url" {...field} />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="space-y-10 rounded-md border border-zinc-700 px-4 py-3">
          <FormField
            control={form.control}
            name="ENABLE_RADARR"
            render={({ field }) => (
              <FormItem className="flex items-center justify-between">
                <Image
                  src="/img/radarr.svg"
                  width={30}
                  height={30}
                  alt="Radarr icon"
                />
                <div>
                  <FormLabel>Enable Radarr</FormLabel>
                  <FormDescription className="text-zinc-400">
                    Enable Radarr integration for the calendar widget
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    className="flex"
                    checked={field.value}
                    name={field.name}
                    onCheckedChange={field.onChange}
                    ref={field.ref}
                    onBlur={field.onBlur}
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />

          <AnimatePresence>
            {watchAllFields.ENABLE_RADARR && (
              <motion.div
                className="space-y-4"
                key="radarr"
                initial={initial}
                animate={animate}
                exit={exit}
              >
                <FormField
                  control={form.control}
                  name="RADARR_API_KEY"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Radarr API key</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your Radarr API key"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="RADARR_URL"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Radarr url</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your Radarr url" {...field} />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="space-y-10 rounded-md border border-zinc-700 px-4 py-3">
          <FormField
            control={form.control}
            name="ENABLE_JELLYFIN"
            render={({ field }) => {
              return (
                <FormItem className="flex justify-between">
                  <Image
                    src="/img/jellyfin.svg"
                    width={30}
                    height={30}
                    alt="Radarr icon"
                  />
                  <div>
                    <FormLabel>Enable Jellyfin</FormLabel>
                    <FormDescription className="text-zinc-400">
                      Enable Jellyfin integration for the calendar widget
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      className="flex"
                      checked={field.value}
                      name={field.name}
                      onCheckedChange={field.onChange}
                      ref={field.ref}
                      onBlur={field.onBlur}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              );
            }}
          />

          <AnimatePresence>
            {watchAllFields.ENABLE_JELLYFIN && (
              <motion.div
                className="space-y-4"
                key="jellyfin"
                initial={initial}
                animate={animate}
                exit={exit}
              >
                <FormField
                  control={form.control}
                  name="JELLYFIN_API_KEY"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Jellyfin API key</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your Radarr API key"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="JELLYFIN_URL"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Jellyfin url</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your Jellyfin url"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </form>
    </Form>
  );
};
