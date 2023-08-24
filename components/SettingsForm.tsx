import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { poster } from "./utils";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Input } from "@/ui/Input";
import { Switch } from "@/ui/Switch";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/Form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/Select";

const apiKeyValue = z
  .string()
  .min(10)
  .optional()
  .transform((e) => (e === "" ? undefined : e));

const urlValue = z
  .string()
  .url()
  .optional()
  .transform((e) => (e === "" ? undefined : e));

export const themeValues = z.union([z.literal("light"), z.literal("dark")]);

export const settingsFormSchema = z
  .object({
    theme: themeValues,
    ENABLE_RADARR: z.boolean(),
    RADARR_API_KEY: apiKeyValue,
    RADARR_URL: urlValue,

    ENABLE_SONARR: z.boolean(),
    SONARR_API_KEY: apiKeyValue,
    SONARR_URL: urlValue,
  })
  .refine(
    (val) => {
      // allows RADARR_API_KEY and RADARR_URL to be optional only when ENABLE_RADARR is false
      if (val.ENABLE_RADARR && (!val.RADARR_URL || !val.RADARR_API_KEY))
        return false;

      // allows SONARR_API_KEY and SONARR_URL to be optional only when ENABLE_SONARR is false
      if (val.ENABLE_SONARR && (!val.SONARR_URL || !val.SONARR_API_KEY))
        return false;
      return true;
    },
    {
      message: "URL and API key is missing",
    },
  );

export type SettingsFormValues = z.infer<typeof settingsFormSchema>;

export const SettingsForm = ({
  settings,
}: {
  settings: SettingsFormValues | undefined;
}) => {
  const form = useForm<SettingsFormValues>({
    resolver: zodResolver(settingsFormSchema),
    defaultValues: { ...settings, theme: "dark" },
  });

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
        className="flex flex-col gap-y-5"
      >
        <FormField
          control={form.control}
          name="theme"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Theme</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select theme"></SelectValue>
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="dark">
                    <div className="flex items-center gap-x-4">
                      <MoonIcon className="h-4 w-4" />
                      <p>dark</p>
                    </div>
                  </SelectItem>
                  <SelectItem value="light">
                    <div className="flex items-center gap-x-4">
                      <SunIcon className="h-4 w-4" />
                      light
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="ENABLE_SONARR"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enable Sonarr integration</FormLabel>
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
        {form.getValues("ENABLE_SONARR") && (
          <>
            <FormField
              control={form.control}
              name="SONARR_API_KEY"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sonarr API key</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your Sonarr API key" {...field} />
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
          </>
        )}

        <FormField
          control={form.control}
          name="ENABLE_RADARR"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Enable Radarr integration</FormLabel>
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

        {form.getValues("ENABLE_RADARR") && (
          <>
            <FormField
              control={form.control}
              name="RADARR_API_KEY"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Radarr API key</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your Radarr API key" {...field} />
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
          </>
        )}
      </form>
    </Form>
  );
};
