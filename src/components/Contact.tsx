"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  CloudArrowUp,
  Envelope,
  Info,
  Phone,
} from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

export default function Contact() {
  const [filePreview, setFilePreview] = useState("");

  const formSchema = z.object({
    fullname: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
    street: z.string().min(2, {
      message: "Street must be at least 2 characters.",
    }),
    city: z.string().min(2, {
      message: "City must be at least 2 characters.",
    }),
    state: z.string().min(2, {
      message: "State must be at least 2 characters.",
    }),
    zip: z
      .string()
      .length(6, "Zip must be exactly 6 digits.")
      .regex(/^\d{6}$/, "Zip must contain only digits."),
    phone: z
      .string()
      .length(10, "Phone must be exactly 10 digits.")
      .regex(/^\d{10}$/, "Phone must contain only digits."),
    email: z.string().email("Invalid email address"),
    file: z.any().optional(), // Assuming file handling remains unchanged
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      street: "",
      city: "",
      state: "",
      zip: "",
      phone: "",
      email: "",
      file: null,
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file: File | null = e.target.files?.[0] || null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreview((reader.result as string) || "");
      };
      reader.readAsDataURL(file);
    } else {
      setFilePreview("");
    }
  };
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <>
      <main className="grid grid-cols-1 md:grid-cols-3 mt-24 " id="contact">
        <div className="col-span-2 flex flex-col gap-8 px-6 sm:px-12 md:px-24 lg:px-36">
          <div className="flex flex-col gap-2">
            <p className="text-3xl font-semibold">
              Get in <span className="text-primary font-semibold">touch</span>
            </p>
            <p className="text-sm text-gray-500">
              Interested in partnering with us? we're here to answer all your
              questions and get you started on your Habiiito journey.
            </p>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-4"
            >
              <FormField
                control={form.control}
                name="fullname"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Full Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-wrap gap-4">
                <FormField
                  control={form.control}
                  name="street"
                  render={({ field }) => (
                    <FormItem className="flex-grow">
                      <FormControl>
                        <Input
                          placeholder="Street"
                          className="w-full"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem className="flex-grow">
                      <FormControl>
                        <Input placeholder="City" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-wrap gap-4">
                <FormField
                  control={form.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem className="flex-grow">
                      <FormControl>
                        <Input placeholder="State" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="zip"
                  render={({ field }) => (
                    <FormItem className="flex-grow">
                      <FormControl>
                        <Input placeholder="Postcode" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Phone" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormItem>
                <FormLabel
                  htmlFor="file-upload"
                  className="flex justify-center w-full h-24 px-4 transition bg-white  border-gray-300 border-dashed rounded-md appearance-none cursor-pointer border-2 hover:border-gray-400 focus:outline-none"
                >
                  <div className="flex items-center space-x-2">
                    <CloudArrowUp size={24} />
                    <p className="text-gray-400">Upload additional file</p>
                  </div>
                </FormLabel>
                <FormControl>
                  <input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </FormControl>
                {filePreview && (
                  <div className="mt-4">
                    <img
                      src={filePreview}
                      alt="File Preview"
                      className="max-h-40 w-full object-cover z-10"
                    />
                  </div>
                )}
                <FormDescription className="text-xs">
                  Attach file. File size of your documents should not exceed
                  10MB
                </FormDescription>
                <FormMessage />
              </FormItem>

              <Button type="submit" className="w-full ">
                Submit
              </Button>
            </form>
          </Form>
          <div className="flex flex-wrap justify-around">
            <div className="flex items-center gap-2">
              <Phone size={24} weight="fill" />
              <div>
                <p className="text-sm">Phone</p>
                <p className="text-xs text-primary/75">+91 981 116 2627</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Envelope size={24} weight="fill" />
              <div>
                <p className="text-sm">Email</p>
                <p className="text-xs text-primary/75">info@habiiito.in</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Info size={24} weight="fill" />
              <div>
                <p className="text-sm">Helpdesk</p>
                <p className="text-xs text-primary/75">habiito help</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1"></div>
      </main>
    </>
  );
}
