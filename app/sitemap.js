import { TEMPLATE_DEFINITIONS } from "../components/templatesConfig";

export default function sitemap() {
    const baseUrl = "https://marriagebiodatahub.com";

    const templates = TEMPLATE_DEFINITIONS.map((template) => ({
        url: `${baseUrl}/templates/${template.id}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${baseUrl}/templates`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },

        ...templates,
    ];
}
