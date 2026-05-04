## Examples

<elements-example>

```html
<w-tabs>
  <w-tab for="roald-amundsen">Tab 1</w-tab>
  <w-tab for="fridtjof-nansen">Tab 2</w-tab>
  <w-tab for="tor-heyerdahl">Tab 3</w-tab>
  <w-tab-panel id="roald-amundsen">Tab one selected!</w-tab-panel>
  <w-tab-panel id="fridtjof-nansen">Tab two selected!</w-tab-panel>
  <w-tab-panel id="tor-heyerdahl">Tab three selected!</w-tab-panel>
</w-tabs>

<script type="module">
  const tabs = document.querySelector('w-tabs');

  tabs.addEventListener('change', (event) => {
    // event.detail = { panelId: string }
    console.log('Active panel:', event.detail.panelId);
  });
</script>
```

</elements-example>

### Tabs with icons

Icons can be added to tabs using the `icon` slot. By default, icons appear beside the label.

<elements-example>

```html
<w-tabs active="fridtjof-nansen">
  <w-tab for="roald-amundsen">
    <w-icon name="Info" slot="icon"></w-icon>
    Tab 1
  </w-tab>
  <w-tab for="fridtjof-nansen">
    <w-icon name="Success" slot="icon"></w-icon>
    Tab 2
  </w-tab>
  <w-tab-panel id="roald-amundsen">Content one</w-tab-panel>
  <w-tab-panel id="fridtjof-nansen">Content two</w-tab-panel>
</w-tabs>
```

</elements-example>

Use the `over` attribute to position icons above the label:

<elements-example>

```html
<w-tabs>
  <w-tab for="roald-amundsen" over>
    <w-icon name="Info" slot="icon"></w-icon>
    Tab 1
  </w-tab>
  <w-tab for="fridtjof-nansen" over>
    <w-icon name="Success" slot="icon"></w-icon>
    Tab 2
  </w-tab>
  <w-tab-panel id="roald-amundsen">Content one</w-tab-panel>
  <w-tab-panel id="fridtjof-nansen">Content two</w-tab-panel>
</w-tabs>
```

</elements-example>
