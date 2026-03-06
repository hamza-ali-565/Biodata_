"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const customFieldSchema = z.object({
  id: z.string(),
  label: z.string().min(1, "Label is required").optional(),
  value: z.string().optional(),
});

const biodataSchema = z.object({
  personal: z.object({
    name: z.string().min(1, "Name is required"),
    dateOfBirth: z.string().min(1, "Date of Birth is required"),
    placeOfBirth: z.string().optional().default(""),
    timeOfBirth: z.string().optional().default(""),
    rashi: z.string().optional().default(""),
    nakshatra: z.string().optional().default(""),
    complexion: z.string().optional().default(""),
    height: z.string().optional().default(""),
    gotra: z.string().optional().default(""),
    bachelors: z.string().optional().default(""),
    occupation: z.string().optional().default(""),
    customFields: z.array(customFieldSchema).default([]),
  }),
  family: z.object({
    fatherName: z.string().optional().default(""),
    fatherOccupation: z.string().optional().default(""),
    motherName: z.string().optional().default(""),
    motherOccupation: z.string().optional().default(""),
    siblings: z.string().optional().default(""),
    customFields: z.array(customFieldSchema).default([]),
  }),
  contact: z.object({
    contactPerson: z.string().optional().default(""),
    contactNumber: z
      .string()
      .min(8, "Contact number should have at least 8 digits")
      .optional()
      .or(z.literal("")),
    email: z.string().email("Enter a valid email").optional().or(z.literal("")),
    address: z.string().optional().default(""),
    customFields: z.array(customFieldSchema).default([]),
  }),
  photoDataUrl: z.string().optional().nullable(),
});

const STORAGE_KEY = "biodata-for-marriage:data";

