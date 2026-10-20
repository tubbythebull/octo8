// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import { fileURLToPath } from 'node:url';

const defaultLayout = fileURLToPath(new URL('./src/layouts/Layout.astro', import.meta.url));

// Give every .md page the default layout unless its frontmatter sets its own
function remarkDefaultLayout() {
  return (_tree, file) => {
    file.data.astro.frontmatter.layout ??= defaultLayout;
  };
}

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),
  markdown: {
    remarkPlugins: [remarkDefaultLayout],
  },
});
