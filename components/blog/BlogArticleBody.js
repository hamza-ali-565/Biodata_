import Link from "next/link";
import { BlogInlineImage } from "./BlogInlineImage";
import { getBlogImageCandidates } from "../../lib/blog/utils";
import { SmartLink } from "../SmartLink";

function SectionBlock({ section, slug, title }) {
  switch (section.type) {
    case "heading": {
      const Tag = section.level === 3 ? "h3" : "h2";
      return (
        <Tag id={section.id} className={`blog-heading blog-heading-h${section.level || 2}`}>
          {section.text}
        </Tag>
      );
    }
    case "figure":
      return (
        <BlogInlineImage
          src={section.src}
          alt={section.alt}
          caption={section.caption}
          candidates={getBlogImageCandidates(slug, section.alt || title)}
        />
      );
    case "paragraph":
      return <p className="blog-paragraph">{section.text}</p>;
    case "highlight":
      return (
        <aside className="blog-highlight" role="note">
          <p>{section.text}</p>
        </aside>
      );
    case "quote":
      return (
        <blockquote className="blog-quote">
          <p>{section.text}</p>
        </blockquote>
      );
    case "list":
      return (
        <ul className="blog-list">
          {section.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div className="blog-table-wrapper">
          <table className="blog-table">
            <thead>
              <tr>
                {section.headers.map((header, i) => (
                  <th key={i}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
}

export function BlogArticleBody({ sections, slug, title }) {
  return (
    <div className="blog-prose blog-prose-editorial">
      {sections.map((section, index) => (
        <SectionBlock
          key={`${section.type}-${index}-${section.id || index}`}
          section={section}
          slug={slug}
          title={title}
        />
      ))}
      <p className="blog-cta">
        Ready to create your own biodata?{" "}
        <SmartLink href="/#biodata-form" className="blog-inline-link">
          Start with our free builder
        </SmartLink>{" "}
        or browse{" "}
        <SmartLink href="/templates" className="blog-inline-link">
          premium templates
        </SmartLink>
        .
      </p>
    </div>
  );
}
