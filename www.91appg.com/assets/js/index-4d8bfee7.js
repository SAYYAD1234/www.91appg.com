import {
    V as j,
    a0 as re,
    a1 as Z,
    W as F,
    o as h,
    m as T,
    X as J,
    Y as we,
    p as t,
    an as D,
    N as _,
    ad as I,
    $ as k,
    Z as c,
    aj as ce,
    F as x,
    T as ue,
    aw as de,
    r as p,
    ak as ve,
    af as N,
    aq as ke,
    ar as $e,
    w as Se,
    ac as Ce,
    P as B,
    M as U,
    ao as P,
    ap as H,
    Q as Ie,
    b3 as Le,
    aC as oe,
    bu as Ae,
    a9 as Te,
    ai as W,
    ah as De,
    G as Pe,
    bv as Be,
    bw as Ne,
    bx as Fe,
    by as Ee,
    bz as Ve,
    ag as z,
    n as Re,
    t as _e,
    bq as Oe,
    bA as je,
    bB as Ge,
    bC as Me,
    bD as Ue,
    bE as xe,
    bF as ze,
    bG as He,
    bH as Ke,
    a$ as We,
    bI as Ye,
    aZ as qe,
    bJ as Xe,
    bK as Qe,
    bL as Ze,
    bM as Je,
    bN as et,
    bO as tt,
    bP as st,
    a_ as at,
    bQ as ot,
    bR as nt,
    bS as it,
    bT as lt,
    bU as rt,
    bV as ct,
    bW as ut,
    b2 as dt,
    bX as vt,
    bY as _t,
    bZ as mt,
    b_ as pt,
    b$ as ft,
    c0 as gt,
    c1 as ht,
    c2 as bt,
    c3 as yt,
    c4 as wt,
    c5 as kt,
    c6 as $t,
    c7 as St,
    c8 as Ct,
    c9 as It
} from "./common.modules-85a637e4.js";
import {
    _ as E,
    G as me,
    aQ as pe,
    g as K,
    k as se,
    i as fe,
    v as ee,
    c as te,
    a3 as Lt,
    a4 as At,
    dy as Tt,
    dz as Dt,
    dA as Pt,
    dB as Bt,
    a$ as Nt,
    c2 as Ft,
    b0 as Et,
    b1 as Vt,
    K as ge,
    a as ne,
    d as Rt,
    dC as Ot,
    dD as ie,
    dE as jt,
    aC as he
} from "./page-activity-ActivityDetail-8a822c52.js";
import {
    f as Gt
} from "./page-activity-FirstRecharge-47ab81e4.js";
import "./native/index-59680276.js";
import "./en-9cbceffc.js";
import "./page-activity-DailySignIn-5283d3ca.js";
import "./page-activity-Championship-e71be75c.js";
window.getBuildInfo = function() {
    return {
        buildTime: "4/18/2025, 8:14:29 PM",
        branch: " commitId:8f7cd864d454367470bdc5356c065914ead7b152"
    }
};
(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const n of document.querySelectorAll('link[rel="modulepreload"]')) o(n);
    new MutationObserver(n => {
        for (const i of n)
            if (i.type === "childList")
                for (const f of i.addedNodes) f.tagName === "LINK" && f.rel === "modulepreload" && o(f)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function a(n) {
        const i = {};
        return n.integrity && (i.integrity = n.integrity), n.referrerPolicy && (i.referrerPolicy = n.referrerPolicy), n.crossOrigin === "use-credentials" ? i.credentials = "include" : n.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
    }

    function o(n) {
        if (n.ep) return;
        n.ep = !0;
        const i = a(n);
        fetch(n.href, i)
    }
})();
const Mt = {
        class: "tabbar__container"
    },
    Ut = ["onClick"],
    xt = {
        key: 1,
        class: "promotionBg"
    },
    zt = {
        key: 2
    },
    Ht = j({
        __name: "91club",
        setup(s) {
            const e = re(),
                a = Z();
            async function o(i) {
                await e.push({
                    name: i
                })
            }
            const n = [{
                name: "promotion"
            }, {
                name: "activity"
            }, {
                name: "home"
            }, {
                name: "wallet"
            }, {
                name: "main"
            }];
            return (i, f) => {
                const u = F("svg-icon");
                return h(), T("div", Mt, [(h(), T(J, null, we(n, (v, r) => t("div", {
                    class: ce(["tabbar__container-item", {
                        active: v.name === _(a).name
                    }]),
                    key: v + "" + r,
                    onClick: g => o(v.name)
                }, [r !== 2 ? (h(), D(u, {
                    key: 0,
                    name: v.name === _(a).name ? `p3_${v.name}_a` : `p3_${v.name}`
                }, null, 8, ["name"])) : I("v-if", !0), r == 2 ? (h(), T("div", xt, [k(u, {
                    name: `p3_${v.name}`
                }, null, 8, ["name"])])) : (h(), T("span", zt, c(i.$t(v.name)), 1))], 10, Ut)), 64))])
            }
        }
    });
