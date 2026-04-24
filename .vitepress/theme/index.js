
import DefaultTheme from "vitepress/theme";
import MyLayout from "./MyLayout.vue";

import "../../entrypoint.js";
import '../../eik/styles.css';
import './custom.css';
import "./style-isolate.js";
import 'uno.css';
import "./theme-switcher.js";

export default {
  extends: DefaultTheme,
  Layout: MyLayout,
};
