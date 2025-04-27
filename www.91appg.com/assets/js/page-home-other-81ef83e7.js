import {
    V as P,
    r as S,
    F as V,
    W,
    m as i,
    $ as p,
    p as e,
    Z as l,
    ad as A,
    ai as K,
    o,
    Q as X,
    a0 as Y,
    ak as F,
    X as H,
    Y as N,
    af as T,
    N as t,
    n as ve,
    M as ne,
    ap as R,
    P as x,
    ao as G,
    an as U,
    au as ie,
    av as le,
    aq as Q,
    ar as ee,
    aE as te,
    aj as E,
    aa as pe,
    O as me,
    I as ce,
    aI as he,
    a9 as ge,
    aL as re,
    aM as fe,
    aN as ye,
    aO as ke,
    ag as we
} from "./common.modules-85a637e4.js";
import {
    G as se,
    A as Z,
    aU as Ce,
    _ as M,
    v as oe,
    g as $e,
    aV as be,
    d as J,
    a as j,
    az as q,
    c as z,
    aW as de,
    aC as Ie,
    aw as Se,
    aX as Le,
    k as Ge,
    W as He,
    aY as Te
} from "./page-activity-ActivityDetail-8a822c52.js";
import "./native/index-59680276.js";
import "./en-9cbceffc.js";
window.getBuildInfo = function() {
    return {
        buildTime: "4/18/2025, 8:14:29 PM",
        branch: " commitId:8f7cd864d454367470bdc5356c065914ead7b152"
    }
};
const De = {
        class: "notice_91"
    },
    Ne = {
        class: "notice_91-body"
    },
    Ae = {
        key: 0,
        class: "notice_91-body-text"
    },
    xe = P({
        __name: "index2",
        props: {
            color: {
                type: String,
                required: !0,
                default: "red"
            }
        },
        setup(k) {
            const _ = se(),
                m = S(null),
                c = S(_.messageList),
                r = async () => {
                    const g = await Z(Ce({
                        pageNo: 1,
                        pageSize: 5
                    }));
                    if (g) {
                        if (_.setMessage(g.data.list), c.value = g.data.list, !c.value.length) return;
                        m.value && clearInterval(m.value), m.value = setInterval(() => {
                            c.value.push(c.value.shift())
                        }, 7e3)
                    }
                };
            return V(() => {
                c.value || setTimeout(() => {
                    r()
                }, 1e3)
            }), (g, f) => {
                var y;
                const d = W("svg-icon");
                return o(), i("div", De, [p(d, {
                    name: "91-notice",
                    class: "notice"
                }), e("div", Ne, [c.value && c.value[0] && c.value[0].siteMessage ? (o(), i("div", Ae, l((y = c.value[0]) == null ? void 0 : y.siteMessage), 1)) : A("v-if", !0)]), K(g.$slots, "default", {}, void 0, !0)])
            }
        }
    });