const Kt = E(Ht, [
    ["__scopeId", "data-v-60defda3"],
    ["__file", "/usr/local/jenkins-prod/workspace/ar048-india-91club/src/components/TabBar/91club.vue"]
]);

function Wt() {
    const s = me(),
        e = () => {
            document.visibilityState === "visible" ? s.setvisibility() : s.setvisibility(0)
        };
    x(() => {
        document.addEventListener("visibilitychange", e)
    }), ue(() => {
        document.removeEventListener("visibilitychange", e)
    })
}
const Yt = j({
    __name: "Customer",
    setup(s) {
        de(b => ({
            "f6a705e1-currentFontFamily": V.value
        }));
        const e = p(!1),
            a = p({
                x: 0,
                y: 0
            }),
            o = p(0),
            n = p(0),
            i = p(0),
            f = p(0),
            u = p(0),
            v = p(0),
            r = p();
        let g, w, S, l;
        const {
            getSelfCustomerServiceLink: d
        } = pe({
            ServerType: 2
        });

        function $() {
            M(g, w, S, l) || d()
        }
        x(() => {
            r.value = document.getElementById("customerId")
        });

        function y(b) {
            e.value = !0;
            var C;
            b.touches ? C = b.touches[0] : C = b, a.value.x = C.clientX, a.value.y = C.clientY, o.value = r.value.offsetLeft, n.value = r.value.offsetTop, g = b.clientX, w = b.clientY
        }

        function m(b) {
            if (e.value) {
                var C, R = document.getElementById("customerId"),
                    G = R.clientWidth,
                    Y = R.clientHeight,
                    q = document.documentElement.clientHeight,
                    L = document.documentElement.clientWidth;
                b.touches ? C = b.touches[0] : C = b, i.value = C.clientX - a.value.x, f.value = C.clientY - a.value.y, u.value = o.value + i.value, v.value = n.value + f.value, u.value <= 0 && (u.value = 0), v.value <= 0 && (v.value = 0), u.value >= L - G && (u.value = L - G), v.value >= q - Y && (v.value = q - Y), r.value.style.left = u.value + "px", r.value.style.top = v.value + "px", document.addEventListener("touchmove", function() {
                    b.preventDefault()
                }, !1)
            }
            b.stopPropagation(), b.preventDefault()
        }

        function A(b) {
            e.value = !1, S = b.clientX, l = b.clientY
        }

        function M(b, C, R, G) {
            return !(Math.sqrt((b - R) * (b - R) + (C - G) * (C - G)) <= 1)
        }
        const V = p("bahnschrift");
        return (b, C) => {
            const R = ve("lazy");
            return h(), T("div", {
                class: "customer",
                onClick: $,
                onMousedown: y,
                onTouchstart: y,
                onMousemove: m,
                onTouchmove: m,
                onMouseup: A,
                id: "customerId"
            }, [N(t("img", null, null, 512), [
                [R, _(K)("home", "icon_sevice")]
            ])], 32)
        }
    }
});
const qt = E(Yt, [
        ["__file", "/usr/local/jenkins-prod/workspace/ar048-india-91club/src/components/common/Customer.vue"]
    ]),
    Xt = "/assets/png/logo-f7e29255.png";
const Qt = {},
    be = s => (ke("data-v-5eb72be7"), s = s(), $e(), s),
    Zt = {
        class: "start-page"
    },
    Jt = be(() => t("div", {
        class: "dice"
    }, null, -1)),
    es = be(() => t("img", {
        class: "logo",
        src: Xt
    }, null, -1));

