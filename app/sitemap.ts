// import { allBlogs } from "contentlayer/generated";

export default async function sitemap() {
  // const blogs = allBlogs.map((post) => ({
  //   url: `https://leerob.io/blog/${post.slug}`,
  //   lastModified: post.publishedAt,
  // }));

  const routes = ["", "/about", "/portfolio", "/blog", "/uses"].map(
    (route) => ({
      url: `https://leerob.io${route}`,
      lastModified: new Date().toISOString().split("T")[0],
    })
  );

  // return [...routes, ...blogs];
  return [...routes];
}
