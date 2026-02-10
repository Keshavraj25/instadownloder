"use client";

import React from "react";

import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import Image from "next/image";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormItem,
  FormLabel,
  FormField,
  FormControl,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Download, Loader2, X, Play, HardDrive, Monitor, Smartphone } from "lucide-react";

import { cn, getPostShortcode, isShortcodePresent } from "@/lib/utils";
import { useGetInstagramPostMutation } from "@/features/react-query/mutations/instagram";
import { HTTP_CODE_ENUM } from "@/features/api/http-codes";

// 5 minutes
const FormValidations = {
  url: {
    REGEX: /^(https?:\/\/)?(www\.)?instagram\.com\/(p|reel)\/.+$/,
  },
};

const useFormSchema = () => {
  const t = useTranslations("components.instagramForm.inputs");

  return z.object({
    url: z
      .string({ required_error: t("url.validation.required") })
      .trim()
      .min(1, {
        message: t("url.validation.required"),
      })
      .regex(FormValidations.url.REGEX, t("url.validation.invalid"))
      .refine(
        (value) => {
          return isShortcodePresent(value);
        },
        { message: t("url.validation.invalid") }
      ),
  });
};

function triggerDownload(videoUrl: string) {
  if (typeof window === "undefined") return;

  const randomTime = new Date().getTime().toString().slice(-8);
  const filename = `gram-grabberz-${randomTime}.mp4`;

  const proxyUrl = new URL("/api/download-proxy", window.location.origin);
  proxyUrl.searchParams.append("url", videoUrl);
  proxyUrl.searchParams.append("filename", filename);

  const link = document.createElement("a");
  link.href = proxyUrl.toString();
  link.target = "_blank";
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function ResultCard({ data, t }: { data: any; t: any }) {
  const media = data.data.xdt_shortcode_media;
  const videoUrl = media.video_url;

  return (
    <div className="w-full mt-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="glass-card rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row gap-8 p-8 border-primary/20 shadow-[0_0_50px_rgba(255,100,200,0.1)]">
        {/* Preview Container */}
        <div className="relative w-full md:w-[350px] aspect-[9/16] rounded-2xl overflow-hidden group">
          <Image
            src={media.thumbnail_src}
            alt="Video Preview"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            unoptimized
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center backdrop-blur-md">
              <Play className="text-white fill-white w-6 h-6 ml-1" />
            </div>
          </div>
          <div className="absolute top-4 left-4 bg-primary/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md">
            HD AVAILABLE
          </div>
        </div>

        {/* Info & Download Container */}
        <div className="flex-1 flex flex-col justify-between py-4">
          <div className="space-y-6 text-start">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2 neon-text">
                {t("result.title")}
              </h3>
              <p className="text-muted-foreground line-clamp-3">
                {media.edge_media_to_caption.edges[0]?.node.text || "Instagram Post"}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button
                onClick={() => triggerDownload(videoUrl)}
                className="h-16 rounded-2xl bg-primary hover:bg-primary/80 text-primary-foreground font-bold text-lg flex items-center gap-3 transition-all active:scale-95 shadow-[0_0_20px_rgba(255,100,200,0.4)]"
              >
                <Monitor className="w-5 h-5" />
                {t("result.downloadButtons.hd1080")}
              </Button>
              <Button
                onClick={() => triggerDownload(videoUrl)}
                variant="outline"
                className="h-16 rounded-2xl border-primary/40 hover:bg-primary/10 text-primary font-bold text-lg flex items-center gap-3 transition-all active:scale-95"
              >
                <Smartphone className="w-5 h-5" />
                {t("result.downloadButtons.hd720")}
              </Button>
              <Button
                onClick={() => triggerDownload(videoUrl)}
                variant="outline"
                className="h-16 rounded-2xl border-white/10 hover:bg-white/5 text-muted-foreground font-medium flex items-center gap-3 transition-all"
              >
                <HardDrive className="w-4 h-4" />
                {t("result.downloadButtons.sd480")}
              </Button>
              <Button
                onClick={() => triggerDownload(videoUrl)}
                variant="outline"
                className="h-16 rounded-2xl border-white/10 hover:bg-white/5 text-muted-foreground font-medium flex items-center gap-3 transition-all"
              >
                <HardDrive className="w-4 h-4" />
                {t("result.downloadButtons.sd360")}
              </Button>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex gap-1 items-center">
              <span className="font-bold text-primary">✔</span> Verified Safe
            </div>
            <div className="flex gap-1 items-center">
              <span className="font-bold text-primary">✔</span> Original Audio
            </div>
            <div className="flex gap-1 items-center">
              <span className="font-bold text-primary">✔</span> No Watermark
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function InstagramForm(props: { className?: string }) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [resultData, setResultData] = React.useState<any>(null);

  const tHome = useTranslations("pages.home");
  const tForm = useTranslations("components.instagramForm");

  const {
    isError,
    isPending,
    mutateAsync: getInstagramPost,
  } = useGetInstagramPostMutation();

  const formSchema = useFormSchema();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: "",
    },
  });

  const errorMessage = form.formState.errors.url?.message;
  const isDisabled = isPending;
  const isShowClearButton = form.watch("url").length > 0;

  function clearUrlField() {
    form.setValue("url", "");
    form.clearErrors("url");
    setResultData(null);
    inputRef.current?.focus();
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (isError) {
      toast.dismiss("toast-error");
    }
    setResultData(null);

    const shortcode = getPostShortcode(values.url);
    if (!shortcode) {
      form.setError("url", { message: tForm("inputs.url.validation.invalid") });
      return;
    }

    try {
      const { data, status } = await getInstagramPost({ shortcode });

      if (status === HTTP_CODE_ENUM.OK && data) {
        if (data.data.xdt_shortcode_media.video_url) {
          setResultData(data);
          toast.success(tForm("toasts.success"), {
            id: "toast-success",
            position: "top-center",
            duration: 1500,
          });
        } else {
          throw new Error("Video URL not found");
        }
      } else {
        const errorKey = (data && "error" in data) ? data.error : "error";
        const errorMessageKey = `serverErrors.${errorKey}`;
        form.setError("url", { message: tForm(errorMessageKey) });
      }
    } catch (error) {
      console.error(error);
      toast.error(tForm("toasts.error"), {
        dismissible: true,
        id: "toast-error",
        position: "top-center",
      });
    }
  }

  React.useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className={cn("w-full space-y-4", props.className)}>
      {errorMessage ? (
        <p className="h-4 text-sm text-red-500 font-medium px-4">{errorMessage}</p>
      ) : (
        <div className="h-4"></div>
      )}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-4 sm:flex-row sm:items-center"
        >
          <FormField
            control={form.control}
            name="url"
            rules={{ required: true }}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="sr-only">
                  {tForm("inputs.url.label")}
                </FormLabel>
                <FormControl>
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-focus-within:opacity-100 transition duration-1000 group-focus-within:duration-200"></div>
                    <Input
                      {...field}
                      type="url"
                      ref={inputRef}
                      minLength={1}
                      maxLength={255}
                      className="relative glass-input h-16 rounded-2xl px-6 text-lg border-white/10"
                      placeholder={tForm("inputs.url.placeholder")}
                    />
                    {isShowClearButton && (
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={clearUrlField}
                        className="absolute top-1/2 right-4 h-8 w-8 -translate-y-1/2 cursor-pointer hover:bg-white/10 rounded-full"
                      >
                        <X className="text-red-500 w-5 h-5" />
                      </Button>
                    )}
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            disabled={isDisabled}
            type="submit"
            className="h-16 px-10 rounded-2xl bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-all active:scale-95 shadow-lg shadow-primary/20"
          >
            {isPending ? (
              <Loader2 className="h-6 w-6 animate-spin" />
            ) : (
              <>
                <Download className="h-6 w-6 mr-2" />
                {tHome("hero.form.button")}
              </>
            )}
          </Button>
        </form>
      </Form>
      <p className="text-muted-foreground text-center text-sm font-medium">
        {tHome("hero.formHint")}
      </p>

      {resultData && <ResultCard data={resultData} t={tHome} />}
    </div>
  );
}
