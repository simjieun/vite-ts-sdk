var c = Object.defineProperty;
var a = (t, e, n) => e in t ? c(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var r = (t, e, n) => a(t, typeof e != "symbol" ? e + "" : e, n);
class d {
  constructor() {
    r(this, "renderElement");
    this.renderElement = document.createElement("button"), this.renderElement.classList.add("talk"), this.renderElement.innerText = "Encar Talk", this.renderElement.onclick = () => {
      alert("엔카톡입니다");
    };
  }
  init() {
    document.body.appendChild(this.renderElement);
  }
}
class h {
  constructor(e, n, i, s) {
    this.src = e, this.width = n, this.height = i, this.id = s;
  }
  create() {
    const e = document.createElement("iframe");
    return e.id = this.id, e.src = this.src, e.width = this.width, e.height = this.height, e.style.border = "none", document.body.appendChild(e), e;
  }
}
const l = new d();
l.init();
const o = new h("www.encar.com", "10px", "10px", "encar-talk-frame");
o.create();
