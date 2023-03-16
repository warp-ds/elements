export async function addContentToPage({ page, content }) {
  let updatedPage = page;
  await page.setContent(content);
  await page.addScriptTag({ path: './dist/index.js', type: 'module' });
  await page.addStyleTag({ url: '../../theme.css' });

  return updatedPage;
}
