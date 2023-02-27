export async function addContentToPage({ page, content }) {
  let updatedPage = page;
  await page.setContent(content);
  await page.addScriptTag({ path: './dist/index.js', type: 'module' });
  await page.addStyleTag({ url: 'https://assets.finn.no/pkg/@fabric-ds/css/v1/fabric.min.css' });

  return updatedPage;
}
