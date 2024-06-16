var a = Object.defineProperty;
var l = (t, e, i) => e in t ? a(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i;
var s = (t, e, i) => l(t, typeof e != "symbol" ? e + "" : e, i);
class m {
  constructor() {
    s(this, "iframeDiv");
    this.iframeDiv = document.createElement("div"), this.iframeDiv.style.position = "fixed", this.iframeDiv.style.bottom = "96px", this.iframeDiv.style.right = "30px", this.iframeDiv.style.width = "390px", this.iframeDiv.style.minHeight = "200px", this.iframeDiv.style.maxHeight = "690px", this.iframeDiv.style.overflow = "hidden", this.iframeDiv.style.borderRadius = "30px";
    const e = document.createElement("iframe");
    e.setAttribute("id", "talk_iframe"), e.src = "https://m.encar.com", e.width = "100%", e.height = "100%", this.iframeDiv.appendChild(e);
  }
  create() {
    return document.body.appendChild(this.iframeDiv), this.iframeDiv;
  }
  show() {
    this.iframeDiv.style.visibility = "visible";
  }
  hide() {
    this.iframeDiv.style.visibility = "hidden";
  }
}
const r = class r {
  constructor() {
    s(this, "renderElement");
    s(this, "iframeElement");
    s(this, "handleClick", (e) => {
      const i = e.target;
      i && this.iframeElement && (i.classList.contains("show") ? (i.classList.remove("show"), this.iframeElement.style.visibility = "hidden") : (i.classList.add("show"), this.iframeElement.style.visibility = "visible"));
    });
    this.renderElement = document.createElement("button"), this.applyStyles(), this.renderElement.innerText = "Talk", this.addEventListeners(), this.iframeElement = void 0;
  }
  applyStyles() {
    Object.assign(this.renderElement.style, r.BUTTON_STYLES);
  }
  addEventListeners() {
    this.renderElement.addEventListener("click", this.handleClick);
  }
  init() {
    const e = new m();
    this.iframeElement = e.create(), document.body.appendChild(this.renderElement);
  }
};
s(r, "BUTTON_STYLES", {
  position: "fixed",
  bottom: "30px",
  right: "30px",
  zIndex: "10",
  width: "50px",
  height: "50px",
  borderRadius: "100px",
  backgroundColor: "#efefef"
});
let n = r;
const h = new n();
h.init();
