import { resolveBlogImage } from "./images";
import { preparePost } from "./content";

const posts = [
  {
    slug: "creative-marriage-biodata-template-ideas",
    title: "Creative Marriage Biodata Template Ideas",
    excerpt:
      "Creating biodata is the smartest way to share your details—but choosing an elegant, premium, easy-to-read marriage biodata template matters just as much. Explore ideas for boys, girls, and mistakes to avoid.",
    publishedAt: "2026-05-23",
    sections: [
      {
        type: "paragraph",
        text: "In today's date creating biodata is very important and it is the smartest and easy way to convey your information to someone. But only creating biodata is not enough but to choose an elegant, premium, well-designed, and easy to read marriage biodata is also very important. Biodata template design should be like when someone read them, it will make them feel happy so, they can approach you for further talks regarding your marriage journey.",
      },
      {
        type: "heading",
        level: 2,
        text: "Features of Premium Marriage Biodata Template",
      },
      {
        type: "paragraph",
        text: "The layout biodata for marriage should be professional as the it should be created perfect, completed, the design should not be broken. The fonts in the biodata template design should be attractive and the sequence of font size should be same through out the template for example if you have set the heading to 25px so all headings should be of 25px, this will created a sequence in biodata template and I looks more premium. Another most important part is photo placement in biodata format, the picture should be place in that part of biodata so that the other information should not hide and user can read it easily.",
      },
      {
        type: "paragraph",
        text: "You have found different options to download your marriage biodata but most recommended format is PDF format as it will not break your pixels, and the color quality. You have to make sure that the downloaded design should be mobile friendly because there are more probability that the other person will read it in mobile phone.",
      },
      {
        type: "heading",
        level: 2,
        text: "Marriage Biodata Template Ideas for Boys",
      },
      {
        type: "paragraph",
        text: "When choosing biodata template for boys the design should be corporate style just like resume as it creates an strong, and professional impact on the reader and it portray that how much you're professional. The design of marriage biodata template should be dark and elegant because dark colors suits on boys more than girls. The information should be fill smartly and importantly the career details should be enter on high priority choose simple but smart words.",
      },
      {
        type: "heading",
        level: 2,
        text: "Marriage Biodata Template Ideas for Girls",
      },
      {
        type: "paragraph",
        text: "Soft and elegant theme girls should select when creating biodata for wedding, because when we talk about girls the words like caring, loving, emotional, and loyal comes to our mind so, the the light colors girls should use when creating a biodata. The art in feminine biodata template plays an important role, so floral layout is recommended in the template. Pastel color should be use in girls biodata template light colors will be more attractive with soft theme and floral layout.",
      },
      {
        type: "heading",
        level: 2,
        text: "Mistakes You Should Avoid While Creating Biodata For Marriage",
      },
      {
        type: "paragraph",
        text: "There are some most common mistakes one should avoid during creating biodata, one of them is using too many colors, it create a mess in the biodata template and the readability decreases because too many colors catch the attention of reader and they loose focus from the information. The font style should be elegant but simple and easy to read, don't use too much designed font that the reader found them hard to read. While creating a biodata the information should be organized in such a way that it starts with your personal details and then other thing comes like family and contact details.",
      },
      {
        type: "paragraph",
        text: "Don't use low quality images in biodata template design just imagine how unprofessional it looks when you use premium, well-designed biodata and your image is not edited well or blurred so, image should be pixel perfect and the colors of image should be sharped. Don't add too much text inside the biodata template only use relevant information in detail but don't create mess while adding unnecessary information in the biodata. The layout of the wedding template should be well designed as its layout does not break and it also does not hide the information of biodata.",
      },
      {
        type: "heading",
        level: 2,
        text: "How to Select the Perfect Biodata Template",
      },
      {
        type: "paragraph",
        text: "Selecting biodata should be on the basis of your personality if your nature is calm, and introvert so you should select biodata with soft color and natural theme you can find on marriage biodata hub template page. There is a word which we say experience we should discuss to married peoples that what template design we should select that stands out because they have already pass through this phase and they know better what type of template should be select and what design should be avoided. During creating a biodata you should keep one thing in mind that the reflection of your culture and tradition should be reflected in the biodata design.",
      },
      {
        type: "heading",
        level: 2,
        text: "Final Thoughts",
      },
      {
        type: "highlight",
        text: "If we conclude the whole things we have discussed above is importance of balancing and creativity, choosing elegant and readable fonts and selecting biodata template according to your nature. Fonts should be readable, colors must be natural. For boys the marriage biodata template design should be look professional just like resume in short in should be like corporate-styled biodata template and for girls the layout design should be floral, mehdi art, or something related to only-girls style. The creator should avoid mistakes we have discussed like over-styling, irrelevant information, and usage of too many colors in a single biodata form.",
      },
    ],
  },
];

export function getAllPosts() {
  return posts.map((post) => {
    const prepared = preparePost(post);
    return {
      slug: prepared.slug,
      title: prepared.title,
      excerpt: prepared.excerpt,
      publishedAt: prepared.publishedAt,
      image: prepared.image,
    };
  });
}

export function getPostBySlug(slug) {
  const post = posts.find((p) => p.slug === slug);
  if (!post) return null;
  return preparePost(post);
}

export function getAllSlugs() {
  return posts.map((p) => p.slug);
}

/** Auto-register posts from image filenames in blog-1 (placeholder until content is added). */
export function getPostsForListing() {
  return getAllPosts().sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
  );
}