export function BiodataForm() {
  const router = useRouter();
  const [preview, setPreview] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(biodataSchema),
    defaultValues: {
      personal: {
        name: "",
        dateOfBirth: "",
        placeOfBirth: "",
        timeOfBirth: "",
        rashi: "",
        nakshatra: "",
        complexion: "",
        height: "",
        gotra: "",
        bachelors: "",
        occupation: "",
        customFields: [],
      },
      family: {
        fatherName: "",
        fatherOccupation: "",
        motherName: "",
        motherOccupation: "",
        siblings: "",
        customFields: [],
      },
      contact: {
        contactPerson: "",
        contactNumber: "",
        email: "",
        address: "",
        customFields: [],
      },
      photoDataUrl: null,
    },
  });

  const personalCustomFields = watch("personal.customFields");
  const familyCustomFields = watch("family.customFields");
  const contactCustomFields = watch("contact.customFields");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        Object.keys(parsed).forEach((key) => {
          setValue(key, parsed[key], { shouldValidate: false });
        });
        if (parsed.photoDataUrl) {
          setPreview(parsed.photoDataUrl);
        }
      } catch {
        // ignore
      }
    }
  }, [setValue]);

  const handleAddCustomField = (section) => {
    const current = watch(`${section}.customFields`) || [];
    const next = [
      ...current,
      {
        id: `${section}-${Date.now()}`,
        label: "",
        value: "",
      },
    ];
    setValue(`${section}.customFields`, next);
  };

  const handleCustomFieldChange = (section, id, key, value) => {
    const current = watch(`${section}.customFields`) || [];
    const updated = current.map((field) =>
      field.id === id ? { ...field, [key]: value } : field
    );
    setValue(`${section}.customFields`, updated, { shouldValidate: true });
  };

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        // Resize if larger than 600px
        let width = img.width;
        let height = img.height;
        const maxDim = 600;

        if (width > height) {
          if (width > maxDim) {
            height *= maxDim / width;
            width = maxDim;
          }
        } else {
          if (height > maxDim) {
            width *= maxDim / height;
            height = maxDim;
          }
        }

        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);

        // Compress image as JPEG
        const compressedDataUrl = canvas.toDataURL("image/jpeg", 0.7);
        setPreview(compressedDataUrl);
        setValue("photoDataUrl", compressedDataUrl);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  };

  const onSubmit = (values) => {
    const payload = {
      ...values,
      photoDataUrl: values.photoDataUrl || preview,
    };
    if (typeof window !== "undefined") {
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      } catch (err) {
        console.error("Failed to save to localStorage:", err);
      }
    }
    router.push("/templates");
  };

  const renderCustomFields = (fields, section) => {
    if (!fields || !fields.length) return null;
    return (
      <div className="mt-4 space-y-3">
        {fields.map((field) => (
          <div
            key={field.id}
            className="grid gap-3 rounded-xl border border-white/10 bg-slate-950/60 p-3 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)]"
          >
            <div className="space-y-1">
              <label className="block text-xs font-medium text-slate-200">
                Custom field label
              </label>
              <input
                type="text"
                value={field.label}
                onChange={(e) =>
                  handleCustomFieldChange(
                    section,
                    field.id,
                    "label",
                    e.target.value
                  )
                }
                className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 py-2 text-xs text-slate-50 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
                placeholder="e.g. Manglik, Hobbies"
              />
            </div>
            <div className="space-y-1">
              <label className="block text-xs font-medium text-slate-200">
                Value
              </label>
              <input
                type="text"
                value={field.value}
                onChange={(e) =>
                  handleCustomFieldChange(
                    section,
                    field.id,
                    "value",
                    e.target.value
                  )
                }
                className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 py-2 text-xs text-slate-50 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
                placeholder="Enter value"
              />
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section
      id="biodata-form"
      aria-labelledby="biodata-form-heading"
      className="mt-16 scroll-mt-24 rounded-3xl border border-white/5 bg-slate-900/80 px-6 py-10 sm:px-10"
    >
      <div className="max-w-2xl">
        <h2
          id="biodata-form-heading"
          className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl"
        >
          Create your marriage biodata
        </h2>
        <p className="mt-2 text-sm text-slate-300 sm:text-base">
          Fill in the details below. You can always customise or add additional
          information later.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 space-y-10"
        noValidate
      >
        {/* Personal details */}
        <fieldset className="space-y-4 rounded-2xl border border-white/10 bg-slate-950/60 p-5 sm:p-6">
          <legend className="px-2 text-sm font-semibold text-slate-100">
            Personal details
          </legend>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label
                htmlFor="name"
                className="block text-xs font-medium text-slate-200"
              >
                Name<span className="text-rose-400">*</span>
              </label>
              <input
                id="name"
                type="text"
                {...register("personal.name")}
                className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
                placeholder="e.g. Aarav Sharma"
                autoComplete="name"
              />
              {errors.personal?.name && (
                <p className="text-xs text-rose-400">
                  {errors.personal.name.message}
                </p>
              )}
            </div>
            <div className="space-y-1.5">
              <label
                htmlFor="dob"
                className="block text-xs font-medium text-slate-200"
              >
                Date of Birth<span className="text-rose-400">*</span>
              </label>
              <input
                id="dob"
                type="date"
                {...register("personal.dateOfBirth")}
                className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
              />
              {errors.personal?.dateOfBirth && (
                <p className="text-xs text-rose-400">
                  {errors.personal.dateOfBirth.message}
                </p>
              )}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="space-y-1.5">
              <label
                htmlFor="placeOfBirth"
                className="block text-xs font-medium text-slate-200"
              >
                Place of Birth
              </label>
              <input
                id="placeOfBirth"
                type="text"
                {...register("personal.placeOfBirth")}
                className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 py-2 text-xs text-slate-50 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
                placeholder="City, Country"
              />
            </div>
            <div className="space-y-1.5">
              <label
                htmlFor="timeOfBirth"
                className="block text-xs font-medium text-slate-200"
              >
                Time of Birth
              </label>
              <input
                id="timeOfBirth"
                type="time"
                {...register("personal.timeOfBirth")}
                className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 py-2 text-xs text-slate-50 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
              />
            </div>
            <div className="space-y-1.5">
              <label
                htmlFor="complexion"
                className="block text-xs font-medium text-slate-200"
              >
                Complexion
              </label>
              <input
                id="complexion"
                type="text"
                {...register("personal.complexion")}
                className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 py-2 text-xs text-slate-50 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
                placeholder="e.g. Fair, Wheatish"
              />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="space-y-1.5">
              <label
                htmlFor="height"
                className="block text-xs font-medium text-slate-200"
              >
                Height
              </label>
              <input
                id="height"
                type="text"
                {...register("personal.height")}
                className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 py-2 text-xs text-slate-50 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
                placeholder="e.g. 5'9&quot;"
              />
            </div>
            <div className="space-y-1.5">
              <label
                htmlFor="bachelors"
                className="block text-xs font-medium text-slate-200"
              >
                Bachelors
              </label>
              <input
                id="bachelors"
                type="text"
                {...register("personal.bachelors")}
                className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 py-2 text-xs text-slate-50 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
                placeholder="e.g. B.Tech in Computer Science"
              />
            </div>
            <div className="space-y-1.5">
              <label
                htmlFor="occupation"
                className="block text-xs font-medium text-slate-200"
              >
                Works / Occupation
              </label>
              <input
                id="occupation"
                type="text"
                {...register("personal.occupation")}
                className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 py-2 text-xs text-slate-50 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
                placeholder="e.g. Software Engineer at XYZ"
              />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="space-y-1.5">
              <label
                htmlFor="rashi"
                className="block text-xs font-medium text-slate-200"
              >
                Rashi
              </label>
              <input
                id="rashi"
                type="text"
                {...register("personal.rashi")}
                className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 py-2 text-xs text-slate-50 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
              />
            </div>
            <div className="space-y-1.5">
              <label
                htmlFor="nakshatra"
                className="block text-xs font-medium text-slate-200"
              >
                Nakshatra
              </label>
              <input
                id="nakshatra"
                type="text"
                {...register("personal.nakshatra")}
                className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 py-2 text-xs text-slate-50 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
              />
            </div>
            <div className="space-y-1.5">
              <label
                htmlFor="gotra"
                className="block text-xs font-medium text-slate-200"
              >
                Gotra
              </label>
              <input
                id="gotra"
                type="text"
                {...register("personal.gotra")}
                className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 py-2 text-xs text-slate-50 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
              />
            </div>
          </div>
          <button
            type="button"
            onClick={() => handleAddCustomField("personal")}
            className="mt-3 inline-flex items-center rounded-full border border-dashed border-brand-400/70 px-3 py-1.5 text-xs font-medium text-brand-200 hover:border-brand-300 hover:text-brand-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-300"
          >
            + Add custom field
          </button>
          {renderCustomFields(personalCustomFields, "personal")}
        </fieldset>

        {/* Family details */}
        <fieldset className="space-y-4 rounded-2xl border border-white/10 bg-slate-950/60 p-5 sm:p-6">
          <legend className="px-2 text-sm font-semibold text-slate-100">
            Family details
          </legend>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label
                htmlFor="fatherName"
                className="block text-xs font-medium text-slate-200"
              >
                Father&apos;s Name
              </label>
              <input
                id="fatherName"
                type="text"
                {...register("family.fatherName")}
                className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 py-2 text-xs text-slate-50 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
              />
            </div>
            <div className="space-y-1.5">
              <label
                htmlFor="fatherOccupation"
                className="block text-xs font-medium text-slate-200"
              >
                Father&apos;s Occupation
              </label>
              <input
                id="fatherOccupation"
                type="text"
                {...register("family.fatherOccupation")}
                className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 py-2 text-xs text-slate-50 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
              />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label
                htmlFor="motherName"
                className="block text-xs font-medium text-slate-200"
              >
                Mother&apos;s Name
              </label>
              <input
                id="motherName"
                type="text"
                {...register("family.motherName")}
                className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 py-2 text-xs text-slate-50 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
              />
            </div>
            <div className="space-y-1.5">
              <label
                htmlFor="motherOccupation"
                className="block text-xs font-medium text-slate-200"
              >
                Mother&apos;s Occupation
              </label>
              <input
                id="motherOccupation"
                type="text"
                {...register("family.motherOccupation")}
                className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 py-2 text-xs text-slate-50 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <label
              htmlFor="siblings"
              className="block text-xs font-medium text-slate-200"
            >
              Siblings
            </label>
            <textarea
              id="siblings"
              rows={2}
              {...register("family.siblings")}
              className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 py-2 text-xs text-slate-50 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
              placeholder="e.g. 1 younger brother, 1 elder sister"
            />
          </div>
          <button
            type="button"
            onClick={() => handleAddCustomField("family")}
            className="mt-3 inline-flex items-center rounded-full border border-dashed border-brand-400/70 px-3 py-1.5 text-xs font-medium text-brand-200 hover:border-brand-300 hover:text-brand-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-300"
          >
            + Add custom field
          </button>
          {renderCustomFields(familyCustomFields, "family")}
        </fieldset>

        {/* Contact details */}
        <fieldset className="space-y-4 rounded-2xl border border-white/10 bg-slate-950/60 p-5 sm:p-6">
          <legend className="px-2 text-sm font-semibold text-slate-100">
            Contact details
          </legend>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label
                htmlFor="contactPerson"
                className="block text-xs font-medium text-slate-200"
              >
                Contact Person
              </label>
              <input
                id="contactPerson"
                type="text"
                {...register("contact.contactPerson")}
                className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 py-2 text-xs text-slate-50 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
              />
            </div>
            <div className="space-y-1.5">
              <label
                htmlFor="contactNumber"
                className="block text-xs font-medium text-slate-200"
              >
                Contact Number
              </label>
              <input
                id="contactNumber"
                type="tel"
                {...register("contact.contactNumber")}
                className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 py-2 text-xs text-slate-50 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
                placeholder="e.g. +91-9876543210"
              />
              {errors.contact?.contactNumber && (
                <p className="text-xs text-rose-400">
                  {errors.contact.contactNumber.message}
                </p>
              )}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="block text-xs font-medium text-slate-200"
              >
                Email ID
              </label>
              <input
                id="email"
                type="email"
                {...register("contact.email")}
                className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 py-2 text-xs text-slate-50 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
                placeholder="e.g. aarav.family@example.com"
                autoComplete="email"
              />
              {errors.contact?.email && (
                <p className="text-xs text-rose-400">
                  {errors.contact.email.message}
                </p>
              )}
            </div>
            <div className="space-y-1.5">
              <label
                htmlFor="address"
                className="block text-xs font-medium text-slate-200"
              >
                Residential Address
              </label>
              <textarea
                id="address"
                rows={2}
                {...register("contact.address")}
                className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 py-2 text-xs text-slate-50 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
                placeholder="House no, street, city, state, PIN"
              />
            </div>
          </div>
          <button
            type="button"
            onClick={() => handleAddCustomField("contact")}
            className="mt-3 inline-flex items-center rounded-full border border-dashed border-brand-400/70 px-3 py-1.5 text-xs font-medium text-brand-200 hover:border-brand-300 hover:text-brand-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-300"
          >
            + Add custom field
          </button>
          {renderCustomFields(contactCustomFields, "contact")}
        </fieldset>

        {/* Upload photo */}
        <fieldset className="space-y-4 rounded-2xl border border-white/10 bg-slate-950/60 p-5 sm:p-6">
          <legend className="px-2 text-sm font-semibold text-slate-100">
            Upload photo (optional)
          </legend>
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
            <div className="space-y-2">
              <label
                htmlFor="photo"
                className="block text-xs font-medium text-slate-200"
              >
                Profile image
              </label>
              <label
                htmlFor="photo"
                className="flex cursor-pointer items-center justify-between rounded-2xl border border-dashed border-slate-600 bg-slate-900/60 px-4 py-3 text-xs text-slate-200 hover:border-brand-400 hover:bg-slate-900/80"
              >
                <span>
                  <span className="font-semibold">Click to upload</span> or
                  drag &amp; drop
                  <span className="block text-[11px] text-slate-400">
                    PNG, JPG up to 5MB
                  </span>
                </span>
                <span className="rounded-full bg-slate-800 px-3 py-1 text-[11px] text-slate-200">
                  Choose file
                </span>
                <input
                  id="photo"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="sr-only"
                />
              </label>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-medium text-slate-200">
                Preview in biodata
              </p>
              <div className="flex h-32 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/80">
                {preview ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={preview}
                    alt="Selected profile"
                    className="h-full w-full rounded-2xl object-cover"
                  />
                ) : (
                  <p className="px-4 text-center text-[11px] text-slate-400">
                    Your uploaded image will appear here and inside the biodata
                    template preview.
                  </p>
                )}
              </div>
            </div>
          </div>
        </fieldset>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-400 via-brand-500 to-rose-500 px-7 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            {isSubmitting ? "Preparing templates..." : "Create Biodata"}
          </button>
        </div>
      </form>
    </section>
  );
}

