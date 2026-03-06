import { notFound } from "next/navigation";
import { TEMPLATE_DEFINITIONS } from "../../../components/templatesConfig";
import { TemplateDetailClient } from "../../../components/TemplateDetailClient";

export function generateStaticParams() {
  return TEMPLATE_DEFINITIONS.map((template) => ({
    id: template.id,
  }));
}

export async function generateMetadata({ params }) {
  const { id: templateId } = await params;
  const template = TEMPLATE_DEFINITIONS.find((t) => t.id === templateId);
  const safeName = template ? template.name : "Marriage Biodata Template";
  return {
    title: `${safeName} | Biodata for Marriage`,
    description:
      template?.description ||
      "Premium marriage biodata template with modern, customisable design.",
  };
}

export default async function TemplateDetailPage({ params }) {
  const { id: templateId } = await params;
  const template = TEMPLATE_DEFINITIONS.find((t) => t.id === templateId);
  if (!template) {
    notFound();
  }
  return <TemplateDetailClient templateId={templateId} />;
}

