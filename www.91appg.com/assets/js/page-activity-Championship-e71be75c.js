import {
    V as U,
    ae,
    r as w,
    M as z,
    P as Q,
    m as o,
    af as G,
    ag as oe,
    p as e,
    ah as ie,
    ai as D,
    o as n,
    aj as P,
    Z as s,
    ad as g,
    N as u,
    R as le,
    W as q,
    $ as S,
    ak as x,
    F as X,
    al as Z,
    I as ue,
    L as re,
    T as ee,
    am as ce,
    G as de,
    an as V,
    Q as te,
    a0 as Y,
    O as pe,
    ao as O,
    X as I,
    Y as j,
    U as ve,
    ap as M,
    aq as fe,
    ar as _e
} from "./common.modules-85a637e4.js";
import {
    u as E,
    c as B,
    _ as N,
    g as me,
    a as he,
    r as ge,
    A as ye,
    b as ke,
    j as $e,
    f as K,
    d as Te
} from "./page-activity-ActivityDetail-8a822c52.js";
window.getBuildInfo = function() {
    return {
        buildTime: "4/18/2025, 8:14:29 PM",
        branch: " commitId:8f7cd864d454367470bdc5356c065914ead7b152"
    }
};
const we = {
        class: "item"
    },
    Ce = ["src"],
    be = {
        class: "right"
    },
    Le = {
        key: 0
    },
    Re = {
        key: 1
    },
    Se = {
        key: 2
    },
    De = {
        key: 3,
        class: "time"
    },
    Ie = ["innerHTML"],
    Be = {
        key: 4,
        class: "time"
    },
    Ae = {
        key: 5,
        class: "time"
    },
    Ne = {
        class: "foot"
    },
    qe = {
        class: "amount"
    },
    Ue = U({
        __name: "card",
        props: {
            bgImgWidth: {
                type: String,
                required: !1,
                default: "100%"
            },
            bgImgHeight: {
                type: String,
                required: !1,
                default: "150px"
            },
            itemD: {
                type: null,
                required: !1,
                default: {}
            },
            state: {
                type: Number,
                required: !1
            },
            isRefresh: {
                type: Boolean,
                required: !1,
                default: !1
            }
        },
        emits: ["update:isRefresh"],
        setup(c, {
            emit: f
        }) {
            const d = c;

            function p() {
                if (d.state == 1) {
                    const a = m.value.replace(/-/g, "/"),
                        b = d.itemD.endTime.replace(/-/g, "/");
                    r.value = new Date(b).getTime() - new Date(a).getTime(), r.value > 0 && (v.value = le({
                        time: r.value,
                        onChange: $
                    }), v.value.start())
                }
            }
            const {
                serviceNowTime: m
            } = E(), {
                isRefresh: t
            } = ae(d, f), r = w(0), v = w();
            z(() => d.itemD.id, a => {
                p()
            }, {
                immediate: !0
            });
            const y = Q(() => v.value.current);

            function $(a) {
                a.total == 0 ? t.value = !0 : t.value = !1
            }

            function k(a) {
                const b = String(a.hours).padStart(2, "0"),
                    L = String(a.minutes).padStart(2, "0"),
                    R = String(a.seconds).padStart(2, "0");
                return b + ":" + L + ":" + R
            }
            return (a, b) => (n(), o("div", we, [G(e("img", {
                src: a.itemD.iconUrl,
                alt: "",
                style: ie(`width:${a.bgImgWidth};height:${a.bgImgHeight};`)
            }, null, 12, Ce), [
                [oe, a.itemD.iconUrl]
            ]), e("div", be, [D(a.$slots, "content", {}, () => {
                var L, R;
                return [e("div", {
                    class: P(["head", `type${a.state}`])
                }, [a.state == 1 ? (n(), o("h1", Le, s(a.$t("cpsTip3")), 1)) : a.state == 0 ? (n(), o("h1", Re, s(a.$t("startTime")), 1)) : a.state == 2 ? (n(), o("h1", Se, s(a.$t("ended")), 1)) : g("v-if", !0), a.state == 1 ? (n(), o("div", De, [e("p", {
                    innerHTML: a.$t("fifteenDays", [y.value.days])
                }, null, 8, Ie), e("h6", null, s(k(y.value)), 1)])) : g("v-if", !0), a.state == 0 ? (n(), o("div", Be, s((L = a.itemD) == null ? void 0 : L.startTime), 1)) : g("v-if", !0), a.state == 2 ? (n(), o("div", Ae, "00:00:00")) : g("v-if", !0)], 2), e("div", Ne, [e("h1", null, s(a.$t("winTips5")), 1), e("div", qe, s(u(B)(((R = a.itemD) == null ? void 0 : R.sumBonus) || 0)), 1)])]
            }, !0)]), D(a.$slots, "footer", {}, void 0, !0)]))
        }
    });
