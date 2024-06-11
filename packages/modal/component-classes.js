// TODO: can hardcode these into the classes below if this spacing is actually ratified
const mobileBorderPadding = 16;
const borderPadding = 32;
export const modalV2 = {
  // several items in here are 'resets' for the <dialog> element
  dialogEl:
    'bg-transparent backface-hidden w-unset h-unset max-w-unset max-h-unset p-0 m-auto border-0 inset-0 open:flex open:fixed sm:place-content-center sm:place-items-center items-end [--w-modal-max-height:80%] [--w-modal-width:640px]',
  dialogInner: `transition-all relative pb-safe-[24] sm:pb-24 shadow-m max-h-[--w-modal-max-height] min-h-[--w-modal-min-height] w-[--w-modal-width] h-[--w-modal-height] ease-in-out backface-hidden will-change-height rounded-8 sm:mx-16 s-bg flex flex-col overflow-hidden gap-12 lt-sm:rounded-b-0`,
  contentSlot: `block overflow-y-auto overflow-x-hidden last-child:mb-0 grow shrink px-${mobileBorderPadding} sm:px-${borderPadding} relative`,
  titleSlot: `relative`,
  titleBarSlot: `pt-16 sm:pt-24 px-${mobileBorderPadding} sm:px-${borderPadding} grid gap-12 grid-cols-[auto_1fr_auto] items-start shrink-0`,
  // the X icon should align with the top of the title-text and the right-margin of the modal - hence the negative margin to compensate for the pill's size
  titleButton: `sm:min-h-[32px] sm:min-w-[32px] min-h-[40px] min-w-[40px]`,
  titleButtonLeft: `sm:-mt-8 sm:-ml-8 -mt-12 -ml-12`,
  titleButtonRight: `sm:-mt-8 sm:-mr-8 -mt-12 -mr-12`,
  titleBarButton: `text-m leading-[24] p-4 rounded-full border-0 inline-flex items-center justify-center hover:bg-clip-padding font-bold focusable transition-colors ease-in-out s-icon bg-transparent hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]`,
  titleBarText: 'mb-0 h3',
  titleTextWithBackButton: 'justify-self-center',
  titleTextWithoutBackButton: 'col-span-2',
  // pt-12 here needed because 'gap-12' that normally handles spacing won't affect this element
  titleTextWithTopArea: `pt-12 px-${mobileBorderPadding} sm:px-${borderPadding}`,
  titleCloseSlot: `absolute right-8 sm:right-16 top-8 sm:top-16 z-10`,
  titleCloseButtonOnImage: `absolute right-8 sm:right-16 top-8 sm:top-16 z-10 text-m leading-[24] p-4 rounded-full border-0 inline-flex items-center justify-center hover:bg-clip-padding font-bold focusable transition-colors ease-in-out s-color-inverted bg-[var(--w-black)/70] hover:bg-[var(--w-black)/85] active:bg-[var(--w-black)] s-text-inverted`,
  footerSlot: `flex justify-end shrink-0 px-${mobileBorderPadding} sm:px-${borderPadding}`,
};

export const modalClasses = [
  ...new Set(
    Object.values(modalV2)
      .map((e) => (typeof e === 'object' ? Object.values(e).map((e) => e.split(/\s/)) : e.split(/\s/)))
      .flat(Infinity),
  ),
];
