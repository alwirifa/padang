"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import Link from "next/link";

const formSchema = z.object({
  username: z.string(),
  password: z
    .string()
    .min(3, { message: "Masukan Password" })
    .refine((value) => value !== "wrong_password", {
      message: "Password salah",
    }),
});

export default function Home() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    toast.promise(
      axios
        .post(`${process.env.NEXT_PUBLIC_BASE_URL}/v1/login-admin`, values, {
          withCredentials: true,
        })
        .then((response) => {
          localStorage.setItem("token", response.data.data.token);
          document.cookie = `token=${response.data.data.token}; path=/;`;

          router.push("/dashboard");
          console.log("Response:", response.data);
        }),
      {
        loading: "Loading...",
        success: "Login successful!",
        error: "Login failed. Please try again.",
      }
    );
  };

  return (
    <div className="min-h-screen bg-login-banner bg-cover bg-center">
      <div className=" flex flex-col items-center justify-center gap-6 pt-24 ">
        <div>
          <img src="/logo/logo.webp" alt="logo" className="h-64 w-auto" />
        </div>
        <div className="bg-white rounded-2xl flex flex-col gap-6 justify-center p-10 w-full max-w-md">
          <h1 className="w-full text-center text-3xl lg:text-5xl font-medium">
            Log in to SSNI
          </h1>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="w-full flex flex-col gap-4 "
            >
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="relative">
                    <p className="font-semibold text-lg translate-y-2">
                      Username
                    </p>
                    <FormControl>
                      <div className="relative flex items-center">
                        <Input
                          placeholder="Email address"
                          type="email"
                          {...field}
                          className="p-6 bg-[#C6DBE0] placeholder:text-xl placeholder:text-zinc-600 text-primary text-xl rounded-full"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <p className="font-semibold text-lg translate-y-2">
                      Password
                    </p>
                    <FormControl>
                      <div className="relative flex items-center">
                        <Input
                          placeholder="Password"
                          type="password"
                          {...field}
                          className="p-6 bg-[#C6DBE0] placeholder:text-xl placeholder:text-zinc-600 text-primary text-xl rounded-full"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="mt-4 w-full flex gap-2">
                <Link href={'/dashboard'}
                  type="submit"
                  className="w-full py-2 bg-[#C6DBE0] rounded-full text-xl text-center text-black  bg-primary hover:bg-[#C6DBE0]/80 font-medium"
                >
                  Admin
                </Link>

                <button
                  type="submit"
                  className="w-full py-2 bg-[#C6DBE0] rounded-full text-xl text-black bg-primary hover:bg-[#C6DBE0]/80 font-medium"
                >
                  User
                </button>
              </div>
            </form>
          </Form>
        </div>
        <div>
          <p className="text-white text-xl -translate-y-4">
            Copyright © 2024 - YEPJ SIPLah Inventory Asset
          </p>
        </div>
      </div>
    </div>
  );
}
