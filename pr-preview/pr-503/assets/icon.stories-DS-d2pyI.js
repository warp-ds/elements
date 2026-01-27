import{a as u,i as w,b as p,n as m,l as g}from"./iframe-BGeWIGj7.js";import{e as S}from"./class-map--hdDVgLU.js";import"./preload-helper-Ct5FWWRu.js";const f=u`
:host {
  display: inline-block;
}
.w-icon {
  --_w-icon-size: var(--w-icon-size, 24px);
  height: var(--_w-icon-size);
  width: var(--_w-icon-size);
  display: flex;
}
.w-icon svg {
  pointer-events: none;
  height: var(--_w-icon-size);
  width: var(--_w-icon-size);
}
.w-icon--s {
  --w-icon-size: 16px;
}
.w-icon--m {
  --w-icon-size: 24px;
}
.w-icon--l {
  --w-icon-size: 32px;
}

`;var y=Object.defineProperty,l=(i,e,o,n)=>{for(var r=void 0,c=i.length-1,h;c>=0;c--)(h=i[c])&&(r=h(e,o,r)||r);return r&&y(e,o,r),r};const d=new Map,v='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"></svg>';function C(i,e={}){const o=e.responseParser??(n=>n.text());return d.has(i)||d.set(i,fetch(i).then(o)),d.get(i)}class t extends w{constructor(){super(...arguments),this.name="",this.size="medium",this.locale="en",this.svg=null}static{this.styles=[f]}async fetchIcon(e){const o=`https://assets.finn.no/pkg/eikons/v1/${this.locale}/${e}.svg`;try{const n=await C(o);return new DOMParser().parseFromString(n,"text/html").body.querySelector("svg")}catch{return null}}firstUpdated(){this.loadIcon()}updated(e){(e.has("name")||e.has("locale"))&&this.loadIcon()}async loadIcon(){if(!this.name){this.svg=null;return}let e=await this.fetchIcon(this.name);e||(e=new DOMParser().parseFromString(v,"text/html").body.firstElementChild),this.svg=e}render(){const e={"w-icon":!0,"w-icon--s":this.size==="small","w-icon--m":this.size==="medium","w-icon--l":this.size==="large"},o=typeof this.size=="string"&&this.size.endsWith("px")?`--w-icon-size: ${this.size};`:"";return p`<div class="${S(e)}" style="${o}" part="w-${this.name.toLowerCase()}">${this.svg}</div>`}}l([m({type:String,reflect:!0})],t.prototype,"name");l([m({type:String,reflect:!0})],t.prototype,"size");l([m({type:String,reflect:!0})],t.prototype,"locale");l([g()],t.prototype,"svg");customElements.get("w-icon")||customElements.define("w-icon",t);const z={component:"w-icon",title:"Icons",render:({name:i,size:e,locale:o})=>p`
      <w-icon name=${i} size=${e} locale=${o} />
  `,argTypes:{name:{control:{type:"select"},options:["ActiveAds","Ads","AirCon","AirplaneBed","AllWheelDrive","AnimalPaw","ArchiveBox","Archway","ArrowDown","ArrowLeft","ArrowRight","ArrowUp","AwardMedal","BackWheelDrive","Bag","Bank","BankIdNo","BatteryEmpty","BatteryFull","BatteryHalfFull","Beach","Bell","BellFilled","Bin","Block","Boat","Bolt","Bookmark","Briefcase","BriefcaseUser","Browser","BrowserVerified","Building","BuildingPlot","Bulb","Burger","Bus","CabinHut","Calculator","Calendar","CalendarBlank","CalendarPlus","Camera","Cancel","Car","CarLeft","CarPart","CarRent","CarRight","Chair","Charger","Charter","ChatSupport","Check","CheckShield","Checklist","ChevronDoubleLeft","ChevronDoubleRight","ChevronDown","ChevronLeft","ChevronRight","ChevronUp","CirclePlus","CirclePlusFilled","CircleUser","CircleUserFilled","Clock","ClockCountdown","Close","Code","Cog","ColorPalette","Confetti","Cookie","Copy","CreditCard","Cursor","Delivery","DeliveryKey","Diner","Discount","Dislike","Door","Dots","DotsVertical","DoubleBed","Download","DragDots","Draw","Drawer","Drill","Drink","Dumbbell","Edit","Energy","Engine","EngineBelt","Error","Exchange","Expand","EyeOff","EyeOn","Facebook","Farm","FileAdd","FileArrowDown","Filter","Fireplace","Fishing","FrontWheelDrive","GasDiesel","GasFuel","GasHybrid","GearAutomatic","GearManual","GeometricShapes","Globe","GraphLine","GraphPie","Grid","Grill","Guitar","Headset","Heart","HeartRate","Hiking","History","Hotel","House","HouseBed","HouseFilled","HouseModern","HousePerson","IceSkater","Image","Info","Instagram","JetSki","Key","Lamp","Layers","Leaf","Lift","Like","Link","LinkExternal","ListSort","LockShield","Logout","LotusFlower","Luggage","Mail","Mailbox","Map","Megaphone","Messages","MessagesFilled","Minus","Mixer","Money","Moon","Motorcycle","Mountain","NoSmoking","OfficeDesk","Organize","Paperclip","Parking","Phone","PhoneCheck","PhoneScratched","PhoneUsed","PictureStack","PinMarker","PinRound","PlaneLand","PlaneTakeOff","Play","Playhouse","Plus","ProductBump","ProductCarousel","ProductHighlightListing","ProductNabolagsprofil","ProductStarred","ProductTop","Propeller","Question","Refresh","Road","Rocket","RoomService","RotateLeft","RotateRight","RowingBoat","Ruler","Sauna","ScrollUp","Search","Seat","Send","Share","Shipping","Shirt","Shoes","ShoppingCart","Shower","Shrink","SidebarChevronLeft","SidebarChevronRight","SingleCylinder","Skyscraper","SmileyGood","SmileyHappy","SmileyNeutral","SmileySad","Sofa","Sorting","Sparkles","Speedometer","Stairs","StarCheck","StarEmpty","StarFull","StarHalf","Store","StoreFront","Stove","Stroller","Success","Suitcase","SuitcaseTrolley","Sun","Support","Swimming","TV","Tag","TaskList","TextBold","TextItalic","TextStrikethrough","TextUnderline","Theater","ThreeSixty","Ticket","TownHouse","Tractor","Tree","TrendDown","TrendFlat","TrendUp","Tshirt","Up","Upload","User","UserGroup","Users","Vacuum","Vase","Verification","Wallet","Warning","Warranty","WashingMachine","WaterPitcher","Weight","Wheelchair","Wifi","Wrench","X","YouTube"]},size:{control:{type:"select"},options:["small","medium","large","42px","64px","96px","128px"]},locale:{control:{type:"select"},options:["nb","sv","da","fi","en"]}}},a={args:{name:"Ads",size:"medium",locale:"nb"}},s=()=>p`
    <div><div>
      <w-icon name="Speedometer" size="small" locale="nb"></w-icon>
      <w-icon name="Speedometer" size="medium" locale="nb"></w-icon>
      <w-icon name="Speedometer" size="large" locale="nb"></w-icon>
      <w-icon name="Speedometer" size="42px" locale="nb"></w-icon>
      <w-icon name="Speedometer" size="64px" locale="nb"></w-icon>
      <w-icon name="Speedometer" size="96px" locale="nb"></w-icon>
      <w-icon name="Speedometer" size="128px" locale="nb"></w-icon>
    </div>
    some text below
    </div>
`;a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Ads',
    size: 'medium',
    locale: 'nb'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => html\`
    <div><div>
      <w-icon name="Speedometer" size="small" locale="nb"></w-icon>
      <w-icon name="Speedometer" size="medium" locale="nb"></w-icon>
      <w-icon name="Speedometer" size="large" locale="nb"></w-icon>
      <w-icon name="Speedometer" size="42px" locale="nb"></w-icon>
      <w-icon name="Speedometer" size="64px" locale="nb"></w-icon>
      <w-icon name="Speedometer" size="96px" locale="nb"></w-icon>
      <w-icon name="Speedometer" size="128px" locale="nb"></w-icon>
    </div>
    some text below
    </div>
\``,...s.parameters?.docs?.source}}};const P=["Default","Example"];export{a as Default,s as Example,P as __namedExportsOrder,z as default};