const Pe = M(xe, [
        ["__scopeId", "data-v-20e1659b"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar048-india-91club/src/components/Home/NoticeBar/index2.vue"]
    ]),
    Me = {
        class: "terms"
    },
    je = {
        class: "terms-logo"
    },
    Be = ve('<span class="terms-logo-service" data-v-a46ec9fd><svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-a46ec9fd><circle cx="35" cy="35" r="33" stroke="url(#paint0_linear_84_6311)" stroke-width="4" data-v-a46ec9fd></circle><path d="M25.3809 33.7041V36.8906H12.7109V33.7041H25.3809ZM20.7852 28.6895V42.1465H17.3193V28.6895H20.7852ZM36.3496 25.4775V44H32.6934V29.6924L28.3008 31.0889V28.207L35.9561 25.4775H36.3496ZM54.8213 38.9346C54.8213 40.0941 54.5505 41.0716 54.0088 41.8672C53.4671 42.6543 52.7223 43.251 51.7744 43.6572C50.835 44.055 49.7686 44.2539 48.5752 44.2539C47.3818 44.2539 46.3112 44.055 45.3633 43.6572C44.4154 43.251 43.6663 42.6543 43.1162 41.8672C42.5661 41.0716 42.291 40.0941 42.291 38.9346C42.291 38.1559 42.4476 37.4535 42.7607 36.8271C43.0739 36.1924 43.5098 35.6507 44.0684 35.2021C44.6354 34.7451 45.2998 34.3981 46.0615 34.1611C46.8232 33.9157 47.6527 33.793 48.5498 33.793C49.7516 33.793 50.8265 34.0046 51.7744 34.4277C52.7223 34.8509 53.4671 35.4476 54.0088 36.2178C54.5505 36.988 54.8213 37.8936 54.8213 38.9346ZM51.1396 38.6934C51.1396 38.1263 51.0296 37.6396 50.8096 37.2334C50.598 36.8187 50.2975 36.5013 49.9082 36.2812C49.5189 36.0612 49.0661 35.9512 48.5498 35.9512C48.0335 35.9512 47.5807 36.0612 47.1914 36.2812C46.8021 36.5013 46.4974 36.8187 46.2773 37.2334C46.0658 37.6396 45.96 38.1263 45.96 38.6934C45.96 39.252 46.0658 39.7344 46.2773 40.1406C46.4974 40.5469 46.8021 40.86 47.1914 41.0801C47.5892 41.2917 48.0505 41.3975 48.5752 41.3975C49.0999 41.3975 49.5527 41.2917 49.9336 41.0801C50.3229 40.86 50.6191 40.5469 50.8223 40.1406C51.0339 39.7344 51.1396 39.252 51.1396 38.6934ZM54.4277 30.416C54.4277 31.3555 54.1781 32.1891 53.6787 32.917C53.1794 33.6364 52.4854 34.1992 51.5967 34.6055C50.7165 35.0117 49.7093 35.2148 48.5752 35.2148C47.4326 35.2148 46.417 35.0117 45.5283 34.6055C44.6396 34.1992 43.9456 33.6364 43.4463 32.917C42.9469 32.1891 42.6973 31.3555 42.6973 30.416C42.6973 29.2988 42.9469 28.3594 43.4463 27.5977C43.9541 26.8275 44.6481 26.2435 45.5283 25.8457C46.417 25.4479 47.4242 25.249 48.5498 25.249C49.6924 25.249 50.7038 25.4479 51.584 25.8457C52.4727 26.2435 53.1667 26.8275 53.666 27.5977C54.1738 28.3594 54.4277 29.2988 54.4277 30.416ZM50.7715 30.5811C50.7715 30.0817 50.6826 29.6501 50.5049 29.2861C50.3271 28.9137 50.0732 28.626 49.7432 28.4229C49.4215 28.2197 49.0238 28.1182 48.5498 28.1182C48.0928 28.1182 47.6992 28.2155 47.3691 28.4102C47.0475 28.6048 46.7979 28.8883 46.6201 29.2607C46.4508 29.6247 46.3662 30.0648 46.3662 30.5811C46.3662 31.0804 46.4508 31.5205 46.6201 31.9014C46.7979 32.2738 47.0518 32.5658 47.3818 32.7773C47.7119 32.9889 48.1097 33.0947 48.5752 33.0947C49.0407 33.0947 49.4342 32.9889 49.7559 32.7773C50.0859 32.5658 50.3356 32.2738 50.5049 31.9014C50.6826 31.5205 50.7715 31.0804 50.7715 30.5811Z" fill="url(#paint1_linear_84_6311)" data-v-a46ec9fd></path><defs data-v-a46ec9fd><linearGradient id="paint0_linear_84_6311" x1="35" y1="0" x2="35" y2="70" gradientUnits="userSpaceOnUse" data-v-a46ec9fd><stop stop-color="#FA2221" data-v-a46ec9fd></stop><stop offset="1" stop-color="#FA5121" data-v-a46ec9fd></stop></linearGradient><linearGradient id="paint1_linear_84_6311" x1="34.5" y1="20" x2="34.5" y2="50" gradientUnits="userSpaceOnUse" data-v-a46ec9fd><stop stop-color="#FA2221" data-v-a46ec9fd></stop><stop offset="1" stop-color="#FA5121" data-v-a46ec9fd></stop></linearGradient></defs></svg></span>', 1),
    We = ["onClick"],
    Re = {
        alt: ""
    },
    ze = {
        class: "terms-rule"
    },
    Oe = {
        class: "terms-rule"
    },
    Ue = {
        class: "terms-rule"
    },
    Ve = {
        class: "terms-tips"
    },
    Fe = {
        class: "terms-tips"
    },
    Je = P({
        __name: "team",
        setup(k) {
            const {
                t: _
            } = X(), m = Y(), c = oe();
            let r = S([]);

            function g(d) {
                m.push({
                    name: "CustomerService-ServiceCollection",
                    state: {
                        itemId: d
                    }
                })
            }
            const f = async () => {
                const d = await Z(be());
                d && (r.value = d.data || [])
            };
            return V(() => {
                f()
            }), (d, y) => {
                const a = W("svg-icon"),
                    v = F("lazy");
                return o(), i("div", Me, [e("div", je, [Be, (o(!0), i(H, null, N(t(r), (h, L) => (o(), i("span", {
                    class: "terms-logo-service",
                    key: L,
                    onClick: $ => g(h.typeID)
                }, [T(e("img", Re, null, 512), [
                    [v, t($e)("main", `CStype${h.typeID}`)]
                ])], 8, We))), 128))]), e("p", ze, [p(a, {
                    name: "91-point"
                }), e("span", null, l(t(_)("damanRule").replace("Daman", t(c).getProjectName)), 1)]), e("p", Oe, [p(a, {
                    name: "91-point"
                }), e("span", null, l(t(_)("damanRule2").replace("Daman", t(c).getProjectName)), 1)]), e("p", Ue, [p(a, {
                    name: "91-point"
                }), e("span", null, l(t(_)("damanRule3").replace("Daman", t(c).getProjectName)), 1)]), e("p", Ve, l(t(_)("damanWarn").replace("Daman", t(c).getProjectName)), 1), e("p", Fe, l(t(_)("damanWarn2").replace("Daman", t(c).getProjectName)), 1)])
            }
        }
    });
const qe = M(Je, [
        ["__scopeId", "data-v-a46ec9fd"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar048-india-91club/src/components/Home/club91Home/team.vue"]
    ]),
    Ze = {
        class: "rank"
    },
    Ee = {
        class: "title"
    },
    Xe = {
        class: "rank_c"
    },
    Ye = {
        class: "rank_c-topThree"
    },
    Ke = {
        class: "r2"
    },
    Qe = ["data-img"],
    et = ["data-img"],
    tt = {
        class: "name"
    },
    st = {
        class: "money"
    },
    ot = {
        class: "r1"
    },
    at = ["data-img"],
    nt = ["data-img"],
    it = {
        class: "name"
    },
    lt = {
        class: "money"
    },
    ct = {
        class: "r3"
    },
    rt = ["data-img"],
    dt = ["data-img"],
    ut = {
        class: "name"
    },
    _t = {
        class: "money"
    },
    vt = {
        class: "rank_c-list"
    },
    pt = {
        class: "left-rank"
    },
    mt = ["data-img"],
    ht = ["data-img"],
    gt = {
        class: "middle-name"
    },
    ft = {
        class: "right-box"
    },
    yt = P({
        __name: "rank",
        setup(k) {
            const {
                t: _
            } = X(), {
                homeState: m
            } = J(), c = {
                nickName: _("noData"),
                userPhoto: "",
                price: 0,
                time: "",
                typeName: ""
            };
            ne(() => m.rankList, f => {
                r.value.splice(0, f.length, ...f.sort((d, y) => y.price - d.price).slice(0, 3)), g.value.splice(0, f.length, ...f.sort((d, y) => y.price - d.price).slice(3, 10))
            });
            const r = S([c, c, c]),
                g = S([]);
            return (f, d) => {
                const y = W("svg-icon"),
                    a = F("lazy");
                return o(), i("div", Ze, [e("div", Ee, [p(y, {
                    name: "91-rank"
                }), R(l(f.$t("earningsRankingToday")), 1)]), e("div", Xe, [e("div", Ye, [e("div", Ke, [r.value[1].userPhoto.length > 2 ? T((o(), i("img", {
                    key: 0,
                    "data-img": t(j)("home", "avatar")
                }, null, 8, Qe)), [
                    [a, r.value[1].userPhoto]
                ]) : T((o(), i("img", {
                    key: 1,
                    "data-img": t(j)("home", "avatar")
                }, null, 8, et)), [
                    [a, t(j)("main/Avatar", r.value[1].userPhoto)]
                ]), e("div", tt, l(t(q)(r.value[1].nickName)), 1), e("div", st, l(t(z)(r.value[1].price)), 1)]), e("div", ot, [r.value[0].userPhoto.length > 2 ? T((o(), i("img", {
                    key: 0,
                    "data-img": t(j)("home", "avatar")
                }, null, 8, at)), [
                    [a, r.value[0].userPhoto]
                ]) : T((o(), i("img", {
                    key: 1,
                    "data-img": t(j)("home", "avatar")
                }, null, 8, nt)), [
                    [a, t(j)("main/Avatar", r.value[0].userPhoto)]
                ]), e("div", it, l(t(q)(r.value[0].nickName)), 1), e("div", lt, l(t(z)(r.value[0].price)), 1)]), e("div", ct, [r.value[2].userPhoto.length > 2 ? T((o(), i("img", {
                    key: 0,
                    "data-img": t(j)("home", "avatar")
                }, null, 8, rt)), [
                    [a, r.value[2].userPhoto]
                ]) : T((o(), i("img", {
                    key: 1,
                    "data-img": t(j)("home", "avatar")
                }, null, 8, dt)), [
                    [a, t(j)("main/Avatar", r.value[2].userPhoto)]
                ]), e("div", ut, l(t(q)(r.value[2].nickName)), 1), e("div", _t, l(t(z)(r.value[2].price)), 1)])]), e("div", vt, [(o(!0), i(H, null, N(g.value, (v, h) => (o(), i("div", {
                    class: "rank_c-list__item",
                    key: h
                }, [e("span", pt, l(h + 4), 1), v.userPhoto.length > 2 ? T((o(), i("img", {
                    key: 0,
                    "data-img": t(j)("home", "avatar")
                }, null, 8, mt)), [
                    [a, v.userPhoto]
                ]) : T((o(), i("img", {
                    key: 1,
                    "data-img": t(j)("home", "avatar")
                }, null, 8, ht)), [
                    [a, t(j)("main/Avatar", v.userPhoto)]
                ]), e("span", gt, l(t(q)(v.nickName)), 1), A(' <span class="middle-name">{{ formatString(item.nickName, 10) }}</span> '), e("span", ft, l(t(z)(v.price)), 1)]))), 128))])])])
            }
        }
    });
const kt = M(yt, [
        ["__scopeId", "data-v-7f6671cd"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar048-india-91club/src/components/Home/club91Home/rank.vue"]
    ]),
    wt = {
        class: "lobbyItem"
    },
    Ct = {
        class: "h"
    },
    $t = {
        class: "t"
    },
    bt = {
        key: 0,
        class: "d"
    },
    It = {
        class: "b"
    },
    St = ["onClick"],
    Lt = P({
        __name: "lobbyItem",
        props: {
            listData: {
                type: Array,
                required: !0
            },
            isMore: {
                type: Boolean,
                required: !1,
                default: !0
            },
            isLeft: {
                type: Boolean,
                required: !1,
                default: !0
            }
        },
        emits: ["item-click", "more-click"],
        setup(k, {
            emit: _
        }) {
            const m = k,
                c = S(0),
                r = S(),
                g = v => {
                    c.value = v
                },
                f = x(() => de(m.listData || [], 3));

            function d(v) {
                _("item-click", v)
            }
            const y = () => {
                _("more-click")
            };
            S(null), S([]);
            const a = v => {
                var h, L;
                v === "left" ? (h = r.value) == null || h.prev() : (L = r.value) == null || L.next()
            };
            return (v, h) => {
                const L = F("lazy");
                return o(), i("div", wt, [e("div", Ct, [e("div", $t, [K(v.$slots, "head", {}, void 0, !0)]), v.isLeft ? (o(), i("div", bt, [v.isMore ? (o(), i("div", {
                    key: 0,
                    onClick: y,
                    class: "more"
                }, l(v.$t("more")), 1)) : A("v-if", !0), e("div", {
                    class: "left",
                    onClick: h[0] || (h[0] = $ => a("left"))
                }), e("div", {
                    class: "right",
                    onClick: h[1] || (h[1] = $ => a("right"))
                })])) : A("v-if", !0)]), p(t(le), {
                    class: "my-swipe",
                    ref_key: "swipeRef",
                    ref: r,
                    autoplay: 3e3,
                    onChange: g,
                    "lazy-render": !1,
                    "show-indicators": !1
                }, {
                    default: G(() => [(o(!0), i(H, null, N(f.value, ($, I) => (o(), U(t(ie), {
                        key: I
                    }, {
                        default: G(() => [e("div", It, [(o(!0), i(H, null, N($, (D, w) => T((o(), i("img", {
                            key: w,
                            onClick: u => d(D)
                        }, null, 8, St)), [
                            [L, D.img]
                        ])), 128))])]),
                        _: 2
                    }, 1024))), 128))]),
                    _: 1
                }, 512), K(v.$slots, "default", {}, void 0, !0)])
            }
        }
    });
const O = M(Lt, [
        ["__scopeId", "data-v-08b9f980"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar048-india-91club/src/components/Home/club91Home/lobbyItem.vue"]
    ]),
    Gt = k => (Q("data-v-a0c8d129"), k = k(), ee(), k),
    Ht = {
        class: "homeNav"
    },
    Tt = {
        class: "title"
    },
    Dt = Gt(() => e("div", {
        class: "right_btn"
    }, null, -1)),
    Nt = {
        class: "tip"
    },
    At = {
        class: "picContainer"
    },
    xt = {
        class: "multiple"
    },
    Pt = {
        class: "gameName"
    },
    Mt = {
        class: "bonusAmount"
    },
    jt = P({
        __name: "bigaward",
        setup(k) {
            const {
                homeState: _
            } = J(), m = se(), c = oe(), r = S(0), g = S(), f = x(() => {
                var a;
                return de(((a = _.allGameList) == null ? void 0 : a.awardrecordlist) || [], 3)
            }), d = a => {
                r.value = a
            }, y = () => {
                Ie.push({
                    name: "SuperJackpot"
                })
            };
            return (a, v) => {
                const h = F("lazy");
                return o(), i("div", Ht, [e("div", Tt, [e("div", null, l(a.$t("superjackpot")), 1), Dt]), e("div", Nt, [R(l(a.$t("bigAward")) + l(a.$t("cpsTip4")) + " ", 1), e("span", null, l(t(z)(t(c).jackportMaxReswadAmount)), 1)]), p(t(le), {
                    class: "my-swipe",
                    ref_key: "swipeRef",
                    ref: g,
                    autoplay: 3e3,
                    onChange: d,
                    "lazy-render": !1,
                    "show-indicators": !1
                }, {
                    default: G(() => [(o(!0), i(H, null, N(f.value, (L, $) => (o(), U(t(ie), {
                        key: $
                    }, {
                        default: G(() => [e("div", At, [(o(!0), i(H, null, N(L, (I, D) => T((o(), i("div", {
                            alt: "",
                            key: D
                        }, [e("div", xt, l(I.multiple) + "X", 1), T(e("img", null, null, 512), [
                            [h, I.imgUrl]
                        ]), e("div", Pt, l(I.gameName), 1), e("div", Mt, l(t(z)(I.bonusAmount)), 1)])), [
                            [h, I.imgUrl]
                        ])), 128))])]),
                        _: 2
                    }, 1024))), 128))]),
                    _: 1
                }, 512), t(m).token ? (o(), i("div", {
                    key: 0,
                    class: "btn",
                    onClick: y
                }, l(a.$t("lookBigAward")), 1)) : A("v-if", !0)])
            }
        }
    });
const Bt = M(jt, [
        ["__scopeId", "data-v-a0c8d129"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar048-india-91club/src/components/Home/club91Home/bigaward.vue"]
    ]),
    Wt = k => (Q("data-v-657212e7"), k = k(), ee(), k),
    Rt = {
        class: "lobby"
    },
    zt = {
        class: "lottery"
    },
    Ot = {
        class: "h"
    },
    Ut = {
        class: "t"
    },
    Vt = {
        class: "d"
    },
    Ft = {
        class: "b"
    },
    Jt = ["src", "onClick"],
    qt = Wt(() => e("div", {
        class: "miniGame"
    }, null, -1)),
    Zt = {
        class: "title pop"
    },
    Et = {
        class: "title slot"
    },
    Xt = {
        class: "title chess"
    },
    Yt = {
        class: "title fishing"
    },
    Kt = {
        class: "title live"
    },
    Qt = {
        class: "title sport"
    },
    es = P({
        __name: "lobby",
        emits: ["change-type"],
        setup(k, {
            emit: _
        }) {
            const m = te("useHomeHook"),
                {
                    homeState: c,
                    isAlowGame: r,
                    onItemClick: g
                } = m,
                f = Y(),
                d = [{
                    value: 1,
                    path: "WinGo"
                }, {
                    value: 3,
                    path: "5D"
                }, {
                    value: 2,
                    path: "K3"
                }, {
                    value: 4,
                    path: "WinTrx"
                }, {
                    value: 5,
                    path: "XoSo"
                }, {
                    value: 6,
                    path: "XoSo"
                }, {
                    value: 7,
                    path: "Binguo"
                }, {
                    value: 8,
                    path: "4D"
                }],
                y = x(() => {
                    var s;
                    return ((s = c.allGameList) == null ? void 0 : s.lottery) || []
                }),
                a = x(() => {
                    var s;
                    return ((s = c.allGameList) == null ? void 0 : s.flash) || []
                }),
                v = x(() => {
                    var s, n;
                    return ((n = (s = c.allGameList) == null ? void 0 : s.popular) == null ? void 0 : n.platformList.map(b => (b.img = b.imgUrl, b))) || []
                }),
                h = x(() => {
                    var s;
                    return ((s = c.allGameList) == null ? void 0 : s.slot.map(n => (n.img = n.vendorImg, n))) || []
                }),
                L = x(() => {
                    var s;
                    return ((s = c.allGameList) == null ? void 0 : s.chess.map(n => (n.img = n.vendorImg, n))) || []
                }),
                $ = x(() => {
                    var s;
                    return ((s = c.allGameList) == null ? void 0 : s.fish) || []
                });
            x(() => {
                var s;
                return ((s = c.allGameList) == null ? void 0 : s.awardrecordlist.map(n => (n.img = n.imgUrl, n))) || []
            });
            const I = x(() => {
                    var s;
                    return ((s = c.allGameList) == null ? void 0 : s.video.map(n => (n.img = n.vendorImg, n))) || []
                }),
                D = x(() => {
                    var s;
                    return ((s = c.allGameList) == null ? void 0 : s.sport.map(n => (n.img = n.vendorImg, n))) || []
                }),
                w = s => {
                    f.push({
                        name: "AllLotteryGames-" + d[d.findIndex(n => n.value === s.id)].path,
                        query: {
                            id: s.id
                        }
                    })
                },
                u = s => {
                    _("change-type", s)
                },
                C = (s, n) => {
                    sessionStorage.setItem("slotGamesList", JSON.stringify(c.allGameList[n])), sessionStorage.setItem("gameType", JSON.stringify(n)), sessionStorage.setItem("clickedItem", JSON.stringify(s)), f.push({
                        name: "AllOnlineGames"
                    })
                };
            return (s, n) => (o(), i("div", Rt, [e("div", zt, [e("div", Ot, [e("div", Ut, l(s.$t("lottery")), 1), e("div", Vt, l(s.$t("flashText")), 1)]), e("div", Ft, [(o(!0), i(H, null, N(y.value, (b, B) => (o(), i("img", {
                key: B,
                src: b.categoryImg,
                onClick: ae => t(r)(b, w)
            }, null, 8, Jt))), 128))])]), p(O, {
                listData: a.value,
                onMoreClick: n[0] || (n[0] = b => u("Flash")),
                onItemClick: t(g)
            }, {
                head: G(() => [qt]),
                _: 1
            }, 8, ["listData", "onItemClick"]), p(O, {
                listData: v.value,
                isMore: !1,
                onItemClick: t(g)
            }, {
                head: G(() => [e("div", Zt, l(s.$t("popularTitle")), 1)]),
                _: 1
            }, 8, ["listData", "onItemClick"]), p(O, {
                listData: h.value,
                onMoreClick: n[1] || (n[1] = b => u("Slot")),
                onItemClick: n[2] || (n[2] = b => C(b, "slot"))
            }, {
                head: G(() => [e("div", Et, l(s.$t("electronicGame")), 1)]),
                _: 1
            }, 8, ["listData"]), p(O, {
                listData: L.value,
                onMoreClick: n[3] || (n[3] = b => u("Chess")),
                onItemClick: n[4] || (n[4] = b => C(b, "chess"))
            }, {
                head: G(() => [e("div", Xt, l(s.$t("chess")), 1)]),
                _: 1
            }, 8, ["listData"]), p(O, {
                listData: $.value,
                onMoreClick: n[5] || (n[5] = b => u("Fish")),
                onItemClick: t(g)
            }, {
                head: G(() => [e("div", Yt, l(s.$t("fishing")), 1)]),
                _: 1
            }, 8, ["listData", "onItemClick"]), p(O, {
                listData: I.value,
                onMoreClick: n[6] || (n[6] = b => u("Video")),
                onItemClick: t(g)
            }, {
                head: G(() => [e("div", Kt, l(s.$t("live")), 1)]),
                _: 1
            }, 8, ["listData", "onItemClick"]), p(O, {
                listData: D.value,
                onMoreClick: n[7] || (n[7] = b => u("Sport")),
                onItemClick: t(g)
            }, {
                head: G(() => [e("div", Qt, l(s.$t("sport")), 1)]),
                _: 1
            }, 8, ["listData", "onItemClick"]), p(Bt)]))
        }
    });
const ts = M(es, [
        ["__scopeId", "data-v-657212e7"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar048-india-91club/src/components/Home/club91Home/lobby.vue"]
    ]),
    ss = {
        class: "allGame"
    },
    os = ["onClick"],
    as = P({
        __name: "gameList",
        props: {
            activeType: {
                type: String,
                required: !0
            }
        },
        setup(k) {
            const _ = k,
                m = te("useHomeHook"),
                {
                    homeState: c,
                    onItemClick: r
                } = m,
                g = x(() => c.allGameList[_.activeType.toLocaleLowerCase()] || []);
            return (f, d) => {
                const y = F("lazy");
                return o(), i("div", ss, [(o(!0), i(H, null, N(g.value, (a, v) => T((o(), i("img", {
                    key: v,
                    onClick: h => t(r)(a)
                }, null, 8, os)), [
                    [y, a.img]
                ])), 128))])
            }
        }
    });
const ns = M(as, [
        ["__scopeId", "data-v-1e6f54c5"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar048-india-91club/src/components/Home/club91Home/gameList.vue"]
    ]),
    is = {
        class: "allGame"
    },
    ls = {
        class: "body"
    },
    cs = ["onClick"],
    rs = {
        class: "list"
    },
    ds = ["onClick"],
    us = P({
        __name: "seachGame",
        props: {
            activeType: {
                type: String,
                required: !0
            }
        },
        setup(k) {
            const _ = k,
                m = te("useHomeHook"),
                {
                    homeState: c,
                    onItemClick: r
                } = m,
                g = Y(),
                f = S(!1),
                d = S([]),
                y = x(() => c.allGameList[_.activeType.toLocaleLowerCase()] || []),
                a = async $ => {
                    const I = await Z(Se({
                        type: $
                    }));
                    I && (d.value = I.data.gameLists || []), h.value = y.value.find(D => D.vendorId == $)
                },
                v = $ => {
                    f.value = !1, a($.vendorId)
                };
            ne(() => _.activeType, $ => {
                y.value[0] && a(y.value[0].vendorId)
            }, {
                immediate: !0
            });
            const h = S({}),
                L = $ => {
                    sessionStorage.setItem("slotGamesList", JSON.stringify(y.value)), sessionStorage.setItem("gameType", JSON.stringify(_.activeType.toLocaleLowerCase())), sessionStorage.setItem("clickedItem", JSON.stringify(h.value)), g.push({
                        name: "AllOnlineGames"
                    })
                };
            return V(() => {
                a(y.value[0].vendorId)
            }), ($, I) => {
                const D = W("svg-icon"),
                    w = W("van-popup"),
                    u = F("lazy");
                return o(), i(H, null, [e("div", is, [e("div", {
                    class: "head",
                    onClick: I[0] || (I[0] = C => f.value = !0)
                }, l(h.value.slotsName.replace("G9", "9G")), 1), e("div", ls, [(o(!0), i(H, null, N(d.value, (C, s) => T((o(), i("img", {
                    key: s,
                    onClick: n => t(r)(C)
                }, null, 8, cs)), [
                    [u, C.img]
                ])), 128))]), e("div", {
                    class: "btn",
                    onClick: L
                }, l($.$t("viewAll")), 1)]), p(w, {
                    show: f.value,
                    "onUpdate:show": I[1] || (I[1] = C => f.value = C),
                    round: "",
                    position: "bottom"
                }, {
                    default: G(() => [e("div", rs, [(o(!0), i(H, null, N(y.value, (C, s) => (o(), i("div", {
                        key: s,
                        class: E([h.value.vendorId == C.vendorId && "active"]),
                        onClick: n => v(C)
                    }, [e("div", null, l(C.slotsName.replace("G9", "9G")), 1), p(D, {
                        name: C.slotsName,
                        class: "gameIcon"
                    }, null, 8, ["name"])], 10, ds))), 128))])]),
                    _: 1
                }, 8, ["show"])], 64)
            }
        }
    });
const _s = M(us, [
        ["__scopeId", "data-v-e9f45d50"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar048-india-91club/src/components/Home/club91Home/seachGame.vue"]
    ]),
    vs = {
        class: "game"
    },
    ps = {
        key: 0,
        class: "sticky nav"
    },
    ms = ["onClick"],
    hs = ["onClick"],
    gs = P({
        __name: "game",
        setup(k) {
            const _ = [{
                    type: "",
                    label: "Lobby",
                    icon: "lobby"
                }, {
                    type: "Flash",
                    label: "",
                    icon: "miniGame"
                }, {
                    type: "Slot",
                    label: "Slots",
                    icon: "slots"
                }, {
                    type: "Chess",
                    label: "Card",
                    icon: "card"
                }, {
                    type: "Fish",
                    label: "Fishing",
                    icon: "fishing"
                }, {
                    type: "Video",
                    label: "Casino",
                    icon: "casino"
                }, {
                    type: "Sport",
                    label: "Sports",
                    icon: "sports"
                }],
                m = ["Flash", "Fish", "Video", "Sport"],
                c = ["Slot", "Chess"],
                r = J();
            pe("useHomeHook", r);
            const {
                t: g
            } = X(), {
                getGameType: f,
                homeState: d,
                getAllGame: y
            } = r, a = S(""), v = me([]), h = S(null), L = async () => {
                await f(), d.gameTypeList.length > 0 && (d.gameTypeList.forEach(u => {
                    u.state === 1 && v.push({
                        isShow: u.state === 1,
                        title: g("code" + u.typeNameCode),
                        img: u.categoryImg,
                        key: u.categoryCode.toLocaleLowerCase()
                    })
                }), sessionStorage.setItem("gameMenu", JSON.stringify(v)))
            };

            function $(u, C, s = !1) {
                a.value = u;
                const n = C.currentTarget;
                if (h.value) {
                    const b = h.value,
                        B = b.offsetWidth,
                        ae = n.offsetLeft - b.offsetLeft,
                        ue = n.offsetWidth,
                        _e = Math.max(0, ae - (B - ue) / 2);
                    b.scrollTo({
                        left: _e / 2,
                        behavior: "smooth"
                    })
                }
                s && h.value && window.scrollTo({
                    top: h.value.offsetTop - 10,
                    behavior: "smooth"
                })
            }
            const I = u => {
                    a.value = u
                },
                D = S(!1),
                w = () => {
                    if (h.value) {
                        const u = h.value.getBoundingClientRect().top - 40;
                        D.value = u <= 0
                    }
                };
            return V(() => {
                window.addEventListener("scroll", w)
            }), ce(() => {
                window.removeEventListener("scroll", w)
            }), L(), y(), (u, C) => (o(), i(H, null, [e("div", vs, [D.value ? (o(), i("div", ps, [(o(), i(H, null, N(_, s => e("div", {
                key: s.type,
                class: E([a.value === s.type && "active", s.icon]),
                onClick: n => $(s.type, n, !0)
            }, l(s.label), 11, ms)), 64))])) : A("v-if", !0), e("div", {
                class: "nav",
                ref_key: "navRef",
                ref: h
            }, [(o(), i(H, null, N(_, s => e("div", {
                key: s.type,
                class: E([a.value === s.type && "active", s.icon]),
                onClick: n => $(s.type, n)
            }, l(s.label), 11, hs)), 64))], 512)]), a.value == "" ? (o(), U(ts, {
                key: 0,
                onChangeType: I
            })) : A("v-if", !0), m.includes(a.value) ? (o(), U(ns, {
                key: 1,
                activeType: a.value
            }, null, 8, ["activeType"])) : A("v-if", !0), c.includes(a.value) ? (o(), U(_s, {
                key: 2,
                activeType: a.value
            }, null, 8, ["activeType"])) : A("v-if", !0)], 64))
        }
    });
const fs = M(gs, [
        ["__scopeId", "data-v-6f952d30"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar048-india-91club/src/components/Home/club91Home/game.vue"]
    ]),
    ys = {
        class: "winner_91"
    },
    ks = {
        class: "title"
    },
    ws = {
        class: "winner_91-wrapper"
    },
    Cs = {
        class: "head"
    },
    $s = {
        class: "game"
    },
    bs = {
        class: "name"
    },
    Is = {
        class: "amount"
    },
    Ss = P({
        __name: "winner",
        setup(k) {
            const {
                homeState: _,
                getWinInfoDetail: m,
                getWinInfo: c
            } = J(), r = S(null), g = S(null);
            return V(async () => {
                await m(), he(g.value), _.winInfoList.length > 0 && (r.value = setInterval(async () => {
                    _.winInfoList.unshift(_.winInfoList.pop())
                }, 3e3))
            }), ce(() => {
                clearInterval(r.value)
            }), (f, d) => {
                const y = W("svg-icon");
                return o(), i("div", ys, [e("div", ks, [p(y, {
                    name: "91-winner"
                }), R(l(f.$t("winningDetal")), 1)]), e("div", ws, [e("div", Cs, [e("div", null, l(f.$t("game")), 1), e("div", null, l(f.$t("winner")), 1), e("div", null, l(f.$t("winningAmount")), 1)]), e("div", {
                    class: "body",
                    ref_key: "wrapperRef",
                    ref: g
                }, [(o(!0), i(H, null, N(t(c).slice(0, 10), a => (o(), i("div", {
                    class: "winner_91-wrapper__item",
                    key: JSON.stringify(a)
                }, [e("div", $s, [p(y, {
                    name: "91-winner"
                }), R(l(a.typeName.replace("_", " ")), 1)]), e("div", bs, l(t(q)(a.nickName)), 1), e("div", Is, l(t(z)(a.amount || 0)), 1)]))), 128))], 512)])])
            }
        }
    });
const Ls = M(Ss, [
        ["__scopeId", "data-v-f58322f8"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar048-india-91club/src/components/Home/club91Home/winner.vue"]
    ]),
    Gs = k => (Q("data-v-b3bd7e49"), k = k(), ee(), k),
    Hs = Gs(() => e("svg", {
        class: "line",
        width: "1",
        height: "60",
        viewBox: "0 0 1 60",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, [e("line", {
        x1: "0.5",
        x2: "0.5",
        y2: "60",
        stroke: "white"
    })], -1)),
    Ts = ["src"],
    Ds = {
        class: "text"
    },
    Ns = P({
        __name: "DownloadPWA",
        setup(k) {
            const _ = ge("show-pwa-download", !0),
                {
                    t: m
                } = X(),
                c = oe(),
                {
                    onDown: r
                } = J(),
                {
                    isShowDwa: g
                } = Le();
            return (f, d) => {
                const y = W("van-icon");
                return t(g) ? (o(), i("div", {
                    key: 0,
                    class: "btn pwa-btn",
                    onClick: d[1] || (d[1] = (...a) => t(r) && t(r)(...a))
                }, [Hs, p(y, {
                    class: "close",
                    name: "close",
                    onClick: d[0] || (d[0] = re(a => _.value = !1, ["stop"]))
                }), e("img", {
                    class: "icon",
                    src: t(c).getWebIco
                }, null, 8, Ts), e("div", Ds, l(t(m)("addToDesktop")), 1)])) : A("v-if", !0)
            }
        }
    });
const As = M(Ns, [
        ["__scopeId", "data-v-b3bd7e49"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar048-india-91club/src/components/common/DownloadPWA.vue"]
    ]),
    xs = {
        class: "swiper_box"
    },
    Ps = ["onClick"],
    Ms = {
        key: 0,
        class: "swiper-button"
    },
    js = P({
        __name: "index",
        props: {
            isShowButton: {
                type: Boolean,
                default: !1
            }
        },
        setup(k) {
            const {
                getBannerApi: _,
                getBanner: m
            } = J(), c = S(0), r = [ke], g = d => {
                d.activeIndex >= m.value.length ? c.value = d.activeIndex - m.value.length : c.value = d.activeIndex
            }, f = d => {
                d && (window.location.href = d)
            };
            return V(async () => {
                await _()
            }), (d, y) => {
                const a = F("lazy");
                return o(), i("div", xs, [p(t(ye), {
                    class: "my-swipe",
                    "slides-per-view": 1,
                    "space-between": 20,
                    onSlideChange: g,
                    autoplay: {
                        delay: 5e3,
                        disableOnInteraction: !1
                    },
                    modules: r,
                    loop: !0
                }, {
                    default: G(() => [(o(!0), i(H, null, N(t(m), (v, h) => (o(), U(t(fe), {
                        key: h
                    }, {
                        default: G(() => [T(e("img", {
                            onClick: L => f(v.url)
                        }, null, 8, Ps), [
                            [a, v.bannerUrl]
                        ])]),
                        _: 2
                    }, 1024))), 128))]),
                    _: 1
                }), t(m).length > 1 && k.isShowButton ? (o(), i("div", Ms, [(o(!0), i(H, null, N(t(m).length, v => (o(), i("span", {
                    key: v,
                    class: E({
                        active: c.value === v - 1
                    })
                }, null, 2))), 128))])) : A("v-if", !0)])
            }
        }
    });
const Bs = M(js, [
        ["__scopeId", "data-v-3ad7aed7"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar048-india-91club/src/components/Home/Swiper/index.vue"]
    ]),
    Ws = ["src"],
    Rs = {
        key: 0,
        class: "nav-right"
    },
    zs = {
        key: 1,
        class: "nav-right"
    },
    Os = {
        class: "club91"
    },
    Us = {
        class: "h"
    },
    Vs = {
        key: 0,
        class: "amount"
    },
    Fs = {
        class: "a1"
    },
    Js = {
        class: "title"
    },
    qs = {
        class: "a"
    },
    Zs = {
        class: "wv"
    },
    Es = {
        class: "promptHeader"
    },
    Xs = ["innerHTML"],
    Ys = P({
        __name: "91club",
        setup(k) {
            const _ = se(),
                m = Y(),
                {
                    projectIcon: c,
                    isAppDownloadIcon: r,
                    showPWA: g,
                    isRead: f,
                    onDown: d
                } = J(),
                {
                    closePrompt: y,
                    store: a,
                    promptContent: v,
                    beforeClosePrompt: h
                } = Ge(),
                L = S(0),
                $ = async () => {
                    const w = await Z(Te());
                    w && (L.value = (w == null ? void 0 : w.data.amount) || 0)
                },
                I = async () => {
                    var u;
                    const w = await Z(He());
                    w && (L.value = ((u = w == null ? void 0 : w.data) == null ? void 0 : u.amount) || 0)
                },
                D = () => {
                    m.push({
                        name: "Messages"
                    })
                };
            return V(() => {
                _.getToken && I()
            }), (w, u) => {
                const C = W("svg-icon"),
                    s = W("NavBar"),
                    n = W("Point"),
                    b = W("van-dialog");
                return o(), i(H, null, [p(s, null, {
                    left: G(() => [e("img", {
                        src: t(c),
                        alt: ""
                    }, null, 8, Ws)]),
                    right: G(() => [t(_).getToken ? (o(), i("div", zs, [p(C, {
                        class: "downIcon",
                        name: "91-homeDown",
                        onClick: re(t(d), ["stop"])
                    }, null, 8, ["onClick"])])) : (o(), i("div", Rs, [e("div", {
                        class: "nav-btn login",
                        onClick: u[0] || (u[0] = B => t(m).push({
                            name: "login"
                        }))
                    }, l(w.$t("login")), 1), e("div", {
                        class: "nav-btn",
                        onClick: u[1] || (u[1] = B => t(m).push({
                            name: "register"
                        }))
                    }, l(w.$t("register")), 1)]))]),
                    _: 1
                }), e("div", Os, [e("div", Us, [p(Pe, null, {
                    default: G(() => [e("div", {
                        class: "message",
                        onClick: D
                    }, [p(C, {
                        name: "91-message_notice"
                    }), T(p(n, {
                        class: "point"
                    }, null, 512), [
                        [we, !t(f)]
                    ])])]),
                    _: 1
                }), p(Bs, {
                    class: "nop"
                }), t(_).getToken ? (o(), i("div", Vs, [e("div", Fs, [e("div", Js, [p(C, {
                    name: "91-gold"
                }), R(" " + l(w.$t("walletBalance")), 1)]), e("div", qs, [R(l(t(z)(L.value)), 1), p(C, {
                    name: "91-refresh",
                    onClick: $
                })])]), e("div", {
                    class: "a2",
                    onClick: u[2] || (u[2] = B => t(m).push({
                        name: "Withdraw"
                    }))
                }, [p(C, {
                    name: "91-up"
                }), R(l(w.$t("withdraw")), 1)]), e("div", {
                    class: "a2",
                    onClick: u[3] || (u[3] = B => t(m).push({
                        name: "Recharge"
                    }))
                }, [p(C, {
                    name: "91-down"
                }), R(l(w.$t("recharge")), 1)])])) : A("v-if", !0), e("div", Zs, [p(C, {
                    name: "91-turntable",
                    onClick: u[4] || (u[4] = B => t(m).push({
                        name: "Turntable"
                    }))
                }), p(C, {
                    name: "91-vip",
                    onClick: u[5] || (u[5] = B => t(m).push({
                        name: "vip"
                    }))
                })])]), p(fs), p(Ls), p(kt), p(qe), p(b, {
                    show: t(a).prompt,
                    "onUpdate:show": u[6] || (u[6] = B => t(a).prompt = B),
                    "confirm-button-text": w.$t("confirm"),
                    onConfirm: t(y),
                    "before-close": t(h)
                }, {
                    default: G(() => [e("div", Es, l(t(v).title), 1), e("div", {
                        class: "promptContent",
                        innerHTML: t(v).siteMessage
                    }, null, 8, Xs)]),
                    _: 1
                }, 8, ["show", "confirm-button-text", "onConfirm", "before-close"])]), A("下载PWA应用"), t(g) && t(r) ? (o(), U(As, {
                    key: 0
                })) : A("v-if", !0)], 64)
            }
        }
    });
const so = M(Ys, [
    ["__scopeId", "data-v-d78763b5"],
    ["__file", "/usr/local/jenkins-prod/workspace/ar048-india-91club/src/views/home/other/91club.vue"]
]);
export {
    so as
    default
};
//# sourceMappingURL=page-home-other-81ef83e7.js.map