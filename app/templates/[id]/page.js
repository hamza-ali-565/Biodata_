import { notFound, redirect } from "next/navigation";
import { TEMPLATE_DEFINITIONS } from "../../../components/templatesConfig";
import { TemplateDetailClient } from "../../../components/TemplateDetailClient";

export function generateStaticParams() {
  return [
    ...TEMPLATE_DEFINITIONS.map((template) => ({
      id: template.slug,
    })),
    ...TEMPLATE_DEFINITIONS.map((template) => ({
      id: template.id,
    }))
  ];
}

export async function generateMetadata({ params }) {
  const { id: templateId } = await params;
  let template = TEMPLATE_DEFINITIONS.find((t) => t.slug === templateId);
  if (!template) {
    template = TEMPLATE_DEFINITIONS.find((t) => t.id === templateId);
  }
  
  const safeName = template ? template.name : "Marriage Biodata Template";
  const safeDescription = template?.description || "Premium marriage biodata template with modern, customisable design.";
  // Always use the canonical slug URL
  const canonicalId = template ? template.slug : templateId;
  const url = `https://marriagebiodatahub.com/templates/${canonicalId}`;

  return {
    title: `${safeName} | Marriage Biodata Hub`,
    description: safeDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${safeName} | Marriage Biodata Hub`,
      description: safeDescription,
      url: url,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${safeName} | Marriage Biodata Hub`,
      description: safeDescription,
    },
  };
}

export default async function TemplateDetailPage({ params }) {
  const { id: templateId } = await params;
  
  let template = TEMPLATE_DEFINITIONS.find((t) => t.slug === templateId);
  if (!template) {
    template = TEMPLATE_DEFINITIONS.find((t) => t.id === templateId);
    if (template) {
      redirect(`/templates/${template.slug}`);
    }
  }

  if (!template) {
    notFound();
  }
  return <TemplateDetailClient templateId={template.id} />;
}
