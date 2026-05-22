"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AlertTriangle, CheckCircle2, Trash2 } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import NextImage from "next/image";

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

const EMPTY_HIDDEN_FIELDS = { personal: [], family: [], contact: [] };

const REQUIRED_FIELD_KEYS = new Set(["name", "dateOfBirth"]);

function RemoveFieldButton({ onClick, label = "Remove field" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="mt-5 shrink-0 flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-slate-900/60 text-slate-400 transition-all duration-200 hover:scale-105 hover:border-rose-500/40 hover:bg-rose-500/10 hover:text-rose-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/50 sm:mt-6 sm:h-9 sm:w-9"
    >
      <Trash2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden />
    </button>
  );
}

function FieldShell({ fieldKey, section, hiddenFields, onRemove, required, children, className = "" }) {
  const isVisible = !hiddenFields[section]?.includes(fieldKey);

  if (!isVisible) return null;

  return (
    <div className={className}>
      <div className="flex items-start gap-2">
        <div className="min-w-0 flex-1 space-y-1.5">{children}</div>
        <RemoveFieldButton
          label={`Remove ${fieldKey} field`}
          onClick={() => onRemove(section, fieldKey, required)}
        />
      </div>
    </div>
  );
}

export function BiodataForm() {
  const router = useRouter();
  const [preview, setPreview] = useState(null);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
  const [pendingRemove, setPendingRemove] = useState(null);
  const [hiddenFields, setHiddenFields] = useState(EMPTY_HIDDEN_FIELDS);
  const [toastMessage, setToastMessage] = useState("");

  const handleConfirmReset = () => {
    reset();
    setPreview(null);
    setHiddenFields(EMPTY_HIDDEN_FIELDS);
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(STORAGE_KEY);
    }
    setIsResetModalOpen(false);
    setToastMessage("Form reset successfully");
    setTimeout(() => setToastMessage(""), 3000);
  };

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
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

    if (sessionStorage.getItem("scrollToForm") === "true") {
      sessionStorage.removeItem("scrollToForm");
      setTimeout(() => {
        const formElement = document.getElementById("biodata-form");
        if (formElement) {
          formElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    }

    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        Object.keys(parsed).forEach((key) => {
          if (key === "hiddenFields") return;
          setValue(key, parsed[key], { shouldValidate: false });
        });
        if (parsed.photoDataUrl) {
          setPreview(parsed.photoDataUrl);
        }
        if (parsed.hiddenFields) {
          setHiddenFields({
            personal: parsed.hiddenFields.personal || [],
            family: parsed.hiddenFields.family || [],
            contact: parsed.hiddenFields.contact || [],
          });
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

  const handleRemoveCustomField = (section, id) => {
    const current = watch(`${section}.customFields`) || [];
    setValue(
      `${section}.customFields`,
      current.filter((field) => field.id !== id),
      { shouldValidate: true }
    );
  };

  const applyRemoveField = (section, fieldKey) => {
    setHiddenFields((prev) => ({
      ...prev,
      [section]: prev[section].includes(fieldKey)
        ? prev[section]
        : [...prev[section], fieldKey],
    }));
    setValue(`${section}.${fieldKey}`, "", { shouldValidate: true, shouldDirty: true });
  };

  const handleRemoveField = (section, fieldKey, required = false) => {
    if (required || REQUIRED_FIELD_KEYS.has(fieldKey)) {
      setPendingRemove({ section, fieldKey });
      setIsRemoveModalOpen(true);
      return;
    }
    applyRemoveField(section, fieldKey);
  };

  const handleConfirmRemoveField = () => {
    if (pendingRemove) {
      applyRemoveField(pendingRemove.section, pendingRemove.fieldKey);
    }
    setPendingRemove(null);
    setIsRemoveModalOpen(false);
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
      hiddenFields,
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
            className="premium-card-static relative grid gap-3 p-3 pr-12 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] sm:pr-3"
          >
            <button
                type="button"
                onClick={() => handleRemoveCustomField(section, field.id)}
                aria-label="Remove custom field"
                className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-slate-900/60 text-slate-400 transition-all duration-200 hover:scale-105 hover:border-rose-500/40 hover:bg-rose-500/10 hover:text-rose-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/50 sm:right-3 sm:top-3"
              >
                <Trash2 className="h-3.5 w-3.5" aria-hidden />
              </button>
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
      className="premium-section mt-16 scroll-mt-24 px-6 py-10 sm:px-10"
    >
      <div className="max-w-2xl">
        <h2
          id="biodata-form-heading"
          className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl"
        >
          Let’s Create Your Marriage Biodata
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
        <fieldset className="premium-card-static space-y-4 p-5 sm:p-6">
          <legend className="px-2 text-sm font-semibold text-slate-100">
            Personal details
          </legend>
          <div className="grid gap-4 sm:grid-cols-2">
            <FieldShell
              section="personal"
              fieldKey="name"
              hiddenFields={hiddenFields}
              onRemove={handleRemoveField}
              required
            >
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
            </FieldShell>
            <FieldShell
              section="personal"
              fieldKey="dateOfBirth"
              hiddenFields={hiddenFields}
              onRemove={handleRemoveField}
              required
            >
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
            </FieldShell>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <FieldShell section="personal" fieldKey="placeOfBirth" hiddenFields={hiddenFields} onRemove={handleRemoveField}>
              <label htmlFor="placeOfBirth" className="block text-xs font-medium text-slate-200">Place of Birth</label>
              <input id="placeOfBirth" type="text" {...register("personal.placeOfBirth")} className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 py-2 text-xs text-slate-50 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400" placeholder="City, Country" />
            </FieldShell>
            <FieldShell section="personal" fieldKey="timeOfBirth" hiddenFields={hiddenFields} onRemove={handleRemoveField}>
              <label htmlFor="timeOfBirth" className="block text-xs font-medium text-slate-200">Time of Birth</label>
              <input id="timeOfBirth" type="time" {...register("personal.timeOfBirth")} className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 py-2 text-xs text-slate-50 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400" />
            </FieldShell>
            <FieldShell section="personal" fieldKey="complexion" hiddenFields={hiddenFields} onRemove={handleRemoveField}>
              <label htmlFor="complexion" className="block text-xs font-medium text-slate-200">Complexion</label>
              <input id="complexion" type="text" {...register("personal.complexion")} className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 py-2 text-xs text-slate-50 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400" placeholder="e.g. Fair, Wheatish" />
            </FieldShell>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <FieldShell section="personal" fieldKey="height" hiddenFields={hiddenFields} onRemove={handleRemoveField}>
              <label htmlFor="height" className="block text-xs font-medium text-slate-200">Height</label>
              <input id="height" type="text" {...register("personal.height")} className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 py-2 text-xs text-slate-50 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400" placeholder="e.g. 5'9&quot;" />
            </FieldShell>
            <FieldShell section="personal" fieldKey="bachelors" hiddenFields={hiddenFields} onRemove={handleRemoveField}>
              <label htmlFor="bachelors" className="block text-xs font-medium text-slate-200">Bachelors</label>
              <input id="bachelors" type="text" {...register("personal.bachelors")} className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 py-2 text-xs text-slate-50 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400" placeholder="e.g. B.Tech in Computer Science" />
            </FieldShell>
            <FieldShell section="personal" fieldKey="occupation" hiddenFields={hiddenFields} onRemove={handleRemoveField}>
              <label htmlFor="occupation" className="block text-xs font-medium text-slate-200">Works / Occupation</label>
              <input id="occupation" type="text" {...register("personal.occupation")} className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 py-2 text-xs text-slate-50 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400" placeholder="e.g. Software Engineer at XYZ" />
            </FieldShell>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <FieldShell section="personal" fieldKey="rashi" hiddenFields={hiddenFields} onRemove={handleRemoveField}>
              <label htmlFor="rashi" className="block text-xs font-medium text-slate-200">Rashi</label>
              <input id="rashi" type="text" {...register("personal.rashi")} className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 py-2 text-xs text-slate-50 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400" />
            </FieldShell>
            <FieldShell section="personal" fieldKey="nakshatra" hiddenFields={hiddenFields} onRemove={handleRemoveField}>
              <label htmlFor="nakshatra" className="block text-xs font-medium text-slate-200">Nakshatra</label>
              <input id="nakshatra" type="text" {...register("personal.nakshatra")} className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 py-2 text-xs text-slate-50 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400" />
            </FieldShell>
            <FieldShell section="personal" fieldKey="gotra" hiddenFields={hiddenFields} onRemove={handleRemoveField}>
              <label htmlFor="gotra" className="block text-xs font-medium text-slate-200">Gotra</label>
              <input id="gotra" type="text" {...register("personal.gotra")} className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 py-2 text-xs text-slate-50 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400" />
            </FieldShell>
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
        <fieldset className="premium-card-static space-y-4 p-5 sm:p-6">
          <legend className="px-2 text-sm font-semibold text-slate-100">
            Family details
          </legend>
          <div className="grid gap-4 sm:grid-cols-2">
            <FieldShell section="family" fieldKey="fatherName" hiddenFields={hiddenFields} onRemove={handleRemoveField}>
              <label htmlFor="fatherName" className="block text-xs font-medium text-slate-200">Father&apos;s Name</label>
              <input id="fatherName" type="text" {...register("family.fatherName")} className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 py-2 text-xs text-slate-50 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400" />
            </FieldShell>
            <FieldShell section="family" fieldKey="fatherOccupation" hiddenFields={hiddenFields} onRemove={handleRemoveField}>
              <label htmlFor="fatherOccupation" className="block text-xs font-medium text-slate-200">Father&apos;s Occupation</label>
              <input id="fatherOccupation" type="text" {...register("family.fatherOccupation")} className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 py-2 text-xs text-slate-50 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400" />
            </FieldShell>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <FieldShell section="family" fieldKey="motherName" hiddenFields={hiddenFields} onRemove={handleRemoveField}>
              <label htmlFor="motherName" className="block text-xs font-medium text-slate-200">Mother&apos;s Name</label>
              <input id="motherName" type="text" {...register("family.motherName")} className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 py-2 text-xs text-slate-50 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400" />
            </FieldShell>
            <FieldShell section="family" fieldKey="motherOccupation" hiddenFields={hiddenFields} onRemove={handleRemoveField}>
              <label htmlFor="motherOccupation" className="block text-xs font-medium text-slate-200">Mother&apos;s Occupation</label>
              <input id="motherOccupation" type="text" {...register("family.motherOccupation")} className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 py-2 text-xs text-slate-50 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400" />
            </FieldShell>
          </div>
          <FieldShell section="family" fieldKey="siblings" hiddenFields={hiddenFields} onRemove={handleRemoveField}>
            <label htmlFor="siblings" className="block text-xs font-medium text-slate-200">Siblings</label>
            <textarea id="siblings" rows={2} {...register("family.siblings")} className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 py-2 text-xs text-slate-50 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400" placeholder="e.g. 1 younger brother, 1 elder sister" />
          </FieldShell>
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
        <fieldset className="premium-card-static space-y-4 p-5 sm:p-6">
          <legend className="px-2 text-sm font-semibold text-slate-100">
            Contact details
          </legend>
          <div className="grid gap-4 sm:grid-cols-2">
            <FieldShell section="contact" fieldKey="contactPerson" hiddenFields={hiddenFields} onRemove={handleRemoveField}>
              <label htmlFor="contactPerson" className="block text-xs font-medium text-slate-200">Contact Person</label>
              <input id="contactPerson" type="text" {...register("contact.contactPerson")} className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 py-2 text-xs text-slate-50 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400" />
            </FieldShell>
            <FieldShell section="contact" fieldKey="contactNumber" hiddenFields={hiddenFields} onRemove={handleRemoveField}>
              <label htmlFor="contactNumber" className="block text-xs font-medium text-slate-200">Contact Number</label>
              <input id="contactNumber" type="tel" {...register("contact.contactNumber")} className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 py-2 text-xs text-slate-50 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400" placeholder="e.g. +91-9876543210" />
              {errors.contact?.contactNumber && (
                <p className="text-xs text-rose-400">{errors.contact.contactNumber.message}</p>
              )}
            </FieldShell>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <FieldShell section="contact" fieldKey="email" hiddenFields={hiddenFields} onRemove={handleRemoveField}>
              <label htmlFor="email" className="block text-xs font-medium text-slate-200">Email ID</label>
              <input id="email" type="email" {...register("contact.email")} className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 py-2 text-xs text-slate-50 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400" placeholder="e.g. aarav.family@marriagebiodatahub.com" autoComplete="email" />
              {errors.contact?.email && (
                <p className="text-xs text-rose-400">{errors.contact.email.message}</p>
              )}
            </FieldShell>
            <FieldShell section="contact" fieldKey="address" hiddenFields={hiddenFields} onRemove={handleRemoveField}>
              <label htmlFor="address" className="block text-xs font-medium text-slate-200">Residential Address</label>
              <textarea id="address" rows={2} {...register("contact.address")} className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 py-2 text-xs text-slate-50 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400" placeholder="House no, street, city, state, PIN" />
            </FieldShell>
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
        <fieldset className="premium-card-static space-y-4 p-5 sm:p-6">
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
              <div className="relative flex h-32 overflow-hidden items-center justify-center rounded-2xl border border-white/10 bg-slate-900/80">
                {preview ? (
                  <NextImage
                    src={preview}
                    alt="Selected profile preview for marriage biodata"
                    fill
                    unoptimized
                    className="object-cover"
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

        <div className="flex items-center justify-end gap-3 sm:gap-4 mt-8">
          <button
            type="button"
            disabled={isSubmitting}
            onClick={() => setIsResetModalOpen(true)}
            className="inline-flex items-center justify-center rounded-full border border-rose-500/30 bg-slate-900/40 px-6 py-2.5 text-sm font-semibold text-rose-300 transition-all duration-300 hover:bg-rose-500/10 hover:border-rose-500/50 hover:text-rose-200 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Reset Form
          </button>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-400 via-brand-500 to-rose-500 px-7 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            {isSubmitting ? "Preparing templates..." : "Create Biodata"}
          </button>
        </div>
      </form>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-400 backdrop-blur-md shadow-2xl">
          <CheckCircle2 className="h-5 w-5" />
          {toastMessage}
        </div>
      )}

      {/* Remove required field confirmation */}
      {isRemoveModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div
            onClick={() => {
              setIsRemoveModalOpen(false);
              setPendingRemove(null);
            }}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
          />
          <div className="premium-card-static relative w-full max-w-sm overflow-hidden p-6">
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-rose-500/20 bg-rose-500/10 text-rose-400 shadow-inner">
                  <Trash2 className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold tracking-tight text-white">
                  Remove this field?
                </h3>
                <p className="mb-8 text-sm leading-relaxed text-slate-300">
                  This is a required field. Removing it hides it from the form, but you will need to fill it again before creating your biodata.
                </p>
                <div className="flex w-full gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setIsRemoveModalOpen(false);
                      setPendingRemove(null);
                    }}
                    className="flex-1 rounded-xl border border-white/10 bg-slate-800/50 px-4 py-3 text-sm font-semibold text-slate-200 transition duration-200 hover:bg-slate-700 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleConfirmRemoveField}
                    className="flex-1 rounded-xl bg-gradient-to-r from-rose-500 to-rose-600 px-4 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:brightness-110"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      {/* Confirmation Modal */}
      {isResetModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div
            onClick={() => setIsResetModalOpen(false)}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
          />
          <div className="premium-card-static relative w-full max-w-sm overflow-hidden p-6">
              <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-rose-500/10 blur-[80px]" />

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 shadow-inner">
                  <AlertTriangle className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white tracking-tight">
                  Reset Biodata?
                </h3>
                <p className="mb-8 text-sm leading-relaxed text-slate-300">
                  Are you sure you want to clear all your details? This action cannot be undone and will delete your unsaved progress.
                </p>
                <div className="flex w-full gap-3">
                  <button
                    type="button"
                    onClick={() => setIsResetModalOpen(false)}
                    className="flex-1 rounded-xl border border-white/10 bg-slate-800/50 px-4 py-3 text-sm font-semibold text-slate-200 transition duration-200 hover:bg-slate-700 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleConfirmReset}
                    className="flex-1 rounded-xl bg-gradient-to-r from-rose-500 to-rose-600 px-4 py-3 text-sm font-bold text-white shadow-lg transition duration-200 hover:brightness-110"
                  >
                    Yes, Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
    </section>
  );
}

