import {
    V as R,
    P as y,
    o as g,
    m,
    p as t,
    ah as F,
    Z as l,
    ad as D,
    Q as B,
    r as I,
    W as L,
    ak as j,
    X as x,
    Y as W,
    $ as b,
    ao as z,
    ap as V,
    N as f,
    aj as M,
    af as $,
    a0 as O,
    F as E
} from "./common.modules-85a637e4.js";
import {
    r as G
} from "./page-activity-DailySignIn-5283d3ca.js";
import {
    _ as C,
    i as P,
    k as H,
    c as A,
    g as N,
    a as Q
} from "./page-activity-ActivityDetail-8a822c52.js";
window.getBuildInfo = function() {
    return {
        buildTime: "4/18/2025, 8:14:29 PM",
        branch: " commitId:8f7cd864d454367470bdc5356c065914ead7b152"
    }
};
const U = {
        key: 0,
        class: "step"
    },
    X = R({
        __name: "Progress",
        props: {
            strokeWidth: {
                type: Number,
                default: 12
            },
            total: {
                type: Number,
                default: 0
            },
            numerical: {
                type: Number,
                default: 0
            },
            color: {
                type: String,
                default: "var(--text_color_L4)"
            },
            trackColor: {
                type: String,
                default: "var(--bg_color_L1)"
            },
            isShowStep: {
                type: Boolean,
                default: !0
            }
        },
        setup(u) {
            const e = u,
                d = y(() => ({
                    background: e.trackColor,
                    height: `${e.strokeWidth}px`,
                    "border-radius": `${e.strokeWidth}px`
                })),
                a = y(() => {
                    let n = "0";
                    return e.numerical == 0 || e.total == 0 ? n = "0" : e.numerical > e.total ? n = "100" : n = String((e.numerical / e.total * 100).toFixed(2)), {
                        background: e.color,
                        width: `${n}%`,
                        height: `${e.strokeWidth}px`,
                        "border-radius": `${e.strokeWidth}px`
                    }
                }),
                p = y(() => `${e.numerical}/${e.total}`);
            return (n, w) => (g(), m("div", {
                class: "progress",
                style: F(d.value)
            }, [t("div", {
                class: "line",
                style: F(a.value)
            }, null, 4), u.isShowStep ? (g(), m("div", U, l(p.value), 1)) : D("v-if", !0)], 4))
        }
    });
