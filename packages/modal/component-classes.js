
// export const modal = {
//   backdrop: 'fixed inset-0 flex sm:place-content-center sm:place-items-center items-end z-30 [--w-modal-max-height:80%] [--w-modal-width:640px] bg-[--w-black-alpha25]',
//   modal: 'pb-safe-[32] shadow-m max-h-[--w-modal-max-height] min-h-[--w-modal-min-height] w-[--w-modal-width] h-[--w-modal-height] relative transition-300 ease-in-out backface-hidden will-change-height rounded-8 mx-0 sm:mx-16 s-bg flex flex-col overflow-hidden outline-none space-y-16 pt-8 sm:pt-32 sm:pb-32 rounded-b-0 sm:rounded-b-8',
//   content: 'block overflow-y-auto overflow-x-hidden last-child:mb-0 grow shrink px-16 sm:px-32 relative',
//   footer: 'flex justify-end shrink-0 px-16 sm:px-32',
//   transitionTitle: 'transition-all duration-300',
//   transitionTitleCenter: 'justify-self-center self-center',
//   transitionTitleColSpan: 'col-span-2',
//   title: 'py-8 sm:py-0 -mt-4 sm:-mt-8 min-h-40 sm:min-h-48 grid gap-8 sm:gap-16 grid-cols-[auto_1fr_auto] items-start px-16 sm:px-32 border-b sm:border-b-0 shrink-0',
//   titleText: 'mb-0 h4 sm:h3',
//   titleButton: `${buttonTextSizes.medium} ${buttonTypes.pill} ${buttonColors.pill} sm:min-h-[44px] sm:min-w-[44px] min-h-[32px] min-w-[32px]`,
//   titleButtonLeft: '-ml-8 sm:-ml-12 justify-self-start',
//   titleButtonRight: '-mr-8 sm:-mr-12 justify-self-end',
//   titleButtonIcon: 'h-16 w-16 sm:h-24 sm:w-24',
//   titleButtonIconRotated: 'transform rotate-90',
// };
const buttonDefaultStyling = 'font-bold focusable justify-center transition-colors ease-in-out';
const buttonColors = { primary: 's-text-inverted bg-[--w-color-button-primary-background] hover:bg-[--w-color-button-primary-background-hover] active:bg-[--w-color-button-primary-background-active]', secondary: 's-text-link s-border s-bg hover:s-bg-hover hover:s-border-hover active:s-bg-active', utility: 's-text s-bg hover:s-bg-hover s-border hover:s-border-hover active:s-border-active', destructive: 's-bg-negative s-text-inverted hover:s-bg-negative-hover active:s-bg-negative-active', pill: 's-icon hover:s-icon-hover active:s-icon-active bg-transparent hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]', disabled: 's-text-inverted s-bg-disabled', quiet: 'bg-transparent s-text-link hover:s-bg-hover active:s-bg-active', utilityQuiet: 's-text bg-transparent hover:s-bg-subtle-hover', negativeQuiet: 'bg-transparent s-text-negative hover:s-bg-negative-subtle-hover active:s-bg-negative-subtle-active', loading: 's-text s-bg-subtle', link: 's-text-link', };
const buttonTypes = { primary: `border-0 rounded-8 ${buttonDefaultStyling}`, secondary: `border-2 rounded-8 ${buttonDefaultStyling}`, utility: `border rounded-4 ${buttonDefaultStyling}`, negative: `border-0 rounded-8 ${buttonDefaultStyling}`, pill: `p-4 rounded-full border-0 inline-flex items-center justify-center hover:bg-clip-padding ${buttonDefaultStyling}`, link: `bg-transparent focusable ease-in-out inline active:underline hover:underline ${buttonColors.link}`, };
const buttonTextSizes = { medium: 'text-m leading-[24]', xsmall: 'text-xs', };

// TODO: can hardcode these into the classes below if this spacing is actually ratified
const mobileBorderPadding = 24
const borderPadding = 24
export const modalV2 = {
  // several items in here are 'resets' for the <dialog> element
  dialogEl: 'bg-transparent backface-hidden w-unset h-unset max-w-unset max-h-unset p-0 m-auto border-0 inset-0 open:flex open:fixed sm:place-content-center sm:place-items-center items-end [--w-modal-max-height:80%] [--w-modal-width:640px]',
  dialogInner: `transition-all relative pb-safe-[${borderPadding}] sm:pb-${borderPadding} shadow-m max-h-[--w-modal-max-height] min-h-[--w-modal-min-height] w-[--w-modal-width] h-[--w-modal-height] ease-in-out backface-hidden will-change-height rounded-8 sm:mx-16 s-bg flex flex-col overflow-hidden gap-12 lt-sm:rounded-b-0`,
  contentSlot: `block overflow-y-auto overflow-x-hidden last-child:mb-0 grow shrink px-${mobileBorderPadding} sm:px-${borderPadding} relative`,
  titleBarSlot: `pt-${mobileBorderPadding} sm:pt-${borderPadding} px-${mobileBorderPadding} sm:px-${borderPadding} grid gap-12 grid-cols-[auto_1fr_auto] items-start shrink-0`,
  // the X icon should align with the top of the title-text and the right-margin of the modal - hence the negative margin to compensate for the pill's size
  titleButton: `sm:min-h-[32px] sm:min-w-[32px] min-h-[40px] min-w-[40px]`,
  titleButtonRight: `sm:-mt-8 sm:-mr-8 -mt-12 -mr-12`,
  titleBarButton: `${buttonTextSizes.medium} ${buttonTypes.pill} ${buttonColors.pill}`,
  // TODO - col-span-2 - missing feedback from Design on how 'back' button should be approached in this v2
  titleBarText: 'mb-0 h3 col-span-2',
  titleCloseSlot: `absolute right-8 sm:right-16 top-8 sm:top-16 z-10`,
  // TODO - missing colors from Design
  titleCloseButton: `${buttonTextSizes.medium} ${buttonTypes.pill} something-something-colors`,
  footerSlot: `flex justify-end shrink-0 px-${mobileBorderPadding} sm:px-${borderPadding}`
}

export const modalClasses = [
  ...new Set(
    Object.values(modalV2)
      .map((e) => (typeof e === 'object' ? Object.values(e).map((e) => e.split(/\s/)) : e.split(/\s/)))
      .flat(Infinity),
  ),
];
