function e(e2, t2) {
  if (!(e2 instanceof t2)) throw new TypeError("Cannot call a class as a function");
}
function t(e2) {
  return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
    return typeof e3;
  } : function(e3) {
    return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
  }, t(e2);
}
function i(e2) {
  var i2 = function(e3, i3) {
    if ("object" != t(e3) || !e3) return e3;
    var n2 = e3[Symbol.toPrimitive];
    if (void 0 !== n2) {
      var r2 = n2.call(e3, i3 || "default");
      if ("object" != t(r2)) return r2;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === i3 ? String : Number)(e3);
  }(e2, "string");
  return "symbol" == t(i2) ? i2 : i2 + "";
}
function n(e2, t2, n2) {
  return t2 && function(e3, t3) {
    for (var n3 = 0; n3 < t3.length; n3++) {
      var r2 = t3[n3];
      r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, i(r2.key), r2);
    }
  }(e2.prototype, t2), Object.defineProperty(e2, "prototype", { writable: false }), e2;
}
function r(e2, t2, n2) {
  return (t2 = i(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
var o = function() {
  function t2() {
    e(this, t2), r(this, "iframeDiv", void 0), this.iframeDiv = document.createElement("div"), this.applyStyles();
    var i2 = document.createElement("iframe");
    i2.setAttribute("id", "talk_iframe"), i2.src = "https://m.encar.com", i2.width = "100%", i2.height = "100%", this.iframeDiv.appendChild(i2);
  }
  return n(t2, [{ key: "applyStyles", value: function() {
    Object.assign(this.iframeDiv.style, t2.STYLES);
  } }, { key: "init", value: function() {
    return document.body.appendChild(this.iframeDiv), this.iframeDiv;
  } }, { key: "show", value: function() {
    this.iframeDiv.style.visibility = "visible";
  } }, { key: "hide", value: function() {
    this.iframeDiv.style.visibility = "hidden";
  } }]);
}();
r(o, "STYLES", { position: "fixed", bottom: "96px", right: "30px", width: "390px", minHeight: "200px", maxHeight: "690px", overflow: "hidden", borderRadius: "30px", visibility: "hidden" });
var a = function() {
  function t2() {
    var i2 = this;
    e(this, t2), r(this, "element", void 0), r(this, "iframeElement", void 0), r(this, "handleClick", function(e2) {
      var t3 = e2.target;
      t3 && i2.iframeElement && (t3.classList.contains("show") ? (t3.classList.remove("show"), i2.iframeElement.style.visibility = "hidden") : (t3.classList.add("show"), i2.iframeElement.style.visibility = "visible"));
    }), this.element = document.createElement("button");
    var n2 = document.createElement("img");
    n2.src = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='32'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20256'%3e%3cpath%20fill='%23007ACC'%20d='M0%20128v128h256V0H0z'%3e%3c/path%3e%3cpath%20fill='%23FFF'%20d='m56.612%20128.85l-.081%2010.483h33.32v94.68h23.568v-94.68h33.321v-10.28c0-5.69-.122-10.444-.284-10.566c-.122-.162-20.4-.244-44.983-.203l-44.74.122l-.121%2010.443Zm149.955-10.742c6.501%201.625%2011.459%204.51%2016.01%209.224c2.357%202.52%205.851%207.111%206.136%208.208c.08.325-11.053%207.802-17.798%2011.988c-.244.162-1.22-.894-2.317-2.52c-3.291-4.795-6.745-6.867-12.028-7.233c-7.76-.528-12.759%203.535-12.718%2010.321c0%201.992.284%203.17%201.097%204.795c1.707%203.536%204.876%205.649%2014.832%209.956c18.326%207.883%2026.168%2013.084%2031.045%2020.48c5.445%208.249%206.664%2021.415%202.966%2031.208c-4.063%2010.646-14.14%2017.879-28.323%2020.276c-4.388.772-14.79.65-19.504-.203c-10.28-1.828-20.033-6.908-26.047-13.572c-2.357-2.6-6.949-9.387-6.664-9.874c.122-.163%201.178-.813%202.356-1.504c1.138-.65%205.446-3.129%209.509-5.485l7.355-4.267l1.544%202.276c2.154%203.29%206.867%207.801%209.712%209.305c8.167%204.307%2019.383%203.698%2024.909-1.26c2.357-2.153%203.332-4.388%203.332-7.68c0-2.966-.366-4.266-1.91-6.501c-1.99-2.845-6.054-5.242-17.595-10.24c-13.206-5.69-18.895-9.224-24.096-14.832c-3.007-3.25-5.852-8.452-7.03-12.8c-.975-3.617-1.22-12.678-.447-16.335c2.723-12.76%2012.353-21.659%2026.25-24.3c4.51-.853%2014.994-.528%2019.424.569Z'%3e%3c/path%3e%3c/svg%3e", n2.alt = "talk logo", n2.style.borderRadius = "100px", this.element.appendChild(n2), this.applyStyles(), this.addEventListeners(), this.iframeElement = void 0;
  }
  return n(t2, [{ key: "applyStyles", value: function() {
    Object.assign(this.element.style, t2.STYLES);
  } }, { key: "addEventListeners", value: function() {
    this.element.addEventListener("click", this.handleClick);
  } }, { key: "init", value: function() {
    var e2 = new o();
    this.iframeElement = e2.init(), document.body.appendChild(this.element);
  } }]);
}();
r(a, "STYLES", { position: "fixed", bottom: "30px", right: "30px", width: "auto", padding: "0", margin: "0", border: "0px solid transparent", backgroundColor: "transparent", cursor: "pointer", zIndex: "10" }), new a().init();
