export async function addContentToPage({ page, content }) {
  let updatedPage = page;
  await page.setContent(content);
  await page.addScriptTag({ path: './dist/index.js', type: 'module' });
  await page.addStyleTag({ url: 'https://assets.finn.no/pkg/@warp-ds/fonts/v1/finn-no.css' });
  await page.addStyleTag({ url: 'https://assets.finn.no/pkg/@warp-ds/css/1.0.0-alpha.37/tokens/finn-no.css' });
  await page.addStyleTag({ url: 'https://assets.finn.no/pkg/@warp-ds/css/1.0.0-alpha.37/resets.css' });

  return updatedPage;
}
