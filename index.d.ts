import { WarpBadge } from "./packages/badge/index";
import { WarpAffix } from "./packages/affix/index";
import { WarpAlert } from "./packages/alert/index";
import { WarpAttention } from "./packages/attention/index";
import { WarpBox } from "./packages/box/index";
import { WarpBreadcrumbs } from "./packages/breadcrumbs/index";
import { WarpButton } from "./packages/button/index";
import { WarpCard } from "./packages/card/index";
import { WarpCombobox } from "./packages/combobox/index";
import { WarpDatepicker } from "./packages/datepicker/datepicker";
import { WarpDeadToggle } from "./packages/dead-toggle/index";
import { WarpExpandable } from "./packages/expandable/index";
import { WarpLink } from "./packages/link/index";
import { ModalMain } from "./packages/modal/modal-main";
import { ModalFooter } from "./packages/modal/modal-footer";
import { ModalHeader } from "./packages/modal/modal-header";
import { WarpPageIndicator } from "./packages/pageindicator/index";
import { WarpPagination } from "./packages/pagination/index";
import { WarpPill } from "./packages/pill/index";
import { WCheckbox } from "./packages/rip-and-tear-checkbox/checkbox";
import { WRadio } from "./packages/rip-and-tear-radio/radio";
import { WRadioGroup } from "./packages/rip-and-tear-radio/radio-group";
import { WarpSelect } from "./packages/select/index";
import { WarpSlider } from "./packages/slider/slider";
import { WarpSliderThumb } from "./packages/slider/slider-thumb";
import { WarpSteps } from "./packages/steps/index";
import { WarpStep } from "./packages/steps/index";
import { WarpSwitch } from "./packages/switch/index";
import { WarpTab } from "./packages/tabs/index";
import { WarpTabs } from "./packages/tabs/index";
import { WarpTabPanel } from "./packages/tabs/index";
import { WarpTextField } from "./packages/textfield/index";
import { WarpToastContainer } from "./packages/toast/index";
import { WarpToast } from "./packages/toast/index";

declare global {
  interface HTMLElementTagNameMap {
    'w-badge': WarpBadge;
    'w-affix': WarpAffix;
    'w-alert': WarpAlert;
    'w-attention': WarpAttention;
    'w-box': WarpBox;
    'w-breadcrumbs': WarpBreadcrumbs;
    'w-button': WarpButton;
    'w-card': WarpCard;
    'w-combobox': WarpCombobox;
    'w-datepicker': WarpDatepicker;
    'w-dead-toggle': WarpDeadToggle;
    'w-expandable': WarpExpandable;
    'w-link': WarpLink;
    'w-modal': ModalMain;
    'w-modal-header': ModalHeader;
    'w-modal-footer': ModalFooter;
    'w-pageindicator': WarpPageIndicator;
    'w-pagination': WarpPagination;
    'w-pill': WarpPill;
    'w-checkbox': WCheckbox;
    'w-radio': WRadio;
    'w-radio-group': WRadioGroup;
    'w-select': WarpSelect;
    'w-slider': WarpSlider;
    'w-slider-thumb': WarpSliderThumb;
    'w-steps': WarpSteps;
    'w-step': WarpStep;
    'w-switch': WarpSwitch;
    'w-tab': WarpTab;
    'w-tabs': WarpTabs;
    'w-tab-panel': WarpTabPanel;
    'w-textfield': WarpTextField;
    'w-toast-container': WarpToastContainer;
    'w-toast': WarpToast;
  }
}

declare module 'react/jsx-runtime' {
  namespace JSX {
    interface IntrinsicElements {
      'w-badge': WarpBadge;
      'w-affix': WarpAffix;
      'w-alert': WarpAlert;
      'w-attention': WarpAttention;
      'w-box': WarpBox;
      'w-breadcrumbs': WarpBreadcrumbs;
      'w-button': WarpButton;
      'w-card': WarpCard;
      'w-combobox': WarpCombobox;
      'w-datepicker': WarpDatepicker;
      'w-dead-toggle': WarpDeadToggle;
      'w-expandable': WarpExpandable;
      'w-link': WarpLink;
      'w-modal': ModalMain;
      'w-modal-header': ModalHeader;
      'w-modal-footer': ModalFooter;
      'w-pageindicator': WarpPageIndicator;
      'w-pagination': WarpPagination;
      'w-pill': WarpPill;
      'w-checkbox': WCheckbox;
      'w-radio': WRadio;
      'w-radio-group': WRadioGroup;
      'w-select': WarpSelect;
      'w-slider': WarpSlider;
      'w-slider-thumb': WarpSliderThumb;
      'w-steps': WarpSteps;
      'w-step': WarpStep;
      'w-switch': WarpSwitch;
      'w-tab': WarpTab;
      'w-tabs': WarpTabs;
      'w-tab-panel': WarpTabPanel;
      'w-textfield': WarpTextField;
      'w-toast-container': WarpToastContainer;
      'w-toast': WarpToast;
    }
  }
}
