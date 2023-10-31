export async function addContentToPage({ page, content }) {
  let updatedPage = page;
  await page.setContent(content);
  await page.addScriptTag({ path: "./dist/index.js", type: "module" });
  await page.addStyleTag({
    url: "https://assets.finn.no/pkg/@warp-ds/fonts/v1/finn-no.css",
  });
  await page.addStyleTag({
    url: "https://assets.finn.no/pkg/@warp-ds/css/v1/tokens/finn-no.css",
  });
  await page.addStyleTag({
    url: "https://assets.finn.no/pkg/@warp-ds/css/v1/resets.css",
  });

  return updatedPage;
}