function ts(s, e) {
    return h(), T("div", Zt, [t("div", null, [Jt, t("p", null, c(s.$t("fairAndSafe")), 1), es])])
}
const ss = E(Qt, [
        ["render", ts],
        ["__scopeId", "data-v-5eb72be7"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar048-india-91club/entrance/91club/StartPage.vue"]
    ]),
    as = {
        class: "header"
    },
    os = {
        class: "title"
    },
    ns = {
        class: "tip"
    },
    is = {
        class: "container"
    },
    ls = {
        class: "footer"
    },
    rs = j({
        __name: "dialog",
        setup(s) {
            const e = re(),
                a = Z(),
                o = p(!1),
                {
                    closeFirstSave: n
                } = se(),
                {
                    ActiveSotre: i,
                    getFirstRechargeList: f
                } = fe(),
                u = Se(new Date).format("YYYY-MM-DD"),
                v = Ce("firstSave", null),
                r = B(() => v.value == u),
                g = () => {
                    r.value ? (v.value = "", localStorage.removeItem("firstSave")) : v.value = u
                },
                w = () => {
                    o.value = !1, n()
                },
                S = ["activity", "home", "main", "wallet", "promotion"];
            U(() => a.name, y => {
                S.includes(a.name) && l()
            });
            const l = () => {
                    if (v.value == u) return n();
                    f().then(y => {
                        if (!y.length) {
                            o.value = !1, n();
                            return
                        }
                        const m = y.find(A => A.isFinshed);
                        m && (i.value.isShowFirstSaveDialog = !1), m || (o.value = !0)
                    })
                },
                d = () => {
                    o.value = !1, n(!0), e.push({
                        name: "FirstRecharge"
                    })
                },
                $ = () => {
                    o.value = !1, n(!0), e.push({
                        name: "Recharge"
                    })
                };
            return x(() => {
                S.includes(a.name) && l()
            }), (y, m) => {
                const A = F("van-checkbox"),
                    M = F("van-dialog");
                return h(), D(M, {
                    show: o.value,
                    "onUpdate:show": m[1] || (m[1] = V => o.value = V),
                    className: "firstSaveDialog"
                }, {
                    title: P(() => [t("div", as, [t("div", os, c(y.$t("firstDialogH")), 1), t("div", ns, c(y.$t("firstDialogTip")), 1)])]),
                    footer: P(() => [t("div", ls, [I(` <div class="active" :class="{ a: isActive}" @click="changeActive"><svg-icon name="active" />{{ $t('noTipToday') }}</div> `), t("div", {
                        class: ce(["active", {
                            a: r.value
                        }]),
                        onClick: g
                    }, [k(A, {
                        modelValue: r.value,
                        "onUpdate:modelValue": m[0] || (m[0] = V => r.value = V)
                    }, null, 8, ["modelValue"]), H(c(y.$t("noTipToday")), 1)], 2), t("div", {
                        class: "btn",
                        onClick: d
                    }, c(y.$t("activity")), 1)])]),
                    default: P(() => [t("div", is, [k(Gt, {
                        list: _(i).FirstRechargeList,
                        onGorecharge: $
                    }, null, 8, ["list"])]), t("div", {
                        class: "close",
                        onClick: w
                    })]),
                    _: 1
                }, 8, ["show"])
            }
        }
    });
const cs = E(rs, [
        ["__scopeId", "data-v-9cd12fb2"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar048-india-91club/src/components/Activity/FirstRecharge/dialog.vue"]
    ]),
    us = {
        class: "dialog-window"
    },
    ds = {
        class: "dialog-wrapper"
    },
    vs = {
        class: "dialog-title"
    },
    _s = {
        class: "dialog-content"
    },
    ms = {
        class: "dialog-window"
    },
    ps = {
        class: "dialog-wrapper"
    },
    fs = {
        class: "dialog-title"
    },
    gs = {
        class: "dialog-tips"
    },
    hs = {
        class: "dialog-content"
    },
    bs = {
        class: "dialog-tips",
        style: {
            "margin-bottom": "0"
        }
    },
    ys = {
        class: "dialog-window"
    },
    ws = {
        class: "dialog-wrapper"
    },
    ks = {
        class: "dialog-tips",
        style: {
            "margin-top": "10px"
        }
    },
    $s = {
        class: "dialog-title",
        style: {
            "margin-top": "0"
        }
    },
    Ss = {
        class: "dialog-tips"
    },
    Cs = {
        class: "dialog-content"
    },
    Is = {
        class: "dialog-18"
    },
    Ls = {
        class: "tip_txt"
    },
    As = {
        class: "dialog-footer"
    },
    Ts = {
        class: "dialog-18"
    },
    Ds = {
        class: "dialog-footer"
    },
    Ps = j({
        __name: "AllPageDialog",
        setup(s) {
            const {
                ActiveSotre: e
            } = fe(), {
                store: a,
                closeInvite: o,
                showFirstSave: n,
                onReturnAwards: i
            } = se(), f = p(!1), u = p(!1), v = localStorage.getItem("is18") || void 0, r = ee(), g = ["poppg", "POP888", "POP555", "pop", "POP678"], w = B(() => g.includes(r.projectName)), S = l => {
                l ? (localStorage.setItem("is18", "1"), f.value = !1) : u.value = !0
            };
            return U(() => w.value, l => {
                l && (f.value = !(v && v === "1"))
            }, {
                immediate: !0
            }), (l, d) => {
                const $ = F("van-dialog"),
                    y = ve("lazy");
                return h(), T(J, null, [_(n) ? (h(), D(cs, {
                    key: 0
                })) : I("v-if", !0), k($, {
                    show: _(e).showReceiveDialog,
                    "onUpdate:show": d[1] || (d[1] = m => _(e).showReceiveDialog = m),
                    "show-confirm-button": !1,
                    className: "noOverHidden"
                }, {
                    default: P(() => [t("div", us, [t("div", ds, [N(t("img", null, null, 512), [
                        [y, _(K)("public", "succeed")]
                    ]), t("div", vs, c(l.$t("awardsReceived")), 1), t("div", _s, [N(t("img", null, null, 512), [
                        [y, _(K)("activity/DailyTask", "amountIcon")]
                    ]), t("span", null, c(_(te)(_(e).receiveAmount)), 1)]), t("div", {
                        class: "dialog-btn",
                        onClick: d[0] || (d[0] = m => _(e).showReceiveDialog = !1)
                    }, c(l.$t("confirm")), 1)])])]),
                    _: 1
                }, 8, ["show"]), k($, {
                    show: _(a).invite,
                    "onUpdate:show": d[3] || (d[3] = m => _(a).invite = m),
                    "show-confirm-button": !1,
                    className: "noOverHidden"
                }, {
                    default: P(() => [t("div", ms, [t("div", ps, [N(t("img", null, null, 512), [
                        [y, _(K)("public", "succeed")]
                    ]), t("div", fs, c(l.$t("inviteTips")), 1), t("p", gs, c(l.$t("inviteAmount")), 1), t("div", hs, [t("span", bs, c(l.$t("commissionAmount")), 1), t("span", null, c(_(te)(_(a).rebateAmount)), 1)]), t("div", {
                        class: "dialog-btn",
                        onClick: d[2] || (d[2] = m => _(o)())
                    }, c(l.$t("receive")), 1)])])]),
                    _: 1
                }, 8, ["show"]), k($, {
                    show: _(a).oldUser,
                    "onUpdate:show": d[5] || (d[5] = m => _(a).oldUser = m),
                    "show-confirm-button": !1,
                    "close-on-click-overlay": !0,
                    className: "noOverHidden"
                }, {
                    default: P(() => [t("div", ys, [t("div", ws, [N(t("img", null, null, 512), [
                        [y, _(K)("public", "succeed")]
                    ]), t("p", ks, c(l.$t("oldPromptTip")), 1), t("div", $s, c(l.$t("oldPrompt")), 1), t("p", Ss, c(l.$t("oldPromptGift")), 1), t("div", Cs, [t("span", null, c(_(te)(_(a).returnAwards)), 1)]), t("div", {
                        class: "dialog-btn",
                        onClick: d[4] || (d[4] = m => _(i)())
                    }, c(l.$t("receive")), 1)])])]),
                    _: 1
                }, 8, ["show"]), k($, {
                    show: f.value,
                    "onUpdate:show": d[8] || (d[8] = m => f.value = m),
                    className: "custom18dialog noOverHidden",
                    "show-confirm-button": !1,
                    "close-on-click-overlay": !1
                }, {
                    default: P(() => [t("div", Is, [t("div", null, [t("span", null, c(l.$t("loginTips", [_(r).projectName])), 1), t("div", Ls, c(l.$t("brazildialog1")), 1)]), t("div", As, [t("div", {
                        class: "btn-cnf dialog-btn",
                        onClick: d[6] || (d[6] = m => S(!0))
                    }, c(l.$t("brazildialog2")), 1), t("div", {
                        class: "btn-cancel dialog-btn",
                        onClick: d[7] || (d[7] = m => S(!1))
                    }, c(l.$t("brazildialog3")), 1)])])]),
                    _: 1
                }, 8, ["show"]), k($, {
                    show: u.value,
                    "onUpdate:show": d[10] || (d[10] = m => u.value = m),
                    className: "custom18dialog noAge",
                    "show-confirm-button": !1,
                    "close-on-click-overlay": !1
                }, {
                    default: P(() => [t("div", Ts, [t("div", null, [t("span", null, c(l.$t("brazildialog4")), 1)]), t("div", Ds, [t("div", {
                        class: "btn-cancel dialog-btn no-btn",
                        onClick: d[9] || (d[9] = m => u.value = !1)
                    }, c(l.$t("confirm")), 1)])])]),
                    _: 1
                }, 8, ["show"])], 64)
            }
        }
    });
const Bs = E(Ps, [
        ["__scopeId", "data-v-3d4fafbb"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar048-india-91club/src/components/common/AllPageDialog.vue"]
    ]),
    Ns = j({
        __name: "App",
        setup(s) {
            de(L => ({
                "f13b4d11-currentFontFamily": V.value
            }));
            const {
                openAll: e
            } = se(), a = Ft(), o = p(!1), n = p(!1), i = Z(), f = Lt(), u = ee(), {
                locale: v
            } = Ie(), r = me(), g = p(!1), w = B(() => i.meta.tabBar), S = "redHome", l = B(() => ["electronic", "blackGoldHome"].includes(S) ? !1 : !["/wallet/Withdraw/C2cDetail", "/wallet/RechargeHistory/RechargeUpiDetail", "/wallet/Withdraw/Upi", "/wallet/Withdraw/AddUpi", "/wallet/Withdraw/c2cCancelWithdrawal/index.vue", "/wallet/otherPay?type=C2C", "/home/game"].includes(i.path)), d = p(0), $ = p(Math.floor(Math.random() * 1e4)), y = B(() => i.name + $.value), m = () => {
                a.on("changeKeepAliveKey", () => {
                    $.value = Math.floor(Math.random() * 1e4)
                })
            };
            sessionStorage.getItem("isload") ? o.value = !1 : (n.value = !0, sessionStorage.setItem("isload", n.value.toString()), o.value = !0), u.getHomeSetting(), U(() => u.getAreacode, L => {
                L && f.setNumberType(L.substring(1))
            }), U(() => u.getDL, L => {
                v.value = L, r.updateLanguage(L), Et(L), Vt(ge.global.t)
            }), setTimeout(() => {
                o.value = !1
            }, 2e3);
            const A = p(!1),
                M = At();
            M.$subscribe((L, O) => {
                A.value = O.isLoading, M.setLoading(A.value)
            });
            const V = p("bahnschrift");
            let b = Tt(),
                C = u.getLanguage,
                R = Dt(b, C);
            const G = async L => {
                    const O = [{
                            title: "vi",
                            fontStyle: "bahnschrift"
                        }, {
                            title: "else",
                            fontStyle: "'Roboto', 'Inter', sans-serif"
                        }],
                        X = O.findIndex(Q => Q.title == R);
                    X >= 0 ? V.value = O[X].fontStyle : V.value = O[O.length - 1].fontStyle
                },
                Y = () => {
                    a.on("keyChange", () => {
                        d.value++
                    }), a.on("changeIsGame", () => {
                        g.value = !g.value, A.value = !A.value
                    })
                },
                q = () => {
                    a.off("keyChange"), a.off("changeKeepAliveKey"), a.off("changeIsGame")
                };
            return f.setNumberType(u.getAreacode.substring(1)), G(), x(() => {
                Pt() && Bt(), e(), q(), Y(), m(), localStorage.getItem("language") && Nt(localStorage.getItem("language"))
            }), Wt(), (L, O) => {
                const X = F("LoadingView");
                return h(), T(J, null, [k(X, {
                    loading: A.value,
                    type: "loading",
                    isGame: g.value
                }, {
                    default: P(() => [(h(), D(_(Ae), {
                        key: d.value
                    }, {
                        default: P(({
                            Component: Q
                        }) => [(h(), D(Le, {
                            max: 1
                        }, [_(i).meta.keepAlive ? (h(), D(oe(Q), {
                            key: y.value
                        })) : I("v-if", !0)], 1024)), _(i).meta.keepAlive ? I("v-if", !0) : (h(), D(oe(Q), {
                            key: 0
                        }))]),
                        _: 1
                    })), I("online custom service"), l.value ? (h(), D(qt, {
                        key: 0
                    })) : I("v-if", !0), w.value ? (h(), D(Kt, {
                        key: 1
                    })) : I("v-if", !0)]),
                    _: 1
                }, 8, ["loading", "isGame"]), o.value ? (h(), D(ss, {
                    key: 0
                })) : I("v-if", !0), k(Bs)], 64)
            }
        }
    });
const Fs = E(Ns, [
    ["__file", "/usr/local/jenkins-prod/workspace/ar048-india-91club/entrance/91club/App.vue"]
]);
const Es = {
        mounted(s, e) {
            if (typeof e.value[0] != "function" || typeof e.value[1] != "number") throw new Error("v-debounce: value must be an array that includes a function and a number");
            let a = null;
            const o = e.value[0],
                n = e.value[1];
            s.__handleClick__ = function() {
                a && clearTimeout(a), a = setTimeout(() => {
                    o()
                }, n || 500)
            }, s.addEventListener("click", s.__handleClick__)
        },
        beforeUnmount(s) {
            s.removeEventListener("click", s.__handleClick__)
        }
    },
    Vs = {
        mounted(s, e) {
            if (typeof e.value[0] != "function" || typeof e.value[1] != "number") throw new Error("v-throttle: value must be an array that includes a function and a number");
            let a = null;
            const o = e.value[0],
                n = e.value[1];
            s.__handleClick__ = function() {
                a && clearTimeout(a), s.disabled || (s.disabled = !0, o(), a = setTimeout(() => {
                    s.disabled = !1
                }, n || 500))
            }, s.addEventListener("click", s.__handleClick__)
        },
        beforeUnmount(s) {
            s.removeEventListener("click", s.__handleClick__)
        }
    },
    Rs = {
        mounted(s, e) {
            s.addEventListener("input", a => {
                const n = s.value.replace(/\D+/g, "");
                s.value = n, e.value = n
            })
        }
    },
    Os = s => ({
        beforeMount: (e, a) => {
            e.classList.add("ar-lazyload");
            const {
                value: o
            } = a;
            e.dataset.origin = o, s.observe(e)
        },
        updated(e, a) {
            e.dataset.origin = a.value, s.observe(e)
        },
        unmounted(e, a) {
            s.unobserve(e)
        },
        mounted(e, a) {
            s.observe(e)
        }
    }),
    js = {
        mounted(s, e) {
            let a = 0;
            const o = e.value && e.value.wait ? e.value.wait : 3e3,
                n = i => {
                    const f = Date.now();
                    f - a >= o && (a = f, e.value && e.value.handler && e.value.handler(i))
                };
            s.addEventListener("click", n), s._throttleClickCleanup = () => {
                s.removeEventListener("click", n)
            }
        },
        unmounted(s) {
            s._throttleClickCleanup && s._throttleClickCleanup(), delete s._throttleClickCleanup
        }
    },
    Gs = {
        mounted(s, e) {
            const {
                value: a
            } = e;
            let o = Te("permission", null);
            o.value === null || !a || (o && (o = JSON.parse(o.value)), o && o[a] === !1 && (s.style.display = "none"))
        }
    },
    le = {
        debounce: Es,
        throttle: Vs,
        onlyNum: Rs,
        throttleClick: js,
        haspermission: Gs
    },
    Ms = {
        install: function(s) {
            Object.keys(le).forEach(a => {
                s.directive(a, le[a])
            });
            const e = new IntersectionObserver(a => {
                a.forEach(o => {
                    if (o.isIntersecting) {
                        const n = o.target;
                        n.src = n.dataset.origin || ne("images", "avatar"), n.onerror = () => {
                            e.unobserve(n);
                            let i = n.dataset.img || ne("images", "avatar");
                            if (!i || i != null && i.includes("undefined")) {
                                n.onerror = null;
                                return
                            }
                            n.src = i, n.style.objectFit = "contain"
                        }, n.classList.remove("ar-lazyload"), e.unobserve(n)
                    }
                })
            }, {
                rootMargin: "0px 0px -50px 0px"
            });
            s.directive("lazy", Os(e))
        }
    },
    Us = {
        class: "navbar-fixed"
    },
    xs = {
        class: "navbar__content"
    },
    zs = {
        class: "navbar__content-center"
    },
    Hs = {
        class: "navbar__content-title"
    },
    Ks = j({
        __name: "NavBar",
        props: {
            title: {
                type: String,
                default: ""
            },
            placeholder: {
                type: Boolean,
                default: !0
            },
            leftArrow: {
                type: Boolean,
                default: !1
            },
            backgroundColor: {
                type: String,
                default: "#f7f8ff"
            },
            classN: {
                type: String,
                default: ""
            },
            headLogo: {
                type: Boolean,
                default: !1
            },
            headerUrl: {
                type: String,
                default: ""
            }
        },
        emits: ["click-left", "click-right"],
        setup(s, {
            emit: e
        }) {
            const a = p(),
                o = ee(),
                n = B(() => o.getHeadLogo),
                i = () => {
                    e("click-left")
                },
                f = () => {
                    e("click-right")
                };
            return x(() => {}), (u, v) => {
                const r = F("van-icon");
                return h(), T("div", {
                    class: "navbar",
                    ref_key: "navbar",
                    ref: a
                }, [t("div", Us, [t("div", xs, [t("div", {
                    class: "navbar__content-left",
                    onClick: i
                }, [W(u.$slots, "left", {}, () => [s.leftArrow ? (h(), D(r, {
                    key: 0,
                    name: "arrow-left"
                })) : I("v-if", !0)], !0)]), t("div", zs, [s.headLogo ? (h(), T("div", {
                    key: 0,
                    class: "headLogo",
                    style: De({
                        backgroundImage: "url(" + (s.headerUrl || n.value) + ")"
                    })
                }, null, 4)) : I("v-if", !0), W(u.$slots, "center", {}, () => [t("div", Hs, c(s.title), 1)], !0)]), t("div", {
                    class: "navbar__content-right",
                    onClick: f
                }, [W(u.$slots, "right", {}, void 0, !0)])])])], 512)
            }
        }
    });
const Ws = E(Ks, [
        ["__scopeId", "data-v-12a80a3e"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar048-india-91club/src/components/common/NavBar.vue"]
    ]),
    Ys = () => {
        const s = ee(),
            e = B(() => s.getFirebaseConfig),
            a = p(!1),
            o = p(!1),
            n = p(!1),
            i = p(null),
            f = async () => {
                var r;
                if (!(a.value || !((r = e.value) != null && r.projectId))) try {
                    const g = {
                            apiKey: e.value.apiKey,
                            authDomain: e.value.authDomain,
                            projectId: e.value.projectId,
                            storageBucket: e.value.storageBucket,
                            messagingSenderId: e.value.messagingSenderId,
                            appId: e.value.appId,
                            measurementId: e.value.measurementId
                        },
                        w = Be(g);
                    i.value = Ne(w), a.value = !0, u(), v()
                } catch (g) {
                    console.error("[Firebase] init error:", g)
                }
            },
            u = async () => {
                if (!a.value || !i.value) return console.warn("Firebase not init"), null;
                try {
                    if (o.value = !0, await Notification.requestPermission() !== "granted") return console.warn("not permission"), null;
                    const g = await Fe(i.value, {
                        vapidKey: e.value.keyPair
                    });
                    return localStorage.setItem("fireBaseToken", g), n.value = !0, g
                } catch (r) {
                    return console.error("[Firebase]  Token error:", r), null
                } finally {
                    o.value = !1
                }
            },
            v = () => {
                if (!i.value) {
                    console.warn("Firebase not init");
                    return
                }
                Ee(i.value, r => {
                    const {
                        title: g,
                        body: w,
                        image: S
                    } = r.notification || {};
                    navigator.serviceWorker && navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
                        type: "SHOW_NOTIFICATION",
                        payload: {
                            title: g,
                            body: w,
                            image: S
                        }
                    }), g && w && (Ve({
                        type: "primary",
                        message: `${g}：
${w}`,
                        className: "firebase-notify-with-img",
                        duration: 3e3
                    }), document.documentElement.style.setProperty("--notify-icon", `url(${S})`))
                })
            };
        return U(e, async r => {
            r != null && r.projectId && (await Pe(), await f())
        }, {
            immediate: !0
        }), {
            requestPermissionAndToken: u,
            listenForeground: v,
            isLoading: o,
            isReady: n
        }
    },
    qs = {
        class: "ar-loading-view"
    },
    Xs = {
        class: "loading-wrapper"
    },
    Qs = {
        class: "com__box"
    },
    Zs = Re('<div class="loading" data-v-647954c7><div class="shape shape-1" data-v-647954c7></div><div class="shape shape-2" data-v-647954c7></div><div class="shape shape-3" data-v-647954c7></div><div class="shape shape-4" data-v-647954c7></div></div>', 1),
    Js = {
        class: "skeleton-wrapper"
    },
    ea = {
        class: "iosDialog"
    },
    ta = {
        class: "title"
    },
    sa = {
        class: "websit_info"
    },
    aa = ["src"],
    oa = {
        class: "link"
    },
    na = {
        class: "text"
    },
    ia = {
        class: "text"
    },
    la = {
        class: "text"
    },
    ra = ["src"],
    ca = j({
        __name: "LoadingView",
        props: {
            loading: {
                type: Boolean,
                required: !0
            },
            type: {
                type: String,
                required: !0
            },
            isGame: {
                type: Boolean,
                required: !0
            }
        },
        setup(s) {
            const e = s,
                a = p();
            let o = null;
            const {
                homeState: n,
                downloadIcon: i
            } = Rt(), f = Z(), {
                getSelfCustomerServiceLink: u
            } = pe({
                ServerType: 2
            }), v = window.location.href, r = B(() => location.origin || ""), g = B(() => f.name === "game"), w = p(!1), S = Ot(() => _e(() =>
                import ("./lottie_light-8d22d04b.js").then(l => l.l), ["assets/js/lottie_light-8d22d04b.js", "assets/js/common.modules-85a637e4.js", "assets/css/common-e210f711.css"]));
            return x(async () => {
                if (v.includes("?")) {
                    const l = new URLSearchParams(v.split("?")[1]);
                    l.size && l.get("goTo") === "worktraking" && u("worktraking")
                }
                "serviceWorker" in navigator && navigator.serviceWorker.register("/firebase-messaging-sw.js").then(() => {
                    const {
                        listenForeground: l
                    } = Ys();
                    l()
                })
            }), U(() => e.loading, async () => {
                e.type === "loading" && !e.isGame && (!o && !w.value && (w.value = !0, o = (await S()).loadAnimation({
                    container: a.value,
                    renderer: "svg",
                    loop: !0,
                    autoplay: !0,
                    path: "/data.json"
                }), w.value = !1), e.loading ? o && o.play() : o && o.stop())
            }), ue(() => {
                o && o.destroy(), o = null
            }), (l, d) => {
                const $ = F("VanSkeleton"),
                    y = F("svg-icon"),
                    m = F("van-popup");
                return h(), T(J, null, [N(t("div", qs, [W(l.$slots, "template", {}, () => [N(t("div", Xs, [I(" <VanLoading /> "), N(t("div", {
                    ref_key: "element",
                    ref: a,
                    class: "loading-animat"
                }, null, 512), [
                    [z, !l.isGame]
                ]), N(t("div", Qs, [I(" loading "), Zs, I(" 说明：组件名 ")], 512), [
                    [z, l.isGame]
                ]), I(' <div class="animation"></div> ')], 512), [
                    [z, l.type === "loading"]
                ]), N(t("div", Js, [k($, {
                    row: 10
                }), k($, {
                    title: "",
                    avatar: "",
                    row: 5
                }), k($, {
                    title: "",
                    row: 5
                })], 512), [
                    [z, l.type === "skeleton"]
                ])], !0)], 512), [
                    [z, l.loading && !g.value]
                ]), W(l.$slots, "default", {}, void 0, !0), k(m, {
                    show: _(n).iosDialog,
                    "onUpdate:show": d[0] || (d[0] = A => _(n).iosDialog = A),
                    round: "",
                    closeable: "",
                    position: "bottom",
                    style: {
                        height: "40%"
                    }
                }, {
                    default: P(() => [t("div", ea, [t("div", ta, c(l.$t("pwaInstall")), 1), t("div", sa, [t("img", {
                        class: "icon",
                        src: _(i)
                    }, null, 8, aa), t("div", oa, [t("div", null, c(r.value.split("://")[1]), 1), t("div", null, c(r.value), 1)])]), t("div", na, [H("1. " + c(l.$t("pwaText1")) + " ", 1), k(y, {
                        name: "share"
                    })]), t("div", ia, [H("2. " + c(l.$t("pwaText2")) + " ", 1), t("span", null, [H(c(l.$t("pwaText3")) + " ", 1), k(y, {
                        name: "add_icon"
                    })])]), t("div", la, [H("3. " + c(l.$t("pwaText4")) + " ", 1), t("img", {
                        class: "icon",
                        src: _(i)
                    }, null, 8, ra)])])]),
                    _: 1
                }, 8, ["show"])], 64)
            }
        }
    });
const ua = E(ca, [
    ["__scopeId", "data-v-647954c7"],
    ["__file", "/usr/local/jenkins-prod/workspace/ar048-india-91club/src/components/common/LoadingView.vue"]
]);
const da = ["xlink:href"],
    va = {
        __name: "svgIcons",
        props: {
            name: {
                type: String,
                required: !0
            },
            color: {
                type: String,
                default: ""
            }
        },
        setup(s) {
            const e = s,
                a = B(() => `#icon-${e.name}`),
                o = B(() => e.name ? `svg-icon icon-${e.name}` : "svg-icon");
            return (n, i) => (h(), T("svg", Oe({
                class: o.value
            }, n.$attrs, {
                style: {
                    color: s.color
                }
            }), [t("use", {
                "xlink:href": a.value
            }, null, 8, da)], 16))
        }
    },
    _a = E(va, [
        ["__file", "/usr/local/jenkins-prod/workspace/ar048-india-91club/src/components/common/svgIcons.vue"]
    ]),
    ma = {
        class: "ar-searchbar__selector"
    },
    pa = {
        class: "ar-searchbar__selector-default"
    },
    fa = j({
        __name: "ArSelect",
        props: {
            selectName: {
                type: String,
                default: ""
            }
        },
        emits: ["click-select"],
        setup(s, {
            emit: e
        }) {
            const a = () => {
                e("click-select")
            };
            return (o, n) => {
                const i = F("van-icon");
                return h(), T("div", ma, [t("div", {
                    onClick: a
                }, [t("span", pa, c(s.selectName.replace("G9", "9G")), 1), k(i, {
                    name: "arrow-down"
                })])])
            }
        }
    });
const ga = E(fa, [
        ["__scopeId", "data-v-fa757a88"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar048-india-91club/src/components/common/ArSelect.vue"]
    ]),
    ha = s => {
        s.component("NavBar", Ws), s.component("LoadingView", ua), s.component("ArSelect", ga), s.component("svg-icon", _a), s.use(je).use(Ge).use(Me).use(Ue).use(xe).use(ze).use(He).use(Ke).use(We).use(Ye).use(qe).use(Xe).use(Qe).use(Ze).use(Je).use(et).use(tt).use(st).use(at).use(ot).use(nt).use(it).use(lt).use(rt).use(ct).use(ut).use(dt).use(vt).use(_t).use(mt).use(pt).use(ft).use(gt).use(ht).use(bt).use(yt).use(wt).use(ge).use(Ms).use(kt).use($t);
        let e = s.config.globalProperties,
            a = {};
        a.TopHeight = 38, Object.keys(ie.refiter).forEach(o => {
            a[o] = ie.refiter[o]
        }), e.$u = a
    };
jt["91club"]();
he.addRoute({
    path: "/",
    name: "home",
    component: () => _e(() =>
        import ("./page-home-other-81ef83e7.js"), ["assets/js/page-home-other-81ef83e7.js", "assets/js/common.modules-85a637e4.js", "assets/css/common-e210f711.css", "assets/js/page-activity-ActivityDetail-8a822c52.js", "assets/js/native/index-59680276.js", "assets/js/en-9cbceffc.js", "assets/css/page-activity-ActivityDetail-b950a2ed.css", "assets/css/91club-646d3873.css"]),
    meta: {
        title: "home",
        tabBar: !0,
        keepAlive: !1
    }
});
const ae = St(Fs),
    ye = Ct();
ha(ae);
ye.use(It);
ae.use(he).use(ye);
ae.mount("#app");
//# sourceMappingURL=index-4d8bfee7.js.map