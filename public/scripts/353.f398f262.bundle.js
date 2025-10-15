'use strict'
;(self.webpackChunkweb3_spa = self.webpackChunkweb3_spa || []).push([
  [353],
  {
    353: (e, t, n) => {
      n.r(t), n.d(t, { default: () => l })
      var r = n(70),
        o = n(594),
        a = n(8),
        s = n(136),
        i = n(773),
        c = n(596)
      const u = [
        'function provider() view returns (address)',
        'function totalAmount() view returns (uint256)',
        'function count() view returns (uint256)',
        'function claimedCount() view returns (uint256)',
        'function isEqual() view returns (bool)',
        'function getBalance() view returns (uint256)',
        'function getRemainingCount() view returns (uint256)',
        'function redPocketMap(address) view returns (uint256)',
        'function deposit() payable',
        'function grabRedPocket()',
        'function refund()',
        'function emergencyStop()',
        'event RedPocketCreated(address indexed provider, uint256 amount, uint256 count, bool isEqual)',
        'event RedPocketClaimed(address indexed claimer, uint256 amount)',
        'event RedPocketFinished(uint256 remainingAmount)',
        'event RedPocketRefunded(uint256 amount)',
      ]
      function d(e) {
        if (void 0 === e) return '-'
        try {
          return '' + Number(e) / 1e18
        } catch {
          return '-'
        }
      }
      function l() {
        const { account: e, isConnected: t } = (0, a.A)(),
          {
            address: n,
            getSummary: l,
            getUserClaimedAmount: m,
            deposit: b,
            grabRedPocket: g,
            refund: p,
            emergencyStop: h,
          } = (function () {
            const { provider: e, signer: t } = (0, c.G)(),
              n = '0x8f556efde8c432780def8389ba03fb1499996dca',
              r = (0, o.useMemo)(() => {
                try {
                  const r = t || e
                  return r ? new i.NZ(n, u, r) : null
                } catch (e) {
                  return console.error('创建合约实例失败', e), null
                }
              }, [e, t, n]),
              a = () =>
                r
                  ? t
                    ? r.connect(t)
                    : (s.oR.error('需要连接钱包才能执行此操作'), null)
                  : (s.oR.error('合约未就绪，稍后重试'), null)
            return {
              address: n,
              contract: r,
              getSummary: async () => {
                try {
                  if (!r) return null
                  const [e, t, n, o, a, s, i] = await Promise.all([
                    r.provider(),
                    r.totalAmount(),
                    r.count(),
                    r.claimedCount(),
                    r.isEqual(),
                    r.getBalance(),
                    r.getRemainingCount(),
                  ])
                  return {
                    provider: e,
                    totalAmount: t,
                    count: n,
                    claimedCount: o,
                    isEqual: Boolean(a),
                    balance: s,
                    remainingCount: i,
                  }
                } catch (e) {
                  return (
                    console.error('读取合约信息失败', e),
                    s.oR.error('读取合约信息失败'),
                    null
                  )
                }
              },
              getUserClaimedAmount: async (e) => {
                try {
                  return r ? await r.redPocketMap(e) : null
                } catch (e) {
                  return (
                    console.error('读取用户红包金额失败', e),
                    s.oR.error('读取用户红包金额失败'),
                    null
                  )
                }
              },
              deposit: async (e) => {
                const t = a()
                if (!t) return !1
                try {
                  const n = await t.deposit({ value: e })
                  return await n.wait(), s.oR.success('充值成功'), !0
                } catch (e) {
                  return (
                    console.error('充值失败', e),
                    s.oR.error(e?.message || '充值失败'),
                    !1
                  )
                }
              },
              grabRedPocket: async () => {
                const e = a()
                if (!e) return !1
                try {
                  const t = await e.grabRedPocket()
                  return await t.wait(), s.oR.success('抢红包成功'), !0
                } catch (e) {
                  return (
                    console.error('抢红包失败', e),
                    s.oR.error(e?.message || '抢红包失败'),
                    !1
                  )
                }
              },
              refund: async () => {
                const e = a()
                if (!e) return !1
                try {
                  const t = await e.refund()
                  return await t.wait(), s.oR.success('退款成功'), !0
                } catch (e) {
                  return (
                    console.error('退款失败', e),
                    s.oR.error(e?.message || '退款失败'),
                    !1
                  )
                }
              },
              emergencyStop: async () => {
                const e = a()
                if (!e) return !1
                try {
                  const t = await e.emergencyStop()
                  return await t.wait(), s.oR.success('紧急停止已执行'), !0
                } catch (e) {
                  return (
                    console.error('紧急停止失败', e),
                    s.oR.error(e?.message || '紧急停止失败'),
                    !1
                  )
                }
              },
            }
          })(),
          [w, f] = (0, o.useState)(null),
          [v, x] = (0, o.useState)(null),
          [y, R] = (0, o.useState)(''),
          j = t && !!n,
          C = async () => {
            const t = await l()
            f(t), x(e ? await m(e) : null)
          }
        ;(0, o.useEffect)(() => {
          C()
        }, [e, n])
        return (0, r.jsx)('section', {
          className: 'p-4 flex flex-col gap-6',
          children: (0, r.jsxs)('div', {
            className: 'contract rounded border p-4',
            children: [
              (0, r.jsxs)('div', {
                className: 'mb-3 text-sm text-gray-600',
                children: [
                  '合约地址: ',
                  (0, r.jsx)('span', {
                    className: 'font-mono',
                    children: n || '-',
                  }),
                ],
              }),
              (0, r.jsxs)('div', {
                className: 'grid grid-cols-2 gap-2 text-sm',
                children: [
                  (0, r.jsxs)('div', {
                    children: ['主体 provider: ', w?.provider || '-'],
                  }),
                  (0, r.jsxs)('div', {
                    children: ['总金额(ETH): ', d(w?.totalAmount)],
                  }),
                  (0, r.jsxs)('div', {
                    children: ['红包数量: ', w?.count?.toString?.() || '-'],
                  }),
                  (0, r.jsxs)('div', {
                    children: [
                      '已抢数量: ',
                      w?.claimedCount?.toString?.() || '-',
                    ],
                  }),
                  (0, r.jsxs)('div', {
                    children: ['是否均分: ', w?.isEqual ? '是' : '否'],
                  }),
                  (0, r.jsxs)('div', {
                    children: ['合约余额(ETH): ', d(w?.balance)],
                  }),
                  (0, r.jsxs)('div', {
                    children: [
                      '剩余数量: ',
                      w?.remainingCount?.toString?.() || '-',
                    ],
                  }),
                  (0, r.jsxs)('div', {
                    children: ['我已领(ETH): ', null != v ? d(v) : '-'],
                  }),
                ],
              }),
              (0, r.jsxs)('div', {
                className: 'mt-4 flex items-center gap-2',
                children: [
                  (0, r.jsx)('input', {
                    className: 'border rounded px-2 py-1 w-40',
                    placeholder: '充值 ETH',
                    value: y,
                    onChange: (e) => R(e.target.value),
                  }),
                  (0, r.jsx)('button', {
                    disabled: !j,
                    onClick: async () => {
                      if (!y) return
                      const e = BigInt(Math.floor(1e18 * Number(y)))
                      ;(await b(e)) && (R(''), C())
                    },
                    className:
                      'px-4 py-2 rounded bg-blue-600 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors',
                    children: '充值',
                  }),
                  (0, r.jsx)('div', { className: 'flex-1' }),
                  (0, r.jsx)('button', {
                    disabled: !j,
                    onClick: async () => {
                      ;(await g()) && C()
                    },
                    className:
                      'px-4 py-2 rounded bg-green-600 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-700 transition-colors',
                    children: '抢红包',
                  }),
                  w?.provider === e &&
                    (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)('button', {
                          disabled: !j,
                          onClick: async () => {
                            ;(await p()) && C()
                          },
                          className:
                            'px-4 py-2 rounded bg-amber-600 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-amber-700 transition-colors',
                          children: '退款',
                        }),
                        (0, r.jsx)('button', {
                          disabled: !j,
                          onClick: async () => {
                            ;(await h()) && C()
                          },
                          className:
                            'px-4 py-2 rounded border border-white/20 text-white hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors',
                          children: '紧急停止',
                        }),
                      ],
                    }),
                ],
              }),
            ],
          }),
        })
      }
    },
  },
])
//# sourceMappingURL=353.f398f262.bundle.js.map