const Y = C(X, [
        ["__scopeId", "data-v-bff59ba2"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar048-india-91club/src/components/common/Progress.vue"]
    ]),
    Z = {
        class: "head"
    },
    q = {
        class: "title"
    },
    J = {
        class: "orange"
    },
    K = {
        class: "description"
    },
    ee = {
        class: "foot"
    },
    te = ["onClick"],
    se = {
        class: "dialog-wrapper"
    },
    re = {
        class: "dialog-title"
    },
    ae = {
        class: "dialog-content"
    },
    oe = R({
        __name: "listItem",
        props: {
            list: {
                type: Array,
                default: () => [{
                    rewardAmount: 123
                }]
            },
            isRule: {
                type: Boolean,
                default: !1
            }
        },
        emits: ["gorecharge"],
        setup(u, {
            emit: e
        }) {
            const {
                t: d
            } = B(), a = I(!1), p = I("");
            let n = !1;
            const {
                receiveFirstRechargeReward: w,
                ActiveSotre: k
            } = P(), {
                closeFirstSave: S
            } = H(), v = (o, s) => {
                const {
                    canReceive: c,
                    isFinshed: i
                } = o;
                if (!c) return "n2" + (s ? " rule" : "");
                if (c && !i) return "n1" + (s ? " rule" : "");
                if (i) return "n3" + (s ? " rule" : "");
                if (!i) return "n2" + (s ? " rule" : "")
            }, _ = o => {
                const {
                    canReceive: s,
                    isFinshed: c
                } = o;
                return d(s ? c ? "claimed" : "receive" : "torecharge")
            }, h = async o => {
                const {
                    canReceive: s,
                    isFinshed: c
                } = o;
                if (!s) return e("gorecharge");
                if (c || n) return;
                n = !0;
                const i = await w(o.id);
                n = !1, i && (k.value.receiveAmount = o.rewardAmount, k.value.showReceiveDialog = !0, S())
            };
            return (o, s) => {
                const c = L("van-dialog"),
                    i = j("lazy");
                return g(), m(x, null, [(g(!0), m(x, null, W(u.list, (r, T) => (g(), m("div", {
                    key: T,
                    class: "first_list-item"
                }, [t("div", Z, [t("div", q, [V(l(o.$t("firstSave")), 1), t("span", null, l(r.rechargeAmount), 1)]), t("div", J, "+ " + l(f(A)(r.rewardAmount)), 1)]), t("div", K, l(o.$t("firstSaveT", [r.rechargeAmount, r.rewardAmount])), 1), t("div", ee, [b(Y, {
                    "stroke-width": 16,
                    color: "var(--norm_secondary-color)",
                    total: r.rechargeAmount,
                    numerical: r.canReceive ? r.rechargeAmount : 0
                }, null, 8, ["total", "numerical"]), t("div", {
                    class: M(["btn", [v(r, u.isRule)]]),
                    onClick: ue => h(r)
                }, l(_(r)), 11, te)])]))), 128)), b(c, {
                    show: a.value,
                    "onUpdate:show": s[2] || (s[2] = r => a.value = r),
                    "show-confirm-button": !1,
                    className: "noOverHidden"
                }, {
                    default: z(() => [t("div", se, [$(t("img", null, null, 512), [
                        [i, f(N)("public", "succeed")]
                    ]), t("div", re, l(o.$t("awardsReceived")), 1), t("div", ae, [$(t("img", null, null, 512), [
                        [i, f(N)("wallet", "balance")]
                    ]), t("span", null, l(f(A)(p.value)), 1)]), t("div", {
                        class: "dialog-btn",
                        onClick: s[0] || (s[0] = r => a.value = !1)
                    }, l(o.$t("confirm")), 1), t("div", {
                        class: "dialog-footer",
                        onClick: s[1] || (s[1] = r => a.value = !1)
                    }, [$(t("img", null, null, 512), [
                        [i, f(Q)("activity/DailyTask", "close")]
                    ])])])]),
                    _: 1
                }, 8, ["show"])], 64)
            }
        }
    });
const ne = C(oe, [
        ["__scopeId", "data-v-48dabef8"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar048-india-91club/src/components/Activity/FirstRecharge/listItem.vue"]
    ]),
    ie = {
        class: "first_list"
    },
    le = R({
        __name: "index",
        setup(u) {
            const {
                ActiveSotre: e,
                getFirstRechargeList: d
            } = P(), {
                t: a
            } = B(), p = O(), n = y(() => {
                var v;
                return (v = e.value.FirstRechargeList) != null && v.length ? e.value.FirstRechargeList.reduce((_, h) => Math.max(_.rewardAmount || _, h.rewardAmount)) : "0"
            }), w = sessionStorage.getItem("fa1") || "1.00", k = y(() => [a("firstSave1", [A(n.value)]), a("firstSave2"), a("firstSave3"), a("firstSave4", [w]), a("firstSave5"), a("firstSave6")]), S = () => {
                p.push({
                    name: "Recharge"
                })
            };
            return E(() => {
                d()
            }), (v, _) => {
                const h = L("NavBar");
                return g(), m(x, null, [b(h, {
                    title: v.$t("firstSaveTitle"),
                    "left-arrow": "",
                    onClickLeft: _[0] || (_[0] = o => f(p).go(-1))
                }, null, 8, ["title"]), t("div", ie, [b(ne, {
                    list: f(e).FirstRechargeList,
                    onGorecharge: S
                }, null, 8, ["list"])]), b(G, {
                    name: v.$t("firstSaveRule"),
                    tiplist: k.value
                }, null, 8, ["name", "tiplist"])], 64)
            }
        }
    });
const ce = C(le, [
        ["__scopeId", "data-v-c0418dcc"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar048-india-91club/src/views/activity/FirstRecharge/index.vue"]
    ]),
    fe = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: ce
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    ne as f, fe as i
};
//# sourceMappingURL=page-activity-FirstRecharge-47ab81e4.js.map