const se = N(Ue, [
    ["__scopeId", "data-v-277c60ca"],
    ["__file", "/usr/local/jenkins-prod/workspace/ar048-india-91club/src/components/Activity/Championship/card.vue"]
]);
const Oe = {},
    Pe = {
        class: "empty__container"
    };

function je(c, f) {
    const d = q("svg-icon");
    return n(), o("div", Pe, [S(d, {
        name: "empty"
    }), D(c.$slots, "text", {}, () => [e("p", null, s(c.$t("noData")), 1)], !0)])
}
const W = N(Oe, [
        ["render", je],
        ["__scopeId", "data-v-f84b843f"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar048-india-91club/src/components/Empty/index.vue"]
    ]),
    Me = {
        class: "dialog__container",
        role: "dialog",
        tabindex: "0"
    },
    Ve = {
        key: 0,
        class: "dialog__container-img"
    },
    ze = {
        class: "dialog__container-title"
    },
    He = {
        class: "dialog__container-content"
    },
    Ee = {
        key: 1,
        class: "dialog__container-footer"
    },
    We = ["src"],
    Je = U({
        __name: "Dialog",
        props: {
            show: {
                type: Boolean,
                default: !1
            },
            title: {
                type: String,
                default: ""
            },
            confirmText: {
                type: String,
                default: ""
            },
            showCancelBtn: {
                type: Boolean,
                default: !0
            },
            cancelText: {
                type: String,
                default: ""
            },
            clickOutSide: {
                type: Boolean,
                default: !1
            },
            isShowHeader: {
                type: Boolean,
                default: !0
            },
            imgUrl: {
                type: String,
                default: "tip"
            },
            showCloseIcon: {
                type: Boolean,
                default: !1
            },
            showFooter: {
                type: Boolean,
                default: !0
            }
        },
        emits: ["update:show", "confirm"],
        setup(c, {
            emit: f
        }) {
            const d = c;
            z(() => d.show, t => {
                t ? window.addEventListener("touchmove", m, {
                    passive: !1
                }) : window.removeEventListener("touchmove", m)
            });

            function p(t) {
                d.clickOutSide && f("update:show", !1)
            }
            const m = t => {};
            return (t, r) => {
                const v = x("lazy");
                return n(), o("div", {
                    class: P(["dialog", {
                        active: c.show,
                        inactive: !c.show
                    }])
                }, [e("div", Me, [c.isShowHeader ? (n(), o("div", Ve, [D(t.$slots, "header", {}, () => [G(e("img", {
                    class: P({
                        succed: c.imgUrl == "succeed"
                    }),
                    alt: ""
                }, null, 2), [
                    [v, u(me)("wallet", c.imgUrl)]
                ])], !0)])) : g("v-if", !0), e("div", ze, [D(t.$slots, "title", {}, () => [e("h1", null, s(c.title), 1)], !0)]), e("div", He, [D(t.$slots, "content", {}, void 0, !0)]), c.showFooter ? (n(), o("div", Ee, [D(t.$slots, "footer", {}, () => [e("button", {
                    onClick: r[0] || (r[0] = () => {
                        f("confirm")
                    })
                }, s(c.confirmText || t.$t("confirm")), 1), c.showCancelBtn ? (n(), o("button", {
                    key: 0,
                    onClick: r[1] || (r[1] = () => {
                        f("update:show", !1)
                    })
                }, s(c.cancelText || t.$t("cancel")), 1)) : g("v-if", !0)], !0)])) : g("v-if", !0), c.showCloseIcon ? (n(), o("img", {
                    key: 2,
                    class: "close_img",
                    src: u(he)("common", "close"),
                    onClick: p
                }, null, 8, We)) : g("v-if", !0)]), e("div", {
                    class: "dialog__outside",
                    onClick: p
                })], 2)
            }
        }
    });
const Fe = N(Je, [
        ["__scopeId", "data-v-3e71d3da"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar048-india-91club/src/components/common/Dialog.vue"]
    ]),
    F = re.messages();

function Qe(c) {
    const f = w();
    return X(() => {
        const d = "refresh" + ge();
        f.value && f.value.setAttribute("id", d), setTimeout(() => {
            Z.init({
                mainElement: "#" + d,
                triggerElement: "body",
                onRefresh() {
                    c()
                },
                instructionsReleaseToRefresh: F.vanPullRefresh.loosing,
                instructionsPullToRefresh: F.vanPullRefresh.pulling,
                instructionsRefreshing: F.loading
            })
        }, 200)
    }), ue(() => {
        Z.destroyAll()
    }), {
        elementRef: f
    }
}
const Ge = {
        class: "infiniteScroll__loading"
    },
    Xe = U({
        __name: "ListSimply",
        props: {
            api: {
                type: Function,
                required: !0
            },
            distance: {
                type: Number,
                required: !1,
                default: 100
            },
            pageQuery: {
                type: null,
                required: !1,
                default: {}
            },
            list: {
                type: Array,
                required: !0
            },
            isAutoLoad: {
                type: Boolean,
                required: !1,
                default: !0
            },
            filterData: {
                type: Function,
                required: !1
            }
        },
        emits: ["update:list", "update:pageQuery", "update:totalCount", "pageChange", "listChange"],
        setup(c, {
            expose: f,
            emit: d
        }) {
            const p = c,
                m = Q(() => {
                    let _ = u(p.list);
                    return p.filterData ? p.filterData(_) || [] : _ || []
                }),
                {
                    isAutoLoad: t
                } = p,
                r = w(!1),
                v = w({
                    pageNo: 1,
                    pageSize: 10
                }),
                y = w(!1),
                $ = async _ => {
                    if (!v.value.pageNo || !v.value.pageSize) return;
                    y.value = !0;
                    let A = { ...v.value,
                        ...p.pageQuery,
                        ..._
                    };
                    const i = await ye(p.api(A));
                    if (i) {
                        v.value.pageNo = i.data.pageNo, d("pageChange", i.data), (i.data.totalCount === 0 || i.data.totalPage === v.value.pageNo) && (r.value = !0);
                        let l = v.value.pageNo === 1 ? i.data.list : [...p.list.concat(i.data.list)];
                        d("update:list", l), d("listChange", i), y.value = !1
                    } else y.value = !1
                },
                k = w(!1);
            let a = null;
            async function b() {
                a && (a(), a = null), await $(), de(() => {
                    a = z(T, _ => {
                        const {
                            innerHeight: A
                        } = window;
                        k.value || _ <= A + p.distance && _ !== 0 && v.value.pageNo >= 1 && !y.value && !r.value && ($({
                            pageNo: v.value.pageNo + 1
                        }), k.value = !0, setTimeout(() => {
                            k.value = !1
                        }, 1e3))
                    })
                })
            }
            X(async () => {
                t && b()
            }), ee(async () => {});
            const L = () => {
                    v.value = {
                        pageNo: 1,
                        pageSize: 10
                    }, r.value = !1, d("update:list", []), b()
                },
                {
                    elementRef: R
                } = Qe(L),
                {
                    bottom: T
                } = ce(R);
            return f({
                resetRefresh: L
            }), (_, A) => {
                const i = q("van-loading");
                return n(), o("div", {
                    class: "infiniteScroll",
                    ref_key: "scrollRef",
                    ref: R
                }, [D(_.$slots, "content", {
                    list: m.value
                }, void 0, !0), D(_.$slots, "loading", {}, () => [e("div", Ge, [y.value && !r.value ? (n(), V(i, {
                    key: 0,
                    class: "z-50"
                })) : g("v-if", !0), m.value.length === 0 && r.value ? D(_.$slots, "empty", {
                    key: 1
                }, () => [S(W)], !0) : r.value ? (n(), o("div", {
                    key: 2,
                    ref: "pullTextRef"
                }, s(_.$t("noMoreThere")), 513)) : g("v-if", !0)])], !0)], 512)
            }
        }
    });
const Ye = N(Xe, [
        ["__scopeId", "data-v-cbab7763"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar048-india-91club/src/components/common/ListSimply.vue"]
    ]),
    Ze = {
        class: "championship"
    },
    Ke = {
        class: "tabs"
    },
    xe = ["onClick"],
    et = ["onClick"],
    tt = U({
        __name: "index",
        setup(c) {
            const {
                tabList: f,
                serviceNowTime: d,
                type: p
            } = E(), {
                t: m
            } = te(), t = Y(), r = pe({
                state: 1
            }), v = w([]), y = w(), $ = w(!1), k = w(""), a = w(!1);
            z(a, i => {
                var l;
                a.value && ((l = y.value) == null || l.resetRefresh())
            });

            function b(i) {
                t.push({
                    name: "Championship-ChampionshipDetail",
                    query: {
                        championId: i
                    }
                })
            }

            function L(i) {
                var l;
                r.state = i, (l = y.value) == null || l.resetRefresh()
            }

            function R(i) {
                d.value = i.serviceNowTime
            }
            const T = w(null),
                _ = async i => {
                    T.value && clearTimeout(T.value), T.value = setTimeout(async () => {
                        var C;
                        if (i.isJoin) return;
                        const l = await A($e({
                            championId: i.id
                        }));
                        if (l) {
                            if (l.code == 0) ve(m("success")), (C = y.value) == null || C.resetRefresh();
                            else if ([803, 804, 805].includes(l.msgCode) && l.data != null) switch ($.value = !0, l.msgCode) {
                                case 803:
                                    k.value = m("cpsTip25", [l.data]);
                                    break;
                                case 804:
                                    k.value = m("cpsTip26", [l.data]);
                                    break;
                                case 805:
                                    k.value = m("cpsTip27", [p[l.data]]);
                                    break;
                                default:
                                    k.value = m(`code${l.msgCode}`)
                            }
                        }
                    }, 100)
                },
                A = async i => await i.then(C => C && C.code !== 0 ? [803, 804, 805].includes(C.msgCode) ? C : (K(C), null) : C).catch(C => (K(C), null));
            return (i, l) => {
                const C = q("NavBar"),
                    ne = q("van-sticky");
                return n(), o("div", Ze, [S(ne, null, {
                    default: O(() => [S(C, {
                        title: i.$t("cpsTip1"),
                        "left-arrow": "",
                        onClickLeft: l[0] || (l[0] = () => u(t).back())
                    }, null, 8, ["title"]), e("div", Ke, [(n(!0), o(I, null, j(u(f), h => (n(), o("div", {
                        key: h.key,
                        class: P({
                            active: r.state == h.key
                        }),
                        onClick: H => L(h.key)
                    }, s(h.title), 11, xe))), 128))])]),
                    _: 1
                }), S(Ye, {
                    list: v.value,
                    "onUpdate:list": l[2] || (l[2] = h => v.value = h),
                    api: u(ke),
                    "page-query": r,
                    "onUpdate:pageQuery": l[3] || (l[3] = h => r = h),
                    distance: 100,
                    ref_key: "listRef",
                    ref: y,
                    "is-auto-load": !0,
                    onListChange: R
                }, {
                    content: O(() => [(n(!0), o(I, null, j(v.value, h => (n(), o("div", {
                        key: h.id
                    }, [S(se, {
                        itemD: h,
                        state: h.state,
                        isRefresh: a.value,
                        "onUpdate:isRefresh": l[1] || (l[1] = H => a.value = H),
                        onClick: H => b(h.id)
                    }, null, 8, ["itemD", "state", "isRefresh", "onClick"]), [1].includes(h.state) ? (n(), o("div", {
                        key: 0,
                        class: P(["btn", {
                            active: !h.isJoin
                        }]),
                        onClick: H => _(h)
                    }, s(h.isJoin ? i.$t("cpsTip8") : i.$t("cpsTip9")), 11, et)) : g("v-if", !0)]))), 128))]),
                    _: 1
                }, 8, ["list", "api", "page-query"]), S(Fe, {
                    show: $.value,
                    "onUpdate:show": l[4] || (l[4] = h => $.value = h),
                    onConfirm: l[5] || (l[5] = () => $.value = !1),
                    showCancelBtn: !1,
                    showCloseIcon: !0,
                    clickOutSide: !0
                }, {
                    content: O(() => [e("h1", null, s(k.value), 1)]),
                    _: 1
                }, 8, ["show"])])
            }
        }
    });
const st = N(tt, [
        ["__scopeId", "data-v-5ffc4111"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar048-india-91club/src/views/activity/Championship/index.vue"]
    ]),
    Pt = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: st
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    nt = {
        class: "title"
    },
    at = {
        class: "con"
    },
    ot = ["innerHTML"],
    it = ["innerHTML"],
    lt = {
        class: "condition"
    },
    ut = {
        key: 0
    },
    rt = {
        key: 1
    },
    ct = {
        key: 2
    },
    dt = {
        class: "ranking"
    },
    pt = {
        class: "top"
    },
    vt = U({
        __name: "rule",
        props: {
            data: {
                type: null,
                required: !1
            }
        },
        setup(c) {
            const {
                t: f
            } = te(), d = w(["0"]), {
                type: p
            } = E();

            function m(t, r) {
                return t == r ? f("cpsTip20", [t]) : f("cpsTip21", [t, r])
            }
            return (t, r) => {
                const v = q("van-collapse-item"),
                    y = q("van-collapse");
                return n(), V(y, {
                    modelValue: d.value,
                    "onUpdate:modelValue": r[0] || (r[0] = $ => d.value = $),
                    class: "rule"
                }, {
                    default: O(() => [S(v, {
                        name: "1"
                    }, {
                        title: O(() => [e("div", nt, s(t.$t("cpsTip5").toLocaleUpperCase()), 1)]),
                        default: O(() => [e("div", at, [e("h1", null, [e("span", null, s(t.$t("cpsTip11")), 1)]), e("div", {
                            innerHTML: t.$t("cpsTip12", [t.data.vendorCode, t.data.startTime, t.data.endTime])
                        }, null, 8, ot), e("h1", null, [e("span", null, s(t.$t("awardAmount")), 1)]), e("div", null, [M(s(t.$t("cpsTip13")), 1), e("span", null, s(u(B)(t.data.sumBonus || 0)), 1)]), e("h1", null, [e("span", null, s(t.$t("cpsTip14")), 1)]), e("div", null, [e("div", {
                            innerHTML: t.$t("cpsTip15", [t.data.vendorCode])
                        }, null, 8, it), e("div", lt, [t.data.conditionsBetAmount > 0 ? (n(), o("p", ut, [M(s(t.$t("betAmounts")) + " ", 1), e("span", null, s(u(B)(t.data.conditionsBetAmount || 0)), 1)])) : g("v-if", !0), t.data.conditionsRechargeAmount > 0 ? (n(), o("p", rt, [M(s(t.$t("rechageAmount")) + " ", 1), e("span", null, s(u(B)(t.data.conditionsRechargeAmount || 0)), 1)])) : g("v-if", !0), t.data.conditionsBindType ? (n(), o("p", ct, [M(s(t.$t("toBind")) + " ", 1), e("span", null, s(u(p)[t.data.conditionsBindType]), 1)])) : g("v-if", !0), t.data.conditionsBetAmount == 0 && t.data.conditionsRechargeAmount == 0 && !t.data.conditionsBindType ? (n(), o(I, {
                            key: 3
                        }, [M(s(t.$t("cpsTip10")), 1)], 64)) : g("v-if", !0)])]), e("h1", null, [e("span", null, s(t.$t("binguoPaimin")), 1)]), e("div", dt, [e("div", pt, [e("span", null, s(t.$t("binguoPaimin")), 1), e("span", null, s(t.$t("k3WarningTip4")), 1)]), (n(!0), o(I, null, j(t.data.rankingAwardsList, ($, k) => (n(), o("div", {
                            class: "info",
                            key: k
                        }, [e("span", null, s(m($.startRanking, $.endRanking)), 1), e("span", null, s(u(B)($.awardsAmount || 0)), 1)]))), 128)), t.data.rankingAwardsList.length == 0 ? (n(), V(W, {
                            key: 0
                        })) : g("v-if", !0)]), e("h1", null, [e("span", null, s(t.$t("cpsTip16")), 1)]), e("div", null, [e("p", null, s(t.$t("cpsTip17")), 1), e("p", null, s(t.$t("cpsTip18")), 1)]), e("h1", null, [e("span", null, s(t.$t("cpsTip19")), 1)]), e("p", null, [e("span", null, s(t.data.vendorCode), 1)])])]),
                        _: 1
                    })]),
                    _: 1
                }, 8, ["modelValue"])
            }
        }
    });
const ft = N(vt, [
        ["__scopeId", "data-v-5c0f1c84"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar048-india-91club/src/components/Activity/Championship/rule.vue"]
    ]),
    _t = {
        class: "game"
    },
    mt = {
        class: "items"
    },
    ht = ["onClick"],
    gt = ["onClick"],
    yt = U({
        __name: "game",
        props: {
            data: {
                type: null,
                required: !1
            },
            arLotteryList: {
                type: null,
                required: !1
            }
        },
        setup(c) {
            const {
                onItemClick: f
            } = Te();
            return Y(), (d, p) => {
                const m = x("lazy");
                return n(), o("div", _t, [e("h1", null, s(d.$t("cpsTip22")), 1), e("div", mt, [(n(!0), o(I, null, j(d.data, t => (n(), o("div", {
                    class: "item",
                    key: t.gameID,
                    onClick: r => u(f)(t)
                }, [G(e("img", null, null, 512), [
                    [m, t.img]
                ])], 8, ht))), 128)), (n(!0), o(I, null, j(d.arLotteryList, (t, r) => (n(), o("div", {
                    class: "lottery",
                    key: r,
                    onClick: v => u(f)(t)
                }, s(t.title), 9, gt))), 128)), d.data.length == 0 && d.arLotteryList.length == 0 ? (n(), V(W, {
                    key: 0
                })) : g("v-if", !0)])])
            }
        }
    });
const kt = N(yt, [
        ["__scopeId", "data-v-303ee053"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar048-india-91club/src/components/Activity/Championship/game.vue"]
    ]),
    J = c => (fe("data-v-a9d644da"), c = c(), _e(), c),
    $t = {
        class: "ChampionshipDetail"
    },
    Tt = {
        class: "ranking"
    },
    wt = {
        class: "title"
    },
    Ct = {
        class: "amount"
    },
    bt = J(() => e("span", null, "--", -1)),
    Lt = J(() => e("span", null, "--", -1)),
    Rt = J(() => e("span", null, "--", -1)),
    St = {
        class: "rankingList"
    },
    Dt = {
        class: "title"
    },
    It = J(() => e("span", null, "TOP", -1)),
    Bt = {
        key: 0,
        class: "txt"
    },
    At = {
        class: "refresh"
    },
    Nt = U({
        __name: "index",
        setup(c) {
            const {
                tabList: f,
                getChampionTaskDetailV: d,
                championTaskDetailVO: p,
                getTop10UserList: m,
                top10UserListVO: t,
                thirdGameListVO: r,
                arLotteryList: v
            } = E(), y = Y(), $ = Q(() => {
                var T;
                return p.value ? (T = f.find(_ => _.key == p.value.state)) == null ? void 0 : T.title : ""
            }), k = w(), a = w(!1), b = w(null);

            function L() {
                d(k.value)
            }
            z(a, T => {
                a.value && L()
            });
            const R = () => {
                m(k.value)
            };
            return X(() => {
                k.value = Number(y.currentRoute.value.query.championId) || 0, k.value != 0 && (L(), R(), b.value = setInterval(R, 10 * 60 * 1e3))
            }), ee(() => {
                clearInterval(b.value)
            }), (T, _) => {
                const A = q("NavBar");
                return n(), o("div", $t, [S(A, {
                    title: $.value,
                    "left-arrow": "",
                    onClickLeft: _[0] || (_[0] = () => u(y).back())
                }, null, 8, ["title"]), JSON.stringify(u(p)) !== "{}" ? (n(), o(I, {
                    key: 0
                }, [S(se, {
                    itemD: u(p),
                    state: u(p).state,
                    isRefresh: a.value,
                    "onUpdate:isRefresh": _[1] || (_[1] = i => a.value = i)
                }, null, 8, ["itemD", "state", "isRefresh"]), e("div", Tt, [e("div", wt, [e("span", null, s(T.$t("binguoPaimin")), 1), e("span", null, s(T.$t("betAmounts")), 1), e("span", null, s(T.$t("k3WarningTip4")), 1)]), e("div", Ct, [u(p) && u(p).userJoinInfo ? (n(), o(I, {
                    key: 0
                }, [e("span", null, s(u(p).userJoinInfo.ranking), 1), e("span", null, s(u(B)(u(p).userJoinInfo.sumBetAmount || 0)), 1), e("span", null, s(u(B)(u(p).userJoinInfo.awardsAmount || 0)), 1)], 64)) : (n(), o(I, {
                    key: 1
                }, [bt, Lt, Rt], 64))])])], 64)) : g("v-if", !0), e("div", St, [e("div", Dt, [It, e("span", null, s(T.$t("account")), 1), e("span", null, s(T.$t("betAmounts")), 1), e("span", null, s(T.$t("k3WarningTip4")), 1)]), (n(!0), o(I, null, j(u(t), (i, l) => (n(), o("div", {
                    class: "info",
                    key: l
                }, [
                    [1, 2, 3].includes(i.ranking) ? (n(), o("span", {
                        key: 1,
                        class: P(`top${i.ranking}`)
                    }, null, 2)) : (n(), o("span", Bt, s(i.ranking), 1)), e("span", null, s(i.userName), 1), e("span", null, s(u(B)(i.sumBetAmount || 0)), 1), e("span", null, s(u(B)(i.awardsAmount || 0)), 1)
                ]))), 128)), e("div", At, s(T.$t("cpsTip28")), 1), u(t).length == 0 ? (n(), V(W, {
                    key: 0
                })) : g("v-if", !0)]), S(ft, {
                    data: u(p)
                }, null, 8, ["data"]), S(kt, {
                    data: u(r),
                    arLotteryList: u(v)
                }, null, 8, ["data", "arLotteryList"])])
            }
        }
    });
const qt = N(Nt, [
        ["__scopeId", "data-v-a9d644da"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar048-india-91club/src/views/activity/Championship/ChampionshipDetail/index.vue"]
    ]),
    jt = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: qt
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    se as C, Fe as D, W as E, Ye as L, jt as a, Pt as i, Qe as u
};
//# sourceMappingURL=page-activity-Championship-e71be75c.js.map