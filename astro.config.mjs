// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Travel website Docs",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Hướng dẫn",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Cài đặt ban đầu", slug: "guides/setup" },
            { label: "Người dùng", slug: "guides/user" },
            { label: "Bài viết", slug: "guides/post" },
            { label: "Bình luận", slug: "guides/comment" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
