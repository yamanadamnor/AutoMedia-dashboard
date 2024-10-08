import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Image from "next/image";

import { Input } from "@/ui/Input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/Form";
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/Popover";
import type { Service } from "@prisma/client";
import { useRouter } from "next/navigation";
import { ServiceCreateInputSchema } from "@/data/zodSchemas";
import toast from "react-hot-toast";
import { addService, updateService } from "@/data/service";

export const serviceFormSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  image: z.string(),
  href: z.string().url(),
});

export type ServiceFormValues = z.infer<typeof serviceFormSchema>;

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type ServiceFormProps = {
  service?: Service;
  onSubmitCommand: () => void;
};

export const ServiceForm = ({ service, onSubmitCommand }: ServiceFormProps) => {
  const form = useForm<ServiceFormValues>({
    resolver: zodResolver(serviceFormSchema),
    defaultValues: {
      ...service,
      image: "/img/logo-white-muted.svg",
    },
  });

  const router = useRouter();
  const onValidSubmit = async (values: ServiceFormValues) => {
    const parsed = ServiceCreateInputSchema.safeParse(values);

    if (!parsed.success) {
      toast.error("Input validation failed");
    }

    // Check if service is being updated or created
    const response = service
      ? await updateService(service.id, values)
      : await addService(values);

    if (response === false) {
      toast.error("Could not add service");
    }
    onSubmitCommand();
    router.refresh();
    toast.success(`Service ${values.title} added`);
  };

  // TODO: Reimplement autoIcon
  // Credit: https://github.com/ajnart/homarr/blob/dev/src/components/AppShelf/AddAppShelfItem.tsx#L62-L76
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const autoIcon = (name: string) => {
    if (name === undefined || name === "") return null;
    fetch(
      `https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/${name
        .replace(/\s+/g, "-")
        .toLowerCase()
        .replace(/^dash\.$/, "dashdot")}.png`,
    )
      .then((res) => {
        if (res.ok) {
          form.setValue("image", res.url);
        }
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });

    return false;
  };

  return (
    <Form {...form}>
      <Popover>
        <PopoverTrigger>
          <div className="relative mx-auto h-24 w-24 rounded-lg border border-zinc-700 bg-service-card object-contain">
            <Image
              className="p-2"
              src={form.getValues("image")}
              placeholder="blur"
              blurDataURL="/img/logo-white-muted.svg"
              fill
              alt="Service image"
            />
          </div>
        </PopoverTrigger>
        <PopoverContent className="text-center">
          Icon picker coming in a future update
        </PopoverContent>
      </Popover>

      <form
        id="serviceForm"
        className="flex flex-col gap-y-5"
        onSubmit={form.handleSubmit(onValidSubmit)}
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Plex..." {...field} />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Describe the service" {...field} />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl>
                <Input placeholder="Enter your image adress" {...field} />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="href"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Service link</FormLabel>
              <FormControl>
                <Input placeholder="http://example.com" {...field} />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};
