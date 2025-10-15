/*! For license information please see main.50ea3aa8.bundle.js.LICENSE.txt */
;(() => {
  var t,
    e,
    n = {
      8: (t, e, n) => {
        'use strict'
        n.d(e, { A: () => i })
        var r = n(594),
          o = n(596)
        function i() {
          const {
              signer: t,
              account: e,
              chainId: n,
              provider: i,
              accounts: a,
              connect: s,
              disconnect: u,
              switchNetwork: l,
              selectAccount: c,
              checkIsWalletConnected: f,
              handleAccountsChanged: h,
              handleChainChanged: d,
            } = (0, o.G)(),
            p = Boolean(e && i && t)
          return (
            (0, r.useEffect)(() => {
              if ((f(), window.ethereum))
                return (
                  window.ethereum.on('accountsChanged', h),
                  window.ethereum.on('chainChanged', d),
                  () => {
                    window.ethereum?.removeListener('accountsChanged', h),
                      window.ethereum?.removeListener('chainChanged', d)
                  }
                )
            }, [f, h, d]),
            {
              signer: t,
              account: e,
              chainId: n,
              provider: i,
              accounts: a,
              isConnected: p,
              connect: s,
              disconnect: u,
              switchNetwork: l,
              selectAccount: c,
            }
          )
        }
      },
      9: (t, e, n) => {
        'use strict'
        n.d(e, {
          J9: () => f,
          VS: () => h,
          eB: () => d,
          tG: () => p,
          uI: () => m,
          z5: () => g,
        })
        var r = n(537),
          o = n(910),
          i = n(926),
          a = n(696),
          s = n(968)
        const u = BigInt(0)
        function l(t) {
          return null == t ? null : t
        }
        function c(t) {
          return null == t ? null : t.toString()
        }
        class f {
          gasPrice
          maxFeePerGas
          maxPriorityFeePerGas
          constructor(t, e, n) {
            ;(0, a.n)(this, {
              gasPrice: l(t),
              maxFeePerGas: l(e),
              maxPriorityFeePerGas: l(n),
            })
          }
          toJSON() {
            const {
              gasPrice: t,
              maxFeePerGas: e,
              maxPriorityFeePerGas: n,
            } = this
            return {
              _type: 'FeeData',
              gasPrice: c(t),
              maxFeePerGas: c(e),
              maxPriorityFeePerGas: c(n),
            }
          }
        }
        function h(t) {
          const e = {}
          t.to && (e.to = t.to),
            t.from && (e.from = t.from),
            t.data && (e.data = (0, r.c$)(t.data))
          const n =
            'chainId,gasLimit,gasPrice,maxFeePerBlobGas,maxFeePerGas,maxPriorityFeePerGas,value'.split(
              /,/,
            )
          for (const r of n)
            r in t && null != t[r] && (e[r] = (0, i.Ab)(t[r], `request.${r}`))
          const o = 'type,nonce'.split(/,/)
          for (const n of o)
            n in t && null != t[n] && (e[n] = (0, i.WZ)(t[n], `request.${n}`))
          return (
            t.accessList && (e.accessList = (0, s.$)(t.accessList)),
            t.authorizationList &&
              (e.authorizationList = t.authorizationList.slice()),
            'blockTag' in t && (e.blockTag = t.blockTag),
            'enableCcipRead' in t && (e.enableCcipRead = !!t.enableCcipRead),
            'customData' in t && (e.customData = t.customData),
            'blobVersionedHashes' in t &&
              t.blobVersionedHashes &&
              (e.blobVersionedHashes = t.blobVersionedHashes.slice()),
            'kzg' in t && (e.kzg = t.kzg),
            'blobs' in t &&
              t.blobs &&
              (e.blobs = t.blobs.map((t) =>
                (0, r.f)(t) ? (0, r.c$)(t) : Object.assign({}, t),
              )),
            e
          )
        }
        class d {
          provider
          number
          hash
          timestamp
          parentHash
          parentBeaconBlockRoot
          nonce
          difficulty
          gasLimit
          gasUsed
          stateRoot
          receiptsRoot
          blobGasUsed
          excessBlobGas
          miner
          prevRandao
          extraData
          baseFeePerGas
          #t
          constructor(t, e) {
            ;(this.#t = t.transactions.map((t) =>
              'string' != typeof t ? new m(t, e) : t,
            )),
              (0, a.n)(this, {
                provider: e,
                hash: l(t.hash),
                number: t.number,
                timestamp: t.timestamp,
                parentHash: t.parentHash,
                parentBeaconBlockRoot: t.parentBeaconBlockRoot,
                nonce: t.nonce,
                difficulty: t.difficulty,
                gasLimit: t.gasLimit,
                gasUsed: t.gasUsed,
                blobGasUsed: t.blobGasUsed,
                excessBlobGas: t.excessBlobGas,
                miner: t.miner,
                prevRandao: l(t.prevRandao),
                extraData: t.extraData,
                baseFeePerGas: l(t.baseFeePerGas),
                stateRoot: t.stateRoot,
                receiptsRoot: t.receiptsRoot,
              })
          }
          get transactions() {
            return this.#t.map((t) => ('string' == typeof t ? t : t.hash))
          }
          get prefetchedTransactions() {
            const t = this.#t.slice()
            return 0 === t.length
              ? []
              : ((0, o.vA)(
                  'object' == typeof t[0],
                  'transactions were not prefetched with block request',
                  'UNSUPPORTED_OPERATION',
                  { operation: 'transactionResponses()' },
                ),
                t)
          }
          toJSON() {
            const {
              baseFeePerGas: t,
              difficulty: e,
              extraData: n,
              gasLimit: r,
              gasUsed: o,
              hash: i,
              miner: a,
              prevRandao: s,
              nonce: u,
              number: l,
              parentHash: f,
              parentBeaconBlockRoot: h,
              stateRoot: d,
              receiptsRoot: p,
              timestamp: g,
              transactions: m,
            } = this
            return {
              _type: 'Block',
              baseFeePerGas: c(t),
              difficulty: c(e),
              extraData: n,
              gasLimit: c(r),
              gasUsed: c(o),
              blobGasUsed: c(this.blobGasUsed),
              excessBlobGas: c(this.excessBlobGas),
              hash: i,
              miner: a,
              prevRandao: s,
              nonce: u,
              number: l,
              parentHash: f,
              timestamp: g,
              parentBeaconBlockRoot: h,
              stateRoot: d,
              receiptsRoot: p,
              transactions: m,
            }
          }
          [Symbol.iterator]() {
            let t = 0
            const e = this.transactions
            return {
              next: () =>
                t < this.length
                  ? { value: e[t++], done: !1 }
                  : { value: void 0, done: !0 },
            }
          }
          get length() {
            return this.#t.length
          }
          get date() {
            return null == this.timestamp
              ? null
              : new Date(1e3 * this.timestamp)
          }
          async getTransaction(t) {
            let e
            if ('number' == typeof t) e = this.#t[t]
            else {
              const n = t.toLowerCase()
              for (const t of this.#t) {
                if ('string' == typeof t) {
                  if (t !== n) continue
                  e = t
                  break
                }
                if (t.hash === n) {
                  e = t
                  break
                }
              }
            }
            if (null == e) throw new Error('no such tx')
            return 'string' == typeof e
              ? await this.provider.getTransaction(e)
              : e
          }
          getPrefetchedTransaction(t) {
            const e = this.prefetchedTransactions
            if ('number' == typeof t) return e[t]
            t = t.toLowerCase()
            for (const n of e) if (n.hash === t) return n
            ;(0, o.MR)(!1, 'no matching transaction', 'indexOrHash', t)
          }
          isMined() {
            return !!this.hash
          }
          isLondon() {
            return !!this.baseFeePerGas
          }
          orphanedEvent() {
            if (!this.isMined()) throw new Error('')
            return {
              orphan: 'drop-block',
              hash: (t = this).hash,
              number: t.number,
            }
            var t
          }
        }
        class p {
          provider
          transactionHash
          blockHash
          blockNumber
          removed
          address
          data
          topics
          index
          transactionIndex
          constructor(t, e) {
            this.provider = e
            const n = Object.freeze(t.topics.slice())
            ;(0, a.n)(this, {
              transactionHash: t.transactionHash,
              blockHash: t.blockHash,
              blockNumber: t.blockNumber,
              removed: t.removed,
              address: t.address,
              data: t.data,
              topics: n,
              index: t.index,
              transactionIndex: t.transactionIndex,
            })
          }
          toJSON() {
            const {
              address: t,
              blockHash: e,
              blockNumber: n,
              data: r,
              index: o,
              removed: i,
              topics: a,
              transactionHash: s,
              transactionIndex: u,
            } = this
            return {
              _type: 'log',
              address: t,
              blockHash: e,
              blockNumber: n,
              data: r,
              index: o,
              removed: i,
              topics: a,
              transactionHash: s,
              transactionIndex: u,
            }
          }
          async getBlock() {
            const t = await this.provider.getBlock(this.blockHash)
            return (
              (0, o.vA)(!!t, 'failed to find transaction', 'UNKNOWN_ERROR', {}),
              t
            )
          }
          async getTransaction() {
            const t = await this.provider.getTransaction(this.transactionHash)
            return (
              (0, o.vA)(!!t, 'failed to find transaction', 'UNKNOWN_ERROR', {}),
              t
            )
          }
          async getTransactionReceipt() {
            const t = await this.provider.getTransactionReceipt(
              this.transactionHash,
            )
            return (
              (0, o.vA)(
                !!t,
                'failed to find transaction receipt',
                'UNKNOWN_ERROR',
                {},
              ),
              t
            )
          }
          removedEvent() {
            return {
              orphan: 'drop-log',
              log: {
                transactionHash: (t = this).transactionHash,
                blockHash: t.blockHash,
                blockNumber: t.blockNumber,
                address: t.address,
                data: t.data,
                topics: Object.freeze(t.topics.slice()),
                index: t.index,
              },
            }
            var t
          }
        }
        class g {
          provider
          to
          from
          contractAddress
          hash
          index
          blockHash
          blockNumber
          logsBloom
          gasUsed
          blobGasUsed
          cumulativeGasUsed
          gasPrice
          blobGasPrice
          type
          status
          root
          #e
          constructor(t, e) {
            this.#e = Object.freeze(t.logs.map((t) => new p(t, e)))
            let n = u
            null != t.effectiveGasPrice
              ? (n = t.effectiveGasPrice)
              : null != t.gasPrice && (n = t.gasPrice),
              (0, a.n)(this, {
                provider: e,
                to: t.to,
                from: t.from,
                contractAddress: t.contractAddress,
                hash: t.hash,
                index: t.index,
                blockHash: t.blockHash,
                blockNumber: t.blockNumber,
                logsBloom: t.logsBloom,
                gasUsed: t.gasUsed,
                cumulativeGasUsed: t.cumulativeGasUsed,
                blobGasUsed: t.blobGasUsed,
                gasPrice: n,
                blobGasPrice: t.blobGasPrice,
                type: t.type,
                status: t.status,
                root: t.root,
              })
          }
          get logs() {
            return this.#e
          }
          toJSON() {
            const {
              to: t,
              from: e,
              contractAddress: n,
              hash: r,
              index: o,
              blockHash: i,
              blockNumber: a,
              logsBloom: s,
              logs: u,
              status: l,
              root: f,
            } = this
            return {
              _type: 'TransactionReceipt',
              blockHash: i,
              blockNumber: a,
              contractAddress: n,
              cumulativeGasUsed: c(this.cumulativeGasUsed),
              from: e,
              gasPrice: c(this.gasPrice),
              blobGasUsed: c(this.blobGasUsed),
              blobGasPrice: c(this.blobGasPrice),
              gasUsed: c(this.gasUsed),
              hash: r,
              index: o,
              logs: u,
              logsBloom: s,
              root: f,
              status: l,
              to: t,
            }
          }
          get length() {
            return this.logs.length
          }
          [Symbol.iterator]() {
            let t = 0
            return {
              next: () =>
                t < this.length
                  ? { value: this.logs[t++], done: !1 }
                  : { value: void 0, done: !0 },
            }
          }
          get fee() {
            return this.gasUsed * this.gasPrice
          }
          async getBlock() {
            const t = await this.provider.getBlock(this.blockHash)
            if (null == t) throw new Error('TODO')
            return t
          }
          async getTransaction() {
            const t = await this.provider.getTransaction(this.hash)
            if (null == t) throw new Error('TODO')
            return t
          }
          async getResult() {
            return await this.provider.getTransactionResult(this.hash)
          }
          async confirmations() {
            return (await this.provider.getBlockNumber()) - this.blockNumber + 1
          }
          removedEvent() {
            return b(this)
          }
          reorderedEvent(t) {
            return (
              (0, o.vA)(
                !t || t.isMined(),
                "unmined 'other' transction cannot be orphaned",
                'UNSUPPORTED_OPERATION',
                { operation: 'reorderedEvent(other)' },
              ),
              y(this, t)
            )
          }
        }
        class m {
          provider
          blockNumber
          blockHash
          index
          hash
          type
          to
          from
          nonce
          gasLimit
          gasPrice
          maxPriorityFeePerGas
          maxFeePerGas
          maxFeePerBlobGas
          data
          value
          chainId
          signature
          accessList
          blobVersionedHashes
          authorizationList
          #n
          constructor(t, e) {
            ;(this.provider = e),
              (this.blockNumber = null != t.blockNumber ? t.blockNumber : null),
              (this.blockHash = null != t.blockHash ? t.blockHash : null),
              (this.hash = t.hash),
              (this.index = t.index),
              (this.type = t.type),
              (this.from = t.from),
              (this.to = t.to || null),
              (this.gasLimit = t.gasLimit),
              (this.nonce = t.nonce),
              (this.data = t.data),
              (this.value = t.value),
              (this.gasPrice = t.gasPrice),
              (this.maxPriorityFeePerGas =
                null != t.maxPriorityFeePerGas ? t.maxPriorityFeePerGas : null),
              (this.maxFeePerGas =
                null != t.maxFeePerGas ? t.maxFeePerGas : null),
              (this.maxFeePerBlobGas =
                null != t.maxFeePerBlobGas ? t.maxFeePerBlobGas : null),
              (this.chainId = t.chainId),
              (this.signature = t.signature),
              (this.accessList = null != t.accessList ? t.accessList : null),
              (this.blobVersionedHashes =
                null != t.blobVersionedHashes ? t.blobVersionedHashes : null),
              (this.authorizationList =
                null != t.authorizationList ? t.authorizationList : null),
              (this.#n = -1)
          }
          toJSON() {
            const {
              blockNumber: t,
              blockHash: e,
              index: n,
              hash: r,
              type: o,
              to: i,
              from: a,
              nonce: s,
              data: u,
              signature: l,
              accessList: f,
              blobVersionedHashes: h,
            } = this
            return {
              _type: 'TransactionResponse',
              accessList: f,
              blockNumber: t,
              blockHash: e,
              blobVersionedHashes: h,
              chainId: c(this.chainId),
              data: u,
              from: a,
              gasLimit: c(this.gasLimit),
              gasPrice: c(this.gasPrice),
              hash: r,
              maxFeePerGas: c(this.maxFeePerGas),
              maxPriorityFeePerGas: c(this.maxPriorityFeePerGas),
              maxFeePerBlobGas: c(this.maxFeePerBlobGas),
              nonce: s,
              signature: l,
              to: i,
              index: n,
              type: o,
              value: c(this.value),
            }
          }
          async getBlock() {
            let t = this.blockNumber
            if (null == t) {
              const e = await this.getTransaction()
              e && (t = e.blockNumber)
            }
            if (null == t) return null
            const e = this.provider.getBlock(t)
            if (null == e) throw new Error('TODO')
            return e
          }
          async getTransaction() {
            return this.provider.getTransaction(this.hash)
          }
          async confirmations() {
            if (null == this.blockNumber) {
              const { tx: t, blockNumber: e } = await (0, a.k)({
                tx: this.getTransaction(),
                blockNumber: this.provider.getBlockNumber(),
              })
              return null == t || null == t.blockNumber
                ? 0
                : e - t.blockNumber + 1
            }
            return (await this.provider.getBlockNumber()) - this.blockNumber + 1
          }
          async wait(t, e) {
            const n = null == t ? 1 : t,
              r = null == e ? 0 : e
            let i = this.#n,
              s = -1,
              l = -1 === i
            const c = async () => {
                if (l) return null
                const { blockNumber: t, nonce: e } = await (0, a.k)({
                  blockNumber: this.provider.getBlockNumber(),
                  nonce: this.provider.getTransactionCount(this.from),
                })
                if (e < this.nonce) return void (i = t)
                if (l) return null
                const r = await this.getTransaction()
                if (!r || null == r.blockNumber)
                  for (
                    -1 === s && ((s = i - 3), s < this.#n && (s = this.#n));
                    s <= t;
                  ) {
                    if (l) return null
                    const e = await this.provider.getBlock(s, !0)
                    if (null == e) return
                    for (const t of e) if (t === this.hash) return
                    for (let r = 0; r < e.length; r++) {
                      const a = await e.getTransaction(r)
                      if (a.from === this.from && a.nonce === this.nonce) {
                        if (l) return null
                        const e = await this.provider.getTransactionReceipt(
                          a.hash,
                        )
                        if (null == e) return
                        if (t - e.blockNumber + 1 < n) return
                        let r = 'replaced'
                        a.data === this.data &&
                        a.to === this.to &&
                        a.value === this.value
                          ? (r = 'repriced')
                          : '0x' === a.data &&
                            a.from === a.to &&
                            a.value === u &&
                            (r = 'cancelled'),
                          (0, o.vA)(
                            !1,
                            'transaction was replaced',
                            'TRANSACTION_REPLACED',
                            {
                              cancelled: 'replaced' === r || 'cancelled' === r,
                              reason: r,
                              replacement: a.replaceableTransaction(i),
                              hash: a.hash,
                              receipt: e,
                            },
                          )
                      }
                    }
                    s++
                  }
              },
              f = (t) => {
                if (null == t || 0 !== t.status) return t
                ;(0, o.vA)(
                  !1,
                  'transaction execution reverted',
                  'CALL_EXCEPTION',
                  {
                    action: 'sendTransaction',
                    data: null,
                    reason: null,
                    invocation: null,
                    revert: null,
                    transaction: { to: t.to, from: t.from, data: '' },
                    receipt: t,
                  },
                )
              },
              h = await this.provider.getTransactionReceipt(this.hash)
            if (0 === n) return f(h)
            if (h) {
              if (1 === n || (await h.confirmations()) >= n) return f(h)
            } else if ((await c(), 0 === n)) return null
            const d = new Promise((t, e) => {
              const a = [],
                s = () => {
                  a.forEach((t) => t())
                }
              if (
                (a.push(() => {
                  l = !0
                }),
                r > 0)
              ) {
                const t = setTimeout(() => {
                  s(), e((0, o.xz)('wait for transaction timeout', 'TIMEOUT'))
                }, r)
                a.push(() => {
                  clearTimeout(t)
                })
              }
              const u = async (r) => {
                if ((await r.confirmations()) >= n) {
                  s()
                  try {
                    t(f(r))
                  } catch (t) {
                    e(t)
                  }
                }
              }
              if (
                (a.push(() => {
                  this.provider.off(this.hash, u)
                }),
                this.provider.on(this.hash, u),
                i >= 0)
              ) {
                const t = async () => {
                  try {
                    await c()
                  } catch (t) {
                    if ((0, o.bJ)(t, 'TRANSACTION_REPLACED'))
                      return s(), void e(t)
                  }
                  l || this.provider.once('block', t)
                }
                a.push(() => {
                  this.provider.off('block', t)
                }),
                  this.provider.once('block', t)
              }
            })
            return await d
          }
          isMined() {
            return null != this.blockHash
          }
          isLegacy() {
            return 0 === this.type
          }
          isBerlin() {
            return 1 === this.type
          }
          isLondon() {
            return 2 === this.type
          }
          isCancun() {
            return 3 === this.type
          }
          removedEvent() {
            return (
              (0, o.vA)(
                this.isMined(),
                'unmined transaction canot be orphaned',
                'UNSUPPORTED_OPERATION',
                { operation: 'removeEvent()' },
              ),
              b(this)
            )
          }
          reorderedEvent(t) {
            return (
              (0, o.vA)(
                this.isMined(),
                'unmined transaction canot be orphaned',
                'UNSUPPORTED_OPERATION',
                { operation: 'removeEvent()' },
              ),
              (0, o.vA)(
                !t || t.isMined(),
                "unmined 'other' transaction canot be orphaned",
                'UNSUPPORTED_OPERATION',
                { operation: 'removeEvent()' },
              ),
              y(this, t)
            )
          }
          replaceableTransaction(t) {
            ;(0, o.MR)(
              Number.isInteger(t) && t >= 0,
              'invalid startBlock',
              'startBlock',
              t,
            )
            const e = new m(this, this.provider)
            return (e.#n = t), e
          }
        }
        function y(t, e) {
          return { orphan: 'reorder-transaction', tx: t, other: e }
        }
        function b(t) {
          return { orphan: 'drop-transaction', tx: t }
        }
      },
      70: (t, e, n) => {
        'use strict'
        t.exports = n(462)
      },
      76: (t, e, n) => {
        'use strict'
        n.d(e, { Kd: () => ee, N_: () => re, Ye: () => at, sv: () => xt })
        var r = n(594),
          o = 'popstate'
        function i(t = {}) {
          return h(
            function (t, e) {
              let { pathname: n, search: r, hash: o } = t.location
              return l(
                '',
                { pathname: n, search: r, hash: o },
                (e.state && e.state.usr) || null,
                (e.state && e.state.key) || 'default',
              )
            },
            function (t, e) {
              return 'string' == typeof e ? e : c(e)
            },
            null,
            t,
          )
        }
        function a(t, e) {
          if (!1 === t || null == t) throw new Error(e)
        }
        function s(t, e) {
          if (!t) {
            'undefined' != typeof console && console.warn(e)
            try {
              throw new Error(e)
            } catch (t) {}
          }
        }
        function u(t, e) {
          return { usr: t.state, key: t.key, idx: e }
        }
        function l(t, e, n = null, r) {
          return {
            pathname: 'string' == typeof t ? t : t.pathname,
            search: '',
            hash: '',
            ...('string' == typeof e ? f(e) : e),
            state: n,
            key:
              (e && e.key) || r || Math.random().toString(36).substring(2, 10),
          }
        }
        function c({ pathname: t = '/', search: e = '', hash: n = '' }) {
          return (
            e && '?' !== e && (t += '?' === e.charAt(0) ? e : '?' + e),
            n && '#' !== n && (t += '#' === n.charAt(0) ? n : '#' + n),
            t
          )
        }
        function f(t) {
          let e = {}
          if (t) {
            let n = t.indexOf('#')
            n >= 0 && ((e.hash = t.substring(n)), (t = t.substring(0, n)))
            let r = t.indexOf('?')
            r >= 0 && ((e.search = t.substring(r)), (t = t.substring(0, r))),
              t && (e.pathname = t)
          }
          return e
        }
        function h(t, e, n, r = {}) {
          let { window: i = document.defaultView, v5Compat: a = !1 } = r,
            s = i.history,
            c = 'POP',
            f = null,
            h = p()
          function p() {
            return (s.state || { idx: null }).idx
          }
          function g() {
            c = 'POP'
            let t = p(),
              e = null == t ? null : t - h
            ;(h = t), f && f({ action: c, location: y.location, delta: e })
          }
          function m(t) {
            return d(t)
          }
          null == h && ((h = 0), s.replaceState({ ...s.state, idx: h }, ''))
          let y = {
            get action() {
              return c
            },
            get location() {
              return t(i, s)
            },
            listen(t) {
              if (f)
                throw new Error('A history only accepts one active listener')
              return (
                i.addEventListener(o, g),
                (f = t),
                () => {
                  i.removeEventListener(o, g), (f = null)
                }
              )
            },
            createHref: (t) => e(i, t),
            createURL: m,
            encodeLocation(t) {
              let e = m(t)
              return { pathname: e.pathname, search: e.search, hash: e.hash }
            },
            push: function (t, e) {
              c = 'PUSH'
              let r = l(y.location, t, e)
              n && n(r, t), (h = p() + 1)
              let o = u(r, h),
                d = y.createHref(r)
              try {
                s.pushState(o, '', d)
              } catch (t) {
                if (t instanceof DOMException && 'DataCloneError' === t.name)
                  throw t
                i.location.assign(d)
              }
              a && f && f({ action: c, location: y.location, delta: 1 })
            },
            replace: function (t, e) {
              c = 'REPLACE'
              let r = l(y.location, t, e)
              n && n(r, t), (h = p())
              let o = u(r, h),
                i = y.createHref(r)
              s.replaceState(o, '', i),
                a && f && f({ action: c, location: y.location, delta: 0 })
            },
            go: (t) => s.go(t),
          }
          return y
        }
        function d(t, e = !1) {
          let n = 'http://localhost'
          'undefined' != typeof window &&
            (n =
              'null' !== window.location.origin
                ? window.location.origin
                : window.location.href),
            a(n, 'No window.location.(origin|href) available to create URL')
          let r = 'string' == typeof t ? t : c(t)
          return (
            (r = r.replace(/ $/, '%20')),
            !e && r.startsWith('//') && (r = n + r),
            new URL(r, n)
          )
        }
        new WeakMap()
        function p(t, e, n = '/') {
          return g(t, e, n, !1)
        }
        function g(t, e, n, r) {
          let o = S(('string' == typeof e ? f(e) : e).pathname || '/', n)
          if (null == o) return null
          let i = m(t)
          !(function (t) {
            t.sort((t, e) =>
              t.score !== e.score
                ? e.score - t.score
                : (function (t, e) {
                    let n =
                      t.length === e.length &&
                      t.slice(0, -1).every((t, n) => t === e[n])
                    return n ? t[t.length - 1] - e[e.length - 1] : 0
                  })(
                    t.routesMeta.map((t) => t.childrenIndex),
                    e.routesMeta.map((t) => t.childrenIndex),
                  ),
            )
          })(i)
          let a = null
          for (let t = 0; null == a && t < i.length; ++t) {
            let e = O(o)
            a = N(i[t], e, r)
          }
          return a
        }
        function m(t, e = [], n = [], r = '', o = !1) {
          let i = (t, i, s = o, u) => {
            let l = {
              relativePath: void 0 === u ? t.path || '' : u,
              caseSensitive: !0 === t.caseSensitive,
              childrenIndex: i,
              route: t,
            }
            if (l.relativePath.startsWith('/')) {
              if (!l.relativePath.startsWith(r) && s) return
              a(
                l.relativePath.startsWith(r),
                `Absolute route path "${l.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
              ),
                (l.relativePath = l.relativePath.slice(r.length))
            }
            let c = M([r, l.relativePath]),
              f = n.concat(l)
            t.children &&
              t.children.length > 0 &&
              (a(
                !0 !== t.index,
                `Index routes must not have child routes. Please remove all child routes from route path "${c}".`,
              ),
              m(t.children, e, f, c, s)),
              (null != t.path || t.index) &&
                e.push({ path: c, score: R(c, t.index), routesMeta: f })
          }
          return (
            t.forEach((t, e) => {
              if ('' !== t.path && t.path?.includes('?'))
                for (let n of y(t.path)) i(t, e, !0, n)
              else i(t, e)
            }),
            e
          )
        }
        function y(t) {
          let e = t.split('/')
          if (0 === e.length) return []
          let [n, ...r] = e,
            o = n.endsWith('?'),
            i = n.replace(/\?$/, '')
          if (0 === r.length) return o ? [i, ''] : [i]
          let a = y(r.join('/')),
            s = []
          return (
            s.push(...a.map((t) => ('' === t ? i : [i, t].join('/')))),
            o && s.push(...a),
            s.map((e) => (t.startsWith('/') && '' === e ? '/' : e))
          )
        }
        var b = /^:[\w-]+$/,
          v = 3,
          w = 2,
          A = 1,
          x = 10,
          E = -2,
          k = (t) => '*' === t
        function R(t, e) {
          let n = t.split('/'),
            r = n.length
          return (
            n.some(k) && (r += E),
            e && (r += w),
            n
              .filter((t) => !k(t))
              .reduce((t, e) => t + (b.test(e) ? v : '' === e ? A : x), r)
          )
        }
        function N(t, e, n = !1) {
          let { routesMeta: r } = t,
            o = {},
            i = '/',
            a = []
          for (let t = 0; t < r.length; ++t) {
            let s = r[t],
              u = t === r.length - 1,
              l = '/' === i ? e : e.slice(i.length) || '/',
              c = P(
                {
                  path: s.relativePath,
                  caseSensitive: s.caseSensitive,
                  end: u,
                },
                l,
              ),
              f = s.route
            if (
              (!c &&
                u &&
                n &&
                !r[r.length - 1].route.index &&
                (c = P(
                  {
                    path: s.relativePath,
                    caseSensitive: s.caseSensitive,
                    end: !1,
                  },
                  l,
                )),
              !c)
            )
              return null
            Object.assign(o, c.params),
              a.push({
                params: o,
                pathname: M([i, c.pathname]),
                pathnameBase: D(M([i, c.pathnameBase])),
                route: f,
              }),
              '/' !== c.pathnameBase && (i = M([i, c.pathnameBase]))
          }
          return a
        }
        function P(t, e) {
          'string' == typeof t && (t = { path: t, caseSensitive: !1, end: !0 })
          let [n, r] = C(t.path, t.caseSensitive, t.end),
            o = e.match(n)
          if (!o) return null
          let i = o[0],
            a = i.replace(/(.)\/+$/, '$1'),
            s = o.slice(1)
          return {
            params: r.reduce((t, { paramName: e, isOptional: n }, r) => {
              if ('*' === e) {
                let t = s[r] || ''
                a = i.slice(0, i.length - t.length).replace(/(.)\/+$/, '$1')
              }
              const o = s[r]
              return (
                (t[e] = n && !o ? void 0 : (o || '').replace(/%2F/g, '/')), t
              )
            }, {}),
            pathname: i,
            pathnameBase: a,
            pattern: t,
          }
        }
        function C(t, e = !1, n = !0) {
          s(
            '*' === t || !t.endsWith('*') || t.endsWith('/*'),
            `Route path "${t}" will be treated as if it were "${t.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/, '/*')}".`,
          )
          let r = [],
            o =
              '^' +
              t
                .replace(/\/*\*?$/, '')
                .replace(/^\/*/, '/')
                .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
                .replace(
                  /\/:([\w-]+)(\?)?/g,
                  (t, e, n) => (
                    r.push({ paramName: e, isOptional: null != n }),
                    n ? '/?([^\\/]+)?' : '/([^\\/]+)'
                  ),
                )
                .replace(/\/([\w-]+)\?(\/|$)/g, '(/$1)?$2')
          return (
            t.endsWith('*')
              ? (r.push({ paramName: '*' }),
                (o += '*' === t || '/*' === t ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
              : n
                ? (o += '\\/*$')
                : '' !== t && '/' !== t && (o += '(?:(?=\\/|$))'),
            [new RegExp(o, e ? void 0 : 'i'), r]
          )
        }
        function O(t) {
          try {
            return t
              .split('/')
              .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
              .join('/')
          } catch (e) {
            return (
              s(
                !1,
                `The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`,
              ),
              t
            )
          }
        }
        function S(t, e) {
          if ('/' === e) return t
          if (!t.toLowerCase().startsWith(e.toLowerCase())) return null
          let n = e.endsWith('/') ? e.length - 1 : e.length,
            r = t.charAt(n)
          return r && '/' !== r ? null : t.slice(n) || '/'
        }
        function I(t, e, n, r) {
          return `Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
        }
        function B(t) {
          return t.filter(
            (t, e) => 0 === e || (t.route.path && t.route.path.length > 0),
          )
        }
        function T(t) {
          let e = B(t)
          return e.map((t, n) =>
            n === e.length - 1 ? t.pathname : t.pathnameBase,
          )
        }
        function _(t, e, n, r = !1) {
          let o
          'string' == typeof t
            ? (o = f(t))
            : ((o = { ...t }),
              a(
                !o.pathname || !o.pathname.includes('?'),
                I('?', 'pathname', 'search', o),
              ),
              a(
                !o.pathname || !o.pathname.includes('#'),
                I('#', 'pathname', 'hash', o),
              ),
              a(
                !o.search || !o.search.includes('#'),
                I('#', 'search', 'hash', o),
              ))
          let i,
            s = '' === t || '' === o.pathname,
            u = s ? '/' : o.pathname
          if (null == u) i = n
          else {
            let t = e.length - 1
            if (!r && u.startsWith('..')) {
              let e = u.split('/')
              for (; '..' === e[0]; ) e.shift(), (t -= 1)
              o.pathname = e.join('/')
            }
            i = t >= 0 ? e[t] : '/'
          }
          let l = (function (t, e = '/') {
              let {
                  pathname: n,
                  search: r = '',
                  hash: o = '',
                } = 'string' == typeof t ? f(t) : t,
                i = n
                  ? n.startsWith('/')
                    ? n
                    : (function (t, e) {
                        let n = e.replace(/\/+$/, '').split('/')
                        return (
                          t.split('/').forEach((t) => {
                            '..' === t
                              ? n.length > 1 && n.pop()
                              : '.' !== t && n.push(t)
                          }),
                          n.length > 1 ? n.join('/') : '/'
                        )
                      })(n, e)
                  : e
              return { pathname: i, search: L(r), hash: F(o) }
            })(o, i),
            c = u && '/' !== u && u.endsWith('/'),
            h = (s || '.' === u) && n.endsWith('/')
          return (
            l.pathname.endsWith('/') || (!c && !h) || (l.pathname += '/'), l
          )
        }
        var M = (t) => t.join('/').replace(/\/\/+/g, '/'),
          D = (t) => t.replace(/\/+$/, '').replace(/^\/*/, '/'),
          L = (t) => (t && '?' !== t ? (t.startsWith('?') ? t : '?' + t) : ''),
          F = (t) => (t && '#' !== t ? (t.startsWith('#') ? t : '#' + t) : '')
        function U(t) {
          return (
            null != t &&
            'number' == typeof t.status &&
            'string' == typeof t.statusText &&
            'boolean' == typeof t.internal &&
            'data' in t
          )
        }
        var j = ['POST', 'PUT', 'PATCH', 'DELETE'],
          G = (new Set(j), ['GET', ...j])
        new Set(G), Symbol('ResetLoaderData')
        var H = r.createContext(null)
        H.displayName = 'DataRouter'
        var z = r.createContext(null)
        z.displayName = 'DataRouterState'
        var Q = r.createContext(!1)
        var V = r.createContext({ isTransitioning: !1 })
        V.displayName = 'ViewTransition'
        var W = r.createContext(new Map())
        W.displayName = 'Fetchers'
        var J = r.createContext(null)
        J.displayName = 'Await'
        var K = r.createContext(null)
        K.displayName = 'Navigation'
        var q = r.createContext(null)
        q.displayName = 'Location'
        var Z = r.createContext({ outlet: null, matches: [], isDataRoute: !1 })
        Z.displayName = 'Route'
        var Y = r.createContext(null)
        Y.displayName = 'RouteError'
        var $ = !0
        function X() {
          return null != r.useContext(q)
        }
        function tt() {
          return (
            a(
              X(),
              'useLocation() may be used only in the context of a <Router> component.',
            ),
            r.useContext(q).location
          )
        }
        var et =
          'You should call navigate() in a React.useEffect(), not when your component is first rendered.'
        function nt(t) {
          r.useContext(K).static || r.useLayoutEffect(t)
        }
        function rt() {
          let { isDataRoute: t } = r.useContext(Z)
          return t
            ? (function () {
                let { router: t } = pt('useNavigate'),
                  e = mt('useNavigate'),
                  n = r.useRef(!1)
                return (
                  nt(() => {
                    n.current = !0
                  }),
                  r.useCallback(
                    async (r, o = {}) => {
                      s(n.current, et),
                        n.current &&
                          ('number' == typeof r
                            ? t.navigate(r)
                            : await t.navigate(r, { fromRouteId: e, ...o }))
                    },
                    [t, e],
                  )
                )
              })()
            : (function () {
                a(
                  X(),
                  'useNavigate() may be used only in the context of a <Router> component.',
                )
                let t = r.useContext(H),
                  { basename: e, navigator: n } = r.useContext(K),
                  { matches: o } = r.useContext(Z),
                  { pathname: i } = tt(),
                  u = JSON.stringify(T(o)),
                  l = r.useRef(!1)
                return (
                  nt(() => {
                    l.current = !0
                  }),
                  r.useCallback(
                    (r, o = {}) => {
                      if ((s(l.current, et), !l.current)) return
                      if ('number' == typeof r) return void n.go(r)
                      let a = _(r, JSON.parse(u), i, 'path' === o.relative)
                      null == t &&
                        '/' !== e &&
                        (a.pathname =
                          '/' === a.pathname ? e : M([e, a.pathname])),
                        (o.replace ? n.replace : n.push)(a, o.state, o)
                    },
                    [e, n, u, i, t],
                  )
                )
              })()
        }
        var ot = r.createContext(null)
        function it(t, { relative: e } = {}) {
          let { matches: n } = r.useContext(Z),
            { pathname: o } = tt(),
            i = JSON.stringify(T(n))
          return r.useMemo(
            () => _(t, JSON.parse(i), o, 'path' === e),
            [t, i, o, e],
          )
        }
        function at(t, e) {
          return st(t, e)
        }
        function st(t, e, n, o, i) {
          a(
            X(),
            'useRoutes() may be used only in the context of a <Router> component.',
          )
          let { navigator: u } = r.useContext(K),
            { matches: l } = r.useContext(Z),
            c = l[l.length - 1],
            h = c ? c.params : {},
            d = c ? c.pathname : '/',
            g = c ? c.pathnameBase : '/',
            m = c && c.route
          if ($) {
            let t = (m && m.path) || ''
            vt(
              d,
              !m || t.endsWith('*') || t.endsWith('*?'),
              `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${t}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${t}"> to <Route path="${'/' === t ? '*' : `${t}/*`}">.`,
            )
          }
          let y,
            b = tt()
          if (e) {
            let t = 'string' == typeof e ? f(e) : e
            a(
              '/' === g || t.pathname?.startsWith(g),
              `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${t.pathname}" was given in the \`location\` prop.`,
            ),
              (y = t)
          } else y = b
          let v = y.pathname || '/',
            w = v
          if ('/' !== g) {
            let t = g.replace(/^\//, '').split('/')
            w = '/' + v.replace(/^\//, '').split('/').slice(t.length).join('/')
          }
          let A = p(t, { pathname: w })
          $ &&
            (s(
              m || null != A,
              `No routes matched location "${y.pathname}${y.search}${y.hash}" `,
            ),
            s(
              null == A ||
                void 0 !== A[A.length - 1].route.element ||
                void 0 !== A[A.length - 1].route.Component ||
                void 0 !== A[A.length - 1].route.lazy,
              `Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
            ))
          let x = ht(
            A &&
              A.map((t) =>
                Object.assign({}, t, {
                  params: Object.assign({}, h, t.params),
                  pathname: M([
                    g,
                    u.encodeLocation
                      ? u.encodeLocation(
                          t.pathname.replace(/\?/g, '%3F').replace(/#/g, '%23'),
                        ).pathname
                      : t.pathname,
                  ]),
                  pathnameBase:
                    '/' === t.pathnameBase
                      ? g
                      : M([
                          g,
                          u.encodeLocation
                            ? u.encodeLocation(
                                t.pathnameBase
                                  .replace(/\?/g, '%3F')
                                  .replace(/#/g, '%23'),
                              ).pathname
                            : t.pathnameBase,
                        ]),
                }),
              ),
            l,
            n,
            o,
            i,
          )
          return e && x
            ? r.createElement(
                q.Provider,
                {
                  value: {
                    location: {
                      pathname: '/',
                      search: '',
                      hash: '',
                      state: null,
                      key: 'default',
                      ...y,
                    },
                    navigationType: 'POP',
                  },
                },
                x,
              )
            : x
        }
        function ut() {
          let t = yt(),
            e = U(t)
              ? `${t.status} ${t.statusText}`
              : t instanceof Error
                ? t.message
                : JSON.stringify(t),
            n = t instanceof Error ? t.stack : null,
            o = 'rgba(200,200,200, 0.5)',
            i = { padding: '0.5rem', backgroundColor: o },
            a = { padding: '2px 4px', backgroundColor: o },
            s = null
          return (
            $ &&
              (console.error(
                'Error handled by React Router default ErrorBoundary:',
                t,
              ),
              (s = r.createElement(
                r.Fragment,
                null,
                r.createElement('p', null, '💿 Hey developer 👋'),
                r.createElement(
                  'p',
                  null,
                  'You can provide a way better UX than this when your app throws errors by providing your own ',
                  r.createElement('code', { style: a }, 'ErrorBoundary'),
                  ' or',
                  ' ',
                  r.createElement('code', { style: a }, 'errorElement'),
                  ' prop on your route.',
                ),
              ))),
            r.createElement(
              r.Fragment,
              null,
              r.createElement('h2', null, 'Unexpected Application Error!'),
              r.createElement('h3', { style: { fontStyle: 'italic' } }, e),
              n ? r.createElement('pre', { style: i }, n) : null,
              s,
            )
          )
        }
        var lt = r.createElement(ut, null),
          ct = class extends r.Component {
            constructor(t) {
              super(t),
                (this.state = {
                  location: t.location,
                  revalidation: t.revalidation,
                  error: t.error,
                })
            }
            static getDerivedStateFromError(t) {
              return { error: t }
            }
            static getDerivedStateFromProps(t, e) {
              return e.location !== t.location ||
                ('idle' !== e.revalidation && 'idle' === t.revalidation)
                ? {
                    error: t.error,
                    location: t.location,
                    revalidation: t.revalidation,
                  }
                : {
                    error: void 0 !== t.error ? t.error : e.error,
                    location: e.location,
                    revalidation: t.revalidation || e.revalidation,
                  }
            }
            componentDidCatch(t, e) {
              this.props.unstable_onError
                ? this.props.unstable_onError(t, e)
                : console.error(
                    'React Router caught the following error during render',
                    t,
                  )
            }
            render() {
              return void 0 !== this.state.error
                ? r.createElement(
                    Z.Provider,
                    { value: this.props.routeContext },
                    r.createElement(Y.Provider, {
                      value: this.state.error,
                      children: this.props.component,
                    }),
                  )
                : this.props.children
            }
          }
        function ft({ routeContext: t, match: e, children: n }) {
          let o = r.useContext(H)
          return (
            o &&
              o.static &&
              o.staticContext &&
              (e.route.errorElement || e.route.ErrorBoundary) &&
              (o.staticContext._deepestRenderedBoundaryId = e.route.id),
            r.createElement(Z.Provider, { value: t }, n)
          )
        }
        function ht(t, e = [], n = null, o = null, i = null) {
          if (null == t) {
            if (!n) return null
            if (n.errors) t = n.matches
            else {
              if (0 !== e.length || n.initialized || !(n.matches.length > 0))
                return null
              t = n.matches
            }
          }
          let s = t,
            u = n?.errors
          if (null != u) {
            let t = s.findIndex((t) => t.route.id && void 0 !== u?.[t.route.id])
            a(
              t >= 0,
              `Could not find a matching route for errors on route IDs: ${Object.keys(u).join(',')}`,
            ),
              (s = s.slice(0, Math.min(s.length, t + 1)))
          }
          let l = !1,
            c = -1
          if (n)
            for (let t = 0; t < s.length; t++) {
              let e = s[t]
              if (
                ((e.route.HydrateFallback || e.route.hydrateFallbackElement) &&
                  (c = t),
                e.route.id)
              ) {
                let { loaderData: t, errors: r } = n,
                  o =
                    e.route.loader &&
                    !t.hasOwnProperty(e.route.id) &&
                    (!r || void 0 === r[e.route.id])
                if (e.route.lazy || o) {
                  ;(l = !0), (s = c >= 0 ? s.slice(0, c + 1) : [s[0]])
                  break
                }
              }
            }
          return s.reduceRight((t, i, a) => {
            let f,
              h = !1,
              d = null,
              p = null
            n &&
              ((f = u && i.route.id ? u[i.route.id] : void 0),
              (d = i.route.errorElement || lt),
              l &&
                (c < 0 && 0 === a
                  ? (vt(
                      'route-fallback',
                      !1,
                      'No `HydrateFallback` element provided to render during initial hydration',
                    ),
                    (h = !0),
                    (p = null))
                  : c === a &&
                    ((h = !0), (p = i.route.hydrateFallbackElement || null))))
            let g = e.concat(s.slice(0, a + 1)),
              m = () => {
                let e
                return (
                  (e = f
                    ? d
                    : h
                      ? p
                      : i.route.Component
                        ? r.createElement(i.route.Component, null)
                        : i.route.element
                          ? i.route.element
                          : t),
                  r.createElement(ft, {
                    match: i,
                    routeContext: {
                      outlet: t,
                      matches: g,
                      isDataRoute: null != n,
                    },
                    children: e,
                  })
                )
              }
            return n &&
              (i.route.ErrorBoundary || i.route.errorElement || 0 === a)
              ? r.createElement(ct, {
                  location: n.location,
                  revalidation: n.revalidation,
                  component: d,
                  error: f,
                  children: m(),
                  routeContext: { outlet: null, matches: g, isDataRoute: !0 },
                  unstable_onError: o,
                })
              : m()
          }, null)
        }
        function dt(t) {
          return `${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
        }
        function pt(t) {
          let e = r.useContext(H)
          return a(e, dt(t)), e
        }
        function gt(t) {
          let e = r.useContext(z)
          return a(e, dt(t)), e
        }
        function mt(t) {
          let e = (function (t) {
              let e = r.useContext(Z)
              return a(e, dt(t)), e
            })(t),
            n = e.matches[e.matches.length - 1]
          return (
            a(
              n.route.id,
              `${t} can only be used on routes that contain a unique "id"`,
            ),
            n.route.id
          )
        }
        function yt() {
          let t = r.useContext(Y),
            e = gt('useRouteError'),
            n = mt('useRouteError')
          return void 0 !== t ? t : e.errors?.[n]
        }
        var bt = {}
        function vt(t, e, n) {
          e || bt[t] || ((bt[t] = !0), s(!1, n))
        }
        var wt = {}
        function At(t, e) {
          t || wt[e] || ((wt[e] = !0), console.warn(e))
        }
        r.memo(function ({
          routes: t,
          future: e,
          state: n,
          unstable_onError: r,
        }) {
          return st(t, void 0, n, r, e)
        })
        function xt(t) {
          return (function (t) {
            let e = r.useContext(Z).outlet
            return r.useMemo(
              () => e && r.createElement(ot.Provider, { value: t }, e),
              [e, t],
            )
          })(t.context)
        }
        function Et({
          basename: t = '/',
          children: e = null,
          location: n,
          navigationType: o = 'POP',
          navigator: i,
          static: u = !1,
        }) {
          a(
            !X(),
            'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.',
          )
          let l = t.replace(/^\/*/, '/'),
            c = r.useMemo(
              () => ({ basename: l, navigator: i, static: u, future: {} }),
              [l, i, u],
            )
          'string' == typeof n && (n = f(n))
          let {
              pathname: h = '/',
              search: d = '',
              hash: p = '',
              state: g = null,
              key: m = 'default',
            } = n,
            y = r.useMemo(() => {
              let t = S(h, l)
              return null == t
                ? null
                : {
                    location: {
                      pathname: t,
                      search: d,
                      hash: p,
                      state: g,
                      key: m,
                    },
                    navigationType: o,
                  }
            }, [l, h, d, p, g, m, o])
          return (
            s(
              null != y,
              `<Router basename="${l}"> is not able to match the URL "${h}${d}${p}" because it does not start with the basename, so the <Router> won't render anything.`,
            ),
            null == y
              ? null
              : r.createElement(
                  K.Provider,
                  { value: c },
                  r.createElement(q.Provider, { children: e, value: y }),
                )
          )
        }
        r.Component
        var kt = 'get',
          Rt = 'application/x-www-form-urlencoded'
        function Nt(t) {
          return null != t && 'string' == typeof t.tagName
        }
        var Pt = null
        var Ct = new Set([
          'application/x-www-form-urlencoded',
          'multipart/form-data',
          'text/plain',
        ])
        function Ot(t) {
          return null == t || Ct.has(t)
            ? t
            : (s(
                !1,
                `"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Rt}"`,
              ),
              null)
        }
        function St(t, e) {
          let n, r, o, i, a
          if (Nt((s = t)) && 'form' === s.tagName.toLowerCase()) {
            let a = t.getAttribute('action')
            ;(r = a ? S(a, e) : null),
              (n = t.getAttribute('method') || kt),
              (o = Ot(t.getAttribute('enctype')) || Rt),
              (i = new FormData(t))
          } else if (
            (function (t) {
              return Nt(t) && 'button' === t.tagName.toLowerCase()
            })(t) ||
            ((function (t) {
              return Nt(t) && 'input' === t.tagName.toLowerCase()
            })(t) &&
              ('submit' === t.type || 'image' === t.type))
          ) {
            let a = t.form
            if (null == a)
              throw new Error(
                'Cannot submit a <button> or <input type="submit"> without a <form>',
              )
            let s = t.getAttribute('formaction') || a.getAttribute('action')
            if (
              ((r = s ? S(s, e) : null),
              (n =
                t.getAttribute('formmethod') || a.getAttribute('method') || kt),
              (o =
                Ot(t.getAttribute('formenctype')) ||
                Ot(a.getAttribute('enctype')) ||
                Rt),
              (i = new FormData(a, t)),
              !(function () {
                if (null === Pt)
                  try {
                    new FormData(document.createElement('form'), 0), (Pt = !1)
                  } catch (t) {
                    Pt = !0
                  }
                return Pt
              })())
            ) {
              let { name: e, type: n, value: r } = t
              if ('image' === n) {
                let t = e ? `${e}.` : ''
                i.append(`${t}x`, '0'), i.append(`${t}y`, '0')
              } else e && i.append(e, r)
            }
          } else {
            if (Nt(t))
              throw new Error(
                'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
              )
            ;(n = kt), (r = null), (o = Rt), (a = t)
          }
          var s
          return (
            i && 'text/plain' === o && ((a = i), (i = void 0)),
            {
              action: r,
              method: n.toLowerCase(),
              encType: o,
              formData: i,
              body: a,
            }
          )
        }
        Object.getOwnPropertyNames(Object.prototype).sort().join('\0')
        'undefined' != typeof window
          ? window
          : 'undefined' != typeof globalThis && globalThis
        function It(t, e) {
          if (!1 === t || null == t) throw new Error(e)
        }
        Symbol('SingleFetchRedirect')
        function Bt(t, e, n) {
          let r =
            'string' == typeof t
              ? new URL(
                  t,
                  'undefined' == typeof window
                    ? 'server://singlefetch/'
                    : window.location.origin,
                )
              : t
          return (
            '/' === r.pathname
              ? (r.pathname = `_root.${n}`)
              : e && '/' === S(r.pathname, e)
                ? (r.pathname = `${e.replace(/\/$/, '')}/_root.${n}`)
                : (r.pathname = `${r.pathname.replace(/\/$/, '')}.${n}`),
            r
          )
        }
        async function Tt(t, e) {
          if (t.id in e) return e[t.id]
          try {
            let n = await import(t.module)
            return (e[t.id] = n), n
          } catch (e) {
            return (
              console.error(
                `Error loading route module \`${t.module}\`, reloading page...`,
              ),
              console.error(e),
              window.__reactRouterContext &&
                window.__reactRouterContext.isSpaMode,
              window.location.reload(),
              new Promise(() => {})
            )
          }
        }
        function _t(t) {
          return null != t && 'string' == typeof t.page
        }
        function Mt(t) {
          return (
            null != t &&
            (null == t.href
              ? 'preload' === t.rel &&
                'string' == typeof t.imageSrcSet &&
                'string' == typeof t.imageSizes
              : 'string' == typeof t.rel && 'string' == typeof t.href)
          )
        }
        function Dt(t, e, n, r, o, i) {
          let a = (t, e) => !n[e] || t.route.id !== n[e].route.id,
            s = (t, e) =>
              n[e].pathname !== t.pathname ||
              (n[e].route.path?.endsWith('*') &&
                n[e].params['*'] !== t.params['*'])
          return 'assets' === i
            ? e.filter((t, e) => a(t, e) || s(t, e))
            : 'data' === i
              ? e.filter((e, i) => {
                  let u = r.routes[e.route.id]
                  if (!u || !u.hasLoader) return !1
                  if (a(e, i) || s(e, i)) return !0
                  if (e.route.shouldRevalidate) {
                    let r = e.route.shouldRevalidate({
                      currentUrl: new URL(
                        o.pathname + o.search + o.hash,
                        window.origin,
                      ),
                      currentParams: n[0]?.params || {},
                      nextUrl: new URL(t, window.origin),
                      nextParams: e.params,
                      defaultShouldRevalidate: !0,
                    })
                    if ('boolean' == typeof r) return r
                  }
                  return !0
                })
              : []
        }
        function Lt(t, e, { includeHydrateFallback: n } = {}) {
          return (
            (r = t
              .map((t) => {
                let r = e.routes[t.route.id]
                if (!r) return []
                let o = [r.module]
                return (
                  r.clientActionModule && (o = o.concat(r.clientActionModule)),
                  r.clientLoaderModule && (o = o.concat(r.clientLoaderModule)),
                  n &&
                    r.hydrateFallbackModule &&
                    (o = o.concat(r.hydrateFallbackModule)),
                  r.imports && (o = o.concat(r.imports)),
                  o
                )
              })
              .flat(1)),
            [...new Set(r)]
          )
          var r
        }
        function Ft(t, e) {
          let n = new Set(),
            r = new Set(e)
          return t.reduce((t, o) => {
            if (e && !_t(o) && 'script' === o.as && o.href && r.has(o.href))
              return t
            let i = JSON.stringify(
              (function (t) {
                let e = {},
                  n = Object.keys(t).sort()
                for (let r of n) e[r] = t[r]
                return e
              })(o),
            )
            return n.has(i) || (n.add(i), t.push({ key: i, link: o })), t
          }, [])
        }
        function Ut(t, e) {
          return 'lazy' === t.mode && !0 === e
        }
        function jt() {
          let t = r.useContext(H)
          return (
            It(
              t,
              'You must render this element inside a <DataRouterContext.Provider> element',
            ),
            t
          )
        }
        function Gt() {
          let t = r.useContext(z)
          return (
            It(
              t,
              'You must render this element inside a <DataRouterStateContext.Provider> element',
            ),
            t
          )
        }
        var Ht = r.createContext(void 0)
        function zt() {
          let t = r.useContext(Ht)
          return (
            It(
              t,
              'You must render this element inside a <HydratedRouter> element',
            ),
            t
          )
        }
        function Qt(t, e) {
          return (n) => {
            t && t(n), n.defaultPrevented || e(n)
          }
        }
        function Vt(t, e, n) {
          if (n && !qt) return [t[0]]
          if (e) {
            let n = t.findIndex((t) => void 0 !== e[t.route.id])
            return t.slice(0, n + 1)
          }
          return t
        }
        Ht.displayName = 'FrameworkContext'
        function Wt({ page: t, ...e }) {
          let { router: n } = jt(),
            o = r.useMemo(
              () => p(n.routes, t, n.basename),
              [n.routes, t, n.basename],
            )
          return o ? r.createElement(Kt, { page: t, matches: o, ...e }) : null
        }
        function Jt(t) {
          let { manifest: e, routeModules: n } = zt(),
            [o, i] = r.useState([])
          return (
            r.useEffect(() => {
              let r = !1
              return (
                (async function (t, e, n) {
                  return Ft(
                    (
                      await Promise.all(
                        t.map(async (t) => {
                          let r = e.routes[t.route.id]
                          if (r) {
                            let t = await Tt(r, n)
                            return t.links ? t.links() : []
                          }
                          return []
                        }),
                      )
                    )
                      .flat(1)
                      .filter(Mt)
                      .filter(
                        (t) => 'stylesheet' === t.rel || 'preload' === t.rel,
                      )
                      .map((t) =>
                        'stylesheet' === t.rel
                          ? { ...t, rel: 'prefetch', as: 'style' }
                          : { ...t, rel: 'prefetch' },
                      ),
                  )
                })(t, e, n).then((t) => {
                  r || i(t)
                }),
                () => {
                  r = !0
                }
              )
            }, [t, e, n]),
            o
          )
        }
        function Kt({ page: t, matches: e, ...n }) {
          let o = tt(),
            { manifest: i, routeModules: a } = zt(),
            { basename: s } = jt(),
            { loaderData: u, matches: l } = Gt(),
            c = r.useMemo(() => Dt(t, e, l, i, o, 'data'), [t, e, l, i, o]),
            f = r.useMemo(() => Dt(t, e, l, i, o, 'assets'), [t, e, l, i, o]),
            h = r.useMemo(() => {
              if (t === o.pathname + o.search + o.hash) return []
              let n = new Set(),
                r = !1
              if (
                (e.forEach((t) => {
                  let e = i.routes[t.route.id]
                  e &&
                    e.hasLoader &&
                    ((!c.some((e) => e.route.id === t.route.id) &&
                      t.route.id in u &&
                      a[t.route.id]?.shouldRevalidate) ||
                    e.hasClientLoader
                      ? (r = !0)
                      : n.add(t.route.id))
                }),
                0 === n.size)
              )
                return []
              let l = Bt(t, s, 'data')
              return (
                r &&
                  n.size > 0 &&
                  l.searchParams.set(
                    '_routes',
                    e
                      .filter((t) => n.has(t.route.id))
                      .map((t) => t.route.id)
                      .join(','),
                  ),
                [l.pathname + l.search]
              )
            }, [s, u, o, i, c, e, t, a]),
            d = r.useMemo(() => Lt(f, i), [f, i]),
            p = Jt(f)
          return r.createElement(
            r.Fragment,
            null,
            h.map((t) =>
              r.createElement('link', {
                key: t,
                rel: 'prefetch',
                as: 'fetch',
                href: t,
                ...n,
              }),
            ),
            d.map((t) =>
              r.createElement('link', {
                key: t,
                rel: 'modulepreload',
                href: t,
                ...n,
              }),
            ),
            p.map(({ key: t, link: e }) =>
              r.createElement('link', { key: t, nonce: n.nonce, ...e }),
            ),
          )
        }
        var qt = !1
        function Zt(t) {
          let {
              manifest: e,
              serverHandoffString: n,
              isSpaMode: o,
              renderMeta: i,
              routeDiscovery: a,
              ssr: s,
            } = zt(),
            { router: u, static: l, staticContext: c } = jt(),
            { matches: f } = Gt(),
            h = r.useContext(Q),
            d = Ut(a, s)
          i && (i.didRenderScripts = !0)
          let g = Vt(f, null, o)
          r.useEffect(() => {
            qt = !0
          }, [])
          let m = r.useMemo(() => {
              if (h) return null
              let o = c
                  ? `window.__reactRouterContext = ${n};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`
                  : ' ',
                i = l
                  ? `${e.hmr?.runtime ? `import ${JSON.stringify(e.hmr.runtime)};` : ''}${d ? '' : `import ${JSON.stringify(e.url)}`};\n${g
                      .map((t, n) => {
                        let r = `route${n}`,
                          o = e.routes[t.route.id]
                        It(o, `Route ${t.route.id} not found in manifest`)
                        let {
                            clientActionModule: i,
                            clientLoaderModule: a,
                            clientMiddlewareModule: s,
                            hydrateFallbackModule: u,
                            module: l,
                          } = o,
                          c = [
                            ...(i
                              ? [{ module: i, varName: `${r}_clientAction` }]
                              : []),
                            ...(a
                              ? [{ module: a, varName: `${r}_clientLoader` }]
                              : []),
                            ...(s
                              ? [
                                  {
                                    module: s,
                                    varName: `${r}_clientMiddleware`,
                                  },
                                ]
                              : []),
                            ...(u
                              ? [{ module: u, varName: `${r}_HydrateFallback` }]
                              : []),
                            { module: l, varName: `${r}_main` },
                          ]
                        return 1 === c.length
                          ? `import * as ${r} from ${JSON.stringify(l)};`
                          : [
                              c
                                .map(
                                  (t) =>
                                    `import * as ${t.varName} from "${t.module}";`,
                                )
                                .join('\n'),
                              `const ${r} = {${c.map((t) => `...${t.varName}`).join(',')}};`,
                            ].join('\n')
                      })
                      .join('\n')}\n  ${
                      d
                        ? `window.__reactRouterManifest = ${JSON.stringify(
                            (function ({ sri: t, ...e }, n) {
                              let r = new Set(
                                  n.state.matches.map((t) => t.route.id),
                                ),
                                o = n.state.location.pathname
                                  .split('/')
                                  .filter(Boolean),
                                i = ['/']
                              for (o.pop(); o.length > 0; )
                                i.push(`/${o.join('/')}`), o.pop()
                              i.forEach((t) => {
                                let e = p(n.routes, t, n.basename)
                                e && e.forEach((t) => r.add(t.route.id))
                              })
                              let a = [...r].reduce(
                                (t, n) =>
                                  Object.assign(t, { [n]: e.routes[n] }),
                                {},
                              )
                              return { ...e, routes: a, sri: !!t || void 0 }
                            })(e, u),
                            null,
                            2,
                          )};`
                        : ''
                    }\n  window.__reactRouterRouteModules = {${g.map((t, e) => `${JSON.stringify(t.route.id)}:route${e}`).join(',')}};\n\nimport(${JSON.stringify(e.entry.module)});`
                  : ' '
              return r.createElement(
                r.Fragment,
                null,
                r.createElement('script', {
                  ...t,
                  suppressHydrationWarning: !0,
                  dangerouslySetInnerHTML: { __html: o },
                  type: void 0,
                }),
                r.createElement('script', {
                  ...t,
                  suppressHydrationWarning: !0,
                  dangerouslySetInnerHTML: { __html: i },
                  type: 'module',
                  async: !0,
                }),
              )
            }, []),
            y =
              qt || h
                ? []
                : ((b = e.entry.imports.concat(
                    Lt(g, e, { includeHydrateFallback: !0 }),
                  )),
                  [...new Set(b)])
          var b
          let v = 'object' == typeof e.sri ? e.sri : {}
          return (
            At(
              !h,
              'The <Scripts /> element is a no-op when using RSC and can be safely removed.',
            ),
            qt || h
              ? null
              : r.createElement(
                  r.Fragment,
                  null,
                  'object' == typeof e.sri
                    ? r.createElement('script', {
                        'rr-importmap': '',
                        type: 'importmap',
                        suppressHydrationWarning: !0,
                        dangerouslySetInnerHTML: {
                          __html: JSON.stringify({ integrity: v }),
                        },
                      })
                    : null,
                  d
                    ? null
                    : r.createElement('link', {
                        rel: 'modulepreload',
                        href: e.url,
                        crossOrigin: t.crossOrigin,
                        integrity: v[e.url],
                        suppressHydrationWarning: !0,
                      }),
                  r.createElement('link', {
                    rel: 'modulepreload',
                    href: e.entry.module,
                    crossOrigin: t.crossOrigin,
                    integrity: v[e.entry.module],
                    suppressHydrationWarning: !0,
                  }),
                  y.map((e) =>
                    r.createElement('link', {
                      key: e,
                      rel: 'modulepreload',
                      href: e,
                      crossOrigin: t.crossOrigin,
                      integrity: v[e],
                      suppressHydrationWarning: !0,
                    }),
                  ),
                  m,
                )
          )
        }
        function Yt(...t) {
          return (e) => {
            t.forEach((t) => {
              'function' == typeof t ? t(e) : null != t && (t.current = e)
            })
          }
        }
        r.Component
        function $t({ error: t, isOutsideRemixApp: e }) {
          console.error(t)
          let n,
            o = r.createElement('script', {
              dangerouslySetInnerHTML: {
                __html:
                  '\n        console.log(\n          "💿 Hey developer 👋. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."\n        );\n      ',
              },
            })
          if (U(t))
            return r.createElement(
              Xt,
              { title: 'Unhandled Thrown Response!' },
              r.createElement(
                'h1',
                { style: { fontSize: '24px' } },
                t.status,
                ' ',
                t.statusText,
              ),
              $ ? o : null,
            )
          if (t instanceof Error) n = t
          else {
            let e =
              null == t
                ? 'Unknown Error'
                : 'object' == typeof t && 'toString' in t
                  ? t.toString()
                  : JSON.stringify(t)
            n = new Error(e)
          }
          return r.createElement(
            Xt,
            { title: 'Application Error!', isOutsideRemixApp: e },
            r.createElement(
              'h1',
              { style: { fontSize: '24px' } },
              'Application Error',
            ),
            r.createElement(
              'pre',
              {
                style: {
                  padding: '2rem',
                  background: 'hsla(10, 50%, 50%, 0.1)',
                  color: 'red',
                  overflow: 'auto',
                },
              },
              n.stack,
            ),
            o,
          )
        }
        function Xt({
          title: t,
          renderScripts: e,
          isOutsideRemixApp: n,
          children: o,
        }) {
          let { routeModules: i } = zt()
          return i.root?.Layout && !n
            ? o
            : r.createElement(
                'html',
                { lang: 'en' },
                r.createElement(
                  'head',
                  null,
                  r.createElement('meta', { charSet: 'utf-8' }),
                  r.createElement('meta', {
                    name: 'viewport',
                    content:
                      'width=device-width,initial-scale=1,viewport-fit=cover',
                  }),
                  r.createElement('title', null, t),
                ),
                r.createElement(
                  'body',
                  null,
                  r.createElement(
                    'main',
                    {
                      style: {
                        fontFamily: 'system-ui, sans-serif',
                        padding: '2rem',
                      },
                    },
                    o,
                    e ? r.createElement(Zt, null) : null,
                  ),
                ),
              )
        }
        var te =
          'undefined' != typeof window &&
          void 0 !== window.document &&
          void 0 !== window.document.createElement
        try {
          te && (window.__reactRouterVersion = '7.9.4')
        } catch (t) {}
        function ee({ basename: t, children: e, window: n }) {
          let o = r.useRef()
          null == o.current && (o.current = i({ window: n, v5Compat: !0 }))
          let a = o.current,
            [s, u] = r.useState({ action: a.action, location: a.location }),
            l = r.useCallback(
              (t) => {
                r.startTransition(() => u(t))
              },
              [u],
            )
          return (
            r.useLayoutEffect(() => a.listen(l), [a, l]),
            r.createElement(Et, {
              basename: t,
              children: e,
              location: s.location,
              navigationType: s.action,
              navigator: a,
            })
          )
        }
        var ne = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
          re = r.forwardRef(function (
            {
              onClick: t,
              discover: e = 'render',
              prefetch: n = 'none',
              relative: o,
              reloadDocument: i,
              replace: u,
              state: l,
              target: f,
              to: h,
              preventScrollReset: d,
              viewTransition: p,
              ...g
            },
            m,
          ) {
            let y,
              { basename: b } = r.useContext(K),
              v = 'string' == typeof h && ne.test(h),
              w = !1
            if ('string' == typeof h && v && ((y = h), te))
              try {
                let t = new URL(window.location.href),
                  e = h.startsWith('//') ? new URL(t.protocol + h) : new URL(h),
                  n = S(e.pathname, b)
                e.origin === t.origin && null != n
                  ? (h = n + e.search + e.hash)
                  : (w = !0)
              } catch (t) {
                s(
                  !1,
                  `<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
                )
              }
            let A = (function (t, { relative: e } = {}) {
                a(
                  X(),
                  'useHref() may be used only in the context of a <Router> component.',
                )
                let { basename: n, navigator: o } = r.useContext(K),
                  { hash: i, pathname: s, search: u } = it(t, { relative: e }),
                  l = s
                return (
                  '/' !== n && (l = '/' === s ? n : M([n, s])),
                  o.createHref({ pathname: l, search: u, hash: i })
                )
              })(h, { relative: o }),
              [x, E, k] = (function (t, e) {
                let n = r.useContext(Ht),
                  [o, i] = r.useState(!1),
                  [a, s] = r.useState(!1),
                  {
                    onFocus: u,
                    onBlur: l,
                    onMouseEnter: c,
                    onMouseLeave: f,
                    onTouchStart: h,
                  } = e,
                  d = r.useRef(null)
                r.useEffect(() => {
                  if (('render' === t && s(!0), 'viewport' === t)) {
                    let t = new IntersectionObserver(
                      (t) => {
                        t.forEach((t) => {
                          s(t.isIntersecting)
                        })
                      },
                      { threshold: 0.5 },
                    )
                    return (
                      d.current && t.observe(d.current),
                      () => {
                        t.disconnect()
                      }
                    )
                  }
                }, [t]),
                  r.useEffect(() => {
                    if (o) {
                      let t = setTimeout(() => {
                        s(!0)
                      }, 100)
                      return () => {
                        clearTimeout(t)
                      }
                    }
                  }, [o])
                let p = () => {
                    i(!0)
                  },
                  g = () => {
                    i(!1), s(!1)
                  }
                return n
                  ? 'intent' !== t
                    ? [a, d, {}]
                    : [
                        a,
                        d,
                        {
                          onFocus: Qt(u, p),
                          onBlur: Qt(l, g),
                          onMouseEnter: Qt(c, p),
                          onMouseLeave: Qt(f, g),
                          onTouchStart: Qt(h, p),
                        },
                      ]
                  : [!1, d, {}]
              })(n, g),
              R = (function (
                t,
                {
                  target: e,
                  replace: n,
                  state: o,
                  preventScrollReset: i,
                  relative: a,
                  viewTransition: s,
                } = {},
              ) {
                let u = rt(),
                  l = tt(),
                  f = it(t, { relative: a })
                return r.useCallback(
                  (r) => {
                    if (
                      (function (t, e) {
                        return !(
                          0 !== t.button ||
                          (e && '_self' !== e) ||
                          (function (t) {
                            return !!(
                              t.metaKey ||
                              t.altKey ||
                              t.ctrlKey ||
                              t.shiftKey
                            )
                          })(t)
                        )
                      })(r, e)
                    ) {
                      r.preventDefault()
                      let e = void 0 !== n ? n : c(l) === c(f)
                      u(t, {
                        replace: e,
                        state: o,
                        preventScrollReset: i,
                        relative: a,
                        viewTransition: s,
                      })
                    }
                  },
                  [l, u, f, n, o, e, t, i, a, s],
                )
              })(h, {
                replace: u,
                state: l,
                target: f,
                preventScrollReset: d,
                relative: o,
                viewTransition: p,
              })
            let N = r.createElement('a', {
              ...g,
              ...k,
              href: y || A,
              onClick:
                w || i
                  ? t
                  : function (e) {
                      t && t(e), e.defaultPrevented || R(e)
                    },
              ref: Yt(m, E),
              target: f,
              'data-discover': v || 'render' !== e ? void 0 : 'true',
            })
            return x && !v
              ? r.createElement(
                  r.Fragment,
                  null,
                  N,
                  r.createElement(Wt, { page: A }),
                )
              : N
          })
        ;(re.displayName = 'Link'),
          (r.forwardRef(function (
            {
              'aria-current': t = 'page',
              caseSensitive: e = !1,
              className: n = '',
              end: o = !1,
              style: i,
              to: s,
              viewTransition: u,
              children: l,
              ...c
            },
            f,
          ) {
            let h = it(s, { relative: c.relative }),
              d = tt(),
              p = r.useContext(z),
              { navigator: g, basename: m } = r.useContext(K),
              y =
                null != p &&
                (function (t, { relative: e } = {}) {
                  let n = r.useContext(V)
                  a(
                    null != n,
                    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
                  )
                  let { basename: o } = ae('useViewTransitionState'),
                    i = it(t, { relative: e })
                  if (!n.isTransitioning) return !1
                  let s =
                      S(n.currentLocation.pathname, o) ||
                      n.currentLocation.pathname,
                    u = S(n.nextLocation.pathname, o) || n.nextLocation.pathname
                  return null != P(i.pathname, u) || null != P(i.pathname, s)
                })(h) &&
                !0 === u,
              b = g.encodeLocation ? g.encodeLocation(h).pathname : h.pathname,
              v = d.pathname,
              w =
                p && p.navigation && p.navigation.location
                  ? p.navigation.location.pathname
                  : null
            e ||
              ((v = v.toLowerCase()),
              (w = w ? w.toLowerCase() : null),
              (b = b.toLowerCase())),
              w && m && (w = S(w, m) || w)
            const A = '/' !== b && b.endsWith('/') ? b.length - 1 : b.length
            let x,
              E = v === b || (!o && v.startsWith(b) && '/' === v.charAt(A)),
              k =
                null != w &&
                (w === b ||
                  (!o && w.startsWith(b) && '/' === w.charAt(b.length))),
              R = { isActive: E, isPending: k, isTransitioning: y },
              N = E ? t : void 0
            x =
              'function' == typeof n
                ? n(R)
                : [
                    n,
                    E ? 'active' : null,
                    k ? 'pending' : null,
                    y ? 'transitioning' : null,
                  ]
                    .filter(Boolean)
                    .join(' ')
            let C = 'function' == typeof i ? i(R) : i
            return r.createElement(
              re,
              {
                ...c,
                'aria-current': N,
                className: x,
                ref: f,
                style: C,
                to: s,
                viewTransition: u,
              },
              'function' == typeof l ? l(R) : l,
            )
          }).displayName = 'NavLink')
        var oe = r.forwardRef(
          (
            {
              discover: t = 'render',
              fetcherKey: e,
              navigate: n,
              reloadDocument: o,
              replace: i,
              state: s,
              method: u = kt,
              action: l,
              onSubmit: f,
              relative: h,
              preventScrollReset: d,
              viewTransition: p,
              ...g
            },
            m,
          ) => {
            let y = le(),
              b = (function (t, { relative: e } = {}) {
                let { basename: n } = r.useContext(K),
                  o = r.useContext(Z)
                a(o, 'useFormAction must be used inside a RouteContext')
                let [i] = o.matches.slice(-1),
                  s = { ...it(t || '.', { relative: e }) },
                  u = tt()
                if (null == t) {
                  s.search = u.search
                  let t = new URLSearchParams(s.search),
                    e = t.getAll('index')
                  if (e.some((t) => '' === t)) {
                    t.delete('index'),
                      e.filter((t) => t).forEach((e) => t.append('index', e))
                    let n = t.toString()
                    s.search = n ? `?${n}` : ''
                  }
                }
                ;(t && '.' !== t) ||
                  !i.route.index ||
                  (s.search = s.search
                    ? s.search.replace(/^\?/, '?index&')
                    : '?index')
                '/' !== n &&
                  (s.pathname = '/' === s.pathname ? n : M([n, s.pathname]))
                return c(s)
              })(l, { relative: h }),
              v = 'get' === u.toLowerCase() ? 'get' : 'post',
              w = 'string' == typeof l && ne.test(l)
            return r.createElement('form', {
              ref: m,
              method: v,
              action: b,
              onSubmit: o
                ? f
                : (t) => {
                    if ((f && f(t), t.defaultPrevented)) return
                    t.preventDefault()
                    let r = t.nativeEvent.submitter,
                      o = r?.getAttribute('formmethod') || u
                    y(r || t.currentTarget, {
                      fetcherKey: e,
                      method: o,
                      navigate: n,
                      replace: i,
                      state: s,
                      relative: h,
                      preventScrollReset: d,
                      viewTransition: p,
                    })
                  },
              ...g,
              'data-discover': w || 'render' !== t ? void 0 : 'true',
            })
          },
        )
        function ie(t) {
          return `${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
        }
        function ae(t) {
          let e = r.useContext(H)
          return a(e, ie(t)), e
        }
        oe.displayName = 'Form'
        var se = 0,
          ue = () => `__${String(++se)}__`
        function le() {
          let { router: t } = ae('useSubmit'),
            { basename: e } = r.useContext(K),
            n = mt('useRouteId')
          return r.useCallback(
            async (r, o = {}) => {
              let {
                action: i,
                method: a,
                encType: s,
                formData: u,
                body: l,
              } = St(r, e)
              if (!1 === o.navigate) {
                let e = o.fetcherKey || ue()
                await t.fetch(e, n, o.action || i, {
                  preventScrollReset: o.preventScrollReset,
                  formData: u,
                  body: l,
                  formMethod: o.method || a,
                  formEncType: o.encType || s,
                  flushSync: o.flushSync,
                })
              } else
                await t.navigate(o.action || i, {
                  preventScrollReset: o.preventScrollReset,
                  formData: u,
                  body: l,
                  formMethod: o.method || a,
                  formEncType: o.encType || s,
                  replace: o.replace,
                  state: o.state,
                  fromRouteId: n,
                  flushSync: o.flushSync,
                  viewTransition: o.viewTransition,
                })
            },
            [t, e, n],
          )
        }
      },
      136: (t, e, n) => {
        'use strict'
        n.d(e, { l$: () => k, oR: () => m })
        var r = n(594),
          o = n(206)
        const i = Array(12).fill(0),
          a = ({ visible: t, className: e }) =>
            r.createElement(
              'div',
              {
                className: ['sonner-loading-wrapper', e]
                  .filter(Boolean)
                  .join(' '),
                'data-visible': t,
              },
              r.createElement(
                'div',
                { className: 'sonner-spinner' },
                i.map((t, e) =>
                  r.createElement('div', {
                    className: 'sonner-loading-bar',
                    key: `spinner-bar-${e}`,
                  }),
                ),
              ),
            ),
          s = r.createElement(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: '0 0 20 20',
              fill: 'currentColor',
              height: '20',
              width: '20',
            },
            r.createElement('path', {
              fillRule: 'evenodd',
              d: 'M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z',
              clipRule: 'evenodd',
            }),
          ),
          u = r.createElement(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: '0 0 24 24',
              fill: 'currentColor',
              height: '20',
              width: '20',
            },
            r.createElement('path', {
              fillRule: 'evenodd',
              d: 'M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z',
              clipRule: 'evenodd',
            }),
          ),
          l = r.createElement(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: '0 0 20 20',
              fill: 'currentColor',
              height: '20',
              width: '20',
            },
            r.createElement('path', {
              fillRule: 'evenodd',
              d: 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z',
              clipRule: 'evenodd',
            }),
          ),
          c = r.createElement(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: '0 0 20 20',
              fill: 'currentColor',
              height: '20',
              width: '20',
            },
            r.createElement('path', {
              fillRule: 'evenodd',
              d: 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z',
              clipRule: 'evenodd',
            }),
          ),
          f = r.createElement(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              width: '12',
              height: '12',
              viewBox: '0 0 24 24',
              fill: 'none',
              stroke: 'currentColor',
              strokeWidth: '1.5',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
            },
            r.createElement('line', { x1: '18', y1: '6', x2: '6', y2: '18' }),
            r.createElement('line', { x1: '6', y1: '6', x2: '18', y2: '18' }),
          )
        let h = 1
        const d = new (class {
            constructor() {
              ;(this.subscribe = (t) => (
                this.subscribers.push(t),
                () => {
                  const e = this.subscribers.indexOf(t)
                  this.subscribers.splice(e, 1)
                }
              )),
                (this.publish = (t) => {
                  this.subscribers.forEach((e) => e(t))
                }),
                (this.addToast = (t) => {
                  this.publish(t), (this.toasts = [...this.toasts, t])
                }),
                (this.create = (t) => {
                  var e
                  const { message: n, ...r } = t,
                    o =
                      'number' == typeof (null == t ? void 0 : t.id) ||
                      (null == (e = t.id) ? void 0 : e.length) > 0
                        ? t.id
                        : h++,
                    i = this.toasts.find((t) => t.id === o),
                    a = void 0 === t.dismissible || t.dismissible
                  return (
                    this.dismissedToasts.has(o) &&
                      this.dismissedToasts.delete(o),
                    i
                      ? (this.toasts = this.toasts.map((e) =>
                          e.id === o
                            ? (this.publish({ ...e, ...t, id: o, title: n }),
                              { ...e, ...t, id: o, dismissible: a, title: n })
                            : e,
                        ))
                      : this.addToast({
                          title: n,
                          ...r,
                          dismissible: a,
                          id: o,
                        }),
                    o
                  )
                }),
                (this.dismiss = (t) => (
                  t
                    ? (this.dismissedToasts.add(t),
                      requestAnimationFrame(() =>
                        this.subscribers.forEach((e) =>
                          e({ id: t, dismiss: !0 }),
                        ),
                      ))
                    : this.toasts.forEach((t) => {
                        this.subscribers.forEach((e) =>
                          e({ id: t.id, dismiss: !0 }),
                        )
                      }),
                  t
                )),
                (this.message = (t, e) => this.create({ ...e, message: t })),
                (this.error = (t, e) =>
                  this.create({ ...e, message: t, type: 'error' })),
                (this.success = (t, e) =>
                  this.create({ ...e, type: 'success', message: t })),
                (this.info = (t, e) =>
                  this.create({ ...e, type: 'info', message: t })),
                (this.warning = (t, e) =>
                  this.create({ ...e, type: 'warning', message: t })),
                (this.loading = (t, e) =>
                  this.create({ ...e, type: 'loading', message: t })),
                (this.promise = (t, e) => {
                  if (!e) return
                  let n
                  void 0 !== e.loading &&
                    (n = this.create({
                      ...e,
                      promise: t,
                      type: 'loading',
                      message: e.loading,
                      description:
                        'function' != typeof e.description
                          ? e.description
                          : void 0,
                    }))
                  const o = Promise.resolve(t instanceof Function ? t() : t)
                  let i,
                    a = void 0 !== n
                  const s = o
                      .then(async (t) => {
                        i = ['resolve', t]
                        if (r.isValidElement(t))
                          (a = !1),
                            this.create({ id: n, type: 'default', message: t })
                        else if (p(t) && !t.ok) {
                          a = !1
                          const o =
                              'function' == typeof e.error
                                ? await e.error(
                                    `HTTP error! status: ${t.status}`,
                                  )
                                : e.error,
                            i =
                              'function' == typeof e.description
                                ? await e.description(
                                    `HTTP error! status: ${t.status}`,
                                  )
                                : e.description,
                            s =
                              'object' == typeof o && !r.isValidElement(o)
                                ? o
                                : { message: o }
                          this.create({
                            id: n,
                            type: 'error',
                            description: i,
                            ...s,
                          })
                        } else if (t instanceof Error) {
                          a = !1
                          const o =
                              'function' == typeof e.error
                                ? await e.error(t)
                                : e.error,
                            i =
                              'function' == typeof e.description
                                ? await e.description(t)
                                : e.description,
                            s =
                              'object' == typeof o && !r.isValidElement(o)
                                ? o
                                : { message: o }
                          this.create({
                            id: n,
                            type: 'error',
                            description: i,
                            ...s,
                          })
                        } else if (void 0 !== e.success) {
                          a = !1
                          const o =
                              'function' == typeof e.success
                                ? await e.success(t)
                                : e.success,
                            i =
                              'function' == typeof e.description
                                ? await e.description(t)
                                : e.description,
                            s =
                              'object' == typeof o && !r.isValidElement(o)
                                ? o
                                : { message: o }
                          this.create({
                            id: n,
                            type: 'success',
                            description: i,
                            ...s,
                          })
                        }
                      })
                      .catch(async (t) => {
                        if (((i = ['reject', t]), void 0 !== e.error)) {
                          a = !1
                          const o =
                              'function' == typeof e.error
                                ? await e.error(t)
                                : e.error,
                            i =
                              'function' == typeof e.description
                                ? await e.description(t)
                                : e.description,
                            s =
                              'object' == typeof o && !r.isValidElement(o)
                                ? o
                                : { message: o }
                          this.create({
                            id: n,
                            type: 'error',
                            description: i,
                            ...s,
                          })
                        }
                      })
                      .finally(() => {
                        a && (this.dismiss(n), (n = void 0)),
                          null == e.finally || e.finally.call(e)
                      }),
                    u = () =>
                      new Promise((t, e) =>
                        s
                          .then(() => ('reject' === i[0] ? e(i[1]) : t(i[1])))
                          .catch(e),
                      )
                  return 'string' != typeof n && 'number' != typeof n
                    ? { unwrap: u }
                    : Object.assign(n, { unwrap: u })
                }),
                (this.custom = (t, e) => {
                  const n = (null == e ? void 0 : e.id) || h++
                  return this.create({ jsx: t(n), id: n, ...e }), n
                }),
                (this.getActiveToasts = () =>
                  this.toasts.filter((t) => !this.dismissedToasts.has(t.id))),
                (this.subscribers = []),
                (this.toasts = []),
                (this.dismissedToasts = new Set())
            }
          })(),
          p = (t) =>
            t &&
            'object' == typeof t &&
            'ok' in t &&
            'boolean' == typeof t.ok &&
            'status' in t &&
            'number' == typeof t.status,
          g = (t, e) => {
            const n = (null == e ? void 0 : e.id) || h++
            return d.addToast({ title: t, ...e, id: n }), n
          },
          m = Object.assign(
            g,
            {
              success: d.success,
              info: d.info,
              warning: d.warning,
              error: d.error,
              custom: d.custom,
              message: d.message,
              promise: d.promise,
              dismiss: d.dismiss,
              loading: d.loading,
            },
            {
              getHistory: () => d.toasts,
              getToasts: () => d.getActiveToasts(),
            },
          )
        function y(t) {
          return void 0 !== t.label
        }
        !(function (t) {
          if (!t || 'undefined' == typeof document) return
          let e = document.head || document.getElementsByTagName('head')[0],
            n = document.createElement('style')
          ;(n.type = 'text/css'),
            e.appendChild(n),
            n.styleSheet
              ? (n.styleSheet.cssText = t)
              : n.appendChild(document.createTextNode(t))
        })(
          "[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}",
        )
        const b = 3,
          v = 14
        function w(...t) {
          return t.filter(Boolean).join(' ')
        }
        const A = (t) => {
          var e, n, o, i, h, d, p, g, m
          const {
              invert: b,
              toast: v,
              unstyled: A,
              interacting: x,
              setHeights: E,
              visibleToasts: k,
              heights: R,
              index: N,
              toasts: P,
              expanded: C,
              removeToast: O,
              defaultRichColors: S,
              closeButton: I,
              style: B,
              cancelButtonStyle: T,
              actionButtonStyle: _,
              className: M = '',
              descriptionClassName: D = '',
              duration: L,
              position: F,
              gap: U,
              expandByDefault: j,
              classNames: G,
              icons: H,
              closeButtonAriaLabel: z = 'Close toast',
            } = t,
            [Q, V] = r.useState(null),
            [W, J] = r.useState(null),
            [K, q] = r.useState(!1),
            [Z, Y] = r.useState(!1),
            [$, X] = r.useState(!1),
            [tt, et] = r.useState(!1),
            [nt, rt] = r.useState(!1),
            [ot, it] = r.useState(0),
            [at, st] = r.useState(0),
            ut = r.useRef(v.duration || L || 4e3),
            lt = r.useRef(null),
            ct = r.useRef(null),
            ft = 0 === N,
            ht = N + 1 <= k,
            dt = v.type,
            pt = !1 !== v.dismissible,
            gt = v.className || '',
            mt = v.descriptionClassName || '',
            yt = r.useMemo(
              () => R.findIndex((t) => t.toastId === v.id) || 0,
              [R, v.id],
            ),
            bt = r.useMemo(() => {
              var t
              return null != (t = v.closeButton) ? t : I
            }, [v.closeButton, I]),
            vt = r.useMemo(() => v.duration || L || 4e3, [v.duration, L]),
            wt = r.useRef(0),
            At = r.useRef(0),
            xt = r.useRef(0),
            Et = r.useRef(null),
            [kt, Rt] = F.split('-'),
            Nt = r.useMemo(
              () => R.reduce((t, e, n) => (n >= yt ? t : t + e.height), 0),
              [R, yt],
            ),
            Pt = (() => {
              const [t, e] = r.useState(document.hidden)
              return (
                r.useEffect(() => {
                  const t = () => {
                    e(document.hidden)
                  }
                  return (
                    document.addEventListener('visibilitychange', t),
                    () => window.removeEventListener('visibilitychange', t)
                  )
                }, []),
                t
              )
            })(),
            Ct = v.invert || b,
            Ot = 'loading' === dt
          ;(At.current = r.useMemo(() => yt * U + Nt, [yt, Nt])),
            r.useEffect(() => {
              ut.current = vt
            }, [vt]),
            r.useEffect(() => {
              q(!0)
            }, []),
            r.useEffect(() => {
              const t = ct.current
              if (t) {
                const e = t.getBoundingClientRect().height
                return (
                  st(e),
                  E((t) => [
                    { toastId: v.id, height: e, position: v.position },
                    ...t,
                  ]),
                  () => E((t) => t.filter((t) => t.toastId !== v.id))
                )
              }
            }, [E, v.id]),
            r.useLayoutEffect(() => {
              if (!K) return
              const t = ct.current,
                e = t.style.height
              t.style.height = 'auto'
              const n = t.getBoundingClientRect().height
              ;(t.style.height = e),
                st(n),
                E((t) =>
                  t.find((t) => t.toastId === v.id)
                    ? t.map((t) =>
                        t.toastId === v.id ? { ...t, height: n } : t,
                      )
                    : [
                        { toastId: v.id, height: n, position: v.position },
                        ...t,
                      ],
                )
            }, [K, v.title, v.description, E, v.id, v.jsx, v.action, v.cancel])
          const St = r.useCallback(() => {
            Y(!0),
              it(At.current),
              E((t) => t.filter((t) => t.toastId !== v.id)),
              setTimeout(() => {
                O(v)
              }, 200)
          }, [v, O, E, At])
          r.useEffect(() => {
            if (
              (v.promise && 'loading' === dt) ||
              v.duration === 1 / 0 ||
              'loading' === v.type
            )
              return
            let t
            return (
              C || x || Pt
                ? (() => {
                    if (xt.current < wt.current) {
                      const t = new Date().getTime() - wt.current
                      ut.current = ut.current - t
                    }
                    xt.current = new Date().getTime()
                  })()
                : ut.current !== 1 / 0 &&
                  ((wt.current = new Date().getTime()),
                  (t = setTimeout(() => {
                    null == v.onAutoClose || v.onAutoClose.call(v, v), St()
                  }, ut.current))),
              () => clearTimeout(t)
            )
          }, [C, x, v, dt, Pt, St]),
            r.useEffect(() => {
              v.delete && (St(), null == v.onDismiss || v.onDismiss.call(v, v))
            }, [St, v.delete])
          const It =
            v.icon ||
            (null == H ? void 0 : H[dt]) ||
            ((t) => {
              switch (t) {
                case 'success':
                  return s
                case 'info':
                  return l
                case 'warning':
                  return u
                case 'error':
                  return c
                default:
                  return null
              }
            })(dt)
          var Bt, Tt
          return r.createElement(
            'li',
            {
              tabIndex: 0,
              ref: ct,
              className: w(
                M,
                gt,
                null == G ? void 0 : G.toast,
                null == v || null == (e = v.classNames) ? void 0 : e.toast,
                null == G ? void 0 : G.default,
                null == G ? void 0 : G[dt],
                null == v || null == (n = v.classNames) ? void 0 : n[dt],
              ),
              'data-sonner-toast': '',
              'data-rich-colors': null != (Bt = v.richColors) ? Bt : S,
              'data-styled': !Boolean(v.jsx || v.unstyled || A),
              'data-mounted': K,
              'data-promise': Boolean(v.promise),
              'data-swiped': nt,
              'data-removed': Z,
              'data-visible': ht,
              'data-y-position': kt,
              'data-x-position': Rt,
              'data-index': N,
              'data-front': ft,
              'data-swiping': $,
              'data-dismissible': pt,
              'data-type': dt,
              'data-invert': Ct,
              'data-swipe-out': tt,
              'data-swipe-direction': W,
              'data-expanded': Boolean(C || (j && K)),
              'data-testid': v.testId,
              style: {
                '--index': N,
                '--toasts-before': N,
                '--z-index': P.length - N,
                '--offset': `${Z ? ot : At.current}px`,
                '--initial-height': j ? 'auto' : `${at}px`,
                ...B,
                ...v.style,
              },
              onDragEnd: () => {
                X(!1), V(null), (Et.current = null)
              },
              onPointerDown: (t) => {
                2 !== t.button &&
                  !Ot &&
                  pt &&
                  ((lt.current = new Date()),
                  it(At.current),
                  t.target.setPointerCapture(t.pointerId),
                  'BUTTON' !== t.target.tagName &&
                    (X(!0), (Et.current = { x: t.clientX, y: t.clientY })))
              },
              onPointerUp: () => {
                var t, e, n
                if (tt || !pt) return
                Et.current = null
                const r = Number(
                    (null == (t = ct.current)
                      ? void 0
                      : t.style
                          .getPropertyValue('--swipe-amount-x')
                          .replace('px', '')) || 0,
                  ),
                  o = Number(
                    (null == (e = ct.current)
                      ? void 0
                      : e.style
                          .getPropertyValue('--swipe-amount-y')
                          .replace('px', '')) || 0,
                  ),
                  i =
                    new Date().getTime() -
                    (null == (n = lt.current) ? void 0 : n.getTime()),
                  a = 'x' === Q ? r : o,
                  s = Math.abs(a) / i
                if (Math.abs(a) >= 45 || s > 0.11)
                  return (
                    it(At.current),
                    null == v.onDismiss || v.onDismiss.call(v, v),
                    J(
                      'x' === Q
                        ? r > 0
                          ? 'right'
                          : 'left'
                        : o > 0
                          ? 'down'
                          : 'up',
                    ),
                    St(),
                    void et(!0)
                  )
                var u, l
                null == (u = ct.current) ||
                  u.style.setProperty('--swipe-amount-x', '0px'),
                  null == (l = ct.current) ||
                    l.style.setProperty('--swipe-amount-y', '0px'),
                  rt(!1),
                  X(!1),
                  V(null)
              },
              onPointerMove: (e) => {
                var n, r, o
                if (!Et.current || !pt) return
                if (
                  (null == (n = window.getSelection())
                    ? void 0
                    : n.toString().length) > 0
                )
                  return
                const i = e.clientY - Et.current.y,
                  a = e.clientX - Et.current.x
                var s
                const u =
                  null != (s = t.swipeDirections)
                    ? s
                    : (function (t) {
                        const [e, n] = t.split('-'),
                          r = []
                        return e && r.push(e), n && r.push(n), r
                      })(F)
                !Q &&
                  (Math.abs(a) > 1 || Math.abs(i) > 1) &&
                  V(Math.abs(a) > Math.abs(i) ? 'x' : 'y')
                let l = { x: 0, y: 0 }
                const c = (t) => 1 / (1.5 + Math.abs(t) / 20)
                if ('y' === Q) {
                  if (u.includes('top') || u.includes('bottom'))
                    if (
                      (u.includes('top') && i < 0) ||
                      (u.includes('bottom') && i > 0)
                    )
                      l.y = i
                    else {
                      const t = i * c(i)
                      l.y = Math.abs(t) < Math.abs(i) ? t : i
                    }
                } else if (
                  'x' === Q &&
                  (u.includes('left') || u.includes('right'))
                )
                  if (
                    (u.includes('left') && a < 0) ||
                    (u.includes('right') && a > 0)
                  )
                    l.x = a
                  else {
                    const t = a * c(a)
                    l.x = Math.abs(t) < Math.abs(a) ? t : a
                  }
                ;(Math.abs(l.x) > 0 || Math.abs(l.y) > 0) && rt(!0),
                  null == (r = ct.current) ||
                    r.style.setProperty('--swipe-amount-x', `${l.x}px`),
                  null == (o = ct.current) ||
                    o.style.setProperty('--swipe-amount-y', `${l.y}px`)
              },
            },
            bt && !v.jsx && 'loading' !== dt
              ? r.createElement(
                  'button',
                  {
                    'aria-label': z,
                    'data-disabled': Ot,
                    'data-close-button': !0,
                    onClick:
                      Ot || !pt
                        ? () => {}
                        : () => {
                            St(), null == v.onDismiss || v.onDismiss.call(v, v)
                          },
                    className: w(
                      null == G ? void 0 : G.closeButton,
                      null == v || null == (o = v.classNames)
                        ? void 0
                        : o.closeButton,
                    ),
                  },
                  null != (Tt = null == H ? void 0 : H.close) ? Tt : f,
                )
              : null,
            (dt || v.icon || v.promise) &&
              null !== v.icon &&
              (null !== (null == H ? void 0 : H[dt]) || v.icon)
              ? r.createElement(
                  'div',
                  {
                    'data-icon': '',
                    className: w(
                      null == G ? void 0 : G.icon,
                      null == v || null == (i = v.classNames) ? void 0 : i.icon,
                    ),
                  },
                  v.promise || ('loading' === v.type && !v.icon)
                    ? v.icon ||
                        (function () {
                          var t, e
                          return (null == H ? void 0 : H.loading)
                            ? r.createElement(
                                'div',
                                {
                                  className: w(
                                    null == G ? void 0 : G.loader,
                                    null == v || null == (e = v.classNames)
                                      ? void 0
                                      : e.loader,
                                    'sonner-loader',
                                  ),
                                  'data-visible': 'loading' === dt,
                                },
                                H.loading,
                              )
                            : r.createElement(a, {
                                className: w(
                                  null == G ? void 0 : G.loader,
                                  null == v || null == (t = v.classNames)
                                    ? void 0
                                    : t.loader,
                                ),
                                visible: 'loading' === dt,
                              })
                        })()
                    : null,
                  'loading' !== v.type ? It : null,
                )
              : null,
            r.createElement(
              'div',
              {
                'data-content': '',
                className: w(
                  null == G ? void 0 : G.content,
                  null == v || null == (h = v.classNames) ? void 0 : h.content,
                ),
              },
              r.createElement(
                'div',
                {
                  'data-title': '',
                  className: w(
                    null == G ? void 0 : G.title,
                    null == v || null == (d = v.classNames) ? void 0 : d.title,
                  ),
                },
                v.jsx
                  ? v.jsx
                  : 'function' == typeof v.title
                    ? v.title()
                    : v.title,
              ),
              v.description
                ? r.createElement(
                    'div',
                    {
                      'data-description': '',
                      className: w(
                        D,
                        mt,
                        null == G ? void 0 : G.description,
                        null == v || null == (p = v.classNames)
                          ? void 0
                          : p.description,
                      ),
                    },
                    'function' == typeof v.description
                      ? v.description()
                      : v.description,
                  )
                : null,
            ),
            r.isValidElement(v.cancel)
              ? v.cancel
              : v.cancel && y(v.cancel)
                ? r.createElement(
                    'button',
                    {
                      'data-button': !0,
                      'data-cancel': !0,
                      style: v.cancelButtonStyle || T,
                      onClick: (t) => {
                        y(v.cancel) &&
                          pt &&
                          (null == v.cancel.onClick ||
                            v.cancel.onClick.call(v.cancel, t),
                          St())
                      },
                      className: w(
                        null == G ? void 0 : G.cancelButton,
                        null == v || null == (g = v.classNames)
                          ? void 0
                          : g.cancelButton,
                      ),
                    },
                    v.cancel.label,
                  )
                : null,
            r.isValidElement(v.action)
              ? v.action
              : v.action && y(v.action)
                ? r.createElement(
                    'button',
                    {
                      'data-button': !0,
                      'data-action': !0,
                      style: v.actionButtonStyle || _,
                      onClick: (t) => {
                        y(v.action) &&
                          (null == v.action.onClick ||
                            v.action.onClick.call(v.action, t),
                          t.defaultPrevented || St())
                      },
                      className: w(
                        null == G ? void 0 : G.actionButton,
                        null == v || null == (m = v.classNames)
                          ? void 0
                          : m.actionButton,
                      ),
                    },
                    v.action.label,
                  )
                : null,
          )
        }
        function x() {
          if ('undefined' == typeof window) return 'ltr'
          if ('undefined' == typeof document) return 'ltr'
          const t = document.documentElement.getAttribute('dir')
          return 'auto' !== t && t
            ? t
            : window.getComputedStyle(document.documentElement).direction
        }
        function E(t, e) {
          const n = {}
          return (
            [t, e].forEach((t, e) => {
              const r = 1 === e,
                o = r ? '--mobile-offset' : '--offset',
                i = r ? '16px' : '24px'
              function a(t) {
                ;['top', 'right', 'bottom', 'left'].forEach((e) => {
                  n[`${o}-${e}`] = 'number' == typeof t ? `${t}px` : t
                })
              }
              'number' == typeof t || 'string' == typeof t
                ? a(t)
                : 'object' == typeof t
                  ? ['top', 'right', 'bottom', 'left'].forEach((e) => {
                      void 0 === t[e]
                        ? (n[`${o}-${e}`] = i)
                        : (n[`${o}-${e}`] =
                            'number' == typeof t[e] ? `${t[e]}px` : t[e])
                    })
                  : a(i)
            }),
            n
          )
        }
        const k = r.forwardRef(function (t, e) {
          const {
              id: n,
              invert: i,
              position: a = 'bottom-right',
              hotkey: s = ['altKey', 'KeyT'],
              expand: u,
              closeButton: l,
              className: c,
              offset: f,
              mobileOffset: h,
              theme: p = 'light',
              richColors: g,
              duration: m,
              style: y,
              visibleToasts: w = b,
              toastOptions: k,
              dir: R = x(),
              gap: N = v,
              icons: P,
              containerAriaLabel: C = 'Notifications',
            } = t,
            [O, S] = r.useState([]),
            I = r.useMemo(
              () =>
                n
                  ? O.filter((t) => t.toasterId === n)
                  : O.filter((t) => !t.toasterId),
              [O, n],
            ),
            B = r.useMemo(
              () =>
                Array.from(
                  new Set(
                    [a].concat(
                      I.filter((t) => t.position).map((t) => t.position),
                    ),
                  ),
                ),
              [I, a],
            ),
            [T, _] = r.useState([]),
            [M, D] = r.useState(!1),
            [L, F] = r.useState(!1),
            [U, j] = r.useState(
              'system' !== p
                ? p
                : 'undefined' != typeof window &&
                    window.matchMedia &&
                    window.matchMedia('(prefers-color-scheme: dark)').matches
                  ? 'dark'
                  : 'light',
            ),
            G = r.useRef(null),
            H = s.join('+').replace(/Key/g, '').replace(/Digit/g, ''),
            z = r.useRef(null),
            Q = r.useRef(!1),
            V = r.useCallback((t) => {
              S((e) => {
                var n
                return (
                  (null == (n = e.find((e) => e.id === t.id))
                    ? void 0
                    : n.delete) || d.dismiss(t.id),
                  e.filter(({ id: e }) => e !== t.id)
                )
              })
            }, [])
          return (
            r.useEffect(
              () =>
                d.subscribe((t) => {
                  t.dismiss
                    ? requestAnimationFrame(() => {
                        S((e) =>
                          e.map((e) =>
                            e.id === t.id ? { ...e, delete: !0 } : e,
                          ),
                        )
                      })
                    : setTimeout(() => {
                        o.flushSync(() => {
                          S((e) => {
                            const n = e.findIndex((e) => e.id === t.id)
                            return -1 !== n
                              ? [
                                  ...e.slice(0, n),
                                  { ...e[n], ...t },
                                  ...e.slice(n + 1),
                                ]
                              : [t, ...e]
                          })
                        })
                      })
                }),
              [O],
            ),
            r.useEffect(() => {
              if ('system' !== p) return void j(p)
              if (
                ('system' === p &&
                  (window.matchMedia &&
                  window.matchMedia('(prefers-color-scheme: dark)').matches
                    ? j('dark')
                    : j('light')),
                'undefined' == typeof window)
              )
                return
              const t = window.matchMedia('(prefers-color-scheme: dark)')
              try {
                t.addEventListener('change', ({ matches: t }) => {
                  j(t ? 'dark' : 'light')
                })
              } catch (e) {
                t.addListener(({ matches: t }) => {
                  try {
                    j(t ? 'dark' : 'light')
                  } catch (t) {
                    console.error(t)
                  }
                })
              }
            }, [p]),
            r.useEffect(() => {
              O.length <= 1 && D(!1)
            }, [O]),
            r.useEffect(() => {
              const t = (t) => {
                var e
                var n
                s.every((e) => t[e] || t.code === e) &&
                  (D(!0), null == (n = G.current) || n.focus())
                'Escape' !== t.code ||
                  (document.activeElement !== G.current &&
                    !(null == (e = G.current)
                      ? void 0
                      : e.contains(document.activeElement))) ||
                  D(!1)
              }
              return (
                document.addEventListener('keydown', t),
                () => document.removeEventListener('keydown', t)
              )
            }, [s]),
            r.useEffect(() => {
              if (G.current)
                return () => {
                  z.current &&
                    (z.current.focus({ preventScroll: !0 }),
                    (z.current = null),
                    (Q.current = !1))
                }
            }, [G.current]),
            r.createElement(
              'section',
              {
                ref: e,
                'aria-label': `${C} ${H}`,
                tabIndex: -1,
                'aria-live': 'polite',
                'aria-relevant': 'additions text',
                'aria-atomic': 'false',
                suppressHydrationWarning: !0,
              },
              B.map((e, n) => {
                var o
                const [a, s] = e.split('-')
                return I.length
                  ? r.createElement(
                      'ol',
                      {
                        key: e,
                        dir: 'auto' === R ? x() : R,
                        tabIndex: -1,
                        ref: G,
                        className: c,
                        'data-sonner-toaster': !0,
                        'data-sonner-theme': U,
                        'data-y-position': a,
                        'data-x-position': s,
                        style: {
                          '--front-toast-height': `${(null == (o = T[0]) ? void 0 : o.height) || 0}px`,
                          '--width': '356px',
                          '--gap': `${N}px`,
                          ...y,
                          ...E(f, h),
                        },
                        onBlur: (t) => {
                          Q.current &&
                            !t.currentTarget.contains(t.relatedTarget) &&
                            ((Q.current = !1),
                            z.current &&
                              (z.current.focus({ preventScroll: !0 }),
                              (z.current = null)))
                        },
                        onFocus: (t) => {
                          ;(t.target instanceof HTMLElement &&
                            'false' === t.target.dataset.dismissible) ||
                            Q.current ||
                            ((Q.current = !0), (z.current = t.relatedTarget))
                        },
                        onMouseEnter: () => D(!0),
                        onMouseMove: () => D(!0),
                        onMouseLeave: () => {
                          L || D(!1)
                        },
                        onDragEnd: () => D(!1),
                        onPointerDown: (t) => {
                          ;(t.target instanceof HTMLElement &&
                            'false' === t.target.dataset.dismissible) ||
                            F(!0)
                        },
                        onPointerUp: () => F(!1),
                      },
                      I.filter(
                        (t) => (!t.position && 0 === n) || t.position === e,
                      ).map((n, o) => {
                        var a, s
                        return r.createElement(A, {
                          key: n.id,
                          icons: P,
                          index: o,
                          toast: n,
                          defaultRichColors: g,
                          duration:
                            null != (a = null == k ? void 0 : k.duration)
                              ? a
                              : m,
                          className: null == k ? void 0 : k.className,
                          descriptionClassName:
                            null == k ? void 0 : k.descriptionClassName,
                          invert: i,
                          visibleToasts: w,
                          closeButton:
                            null != (s = null == k ? void 0 : k.closeButton)
                              ? s
                              : l,
                          interacting: L,
                          position: e,
                          style: null == k ? void 0 : k.style,
                          unstyled: null == k ? void 0 : k.unstyled,
                          classNames: null == k ? void 0 : k.classNames,
                          cancelButtonStyle:
                            null == k ? void 0 : k.cancelButtonStyle,
                          actionButtonStyle:
                            null == k ? void 0 : k.actionButtonStyle,
                          closeButtonAriaLabel:
                            null == k ? void 0 : k.closeButtonAriaLabel,
                          removeToast: V,
                          toasts: I.filter((t) => t.position == n.position),
                          heights: T.filter((t) => t.position == n.position),
                          setHeights: _,
                          expandByDefault: u,
                          gap: N,
                          expanded: M,
                          swipeDirections: t.swipeDirections,
                        })
                      }),
                    )
                  : null
              }),
            )
          )
        })
      },
      206: (t) => {
        'use strict'
        t.exports = ReactDOM
      },
      246: (t, e, n) => {
        'use strict'
        n.d(e, { V: () => l })
        var r = n(910),
          o = n(696)
        const i = {}
        function a(t, e) {
          let n = !1
          return (
            e < 0 && ((n = !0), (e *= -1)),
            new l(i, `${n ? '' : 'u'}int${e}`, t, { signed: n, width: e })
          )
        }
        function s(t, e) {
          return new l(i, `bytes${e || ''}`, t, { size: e })
        }
        const u = Symbol.for('_ethers_typed')
        class l {
          type
          value
          #r
          _typedSymbol
          constructor(t, e, n, a) {
            null == a && (a = null),
              (0, r.gk)(i, t, 'Typed'),
              (0, o.n)(this, { _typedSymbol: u, type: e, value: n }),
              (this.#r = a),
              this.format()
          }
          format() {
            if ('array' === this.type) throw new Error('')
            if ('dynamicArray' === this.type) throw new Error('')
            return 'tuple' === this.type
              ? `tuple(${this.value.map((t) => t.format()).join(',')})`
              : this.type
          }
          defaultValue() {
            return 0
          }
          minValue() {
            return 0
          }
          maxValue() {
            return 0
          }
          isBigInt() {
            return !!this.type.match(/^u?int[0-9]+$/)
          }
          isData() {
            return this.type.startsWith('bytes')
          }
          isString() {
            return 'string' === this.type
          }
          get tupleName() {
            if ('tuple' !== this.type) throw TypeError('not a tuple')
            return this.#r
          }
          get arrayLength() {
            if ('array' !== this.type) throw TypeError('not an array')
            return !0 === this.#r
              ? -1
              : !1 === this.#r
                ? this.value.length
                : null
          }
          static from(t, e) {
            return new l(i, t, e)
          }
          static uint8(t) {
            return a(t, 8)
          }
          static uint16(t) {
            return a(t, 16)
          }
          static uint24(t) {
            return a(t, 24)
          }
          static uint32(t) {
            return a(t, 32)
          }
          static uint40(t) {
            return a(t, 40)
          }
          static uint48(t) {
            return a(t, 48)
          }
          static uint56(t) {
            return a(t, 56)
          }
          static uint64(t) {
            return a(t, 64)
          }
          static uint72(t) {
            return a(t, 72)
          }
          static uint80(t) {
            return a(t, 80)
          }
          static uint88(t) {
            return a(t, 88)
          }
          static uint96(t) {
            return a(t, 96)
          }
          static uint104(t) {
            return a(t, 104)
          }
          static uint112(t) {
            return a(t, 112)
          }
          static uint120(t) {
            return a(t, 120)
          }
          static uint128(t) {
            return a(t, 128)
          }
          static uint136(t) {
            return a(t, 136)
          }
          static uint144(t) {
            return a(t, 144)
          }
          static uint152(t) {
            return a(t, 152)
          }
          static uint160(t) {
            return a(t, 160)
          }
          static uint168(t) {
            return a(t, 168)
          }
          static uint176(t) {
            return a(t, 176)
          }
          static uint184(t) {
            return a(t, 184)
          }
          static uint192(t) {
            return a(t, 192)
          }
          static uint200(t) {
            return a(t, 200)
          }
          static uint208(t) {
            return a(t, 208)
          }
          static uint216(t) {
            return a(t, 216)
          }
          static uint224(t) {
            return a(t, 224)
          }
          static uint232(t) {
            return a(t, 232)
          }
          static uint240(t) {
            return a(t, 240)
          }
          static uint248(t) {
            return a(t, 248)
          }
          static uint256(t) {
            return a(t, 256)
          }
          static uint(t) {
            return a(t, 256)
          }
          static int8(t) {
            return a(t, -8)
          }
          static int16(t) {
            return a(t, -16)
          }
          static int24(t) {
            return a(t, -24)
          }
          static int32(t) {
            return a(t, -32)
          }
          static int40(t) {
            return a(t, -40)
          }
          static int48(t) {
            return a(t, -48)
          }
          static int56(t) {
            return a(t, -56)
          }
          static int64(t) {
            return a(t, -64)
          }
          static int72(t) {
            return a(t, -72)
          }
          static int80(t) {
            return a(t, -80)
          }
          static int88(t) {
            return a(t, -88)
          }
          static int96(t) {
            return a(t, -96)
          }
          static int104(t) {
            return a(t, -104)
          }
          static int112(t) {
            return a(t, -112)
          }
          static int120(t) {
            return a(t, -120)
          }
          static int128(t) {
            return a(t, -128)
          }
          static int136(t) {
            return a(t, -136)
          }
          static int144(t) {
            return a(t, -144)
          }
          static int152(t) {
            return a(t, -152)
          }
          static int160(t) {
            return a(t, -160)
          }
          static int168(t) {
            return a(t, -168)
          }
          static int176(t) {
            return a(t, -176)
          }
          static int184(t) {
            return a(t, -184)
          }
          static int192(t) {
            return a(t, -192)
          }
          static int200(t) {
            return a(t, -200)
          }
          static int208(t) {
            return a(t, -208)
          }
          static int216(t) {
            return a(t, -216)
          }
          static int224(t) {
            return a(t, -224)
          }
          static int232(t) {
            return a(t, -232)
          }
          static int240(t) {
            return a(t, -240)
          }
          static int248(t) {
            return a(t, -248)
          }
          static int256(t) {
            return a(t, -256)
          }
          static int(t) {
            return a(t, -256)
          }
          static bytes1(t) {
            return s(t, 1)
          }
          static bytes2(t) {
            return s(t, 2)
          }
          static bytes3(t) {
            return s(t, 3)
          }
          static bytes4(t) {
            return s(t, 4)
          }
          static bytes5(t) {
            return s(t, 5)
          }
          static bytes6(t) {
            return s(t, 6)
          }
          static bytes7(t) {
            return s(t, 7)
          }
          static bytes8(t) {
            return s(t, 8)
          }
          static bytes9(t) {
            return s(t, 9)
          }
          static bytes10(t) {
            return s(t, 10)
          }
          static bytes11(t) {
            return s(t, 11)
          }
          static bytes12(t) {
            return s(t, 12)
          }
          static bytes13(t) {
            return s(t, 13)
          }
          static bytes14(t) {
            return s(t, 14)
          }
          static bytes15(t) {
            return s(t, 15)
          }
          static bytes16(t) {
            return s(t, 16)
          }
          static bytes17(t) {
            return s(t, 17)
          }
          static bytes18(t) {
            return s(t, 18)
          }
          static bytes19(t) {
            return s(t, 19)
          }
          static bytes20(t) {
            return s(t, 20)
          }
          static bytes21(t) {
            return s(t, 21)
          }
          static bytes22(t) {
            return s(t, 22)
          }
          static bytes23(t) {
            return s(t, 23)
          }
          static bytes24(t) {
            return s(t, 24)
          }
          static bytes25(t) {
            return s(t, 25)
          }
          static bytes26(t) {
            return s(t, 26)
          }
          static bytes27(t) {
            return s(t, 27)
          }
          static bytes28(t) {
            return s(t, 28)
          }
          static bytes29(t) {
            return s(t, 29)
          }
          static bytes30(t) {
            return s(t, 30)
          }
          static bytes31(t) {
            return s(t, 31)
          }
          static bytes32(t) {
            return s(t, 32)
          }
          static address(t) {
            return new l(i, 'address', t)
          }
          static bool(t) {
            return new l(i, 'bool', !!t)
          }
          static bytes(t) {
            return new l(i, 'bytes', t)
          }
          static string(t) {
            return new l(i, 'string', t)
          }
          static array(t, e) {
            throw new Error('not implemented yet')
          }
          static tuple(t, e) {
            throw new Error('not implemented yet')
          }
          static overrides(t) {
            return new l(i, 'overrides', Object.assign({}, t))
          }
          static isTyped(t) {
            return (
              t &&
              'object' == typeof t &&
              '_typedSymbol' in t &&
              t._typedSymbol === u
            )
          }
          static dereference(t, e) {
            if (l.isTyped(t)) {
              if (t.type !== e)
                throw new Error(`invalid type: expecetd ${e}, got ${t.type}`)
              return t.value
            }
            return t
          }
        }
      },
      300: (t, e, n) => {
        'use strict'
        n.d(e, { y: () => _ })
        var r = n(910),
          o = n(595),
          i = n(400),
          a = n(926),
          s = n(246)
        class u extends o.Ue {
          constructor(t) {
            super('address', 'address', t, !1)
          }
          defaultValue() {
            return '0x0000000000000000000000000000000000000000'
          }
          encode(t, e) {
            let n = s.V.dereference(e, 'string')
            try {
              n = (0, i.b)(n)
            } catch (t) {
              return this._throwError(t.message, e)
            }
            return t.writeValue(n)
          }
          decode(t) {
            return (0, i.b)((0, a.up)(t.readValue(), 20))
          }
        }
        var l = n(696)
        class c extends o.Ue {
          coder
          constructor(t) {
            super(t.name, t.type, '_', t.dynamic), (this.coder = t)
          }
          defaultValue() {
            return this.coder.defaultValue()
          }
          encode(t, e) {
            return this.coder.encode(t, e)
          }
          decode(t) {
            return this.coder.decode(t)
          }
        }
        function f(t, e, n) {
          let i = []
          if (Array.isArray(n)) i = n
          else if (n && 'object' == typeof n) {
            let t = {}
            i = e.map((e) => {
              const o = e.localName
              return (
                (0, r.vA)(
                  o,
                  'cannot encode object for signature with missing names',
                  'INVALID_ARGUMENT',
                  { argument: 'values', info: { coder: e }, value: n },
                ),
                (0, r.vA)(
                  !t[o],
                  'cannot encode object for signature with duplicate names',
                  'INVALID_ARGUMENT',
                  { argument: 'values', info: { coder: e }, value: n },
                ),
                (t[o] = !0),
                n[o]
              )
            })
          } else (0, r.MR)(!1, 'invalid tuple value', 'tuple', n)
          ;(0, r.MR)(
            e.length === i.length,
            'types/value length mismatch',
            'tuple',
            n,
          )
          let a = new o.AU(),
            s = new o.AU(),
            u = []
          e.forEach((t, e) => {
            let n = i[e]
            if (t.dynamic) {
              let e = s.length
              t.encode(s, n)
              let r = a.writeUpdatableValue()
              u.push((t) => {
                r(t + e)
              })
            } else t.encode(a, n)
          }),
            u.forEach((t) => {
              t(a.length)
            })
          let l = t.appendWriter(a)
          return (l += t.appendWriter(s)), l
        }
        function h(t, e) {
          let n = [],
            i = [],
            a = t.subReader(0)
          return (
            e.forEach((e) => {
              let o = null
              if (e.dynamic) {
                let n = t.readIndex(),
                  i = a.subReader(n)
                try {
                  o = e.decode(i)
                } catch (t) {
                  if ((0, r.bJ)(t, 'BUFFER_OVERRUN')) throw t
                  ;(o = t),
                    (o.baseType = e.name),
                    (o.name = e.localName),
                    (o.type = e.type)
                }
              } else
                try {
                  o = e.decode(t)
                } catch (t) {
                  if ((0, r.bJ)(t, 'BUFFER_OVERRUN')) throw t
                  ;(o = t),
                    (o.baseType = e.name),
                    (o.name = e.localName),
                    (o.type = e.type)
                }
              if (null == o) throw new Error('investigate')
              n.push(o), i.push(e.localName || null)
            }),
            o.Q7.fromItems(n, i)
          )
        }
        class d extends o.Ue {
          coder
          length
          constructor(t, e, n) {
            super(
              'array',
              t.type + '[' + (e >= 0 ? e : '') + ']',
              n,
              -1 === e || t.dynamic,
            ),
              (0, l.n)(this, { coder: t, length: e })
          }
          defaultValue() {
            const t = this.coder.defaultValue(),
              e = []
            for (let n = 0; n < this.length; n++) e.push(t)
            return e
          }
          encode(t, e) {
            const n = s.V.dereference(e, 'array')
            Array.isArray(n) || this._throwError('expected array value', n)
            let o = this.length
            ;-1 === o && ((o = n.length), t.writeValue(n.length)),
              (0, r.dd)(
                n.length,
                o,
                'coder array' + (this.localName ? ' ' + this.localName : ''),
              )
            let i = []
            for (let t = 0; t < n.length; t++) i.push(this.coder)
            return f(t, i, n)
          }
          decode(t) {
            let e = this.length
            ;-1 === e &&
              ((e = t.readIndex()),
              (0, r.vA)(
                e * o.Yx <= t.dataLength,
                'insufficient data length',
                'BUFFER_OVERRUN',
                { buffer: t.bytes, offset: e * o.Yx, length: t.dataLength },
              ))
            let n = []
            for (let t = 0; t < e; t++) n.push(new c(this.coder))
            return h(t, n)
          }
        }
        class p extends o.Ue {
          constructor(t) {
            super('bool', 'bool', t, !1)
          }
          defaultValue() {
            return !1
          }
          encode(t, e) {
            const n = s.V.dereference(e, 'bool')
            return t.writeValue(n ? 1 : 0)
          }
          decode(t) {
            return !!t.readValue()
          }
        }
        var g = n(537)
        class m extends o.Ue {
          constructor(t, e) {
            super(t, t, e, !0)
          }
          defaultValue() {
            return '0x'
          }
          encode(t, e) {
            e = (0, g.Lm)(e)
            let n = t.writeValue(e.length)
            return (n += t.writeBytes(e)), n
          }
          decode(t) {
            return t.readBytes(t.readIndex(), !0)
          }
        }
        class y extends m {
          constructor(t) {
            super('bytes', t)
          }
          decode(t) {
            return (0, g.c$)(super.decode(t))
          }
        }
        class b extends o.Ue {
          size
          constructor(t, e) {
            let n = 'bytes' + String(t)
            super(n, n, e, !1), (0, l.n)(this, { size: t }, { size: 'number' })
          }
          defaultValue() {
            return '0x0000000000000000000000000000000000000000000000000000000000000000'.substring(
              0,
              2 + 2 * this.size,
            )
          }
          encode(t, e) {
            let n = (0, g.Lm)(s.V.dereference(e, this.type))
            return (
              n.length !== this.size &&
                this._throwError('incorrect data length', e),
              t.writeBytes(n)
            )
          }
          decode(t) {
            return (0, g.c$)(t.readBytes(this.size))
          }
        }
        const v = new Uint8Array([])
        class w extends o.Ue {
          constructor(t) {
            super('null', '', t, !1)
          }
          defaultValue() {
            return null
          }
          encode(t, e) {
            return null != e && this._throwError('not null', e), t.writeBytes(v)
          }
          decode(t) {
            return t.readBytes(0), null
          }
        }
        const A = BigInt(0),
          x = BigInt(1),
          E = BigInt(
            '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
          )
        class k extends o.Ue {
          size
          signed
          constructor(t, e, n) {
            const r = (e ? 'int' : 'uint') + 8 * t
            super(r, r, n, !1),
              (0, l.n)(
                this,
                { size: t, signed: e },
                { size: 'number', signed: 'boolean' },
              )
          }
          defaultValue() {
            return 0
          }
          encode(t, e) {
            let n = (0, a.Ab)(s.V.dereference(e, this.type)),
              r = (0, a.dK)(E, 8 * o.Yx)
            if (this.signed) {
              let t = (0, a.dK)(r, 8 * this.size - 1)
              ;(n > t || n < -(t + x)) &&
                this._throwError('value out-of-bounds', e),
                (n = (0, a.JJ)(n, 8 * o.Yx))
            } else
              (n < A || n > (0, a.dK)(r, 8 * this.size)) &&
                this._throwError('value out-of-bounds', e)
            return t.writeValue(n)
          }
          decode(t) {
            let e = (0, a.dK)(t.readValue(), 8 * this.size)
            return this.signed && (e = (0, a.ST)(e, 8 * this.size)), e
          }
        }
        var R = n(770)
        class N extends m {
          constructor(t) {
            super('string', t)
          }
          defaultValue() {
            return ''
          }
          encode(t, e) {
            return super.encode(t, (0, R.YW)(s.V.dereference(e, 'string')))
          }
          decode(t) {
            return (0, R._v)(super.decode(t))
          }
        }
        class P extends o.Ue {
          coders
          constructor(t, e) {
            let n = !1
            const r = []
            t.forEach((t) => {
              t.dynamic && (n = !0), r.push(t.type)
            })
            super('tuple', 'tuple(' + r.join(',') + ')', e, n),
              (0, l.n)(this, { coders: Object.freeze(t.slice()) })
          }
          defaultValue() {
            const t = []
            this.coders.forEach((e) => {
              t.push(e.defaultValue())
            })
            const e = this.coders.reduce((t, e) => {
              const n = e.localName
              return n && (t[n] || (t[n] = 0), t[n]++), t
            }, {})
            return (
              this.coders.forEach((n, r) => {
                let o = n.localName
                o &&
                  1 === e[o] &&
                  ('length' === o && (o = '_length'),
                  null == t[o] && (t[o] = t[r]))
              }),
              Object.freeze(t)
            )
          }
          encode(t, e) {
            const n = s.V.dereference(e, 'tuple')
            return f(t, this.coders, n)
          }
          decode(t) {
            return h(t, this.coders)
          }
        }
        var C = n(471)
        const O = new Map()
        O.set(0, 'GENERIC_PANIC'),
          O.set(1, 'ASSERT_FALSE'),
          O.set(17, 'OVERFLOW'),
          O.set(18, 'DIVIDE_BY_ZERO'),
          O.set(33, 'ENUM_RANGE_ERROR'),
          O.set(34, 'BAD_STORAGE_DATA'),
          O.set(49, 'STACK_UNDERFLOW'),
          O.set(50, 'ARRAY_RANGE_ERROR'),
          O.set(65, 'OUT_OF_MEMORY'),
          O.set(81, 'UNINITIALIZED_FUNCTION_CALL')
        const S = new RegExp(/^bytes([0-9]*)$/),
          I = new RegExp(/^(u?int)([0-9]*)$/)
        let B = null,
          T = 1024
        class _ {
          #o(t) {
            if (t.isArray())
              return new d(this.#o(t.arrayChildren), t.arrayLength, t.name)
            if (t.isTuple())
              return new P(
                t.components.map((t) => this.#o(t)),
                t.name,
              )
            switch (t.baseType) {
              case 'address':
                return new u(t.name)
              case 'bool':
                return new p(t.name)
              case 'string':
                return new N(t.name)
              case 'bytes':
                return new y(t.name)
              case '':
                return new w(t.name)
            }
            let e = t.type.match(I)
            if (e) {
              let n = parseInt(e[2] || '256')
              return (
                (0, r.MR)(
                  0 !== n && n <= 256 && n % 8 == 0,
                  'invalid ' + e[1] + ' bit length',
                  'param',
                  t,
                ),
                new k(n / 8, 'int' === e[1], t.name)
              )
            }
            if (((e = t.type.match(S)), e)) {
              let n = parseInt(e[1])
              return (
                (0, r.MR)(
                  0 !== n && n <= 32,
                  'invalid bytes length',
                  'param',
                  t,
                ),
                new b(n, t.name)
              )
            }
            ;(0, r.MR)(!1, 'invalid type', 'type', t.type)
          }
          getDefaultValue(t) {
            const e = t.map((t) => this.#o(C.aX.from(t)))
            return new P(e, '_').defaultValue()
          }
          encode(t, e) {
            ;(0, r.dd)(e.length, t.length, 'types/values length mismatch')
            const n = t.map((t) => this.#o(C.aX.from(t))),
              i = new P(n, '_'),
              a = new o.AU()
            return i.encode(a, e), a.data
          }
          decode(t, e, n) {
            const r = t.map((t) => this.#o(C.aX.from(t)))
            return new P(r, '_').decode(new o.mP(e, n, T))
          }
          static _setDefaultMaxInflation(t) {
            ;(0, r.MR)(
              'number' == typeof t && Number.isInteger(t),
              'invalid defaultMaxInflation factor',
              'value',
              t,
            ),
              (T = t)
          }
          static defaultAbiCoder() {
            return null == B && (B = new _()), B
          }
          static getBuiltinCallException(t, e, n) {
            return (function (t, e, n, o) {
              let a = 'missing revert data',
                s = null,
                u = null
              if (n) {
                a = 'execution reverted'
                const t = (0, g.q5)(n)
                if (((n = (0, g.c$)(n)), 0 === t.length))
                  (a += ' (no data present; likely require(false) occurred'),
                    (s = 'require(false)')
                else if (t.length % 32 != 4)
                  a += ' (could not decode reason; invalid data length)'
                else if ('0x08c379a0' === (0, g.c$)(t.slice(0, 4)))
                  try {
                    ;(s = o.decode(['string'], t.slice(4))[0]),
                      (u = {
                        signature: 'Error(string)',
                        name: 'Error',
                        args: [s],
                      }),
                      (a += `: ${JSON.stringify(s)}`)
                  } catch (t) {
                    a += ' (could not decode reason; invalid string data)'
                  }
                else if ('0x4e487b71' === (0, g.c$)(t.slice(0, 4)))
                  try {
                    const e = Number(o.decode(['uint256'], t.slice(4))[0])
                    ;(u = {
                      signature: 'Panic(uint256)',
                      name: 'Panic',
                      args: [e],
                    }),
                      (s = `Panic due to ${O.get(e) || 'UNKNOWN'}(${e})`),
                      (a += `: ${s}`)
                  } catch (t) {
                    a += ' (could not decode panic code)'
                  }
                else a += ' (unknown custom error)'
              }
              const l = {
                to: e.to ? (0, i.b)(e.to) : null,
                data: e.data || '0x',
              }
              return (
                e.from && (l.from = (0, i.b)(e.from)),
                (0, r.xz)(a, 'CALL_EXCEPTION', {
                  action: t,
                  data: n,
                  reason: s,
                  transaction: l,
                  invocation: null,
                  revert: u,
                })
              )
            })(t, e, n, _.defaultAbiCoder())
          }
        }
      },
      369: function (t, e, n) {
        t.exports = (function (t, e) {
          'use strict'
          function n(t) {
            var e = Object.create(null)
            return (
              t &&
                Object.keys(t).forEach(function (n) {
                  if ('default' !== n) {
                    var r = Object.getOwnPropertyDescriptor(t, n)
                    Object.defineProperty(
                      e,
                      n,
                      r.get
                        ? r
                        : {
                            enumerable: !0,
                            get: function () {
                              return t[n]
                            },
                          },
                    )
                  }
                }),
              (e.default = t),
              Object.freeze(e)
            )
          }
          var r = n(t),
            o = {
              React: void 0,
              options: void 0,
              origCreateElement: void 0,
              origCreateFactory: void 0,
              origCloneElement: void 0,
              componentsMap: new WeakMap(),
              ownerDataMap: new WeakMap(),
              hooksInfoForCurrentRender: new WeakMap(),
              ownerBeforeElementCreation: null,
            }
          function i(t, e) {
            ;(null == e || e > t.length) && (e = t.length)
            for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n]
            return r
          }
          function a(t) {
            if (Array.isArray(t)) return t
          }
          function s(t) {
            if (Array.isArray(t)) return i(t)
          }
          function u(t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              )
            return t
          }
          function l(t, e, n) {
            return (
              (e = m(e)),
              R(
                t,
                b() ? Reflect.construct(e, n, m(t).constructor) : e.apply(t, n),
              )
            )
          }
          function c(t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function')
          }
          function f(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(t, B(r.key), r)
            }
          }
          function h(t, e, n) {
            return (
              f(t.prototype, e),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              t
            )
          }
          function d(t, e) {
            var n =
              ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
              t['@@iterator']
            if (!n) {
              if (Array.isArray(t) || (n = _(t)) || e) {
                n && (t = n)
                var r = 0,
                  o = function () {}
                return {
                  s: o,
                  n: function () {
                    return r >= t.length
                      ? { done: !0 }
                      : { done: !1, value: t[r++] }
                  },
                  e: function (t) {
                    throw t
                  },
                  f: o,
                }
              }
              throw new TypeError(
                'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
              )
            }
            var i,
              a = !0,
              s = !1
            return {
              s: function () {
                n = n.call(t)
              },
              n: function () {
                var t = n.next()
                return (a = t.done), t
              },
              e: function (t) {
                ;(s = !0), (i = t)
              },
              f: function () {
                try {
                  a || null == n.return || n.return()
                } finally {
                  if (s) throw i
                }
              },
            }
          }
          function p(t, e, n) {
            return (
              (e = B(e)) in t
                ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[e] = n),
              t
            )
          }
          function g() {
            return (
              (g =
                'undefined' != typeof Reflect && Reflect.get
                  ? Reflect.get.bind()
                  : function (t, e, n) {
                      var r = C(t, e)
                      if (r) {
                        var o = Object.getOwnPropertyDescriptor(r, e)
                        return o.get
                          ? o.get.call(arguments.length < 3 ? t : n)
                          : o.value
                      }
                    }),
              g.apply(null, arguments)
            )
          }
          function m(t) {
            return (
              (m = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                  }),
              m(t)
            )
          }
          function y(t, e) {
            if ('function' != typeof e && null !== e)
              throw new TypeError(
                'Super expression must either be null or a function',
              )
            ;(t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              e && N(t, e)
          }
          function b() {
            try {
              var t = !Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              )
            } catch (t) {}
            return (b = function () {
              return !!t
            })()
          }
          function v(t) {
            if (
              ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t['@@iterator']
            )
              return Array.from(t)
          }
          function w(t, e) {
            var n =
              null == t
                ? null
                : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
                  t['@@iterator']
            if (null != n) {
              var r,
                o,
                i,
                a,
                s = [],
                u = !0,
                l = !1
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return
                  u = !1
                } else
                  for (
                    ;
                    !(u = (r = i.call(n)).done) &&
                    (s.push(r.value), s.length !== e);
                    u = !0
                  );
              } catch (t) {
                ;(l = !0), (o = t)
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return
                } finally {
                  if (l) throw o
                }
              }
              return s
            }
          }
          function A() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            )
          }
          function x() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            )
          }
          function E(t, e) {
            var n = Object.keys(t)
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(t)
              e &&
                (r = r.filter(function (e) {
                  return Object.getOwnPropertyDescriptor(t, e).enumerable
                })),
                n.push.apply(n, r)
            }
            return n
          }
          function k(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {}
              e % 2
                ? E(Object(n), !0).forEach(function (e) {
                    p(t, e, n[e])
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(n),
                    )
                  : E(Object(n)).forEach(function (e) {
                      Object.defineProperty(
                        t,
                        e,
                        Object.getOwnPropertyDescriptor(n, e),
                      )
                    })
            }
            return t
          }
          function R(t, e) {
            if (e && ('object' == typeof e || 'function' == typeof e)) return e
            if (void 0 !== e)
              throw new TypeError(
                'Derived constructors may only return object or undefined',
              )
            return u(t)
          }
          function N(t, e) {
            return (
              (N = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                    return (t.__proto__ = e), t
                  }),
              N(t, e)
            )
          }
          function P(t, e) {
            return a(t) || w(t, e) || _(t, e) || A()
          }
          function C(t, e) {
            for (; !{}.hasOwnProperty.call(t, e) && null !== (t = m(t)); );
            return t
          }
          function O(t, e, n, r) {
            var o = g(m(1 & r ? t.prototype : t), e, n)
            return 2 & r && 'function' == typeof o
              ? function (t) {
                  return o.apply(n, t)
                }
              : o
          }
          function S(t) {
            return s(t) || v(t) || _(t) || x()
          }
          function I(t, e) {
            if ('object' != typeof t || !t) return t
            var n = t[Symbol.toPrimitive]
            if (void 0 !== n) {
              var r = n.call(t, e || 'default')
              if ('object' != typeof r) return r
              throw new TypeError(
                '@@toPrimitive must return a primitive value.',
              )
            }
            return ('string' === e ? String : Number)(t)
          }
          function B(t) {
            var e = I(t, 'string')
            return 'symbol' == typeof e ? e : e + ''
          }
          function T(t) {
            return (
              (T =
                'function' == typeof Symbol &&
                'symbol' == typeof Symbol.iterator
                  ? function (t) {
                      return typeof t
                    }
                  : function (t) {
                      return t &&
                        'function' == typeof Symbol &&
                        t.constructor === Symbol &&
                        t !== Symbol.prototype
                        ? 'symbol'
                        : typeof t
                    }),
              T(t)
            )
          }
          function _(t, e) {
            if (t) {
              if ('string' == typeof t) return i(t, e)
              var n = {}.toString.call(t).slice(8, -1)
              return (
                'Object' === n && t.constructor && (n = t.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(t)
                  : 'Arguments' === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? i(t, e)
                    : void 0
              )
            }
          }
          var M = {
              different: 'different',
              deepEquals: 'deepEquals',
              date: 'date',
              regex: 'regex',
              reactElement: 'reactElement',
              function: 'function',
              same: 'same',
            },
            D = p(
              p(
                p(
                  p(
                    p(
                      p(
                        p({}, M.different, 'different objects'),
                        M.deepEquals,
                        'different objects that are equal by value',
                      ),
                      M.date,
                      'different date objects with the same value',
                    ),
                    M.regex,
                    'different regular expressions with the same value',
                  ),
                  M.reactElement,
                  'different React elements (remember that the <jsx/> syntax always produces a *NEW* immutable React element so a component that receives <jsx/> as props always re-renders)',
                ),
                M.function,
                'different functions with the same name',
              ),
              M.same,
              'same objects by ref (===)',
            ),
            L = 'function' == typeof Symbol && Symbol.for,
            F = L ? Symbol.for('react.memo') : 60115,
            U = L ? Symbol.for('react.forward_ref') : 60112,
            j = 8,
            G = 'undefined' != typeof Element,
            H = 'function' == typeof Symbol && Symbol.for,
            z = 60103,
            Q = H && Symbol.for('react.element'),
            V = H && Symbol.for('react.transitional.element'),
            W = function (t) {
              return [].concat(S(H ? [V, Q] : []), [z]).includes(t.$$typeof)
            }
          function J(t, e, n, r, o) {
            return (
              n.push({
                diffType: o,
                pathString: r,
                prevValue: t,
                nextValue: e,
              }),
              o !== M.different
            )
          }
          function K(t, e) {
            return !!Object.getOwnPropertyDescriptor(t, e).get
          }
          var q = new WeakMap()
          function Z(t, n, r) {
            var o =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : '',
              i = (arguments.length > 4 ? arguments[4] : void 0).detailed
            if (t === n) return i && J(t, n, r, o, M.same), !0
            if (!t || !n) return J(t, n, r, o, M.different)
            if (e.isArray(t) && e.isArray(n)) {
              var a = t.length
              if (a !== n.length) return J(S(t), S(n), r, o, M.different)
              for (var s = [], u = 0, l = a; l--; l > 0)
                Z(t[l], n[l], s, ''.concat(o, '[').concat(l, ']'), {
                  detailed: i,
                }) && u++
              return (
                (i || u !== a) && r.push.apply(r, s),
                J(S(t), S(n), r, o, u === a ? M.deepEquals : M.different)
              )
            }
            if (e.isSet(t) && e.isSet(n)) {
              if (t.size !== n.size)
                return J(new Set(t), new Set(n), r, o, M.different)
              var c,
                f = d(t)
              try {
                for (f.s(); !(c = f.n()).done; ) {
                  var h = c.value
                  if (!n.has(h))
                    return J(new Set(t), new Set(n), r, o, M.different)
                }
              } catch (t) {
                f.e(t)
              } finally {
                f.f()
              }
              return J(new Set(t), new Set(n), r, o, M.deepEquals)
            }
            if (e.isDate(t) && e.isDate(n))
              return t.getTime() === n.getTime()
                ? J(new Date(t), new Date(n), r, o, M.date)
                : J(new Date(t), new Date(n), r, o, M.different)
            if (e.isRegExp(t) && e.isRegExp(n))
              return t.toString() === n.toString()
                ? J(t, n, r, o, M.regex)
                : J(t, n, r, o, M.different)
            if (G && t instanceof Element && n instanceof Element)
              return J(t, n, r, o, M.different)
            if (W(t) && W(n)) {
              if (t.type !== n.type) return J(t, n, r, o, M.different)
              var p = Z(t.props, n.props, [], ''.concat(o, '.props'), {
                detailed: i,
              })
              return J(t, n, r, o, p ? M.reactElement : M.different)
            }
            if (e.isFunction(t) && e.isFunction(n)) {
              if (t.name !== n.name) return J(t, n, r, o, M.different)
              var g = q.get(t),
                m = q.get(n)
              if (g && m) {
                var y = Z(
                  g.deps,
                  m.deps,
                  r,
                  ''.concat(o, ':parent-hook-').concat(g.hookName, '-deps'),
                  { detailed: i },
                )
                return J(t, n, r, o, y ? M.function : M.different)
              }
              return J(t, n, r, o, M.function)
            }
            if (
              'object' === T(t) &&
              'object' === T(n) &&
              Object.getPrototypeOf(t) === Object.getPrototypeOf(n)
            ) {
              var b = Object.getOwnPropertyNames(t),
                v = Object.getOwnPropertyNames(n),
                w = e.uniq([].concat(S(b), S(v))),
                A = e.isPlainObject(t) ? k({}, t) : t,
                x = e.isPlainObject(n) ? k({}, n) : n
              if (w.length !== b.length || w.length !== v.length)
                return J(A, x, r, o, M.different)
              for (
                var E = w.filter(function (n) {
                    return !(('stack' === n && e.isError(t)) || K(t, n))
                  }),
                  R = E.length,
                  N = R;
                N--;
                N > 0
              )
                if (!e.has(n, E[N])) return J(A, x, r, o, M.different)
              for (var P = [], C = 0, O = R; O--; O > 0) {
                var I = E[O]
                Z(t[I], n[I], P, ''.concat(o, '.').concat(I), {
                  detailed: i,
                }) && C++
              }
              return (
                (i || C !== R) && r.push.apply(r, P),
                J(A, x, r, o, C === R ? M.deepEquals : M.different)
              )
            }
            return J(t, n, r, o, M.different)
          }
          function Y(t, e, n) {
            var r = (
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : {}
              ).detailed,
              o = void 0 !== r && r
            try {
              var i = []
              return Z(t, e, i, n, { detailed: o }), i
            } catch (t) {
              if (
                (t.message && t.message.match(/stack|recursion/i)) ||
                -2146828260 === t.number
              )
                return (
                  console.warn(
                    "Warning: why-did-you-render couldn't handle circular references in props.",
                    t.name,
                    t.message,
                  ),
                  !1
                )
              throw t
            }
          }
          function $(t, n, r) {
            var o = r.pathString,
              i = r.consoleLog,
              a = Y(t, n, o, { detailed: !0 }),
              s =
                Math.max.apply(
                  Math,
                  S(
                    a.map(function (t) {
                      return t.pathString.length
                    }),
                  ),
                ) + 2
            Object.entries(
              e.groupBy(e.sortBy(a, 'pathString'), 'diffType'),
            ).forEach(function (t) {
              var e = P(t, 2),
                n = e[0],
                r = e[1]
              i(
                '%c'.concat(D[n], ':'),
                'text-decoration: underline; color: blue;',
              ),
                r.forEach(function (t) {
                  i(''.concat(t.pathString, ':').padEnd(s, ' '), t.prevValue)
                })
            })
          }
          var X = 'http://bit.ly/wdyr02',
            tt = 'http://bit.ly/wdyr3',
            et = !1
          function nt(t, e) {
            return !(
              et ||
              (!o.options.logOnDifferentValues &&
                (!e.whyDidYouRender ||
                  !e.whyDidYouRender.logOnDifferentValues) &&
                ((t.propsDifferences &&
                  t.propsDifferences.some(function (t) {
                    return t.diffType === M.different
                  })) ||
                  (t.stateDifferences &&
                    t.stateDifferences.some(function (t) {
                      return t.diffType === M.different
                    })) ||
                  (t.hookDifferences &&
                    t.hookDifferences.some(function (t) {
                      return t.diffType === M.different
                    }))))
            )
          }
          function rt(t) {
            var e = t.Component,
              n = t.displayName,
              r = t.hookName,
              i = t.prefixMessage,
              a = t.diffObjType,
              s = t.differences,
              u = t.values
            s && s.length > 0
              ? (o.options.consoleLog(
                  p({}, n, e),
                  ''.concat(i, ' of ').concat(a, ' changes:'),
                ),
                s.forEach(function (t) {
                  var e = t.pathString,
                    n = t.diffType,
                    i = t.prevValue,
                    s = t.nextValue
                  function u() {
                    $(i, s, { pathString: e, consoleLog: o.options.consoleLog })
                  }
                  o.options.consoleGroup(
                    '%c'
                      .concat(
                        'hook' === a
                          ? '[hook '.concat(r, ' result]')
                          : ''.concat(a, '.'),
                        '%c',
                      )
                      .concat(e, '%c'),
                    'background-color: '
                      .concat(o.options.textBackgroundColor, ';color:')
                      .concat(o.options.diffNameColor, ';'),
                    'background-color: '
                      .concat(o.options.textBackgroundColor, ';color:')
                      .concat(o.options.diffPathColor, ';'),
                    'background-color: ${wdyrStore.options.textBackgroundColor};color:default;',
                  ),
                    o.options.consoleLog(
                      ''
                        .concat(D[n], '. (more info at ')
                        .concat(r ? tt : X, ')'),
                    ),
                    o.options.consoleLog(
                      p({}, 'prev '.concat(e), i),
                      '!==',
                      p({}, 'next '.concat(e), s),
                    ),
                    n === M.deepEquals &&
                      o.options.consoleLog({
                        'For detailed diff, right click the following fn, save as global, and run: ':
                          u,
                      }),
                    o.options.consoleGroupEnd()
                }))
              : s &&
                (o.options.consoleLog(
                  p({}, n, e),
                  ''
                    .concat(i, ' the ')
                    .concat(
                      a,
                      ' object itself changed but its values are all equal.',
                    ),
                  'props' === a
                    ? 'This could have been avoided by making the component pure, or by preventing its father from re-rendering.'
                    : 'This usually means this component called setState when no changes in its state actually occurred.',
                  'More info at '.concat(X),
                ),
                o.options.consoleLog(
                  'prev '.concat(a, ':'),
                  u.prev,
                  ' !== ',
                  u.next,
                  ':next '.concat(a),
                ))
          }
          function ot(t) {
            var e = t.Component,
              n = t.displayName,
              r = t.hookName,
              i = t.prevOwner,
              a = t.nextOwner,
              s = t.prevProps,
              u = t.prevState,
              l = t.prevHookResult,
              c = t.nextProps,
              f = t.nextState,
              h = t.nextHookResult,
              d = t.reason
            if (nt(d, e, o.options)) {
              o.options.consoleGroup(
                '%c'.concat(n),
                'background-color: '
                  .concat(o.options.textBackgroundColor, ';color: ')
                  .concat(o.options.titleColor, ';'),
              )
              var g = 'Re-rendered because'
              if (
                (d.propsDifferences &&
                  (rt({
                    Component: e,
                    displayName: n,
                    prefixMessage: g,
                    diffObjType: 'props',
                    differences: d.propsDifferences,
                    values: { prev: s, next: c },
                  }),
                  (g = 'And because')),
                d.stateDifferences &&
                  rt({
                    Component: e,
                    displayName: n,
                    prefixMessage: g,
                    diffObjType: 'state',
                    differences: d.stateDifferences,
                    values: { prev: u, next: f },
                  }),
                d.hookDifferences &&
                  rt({
                    Component: e,
                    displayName: n,
                    prefixMessage: g,
                    diffObjType: 'hook',
                    differences: d.hookDifferences,
                    values: { prev: l, next: h },
                    hookName: r,
                  }),
                d.propsDifferences && d.ownerDifferences)
              ) {
                var m = o.ownerDataMap.get(i),
                  y = o.ownerDataMap.get(a)
                if (m && y) {
                  o.options.consoleGroup('Rendered by '.concat(y.displayName))
                  var b = 'Re-rendered because'
                  d.ownerDifferences.propsDifferences &&
                    (rt({
                      Component: y.Component,
                      displayName: y.displayName,
                      prefixMessage: b,
                      diffObjType: 'props',
                      differences: d.ownerDifferences.propsDifferences,
                      values: { prev: m.props, next: y.props },
                    }),
                    (b = 'And because')),
                    d.ownerDifferences.stateDifferences &&
                      rt({
                        Component: y.Component,
                        displayName: y.displayName,
                        prefixMessage: b,
                        diffObjType: 'state',
                        differences: d.ownerDifferences.stateDifferences,
                        values: { prev: m.state, next: y.state },
                      }),
                    d.ownerDifferences.hookDifferences &&
                      d.ownerDifferences.hookDifferences.forEach(
                        function (t, e) {
                          var n = t.hookName,
                            r = t.differences
                          return rt({
                            Component: y.Component,
                            displayName: y.displayName,
                            prefixMessage: b,
                            diffObjType: 'hook',
                            differences: r,
                            values: {
                              prev: m.hooksInfo[e].result,
                              next: y.hooksInfo[e].result,
                            },
                            hookName: n,
                          })
                        },
                      ),
                    o.options.consoleGroupEnd()
                }
              }
              d.propsDifferences ||
                d.stateDifferences ||
                d.hookDifferences ||
                o.options.consoleLog(
                  p({}, n, e),
                  'Re-rendered although props and state objects are the same.',
                  'This usually means there was a call to this.forceUpdate() inside the component.',
                  'more info at '.concat(X),
                ),
                o.options.consoleGroupEnd()
            }
          }
          function it(t) {
            return ot
          }
          var at = function () {}
          function st() {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              e = console.group,
              n = console.groupEnd
            return (
              t.collapseGroups
                ? (e = console.groupCollapsed)
                : t.onlyLogs && ((e = console.log), (n = at)),
              k(
                {
                  include: null,
                  exclude: null,
                  notifier:
                    t.notifier ||
                    it('hotReloadBufferMs' in t ? t.hotReloadBufferMs : 500),
                  onlyLogs: !1,
                  consoleLog: console.log,
                  consoleGroup: e,
                  consoleGroupEnd: n,
                  logOnDifferentValues: !1,
                  logOwnerReasons: !0,
                  trackHooks: !0,
                  titleColor: '#058',
                  diffNameColor: 'blue',
                  diffPathColor: 'red',
                  textBackgroundColor: 'white',
                  trackExtraHooks: [],
                  trackAllPureComponents: !1,
                },
                t,
              )
            )
          }
          function ut(t) {
            return (
              t.displayName ||
              t.name ||
              (t.type && ut(t.type)) ||
              (t.render && ut(t.render)) ||
              (e.isString(t) ? t : 'Unknown')
            )
          }
          function lt(t) {
            return (
              t.defaultProps ||
              (t.type && lt(t.type)) ||
              (t.render && lt(t.render)) ||
              void 0
            )
          }
          var ct = {}
          function ft(t, n) {
            var r = (
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {}
            ).shallow
            if (t === n) return !1
            if (void 0 !== r && !r) return Y(t, n)
            var o = t || ct,
              i = n || ct,
              a = Object.keys(k(k({}, o), i))
            return e.reduce(
              a,
              function (t, e) {
                var n = Y(o[e], i[e], e)
                return n && (t = [].concat(S(t), S(n))), t
              },
              [],
            )
          }
          function ht(t, e) {
            if (!t || !e) return !1
            var n = o.ownerDataMap.get(t),
              r = o.ownerDataMap.get(e)
            if (!n || !r) return !1
            try {
              var i = (
                n.hooksInfo.length === 2 * r.hooksInfo.length
                  ? n.hooksInfo.slice(n.hooksInfo.length / 2)
                  : n.hooksInfo
              ).map(function (t, e) {
                return {
                  hookName: t.hookName,
                  differences: ft(t.result, r.hooksInfo[e].result, {
                    shallow: !1,
                  }),
                }
              })
              return {
                propsDifferences: ft(n.props, r.props),
                stateDifferences: ft(n.state, r.state),
                hookDifferences: i.length > 0 && i,
              }
            } catch (n) {
              return (
                o.options.consoleLog(
                  'whyDidYouRender error in getOwnerDifferences. Please file a bug at https://github.com/welldone-software/why-did-you-render/issues.',
                  {
                    errorInfo: {
                      error: n,
                      prevOwner: t,
                      nextOwner: e,
                      options: o.options,
                    },
                  },
                ),
                !1
              )
            }
          }
          function dt(t, e, n, r, o, i, a, s) {
            return {
              propsDifferences: ft(e, i),
              stateDifferences: ft(n, a),
              hookDifferences: ft(r, s, { shallow: !1 }),
              ownerDifferences: ht(t, o),
            }
          }
          function pt(t) {
            var e = t.Component,
              n = t.displayName,
              r = t.hookName,
              i = t.prevOwner,
              a = t.nextOwner,
              s = t.prevProps,
              u = t.prevState,
              l = t.prevHookResult,
              c = t.nextProps,
              f = t.nextState,
              h = t.nextHookResult
            return {
              Component: e,
              displayName: n,
              hookName: r,
              prevOwner: i,
              prevProps: s,
              prevState: u,
              prevHookResult: l,
              nextOwner: a,
              nextProps: c,
              nextState: f,
              nextHookResult: h,
              reason: dt(i, s, u, l, a, c, f, h),
              ownerDataMap: o.ownerDataMap,
            }
          }
          function gt(t) {
            for (
              var e = t && (t._reactInternalFiber || t._reactInternals);
              e;
            ) {
              if (e.mode & j) return !0
              e = e.return
            }
            return !1
          }
          function mt(t) {
            return t.prototype && !!t.prototype.isReactComponent
          }
          function yt(t) {
            return t.$$typeof === F
          }
          function bt(t) {
            return t.$$typeof === U
          }
          function vt(t) {
            return (
              o.options.include &&
              o.options.include.length > 0 &&
              o.options.include.some(function (e) {
                return e.test(t)
              })
            )
          }
          function wt(t) {
            return (
              o.options.exclude &&
              o.options.exclude.length > 0 &&
              o.options.exclude.some(function (e) {
                return e.test(t)
              })
            )
          }
          function At(t, e) {
            var n = e.isHookChange,
              r = ut(t)
            return !(
              wt(r) ||
              !1 === t.whyDidYouRender ||
              (n && t.whyDidYouRender && !1 === t.whyDidYouRender.trackHooks) ||
              !(
                t.whyDidYouRender ||
                (o.options.trackAllPureComponents &&
                  ((t && t.prototype instanceof o.React.PureComponent) ||
                    yt(t))) ||
                vt(r)
              )
            )
          }
          function xt(t, n) {
            var r = n.displayName,
              i = n.defaultProps,
              a = (function (e) {
                function n(e, r) {
                  var o
                  c(this, n),
                    ((o = l(this, n, [e, r]))._WDYR = { renderNumber: 0 })
                  var i = O(n, 'render', o, 1) || o.render
                  return (
                    i !== t.prototype.render &&
                      (o.render = function () {
                        return n.prototype.render.apply(o), i()
                      }),
                    o
                  )
                }
                return (
                  y(n, e),
                  h(n, [
                    {
                      key: 'render',
                      value: function () {
                        if (
                          (this._WDYR.renderNumber++,
                          'isStrictMode' in this._WDYR ||
                            (this._WDYR.isStrictMode = gt(this)),
                          !this._WDYR.isStrictMode ||
                            this._WDYR.renderNumber % 2 != 1)
                        ) {
                          if (this._WDYR.prevProps) {
                            var e = pt({
                              Component: t,
                              displayName: r,
                              prevOwner: this._WDYR.prevOwner,
                              prevProps: this._WDYR.prevProps,
                              prevState: this._WDYR.prevState,
                              nextOwner: o.ownerBeforeElementCreation,
                              nextProps: this.props,
                              nextState: this.state,
                            })
                            o.options.notifier(e)
                          }
                          ;(this._WDYR.prevOwner =
                            o.ownerBeforeElementCreation),
                            (this._WDYR.prevProps = this.props),
                            (this._WDYR.prevState = this.state)
                        }
                        return O(n, 'render', this, 1)
                          ? O(n, 'render', this, 3)([])
                          : null
                      },
                    },
                  ])
                )
              })(t)
            try {
              a.displayName = r
            } catch (t) {}
            return (a.defaultProps = i), e.defaults(a, t), a
          }
          var Et = function (t) {
            return function (e) {
              return o.React.createElement(t, e)
            }
          }
          function kt(t, n) {
            var r = n.isPure,
              i = n.displayName,
              a = n.defaultProps,
              s = 'string' == typeof t ? Et(t) : t
            function u(t, e) {
              var n = o.React.useRef(),
                a = n.current
              n.current = t
              var u = o.React.useRef(),
                l = u.current,
                c = o.ownerBeforeElementCreation
              if (((u.current = c), a)) {
                var f = pt({
                  Component: s,
                  displayName: i,
                  prevOwner: l,
                  nextOwner: c,
                  prevProps: a,
                  nextProps: t,
                })
                !f.reason.propsDifferences ||
                  (r && 0 === f.reason.propsDifferences.length) ||
                  o.options.notifier(f)
              }
              for (
                var h = arguments.length,
                  d = new Array(h > 2 ? h - 2 : 0),
                  p = 2;
                p < h;
                p++
              )
                d[p - 2] = arguments[p]
              return s.apply(void 0, [t, e].concat(d))
            }
            try {
              u.displayName = i
            } catch (t) {}
            return (
              (u.defaultProps = a),
              (u.ComponentForHooksTracking = s),
              e.defaults(u, s),
              u
            )
          }
          function Rt(t, n) {
            var r = n.displayName,
              i = n.defaultProps,
              a = t.type,
              s = mt(a),
              u = bt(a),
              l = yt(a),
              c = u ? a.render : a,
              f = s
                ? xt(c, { displayName: r, defaultProps: i })
                : l
                  ? Rt(c, { displayName: r, defaultProps: i })
                  : kt(c, { displayName: r, isPure: !0 })
            try {
              f.displayName = ut(c)
            } catch (t) {}
            ;(f.ComponentForHooksTracking = t), e.defaults(f, c)
            var h = o.React.memo(u ? o.React.forwardRef(f) : f, t.compare)
            try {
              h.displayName = r
            } catch (t) {}
            return (h.defaultProps = i), e.defaults(h, t), h
          }
          function Nt(t, n) {
            var r = n.displayName,
              i = n.defaultProps,
              a = t.render,
              s = yt(a),
              u = s ? a.type : a,
              l = kt(u, { isPure: s, displayName: r })
            ;(l.displayName = ut(u)),
              (l.ComponentForHooksTracking = u),
              e.defaults(l, u)
            var c = o.React.forwardRef(s ? o.React.memo(l, a.compare) : l)
            try {
              c.displayName = r
            } catch (t) {}
            return (c.defaultProps = i), e.defaults(c, t), c
          }
          function Pt() {
            var t =
                o.React
                  .__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
              e = null == t ? void 0 : t.A
            return null == e ? void 0 : e.getOwner()
          }
          var Ct = Symbol('initial-hook-value')
          function Ot(t, n, r) {
            var i = n.path,
              a = i ? e.get(r, i) : r,
              s = o.React.useRef(Ct),
              u = s.current
            s.current = a
            var l = Pt()
            if (!l) return r
            o.hooksInfoForCurrentRender.has(l) ||
              o.hooksInfoForCurrentRender.set(l, []),
              o.hooksInfoForCurrentRender
                .get(l)
                .push({ hookName: t, result: a })
            var c = l.type.ComponentForHooksTracking || l.type,
              f = ut(c)
            if (At(c, { isHookChange: !0 }) && u !== Ct) {
              var h = pt({
                Component: c,
                displayName: f,
                hookName: t,
                prevHookResult: u,
                nextHookResult: a,
              })
              h.reason.hookDifferences && o.options.notifier(h)
            }
            return r
          }
          function St(t, e) {
            var n = e.displayName,
              r = e.defaultProps
            return yt(t)
              ? Rt(t, { displayName: n, defaultProps: r })
              : bt(t)
                ? Nt(t, { displayName: n, defaultProps: r })
                : mt(t)
                  ? xt(t, { displayName: n, defaultProps: r })
                  : kt(t, { displayName: n, defaultProps: r, isPure: !1 })
          }
          function It(t, e) {
            var n = e.displayName,
              r = e.defaultProps
            if (o.componentsMap.has(t)) return o.componentsMap.get(t)
            var i = St(t, { displayName: n, defaultProps: r })
            return o.componentsMap.set(t, i), i
          }
          function Bt(t) {
            return (
              !!t &&
              (yt(t)
                ? Bt(t.type)
                : bt(t)
                  ? Bt(t.render)
                  : 'function' == typeof t || void 0)
            )
          }
          var Tt = {
            useState: { path: '0' },
            useReducer: { path: '0' },
            useContext: void 0,
            useSyncExternalStore: void 0,
            useMemo: { dependenciesPath: '1', dontReport: !0 },
            useCallback: { dependenciesPath: '1', dontReport: !0 },
          }
          function _t(t) {
            var e = Pt()
            if (e) {
              var n = e.type.ComponentForHooksTracking || e.type,
                r = ut(n),
                i = {}
              o.options.getAdditionalOwnerData &&
                (i = o.options.getAdditionalOwnerData(t)),
                o.ownerDataMap.set(e, {
                  Component: n,
                  displayName: r,
                  props: e.pendingProps,
                  state: e.stateNode ? e.stateNode.state : null,
                  hooksInfo: o.hooksInfoForCurrentRender.get(e) || [],
                  additionalOwnerData: i,
                }),
                o.hooksInfoForCurrentRender.delete(e)
            }
          }
          function Mt() {
            var t = !!o.React.useState
            if (o.options.trackHooks && t) {
              var n = Object.entries(Tt).map(function (t) {
                var e = P(t, 2),
                  n = e[0],
                  r = e[1]
                return [o.React, n, r]
              })
              ;[]
                .concat(S(n), S(o.options.trackExtraHooks))
                .forEach(function (t) {
                  var n = P(t, 3),
                    r = n[0],
                    o = n[1],
                    i = n[2],
                    a = void 0 === i ? {} : i,
                    s = r[o],
                    u = function () {
                      for (
                        var t = arguments.length, n = new Array(t), r = 0;
                        r < t;
                        r++
                      )
                        n[r] = arguments[r]
                      var i = s.call.apply(s, [this].concat(n)),
                        u = a.dependenciesPath,
                        l = !a.dontReport
                      return (
                        u &&
                          e.isFunction(i) &&
                          q.set(i, { hookName: o, deps: e.get(n, u) }),
                        l && Ot(o, a, i),
                        i
                      )
                    }
                  Object.defineProperty(u, 'name', {
                    value: o + 'WDYR',
                    writable: !1,
                  }),
                    Object.assign(u, { originalHook: s }),
                    (r[o] = u)
                })
            }
          }
          function Dt(t) {
            return Bt(t) && At(t, { isHookChange: !1 })
              ? It(t, {
                  displayName:
                    (t && t.whyDidYouRender && t.whyDidYouRender.customName) ||
                    ut(t),
                  defaultProps: lt(t),
                })
              : null
          }
          function Lt(t, e) {
            if (!t.__IS_WDYR__)
              return (
                (t.__IS_WDYR__ = !0),
                Object.assign(o, {
                  React: t,
                  options: st(e),
                  origCreateElement: t.createElement,
                  origCreateFactory: t.createFactory,
                  origCloneElement: t.cloneElement,
                  componentsMap: new WeakMap(),
                }),
                (t.createElement = function (e) {
                  for (
                    var n = Dt(e),
                      r = arguments.length,
                      i = new Array(r > 1 ? r - 1 : 0),
                      a = 1;
                    a < r;
                    a++
                  )
                    i[a - 1] = arguments[a]
                  if (n)
                    try {
                      o.ownerBeforeElementCreation = Pt()
                      var s = o.origCreateElement.apply(t, [n].concat(i))
                      return o.options.logOwnerReasons && _t(s), s
                    } catch (t) {
                      o.options.consoleLog(
                        'whyDidYouRender error in createElement. Please file a bug at https://github.com/welldone-software/why-did-you-render/issues.',
                        {
                          errorInfo: {
                            error: t,
                            componentNameOrComponent: e,
                            rest: i,
                            options: o.options,
                          },
                        },
                      )
                    }
                  return o.origCreateElement.apply(t, [e].concat(i))
                }),
                Object.assign(t.createElement, o.origCreateElement),
                (t.createFactory = function (e) {
                  var n = t.createElement.bind(null, e)
                  return (n.type = e), n
                }),
                Object.assign(t.createFactory, o.origCreateFactory),
                (t.cloneElement = function () {
                  o.ownerBeforeElementCreation = Pt()
                  for (
                    var e = arguments.length, n = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    n[r] = arguments[r]
                  var i = o.origCloneElement.apply(t, n)
                  return o.options.logOwnerReasons && _t(i), i
                }),
                Object.assign(t.cloneElement, o.origCloneElement),
                Mt(),
                (t.__REVERT_WHY_DID_YOU_RENDER__ = function () {
                  Object.assign(t, {
                    createElement: o.origCreateElement,
                    createFactory: o.origCreateFactory,
                    cloneElement: o.origCloneElement,
                  }),
                    (o.componentsMap = null),
                    []
                      .concat(
                        S(
                          Object.keys(Tt).map(function (e) {
                            return [t, e]
                          }),
                        ),
                        S(o.options.trackExtraHooks),
                      )
                      .forEach(function (t) {
                        var e = P(t, 2),
                          n = e[0],
                          r = e[1]
                        n[r].originalHook && (n[r] = n[r].originalHook)
                      }),
                    delete t.__REVERT_WHY_DID_YOU_RENDER__,
                    delete t.__IS_WDYR__
                }),
                t
              )
          }
          return (
            (Lt.defaultNotifier = ot),
            (Lt.wdyrStore = o),
            (Lt.storeOwnerData = _t),
            (Lt.getWDYRType = Dt),
            (Lt.getCurrentOwner = Pt),
            Object.assign(Lt, r),
            Lt
          )
        })(n(594), n(935))
      },
      400: (t, e, n) => {
        'use strict'
        n.d(e, { b: () => d })
        var r = n(644),
          o = n(537),
          i = n(910)
        const a = BigInt(0),
          s = BigInt(36)
        function u(t) {
          const e = (t = t.toLowerCase()).substring(2).split(''),
            n = new Uint8Array(40)
          for (let t = 0; t < 40; t++) n[t] = e[t].charCodeAt(0)
          const i = (0, o.q5)((0, r.S)(n))
          for (let t = 0; t < 40; t += 2)
            i[t >> 1] >> 4 >= 8 && (e[t] = e[t].toUpperCase()),
              (15 & i[t >> 1]) >= 8 && (e[t + 1] = e[t + 1].toUpperCase())
          return '0x' + e.join('')
        }
        const l = {}
        for (let t = 0; t < 10; t++) l[String(t)] = String(t)
        for (let t = 0; t < 26; t++)
          l[String.fromCharCode(65 + t)] = String(10 + t)
        const c = 15
        function f(t) {
          let e = (t =
            (t = t.toUpperCase()).substring(4) + t.substring(0, 2) + '00')
            .split('')
            .map((t) => l[t])
            .join('')
          for (; e.length >= c; ) {
            let t = e.substring(0, c)
            e = (parseInt(t, 10) % 97) + e.substring(t.length)
          }
          let n = String(98 - (parseInt(e, 10) % 97))
          for (; n.length < 2; ) n = '0' + n
          return n
        }
        const h = (function () {
          const t = {}
          for (let e = 0; e < 36; e++) {
            t['0123456789abcdefghijklmnopqrstuvwxyz'[e]] = BigInt(e)
          }
          return t
        })()
        function d(t) {
          if (
            ((0, i.MR)('string' == typeof t, 'invalid address', 'address', t),
            t.match(/^(0x)?[0-9a-fA-F]{40}$/))
          ) {
            t.startsWith('0x') || (t = '0x' + t)
            const e = u(t)
            return (
              (0, i.MR)(
                !t.match(/([A-F].*[a-f])|([a-f].*[A-F])/) || e === t,
                'bad address checksum',
                'address',
                t,
              ),
              e
            )
          }
          if (t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
            ;(0, i.MR)(
              t.substring(2, 4) === f(t),
              'bad icap checksum',
              'address',
              t,
            )
            let e = (function (t) {
              t = t.toLowerCase()
              let e = a
              for (let n = 0; n < t.length; n++) e = e * s + h[t[n]]
              return e
            })(t.substring(4)).toString(16)
            for (; e.length < 40; ) e = '0' + e
            return u('0x' + e)
          }
          ;(0, i.MR)(!1, 'invalid address', 'address', t)
        }
      },
      443: (t, e, n) => {
        'use strict'
        n.d(e, { $C: () => i, tG: () => s })
        var r = n(910),
          o = n(400)
        function i(t) {
          return t && 'function' == typeof t.getAddress
        }
        async function a(t, e) {
          const n = await e
          return (
            (null != n && '0x0000000000000000000000000000000000000000' !== n) ||
              ((0, r.vA)(
                'string' != typeof t,
                'unconfigured name',
                'UNCONFIGURED_NAME',
                { value: t },
              ),
              (0, r.MR)(
                !1,
                'invalid AddressLike value; did not resolve to a value address',
                'target',
                t,
              )),
            (0, o.b)(n)
          )
        }
        function s(t, e) {
          return 'string' == typeof t
            ? t.match(/^0x[0-9a-f]{40}$/i)
              ? (0, o.b)(t)
              : ((0, r.vA)(
                  null != e,
                  'ENS resolution requires a provider',
                  'UNSUPPORTED_OPERATION',
                  { operation: 'resolveName' },
                ),
                a(t, e.resolveName(t)))
            : i(t)
              ? a(t, t.getAddress())
              : t && 'function' == typeof t.then
                ? a(t, t)
                : void (0, r.MR)(
                    !1,
                    'unsupported addressable value',
                    'target',
                    t,
                  )
        }
      },
      462: (t, e, n) => {
        'use strict'
        var r = n(594),
          o = Symbol.for('react.element'),
          i = Symbol.for('react.fragment'),
          a = Object.prototype.hasOwnProperty,
          s =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          u = { key: !0, ref: !0, __self: !0, __source: !0 }
        function l(t, e, n) {
          var r,
            i = {},
            l = null,
            c = null
          for (r in (void 0 !== n && (l = '' + n),
          void 0 !== e.key && (l = '' + e.key),
          void 0 !== e.ref && (c = e.ref),
          e))
            a.call(e, r) && !u.hasOwnProperty(r) && (i[r] = e[r])
          if (t && t.defaultProps)
            for (r in (e = t.defaultProps)) void 0 === i[r] && (i[r] = e[r])
          return {
            $$typeof: o,
            type: t,
            key: l,
            ref: c,
            props: i,
            _owner: s.current,
          }
        }
        ;(e.Fragment = i), (e.jsx = l), (e.jsxs = l)
      },
      471: (t, e, n) => {
        'use strict'
        n.d(e, {
          FK: () => z,
          Pw: () => K,
          Zp: () => J,
          aX: () => H,
          bp: () => W,
          hc: () => Z,
        })
        var r = n(910),
          o = n(926),
          i = n(696),
          a = n(679)
        function s(t) {
          const e = new Set()
          return t.forEach((t) => e.add(t)), Object.freeze(e)
        }
        const u = s('external public payable override'.split(' ')),
          l =
            'constant external internal payable private public pure view override',
          c = s(l.split(' ')),
          f = 'constructor error event fallback function receive struct',
          h = s(f.split(' ')),
          d = 'calldata memory storage payable indexed',
          p = s(d.split(' ')),
          g = s([f, d, 'tuple returns', l].join(' ').split(' ')),
          m = {
            '(': 'OPEN_PAREN',
            ')': 'CLOSE_PAREN',
            '[': 'OPEN_BRACKET',
            ']': 'CLOSE_BRACKET',
            ',': 'COMMA',
            '@': 'AT',
          },
          y = new RegExp('^(\\s*)'),
          b = new RegExp('^([0-9]+)'),
          v = new RegExp('^([a-zA-Z$_][a-zA-Z0-9$_]*)'),
          w = new RegExp('^([a-zA-Z$_][a-zA-Z0-9$_]*)$'),
          A = new RegExp('^(address|bool|bytes([0-9]*)|string|u?int([0-9]*))$')
        class x {
          #i
          #a
          get offset() {
            return this.#i
          }
          get length() {
            return this.#a.length - this.#i
          }
          constructor(t) {
            ;(this.#i = 0), (this.#a = t.slice())
          }
          clone() {
            return new x(this.#a)
          }
          reset() {
            this.#i = 0
          }
          #s(t = 0, e = 0) {
            return new x(
              this.#a
                .slice(t, e)
                .map((e) =>
                  Object.freeze(
                    Object.assign({}, e, {
                      match: e.match - t,
                      linkBack: e.linkBack - t,
                      linkNext: e.linkNext - t,
                    }),
                  ),
                ),
            )
          }
          popKeyword(t) {
            const e = this.peek()
            if ('KEYWORD' !== e.type || !t.has(e.text))
              throw new Error(`expected keyword ${e.text}`)
            return this.pop().text
          }
          popType(t) {
            if (this.peek().type !== t) {
              const e = this.peek()
              throw new Error(
                `expected ${t}; got ${e.type} ${JSON.stringify(e.text)}`,
              )
            }
            return this.pop().text
          }
          popParen() {
            const t = this.peek()
            if ('OPEN_PAREN' !== t.type) throw new Error('bad start')
            const e = this.#s(this.#i + 1, t.match + 1)
            return (this.#i = t.match + 1), e
          }
          popParams() {
            const t = this.peek()
            if ('OPEN_PAREN' !== t.type) throw new Error('bad start')
            const e = []
            for (; this.#i < t.match - 1; ) {
              const t = this.peek().linkNext
              e.push(this.#s(this.#i + 1, t)), (this.#i = t)
            }
            return (this.#i = t.match + 1), e
          }
          peek() {
            if (this.#i >= this.#a.length) throw new Error('out-of-bounds')
            return this.#a[this.#i]
          }
          peekKeyword(t) {
            const e = this.peekType('KEYWORD')
            return null != e && t.has(e) ? e : null
          }
          peekType(t) {
            if (0 === this.length) return null
            const e = this.peek()
            return e.type === t ? e.text : null
          }
          pop() {
            const t = this.peek()
            return this.#i++, t
          }
          toString() {
            const t = []
            for (let e = this.#i; e < this.#a.length; e++) {
              const n = this.#a[e]
              t.push(`${n.type}:${n.text}`)
            }
            return `<TokenString ${t.join(' ')}>`
          }
        }
        function E(t) {
          const e = [],
            n = (e) => {
              const n = a < t.length ? JSON.stringify(t[a]) : '$EOI'
              throw new Error(`invalid token ${n} at ${a}: ${e}`)
            }
          let r = [],
            i = [],
            a = 0
          for (; a < t.length; ) {
            let s = t.substring(a),
              u = s.match(y)
            u && ((a += u[1].length), (s = t.substring(a)))
            const l = {
              depth: r.length,
              linkBack: -1,
              linkNext: -1,
              match: -1,
              type: '',
              text: '',
              offset: a,
              value: -1,
            }
            e.push(l)
            let c = m[s[0]] || ''
            if (c) {
              if (((l.type = c), (l.text = s[0]), a++, 'OPEN_PAREN' === c))
                r.push(e.length - 1), i.push(e.length - 1)
              else if ('CLOSE_PAREN' == c)
                0 === r.length && n('no matching open bracket'),
                  (l.match = r.pop()),
                  (e[l.match].match = e.length - 1),
                  l.depth--,
                  (l.linkBack = i.pop()),
                  (e[l.linkBack].linkNext = e.length - 1)
              else if ('COMMA' === c)
                (l.linkBack = i.pop()),
                  (e[l.linkBack].linkNext = e.length - 1),
                  i.push(e.length - 1)
              else if ('OPEN_BRACKET' === c) l.type = 'BRACKET'
              else if ('CLOSE_BRACKET' === c) {
                let t = e.pop().text
                if (e.length > 0 && 'NUMBER' === e[e.length - 1].type) {
                  const n = e.pop().text
                  ;(t = n + t), (e[e.length - 1].value = (0, o.WZ)(n))
                }
                if (0 === e.length || 'BRACKET' !== e[e.length - 1].type)
                  throw new Error('missing opening bracket')
                e[e.length - 1].text += t
              }
            } else if (((u = s.match(v)), u)) {
              if (((l.text = u[1]), (a += l.text.length), g.has(l.text))) {
                l.type = 'KEYWORD'
                continue
              }
              if (l.text.match(A)) {
                l.type = 'TYPE'
                continue
              }
              l.type = 'ID'
            } else {
              if (((u = s.match(b)), !u))
                throw new Error(
                  `unexpected token ${JSON.stringify(s[0])} at position ${a}`,
                )
              ;(l.text = u[1]), (l.type = 'NUMBER'), (a += l.text.length)
            }
          }
          return new x(e.map((t) => Object.freeze(t)))
        }
        function k(t, e) {
          let n = []
          for (const r in e.keys()) t.has(r) && n.push(r)
          if (n.length > 1)
            throw new Error(`conflicting types: ${n.join(', ')}`)
        }
        function R(t, e) {
          if (e.peekKeyword(h)) {
            const n = e.pop().text
            if (n !== t) throw new Error(`expected ${t}, got ${n}`)
          }
          return e.popType('ID')
        }
        function N(t, e) {
          const n = new Set()
          for (;;) {
            const r = t.peekType('KEYWORD')
            if (null == r || (e && !e.has(r))) break
            if ((t.pop(), n.has(r)))
              throw new Error(`duplicate keywords: ${JSON.stringify(r)}`)
            n.add(r)
          }
          return Object.freeze(n)
        }
        function P(t) {
          let e = N(t, c)
          return (
            k(e, s('constant payable nonpayable'.split(' '))),
            k(e, s('pure view payable nonpayable'.split(' '))),
            e.has('view')
              ? 'view'
              : e.has('pure')
                ? 'pure'
                : e.has('payable')
                  ? 'payable'
                  : e.has('nonpayable')
                    ? 'nonpayable'
                    : e.has('constant')
                      ? 'view'
                      : 'nonpayable'
          )
        }
        function C(t, e) {
          return t.popParams().map((t) => H.from(t, e))
        }
        function O(t) {
          if (t.peekType('AT')) {
            if ((t.pop(), t.peekType('NUMBER'))) return (0, o.Ab)(t.pop().text)
            throw new Error('invalid gas')
          }
          return null
        }
        function S(t) {
          if (t.length)
            throw new Error(
              `unexpected tokens at offset ${t.offset}: ${t.toString()}`,
            )
        }
        const I = new RegExp(/^(.*)\[([0-9]*)\]$/)
        function B(t) {
          const e = t.match(A)
          if (((0, r.MR)(e, 'invalid type', 'type', t), 'uint' === t))
            return 'uint256'
          if ('int' === t) return 'int256'
          if (e[2]) {
            const n = parseInt(e[2])
            ;(0, r.MR)(0 !== n && n <= 32, 'invalid bytes length', 'type', t)
          } else if (e[3]) {
            const n = parseInt(e[3])
            ;(0, r.MR)(
              0 !== n && n <= 256 && n % 8 == 0,
              'invalid numeric width',
              'type',
              t,
            )
          }
          return t
        }
        const T = {},
          _ = Symbol.for('_ethers_internal'),
          M = '_ParamTypeInternal',
          D = '_ErrorInternal',
          L = '_EventInternal',
          F = '_ConstructorInternal',
          U = '_FallbackInternal',
          j = '_FunctionInternal',
          G = '_StructInternal'
        class H {
          name
          type
          baseType
          indexed
          components
          arrayLength
          arrayChildren
          constructor(t, e, n, o, a, s, u, l) {
            if (
              ((0, r.gk)(t, T, 'ParamType'),
              Object.defineProperty(this, _, { value: M }),
              s && (s = Object.freeze(s.slice())),
              'array' === o)
            ) {
              if (null == u || null == l) throw new Error('')
            } else if (null != u || null != l) throw new Error('')
            if ('tuple' === o) {
              if (null == s) throw new Error('')
            } else if (null != s) throw new Error('')
            ;(0, i.n)(this, {
              name: e,
              type: n,
              baseType: o,
              indexed: a,
              components: s,
              arrayLength: u,
              arrayChildren: l,
            })
          }
          format(t) {
            if ((null == t && (t = 'sighash'), 'json' === t)) {
              const e = this.name || ''
              if (this.isArray()) {
                const t = JSON.parse(this.arrayChildren.format('json'))
                return (
                  (t.name = e),
                  (t.type += `[${this.arrayLength < 0 ? '' : String(this.arrayLength)}]`),
                  JSON.stringify(t)
                )
              }
              const n = {
                type: 'tuple' === this.baseType ? 'tuple' : this.type,
                name: e,
              }
              return (
                'boolean' == typeof this.indexed && (n.indexed = this.indexed),
                this.isTuple() &&
                  (n.components = this.components.map((e) =>
                    JSON.parse(e.format(t)),
                  )),
                JSON.stringify(n)
              )
            }
            let e = ''
            return (
              this.isArray()
                ? ((e += this.arrayChildren.format(t)),
                  (e += `[${this.arrayLength < 0 ? '' : String(this.arrayLength)}]`))
                : this.isTuple()
                  ? (e +=
                      '(' +
                      this.components
                        .map((e) => e.format(t))
                        .join('full' === t ? ', ' : ',') +
                      ')')
                  : (e += this.type),
              'sighash' !== t &&
                (!0 === this.indexed && (e += ' indexed'),
                'full' === t && this.name && (e += ' ' + this.name)),
              e
            )
          }
          isArray() {
            return 'array' === this.baseType
          }
          isTuple() {
            return 'tuple' === this.baseType
          }
          isIndexable() {
            return null != this.indexed
          }
          walk(t, e) {
            if (this.isArray()) {
              if (!Array.isArray(t)) throw new Error('invalid array value')
              if (-1 !== this.arrayLength && t.length !== this.arrayLength)
                throw new Error('array is wrong length')
              const n = this
              return t.map((t) => n.arrayChildren.walk(t, e))
            }
            if (this.isTuple()) {
              if (!Array.isArray(t)) throw new Error('invalid tuple value')
              if (t.length !== this.components.length)
                throw new Error('array is wrong length')
              const n = this
              return t.map((t, r) => n.components[r].walk(t, e))
            }
            return e(this.type, t)
          }
          #u(t, e, n, r) {
            if (this.isArray()) {
              if (!Array.isArray(e)) throw new Error('invalid array value')
              if (-1 !== this.arrayLength && e.length !== this.arrayLength)
                throw new Error('array is wrong length')
              const o = this.arrayChildren,
                i = e.slice()
              return (
                i.forEach((e, r) => {
                  o.#u(t, e, n, (t) => {
                    i[r] = t
                  })
                }),
                void r(i)
              )
            }
            if (this.isTuple()) {
              const o = this.components
              let i
              if (Array.isArray(e)) i = e.slice()
              else {
                if (null == e || 'object' != typeof e)
                  throw new Error('invalid tuple value')
                i = o.map((t) => {
                  if (!t.name)
                    throw new Error(
                      'cannot use object value with unnamed components',
                    )
                  if (!(t.name in e))
                    throw new Error(`missing value for component ${t.name}`)
                  return e[t.name]
                })
              }
              if (i.length !== this.components.length)
                throw new Error('array is wrong length')
              return (
                i.forEach((e, r) => {
                  o[r].#u(t, e, n, (t) => {
                    i[r] = t
                  })
                }),
                void r(i)
              )
            }
            const o = n(this.type, e)
            o.then
              ? t.push(
                  (async function () {
                    r(await o)
                  })(),
                )
              : r(o)
          }
          async walkAsync(t, e) {
            const n = [],
              r = [t]
            return (
              this.#u(n, t, e, (t) => {
                r[0] = t
              }),
              n.length && (await Promise.all(n)),
              r[0]
            )
          }
          static from(t, e) {
            if (H.isParamType(t)) return t
            if ('string' == typeof t)
              try {
                return H.from(E(t), e)
              } catch (e) {
                ;(0, r.MR)(!1, 'invalid param type', 'obj', t)
              }
            else if (t instanceof x) {
              let n = '',
                r = '',
                o = null
              N(t, s(['tuple'])).has('tuple') || t.peekType('OPEN_PAREN')
                ? ((r = 'tuple'),
                  (o = t.popParams().map((t) => H.from(t))),
                  (n = `tuple(${o.map((t) => t.format()).join(',')})`))
                : ((n = B(t.popType('TYPE'))), (r = n))
              let i = null,
                a = null
              for (; t.length && t.peekType('BRACKET'); ) {
                const e = t.pop()
                ;(i = new H(T, '', n, r, null, o, a, i)),
                  (a = e.value),
                  (n += e.text),
                  (r = 'array'),
                  (o = null)
              }
              let u = null
              if (N(t, p).has('indexed')) {
                if (!e) throw new Error('')
                u = !0
              }
              const l = t.peekType('ID') ? t.pop().text : ''
              if (t.length) throw new Error('leftover tokens')
              return new H(T, l, n, r, u, o, a, i)
            }
            const n = t.name
            ;(0, r.MR)(
              !n || ('string' == typeof n && n.match(w)),
              'invalid name',
              'obj.name',
              n,
            )
            let o = t.indexed
            null != o &&
              ((0, r.MR)(
                e,
                'parameter cannot be indexed',
                'obj.indexed',
                t.indexed,
              ),
              (o = !!o))
            let i = t.type,
              a = i.match(I)
            if (a) {
              const e = parseInt(a[2] || '-1'),
                r = H.from({ type: a[1], components: t.components })
              return new H(T, n || '', i, 'array', o, null, e, r)
            }
            if ('tuple' === i || i.startsWith('tuple(') || i.startsWith('(')) {
              const e =
                null != t.components ? t.components.map((t) => H.from(t)) : null
              return new H(T, n || '', i, 'tuple', o, e, null, null)
            }
            return (i = B(t.type)), new H(T, n || '', i, i, o, null, null, null)
          }
          static isParamType(t) {
            return t && t[_] === M
          }
        }
        class z {
          type
          inputs
          constructor(t, e, n) {
            ;(0, r.gk)(t, T, 'Fragment'),
              (n = Object.freeze(n.slice())),
              (0, i.n)(this, { type: e, inputs: n })
          }
          static from(t) {
            if ('string' == typeof t) {
              try {
                z.from(JSON.parse(t))
              } catch (t) {}
              return z.from(E(t))
            }
            if (t instanceof x) {
              switch (t.peekKeyword(h)) {
                case 'constructor':
                  return K.from(t)
                case 'error':
                  return W.from(t)
                case 'event':
                  return J.from(t)
                case 'fallback':
                case 'receive':
                  return q.from(t)
                case 'function':
                  return Z.from(t)
                case 'struct':
                  return Y.from(t)
              }
            } else if ('object' == typeof t) {
              switch (t.type) {
                case 'constructor':
                  return K.from(t)
                case 'error':
                  return W.from(t)
                case 'event':
                  return J.from(t)
                case 'fallback':
                case 'receive':
                  return q.from(t)
                case 'function':
                  return Z.from(t)
                case 'struct':
                  return Y.from(t)
              }
              ;(0, r.vA)(
                !1,
                `unsupported type: ${t.type}`,
                'UNSUPPORTED_OPERATION',
                { operation: 'Fragment.from' },
              )
            }
            ;(0, r.MR)(!1, 'unsupported frgament object', 'obj', t)
          }
          static isConstructor(t) {
            return K.isFragment(t)
          }
          static isError(t) {
            return W.isFragment(t)
          }
          static isEvent(t) {
            return J.isFragment(t)
          }
          static isFunction(t) {
            return Z.isFragment(t)
          }
          static isStruct(t) {
            return Y.isFragment(t)
          }
        }
        class Q extends z {
          name
          constructor(t, e, n, o) {
            super(t, e, o),
              (0, r.MR)(
                'string' == typeof n && n.match(w),
                'invalid identifier',
                'name',
                n,
              ),
              (o = Object.freeze(o.slice())),
              (0, i.n)(this, { name: n })
          }
        }
        function V(t, e) {
          return (
            '(' +
            e.map((e) => e.format(t)).join('full' === t ? ', ' : ',') +
            ')'
          )
        }
        class W extends Q {
          constructor(t, e, n) {
            super(t, 'error', e, n),
              Object.defineProperty(this, _, { value: D })
          }
          get selector() {
            return (0, a.id)(this.format('sighash')).substring(0, 10)
          }
          format(t) {
            if ((null == t && (t = 'sighash'), 'json' === t))
              return JSON.stringify({
                type: 'error',
                name: this.name,
                inputs: this.inputs.map((e) => JSON.parse(e.format(t))),
              })
            const e = []
            return (
              'sighash' !== t && e.push('error'),
              e.push(this.name + V(t, this.inputs)),
              e.join(' ')
            )
          }
          static from(t) {
            if (W.isFragment(t)) return t
            if ('string' == typeof t) return W.from(E(t))
            if (t instanceof x) {
              const e = R('error', t),
                n = C(t)
              return S(t), new W(T, e, n)
            }
            return new W(T, t.name, t.inputs ? t.inputs.map(H.from) : [])
          }
          static isFragment(t) {
            return t && t[_] === D
          }
        }
        class J extends Q {
          anonymous
          constructor(t, e, n, r) {
            super(t, 'event', e, n),
              Object.defineProperty(this, _, { value: L }),
              (0, i.n)(this, { anonymous: r })
          }
          get topicHash() {
            return (0, a.id)(this.format('sighash'))
          }
          format(t) {
            if ((null == t && (t = 'sighash'), 'json' === t))
              return JSON.stringify({
                type: 'event',
                anonymous: this.anonymous,
                name: this.name,
                inputs: this.inputs.map((e) => JSON.parse(e.format(t))),
              })
            const e = []
            return (
              'sighash' !== t && e.push('event'),
              e.push(this.name + V(t, this.inputs)),
              'sighash' !== t && this.anonymous && e.push('anonymous'),
              e.join(' ')
            )
          }
          static getTopicHash(t, e) {
            e = (e || []).map((t) => H.from(t))
            return new J(T, t, e, !1).topicHash
          }
          static from(t) {
            if (J.isFragment(t)) return t
            if ('string' == typeof t)
              try {
                return J.from(E(t))
              } catch (e) {
                ;(0, r.MR)(!1, 'invalid event fragment', 'obj', t)
              }
            else if (t instanceof x) {
              const e = R('event', t),
                n = C(t, !0),
                r = !!N(t, s(['anonymous'])).has('anonymous')
              return S(t), new J(T, e, n, r)
            }
            return new J(
              T,
              t.name,
              t.inputs ? t.inputs.map((t) => H.from(t, !0)) : [],
              !!t.anonymous,
            )
          }
          static isFragment(t) {
            return t && t[_] === L
          }
        }
        class K extends z {
          payable
          gas
          constructor(t, e, n, r, o) {
            super(t, e, n),
              Object.defineProperty(this, _, { value: F }),
              (0, i.n)(this, { payable: r, gas: o })
          }
          format(t) {
            if (
              ((0, r.vA)(
                null != t && 'sighash' !== t,
                'cannot format a constructor for sighash',
                'UNSUPPORTED_OPERATION',
                { operation: 'format(sighash)' },
              ),
              'json' === t)
            )
              return JSON.stringify({
                type: 'constructor',
                stateMutability: this.payable ? 'payable' : 'undefined',
                payable: this.payable,
                gas: null != this.gas ? this.gas : void 0,
                inputs: this.inputs.map((e) => JSON.parse(e.format(t))),
              })
            const e = [`constructor${V(t, this.inputs)}`]
            return (
              this.payable && e.push('payable'),
              null != this.gas && e.push(`@${this.gas.toString()}`),
              e.join(' ')
            )
          }
          static from(t) {
            if (K.isFragment(t)) return t
            if ('string' == typeof t)
              try {
                return K.from(E(t))
              } catch (e) {
                ;(0, r.MR)(!1, 'invalid constuctor fragment', 'obj', t)
              }
            else if (t instanceof x) {
              N(t, s(['constructor']))
              const e = C(t),
                n = !!N(t, u).has('payable'),
                r = O(t)
              return S(t), new K(T, 'constructor', e, n, r)
            }
            return new K(
              T,
              'constructor',
              t.inputs ? t.inputs.map(H.from) : [],
              !!t.payable,
              null != t.gas ? t.gas : null,
            )
          }
          static isFragment(t) {
            return t && t[_] === F
          }
        }
        class q extends z {
          payable
          constructor(t, e, n) {
            super(t, 'fallback', e),
              Object.defineProperty(this, _, { value: U }),
              (0, i.n)(this, { payable: n })
          }
          format(t) {
            const e = 0 === this.inputs.length ? 'receive' : 'fallback'
            if ('json' === t) {
              const t = this.payable ? 'payable' : 'nonpayable'
              return JSON.stringify({ type: e, stateMutability: t })
            }
            return `${e}()${this.payable ? ' payable' : ''}`
          }
          static from(t) {
            if (q.isFragment(t)) return t
            if ('string' == typeof t)
              try {
                return q.from(E(t))
              } catch (e) {
                ;(0, r.MR)(!1, 'invalid fallback fragment', 'obj', t)
              }
            else if (t instanceof x) {
              const e = t.toString(),
                n = t.peekKeyword(s(['fallback', 'receive']))
              ;(0, r.MR)(n, 'type must be fallback or receive', 'obj', e)
              if ('receive' === t.popKeyword(s(['fallback', 'receive']))) {
                const e = C(t)
                return (
                  (0, r.MR)(
                    0 === e.length,
                    'receive cannot have arguments',
                    'obj.inputs',
                    e,
                  ),
                  N(t, s(['payable'])),
                  S(t),
                  new q(T, [], !0)
                )
              }
              let o = C(t)
              o.length
                ? (0, r.MR)(
                    1 === o.length && 'bytes' === o[0].type,
                    'invalid fallback inputs',
                    'obj.inputs',
                    o.map((t) => t.format('minimal')).join(', '),
                  )
                : (o = [H.from('bytes')])
              const i = P(t)
              if (
                ((0, r.MR)(
                  'nonpayable' === i || 'payable' === i,
                  'fallback cannot be constants',
                  'obj.stateMutability',
                  i,
                ),
                N(t, s(['returns'])).has('returns'))
              ) {
                const e = C(t)
                ;(0, r.MR)(
                  1 === e.length && 'bytes' === e[0].type,
                  'invalid fallback outputs',
                  'obj.outputs',
                  e.map((t) => t.format('minimal')).join(', '),
                )
              }
              return S(t), new q(T, o, 'payable' === i)
            }
            if ('receive' === t.type) return new q(T, [], !0)
            if ('fallback' === t.type) {
              const e = [H.from('bytes')],
                n = 'payable' === t.stateMutability
              return new q(T, e, n)
            }
            ;(0, r.MR)(!1, 'invalid fallback description', 'obj', t)
          }
          static isFragment(t) {
            return t && t[_] === U
          }
        }
        class Z extends Q {
          constant
          outputs
          stateMutability
          payable
          gas
          constructor(t, e, n, r, o, a) {
            super(t, 'function', e, r),
              Object.defineProperty(this, _, { value: j }),
              (o = Object.freeze(o.slice()))
            const s = 'view' === n || 'pure' === n,
              u = 'payable' === n
            ;(0, i.n)(this, {
              constant: s,
              gas: a,
              outputs: o,
              payable: u,
              stateMutability: n,
            })
          }
          get selector() {
            return (0, a.id)(this.format('sighash')).substring(0, 10)
          }
          format(t) {
            if ((null == t && (t = 'sighash'), 'json' === t))
              return JSON.stringify({
                type: 'function',
                name: this.name,
                constant: this.constant,
                stateMutability:
                  'nonpayable' !== this.stateMutability
                    ? this.stateMutability
                    : void 0,
                payable: this.payable,
                gas: null != this.gas ? this.gas : void 0,
                inputs: this.inputs.map((e) => JSON.parse(e.format(t))),
                outputs: this.outputs.map((e) => JSON.parse(e.format(t))),
              })
            const e = []
            return (
              'sighash' !== t && e.push('function'),
              e.push(this.name + V(t, this.inputs)),
              'sighash' !== t &&
                ('nonpayable' !== this.stateMutability &&
                  e.push(this.stateMutability),
                this.outputs &&
                  this.outputs.length &&
                  (e.push('returns'), e.push(V(t, this.outputs))),
                null != this.gas && e.push(`@${this.gas.toString()}`)),
              e.join(' ')
            )
          }
          static getSelector(t, e) {
            e = (e || []).map((t) => H.from(t))
            return new Z(T, t, 'view', e, [], null).selector
          }
          static from(t) {
            if (Z.isFragment(t)) return t
            if ('string' == typeof t)
              try {
                return Z.from(E(t))
              } catch (e) {
                ;(0, r.MR)(!1, 'invalid function fragment', 'obj', t)
              }
            else if (t instanceof x) {
              const e = R('function', t),
                n = C(t),
                r = P(t)
              let o = []
              N(t, s(['returns'])).has('returns') && (o = C(t))
              const i = O(t)
              return S(t), new Z(T, e, r, n, o, i)
            }
            let e = t.stateMutability
            return (
              null == e &&
                ((e = 'payable'),
                'boolean' == typeof t.constant
                  ? ((e = 'view'),
                    t.constant ||
                      ((e = 'payable'),
                      'boolean' != typeof t.payable ||
                        t.payable ||
                        (e = 'nonpayable')))
                  : 'boolean' != typeof t.payable ||
                    t.payable ||
                    (e = 'nonpayable')),
              new Z(
                T,
                t.name,
                e,
                t.inputs ? t.inputs.map(H.from) : [],
                t.outputs ? t.outputs.map(H.from) : [],
                null != t.gas ? t.gas : null,
              )
            )
          }
          static isFragment(t) {
            return t && t[_] === j
          }
        }
        class Y extends Q {
          constructor(t, e, n) {
            super(t, 'struct', e, n),
              Object.defineProperty(this, _, { value: G })
          }
          format() {
            throw new Error('@TODO')
          }
          static from(t) {
            if ('string' == typeof t)
              try {
                return Y.from(E(t))
              } catch (e) {
                ;(0, r.MR)(!1, 'invalid struct fragment', 'obj', t)
              }
            else if (t instanceof x) {
              const e = R('struct', t),
                n = C(t)
              return S(t), new Y(T, e, n)
            }
            return new Y(T, t.name, t.inputs ? t.inputs.map(H.from) : [])
          }
          static isFragment(t) {
            return t && t[_] === G
          }
        }
      },
      486: (t, e, n) => {
        'use strict'
        n.d(e, {
          Ay: () => f,
          B4: () => u,
          P5: () => s,
          WM: () => l,
          im: () => c,
          lD: () => a,
        })
        const r = BigInt(2 ** 32 - 1),
          o = BigInt(32)
        function i(t, e = !1) {
          return e
            ? { h: Number(t & r), l: Number((t >> o) & r) }
            : { h: 0 | Number((t >> o) & r), l: 0 | Number(t & r) }
        }
        function a(t, e = !1) {
          let n = new Uint32Array(t.length),
            r = new Uint32Array(t.length)
          for (let o = 0; o < t.length; o++) {
            const { h: a, l: s } = i(t[o], e)
            ;[n[o], r[o]] = [a, s]
          }
          return [n, r]
        }
        const s = (t, e, n) => (t << n) | (e >>> (32 - n)),
          u = (t, e, n) => (e << n) | (t >>> (32 - n)),
          l = (t, e, n) => (e << (n - 32)) | (t >>> (64 - n)),
          c = (t, e, n) => (t << (n - 32)) | (e >>> (64 - n))
        const f = {
          fromBig: i,
          split: a,
          toBig: (t, e) => (BigInt(t >>> 0) << o) | BigInt(e >>> 0),
          shrSH: (t, e, n) => t >>> n,
          shrSL: (t, e, n) => (t << (32 - n)) | (e >>> n),
          rotrSH: (t, e, n) => (t >>> n) | (e << (32 - n)),
          rotrSL: (t, e, n) => (t << (32 - n)) | (e >>> n),
          rotrBH: (t, e, n) => (t << (64 - n)) | (e >>> (n - 32)),
          rotrBL: (t, e, n) => (t >>> (n - 32)) | (e << (64 - n)),
          rotr32H: (t, e) => e,
          rotr32L: (t, e) => t,
          rotlSH: s,
          rotlSL: u,
          rotlBH: l,
          rotlBL: c,
          add: function (t, e, n, r) {
            const o = (e >>> 0) + (r >>> 0)
            return { h: (t + n + ((o / 2 ** 32) | 0)) | 0, l: 0 | o }
          },
          add3L: (t, e, n) => (t >>> 0) + (e >>> 0) + (n >>> 0),
          add3H: (t, e, n, r) => (e + n + r + ((t / 2 ** 32) | 0)) | 0,
          add4L: (t, e, n, r) => (t >>> 0) + (e >>> 0) + (n >>> 0) + (r >>> 0),
          add4H: (t, e, n, r, o) => (e + n + r + o + ((t / 2 ** 32) | 0)) | 0,
          add5H: (t, e, n, r, o, i) =>
            (e + n + r + o + i + ((t / 2 ** 32) | 0)) | 0,
          add5L: (t, e, n, r, o) =>
            (t >>> 0) + (e >>> 0) + (n >>> 0) + (r >>> 0) + (o >>> 0),
        }
      },
      537: (t, e, n) => {
        'use strict'
        n.d(e, {
          Lm: () => a,
          Lo: () => s,
          X_: () => m,
          ZG: () => d,
          c$: () => c,
          f: () => u,
          nx: () => g,
          pO: () => h,
          q5: () => i,
          xW: () => f,
        })
        var r = n(910)
        function o(t, e, n) {
          if (t instanceof Uint8Array) return n ? new Uint8Array(t) : t
          if ('string' == typeof t && t.match(/^0x(?:[0-9a-f][0-9a-f])*$/i)) {
            const e = new Uint8Array((t.length - 2) / 2)
            let n = 2
            for (let r = 0; r < e.length; r++)
              (e[r] = parseInt(t.substring(n, n + 2), 16)), (n += 2)
            return e
          }
          ;(0, r.MR)(!1, 'invalid BytesLike value', e || 'value', t)
        }
        function i(t, e) {
          return o(t, e, !1)
        }
        function a(t, e) {
          return o(t, e, !0)
        }
        function s(t, e) {
          return (
            !('string' != typeof t || !t.match(/^0x[0-9A-Fa-f]*$/)) &&
            ('number' != typeof e || t.length === 2 + 2 * e) &&
            (!0 !== e || t.length % 2 == 0)
          )
        }
        function u(t) {
          return s(t, !0) || t instanceof Uint8Array
        }
        const l = '0123456789abcdef'
        function c(t) {
          const e = i(t)
          let n = '0x'
          for (let t = 0; t < e.length; t++) {
            const r = e[t]
            n += l[(240 & r) >> 4] + l[15 & r]
          }
          return n
        }
        function f(t) {
          return '0x' + t.map((t) => c(t).substring(2)).join('')
        }
        function h(t) {
          return s(t, !0) ? (t.length - 2) / 2 : i(t).length
        }
        function d(t, e, n) {
          const o = i(t)
          return (
            null != n &&
              n > o.length &&
              (0, r.vA)(
                !1,
                'cannot slice beyond data bounds',
                'BUFFER_OVERRUN',
                { buffer: o, length: o.length, offset: n },
              ),
            c(o.slice(null == e ? 0 : e, null == n ? o.length : n))
          )
        }
        function p(t, e, n) {
          const o = i(t)
          ;(0, r.vA)(
            e >= o.length,
            'padding exceeds data length',
            'BUFFER_OVERRUN',
            { buffer: new Uint8Array(o), length: e, offset: e + 1 },
          )
          const a = new Uint8Array(e)
          return a.fill(0), n ? a.set(o, e - o.length) : a.set(o, 0), c(a)
        }
        function g(t, e) {
          return p(t, e, !0)
        }
        function m(t, e) {
          return p(t, e, !1)
        }
      },
      576: (t, e, n) => {
        'use strict'
        var r = n(206)
        ;(e.H = r.createRoot), r.hydrateRoot
      },
      594: (t) => {
        'use strict'
        t.exports = React
      },
      595: (t, e, n) => {
        'use strict'
        n.d(e, {
          AU: () => v,
          Q7: () => m,
          Ue: () => b,
          Yx: () => s,
          mP: () => w,
        })
        var r = n(537),
          o = n(910),
          i = n(926),
          a = n(696)
        const s = 32,
          u = new Uint8Array(s),
          l = ['then'],
          c = {},
          f = new WeakMap()
        function h(t) {
          return f.get(t)
        }
        function d(t, e) {
          f.set(t, e)
        }
        function p(t, e) {
          const n = new Error(
            `deferred error during ABI decoding triggered accessing ${t}`,
          )
          throw ((n.error = e), n)
        }
        function g(t, e, n) {
          return t.indexOf(null) >= 0
            ? e.map((t, e) => (t instanceof m ? g(h(t), t, n) : t))
            : t.reduce((t, r, o) => {
                let i = e.getValue(r)
                return (
                  r in t ||
                    (n && i instanceof m && (i = g(h(i), i, n)), (t[r] = i)),
                  t
                )
              }, {})
        }
        class m extends Array {
          #l
          constructor(...t) {
            const e = t[0]
            let n = t[1],
              r = (t[2] || []).slice(),
              o = !0
            e !== c && ((n = t), (r = []), (o = !1)),
              super(n.length),
              n.forEach((t, e) => {
                this[e] = t
              })
            const a = r.reduce(
              (t, e) => (
                'string' == typeof e && t.set(e, (t.get(e) || 0) + 1), t
              ),
              new Map(),
            )
            if (
              (d(
                this,
                Object.freeze(
                  n.map((t, e) => {
                    const n = r[e]
                    return null != n && 1 === a.get(n) ? n : null
                  }),
                ),
              ),
              (this.#l = []),
              null == this.#l && this.#l,
              !o)
            )
              return
            Object.freeze(this)
            const s = new Proxy(this, {
              get: (t, e, n) => {
                if ('string' == typeof e) {
                  if (e.match(/^[0-9]+$/)) {
                    const n = (0, i.WZ)(e, '%index')
                    if (n < 0 || n >= this.length)
                      throw new RangeError('out of result range')
                    const r = t[n]
                    return r instanceof Error && p(`index ${n}`, r), r
                  }
                  if (l.indexOf(e) >= 0) return Reflect.get(t, e, n)
                  const r = t[e]
                  if (r instanceof Function)
                    return function (...e) {
                      return r.apply(this === n ? t : this, e)
                    }
                  if (!(e in t))
                    return t.getValue.apply(this === n ? t : this, [e])
                }
                return Reflect.get(t, e, n)
              },
            })
            return d(s, h(this)), s
          }
          toArray(t) {
            const e = []
            return (
              this.forEach((n, r) => {
                n instanceof Error && p(`index ${r}`, n),
                  t && n instanceof m && (n = n.toArray(t)),
                  e.push(n)
              }),
              e
            )
          }
          toObject(t) {
            const e = h(this)
            return e.reduce(
              (n, r, i) => (
                (0, o.vA)(
                  null != r,
                  `value at index ${i} unnamed`,
                  'UNSUPPORTED_OPERATION',
                  { operation: 'toObject()' },
                ),
                g(e, this, t)
              ),
              {},
            )
          }
          slice(t, e) {
            null == t && (t = 0),
              t < 0 && (t += this.length) < 0 && (t = 0),
              null == e && (e = this.length),
              e < 0 && (e += this.length) < 0 && (e = 0),
              e > this.length && (e = this.length)
            const n = h(this),
              r = [],
              o = []
            for (let i = t; i < e; i++) r.push(this[i]), o.push(n[i])
            return new m(c, r, o)
          }
          filter(t, e) {
            const n = h(this),
              r = [],
              o = []
            for (let i = 0; i < this.length; i++) {
              const a = this[i]
              a instanceof Error && p(`index ${i}`, a),
                t.call(e, a, i, this) && (r.push(a), o.push(n[i]))
            }
            return new m(c, r, o)
          }
          map(t, e) {
            const n = []
            for (let r = 0; r < this.length; r++) {
              const o = this[r]
              o instanceof Error && p(`index ${r}`, o),
                n.push(t.call(e, o, r, this))
            }
            return n
          }
          getValue(t) {
            const e = h(this).indexOf(t)
            if (-1 === e) return
            const n = this[e]
            return (
              n instanceof Error && p(`property ${JSON.stringify(t)}`, n.error),
              n
            )
          }
          static fromItems(t, e) {
            return new m(c, t, e)
          }
        }
        function y(t) {
          let e = (0, i.c4)(t)
          return (
            (0, o.vA)(e.length <= s, 'value out-of-bounds', 'BUFFER_OVERRUN', {
              buffer: e,
              length: s,
              offset: e.length,
            }),
            e.length !== s &&
              (e = (0, r.Lm)((0, r.xW)([u.slice(e.length % s), e]))),
            e
          )
        }
        class b {
          name
          type
          localName
          dynamic
          constructor(t, e, n, r) {
            ;(0, a.n)(
              this,
              { name: t, type: e, localName: n, dynamic: r },
              {
                name: 'string',
                type: 'string',
                localName: 'string',
                dynamic: 'boolean',
              },
            )
          }
          _throwError(t, e) {
            ;(0, o.MR)(!1, t, this.localName, e)
          }
        }
        class v {
          #c
          #f
          constructor() {
            ;(this.#c = []), (this.#f = 0)
          }
          get data() {
            return (0, r.xW)(this.#c)
          }
          get length() {
            return this.#f
          }
          #h(t) {
            return this.#c.push(t), (this.#f += t.length), t.length
          }
          appendWriter(t) {
            return this.#h((0, r.Lm)(t.data))
          }
          writeBytes(t) {
            let e = (0, r.Lm)(t)
            const n = e.length % s
            return n && (e = (0, r.Lm)((0, r.xW)([e, u.slice(n)]))), this.#h(e)
          }
          writeValue(t) {
            return this.#h(y(t))
          }
          writeUpdatableValue() {
            const t = this.#c.length
            return (
              this.#c.push(u),
              (this.#f += s),
              (e) => {
                this.#c[t] = y(e)
              }
            )
          }
        }
        class w {
          allowLoose
          #c
          #i
          #d
          #p
          #g
          constructor(t, e, n) {
            ;(0, a.n)(this, { allowLoose: !!e }),
              (this.#c = (0, r.Lm)(t)),
              (this.#d = 0),
              (this.#p = null),
              (this.#g = null != n ? n : 1024),
              (this.#i = 0)
          }
          get data() {
            return (0, r.c$)(this.#c)
          }
          get dataLength() {
            return this.#c.length
          }
          get consumed() {
            return this.#i
          }
          get bytes() {
            return new Uint8Array(this.#c)
          }
          #m(t) {
            if (this.#p) return this.#p.#m(t)
            ;(this.#d += t),
              (0, o.vA)(
                this.#g < 1 || this.#d <= this.#g * this.dataLength,
                `compressed ABI data exceeds inflation ratio of ${this.#g} ( see: https://github.com/ethers-io/ethers.js/issues/4537 )`,
                'BUFFER_OVERRUN',
                {
                  buffer: (0, r.Lm)(this.#c),
                  offset: this.#i,
                  length: t,
                  info: { bytesRead: this.#d, dataLength: this.dataLength },
                },
              )
          }
          #y(t, e, n) {
            let i = Math.ceil(e / s) * s
            return (
              this.#i + i > this.#c.length &&
                (this.allowLoose && n && this.#i + e <= this.#c.length
                  ? (i = e)
                  : (0, o.vA)(!1, 'data out-of-bounds', 'BUFFER_OVERRUN', {
                      buffer: (0, r.Lm)(this.#c),
                      length: this.#c.length,
                      offset: this.#i + i,
                    })),
              this.#c.slice(this.#i, this.#i + i)
            )
          }
          subReader(t) {
            const e = new w(
              this.#c.slice(this.#i + t),
              this.allowLoose,
              this.#g,
            )
            return (e.#p = this), e
          }
          readBytes(t, e) {
            let n = this.#y(0, t, !!e)
            return this.#m(t), (this.#i += n.length), n.slice(0, t)
          }
          readValue() {
            return (0, i.Dg)(this.readBytes(s))
          }
          readIndex() {
            return (0, i.Ro)(this.readBytes(s))
          }
        }
      },
      596: (t, e, n) => {
        'use strict'
        n.d(e, { G: () => zo })
        var r = {}
        n.r(r),
          n.d(r, {
            OG: () => sn,
            My: () => Ye,
            Ph: () => tn,
            lX: () => en,
            Id: () => an,
            fg: () => cn,
            qj: () => on,
            aT: () => Xe,
            lq: () => nn,
            z: () => rn,
            Q5: () => hn,
          })
        var o = n(594)
        const i = (t) => {
            let e
            const n = new Set(),
              r = (t, r) => {
                const o = 'function' == typeof t ? t(e) : t
                if (!Object.is(o, e)) {
                  const t = e
                  ;(e = (null != r ? r : 'object' != typeof o || null === o)
                    ? o
                    : Object.assign({}, e, o)),
                    n.forEach((n) => n(e, t))
                }
              },
              o = () => e,
              i = {
                setState: r,
                getState: o,
                getInitialState: () => a,
                subscribe: (t) => (n.add(t), () => n.delete(t)),
              },
              a = (e = t(r, o, i))
            return i
          },
          a = (t) => t
        const s = (t) => {
          const e = ((t) => (t ? i(t) : i))(t),
            n = (t) =>
              (function (t, e = a) {
                const n = o.useSyncExternalStore(
                  t.subscribe,
                  o.useCallback(() => e(t.getState()), [t, e]),
                  o.useCallback(() => e(t.getInitialState()), [t, e]),
                )
                return o.useDebugValue(n), n
              })(e, t)
          return Object.assign(n, e), n
        }
        var u = n(136),
          l = n(910),
          c = n(300),
          f = n(400),
          h = n(443),
          d = n(644),
          p = n(537),
          g = n(926),
          m = n(696),
          y = n(679)
        const b = new Uint8Array(32)
        b.fill(0)
        const v = BigInt(-1),
          w = BigInt(0),
          A = BigInt(1),
          x = BigInt(
            '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
          )
        const E = (0, g.up)(A, 32),
          k = (0, g.up)(w, 32),
          R = {
            name: 'string',
            version: 'string',
            chainId: 'uint256',
            verifyingContract: 'address',
            salt: 'bytes32',
          },
          N = ['name', 'version', 'chainId', 'verifyingContract', 'salt']
        function P(t) {
          return function (e) {
            return (
              (0, l.MR)(
                'string' == typeof e,
                `invalid domain value for ${JSON.stringify(t)}`,
                `domain.${t}`,
                e,
              ),
              e
            )
          }
        }
        const C = {
          name: P('name'),
          version: P('version'),
          chainId: function (t) {
            const e = (0, g.Ab)(t, 'domain.chainId')
            return (
              (0, l.MR)(e >= 0, 'invalid chain ID', 'domain.chainId', t),
              Number.isSafeInteger(e) ? Number(e) : (0, g.nD)(e)
            )
          },
          verifyingContract: function (t) {
            try {
              return (0, f.b)(t).toLowerCase()
            } catch (t) {}
            ;(0, l.MR)(
              !1,
              'invalid domain value "verifyingContract"',
              'domain.verifyingContract',
              t,
            )
          },
          salt: function (t) {
            const e = (0, p.q5)(t, 'domain.salt')
            return (
              (0, l.MR)(
                32 === e.length,
                'invalid domain value "salt"',
                'domain.salt',
                t,
              ),
              (0, p.c$)(e)
            )
          },
        }
        function O(t) {
          {
            const e = t.match(/^(u?)int(\d+)$/)
            if (e) {
              const n = '' === e[1],
                r = parseInt(e[2])
              ;(0, l.MR)(
                r % 8 == 0 && 0 !== r && r <= 256 && e[2] === String(r),
                'invalid numeric width',
                'type',
                t,
              )
              const o = (0, g.dK)(x, n ? r - 1 : r),
                i = n ? (o + A) * v : w
              return function (e) {
                const r = (0, g.Ab)(e, 'value')
                return (
                  (0, l.MR)(
                    r >= i && r <= o,
                    `value out-of-bounds for ${t}`,
                    'value',
                    r,
                  ),
                  (0, g.up)(n ? (0, g.JJ)(r, 256) : r, 32)
                )
              }
            }
          }
          {
            const e = t.match(/^bytes(\d+)$/)
            if (e) {
              const n = parseInt(e[1])
              return (
                (0, l.MR)(
                  0 !== n && n <= 32 && e[1] === String(n),
                  'invalid bytes width',
                  'type',
                  t,
                ),
                function (e) {
                  const r = (0, p.q5)(e)
                  return (
                    (0, l.MR)(
                      r.length === n,
                      `invalid length for ${t}`,
                      'value',
                      e,
                    ),
                    (function (t) {
                      const e = (0, p.q5)(t),
                        n = e.length % 32
                      return n ? (0, p.xW)([e, b.slice(n)]) : (0, p.c$)(e)
                    })(e)
                  )
                }
              )
            }
          }
          switch (t) {
            case 'address':
              return function (t) {
                return (0, p.nx)((0, f.b)(t), 32)
              }
            case 'bool':
              return function (t) {
                return t ? E : k
              }
            case 'bytes':
              return function (t) {
                return (0, d.S)(t)
              }
            case 'string':
              return function (t) {
                return (0, y.id)(t)
              }
          }
          return null
        }
        function S(t, e) {
          return `${t}(${e.map(({ name: t, type: e }) => e + ' ' + t).join(',')})`
        }
        function I(t) {
          const e = t.match(/^([^\x5b]*)((\x5b\d*\x5d)*)(\x5b(\d*)\x5d)$/)
          return e
            ? {
                base: e[1],
                index: e[2] + e[4],
                array: {
                  base: e[1],
                  prefix: e[1] + e[2],
                  count: e[5] ? parseInt(e[5]) : -1,
                },
              }
            : { base: t }
        }
        class B {
          primaryType
          #b
          get types() {
            return JSON.parse(this.#b)
          }
          #v
          #w
          constructor(t) {
            ;(this.#v = new Map()), (this.#w = new Map())
            const e = new Map(),
              n = new Map(),
              r = new Map(),
              o = {}
            Object.keys(t).forEach((i) => {
              ;(o[i] = t[i].map(({ name: e, type: n }) => {
                let { base: r, index: o } = I(n)
                return (
                  'int' !== r || t.int || (r = 'int256'),
                  'uint' !== r || t.uint || (r = 'uint256'),
                  { name: e, type: r + (o || '') }
                )
              })),
                e.set(i, new Set()),
                n.set(i, []),
                r.set(i, new Set())
            }),
              (this.#b = JSON.stringify(o))
            for (const r in o) {
              const i = new Set()
              for (const a of o[r]) {
                ;(0, l.MR)(
                  !i.has(a.name),
                  `duplicate variable name ${JSON.stringify(a.name)} in ${JSON.stringify(r)}`,
                  'types',
                  t,
                ),
                  i.add(a.name)
                const o = I(a.type).base
                ;(0, l.MR)(
                  o !== r,
                  `circular type reference to ${JSON.stringify(o)}`,
                  'types',
                  t,
                )
                O(o) ||
                  ((0, l.MR)(
                    n.has(o),
                    `unknown type ${JSON.stringify(o)}`,
                    'types',
                    t,
                  ),
                  n.get(o).push(r),
                  e.get(r).add(o))
              }
            }
            const i = Array.from(n.keys()).filter((t) => 0 === n.get(t).length)
            ;(0, l.MR)(0 !== i.length, 'missing primary type', 'types', t),
              (0, l.MR)(
                1 === i.length,
                `ambiguous primary types or unused types: ${i.map((t) => JSON.stringify(t)).join(', ')}`,
                'types',
                t,
              ),
              (0, m.n)(this, { primaryType: i[0] }),
              (function o(i, a) {
                ;(0, l.MR)(
                  !a.has(i),
                  `circular type reference to ${JSON.stringify(i)}`,
                  'types',
                  t,
                ),
                  a.add(i)
                for (const t of e.get(i))
                  if (n.has(t)) {
                    o(t, a)
                    for (const e of a) r.get(e).add(t)
                  }
                a.delete(i)
              })(this.primaryType, new Set())
            for (const [t, e] of r) {
              const n = Array.from(e)
              n.sort(),
                this.#v.set(t, S(t, o[t]) + n.map((t) => S(t, o[t])).join(''))
            }
          }
          getEncoder(t) {
            let e = this.#w.get(t)
            return e || ((e = this.#A(t)), this.#w.set(t, e)), e
          }
          #A(t) {
            {
              const e = O(t)
              if (e) return e
            }
            const e = I(t).array
            if (e) {
              const t = e.prefix,
                n = this.getEncoder(t)
              return (r) => {
                ;(0, l.MR)(
                  -1 === e.count || e.count === r.length,
                  `array length mismatch; expected length ${e.count}`,
                  'value',
                  r,
                )
                let o = r.map(n)
                return (
                  this.#v.has(t) && (o = o.map(d.S)), (0, d.S)((0, p.xW)(o))
                )
              }
            }
            const n = this.types[t]
            if (n) {
              const e = (0, y.id)(this.#v.get(t))
              return (t) => {
                const r = n.map(({ name: e, type: n }) => {
                  const r = this.getEncoder(n)(t[e])
                  return this.#v.has(n) ? (0, d.S)(r) : r
                })
                return r.unshift(e), (0, p.xW)(r)
              }
            }
            ;(0, l.MR)(!1, `unknown type: ${t}`, 'type', t)
          }
          encodeType(t) {
            const e = this.#v.get(t)
            return (
              (0, l.MR)(e, `unknown type: ${JSON.stringify(t)}`, 'name', t), e
            )
          }
          encodeData(t, e) {
            return this.getEncoder(t)(e)
          }
          hashStruct(t, e) {
            return (0, d.S)(this.encodeData(t, e))
          }
          encode(t) {
            return this.encodeData(this.primaryType, t)
          }
          hash(t) {
            return this.hashStruct(this.primaryType, t)
          }
          _visit(t, e, n) {
            if (O(t)) return n(t, e)
            const r = I(t).array
            if (r)
              return (
                (0, l.MR)(
                  -1 === r.count || r.count === e.length,
                  `array length mismatch; expected length ${r.count}`,
                  'value',
                  e,
                ),
                e.map((t) => this._visit(r.prefix, t, n))
              )
            const o = this.types[t]
            if (o)
              return o.reduce(
                (t, { name: r, type: o }) => (
                  (t[r] = this._visit(o, e[r], n)), t
                ),
                {},
              )
            ;(0, l.MR)(!1, `unknown type: ${t}`, 'type', t)
          }
          visit(t, e) {
            return this._visit(this.primaryType, t, e)
          }
          static from(t) {
            return new B(t)
          }
          static getPrimaryType(t) {
            return B.from(t).primaryType
          }
          static hashStruct(t, e, n) {
            return B.from(e).hashStruct(t, n)
          }
          static hashDomain(t) {
            const e = []
            for (const n in t) {
              if (null == t[n]) continue
              const r = R[n]
              ;(0, l.MR)(
                r,
                `invalid typed-data domain key: ${JSON.stringify(n)}`,
                'domain',
                t,
              ),
                e.push({ name: n, type: r })
            }
            return (
              e.sort((t, e) => N.indexOf(t.name) - N.indexOf(e.name)),
              B.hashStruct('EIP712Domain', { EIP712Domain: e }, t)
            )
          }
          static encode(t, e, n) {
            return (0, p.xW)(['0x1901', B.hashDomain(t), B.from(e).hash(n)])
          }
          static hash(t, e, n) {
            return (0, d.S)(B.encode(t, e, n))
          }
          static async resolveNames(t, e, n, r) {
            t = Object.assign({}, t)
            for (const e in t) null == t[e] && delete t[e]
            const o = {}
            t.verifyingContract &&
              !(0, p.Lo)(t.verifyingContract, 20) &&
              (o[t.verifyingContract] = '0x')
            const i = B.from(e)
            i.visit(
              n,
              (t, e) => (
                'address' !== t || (0, p.Lo)(e, 20) || (o[e] = '0x'), e
              ),
            )
            for (const t in o) o[t] = await r(t)
            return (
              t.verifyingContract &&
                o[t.verifyingContract] &&
                (t.verifyingContract = o[t.verifyingContract]),
              {
                domain: t,
                value: (n = i.visit(n, (t, e) =>
                  'address' === t && o[e] ? o[e] : e,
                )),
              }
            )
          }
          static getPayload(t, e, n) {
            B.hashDomain(t)
            const r = {},
              o = []
            N.forEach((e) => {
              const n = t[e]
              null != n && ((r[e] = C[e](n)), o.push({ name: e, type: R[e] }))
            })
            const i = B.from(e)
            e = i.types
            const a = Object.assign({}, e)
            return (
              (0, l.MR)(
                null == a.EIP712Domain,
                'types must not contain EIP712Domain type',
                'types.EIP712Domain',
                e,
              ),
              (a.EIP712Domain = o),
              i.encode(n),
              {
                types: a,
                domain: r,
                primaryType: i.primaryType,
                message: i.visit(n, (t, e) => {
                  if (t.match(/^bytes(\d*)/)) return (0, p.c$)((0, p.q5)(e))
                  if (t.match(/^u?int/)) return (0, g.Ab)(e).toString()
                  switch (t) {
                    case 'address':
                      return e.toLowerCase()
                    case 'bool':
                      return !!e
                    case 'string':
                      return (
                        (0, l.MR)(
                          'string' == typeof e,
                          'invalid string',
                          'value',
                          e,
                        ),
                        e
                      )
                  }
                  ;(0, l.MR)(!1, 'unsupported type', 'type', t)
                }),
              }
            )
          }
        }
        var T = n(968)
        const _ =
            '0x0000000000000000000000000000000000000000000000000000000000000000',
          M = BigInt(0),
          D = BigInt(1),
          L = BigInt(2),
          F = BigInt(27),
          U = BigInt(28),
          j = BigInt(35),
          G = {}
        function H(t) {
          return (0, p.nx)((0, g.c4)(t), 32)
        }
        class z {
          #x
          #E
          #k
          #R
          get r() {
            return this.#x
          }
          set r(t) {
            ;(0, l.MR)(32 === (0, p.pO)(t), 'invalid r', 'value', t),
              (this.#x = (0, p.c$)(t))
          }
          get s() {
            return (
              (0, l.MR)(
                parseInt(this.#E.substring(0, 3)) < 8,
                'non-canonical s; use ._s',
                's',
                this.#E,
              ),
              this.#E
            )
          }
          set s(t) {
            ;(0, l.MR)(32 === (0, p.pO)(t), 'invalid s', 'value', t),
              (this.#E = (0, p.c$)(t))
          }
          get _s() {
            return this.#E
          }
          isValid() {
            return parseInt(this.#E.substring(0, 3)) < 8
          }
          get v() {
            return this.#k
          }
          set v(t) {
            const e = (0, g.WZ)(t, 'value')
            ;(0, l.MR)(27 === e || 28 === e, 'invalid v', 'v', t), (this.#k = e)
          }
          get networkV() {
            return this.#R
          }
          get legacyChainId() {
            const t = this.networkV
            return null == t ? null : z.getChainId(t)
          }
          get yParity() {
            return 27 === this.v ? 0 : 1
          }
          get yParityAndS() {
            const t = (0, p.q5)(this.s)
            return this.yParity && (t[0] |= 128), (0, p.c$)(t)
          }
          get compactSerialized() {
            return (0, p.xW)([this.r, this.yParityAndS])
          }
          get serialized() {
            return (0, p.xW)([this.r, this.s, this.yParity ? '0x1c' : '0x1b'])
          }
          constructor(t, e, n, r) {
            ;(0, l.gk)(t, G, 'Signature'),
              (this.#x = e),
              (this.#E = n),
              (this.#k = r),
              (this.#R = null)
          }
          [Symbol.for('nodejs.util.inspect.custom')]() {
            return `Signature { r: "${this.r}", s: "${this._s}"${this.isValid() ? '' : ', valid: "false"'}, yParity: ${this.yParity}, networkV: ${this.networkV} }`
          }
          clone() {
            const t = new z(G, this.r, this._s, this.v)
            return this.networkV && (t.#R = this.networkV), t
          }
          toJSON() {
            const t = this.networkV
            return {
              _type: 'signature',
              networkV: null != t ? t.toString() : null,
              r: this.r,
              s: this._s,
              v: this.v,
            }
          }
          static getChainId(t) {
            const e = (0, g.Ab)(t, 'v')
            return e == F || e == U
              ? M
              : ((0, l.MR)(e >= j, 'invalid EIP-155 v', 'v', t), (e - j) / L)
          }
          static getChainIdV(t, e) {
            return (0, g.Ab)(t) * L + BigInt(35 + e - 27)
          }
          static getNormalizedV(t) {
            const e = (0, g.Ab)(t)
            return e === M || e === F
              ? 27
              : e === D || e === U
                ? 28
                : ((0, l.MR)(e >= j, 'invalid v', 'v', t), e & D ? 27 : 28)
          }
          static from(t) {
            function e(e, n) {
              ;(0, l.MR)(e, n, 'signature', t)
            }
            if (null == t) return new z(G, _, _, 27)
            if ('string' == typeof t) {
              const n = (0, p.q5)(t, 'signature')
              if (64 === n.length) {
                const t = (0, p.c$)(n.slice(0, 32)),
                  e = n.slice(32, 64),
                  r = 128 & e[0] ? 28 : 27
                return (e[0] &= 127), new z(G, t, (0, p.c$)(e), r)
              }
              if (65 === n.length) {
                const t = (0, p.c$)(n.slice(0, 32)),
                  e = (0, p.c$)(n.slice(32, 64)),
                  r = z.getNormalizedV(n[64])
                return new z(G, t, e, r)
              }
              e(!1, 'invalid raw signature length')
            }
            if (t instanceof z) return t.clone()
            const n = t.r
            e(null != n, 'missing r')
            const r = H(n),
              o = (function (t, n) {
                if (null != t) return H(t)
                if (null != n) {
                  e((0, p.Lo)(n, 32), 'invalid yParityAndS')
                  const t = (0, p.q5)(n)
                  return (t[0] &= 127), (0, p.c$)(t)
                }
                e(!1, 'missing s')
              })(t.s, t.yParityAndS),
              { networkV: i, v: a } = (function (t, n, r) {
                if (null != t) {
                  const e = (0, g.Ab)(t)
                  return {
                    networkV: e >= j ? e : void 0,
                    v: z.getNormalizedV(e),
                  }
                }
                if (null != n)
                  return (
                    e((0, p.Lo)(n, 32), 'invalid yParityAndS'),
                    { v: 128 & (0, p.q5)(n)[0] ? 28 : 27 }
                  )
                if (null != r) {
                  switch ((0, g.WZ)(r, 'sig.yParity')) {
                    case 0:
                      return { v: 27 }
                    case 1:
                      return { v: 28 }
                  }
                  e(!1, 'invalid yParity')
                }
                e(!1, 'missing v')
              })(t.v, t.yParityAndS, t.yParity),
              s = new z(G, r, o, a)
            return (
              i && (s.#R = i),
              e(
                null == t.yParity ||
                  (0, g.WZ)(t.yParity, 'sig.yParity') === s.yParity,
                'yParity mismatch',
              ),
              e(
                null == t.yParityAndS || t.yParityAndS === s.yParityAndS,
                'yParityAndS mismatch',
              ),
              s
            )
          }
        }
        function Q(t) {
          return {
            address: (0, f.b)(t.address),
            nonce: (0, g.Ab)(null != t.nonce ? t.nonce : 0),
            chainId: (0, g.Ab)(null != t.chainId ? t.chainId : 0),
            signature: z.from(t.signature),
          }
        }
        var V = n(770)
        function W(t) {
          return async function (e, n) {
            ;(0, l.vA)(
              null == n || !n.cancelled,
              'request cancelled before sending',
              'CANCELLED',
            )
            const r = e.url.split(':')[0].toLowerCase()
            ;(0, l.vA)(
              'http' === r || 'https' === r,
              `unsupported protocol ${r}`,
              'UNSUPPORTED_OPERATION',
              { info: { protocol: r }, operation: 'request' },
            ),
              (0, l.vA)(
                'https' === r ||
                  !e.credentials ||
                  e.allowInsecureAuthentication,
                'insecure authorized connections unsupported',
                'UNSUPPORTED_OPERATION',
                { operation: 'request' },
              )
            let o = null
            const i = new AbortController(),
              a = setTimeout(() => {
                ;(o = (0, l.xz)('request timeout', 'TIMEOUT')), i.abort()
              }, e.timeout)
            n &&
              n.addListener(() => {
                ;(o = (0, l.xz)('request cancelled', 'CANCELLED')), i.abort()
              })
            const s = Object.assign({}, t, {
              method: e.method,
              headers: new Headers(Array.from(e)),
              body: e.body || void 0,
              signal: i.signal,
            })
            let u
            try {
              u = await fetch(e.url, s)
            } catch (t) {
              if ((clearTimeout(a), o)) throw o
              throw t
            }
            clearTimeout(a)
            const c = {}
            u.headers.forEach((t, e) => {
              c[e.toLowerCase()] = t
            })
            const f = await u.arrayBuffer(),
              h = null == f ? null : new Uint8Array(f)
            return {
              statusCode: u.status,
              statusMessage: u.statusText,
              headers: c,
              body: h,
            }
          }
        }
        W({})
        let J = W()
        const K = new RegExp('^data:([^;:]*)?(;base64)?,(.*)$', 'i'),
          q = new RegExp('^ipfs://(ipfs/)?(.*)$', 'i')
        let Z = !1
        async function Y(t, e) {
          try {
            const e = t.match(K)
            if (!e) throw new Error('invalid data')
            return new ot(
              200,
              'OK',
              { 'content-type': e[1] || 'text/plain' },
              e[2]
                ? (function (t) {
                    t = atob(t)
                    const e = new Uint8Array(t.length)
                    for (let n = 0; n < t.length; n++) e[n] = t.charCodeAt(n)
                    return (0, p.q5)(e)
                  })(e[3])
                : ((n = e[3]),
                  (0, V.YW)(
                    n.replace(/%([0-9a-f][0-9a-f])/gi, (t, e) =>
                      String.fromCharCode(parseInt(e, 16)),
                    ),
                  )),
            )
          } catch (e) {
            return new ot(
              599,
              'BAD REQUEST (invalid data: URI)',
              {},
              null,
              new rt(t),
            )
          }
          var n
        }
        function $(t) {
          return async function (e, n) {
            try {
              const n = e.match(q)
              if (!n) throw new Error('invalid link')
              return new rt(`${t}${n[2]}`)
            } catch (t) {
              return new ot(
                599,
                'BAD REQUEST (invalid IPFS URI)',
                {},
                null,
                new rt(e),
              )
            }
          }
        }
        const X = { data: Y, ipfs: $('https://gateway.ipfs.io/ipfs/') },
          tt = new WeakMap()
        class et {
          #N
          #P
          constructor(t) {
            ;(this.#N = []),
              (this.#P = !1),
              tt.set(t, () => {
                if (!this.#P) {
                  this.#P = !0
                  for (const t of this.#N)
                    setTimeout(() => {
                      t()
                    }, 0)
                  this.#N = []
                }
              })
          }
          addListener(t) {
            ;(0, l.vA)(
              !this.#P,
              'singal already cancelled',
              'UNSUPPORTED_OPERATION',
              { operation: 'fetchCancelSignal.addCancelListener' },
            ),
              this.#N.push(t)
          }
          get cancelled() {
            return this.#P
          }
          checkSignal() {
            ;(0, l.vA)(!this.cancelled, 'cancelled', 'CANCELLED', {})
          }
        }
        function nt(t) {
          if (null == t) throw new Error('missing signal; should not happen')
          return t.checkSignal(), t
        }
        class rt {
          #C
          #O
          #S
          #I
          #B
          #T
          #_
          #M
          #D
          #L
          #F
          #U
          #j
          #G
          #H
          get url() {
            return this.#T
          }
          set url(t) {
            this.#T = String(t)
          }
          get body() {
            return null == this.#_ ? null : new Uint8Array(this.#_)
          }
          set body(t) {
            if (null == t) (this.#_ = void 0), (this.#M = void 0)
            else if ('string' == typeof t)
              (this.#_ = (0, V.YW)(t)), (this.#M = 'text/plain')
            else if (t instanceof Uint8Array)
              (this.#_ = t), (this.#M = 'application/octet-stream')
            else {
              if ('object' != typeof t) throw new Error('invalid body')
              ;(this.#_ = (0, V.YW)(JSON.stringify(t))),
                (this.#M = 'application/json')
            }
          }
          hasBody() {
            return null != this.#_
          }
          get method() {
            return this.#I ? this.#I : this.hasBody() ? 'POST' : 'GET'
          }
          set method(t) {
            null == t && (t = ''), (this.#I = String(t).toUpperCase())
          }
          get headers() {
            const t = Object.assign({}, this.#S)
            return (
              this.#D &&
                (t.authorization = `Basic ${(function (t) {
                  const e = (0, p.q5)(t)
                  let n = ''
                  for (let t = 0; t < e.length; t++)
                    n += String.fromCharCode(e[t])
                  return btoa(n)
                })((0, V.YW)(this.#D))}`),
              this.allowGzip && (t['accept-encoding'] = 'gzip'),
              null == t['content-type'] &&
                this.#M &&
                (t['content-type'] = this.#M),
              this.body && (t['content-length'] = String(this.body.length)),
              t
            )
          }
          getHeader(t) {
            return this.headers[t.toLowerCase()]
          }
          setHeader(t, e) {
            this.#S[String(t).toLowerCase()] = String(e)
          }
          clearHeaders() {
            this.#S = {}
          }
          [Symbol.iterator]() {
            const t = this.headers,
              e = Object.keys(t)
            let n = 0
            return {
              next: () => {
                if (n < e.length) {
                  const r = e[n++]
                  return { value: [r, t[r]], done: !1 }
                }
                return { value: void 0, done: !0 }
              },
            }
          }
          get credentials() {
            return this.#D || null
          }
          setCredentials(t, e) {
            ;(0, l.MR)(
              !t.match(/:/),
              'invalid basic authentication username',
              'username',
              '[REDACTED]',
            ),
              (this.#D = `${t}:${e}`)
          }
          get allowGzip() {
            return this.#O
          }
          set allowGzip(t) {
            this.#O = !!t
          }
          get allowInsecureAuthentication() {
            return !!this.#C
          }
          set allowInsecureAuthentication(t) {
            this.#C = !!t
          }
          get timeout() {
            return this.#B
          }
          set timeout(t) {
            ;(0, l.MR)(t >= 0, 'timeout must be non-zero', 'timeout', t),
              (this.#B = t)
          }
          get preflightFunc() {
            return this.#L || null
          }
          set preflightFunc(t) {
            this.#L = t
          }
          get processFunc() {
            return this.#F || null
          }
          set processFunc(t) {
            this.#F = t
          }
          get retryFunc() {
            return this.#U || null
          }
          set retryFunc(t) {
            this.#U = t
          }
          get getUrlFunc() {
            return this.#H || J
          }
          set getUrlFunc(t) {
            this.#H = t
          }
          constructor(t) {
            ;(this.#T = String(t)),
              (this.#C = !1),
              (this.#O = !0),
              (this.#S = {}),
              (this.#I = ''),
              (this.#B = 3e5),
              (this.#G = { slotInterval: 250, maxAttempts: 12 }),
              (this.#H = null)
          }
          toString() {
            return `<FetchRequest method=${JSON.stringify(this.method)} url=${JSON.stringify(this.url)} headers=${JSON.stringify(this.headers)} body=${this.#_ ? ((0, p.c$))(this.#_) : 'null'}>`
          }
          setThrottleParams(t) {
            null != t.slotInterval && (this.#G.slotInterval = t.slotInterval),
              null != t.maxAttempts && (this.#G.maxAttempts = t.maxAttempts)
          }
          async #z(t, e, n, r, o) {
            if (t >= this.#G.maxAttempts)
              return o.makeServerError('exceeded maximum retry limit')
            ;(0, l.vA)(it() <= e, 'timeout', 'TIMEOUT', {
              operation: 'request.send',
              reason: 'timeout',
              request: r,
            }),
              n > 0 &&
                (await (function (t) {
                  return new Promise((e) => setTimeout(e, t))
                })(n))
            let i = this.clone()
            const a = (i.url.split(':')[0] || '').toLowerCase()
            if (a in X) {
              const t = await X[a](i.url, nt(r.#j))
              if (t instanceof ot) {
                let e = t
                if (this.processFunc) {
                  nt(r.#j)
                  try {
                    e = await this.processFunc(i, e)
                  } catch (t) {
                    ;(null != t.throttle && 'number' == typeof t.stall) ||
                      e
                        .makeServerError('error in post-processing function', t)
                        .assertOk()
                  }
                }
                return e
              }
              i = t
            }
            this.preflightFunc && (i = await this.preflightFunc(i))
            const s = await this.getUrlFunc(i, nt(r.#j))
            let u = new ot(s.statusCode, s.statusMessage, s.headers, s.body, r)
            if (301 === u.statusCode || 302 === u.statusCode) {
              try {
                const n = u.headers.location || ''
                return i.redirect(n).#z(t + 1, e, 0, r, u)
              } catch (t) {}
              return u
            }
            if (
              429 === u.statusCode &&
              (null == this.retryFunc || (await this.retryFunc(i, u, t)))
            ) {
              const n = u.headers['retry-after']
              let o =
                this.#G.slotInterval *
                Math.trunc(Math.random() * Math.pow(2, t))
              return (
                'string' == typeof n &&
                  n.match(/^[1-9][0-9]*$/) &&
                  (o = parseInt(n)),
                i.clone().#z(t + 1, e, o, r, u)
              )
            }
            if (this.processFunc) {
              nt(r.#j)
              try {
                u = await this.processFunc(i, u)
              } catch (n) {
                ;(null != n.throttle && 'number' == typeof n.stall) ||
                  u
                    .makeServerError('error in post-processing function', n)
                    .assertOk()
                let o =
                  this.#G.slotInterval *
                  Math.trunc(Math.random() * Math.pow(2, t))
                return (
                  n.stall >= 0 && (o = n.stall), i.clone().#z(t + 1, e, o, r, u)
                )
              }
            }
            return u
          }
          send() {
            return (
              (0, l.vA)(
                null == this.#j,
                'request already sent',
                'UNSUPPORTED_OPERATION',
                { operation: 'fetchRequest.send' },
              ),
              (this.#j = new et(this)),
              this.#z(
                0,
                it() + this.timeout,
                0,
                this,
                new ot(0, '', {}, null, this),
              )
            )
          }
          cancel() {
            ;(0, l.vA)(
              null != this.#j,
              'request has not been sent',
              'UNSUPPORTED_OPERATION',
              { operation: 'fetchRequest.cancel' },
            )
            const t = tt.get(this)
            if (!t) throw new Error('missing signal; should not happen')
            t()
          }
          redirect(t) {
            const e = this.url.split(':')[0].toLowerCase(),
              n = t.split(':')[0].toLowerCase()
            ;(0, l.vA)(
              'GET' === this.method &&
                ('https' !== e || 'http' !== n) &&
                t.match(/^https?:/),
              'unsupported redirect',
              'UNSUPPORTED_OPERATION',
              {
                operation: `redirect(${this.method} ${JSON.stringify(this.url)} => ${JSON.stringify(t)})`,
              },
            )
            const r = new rt(t)
            return (
              (r.method = 'GET'),
              (r.allowGzip = this.allowGzip),
              (r.timeout = this.timeout),
              (r.#S = Object.assign({}, this.#S)),
              this.#_ && (r.#_ = new Uint8Array(this.#_)),
              (r.#M = this.#M),
              r
            )
          }
          clone() {
            const t = new rt(this.url)
            return (
              (t.#I = this.#I),
              this.#_ && (t.#_ = this.#_),
              (t.#M = this.#M),
              (t.#S = Object.assign({}, this.#S)),
              (t.#D = this.#D),
              this.allowGzip && (t.allowGzip = !0),
              (t.timeout = this.timeout),
              this.allowInsecureAuthentication &&
                (t.allowInsecureAuthentication = !0),
              (t.#L = this.#L),
              (t.#F = this.#F),
              (t.#U = this.#U),
              (t.#G = Object.assign({}, this.#G)),
              (t.#H = this.#H),
              t
            )
          }
          static lockConfig() {
            Z = !0
          }
          static getGateway(t) {
            return X[t.toLowerCase()] || null
          }
          static registerGateway(t, e) {
            if ('http' === (t = t.toLowerCase()) || 'https' === t)
              throw new Error(`cannot intercept ${t}; use registerGetUrl`)
            if (Z) throw new Error('gateways locked')
            X[t] = e
          }
          static registerGetUrl(t) {
            if (Z) throw new Error('gateways locked')
            J = t
          }
          static createGetUrlFunc(t) {
            return W(t)
          }
          static createDataGateway() {
            return Y
          }
          static createIpfsGatewayFunc(t) {
            return $(t)
          }
        }
        class ot {
          #Q
          #V
          #S
          #_
          #W
          #J
          toString() {
            return `<FetchResponse status=${this.statusCode} body=${this.#_ ? ((0, p.c$))(this.#_) : 'null'}>`
          }
          get statusCode() {
            return this.#Q
          }
          get statusMessage() {
            return this.#V
          }
          get headers() {
            return Object.assign({}, this.#S)
          }
          get body() {
            return null == this.#_ ? null : new Uint8Array(this.#_)
          }
          get bodyText() {
            try {
              return null == this.#_ ? '' : (0, V._v)(this.#_)
            } catch (t) {
              ;(0, l.vA)(
                !1,
                'response body is not valid UTF-8 data',
                'UNSUPPORTED_OPERATION',
                { operation: 'bodyText', info: { response: this } },
              )
            }
          }
          get bodyJson() {
            try {
              return JSON.parse(this.bodyText)
            } catch (t) {
              ;(0, l.vA)(
                !1,
                'response body is not valid JSON',
                'UNSUPPORTED_OPERATION',
                { operation: 'bodyJson', info: { response: this } },
              )
            }
          }
          [Symbol.iterator]() {
            const t = this.headers,
              e = Object.keys(t)
            let n = 0
            return {
              next: () => {
                if (n < e.length) {
                  const r = e[n++]
                  return { value: [r, t[r]], done: !1 }
                }
                return { value: void 0, done: !0 }
              },
            }
          }
          constructor(t, e, n, r, o) {
            ;(this.#Q = t),
              (this.#V = e),
              (this.#S = Object.keys(n).reduce(
                (t, e) => ((t[e.toLowerCase()] = String(n[e])), t),
                {},
              )),
              (this.#_ = null == r ? null : new Uint8Array(r)),
              (this.#W = o || null),
              (this.#J = { message: '' })
          }
          makeServerError(t, e) {
            let n
            n = t
              ? `CLIENT ESCALATED SERVER ERROR (${this.statusCode} ${this.statusMessage}; ${t})`
              : `CLIENT ESCALATED SERVER ERROR (${(t = `${this.statusCode} ${this.statusMessage}`)})`
            const r = new ot(599, n, this.headers, this.body, this.#W || void 0)
            return (r.#J = { message: t, error: e }), r
          }
          throwThrottleError(t, e) {
            null == e
              ? (e = -1)
              : (0, l.MR)(
                  Number.isInteger(e) && e >= 0,
                  'invalid stall timeout',
                  'stall',
                  e,
                )
            const n = new Error(t || 'throttling requests')
            throw ((0, m.n)(n, { stall: e, throttle: !0 }), n)
          }
          getHeader(t) {
            return this.headers[t.toLowerCase()]
          }
          hasBody() {
            return null != this.#_
          }
          get request() {
            return this.#W
          }
          ok() {
            return (
              '' === this.#J.message &&
              this.statusCode >= 200 &&
              this.statusCode < 300
            )
          }
          assertOk() {
            if (this.ok()) return
            let { message: t, error: e } = this.#J
            '' === t &&
              (t = `server response ${this.statusCode} ${this.statusMessage}`)
            let n = null
            this.request && (n = this.request.url)
            let r = null
            try {
              this.#_ && (r = (0, V._v)(this.#_))
            } catch (t) {}
            ;(0, l.vA)(!1, t, 'SERVER_ERROR', {
              request: this.request || 'unknown request',
              response: this,
              error: e,
              info: {
                requestUrl: n,
                responseBody: r,
                responseStatus: `${this.statusCode} ${this.statusMessage}`,
              },
            })
          }
        }
        function it() {
          return new Date().getTime()
        }
        const at = '0x0000000000000000000000000000000000000000'
        var st = n(773)
        const ut = new Map([
          [8217, 'apostrophe'],
          [8260, 'fraction slash'],
          [12539, 'middle dot'],
        ])
        function lt(t) {
          return (function (t) {
            let e = 0
            return () => t[e++]
          })(
            (function (t) {
              let e = 0
              function n() {
                return (t[e++] << 8) | t[e++]
              }
              let r = n(),
                o = 1,
                i = [0, 1]
              for (let t = 1; t < r; t++) i.push((o += n()))
              let a = n(),
                s = e
              e += a
              let u = 0,
                l = 0
              function c() {
                return (
                  0 == u && ((l = (l << 8) | t[e++]), (u = 8)), (l >> --u) & 1
                )
              }
              const f = 2 ** 31,
                h = f >>> 1,
                d = h >> 1,
                p = f - 1
              let g = 0
              for (let t = 0; t < 31; t++) g = (g << 1) | c()
              let m = [],
                y = 0,
                b = f
              for (;;) {
                let t = Math.floor(((g - y + 1) * o - 1) / b),
                  e = 0,
                  n = r
                for (; n - e > 1; ) {
                  let r = (e + n) >>> 1
                  t < i[r] ? (n = r) : (e = r)
                }
                if (0 == e) break
                m.push(e)
                let a = y + Math.floor((b * i[e]) / o),
                  s = y + Math.floor((b * i[e + 1]) / o) - 1
                for (; 0 == ((a ^ s) & h); )
                  (g = ((g << 1) & p) | c()),
                    (a = (a << 1) & p),
                    (s = ((s << 1) & p) | 1)
                for (; a & ~s & d; )
                  (g = (g & h) | ((g << 1) & (p >>> 1)) | c()),
                    (a = (a << 1) ^ h),
                    (s = ((s ^ h) << 1) | h | 1)
                ;(y = a), (b = 1 + s - a)
              }
              let v = r - 4
              return m.map((e) => {
                switch (e - v) {
                  case 3:
                    return v + 65792 + ((t[s++] << 16) | (t[s++] << 8) | t[s++])
                  case 2:
                    return v + 256 + ((t[s++] << 8) | t[s++])
                  case 1:
                    return v + t[s++]
                  default:
                    return e - 1
                }
              })
            })(
              (function (t) {
                let e = []
                ;[
                  ...'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
                ].forEach((t, n) => (e[t.charCodeAt(0)] = n))
                let n = t.length,
                  r = new Uint8Array((6 * n) >> 3)
                for (let o = 0, i = 0, a = 0, s = 0; o < n; o++)
                  (s = (s << 6) | e[t.charCodeAt(o)]),
                    (a += 6),
                    a >= 8 && (r[i++] = s >> (a -= 8))
                return r
              })(t),
            ),
          )
        }
        function ct(t) {
          return 1 & t ? ~t >> 1 : t >> 1
        }
        function ft(t, e) {
          let n = Array(t)
          for (let r = 0, o = 0; r < t; r++) n[r] = o += ct(e())
          return n
        }
        function ht(t, e = 0) {
          let n = []
          for (;;) {
            let r = t(),
              o = t()
            if (!o) break
            e += r
            for (let t = 0; t < o; t++) n.push(e + t)
            e += o + 1
          }
          return n
        }
        function dt(t) {
          return gt(() => {
            let e = ht(t)
            if (e.length) return e
          })
        }
        function pt(t) {
          let e = []
          for (;;) {
            let n = t()
            if (0 == n) break
            e.push(yt(n, t))
          }
          for (;;) {
            let n = t() - 1
            if (n < 0) break
            e.push(bt(n, t))
          }
          return e.flat()
        }
        function gt(t) {
          let e = []
          for (;;) {
            let n = t(e.length)
            if (!n) break
            e.push(n)
          }
          return e
        }
        function mt(t, e, n) {
          let r = Array(t)
            .fill()
            .map(() => [])
          for (let o = 0; o < e; o++) ft(t, n).forEach((t, e) => r[e].push(t))
          return r
        }
        function yt(t, e) {
          let n = 1 + e(),
            r = e(),
            o = gt(e)
          return mt(o.length, 1 + t, e).flatMap((t, e) => {
            let [i, ...a] = t
            return Array(o[e])
              .fill()
              .map((t, e) => {
                let o = e * r
                return [i + e * n, a.map((t) => t + o)]
              })
          })
        }
        function bt(t, e) {
          return mt(1 + e(), 1 + t, e).map((t) => [t[0], t.slice(1)])
        }
        function vt(t) {
          return `{${(function (t) {
            return t.toString(16).toUpperCase().padStart(2, '0')
          })(t)}}`
        }
        function wt(t) {
          let e = []
          for (let n = 0, r = t.length; n < r; ) {
            let r = t.codePointAt(n)
            ;(n += r < 65536 ? 1 : 2), e.push(r)
          }
          return e
        }
        function At(t) {
          let e = t.length
          if (e < 4096) return String.fromCodePoint(...t)
          let n = []
          for (let r = 0; r < e; )
            n.push(String.fromCodePoint(...t.slice(r, (r += 4096))))
          return n.join('')
        }
        function xt(t, e) {
          let n = t.length,
            r = n - e.length
          for (let o = 0; 0 == r && o < n; o++) r = t[o] - e[o]
          return r
        }
        const Et = 44032,
          kt = 4352,
          Rt = 4449,
          Nt = 4519,
          Pt = 28,
          Ct = 588
        function Ot(t) {
          return (t >> 24) & 255
        }
        function St(t) {
          return 16777215 & t
        }
        let It, Bt, Tt, _t
        function Mt(t) {
          return t >= Et && t < 55204
        }
        function Dt(t, e) {
          if (t >= kt && t < 4371 && e >= Rt && e < 4470)
            return Et + (t - kt) * Ct + (e - Rt) * Pt
          if (Mt(t) && e > Nt && e < 4547 && (t - Et) % Pt == 0)
            return t + (e - Nt)
          {
            let n = _t.get(t)
            return n && ((n = n.get(e)), n) ? n : -1
          }
        }
        function Lt(t) {
          It ||
            (function () {
              let t = lt(
                'AEUDTAHBCFQATQDRADAAcgAgADQAFAAsABQAHwAOACQADQARAAoAFwAHABIACAAPAAUACwAFAAwABAAQAAMABwAEAAoABQAIAAIACgABAAQAFAALAAIACwABAAIAAQAHAAMAAwAEAAsADAAMAAwACgANAA0AAwAKAAkABAAdAAYAZwDSAdsDJgC0CkMB8xhZAqfoC190UGcThgBurwf7PT09Pb09AjgJum8OjDllxHYUKXAPxzq6tABAxgK8ysUvWAgMPT09PT09PSs6LT2HcgWXWwFLoSMEEEl5RFVMKvO0XQ8ExDdJMnIgsj26PTQyy8FfEQ8AY8IPAGcEbwRwBHEEcgRzBHQEdQR2BHcEeAR6BHsEfAR+BIAEgfndBQoBYgULAWIFDAFiBNcE2ATZBRAFEQUvBdALFAsVDPcNBw13DYcOMA4xDjMB4BllHI0B2grbAMDpHLkQ7QHVAPRNQQFnGRUEg0yEB2uaJF8AJpIBpob5AERSMAKNoAXqaQLUBMCzEiACnwRZEkkVsS7tANAsBG0RuAQLEPABv9HICTUBXigPZwRBApMDOwAamhtaABqEAY8KvKx3LQ4ArAB8UhwEBAVSagD8AEFZADkBIadVj2UMUgx5Il4ANQC9AxIB1BlbEPMAs30CGxlXAhwZKQIECBc6EbsCoxngzv7UzRQA8M0BawL6ZwkN7wABAD33OQRcsgLJCjMCjqUChtw/km+NAsXPAoP2BT84PwURAK0RAvptb6cApQS/OMMey5HJS84UdxpxTPkCogVFITaTOwERAK5pAvkNBOVyA7q3BKlOJSALAgUIBRcEdASpBXqzABXFSWZOawLCOqw//AolCZdvv3dSBkEQGyelEPcMMwG1ATsN7UvYBPEGOwTJH30ZGQ/NlZwIpS3dDO0m4y6hgFoj9SqDBe1L9DzdC01RaA9ZC2UJ4zpjgU4DIQENIosK3Q05CG0Q8wrJaw3lEUUHOQPVSZoApQcBCxEdNRW1JhBirAsJOXcG+xr2C48mrxMpevwF0xohBk0BKRr/AM8u54WwWjFcHE9fBgMLJSPHFKhQIA0lQLd4SBobBxUlqQKRQ3BKh1E2HpMh9jw9DWYuE1F8B/U8BRlPC4E8nkarRQ4R0j6NPUgiSUwsBDV/LC8niwnPD4UMuXxyAVkJIQmxDHETMREXN8UIOQcZLZckJxUIIUaVYJoE958D8xPRAwsFPwlBBxMDtRwtEy4VKQUNgSTXAvM21S6zAo9WgAEXBcsPJR/fEFBH4A7pCJsCZQODJesALRUhABcimwhDYwBfj9hTBS7LCMdqbCN0A2cU52ERcweRDlcHpxwzFb8c4XDIXguGCCijrwlbAXUJmQFfBOMICTVbjKAgQWdTi1gYmyBhQT9d/AIxDGUVn0S9h3gCiw9rEhsBNQFzBzkNAQJ3Ee0RaxCVCOuGBDW1M/g6JQRPIYMgEQonA09szgsnJvkM+GkBoxJiAww0PXfuZ6tgtiQX/QcZMsVBYCHxC5JPzQycGsEYQlQuGeQHvwPzGvMn6kFXBf8DowMTOk0z7gS9C2kIiwk/AEkOoxcH1xhqCnGM0AExiwG3mQNXkYMCb48GNwcLAGcLhwV55QAdAqcIowAFAM8DVwA5Aq0HnQAZAIVBAT0DJy8BIeUCjwOTCDHLAZUvAfMpBBvDDBUA9zduSgLDsQKAamaiBd1YAo4CSTUBTSUEBU5HUQOvceEA2wBLBhPfRwEVq0rLGuNDAd9vKwDHAPsABTUHBUEBzQHzbQC3AV8LMQmis7UBTekpAIMAFWsB1wKJAN0ANQB/8QFTAE0FWfkF0wJPSQERMRgrV2EBuwMfATMBDQB5BsuNpckHHwRtB9MCEBsV4QLvLge1AQMi3xPNQsUCvd5VoWACZIECYkJbTa9bNyACofcCaJgCZgkCn4Q4GwsCZjsCZiYEbgR/A38TA36SOQY5dxc5gjojIwJsHQIyNjgKAm3HAm2u74ozZ0UrAWcA3gDhAEoFB5gMjQD+C8IADbUCdy8CdqI/AnlLQwJ4uh1c20WuRtcCfD8CesgCfQkCfPAFWQUgSABIfWMkAoFtAoAAAoAFAn+uSVhKWxUXSswC0QEC0MxLJwOITwOH5kTFkTIC8qFdAwMDrkvOTC0lA89NTE2vAos/AorYwRsHHUNnBbcCjjcCjlxAl4ECjtkCjlx4UbRTNQpS1FSFApP7ApMMAOkAHFUeVa9V0AYsGymVhjLheGZFOzkCl58C77JYIagAWSUClo8ClnycAKlZrFoJgU0AOwKWtQKWTlxEXNECmcsCmWRcyl0HGQKcmznCOp0CnBYCn5sCnriKAB0PMSoPAp3xAp6SALU9YTRh7wKe0wKgbgGpAp6fHwKeTqVjyGQnJSsCJ68CJn4CoPsCoEwCot0CocQCpi8Cpc4Cp/8AfQKn8mh8aLEAA0lqHGrRAqzjAqyuAq1nAq0CAlcdAlXcArHh1wMfTmyXArK9DQKy6Bds4G1jbUhfAyXNArZcOz9ukAMpRQK4XgK5RxUCuSp3cDZw4QK9GQK72nCWAzIRAr6IcgIDM3ECvhpzInNPAsPLAsMEc4J0SzVFdOADPKcDPJoDPb8CxXwCxkcCxhCJAshpUQLIRALJTwLJLgJknQLd0nh5YXiueSVL0AMYo2cCAmH0GfOVJHsLXpJeuxECz2sCz2wvS1PS8xOfAMatAs9zASnqA04SfksFAtwnAtuKAtJPA1JcA1NfAQEDVYyAiT8AyxbtYEWCHILTgs6DjQLaxwLZ3oQQhEmnPAOGpQAvA2QOhnFZ+QBVAt9lAt64c3cC4i/tFAHzMCcB9JsB8tKHAuvzAulweQLq+QLq5AD5RwG5Au6JAuuclqqXAwLuPwOF4Jh5cOBxoQLzAwBpA44WmZMC9xMDkW4DkocC95gC+dkC+GaaHJqruzebHgOdgwL++gEbADmfHJ+zAwWNA6ZqA6bZANHFAwZqoYiiBQkDDEkCwAA/AwDhQRdTARHzA2sHl2cFAJMtK7evvdsBiZkUfxEEOQH7KQUhDp0JnwCS/SlXxQL3AZ0AtwW5AG8LbUEuFCaNLgFDAYD8AbUmAHUDDgRtACwCFgyhAAAKAj0CagPdA34EkQEgRQUhfAoABQBEABMANhICdwEABdUDa+8KxQIA9wqfJ7+xt+UBkSFBQgHpFH8RNMCJAAQAGwBaAkUChIsABjpTOpSNbQC4Oo860ACNOME63AClAOgAywE6gTo7Ofw5+Tt2iTpbO56JOm85GAFWATMBbAUvNV01njWtNWY1dTW2NcU1gjWRNdI14TWeNa017jX9NbI1wTYCNhE1xjXVNhY2JzXeNe02LjY9Ni41LSE2OjY9Njw2yTcIBJA8VzY4Nt03IDcPNsogN4k3MAoEsDxnNiQ3GTdsOo03IULUQwdC4EMLHA8PCZsobShRVQYA6X8A6bABFCnXAukBowC9BbcAbwNzBL8MDAMMAQgDAAkKCwsLCQoGBAVVBI/DvwDz9b29kaUCb0QtsRTNLt4eGBcSHAMZFhYZEhYEARAEBUEcQRxBHEEcQRxBHEEaQRxBHEFCSTxBPElISUhBNkM2QTYbNklISVmBVIgBFLWZAu0BhQCjBcEAbykBvwGJAaQcEZ0ePCklMAAhMvAIMAL54gC7Bm8EescjzQMpARQpKgDUABavAj626xQAJP0A3etzuf4NNRA7efy2Z9NQrCnC0OSyANz5BBIbJ5IFDR6miIavYS6tprjjmuKebxm5C74Q225X1pkaYYPb6f1DK4k3xMEBb9S2WMjEibTNWhsRJIA+vwNVEiXTE5iXs/wezV66oFLfp9NZGYW+Gk19J2+bCT6Ye2w6LDYdgzKMUabk595eLBCXANz9HUpWbATq9vqXVx9XDg+Pc9Xp4+bsS005SVM/BJBM4687WUuf+Uj9dEi8aDNaPxtpbDxcG1THTImUMZq4UCaaNYpsVqraNyKLJXDYsFZ/5jl7bLRtO88t7P3xZaAxhb5OdPMXqsSkp1WCieG8jXm1U99+blvLlXzPCS+M93VnJCiK+09LfaSaBAVBomyDgJua8dfUzR7ga34IvR2Nvj+A9heJ6lsl1KG4NkI1032Cnff1m1wof2B9oHJK4bi6JkEdSqeNeiuo6QoZZincoc73/TH9SXF8sCE7XyuYyW8WSgbGFCjPV0ihLKhdPs08Tx82fYAkLLc4I2wdl4apY7GU5lHRFzRWJep7Ww3wbeA3qmd59/86P4xuNaqDpygXt6M85glSBHOCGgJDnt+pN9bK7HApMguX6+06RZNjzVmcZJ+wcUrJ9//bpRNxNuKpNl9uFds+S9tdx7LaM5ZkIrPj6nIU9mnbFtVbs9s/uLgl8MVczAwet+iOEzzBlYW7RCMgE6gyNLeq6+1tIx4dpgZnd0DksJS5f+JNDpwwcPNXaaVspq1fbQajOrJgK0ofKtJ1Ne90L6VO4MOl5S886p7u6xo7OLjG8TGL+HU1JXGJgppg4nNbNJ5nlzSpuPYy21JUEcUA94PoFiZfjZue+QnyQ80ekOuZVkxx4g+cvhJfHgNl4hy1/a6+RKcKlar/J29y//EztlbVPHVUeQ1zX86eQVAjR/M3dA9w4W8LfaXp4EgM85wOWasli837PzVMOnsLzR+k3o75/lRPAJSE1xAKQzEi5v10ke+VBvRt1cwQRMd+U5mLCTGVd6XiZtgBG5cDi0w22GKcVNvHiu5LQbZEDVtz0onn7k5+heuKXVsZtSzilkLRAUmjMXEMB3J9YC50XBxPiz53SC+EhnPl9WsKCv92SM/OFFIMJZYfl0WW8tIO3UxYcwdMAj7FSmgrsZ2aAZO03BOhP1bNNZItyXYQFTpC3SG1VuPDqH9GkiCDmE+JwxyIVSO5siDErAOpEXFgjy6PQtOVDj+s6e1r8heWVvmZnTciuf4EiNZzCAd7SOMhXERIOlsHIMG399i9aLTy3m2hRLZjJVDNLS53iGIK11dPqQt0zBDyg6qc7YqkDm2M5Ve6dCWCaCbTXX2rToaIgz6+zh4lYUi/+6nqcFMAkQJKHYLK0wYk5N9szV6xihDbDDFr45lN1K4aCXBq/FitPSud9gLt5ZVn+ZqGX7cwm2z5EGMgfFpIFyhGGuDPmso6TItTMwny+7uPnLCf4W6goFQFV0oQSsc9VfMmVLcLr6ZetDZbaSFTLqnSO/bIPjA3/zAUoqgGFAEQS4IhuMzEp2I3jJzbzkk/IEmyax+rhZTwd6f+CGtwPixu8IvzACquPWPREu9ZvGkUzpRwvRRuaNN6cr0W1wWits9ICdYJ7ltbgMiSL3sTPeufgNcVqMVWFkCPDH4jG2jA0XcVgQj62Cb29v9f/z/+2KbYvIv/zzjpQAPkliaVDzNrW57TZ/ZOyZD0nlfMmAIBIAGAI0D3k/mdN4xr9v85ZbZbbqfH2jGd5hUqNZWwl5SPfoGmfElmazUIeNL1j/mkF7VNAzTq4jNt8JoQ11NQOcmhprXoxSxfRGJ9LDEOAQ+dmxAQH90iti9e2u/MoeuaGcDTHoC+xsmEeWmxEKefQuIzHbpw5Tc5cEocboAD09oipWQhtTO1wivf/O+DRe2rpl/E9wlrzBorjJsOeG1B/XPW4EaJEFdNlECEZga5ZoGRHXgYouGRuVkm8tDESiEyFNo+3s5M5puSdTyUL2llnINVHEt91XUNW4ewdMgJ4boJfEyt/iY5WXqbA+A2Fkt5Z0lutiWhe9nZIyIUjyXDC3UsaG1t+eNx6z4W/OYoTB7A6x+dNSTOi9AInctbESqm5gvOLww7OWXPrmHwVZasrl4eD113pm+JtT7JVOvnCXqdzzdTRHgJ0PiGTFYW5Gvt9R9LD6Lzfs0v/TZZHSmyVNq7viIHE6DBK7Qp07Iz55EM8SYtQvZf/obBniTWi5C2/ovHfw4VndkE5XYdjOhCMRjDeOEfXeN/CwfGduiUIfsoFeUxXeQXba7c7972XNv8w+dTjjUM0QeNAReW+J014dKAD/McQYXT7c0GQPIkn3Ll6R7gGjuiQoZD0TEeEqQpKoZ15g/0OPQI17QiSv9AUROa/V/TQN3dvLArec3RrsYlvBm1b8LWzltdugsC50lNKYLEp2a+ZZYqPejULRlOJh5zj/LVMyTDvwKhMxxwuDkxJ1QpoNI0OTWLom4Z71SNzI9TV1iXJrIu9Wcnd+MCaAw8o1jSXd94YU/1gnkrC9BUEOtQvEIQ7g0i6h+KL2JKk8Ydl7HruvgWMSAmNe+LshGhV4qnWHhO9/RIPQzY1tHRj2VqOyNsDpK0cww+56AdDC4gsWwY0XxoucIWIqs/GcwnWqlaT0KPr8mbK5U94/301i1WLt4YINTVvCFBrFZbIbY8eycOdeJ2teD5IfPLCRg7jjcFTwlMFNl9zdh/o3E/hHPwj7BWg0MU09pPrBLbrCgm54A6H+I6v27+jL5gkjWg/iYdks9jbfVP5y/n0dlgWEMlKasl7JvFZd56LfybW1eeaVO0gxTfXZwD8G4SI116yx7UKVRgui6Ya1YpixqXeNLc8IxtAwCU5IhwQgn+NqHnRaDv61CxKhOq4pOX7M6pkA+Pmpd4j1vn6ACUALoLLc4vpXci8VidLxzm7qFBe7s+quuJs6ETYmnpgS3LwSZxPIltgBDXz8M1k/W2ySNv2f9/NPhxLGK2D21dkHeSGmenRT3Yqcdl0m/h3OYr8V+lXNYGf8aCCpd4bWjE4QIPj7vUKN4Nrfs7ML6Y2OyS830JCnofg/k7lpFpt4SqZc5HGg1HCOrHvOdC8bP6FGDbE/VV0mX4IakzbdS/op+Kt3G24/8QbBV7y86sGSQ/vZzU8FXs7u6jIvwchsEP2BpIhW3G8uWNwa3HmjfH/ZjhhCWvluAcF+nMf14ClKg5hGgtPLJ98ueNAkc5Hs2WZlk2QHvfreCK1CCGO6nMZVSb99VM/ajr8WHTte9JSmkXq/i/U943HEbdzW6Re/S88dKgg8pGOLlAeNiqrcLkUR3/aClFpMXcOUP3rmETcWSfMXZE3TUOi8i+fqRnTYLflVx/Vb/6GJ7eIRZUA6k3RYR3iFSK9c4iDdNwJuZL2FKz/IK5VimcNWEqdXjSoxSgmF0UPlDoUlNrPcM7ftmA8Y9gKiqKEHuWN+AZRIwtVSxye2Kf8rM3lhJ5XcBXU9n4v0Oy1RU2M+4qM8AQPVwse8ErNSob5oFPWxuqZnVzo1qB/IBxkM3EVUKFUUlO3e51259GgNcJbCmlvrdjtoTW7rChm1wyCKzpCTwozUUEOIcWLneRLgMXh+SjGSFkAllzbGS5HK7LlfCMRNRDSvbQPjcXaenNYxCvu2Qyznz6StuxVj66SgI0T8B6/sfHAJYZaZ78thjOSIFumNWLQbeZixDCCC+v0YBtkxiBB3jefHqZ/dFHU+crbj6OvS1x/JDD7vlm7zOVPwpUC01nhxZuY/63E7g',
              )
              ;(It = new Map(
                dt(t).flatMap((t, e) => t.map((t) => [t, (e + 1) << 24])),
              )),
                (Bt = new Set(ht(t))),
                (Tt = new Map()),
                (_t = new Map())
              for (let [e, n] of pt(t)) {
                if (!Bt.has(e) && 2 == n.length) {
                  let [t, r] = n,
                    o = _t.get(t)
                  o || ((o = new Map()), _t.set(t, o)), o.set(r, e)
                }
                Tt.set(e, n.reverse())
              }
            })()
          let e = [],
            n = [],
            r = !1
          function o(t) {
            let n = It.get(t)
            n && ((r = !0), (t |= n)), e.push(t)
          }
          for (let r of t)
            for (;;) {
              if (r < 128) e.push(r)
              else if (Mt(r)) {
                let t = r - Et,
                  e = ((t % Ct) / Pt) | 0,
                  n = t % Pt
                o(kt + ((t / Ct) | 0)), o(Rt + e), n > 0 && o(Nt + n)
              } else {
                let t = Tt.get(r)
                t ? n.push(...t) : o(r)
              }
              if (!n.length) break
              r = n.pop()
            }
          if (r && e.length > 1) {
            let t = Ot(e[0])
            for (let n = 1; n < e.length; n++) {
              let r = Ot(e[n])
              if (0 == r || t <= r) {
                t = r
                continue
              }
              let o = n - 1
              for (;;) {
                let n = e[o + 1]
                if (((e[o + 1] = e[o]), (e[o] = n), !o)) break
                if (((t = Ot(e[--o])), t <= r)) break
              }
              t = Ot(e[n])
            }
          }
          return e
        }
        function Ft(t) {
          return Lt(t).map(St)
        }
        function Ut(t) {
          return (function (t) {
            let e = [],
              n = [],
              r = -1,
              o = 0
            for (let i of t) {
              let t = Ot(i),
                a = St(i)
              if (-1 == r) 0 == t ? (r = a) : e.push(a)
              else if (o > 0 && o >= t)
                0 == t ? (e.push(r, ...n), (n.length = 0), (r = a)) : n.push(a),
                  (o = t)
              else {
                let i = Dt(r, a)
                i >= 0
                  ? (r = i)
                  : 0 == o && 0 == t
                    ? (e.push(r), (r = a))
                    : (n.push(a), (o = t))
              }
            }
            return r >= 0 && e.push(r, ...n), e
          })(Lt(t))
        }
        const jt = '.',
          Gt = (t) => Array.from(t)
        function Ht(t, e) {
          return t.P.has(e) || t.Q.has(e)
        }
        class zt extends Array {
          get is_emoji() {
            return !0
          }
        }
        let Qt, Vt, Wt, Jt, Kt, qt, Zt, Yt, $t, Xt, te, ee
        function ne() {
          if (Qt) return
          let t = lt(
            'AEEUdwmgDS8BxQKKAP4BOgDjATAAngDUAIMAoABoAOAAagCOAEQAhABMAHIAOwA9ACsANgAmAGIAHgAuACgAJwAXAC0AGgAjAB8ALwAUACkAEgAeAAkAGwARABkAFgA5ACgALQArADcAFQApABAAHgAiABAAGgAeABMAGAUhBe8BFxREN8sF2wC5AK5HAW8ArQkDzQCuhzc3NzcBP68NEfMABQdHBuw5BV8FYAA9MzkI9r4ZBg7QyQAWA9CeOwLNCjcCjqkChuA/lm+RAsXTAoP6ASfnEQDytQFJAjWVCkeXAOsA6godAB/cwdAUE0WlBCN/AQUCQRjFD/MRBjHxDQSJbw0jBzUAswBxme+tnIcAYwabAysG8QAjAEMMmxcDqgPKQyDXCMMxA7kUQwD3NXOrAKmFIAAfBC0D3x4BJQDBGdUFAhEgVD8JnwmQJiNWYUzrg0oAGwAUAB0AFnNcACkAFgBP9h3gPfsDOWDKneY2ChglX1UDYD30ABsAFAAdABZzIGRAnwDD8wAjAEEMzRbDqgMB2sAFYwXqAtCnAsS4AwpUJKRtFHsadUz9AMMVbwLpABM1NJEX0ZkCgYMBEyMAxRVvAukAEzUBUFAtmUwSAy4DBTER33EftQHfSwB5MxJ/AjkWKQLzL8E/cwBB6QH9LQDPDtO9ASNriQC5DQANAwCK21EFI91zHwCoL9kBqQcHBwcHKzUDowBvAQohPvU3fAQgHwCyAc8CKQMA5zMSezr7ULgFmDp/LzVQBgEGAi8FYQVgt8AFcTtlQhpCWEmfe5tmZ6IAExsDzQ8t+X8rBKtTAltbAn0jsy8Bl6utPWMDTR8Ei2kRANkDBrNHNysDBzECQWUAcwFpJ3kAiyUhAJ0BUb8AL3EfAbfNAz81KUsFWwF3YQZtAm0A+VEfAzEJDQBRSQCzAQBlAHsAM70GD/v3IZWHBwARKQAxALsjTwHZAeMPEzmXgIHwABIAGQA8AEUAQDt3gdvIEGcQZAkGTRFMdEIVEwK0D64L7REdDNkq09PgADSxB/MDWwfzA1sDWwfzB/MDWwfzA1sDWwNbA1scEvAi28gQZw9QBHUFlgWTBN4IiyZREYkHMAjaVBV0JhxPA00BBCMtSSQ7mzMTJUpMFE0LCAQ2SmyvfUADTzGzVP2QqgPTMlc5dAkGHnkSqAAyD3skNb1OhnpPcagKU0+2tYdJak5vAsY6sEAACikJm2/Dd1YGRRAfJ6kQ+ww3AbkBPw3xS9wE9QY/BM0fgRkdD9GVoAipLeEM8SbnLqWAXiP5KocF8Uv4POELUVFsD10LaQnnOmeBUgMlAREijwrhDT0IcRD3Cs1vDekRSQc9A9lJngCpBwULFR05FbkmFGKwCw05ewb/GvoLkyazEy17AAXXGiUGUQEtGwMA0y7rhbRaNVwgT2MGBwspI8sUrFAkDSlAu3hMGh8HGSWtApVDdEqLUToelyH6PEENai4XUYAH+TwJGVMLhTyiRq9FEhHWPpE9TCJNTDAEOYMsMyePCdMPiQy9fHYBXQklCbUMdRM1ERs3yQg9Bx0xlygnGQglRplgngT7owP3E9UDDwVDCUUHFwO5HDETMhUtBRGBKNsC9zbZLrcCk1aEARsFzw8pH+MQVEfkDu0InwJpA4cl7wAxFSUAGyKfCEdnAGOP3FMJLs8Iy2pwI3gDaxTrZRF3B5UOWwerHDcVwxzlcMxeD4YMKKezCV8BeQmdAWME5wgNNV+MpCBFZ1eLXBifIGVBQ14AAjUMaRWjRMGHfAKPD28SHwE5AXcHPQ0FAnsR8RFvEJkI74YINbkz/DopBFMhhyAVCisDU2zSCysm/Qz8bQGnEmYDEDRBd/Jnr2C6KBgBBx0yyUFkIfULlk/RDKAaxRhGVDIZ6AfDA/ca9yfuQVsGAwOnBxc6UTPyBMELbQiPCUMATQ6nGwfbGG4KdYzUATWPAbudA1uVhwJzkwY7Bw8Aaw+LBX3pACECqwinAAkA0wNbAD0CsQehAB0AiUUBQQMrMwEl6QKTA5cINc8BmTMB9y0EH8cMGQD7O25OAsO1AoBuZqYF4VwCkgJNOQFRKQQJUktVA7N15QDfAE8GF+NLARmvTs8e50cB43MvAMsA/wAJOQcJRQHRAfdxALsBYws1Caa3uQFR7S0AhwAZbwHbAo0A4QA5AIP1AVcAUQVd/QXXAlNNARU1HC9bZQG/AyMBNwERAH0Gz5GpzQsjBHEH1wIQHxXlAu8yB7kFAyLjE9FCyQK94lkAMhoKPAqrCqpgX2Q3CjV2PVQAEh+sPss/UgVVO1c7XDtXO1w7VztcO1c7XDtXO1wDm8Pmw+YKcF9JYe8Mqg3YRMw6TRPfYFVgNhPMLbsUxRXSJVoZQRrAJwkl6FUNDwgt12Y0CDA0eRfAAEMpbINFY4oeNApPHOtTlVT8LR8AtUumM7MNsBsZREQFS3XxYi4WEgomAmSFAmJGX1GzAV83JAKh+wJonAJmDQKfiDgfDwJmPwJmKgRyBIMDfxcDfpY5Cjl7GzmGOicnAmwhAjI6OA4CbcsCbbLzjgM3a0kvAWsA4gDlAE4JB5wMkQECD8YAEbkCdzMCdqZDAnlPRwJ4viFg30WyRvcCfEMCeswCfQ0CfPRIBEiBZygALxlJXEpfGRtK0ALRBQLQ0EsrA4hTA4fqRMmRNgLypV0HAwOyS9JMMSkH001QTbMCi0MCitzFHwshR2sJuwKOOwKOYESbhQKO3QKOYHxRuFM5AQ5S2FSJApP/ApMQAO0AIFUiVbNV1AosHymZijLleGpFPz0Cl6MC77ZYJawAXSkClpMCloCgAK1ZsFoNhVEAPwKWuQKWUlxIXNUCmc8CmWhczl0LHQKcnznGOqECnBoCn58CnryOACETNS4TAp31Ap6WALlBYThh8wKe1wKgcgGtAp6jIwKeUqljzGQrKS8CJ7MCJoICoP8CoFDbAqYzAqXSAqgDAIECp/ZogGi1AAdNaiBq1QKs5wKssgKtawKtBgJXIQJV4AKx5dsDH1JsmwKywRECsuwbbORtZ21MYwMl0QK2YD9DbpQDKUkCuGICuUsZArkue3A6cOUCvR0DLbYDMhUCvoxyBgMzdQK+HnMmc1MCw88CwwhzhnRPOUl05AM8qwEDPJ4DPcMCxYACxksCxhSNAshtVQLISALJUwLJMgJkoQLd1nh9ZXiyeSlL1AMYp2cGAmH4GfeVKHsPXpZevxUCz28Cz3AzT1fW9xejAMqxAs93AS3uA04Wfk8JAtwrAtuOAtJTA1JgA1NjAQUDVZCAjUMEzxrxZEl5A4LSg5EC2ssC2eKEFIRNp0ADhqkAMwNkEoZ1Xf0AWQLfaQLevHd7AuIz7RgB8zQrAfSfAfLWiwLr9wLpdH0DAur9AuroAP1LAb0C7o0C66CWrpcHAu5DA4XkmH1w5HGlAvMHAG0DjhqZlwL3FwORcgOSiwL3nAL53QL4apogmq+/O5siA52HAv7+AR8APZ8gAZ+3AwWRA6ZuA6bdANXJAwZuoYyiCQ0DDE0BEwEjB3EGZb1rCQC/BG/DFY8etxEAG3k9ACcDNxJRA42DAWcrJQCM8wAlAOanC6OVCLsGI6fJBgCvBRnDBvElRUYFFoAFcD9GSDNCKUK8X3kZX8QAls0FOgCQVCGbwTsuYDoZutcONxjOGJHJ/gVfBWAFXwVgBWsFYAVfBWAFXwVgBV8FYAVfBWBOHQjfjW8KCgoKbF7xMwTRA7kGN8PDAMMEr8MA70gxFroFTj5xPnhCR0K+X30/X/AAWBkzswCNBsxzzASm70aCRS4rDDMeLz49fnXfcsH5GcoscQFz13Y4HwVnBXLJycnACNdRYwgICAqEXoWTxgA7P4kACxbZBu21Kw0AjMsTAwkVAOVtJUUsJ1JCuULESUArXy9gPi9AKwnJRQYKTD9LPoA+iT54PnkCkULEUUpDX9NWV3JVEjQAc1w3A3IBE3YnX+g7QiMJb6MKaiszRCUuQrNCxDPMCcwEX9EWJzYREBEEBwIHKn6l33JCNVIfybPJtAltydPUCmhBZw/tEKsZAJOVJU1CLRuxbUHOQAo7P0s+eEJHHA8SJVRPdGM0NVrpvBoKhfUlM0JHHGUQUhEWO1xLSj8MO0ucNAqJIzVCRxv9EFsqKyA4OQgNj2nwZgp5ZNFgE2A1K3YHS2AhQQojJmC7DgpzGG1WYFUZCQYHZO9gHWCdYIVgu2BTYJlwFh8GvRbcXbG8YgtDHrMBwzPVyQonHQgkCyYBgQJ0Ajc4nVqIAwGSCsBPIgDsK3SWEtIVBa5N8gGjAo+kVwVIZwD/AEUSCDweX4ITrRQsJ8K3TwBXFDwEAB0TvzVcAtoTS20RIwDgVgZ9BBImYgA5AL4Coi8LFnezOkCnIQFjAY4KBAPh9RcGsgZSBsEAJctdsWIRu2kTkQstRw7DAcMBKgpPBGIGMDAwKCYnKTQaLg4AKRSVAFwCdl+YUZ0JdicFD3lPAdt1F9ZZKCGxuE3yBxkFVGcA/wBFEgiCBwAOLHQSjxOtQDg1z7deFRMAZ8QTAGtKb1ApIiPHADkAvgKiLy1DFtYCmBiDAlDDWNB0eo7fpaMO/aEVRRv0ATEQZBIODyMEAc8JQhCbDRgzFD4TAEMAu9YBCgCsAOkAm5I3ABwAYxvONnR+MhXJAxgKQyxL2+kkJhMbhQKDBMkSsvF0AD9BNQ6uQC7WqSQHwxEAEEIu1hkhAH2z4iQPwyJPHNWpdyYBRSpnJALzoBAEVPPsH20MxA0CCEQKRgAFyAtFAlMNwwjEDUQJRArELtapMg7DDZgJIw+TGukEIwvDFkMAqAtDEMMMBhioe+QAO3MMRAACrgnEBSPY9Q0FDnbSBoMAB8MSYxkSxAEJAPIJAAB8FWMOFtMc/HcXwxhDAC7DAvOowwAewwJdKDKHAAHDAALrFUQVwwAbwyvzpWMWv8wA/ABpAy++bcYDUKPD0KhDCwKmJ1MAAmMA5+UZwxAagwipBRL/eADfw6fDGOMCGsOjk3l6BwOpo4sAEsMOGxMAA5sAbcMOAAvDp0MJGkMDwgipnNIPAwfIqUMGAOGDAAPzABXDAAcDAAnDAGmTABrDAA7DChjDjnEWAwABYwAOcwAuUyYABsMAF8MIKQANUgC6wy4AA8MADqMq8wCyYgAcIwAB8wqpAAXOCx0V4wAHowBCwwEKAGnDAAuDAB3DAAjDCakABdIAbqcZ3QCZCCkABdIAAAFDAAfjAB2jCCkABqIACYMAGzMAbSMA5sOIAAhjAAhDABTDBAkpAAbSAOOTAAlDC6kOzPtnAAdDAG6kQFAATwAKwwwAA0MACbUDPwAHIwAZgwACE6cDAAojAApDAAoDp/MGwwAJIwADEwAQQwgAFEMAEXMAD5MADfMADcMAGRMOFiMAFUMAbqMWuwHDAMIAE0MLAGkzEgDhUwACQwAEWgAXgwUjAAbYABjDBSYBgzBaAEFNALcQBxUMegAwMngBrA0IZgJ0KxQHBREPd1N0ZzKRJwaIHAZqNT4DqQq8BwngAB4DAwt2AX56T1ocKQNXAh1GATQGC3tOxYNagkgAMQA5CQADAQEAWxLjAIOYNAEzAH7tFRk6TglSAF8NAAlYAQ+S1ACAQwQorQBiAN4dAJ1wPyeTANVzuQDX3AIeEMp9eyMgXiUAEdkBkJizKltbVVAaRMqRAAEAhyQ/SDEz6BmfVwB6ATEsOClKIRcDOF0E/832AFNt5AByAnkCRxGCOs94NjXdAwINGBonDBwPALW2AwICAgAAAAAAAAYDBQMDARrUAwAtAAAAAgEGBgYGBgYFBQUFBQUEBQYHCAkEBQUFBQQAAAICAAAAIgCNAJAAlT0A6gC7ANwApEQAwgCyAK0AqADuAKYA2gCjAOcBCAEDAMcAgQBiANIA1AEDAN4A8gCQAKkBMQDqAN8A3AsBCQ8yO9ra2tq8xuLT1tRJOB0BUgFcNU0BWgFpAWgBWwFMUUlLbhMBUxsNEAs6PhMOACcUKy0vMj5AQENDQ0RFFEYGJFdXV1dZWVhZL1pbXVxcI2NnZ2ZoZypsbnZ1eHh4eHh4enp6enp6enp6enp8fH18e2IARPIASQCaAHgAMgBm+ACOAFcAVwA3AnbvAIsABfj4AGQAk/IAnwBPAGIAZP//sACFAIUAaQBWALEAJAC2AIMCQAJDAPwA5wD+AP4A6AD/AOkA6QDoAOYALwJ7AVEBQAE+AVQBPgE+AT4BOQE4ATgBOAEcAVgXADEQCAEAUx8SHgsdHhYAjgCWAKYAUQBqIAIxAHYAbwCXAxUDJzIDIUlGTzEAkQJPAMcCVwKkAMAClgKWApYClgKWApYCiwKWApYClgKWApYClgKVApUCmAKgApcClgKWApQClAKUApQCkgKVAnUB1AKXAp8ClgKWApUeAIETBQD+DQOfAmECOh8BVBg9AuIZEjMbAU4/G1WZAXusRAFpYQEFA0FPAQYAmTEeIJdyADFoAHEANgCRA5zMk/C2jGINwjMWygIZCaXdfDILBCs5dAE7YnQBugDlhoiHhoiGiYqKhouOjIaNkI6Ij4qQipGGkoaThpSSlYaWhpeKmIaZhpqGm4aci52QnoqfhuIC4XTpAt90AIp0LHSoAIsAdHQEQwRABEIERQRDBEkERgRBBEcESQRIBEQERgRJAJ5udACrA490ALxuAQ10ANFZdHQA13QCFHQA/mJ0AP4BIQD+APwA/AD9APwDhGZ03ASMK23HAP4A/AD8AP0A/CR0dACRYnQA/gCRASEA/gCRAvQA/gCRA4RmdNwEjCttxyR0AP9idAEhAP4A/gD8APwA/QD8AP8A/AD8AP0A/AOEZnTcBIwrbcckdHQAkWJ0ASEA/gCRAP4AkQL0AP4AkQOEZnTcBIwrbcckdAJLAT50AlIBQXQCU8l0dAJfdHQDpgL0A6YDpgOnA6cDpwOnA4RmdNwEjCttxyR0dACRYnQBIQOmAJEDpgCRAvQDpgCRA4RmdNwEjCttxyR0BDh0AJEEOQCRDpU5dSgCADR03gV2CwArdAEFAM5iCnR0AF1iAAYcOgp0dACRCnQAXAEIwWZ0CnRmdHQAkWZ0CnRmdEXgAFF03gp0dEY0tlT2u3SOAQTwscwhjZZKrhYcBSfFp9XNbKiVDOD2b+cpe4/Z17mQnbtzzhaeQtE2GGj0IDNTjRUSyTxxw/RPHW/+vS7d1NfRt9z9QPZg4X7QFfhCnkvgNPIItOsC2eV6hPannZNHlZ9xrwZXIMOlu3jSoQSq78WEjwLjw1ELSlF1aBvfzwk5ZX7AUvQzjPQKbDuQ+sm4wNOp4A6AdVuRS0t1y/DZpg4R6m7FNjM9HgvW7Bi88zaMjOo6lM8wtBBdj8LP4ylv3zCXPhebMKJc066o9sF71oFW/8JXu86HJbwDID5lzw5GWLR/LhT0Qqnp2JQxNZNfcbLIzPy+YypqRm/lBmGmex+82+PisxUumSeJkALIT6rJezxMH+CTJmQtt5uwTVbL3ptmjDUQzlSIvWi8Tl7ng1NpuRn1Ng4n14Qc+3Iil7OwkvNWogLSPkn3pihIFytyIGmMhOe3n1tWsuMy9BdKyqF4Z3v2SgggTL9KVvMXPnCbRe+oOuFFP3HejBG/w9gvmfNYvg6JuWia2lcSSN1uIjBktzoIazOHPJZ7kKHPz8mRWVdW3lA8WGF9dQF6Bm673boov3BUWDU2JNcahR23GtfHKLOz/viZ+rYnZFaIznXO67CYEJ1fXuTRpZhYZkKe54xeoagkNGLs+NTZHE0rX45/XvQ2RGADX6vcAvdxIUBV27wxGm2zjZo4X3ILgAlrOFheuZ6wtsvaIj4yLY7qqawlliaIcrz2G+c3vscAnCkCuMzMmZvMfu9lLwTvfX+3cVSyPdN9ZwgDZhfjRgNJcLiJ67b9xx8JHswprbiE3v9UphotAPIgnXVIN5KmMc0piXhc6cChPnN+MRhG9adtdttQTTwSIpl8I4/j//d3sz1326qTBTpPRM/Hgh3kzqEXs8ZAk4ErQhNO8hzrQ0DLkWMA/N+91tn2MdOJnWC2FCZehkQrwzwbKOjhvZsbM95QoeL9skYyMf4srVPVJSgg7pOLUtr/n9eT99oe9nLtFRpjA9okV2Kj8h9k5HaC0oivRD8VyXkJ81tcd4fHNXPCfloIQasxsuO18/46dR2jgul/UIet2G0kRvnyONMKhHs6J26FEoqSqd+rfYjeEGwHWVDpX1fh1jBBcKGMqRepju9Y00mDVHC+Xdij/j44rKfvfjGinNs1jO/0F3jB83XCDINN/HB84axlP+3E/klktRo+vl3U/aiyMJbIodE1XSsDn6UAzIoMtUObY2+k/4gY/l+AkZJ5Sj2vQrkyLm3FoxjhDX+31UXBFf9XrAH31fFqoBmDEZvhvvpnZ87N+oZEu7U9O/nnk+QWj3x8uyoRbEnf+O5UMr9i0nHP38IF5AvzrBW8YWBUR0mIAzIvndQq9N3v/Jto3aPjPXUPl8ASdPPyAp7jENf8bk7VMM9ol9XGmlBmeDMuGqt+WzuL6CXAxXjIhCPM5vACchgMJ/8XBGLO/D1isVvGhwwHHr1DLaI5mn2Jr/b1pUD90uciDaS8cXNDzCWvNmT/PhQe5e8nTnnnkt8Ds/SIjibcum/fqDhKopxAY8AkSrPn+IGDEKOO+U3XOP6djFs2H5N9+orhOahiQk5KnEUWa+CzkVzhp8bMHRbg81qhjjXuIKbHjSLSIBKWqockGtKinY+z4/RdBUF6pcc3JmnlxVcNgrI4SEzKUZSwcD2QCyxzKve+gAmg6ZuSRkpPFa6mfThu7LJNu3H5K42uCpNvPAsoedolKV/LHe/eJ+BbaG5MG0NaSGVPRUmNFMFFSSpXEcXwbVh7UETOZZtoVNRGOIbbkig3McEtR68cG0RZAoJevWYo7Dg/lZ1CQzblWeUvVHmr8fY4Nqd9JJiH/zEX24mJviH60fAyFr0A3c4bC1j3yZU60VgJxXn8JgJXLUIsiBnmKmMYz+7yBQFBvqb2eYnuW59joZBf56/wXvWIR4R8wTmV80i1mZy+S4+BUES+hzjk0uXpC///z/IlqHZ1monzlXp8aCfhGKMti73FI1KbL1q6IKO4fuBuZ59gagjn5xU79muMpHXg6S+e+gDM/U9BKLHbl9l6o8czQKl4RUkJJiqftQG2i3BMg/TQlUYFkJDYBOOvAugYuzYSDnZbDDd/aSd9x0Oe6F+bJcHfl9+gp6L5/TgA+BdFFovbfCrQ40s5vMPw8866pNX8zyFGeFWdxIpPVp9Rg1UPOVFbFZrvaFq/YAzHQgqMWpahMYfqHpmwXfHL1/kpYmGuHFwT55mQu0dylfNuq2Oq0hTMCPwqfxnuBIPLXfci4Y1ANy+1CUipQxld/izVh16WyG2Q0CQQ9NqtAnx1HCHwDj7sYxOSB0wopZSnOzxQOcExmxrVTF2BkOthVpGfuhaGECfCJpJKpjnihY+xOT2QJxN61+9K6QSqtv2Shr82I3jgJrqBg0wELFZPjvHpvzTtaJnLK6Vb97Yn933koO/saN7fsjwNKzp4l2lJVx2orjCGzC/4ZL4zCver6aQYtC5sdoychuFE6ufOiog+VWi5UDkbmvmtah/3aArEBIi39s5ILUnlFLgilcGuz9CQshEY7fw2ouoILAYPVT/gyAIq3TFAIwVsl+ktkRz/qGfnCDGrm5gsl/l9QdvCWGsjPz3dU7XuqKfdUrr/6XIgjp4rey6AJBmCmUJMjITHVdFb5m1p+dLMCL8t55zD42cmftmLEJC0Da04YiRCVUBLLa8D071/N5UBNBXDh0LFsmhV/5B5ExOB4j3WVG/S3lfK5o+V6ELHvy6RR9n4ac+VsK4VE4yphPvV+kG9FegTBH4ZRXL2HytUHCduJazB/KykjfetYxOXTLws267aGOd+I+JhKP//+VnXmS90OD/jvLcVu0asyqcuYN1mSb6XTlCkqv1vigZPIYwNF/zpWcT1GR/6aEIRjkh0yhg4LXJfaGobYJTY4JI58KiAKgmmgAKWdl5nYCeLqavRJGQNuYuZtZFGx+IkI4w4NS2xwbetNMunOjBu/hmKCI/w7tfiiyUd//4rbTeWt4izBY8YvGIN6vyKYmP/8X8wHKCeN+WRcKM70+tXKNGyevU9H2Dg5BsljnTf8YbsJ1TmMs74Ce2XlHisleguhyeg44rQOHZuw/6HTkhnnurK2d62q6yS7210SsAIaR+jXMQA+svkrLpsUY+F30Uw89uOdGAR6vo4FIME0EfVVeHTu6eKicfhSqOeXJhbftcd08sWEnNUL1C9fnprTgd83IMut8onVUF0hvqzZfHduPjbjwEXIcoYmy+P6tcJZHmeOv6VrvEdkHDJecjHuHeWANe79VG662qTjA/HCvumVv3qL+LrOcpqGps2ZGwQdFJ7PU4iuyRlBrwfO+xnPyr47s2cXVbWzAyznDiBGjCM3ksxjjqM62GE9C8f5U38kB3VjtabKp/nRdvMESPGDG90bWRLAt1Qk5DyLuazRR1YzdC1c+hZXvAWV8xA72S4A8B67vjVhbba3MMop293FeEXpe7zItMWrJG/LOH9ByOXmYnNJfjmfuX9KbrpgLOba4nZ+fl8Gbdv/ihv+6wFGKHCYrVwmhFC0J3V2bn2tIB1wCc1CST3d3X2OyxhguXcs4sm679UngzofuSeBewMFJboIQHbUh/m2JhW2hG9DIvG2t7yZIzKBTz9wBtnNC+2pCRYhSIuQ1j8xsz5VvqnyUIthvuoyyu7fNIrg/KQUVmGQaqkqZk/Vx5b33/gsEs8yX7SC1J+NV4icz6bvIE7C5G6McBaI8rVg56q5QBJWxn/87Q1sPK4+sQa8fLU5gXo4paaq4cOcQ4wR0VBHPGjKh+UlPCbA1nLXyEUX45qZ8J7/Ln4FPJE2TdzD0Z8MLSNQiykMMmSyOCiFfy84Rq60emYB2vD09KjYwsoIpeDcBDTElBbXxND72yhd9pC/1CMid/5HUMvAL27OtcIJDzNKpRPNqPOpyt2aPGz9QWIs9hQ9LiX5s8m9hjTUu/f7MyIatjjd+tSfQ3ufZxPpmJhTaBtZtKLUcfOCUqADuO+QoH8B9v6U+P0HV1GLQmtoNFTb3s74ivZgjES0qfK+8RdGgBbcCMSy8eBvh98+et1KIFqSe1KQPyXULBMTsIYnysIwiZBJYdI20vseV+wuJkcqGemehKjaAb9L57xZm3g2zX0bZ2xk/fU+bCo7TlnbW7JuF1YdURo/2Gw7VclDG1W7LOtas2LX4upifZ/23rzpsnY/ALfRgrcWP5hYmV9VxVOQA1fZvp9F2UNU+7d7xRyVm5wiLp3/0dlV7vdw1PMiZrbDAYzIVqEjRY2YU03sJhPnlwIPcZUG5ltL6S8XCxU1eYS5cjr34veBmXAvy7yN4ZjArIG0dfD/5UpBNlX1ZPoxJOwyqRi3wQWtOzd4oNKh0LkoTm8cwqgIfKhqqGOhwo71I+zXnMemTv2B2AUzABWyFztGgGULjDDzWYwJUVBTjKCn5K2QGMK1CQT7SzziOjo+BhAmqBjzuc3xYym2eedGeOIRJVyTwDw37iCMe4g5Vbnsb5ZBdxOAnMT7HU4DHpxWGuQ7GeiY30Cpbvzss55+5Km1YsbD5ea3NI9QNYIXol5apgSu9dZ8f8xS5dtHpido5BclDuLWY4lhik0tbJa07yJhH0BOyEut/GRbYTS6RfiTYWGMCkNpfSHi7HvdiTglEVHKZXaVhezH4kkXiIvKopYAlPusftpE4a5IZwvw1x/eLvoDIh/zpo9FiQInsTb2SAkKHV42XYBjpJDg4374XiVb3ws4qM0s9eSQ5HzsMU4OZJKuopFjBM+dAZEl8RUMx5uU2N486Kr141tVsGQfGjORYMCJAMsxELeNT4RmWjRcpdTGBwcx6XN9drWqPmJzcrGrH4+DRc7+n1w3kPZwu0BkNr6hQrqgo7JTB9A5kdJ/H7P4cWBMwsmuixAzJB3yrQpnGIq90lxAXLzDCdn1LPibsRt7rHNjgQBklRgPZ8vTbjXdgXrTWQsK5MdrXXQVPp0Rinq3frzZKJ0qD6Qhc40VzAraUXlob1gvkhK3vpmHgI6FRlQZNx6eRqkp0zy4AQlX813fAPtL3jMRaitGFFjo0zmErloC+h+YYdVQ6k4F/epxAoF0BmqEoKNTt6j4vQZNQ2BoqF9Vj53TOIoNmDiu9Xp15RkIgQIGcoLpfoIbenzpGUAtqFJp5W+LLnx38jHeECTJ/navKY1NWfN0sY1T8/pB8kIH3DU3DX+u6W3YwpypBMYOhbSxGjq84RZ84fWJow8pyHqn4S/9J15EcCMsXqrfwyd9mhiu3+rEo9pPpoJkdZqHjra4NvzFwuThNKy6hao/SlLw3ZADUcUp3w3SRVfW2rhl80zOgTYnKE0Hs2qp1J6H3xqPqIkvUDRMFDYyRbsFI3M9MEyovPk8rlw7/0a81cDVLmBsR2ze2pBuKb23fbeZC0uXoIvDppfTwIDxk1Oq2dGesGc+oJXWJLGkOha3CX+DUnzgAp9HGH9RsPZN63Hn4RMA5eSVhPHO+9RcRb/IOgtW31V1Q5IPGtoxPjC+MEJbVlIMYADd9aHYWUIQKopuPOHmoqSkubnAKnzgKHqgIOfW5RdAgotN6BN+O2ZYHkuemLnvQ8U9THVrS1RtLmKbcC7PeeDsYznvqzeg6VCNwmr0Yyx1wnLjyT84BZz3EJyCptD3yeueAyDWIs0L2qs/VQ3HUyqfrja0V1LdDzqAikeWuV4sc7RLIB69jEIBjCkyZedoUHqCrOvShVzyd73OdrJW0hPOuQv2qOoHDc9xVb6Yu6uq3Xqp2ZaH46A7lzevbxQEmfrzvAYSJuZ4WDk1Hz3QX1LVdiUK0EvlAGAYlG3Md30r7dcPN63yqBCIj25prpvZP0nI4+EgWoFG95V596CurXpKRBGRjQlHCvy5Ib/iW8nZJWwrET3mgd6mEhfP4KCuaLjopWs7h+MdXFdIv8dHQJgg1xi1eYqB0uDYjxwVmri0Sv5XKut/onqapC+FQiC2C1lvYJ9MVco6yDYsS3AANUfMtvtbYI2hfwZatiSsnoUeMZd34GVjkMMKA+XnjJpXgRW2SHTZplVowPmJsvXy6w3cfO1AK2dvtZEKTkC/TY9LFiKHCG0DnrMQdGm2lzlBHM9iEYynH2UcVMhUEjsc0oDBTgo2ZSQ1gzkAHeWeBXYFjYLuuf8yzTCy7/RFR81WDjXMbq2BOH5dURnxo6oivmxL3cKzKInlZkD31nvpHB9Kk7GfcfE1t+1V64b9LtgeJGlpRFxQCAqWJ5DoY77ski8gsOEOr2uywZaoO/NGa0X0y1pNQHBi3b2SUGNpcZxDT7rLbBf1FSnQ8guxGW3W+36BW0gBje4DOz6Ba6SVk0xiKgt+q2JOFyr4SYfnu+Ic1QZYIuwHBrgzr6UvOcSCzPTOo7D6IC4ISeS7zkl4h+2VoeHpnG/uWR3+ysNgPcOIXQbv0n4mr3BwQcdKJxgPSeyuP/z1Jjg4e9nUvoXegqQVIE30EHx5GHv+FAVUNTowYDJgyFhf5IvlYmEqRif6+WN1MkEJmDcQITx9FX23a4mxy1AQRsOHO/+eImX9l8EMJI3oPWzVXxSOeHU1dUWYr2uAA7AMb+vAEZSbU3qob9ibCyXeypEMpZ6863o6QPqlqGHZkuWABSTVNd4cOh9hv3qEpSx2Zy/DJMP6cItEmiBJ5PFqQnDEIt3NrA3COlOSgz43D7gpNFNJ5MBh4oFzhDPiglC2ypsNU4ISywY2erkyb1NC3Qh/IfWj0eDgZI4/ln8WPfBsT3meTjq1Uqt1E7Zl/qftqkx6aM9KueMCekSnMrcHj1CqTWWzEzPsZGcDe3Ue4Ws+XFYVxNbOFF8ezkvQGR6ZOtOLU2lQEnMBStx47vE6Pb7AYMBRj2OOfZXfisjJnpTfSNjo6sZ6qSvNxZNmDeS7Gk3yYyCk1HtKN2UnhMIjOXUzAqDv90lx9O/q/AT1ZMnit5XQe9wmQxnE/WSH0CqZ9/2Hy+Sfmpeg8RwsHI5Z8kC8H293m/LHVVM/BA7HaTJYg5Enk7M/xWpq0192ACfBai2LA/qrCjCr6Dh1BIMzMXINBmX96MJ5Hn2nxln/RXPFhwHxUmSV0EV2V0jm86/dxxuYSU1W7sVkEbN9EzkG0QFwPhyHKyb3t+Fj5WoUUTErcazE/N6EW6Lvp0d//SDPj7EV9UdJN+Amnf3Wwk3A0SlJ9Z00yvXZ7n3z70G47Hfsow8Wq1JXcfwnA+Yxa5mFsgV464KKP4T31wqIgzFPd3eCe3j5ory5fBF2hgCFyVFrLzI9eetNXvM7oQqyFgDo4CTp/hDV9NMX9JDHQ/nyHTLvZLNLF6ftn2OxjGm8+PqOwhxnPHWipkE/8wbtyri80Sr7pMNkQGMfo4ZYK9OcCC4ESVFFbLMIvlxSoRqWie0wxqnLfcLSXMSpMMQEJYDVObYsXIQNv4TGNwjq1kvT1UOkicTrG3IaBZ3XdScS3u8sgeZPVpOLkbiF940FjbCeNRINNvDbd01EPBrTCPpm12m43ze1bBB59Ia6Ovhnur/Nvx3IxwSWol+3H2qfCJR8df6aQf4v6WiONxkK+IqT4pKQrZK/LplgDI/PJZbOep8dtbV7oCr6CgfpWa8NczOkPx81iSHbsNhVSJBOtrLIMrL31LK9TqHqAbAHe0RLmmV806kRLDLNEhUEJfm9u0sxpkL93Zgd6rw+tqBfTMi59xqXHLXSHwSbSBl0EK0+loECOPtrl+/nsaFe197di4yUgoe4jKoAJDXc6DGDjrQOoFDWZJ9HXwt8xDrQP+7aRwWKWI1GF8s8O4KzxWBBcwnl3vnl1Oez3oh6Ea1vjR7/z7DDTrFtqU2W/KAEzAuXDNZ7MY73MF216dzdSbWmUp4lcm7keJfWaMHgut9x5C9mj66Z0lJ+yhsjVvyiWrfk1lzPOTdhG15Y7gQlXtacvI7qv/XNSscDwqkgwHT/gUsD5yB7LdRRvJxQGYINn9hTpodKFVSTPrtGvyQw+HlRFXIkodErAGu9Iy1YpfSPc3jkFh5CX3lPxv7aqjE/JAfTIpEjGb/H7MO0e2vsViSW1qa/Lmi4/n4DEI3g7lYrcanspDfEpKkdV1OjSLOy0BCUqVoECaB55vs06rXl4jqmLsPsFM/7vYJ0vrBhDCm/00A/H81l1uekJ/6Lml3Hb9+NKiLqATJmDpyzfYZFHumEjC662L0Bwkxi7E9U4cQA0XMVDuMYAIeLMPgQaMVOd8fmt5SflFIfuBoszeAw7ow5gXPE2Y/yBc/7jExARUf/BxIHQBF5Sn3i61w4z5xJdCyO1F1X3+3ax+JSvMeZ7S6QSKp1Fp/sjYz6Z+VgCZzibGeEoujryfMulH7Rai5kAft9ebcW50DyJr2uo2z97mTWIu45YsSnNSMrrNUuG1XsYBtD9TDYzQffKB87vWbkM4EbPAFgoBV4GQS+vtFDUqOFAoi1nTtmIOvg38N4hT2Sn8r8clmBCXspBlMBYTnrqFJGBT3wZOzAyJDre9dHH7+x7qaaKDOB4UQALD5ecS0DE4obubQEiuJZ0EpBVpLuYcce8Aa4PYd/V4DLDAJBYKQPCWTcrEaZ5HYbJi11Gd6hjGom1ii18VHYnG28NKpkz2UKVPxlhYSp8uZr367iOmoy7zsxehW9wzcy2zG0a80PBMCRQMb32hnaHeOR8fnNDzZhaNYhkOdDsBUZ3loDMa1YP0uS0cjUP3b/6DBlqmZOeNABDsLl5BI5QJups8uxAuWJdkUB/pO6Zax6tsg7fN5mjjDgMGngO+DPcKqiHIDbFIGudxtPTIyDi9SFMKBDcfdGQRv41q1AqmxgkVfJMnP8w/Bc7N9/TR6C7mGObFqFkIEom8sKi2xYqJLTCHK7cxzaZvqODo22c3wisBCP4HeAgcRbNPAsBkNRhSmD48dHupdBRw4mIvtS5oeF6zeT1KMCyhMnmhpkFAGWnGscoNkwvQ8ZM5lE/vgTHFYL99OuNxdFBxTEDd5v2qLR8y9WkXsWgG6kZNndFG+pO/UAkOCipqIhL3hq7cRSdrCq7YhUsTocEcnaFa6nVkhnSeRYUA1YO0z5itF9Sly3VlxYDw239TJJH6f3EUfYO5lb7bcFcz8Bp7Oo8QmnsUHOz/fagVUBtKEw1iT88j+aKkv8cscKNkMxjYr8344D1kFoZ7/td1W6LCNYN594301tUGRmFjAzeRg5vyoM1F6+bJZ/Q54jN/k8SFd3DxPTYaAUsivsBfgTn7Mx8H2SpPt4GOdYRnEJOH6jHM2p6SgB0gzIRq6fHxGMmSmqaPCmlfwxiuloaVIitLGN8wie2CDWhkzLoCJcODh7KIOAqbHEvXdUxaS4TTTs07Clzj/6GmVs9kiZDerMxEnhUB6QQPlcfqkG9882RqHoLiHGBoHfQuXIsAG8GTAtao2KVwRnvvam8jo1e312GQAKWEa4sUVEAMG4G6ckcONDwRcg1e2D3+ohXgY4UAWF8wHKQMrSnzCgfFpsxh+aHXMGtPQroQasRY4U6UdG0rz1Vjbka0MekOGRZQEvqQFlxseFor8zWFgHek3v29+WqN6gaK5gZOTOMZzpQIC1201LkMCXild3vWXSc5UX9xcFYfbRPzGFa1FDcPfPB/jUEq/FeGt419CI3YmBlVoHsa4KdcwQP5ZSwHHhFJ7/Ph/Rap/4vmG91eDwPP0lDfCDRCLszTqfzM71xpmiKi2HwS4WlqvGNwtvwF5Dqpn6KTq8ax00UMPkxDcZrEEEsIvHiUXXEphdb4GB4FymlPwBz4Gperqq5pW7TQ6/yNRhW8VT5NhuP0udlxo4gILq5ZxAZk8ZGh3g4CqxJlPKY7AQxupfUcVpWT5VItp1+30UqoyP4wWsRo3olRRgkWZZ2ZN6VC3OZFeXB8NbnUrSdikNptD1QiGuKkr8EmSR/AK9Rw+FF3s5uwuPbvHGiPeFOViltMK7AUaOsq9+x9cndk3iJEE5LKZRlWJbKOZweROzmPNVPkjE3K/TyA57Rs68TkZ3MR8akKpm7cFjnjPd/DdkWjgYoKHSr5Wu5ssoBYU4acRs5g2DHxUmdq8VXOXRbunD8QN0LhgkssgahcdoYsNvuXGUK/KXD/7oFb+VGdhqIn02veuM5bLudJOc2Ky0GMaG4W/xWBxIJcL7yliJOXOpx0AkBqUgzlDczmLT4iILXDxxtRR1oZa2JWFgiAb43obrJnG/TZC2KSK2wqOzRZTXavZZFMb1f3bXvVaNaK828w9TO610gk8JNf3gMfETzXXsbcvRGCG9JWQZ6+cDPqc4466Yo2RcKH+PILeKOqtnlbInR3MmBeGG3FH10yzkybuqEC2HSQwpA0An7d9+73BkDUTm30bZmoP/RGbgFN+GrCOfADgqr0WbI1a1okpFms8iHYw9hm0zUvlEMivBRxModrbJJ+9/p3jUdQQ9BCtQdxnOGrT5dzRUmw0593/mbRSdBg0nRvRZM5/E16m7ZHmDEtWhwvfdZCZ8J8M12W0yRMszXamWfQTwIZ4ayYktrnscQuWr8idp3PjT2eF/jmtdhIfcpMnb+IfZY2FebW6UY/AK3jP4u3Tu4zE4qlnQgLFbM19EBIsNf7KhjdbqQ/D6yiDb+NlEi2SKD+ivXVUK8ib0oBo366gXkR8ZxGjpJIDcEgZPa9TcYe0TIbiPl/rPUQDu3XBJ9X/GNq3FAUsKsll57DzaGMrjcT+gctp+9MLYXCq+sqP81eVQ0r9lt+gcQfZbACRbEjvlMskztZG8gbC8Qn9tt26Q7y7nDrbZq/LEz7kR6Jc6pg3N9rVX8Y5MJrGlML9p9lU4jbTkKqCveeZUJjHB03m2KRKR2TytoFkTXOLg7keU1s1lrPMQJpoOKLuAAC+y1HlJucU6ysB5hsXhvSPPLq5J7JtnqHKZ4vYjC4Vy8153QY+6780xDuGARsGbOs1WqzH0QS765rnSKEbbKlkO8oI/VDwUd0is13tKpqILu1mDJFNy/iJAWcvDgjxvusIT+PGz3ST/J9r9Mtfd0jpaGeiLYIqXc7DiHSS8TcjFVksi66PEkxW1z6ujbLLUGNNYnzOWpH8BZGK4bCK7iR+MbIv8ncDAz1u4StN3vTTzewr9IQjk9wxFxn+6N1ddKs0vffJiS08N3a4G1SVrlZ97Q/M+8G9fe5AP6d9/Qq4WRnORVhofPIKEdCr3llspUfE0oKIIYoByBRPh+bX1HLS3JWGJRhIvE1aW4NTd8ePi4Z+kXb+Z8snYfSNcqijhAgVsx4RCM54cXUiYkjeBmmC4ajOHrChoELscJJC7+9jjMjw5BagZKlgRMiSNYz7h7vvZIoQqbtQmspc0cUk1G/73iXtSpROl5wtLgQi0mW2Ex8i3WULhcggx6E1LMVHUsdc9GHI1PH3U2Ko0PyGdn9KdVOLm7FPBui0i9a0HpA60MsewVE4z8CAt5d401Gv6zXlIT5Ybit1VIA0FCs7wtvYreru1fUyW3oLAZ/+aTnZrOcYRNVA8spoRtlRoWflsRClFcgzkqiHOrf0/SVw+EpVaFlJ0g4Kxq1MMOmiQdpMNpte8lMMQqm6cIFXlnGbfJllysKDi+0JJMotkqgIxOSQgU9dn/lWkeVf8nUm3iwX2Nl3WDw9i6AUK3vBAbZZrcJpDQ/N64AVwjT07Jef30GSSmtNu2WlW7YoyW2FlWfZFQUwk867EdLYKk9VG6JgEnBiBxkY7LMo4YLQJJlAo9l/oTvJkSARDF/XtyAzM8O2t3eT/iXa6wDN3WewNmQHdPfsxChU/KtLG2Mn8i4ZqKdSlIaBZadxJmRzVS/o4yA65RTSViq60oa395Lqw0pzY4SipwE0SXXsKV+GZraGSkr/RW08wPRvqvSUkYBMA9lPx4m24az+IHmCbXA+0faxTRE9wuGeO06DIXa6QlKJ3puIyiuAVfPr736vzo2pBirS+Vxel3TMm3JKhz9o2ZoRvaFVpIkykb0Hcm4oHFBMcNSNj7/4GJt43ogonY2Vg4nsDQIWxAcorpXACzgBqQPjYsE/VUpXpwNManEru4NwMCFPkXvMoqvoeLN3qyu/N1eWEHttMD65v19l/0kH2mR35iv/FI+yjoHJ9gPMz67af3Mq/BoWXqu3rphiWMXVkmnPSEkpGpUI2h1MThideGFEOK6YZHPwYzMBvpNC7+ZHxPb7epfefGyIB4JzO9DTNEYnDLVVHdQyvOEVefrk6Uv5kTQYVYWWdqrdcIl7yljwwIWdfQ/y+2QB3eR/qxYObuYyB4gTbo2in4PzarU1sO9nETkmj9/AoxDA+JM3GMqQtJR4jtduHtnoCLxd1gQUscHRB/MoRYIEsP2pDZ9KvHgtlk1iTbWWbHhohwFEYX7y51fUV2nuUmnoUcqnWIQAAgl9LTVX+Bc0QGNEhChxHR4YjfE51PUdGfsSFE6ck7BL3/hTf9jLq4G1IafINxOLKeAtO7quulYvH5YOBc+zX7CrMgWnW47/jfRsWnJjYYoE7xMfWV2HN2iyIqLI',
          )
          const e = () => ht(t),
            n = () => new Set(e()),
            r = (t, e) => e.forEach((e) => t.add(e))
          ;(Qt = new Map(pt(t))),
            (Vt = n()),
            (Wt = e()),
            (Jt = new Set(e().map((t) => Wt[t]))),
            (Wt = new Set(Wt)),
            (Kt = n()),
            (qt = n())
          let o = dt(t),
            i = t()
          const a = () => {
            let t = new Set()
            return e().forEach((e) => r(t, o[e])), r(t, e()), t
          }
          ;(Zt = gt((e) => {
            let n = gt(t).map((t) => t + 96)
            if (n.length) {
              let r = e >= i
              return (
                (n[0] -= 32),
                (n = At(n)),
                r && (n = `Restricted[${n}]`),
                { N: n, P: a(), Q: a(), M: !t(), R: r }
              )
            }
          })),
            (Yt = n()),
            ($t = new Map())
          let s = e()
            .concat(Gt(Yt))
            .sort((t, e) => t - e)
          s.forEach((e, n) => {
            let r = t(),
              o = (s[n] = r ? s[n - r] : { V: [], M: new Map() })
            o.V.push(e), Yt.has(e) || $t.set(e, o)
          })
          for (let { V: t, M: e } of new Set($t.values())) {
            let n = []
            for (let e of t) {
              let t = Zt.filter((t) => Ht(t, e)),
                o = n.find(({ G: e }) => t.some((t) => e.has(t)))
              o || ((o = { G: new Set(), V: [] }), n.push(o)),
                o.V.push(e),
                r(o.G, t)
            }
            let o = n.flatMap((t) => Gt(t.G))
            for (let { G: t, V: r } of n) {
              let n = new Set(o.filter((e) => !t.has(e)))
              for (let t of r) e.set(t, n)
            }
          }
          Xt = new Set()
          let u = new Set()
          const l = (t) => (Xt.has(t) ? u.add(t) : Xt.add(t))
          for (let t of Zt) {
            for (let e of t.P) l(e)
            for (let e of t.Q) l(e)
          }
          for (let t of Xt) $t.has(t) || u.has(t) || $t.set(t, 1)
          r(Xt, Ft(Xt)),
            (te = (function (t) {
              let e = [],
                n = ht(t)
              return (
                (function t({ S: n, B: r }, o, i) {
                  if (!(4 & n && i === o[o.length - 1])) {
                    2 & n && (i = o[o.length - 1]), 1 & n && e.push(o)
                    for (let e of r) for (let n of e.Q) t(e, [...o, n], i)
                  }
                })(
                  (function e(r) {
                    return {
                      S: t(),
                      B: gt(() => {
                        let r = ht(t).map((t) => n[t])
                        if (r.length) return e(r)
                      }),
                      Q: r,
                    }
                  })([]),
                  [],
                ),
                e
              )
            })(t)
              .map((t) => zt.from(t))
              .sort(xt)),
            (ee = new Map())
          for (let t of te) {
            let e = [ee]
            for (let n of t) {
              let t = e.map((t) => {
                let e = t.get(n)
                return e || ((e = new Map()), t.set(n, e)), e
              })
              65039 === n ? e.push(...t) : (e = t)
            }
            for (let n of e) n.V = t
          }
        }
        function re(t) {
          return (ae(t) ? '' : `${oe(ie([t]))} `) + vt(t)
        }
        function oe(t) {
          return `"${t}"‎`
        }
        function ie(t, e = 1 / 0, n = vt) {
          let r = []
          var o
          ;(o = t[0]),
            ne(),
            Wt.has(o) && r.push('◌'),
            t.length > e &&
              ((e >>= 1), (t = [...t.slice(0, e), 8230, ...t.slice(-e)]))
          let i = 0,
            a = t.length
          for (let e = 0; e < a; e++) {
            let o = t[e]
            ae(o) && (r.push(At(t.slice(i, e))), r.push(n(o)), (i = e + 1))
          }
          return r.push(At(t.slice(i, a))), r.join('')
        }
        function ae(t) {
          return ne(), Kt.has(t)
        }
        function se(t, e, n) {
          if (!t) return []
          ne()
          let r = 0
          return t.split(jt).map((t) => {
            let o = wt(t),
              i = { input: o, offset: r }
            r += o.length + 1
            try {
              let t,
                r = (i.tokens = he(o, e, n)),
                a = r.length
              if (!a) throw new Error('empty label')
              let s = (i.output = r.flat())
              if (
                ((function (t) {
                  for (let e = t.lastIndexOf(95); e > 0; )
                    if (95 !== t[--e])
                      throw new Error('underscore allowed only at start')
                })(s),
                !(i.emoji = a > 1 || r[0].is_emoji) && s.every((t) => t < 128))
              )
                !(function (t) {
                  if (t.length >= 4 && 45 == t[2] && 45 == t[3])
                    throw new Error(
                      `invalid label extension: "${At(t.slice(0, 4))}"`,
                    )
                })(s),
                  (t = 'ASCII')
              else {
                let e = r.flatMap((t) => (t.is_emoji ? [] : t))
                if (e.length) {
                  if (Wt.has(s[0])) throw fe('leading combining mark')
                  for (let t = 1; t < a; t++) {
                    let e = r[t]
                    if (!e.is_emoji && Wt.has(e[0]))
                      throw fe(
                        `emoji + combining mark: "${At(r[t - 1])} + ${ie([e[0]])}"`,
                      )
                  }
                  !(function (t) {
                    let e = t[0],
                      n = ut.get(e)
                    if (n) throw fe(`leading ${n}`)
                    let r = t.length,
                      o = -1
                    for (let i = 1; i < r; i++) {
                      e = t[i]
                      let r = ut.get(e)
                      if (r) {
                        if (o == i) throw fe(`${n} + ${r}`)
                        ;(o = i + 1), (n = r)
                      }
                    }
                    if (o == r) throw fe(`trailing ${n}`)
                  })(s)
                  let n = Gt(new Set(e)),
                    [o] = (function (t) {
                      let e = Zt
                      for (let n of t) {
                        let t = e.filter((t) => Ht(t, n))
                        if (!t.length)
                          throw Zt.some((t) => Ht(t, n)) ? ce(e[0], n) : le(n)
                        if (((e = t), 1 == t.length)) break
                      }
                      return e
                    })(n)
                  !(function (t, e) {
                    for (let n of e) if (!Ht(t, n)) throw ce(t, n)
                    if (t.M) {
                      let t = Ft(e)
                      for (let e = 1, n = t.length; e < n; e++)
                        if (Jt.has(t[e])) {
                          let r = e + 1
                          for (let o; r < n && Jt.has((o = t[r])); r++)
                            for (let n = e; n < r; n++)
                              if (t[n] == o)
                                throw new Error(
                                  `duplicate non-spacing marks: ${re(o)}`,
                                )
                          if (r - e > 4)
                            throw new Error(
                              `excessive non-spacing marks: ${oe(ie(t.slice(e - 1, r)))} (${r - e}/4)`,
                            )
                          e = r
                        }
                    }
                  })(o, e),
                    (function (t, e) {
                      let n,
                        r = []
                      for (let t of e) {
                        let e = $t.get(t)
                        if (1 === e) return
                        if (e) {
                          let r = e.M.get(t)
                          if (
                            ((n = n ? n.filter((t) => r.has(t)) : Gt(r)),
                            !n.length)
                          )
                            return
                        } else r.push(t)
                      }
                      if (n)
                        for (let e of n)
                          if (r.every((t) => Ht(e, t)))
                            throw new Error(
                              `whole-script confusable: ${t.N}/${e.N}`,
                            )
                    })(o, n),
                    (t = o.N)
                } else t = 'Emoji'
              }
              i.type = t
            } catch (t) {
              i.error = t
            }
            return i
          })
        }
        function ue(t) {
          return t
            .map(({ input: e, error: n, output: r }) => {
              if (n) {
                let r = n.message
                throw new Error(
                  1 == t.length ? r : `Invalid label ${oe(ie(e, 63))}: ${r}`,
                )
              }
              return At(r)
            })
            .join(jt)
        }
        function le(t) {
          return new Error(`disallowed character: ${re(t)}`)
        }
        function ce(t, e) {
          let n = re(e),
            r = Zt.find((t) => t.P.has(e))
          return (
            r && (n = `${r.N} ${n}`),
            new Error(`illegal mixture: ${t.N} + ${n}`)
          )
        }
        function fe(t) {
          return new Error(`illegal placement: ${t}`)
        }
        function he(t, e, n) {
          let r = [],
            o = []
          for (t = t.slice().reverse(); t.length; ) {
            let i = pe(t)
            if (i) o.length && (r.push(e(o)), (o = [])), r.push(n(i))
            else {
              let e = t.pop()
              if (Xt.has(e)) o.push(e)
              else {
                let t = Qt.get(e)
                if (t) o.push(...t)
                else if (!Vt.has(e)) throw le(e)
              }
            }
          }
          return o.length && r.push(e(o)), r
        }
        function de(t) {
          return t.filter((t) => 65039 != t)
        }
        function pe(t, e) {
          let n,
            r = ee,
            o = t.length
          for (; o && ((r = r.get(t[--o])), r); ) {
            let { V: i } = r
            i && ((n = i), e && e.push(...t.slice(o).reverse()), (t.length = o))
          }
          return n
        }
        const ge = new Uint8Array(32)
        function me(t) {
          return (
            (0, l.MR)(
              0 !== t.length,
              'invalid ENS name; empty component',
              'comp',
              t,
            ),
            t
          )
        }
        function ye(t) {
          const e = (0, V.YW)(
              (function (t) {
                try {
                  if (0 === t.length) throw new Error('empty label')
                  return (function (t) {
                    return ue(se(t, Ut, de))
                  })(t)
                } catch (e) {
                  ;(0, l.MR)(!1, `invalid ENS name (${e.message})`, 'name', t)
                }
              })(t),
            ),
            n = []
          if (0 === t.length) return n
          let r = 0
          for (let t = 0; t < e.length; t++) {
            46 === e[t] && (n.push(me(e.slice(r, t))), (r = t + 1))
          }
          return (
            (0, l.MR)(
              r < e.length,
              'invalid ENS name; empty component',
              'name',
              t,
            ),
            n.push(me(e.slice(r))),
            n
          )
        }
        function be(t) {
          ;(0, l.MR)(
            'string' == typeof t,
            'invalid ENS name; not a string',
            'name',
            t,
          ),
            (0, l.MR)(t.length, 'invalid ENS name (empty label)', 'name', t)
          let e = ge
          const n = ye(t)
          for (; n.length; ) e = (0, d.S)((0, p.xW)([e, (0, d.S)(n.pop())]))
          return (0, p.c$)(e)
        }
        function ve(t, e) {
          const n = null != e ? e : 63
          return (
            (0, l.MR)(
              n <= 255,
              'DNS encoded label cannot exceed 255',
              'length',
              n,
            ),
            (0, p.c$)(
              (0, p.xW)(
                ye(t).map((e) => {
                  ;(0, l.MR)(
                    e.length <= n,
                    `label ${JSON.stringify(t)} exceeds ${n} bytes`,
                    'name',
                    t,
                  )
                  const r = new Uint8Array(e.length + 1)
                  return r.set(e, 1), (r[0] = r.length - 1), r
                }),
              ),
            ) + '00'
          )
        }
        ge.fill(0)
        var we = n(789),
          Ae = n(982)
        class xe extends Ae.Vw {
          constructor(t, e, n, r) {
            super(),
              (this.blockLen = t),
              (this.outputLen = e),
              (this.padOffset = n),
              (this.isLE = r),
              (this.finished = !1),
              (this.length = 0),
              (this.pos = 0),
              (this.destroyed = !1),
              (this.buffer = new Uint8Array(t)),
              (this.view = (0, Ae.O8)(this.buffer))
          }
          update(t) {
            ;(0, we.t2)(this)
            const { view: e, buffer: n, blockLen: r } = this,
              o = (t = (0, Ae.ZJ)(t)).length
            for (let i = 0; i < o; ) {
              const a = Math.min(r - this.pos, o - i)
              if (a === r) {
                const e = (0, Ae.O8)(t)
                for (; r <= o - i; i += r) this.process(e, i)
                continue
              }
              n.set(t.subarray(i, i + a), this.pos),
                (this.pos += a),
                (i += a),
                this.pos === r && (this.process(e, 0), (this.pos = 0))
            }
            return (this.length += t.length), this.roundClean(), this
          }
          digestInto(t) {
            ;(0, we.t2)(this), (0, we.CG)(t, this), (this.finished = !0)
            const { buffer: e, view: n, blockLen: r, isLE: o } = this
            let { pos: i } = this
            ;(e[i++] = 128),
              this.buffer.subarray(i).fill(0),
              this.padOffset > r - i && (this.process(n, 0), (i = 0))
            for (let t = i; t < r; t++) e[t] = 0
            !(function (t, e, n, r) {
              if ('function' == typeof t.setBigUint64)
                return t.setBigUint64(e, n, r)
              const o = BigInt(32),
                i = BigInt(4294967295),
                a = Number((n >> o) & i),
                s = Number(n & i),
                u = r ? 4 : 0,
                l = r ? 0 : 4
              t.setUint32(e + u, a, r), t.setUint32(e + l, s, r)
            })(n, r - 8, BigInt(8 * this.length), o),
              this.process(n, 0)
            const a = (0, Ae.O8)(t),
              s = this.outputLen
            if (s % 4)
              throw new Error('_sha2: outputLen should be aligned to 32bit')
            const u = s / 4,
              l = this.get()
            if (u > l.length)
              throw new Error('_sha2: outputLen bigger than state')
            for (let t = 0; t < u; t++) a.setUint32(4 * t, l[t], o)
          }
          digest() {
            const { buffer: t, outputLen: e } = this
            this.digestInto(t)
            const n = t.slice(0, e)
            return this.destroy(), n
          }
          _cloneInto(t) {
            t || (t = new this.constructor()), t.set(...this.get())
            const {
              blockLen: e,
              buffer: n,
              length: r,
              finished: o,
              destroyed: i,
              pos: a,
            } = this
            return (
              (t.length = r),
              (t.pos = a),
              (t.finished = o),
              (t.destroyed = i),
              r % e && t.buffer.set(n),
              t
            )
          }
        }
        const Ee = (t, e, n) => (t & e) ^ (~t & n),
          ke = (t, e, n) => (t & e) ^ (t & n) ^ (e & n),
          Re = new Uint32Array([
            1116352408, 1899447441, 3049323471, 3921009573, 961987163,
            1508970993, 2453635748, 2870763221, 3624381080, 310598401,
            607225278, 1426881987, 1925078388, 2162078206, 2614888103,
            3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983,
            1249150122, 1555081692, 1996064986, 2554220882, 2821834349,
            2952996808, 3210313671, 3336571891, 3584528711, 113926993,
            338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700,
            1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
            3259730800, 3345764771, 3516065817, 3600352804, 4094571909,
            275423344, 430227734, 506948616, 659060556, 883997877, 958139571,
            1322822218, 1537002063, 1747873779, 1955562222, 2024104815,
            2227730452, 2361852424, 2428436474, 2756734187, 3204031479,
            3329325298,
          ]),
          Ne = new Uint32Array([
            1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
            2600822924, 528734635, 1541459225,
          ]),
          Pe = new Uint32Array(64)
        class Ce extends xe {
          constructor() {
            super(64, 32, 8, !1),
              (this.A = 0 | Ne[0]),
              (this.B = 0 | Ne[1]),
              (this.C = 0 | Ne[2]),
              (this.D = 0 | Ne[3]),
              (this.E = 0 | Ne[4]),
              (this.F = 0 | Ne[5]),
              (this.G = 0 | Ne[6]),
              (this.H = 0 | Ne[7])
          }
          get() {
            const { A: t, B: e, C: n, D: r, E: o, F: i, G: a, H: s } = this
            return [t, e, n, r, o, i, a, s]
          }
          set(t, e, n, r, o, i, a, s) {
            ;(this.A = 0 | t),
              (this.B = 0 | e),
              (this.C = 0 | n),
              (this.D = 0 | r),
              (this.E = 0 | o),
              (this.F = 0 | i),
              (this.G = 0 | a),
              (this.H = 0 | s)
          }
          process(t, e) {
            for (let n = 0; n < 16; n++, e += 4) Pe[n] = t.getUint32(e, !1)
            for (let t = 16; t < 64; t++) {
              const e = Pe[t - 15],
                n = Pe[t - 2],
                r = (0, Ae.Ow)(e, 7) ^ (0, Ae.Ow)(e, 18) ^ (e >>> 3),
                o = (0, Ae.Ow)(n, 17) ^ (0, Ae.Ow)(n, 19) ^ (n >>> 10)
              Pe[t] = (o + Pe[t - 7] + r + Pe[t - 16]) | 0
            }
            let { A: n, B: r, C: o, D: i, E: a, F: s, G: u, H: l } = this
            for (let t = 0; t < 64; t++) {
              const e =
                  (l +
                    ((0, Ae.Ow)(a, 6) ^ (0, Ae.Ow)(a, 11) ^ (0, Ae.Ow)(a, 25)) +
                    Ee(a, s, u) +
                    Re[t] +
                    Pe[t]) |
                  0,
                c =
                  (((0, Ae.Ow)(n, 2) ^ (0, Ae.Ow)(n, 13) ^ (0, Ae.Ow)(n, 22)) +
                    ke(n, r, o)) |
                  0
              ;(l = u),
                (u = s),
                (s = a),
                (a = (i + e) | 0),
                (i = o),
                (o = r),
                (r = n),
                (n = (e + c) | 0)
            }
            ;(n = (n + this.A) | 0),
              (r = (r + this.B) | 0),
              (o = (o + this.C) | 0),
              (i = (i + this.D) | 0),
              (a = (a + this.E) | 0),
              (s = (s + this.F) | 0),
              (u = (u + this.G) | 0),
              (l = (l + this.H) | 0),
              this.set(n, r, o, i, a, s, u, l)
          }
          roundClean() {
            Pe.fill(0)
          }
          destroy() {
            this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0)
          }
        }
        const Oe = (0, Ae.ld)(() => new Ce())
        var Se = n(486)
        const [Ie, Be] = (() =>
            Se.Ay.split(
              [
                '0x428a2f98d728ae22',
                '0x7137449123ef65cd',
                '0xb5c0fbcfec4d3b2f',
                '0xe9b5dba58189dbbc',
                '0x3956c25bf348b538',
                '0x59f111f1b605d019',
                '0x923f82a4af194f9b',
                '0xab1c5ed5da6d8118',
                '0xd807aa98a3030242',
                '0x12835b0145706fbe',
                '0x243185be4ee4b28c',
                '0x550c7dc3d5ffb4e2',
                '0x72be5d74f27b896f',
                '0x80deb1fe3b1696b1',
                '0x9bdc06a725c71235',
                '0xc19bf174cf692694',
                '0xe49b69c19ef14ad2',
                '0xefbe4786384f25e3',
                '0x0fc19dc68b8cd5b5',
                '0x240ca1cc77ac9c65',
                '0x2de92c6f592b0275',
                '0x4a7484aa6ea6e483',
                '0x5cb0a9dcbd41fbd4',
                '0x76f988da831153b5',
                '0x983e5152ee66dfab',
                '0xa831c66d2db43210',
                '0xb00327c898fb213f',
                '0xbf597fc7beef0ee4',
                '0xc6e00bf33da88fc2',
                '0xd5a79147930aa725',
                '0x06ca6351e003826f',
                '0x142929670a0e6e70',
                '0x27b70a8546d22ffc',
                '0x2e1b21385c26c926',
                '0x4d2c6dfc5ac42aed',
                '0x53380d139d95b3df',
                '0x650a73548baf63de',
                '0x766a0abb3c77b2a8',
                '0x81c2c92e47edaee6',
                '0x92722c851482353b',
                '0xa2bfe8a14cf10364',
                '0xa81a664bbc423001',
                '0xc24b8b70d0f89791',
                '0xc76c51a30654be30',
                '0xd192e819d6ef5218',
                '0xd69906245565a910',
                '0xf40e35855771202a',
                '0x106aa07032bbd1b8',
                '0x19a4c116b8d2d0c8',
                '0x1e376c085141ab53',
                '0x2748774cdf8eeb99',
                '0x34b0bcb5e19b48a8',
                '0x391c0cb3c5c95a63',
                '0x4ed8aa4ae3418acb',
                '0x5b9cca4f7763e373',
                '0x682e6ff3d6b2b8a3',
                '0x748f82ee5defb2fc',
                '0x78a5636f43172f60',
                '0x84c87814a1f0ab72',
                '0x8cc702081a6439ec',
                '0x90befffa23631e28',
                '0xa4506cebde82bde9',
                '0xbef9a3f7b2c67915',
                '0xc67178f2e372532b',
                '0xca273eceea26619c',
                '0xd186b8c721c0c207',
                '0xeada7dd6cde0eb1e',
                '0xf57d4f7fee6ed178',
                '0x06f067aa72176fba',
                '0x0a637dc5a2c898a6',
                '0x113f9804bef90dae',
                '0x1b710b35131c471b',
                '0x28db77f523047d84',
                '0x32caab7b40c72493',
                '0x3c9ebe0a15c9bebc',
                '0x431d67c49c100d4c',
                '0x4cc5d4becb3e42b6',
                '0x597f299cfc657e2a',
                '0x5fcb6fab3ad6faec',
                '0x6c44198c4a475817',
              ].map((t) => BigInt(t)),
            ))(),
          Te = new Uint32Array(80),
          _e = new Uint32Array(80)
        class Me extends xe {
          constructor() {
            super(128, 64, 16, !1),
              (this.Ah = 1779033703),
              (this.Al = -205731576),
              (this.Bh = -1150833019),
              (this.Bl = -2067093701),
              (this.Ch = 1013904242),
              (this.Cl = -23791573),
              (this.Dh = -1521486534),
              (this.Dl = 1595750129),
              (this.Eh = 1359893119),
              (this.El = -1377402159),
              (this.Fh = -1694144372),
              (this.Fl = 725511199),
              (this.Gh = 528734635),
              (this.Gl = -79577749),
              (this.Hh = 1541459225),
              (this.Hl = 327033209)
          }
          get() {
            const {
              Ah: t,
              Al: e,
              Bh: n,
              Bl: r,
              Ch: o,
              Cl: i,
              Dh: a,
              Dl: s,
              Eh: u,
              El: l,
              Fh: c,
              Fl: f,
              Gh: h,
              Gl: d,
              Hh: p,
              Hl: g,
            } = this
            return [t, e, n, r, o, i, a, s, u, l, c, f, h, d, p, g]
          }
          set(t, e, n, r, o, i, a, s, u, l, c, f, h, d, p, g) {
            ;(this.Ah = 0 | t),
              (this.Al = 0 | e),
              (this.Bh = 0 | n),
              (this.Bl = 0 | r),
              (this.Ch = 0 | o),
              (this.Cl = 0 | i),
              (this.Dh = 0 | a),
              (this.Dl = 0 | s),
              (this.Eh = 0 | u),
              (this.El = 0 | l),
              (this.Fh = 0 | c),
              (this.Fl = 0 | f),
              (this.Gh = 0 | h),
              (this.Gl = 0 | d),
              (this.Hh = 0 | p),
              (this.Hl = 0 | g)
          }
          process(t, e) {
            for (let n = 0; n < 16; n++, e += 4)
              (Te[n] = t.getUint32(e)), (_e[n] = t.getUint32((e += 4)))
            for (let t = 16; t < 80; t++) {
              const e = 0 | Te[t - 15],
                n = 0 | _e[t - 15],
                r =
                  Se.Ay.rotrSH(e, n, 1) ^
                  Se.Ay.rotrSH(e, n, 8) ^
                  Se.Ay.shrSH(e, n, 7),
                o =
                  Se.Ay.rotrSL(e, n, 1) ^
                  Se.Ay.rotrSL(e, n, 8) ^
                  Se.Ay.shrSL(e, n, 7),
                i = 0 | Te[t - 2],
                a = 0 | _e[t - 2],
                s =
                  Se.Ay.rotrSH(i, a, 19) ^
                  Se.Ay.rotrBH(i, a, 61) ^
                  Se.Ay.shrSH(i, a, 6),
                u =
                  Se.Ay.rotrSL(i, a, 19) ^
                  Se.Ay.rotrBL(i, a, 61) ^
                  Se.Ay.shrSL(i, a, 6),
                l = Se.Ay.add4L(o, u, _e[t - 7], _e[t - 16]),
                c = Se.Ay.add4H(l, r, s, Te[t - 7], Te[t - 16])
              ;(Te[t] = 0 | c), (_e[t] = 0 | l)
            }
            let {
              Ah: n,
              Al: r,
              Bh: o,
              Bl: i,
              Ch: a,
              Cl: s,
              Dh: u,
              Dl: l,
              Eh: c,
              El: f,
              Fh: h,
              Fl: d,
              Gh: p,
              Gl: g,
              Hh: m,
              Hl: y,
            } = this
            for (let t = 0; t < 80; t++) {
              const e =
                  Se.Ay.rotrSH(c, f, 14) ^
                  Se.Ay.rotrSH(c, f, 18) ^
                  Se.Ay.rotrBH(c, f, 41),
                b =
                  Se.Ay.rotrSL(c, f, 14) ^
                  Se.Ay.rotrSL(c, f, 18) ^
                  Se.Ay.rotrBL(c, f, 41),
                v = (c & h) ^ (~c & p),
                w = (f & d) ^ (~f & g),
                A = Se.Ay.add5L(y, b, w, Be[t], _e[t]),
                x = Se.Ay.add5H(A, m, e, v, Ie[t], Te[t]),
                E = 0 | A,
                k =
                  Se.Ay.rotrSH(n, r, 28) ^
                  Se.Ay.rotrBH(n, r, 34) ^
                  Se.Ay.rotrBH(n, r, 39),
                R =
                  Se.Ay.rotrSL(n, r, 28) ^
                  Se.Ay.rotrBL(n, r, 34) ^
                  Se.Ay.rotrBL(n, r, 39),
                N = (n & o) ^ (n & a) ^ (o & a),
                P = (r & i) ^ (r & s) ^ (i & s)
              ;(m = 0 | p),
                (y = 0 | g),
                (p = 0 | h),
                (g = 0 | d),
                (h = 0 | c),
                (d = 0 | f),
                ({ h: c, l: f } = Se.Ay.add(0 | u, 0 | l, 0 | x, 0 | E)),
                (u = 0 | a),
                (l = 0 | s),
                (a = 0 | o),
                (s = 0 | i),
                (o = 0 | n),
                (i = 0 | r)
              const C = Se.Ay.add3L(E, R, P)
              ;(n = Se.Ay.add3H(C, x, k, N)), (r = 0 | C)
            }
            ;({ h: n, l: r } = Se.Ay.add(
              0 | this.Ah,
              0 | this.Al,
              0 | n,
              0 | r,
            )),
              ({ h: o, l: i } = Se.Ay.add(
                0 | this.Bh,
                0 | this.Bl,
                0 | o,
                0 | i,
              )),
              ({ h: a, l: s } = Se.Ay.add(
                0 | this.Ch,
                0 | this.Cl,
                0 | a,
                0 | s,
              )),
              ({ h: u, l } = Se.Ay.add(0 | this.Dh, 0 | this.Dl, 0 | u, 0 | l)),
              ({ h: c, l: f } = Se.Ay.add(
                0 | this.Eh,
                0 | this.El,
                0 | c,
                0 | f,
              )),
              ({ h, l: d } = Se.Ay.add(0 | this.Fh, 0 | this.Fl, 0 | h, 0 | d)),
              ({ h: p, l: g } = Se.Ay.add(
                0 | this.Gh,
                0 | this.Gl,
                0 | p,
                0 | g,
              )),
              ({ h: m, l: y } = Se.Ay.add(
                0 | this.Hh,
                0 | this.Hl,
                0 | m,
                0 | y,
              )),
              this.set(n, r, o, i, a, s, u, l, c, f, h, d, p, g, m, y)
          }
          roundClean() {
            Te.fill(0), _e.fill(0)
          }
          destroy() {
            this.buffer.fill(0),
              this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
          }
        }
        const De = (0, Ae.ld)(() => new Me())
        const Le = (function () {
          if ('undefined' != typeof self) return self
          if ('undefined' != typeof window) return window
          if ('undefined' != typeof global) return global
          throw new Error('unable to locate global object')
        })()
        Le.crypto || Le.msCrypto
        function Fe(t) {
          switch (t) {
            case 'sha256':
              return Oe.create()
            case 'sha512':
              return De.create()
          }
          ;(0, l.MR)(!1, 'invalid hashing algorithm name', 'algorithm', t)
        }
        const Ue = function (t) {
            return Fe('sha256').update(t).digest()
          },
          je = function (t) {
            return Fe('sha512').update(t).digest()
          }
        let Ge = Ue,
          He = je,
          ze = !1,
          Qe = !1
        function Ve(t) {
          const e = (0, p.q5)(t, 'data')
          return (0, p.c$)(Ge(e))
        }
        function We(t) {
          const e = (0, p.q5)(t, 'data')
          return (0, p.c$)(He(e))
        }
        ;(Ve._ = Ue),
          (Ve.lock = function () {
            ze = !0
          }),
          (Ve.register = function (t) {
            if (ze) throw new Error('sha256 is locked')
            Ge = t
          }),
          Object.freeze(Ve),
          (We._ = je),
          (We.lock = function () {
            Qe = !0
          }),
          (We.register = function (t) {
            if (Qe) throw new Error('sha512 is locked')
            He = t
          }),
          Object.freeze(Ve)
        BigInt(0)
        const Je = BigInt(1),
          Ke = BigInt(2),
          qe = (t) => t instanceof Uint8Array,
          Ze = Array.from({ length: 256 }, (t, e) =>
            e.toString(16).padStart(2, '0'),
          )
        function Ye(t) {
          if (!qe(t)) throw new Error('Uint8Array expected')
          let e = ''
          for (let n = 0; n < t.length; n++) e += Ze[t[n]]
          return e
        }
        function $e(t) {
          if ('string' != typeof t)
            throw new Error('hex string expected, got ' + typeof t)
          return BigInt('' === t ? '0' : `0x${t}`)
        }
        function Xe(t) {
          if ('string' != typeof t)
            throw new Error('hex string expected, got ' + typeof t)
          const e = t.length
          if (e % 2)
            throw new Error(
              'padded hex string expected, got unpadded hex of length ' + e,
            )
          const n = new Uint8Array(e / 2)
          for (let e = 0; e < n.length; e++) {
            const r = 2 * e,
              o = t.slice(r, r + 2),
              i = Number.parseInt(o, 16)
            if (Number.isNaN(i) || i < 0)
              throw new Error('Invalid byte sequence')
            n[e] = i
          }
          return n
        }
        function tn(t) {
          return $e(Ye(t))
        }
        function en(t) {
          if (!qe(t)) throw new Error('Uint8Array expected')
          return $e(Ye(Uint8Array.from(t).reverse()))
        }
        function nn(t, e) {
          return Xe(t.toString(16).padStart(2 * e, '0'))
        }
        function rn(t, e) {
          return nn(t, e).reverse()
        }
        function on(t, e, n) {
          let r
          if ('string' == typeof e)
            try {
              r = Xe(e)
            } catch (n) {
              throw new Error(
                `${t} must be valid hex string, got "${e}". Cause: ${n}`,
              )
            }
          else {
            if (!qe(e)) throw new Error(`${t} must be hex string or Uint8Array`)
            r = Uint8Array.from(e)
          }
          const o = r.length
          if ('number' == typeof n && o !== n)
            throw new Error(`${t} expected ${n} bytes, got ${o}`)
          return r
        }
        function an(...t) {
          const e = new Uint8Array(t.reduce((t, e) => t + e.length, 0))
          let n = 0
          return (
            t.forEach((t) => {
              if (!qe(t)) throw new Error('Uint8Array expected')
              e.set(t, n), (n += t.length)
            }),
            e
          )
        }
        const sn = (t) => (Ke << BigInt(t - 1)) - Je,
          un = (t) => new Uint8Array(t),
          ln = (t) => Uint8Array.from(t)
        function cn(t, e, n) {
          if ('number' != typeof t || t < 2)
            throw new Error('hashLen must be a number')
          if ('number' != typeof e || e < 2)
            throw new Error('qByteLen must be a number')
          if ('function' != typeof n)
            throw new Error('hmacFn must be a function')
          let r = un(t),
            o = un(t),
            i = 0
          const a = () => {
              r.fill(1), o.fill(0), (i = 0)
            },
            s = (...t) => n(o, r, ...t),
            u = (t = un()) => {
              ;(o = s(ln([0]), t)),
                (r = s()),
                0 !== t.length && ((o = s(ln([1]), t)), (r = s()))
            },
            l = () => {
              if (i++ >= 1e3) throw new Error('drbg: tried 1000 values')
              let t = 0
              const n = []
              for (; t < e; ) {
                r = s()
                const e = r.slice()
                n.push(e), (t += r.length)
              }
              return an(...n)
            }
          return (t, e) => {
            let n
            for (a(), u(t); !(n = e(l())); ) u()
            return a(), n
          }
        }
        const fn = {
          bigint: (t) => 'bigint' == typeof t,
          function: (t) => 'function' == typeof t,
          boolean: (t) => 'boolean' == typeof t,
          string: (t) => 'string' == typeof t,
          stringOrUint8Array: (t) =>
            'string' == typeof t || t instanceof Uint8Array,
          isSafeInteger: (t) => Number.isSafeInteger(t),
          array: (t) => Array.isArray(t),
          field: (t, e) => e.Fp.isValid(t),
          hash: (t) =>
            'function' == typeof t && Number.isSafeInteger(t.outputLen),
        }
        function hn(t, e, n = {}) {
          const r = (e, n, r) => {
            const o = fn[n]
            if ('function' != typeof o)
              throw new Error(`Invalid validator "${n}", expected function`)
            const i = t[e]
            if (!((r && void 0 === i) || o(i, t)))
              throw new Error(
                `Invalid param ${String(e)}=${i} (${typeof i}), expected ${n}`,
              )
          }
          for (const [t, n] of Object.entries(e)) r(t, n, !1)
          for (const [t, e] of Object.entries(n)) r(t, e, !0)
          return t
        }
        const dn = BigInt(0),
          pn = BigInt(1),
          gn = BigInt(2),
          mn = BigInt(3),
          yn = BigInt(4),
          bn = BigInt(5),
          vn = BigInt(8)
        BigInt(9), BigInt(16)
        function wn(t, e) {
          const n = t % e
          return n >= dn ? n : e + n
        }
        function An(t, e, n) {
          if (n <= dn || e < dn) throw new Error('Expected power/modulo > 0')
          if (n === pn) return dn
          let r = pn
          for (; e > dn; )
            e & pn && (r = (r * t) % n), (t = (t * t) % n), (e >>= pn)
          return r
        }
        function xn(t, e, n) {
          let r = t
          for (; e-- > dn; ) (r *= r), (r %= n)
          return r
        }
        function En(t, e) {
          if (t === dn || e <= dn)
            throw new Error(
              `invert: expected positive integers, got n=${t} mod=${e}`,
            )
          let n = wn(t, e),
            r = e,
            o = dn,
            i = pn,
            a = pn,
            s = dn
          for (; n !== dn; ) {
            const t = r / n,
              e = r % n,
              u = o - a * t,
              l = i - s * t
            ;(r = n), (n = e), (o = a), (i = s), (a = u), (s = l)
          }
          if (r !== pn) throw new Error('invert: does not exist')
          return wn(o, e)
        }
        function kn(t) {
          if (t % yn === mn) {
            const e = (t + pn) / yn
            return function (t, n) {
              const r = t.pow(n, e)
              if (!t.eql(t.sqr(r), n))
                throw new Error('Cannot find square root')
              return r
            }
          }
          if (t % vn === bn) {
            const e = (t - bn) / vn
            return function (t, n) {
              const r = t.mul(n, gn),
                o = t.pow(r, e),
                i = t.mul(n, o),
                a = t.mul(t.mul(i, gn), o),
                s = t.mul(i, t.sub(a, t.ONE))
              if (!t.eql(t.sqr(s), n))
                throw new Error('Cannot find square root')
              return s
            }
          }
          return (function (t) {
            const e = (t - pn) / gn
            let n, r, o
            for (n = t - pn, r = 0; n % gn === dn; n /= gn, r++);
            for (o = gn; o < t && An(o, e, t) !== t - pn; o++);
            if (1 === r) {
              const e = (t + pn) / yn
              return function (t, n) {
                const r = t.pow(n, e)
                if (!t.eql(t.sqr(r), n))
                  throw new Error('Cannot find square root')
                return r
              }
            }
            const i = (n + pn) / gn
            return function (t, a) {
              if (t.pow(a, e) === t.neg(t.ONE))
                throw new Error('Cannot find square root')
              let s = r,
                u = t.pow(t.mul(t.ONE, o), n),
                l = t.pow(a, i),
                c = t.pow(a, n)
              for (; !t.eql(c, t.ONE); ) {
                if (t.eql(c, t.ZERO)) return t.ZERO
                let e = 1
                for (let n = t.sqr(c); e < s && !t.eql(n, t.ONE); e++)
                  n = t.sqr(n)
                const n = t.pow(u, pn << BigInt(s - e - 1))
                ;(u = t.sqr(n)), (l = t.mul(l, n)), (c = t.mul(c, u)), (s = e)
              }
              return l
            }
          })(t)
        }
        const Rn = [
          'create',
          'isValid',
          'is0',
          'neg',
          'inv',
          'sqrt',
          'sqr',
          'eql',
          'add',
          'sub',
          'mul',
          'pow',
          'div',
          'addN',
          'subN',
          'mulN',
          'sqrN',
        ]
        function Nn(t, e) {
          const n = void 0 !== e ? e : t.toString(2).length
          return { nBitLength: n, nByteLength: Math.ceil(n / 8) }
        }
        function Pn(t) {
          if ('bigint' != typeof t)
            throw new Error('field order must be bigint')
          const e = t.toString(2).length
          return Math.ceil(e / 8)
        }
        function Cn(t) {
          const e = Pn(t)
          return e + Math.ceil(e / 2)
        }
        class On extends Ae.Vw {
          constructor(t, e) {
            super(), (this.finished = !1), (this.destroyed = !1), (0, we.tW)(t)
            const n = (0, Ae.ZJ)(e)
            if (
              ((this.iHash = t.create()),
              'function' != typeof this.iHash.update)
            )
              throw new Error(
                'Expected instance of class which extends utils.Hash',
              )
            ;(this.blockLen = this.iHash.blockLen),
              (this.outputLen = this.iHash.outputLen)
            const r = this.blockLen,
              o = new Uint8Array(r)
            o.set(n.length > r ? t.create().update(n).digest() : n)
            for (let t = 0; t < o.length; t++) o[t] ^= 54
            this.iHash.update(o), (this.oHash = t.create())
            for (let t = 0; t < o.length; t++) o[t] ^= 106
            this.oHash.update(o), o.fill(0)
          }
          update(t) {
            return (0, we.t2)(this), this.iHash.update(t), this
          }
          digestInto(t) {
            ;(0, we.t2)(this),
              (0, we.ee)(t, this.outputLen),
              (this.finished = !0),
              this.iHash.digestInto(t),
              this.oHash.update(t),
              this.oHash.digestInto(t),
              this.destroy()
          }
          digest() {
            const t = new Uint8Array(this.oHash.outputLen)
            return this.digestInto(t), t
          }
          _cloneInto(t) {
            t || (t = Object.create(Object.getPrototypeOf(this), {}))
            const {
              oHash: e,
              iHash: n,
              finished: r,
              destroyed: o,
              blockLen: i,
              outputLen: a,
            } = this
            return (
              (t.finished = r),
              (t.destroyed = o),
              (t.blockLen = i),
              (t.outputLen = a),
              (t.oHash = e._cloneInto(t.oHash)),
              (t.iHash = n._cloneInto(t.iHash)),
              t
            )
          }
          destroy() {
            ;(this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy()
          }
        }
        const Sn = (t, e, n) => new On(t, e).update(n).digest()
        Sn.create = (t, e) => new On(t, e)
        const In = BigInt(0),
          Bn = BigInt(1)
        function Tn(t) {
          return (
            hn(
              t.Fp,
              Rn.reduce((t, e) => ((t[e] = 'function'), t), {
                ORDER: 'bigint',
                MASK: 'bigint',
                BYTES: 'isSafeInteger',
                BITS: 'isSafeInteger',
              }),
            ),
            hn(
              t,
              { n: 'bigint', h: 'bigint', Gx: 'field', Gy: 'field' },
              { nBitLength: 'isSafeInteger', nByteLength: 'isSafeInteger' },
            ),
            Object.freeze({ ...Nn(t.n, t.nBitLength), ...t, p: t.Fp.ORDER })
          )
        }
        const { Ph: _n, aT: Mn } = r,
          Dn = {
            Err: class extends Error {
              constructor(t = '') {
                super(t)
              }
            },
            _parseInt(t) {
              const { Err: e } = Dn
              if (t.length < 2 || 2 !== t[0])
                throw new e('Invalid signature integer tag')
              const n = t[1],
                r = t.subarray(2, n + 2)
              if (!n || r.length !== n)
                throw new e('Invalid signature integer: wrong length')
              if (128 & r[0]) throw new e('Invalid signature integer: negative')
              if (0 === r[0] && !(128 & r[1]))
                throw new e(
                  'Invalid signature integer: unnecessary leading zero',
                )
              return { d: _n(r), l: t.subarray(n + 2) }
            },
            toSig(t) {
              const { Err: e } = Dn,
                n = 'string' == typeof t ? Mn(t) : t
              if (!(n instanceof Uint8Array)) throw new Error('ui8a expected')
              let r = n.length
              if (r < 2 || 48 != n[0]) throw new e('Invalid signature tag')
              if (n[1] !== r - 2)
                throw new e('Invalid signature: incorrect length')
              const { d: o, l: i } = Dn._parseInt(n.subarray(2)),
                { d: a, l: s } = Dn._parseInt(i)
              if (s.length)
                throw new e('Invalid signature: left bytes after parsing')
              return { r: o, s: a }
            },
            hexFromSig(t) {
              const e = (t) => (8 & Number.parseInt(t[0], 16) ? '00' + t : t),
                n = (t) => {
                  const e = t.toString(16)
                  return 1 & e.length ? `0${e}` : e
                },
                r = e(n(t.s)),
                o = e(n(t.r)),
                i = r.length / 2,
                a = o.length / 2,
                s = n(i),
                u = n(a)
              return `30${n(a + i + 4)}02${u}${o}02${s}${r}`
            },
          },
          Ln = BigInt(0),
          Fn = BigInt(1),
          Un = (BigInt(2), BigInt(3))
        BigInt(4)
        function jn(t) {
          const e = (function (t) {
              const e = Tn(t)
              hn(
                e,
                { a: 'field', b: 'field' },
                {
                  allowedPrivateKeyLengths: 'array',
                  wrapPrivateKey: 'boolean',
                  isTorsionFree: 'function',
                  clearCofactor: 'function',
                  allowInfinityPoint: 'boolean',
                  fromBytes: 'function',
                  toBytes: 'function',
                },
              )
              const { endo: n, Fp: r, a: o } = e
              if (n) {
                if (!r.eql(o, r.ZERO))
                  throw new Error(
                    'Endomorphism can only be defined for Koblitz curves that have a=0',
                  )
                if (
                  'object' != typeof n ||
                  'bigint' != typeof n.beta ||
                  'function' != typeof n.splitScalar
                )
                  throw new Error(
                    'Expected endomorphism with beta: bigint and splitScalar: function',
                  )
              }
              return Object.freeze({ ...e })
            })(t),
            { Fp: n } = e,
            r =
              e.toBytes ||
              ((t, e, r) => {
                const o = e.toAffine()
                return an(Uint8Array.from([4]), n.toBytes(o.x), n.toBytes(o.y))
              }),
            o =
              e.fromBytes ||
              ((t) => {
                const e = t.subarray(1)
                return {
                  x: n.fromBytes(e.subarray(0, n.BYTES)),
                  y: n.fromBytes(e.subarray(n.BYTES, 2 * n.BYTES)),
                }
              })
          function i(t) {
            const { a: r, b: o } = e,
              i = n.sqr(t),
              a = n.mul(i, t)
            return n.add(n.add(a, n.mul(t, r)), o)
          }
          if (!n.eql(n.sqr(e.Gy), i(e.Gx)))
            throw new Error('bad generator point: equation left != right')
          function a(t) {
            return 'bigint' == typeof t && Ln < t && t < e.n
          }
          function s(t) {
            if (!a(t))
              throw new Error('Expected valid bigint: 0 < bigint < curve.n')
          }
          function u(t) {
            const {
              allowedPrivateKeyLengths: n,
              nByteLength: r,
              wrapPrivateKey: o,
              n: i,
            } = e
            if (n && 'bigint' != typeof t) {
              if (
                (t instanceof Uint8Array && (t = Ye(t)),
                'string' != typeof t || !n.includes(t.length))
              )
                throw new Error('Invalid key')
              t = t.padStart(2 * r, '0')
            }
            let a
            try {
              a = 'bigint' == typeof t ? t : tn(on('private key', t, r))
            } catch (e) {
              throw new Error(
                `private key must be ${r} bytes, hex or bigint, not ${typeof t}`,
              )
            }
            return o && (a = wn(a, i)), s(a), a
          }
          const l = new Map()
          function c(t) {
            if (!(t instanceof f)) throw new Error('ProjectivePoint expected')
          }
          class f {
            constructor(t, e, r) {
              if (
                ((this.px = t),
                (this.py = e),
                (this.pz = r),
                null == t || !n.isValid(t))
              )
                throw new Error('x required')
              if (null == e || !n.isValid(e)) throw new Error('y required')
              if (null == r || !n.isValid(r)) throw new Error('z required')
            }
            static fromAffine(t) {
              const { x: e, y: r } = t || {}
              if (!t || !n.isValid(e) || !n.isValid(r))
                throw new Error('invalid affine point')
              if (t instanceof f)
                throw new Error('projective point not allowed')
              const o = (t) => n.eql(t, n.ZERO)
              return o(e) && o(r) ? f.ZERO : new f(e, r, n.ONE)
            }
            get x() {
              return this.toAffine().x
            }
            get y() {
              return this.toAffine().y
            }
            static normalizeZ(t) {
              const e = n.invertBatch(t.map((t) => t.pz))
              return t.map((t, n) => t.toAffine(e[n])).map(f.fromAffine)
            }
            static fromHex(t) {
              const e = f.fromAffine(o(on('pointHex', t)))
              return e.assertValidity(), e
            }
            static fromPrivateKey(t) {
              return f.BASE.multiply(u(t))
            }
            _setWindowSize(t) {
              ;(this._WINDOW_SIZE = t), l.delete(this)
            }
            assertValidity() {
              if (this.is0()) {
                if (e.allowInfinityPoint && !n.is0(this.py)) return
                throw new Error('bad point: ZERO')
              }
              const { x: t, y: r } = this.toAffine()
              if (!n.isValid(t) || !n.isValid(r))
                throw new Error('bad point: x or y not FE')
              const o = n.sqr(r),
                a = i(t)
              if (!n.eql(o, a))
                throw new Error('bad point: equation left != right')
              if (!this.isTorsionFree())
                throw new Error('bad point: not in prime-order subgroup')
            }
            hasEvenY() {
              const { y: t } = this.toAffine()
              if (n.isOdd) return !n.isOdd(t)
              throw new Error("Field doesn't support isOdd")
            }
            equals(t) {
              c(t)
              const { px: e, py: r, pz: o } = this,
                { px: i, py: a, pz: s } = t,
                u = n.eql(n.mul(e, s), n.mul(i, o)),
                l = n.eql(n.mul(r, s), n.mul(a, o))
              return u && l
            }
            negate() {
              return new f(this.px, n.neg(this.py), this.pz)
            }
            double() {
              const { a: t, b: r } = e,
                o = n.mul(r, Un),
                { px: i, py: a, pz: s } = this
              let u = n.ZERO,
                l = n.ZERO,
                c = n.ZERO,
                h = n.mul(i, i),
                d = n.mul(a, a),
                p = n.mul(s, s),
                g = n.mul(i, a)
              return (
                (g = n.add(g, g)),
                (c = n.mul(i, s)),
                (c = n.add(c, c)),
                (u = n.mul(t, c)),
                (l = n.mul(o, p)),
                (l = n.add(u, l)),
                (u = n.sub(d, l)),
                (l = n.add(d, l)),
                (l = n.mul(u, l)),
                (u = n.mul(g, u)),
                (c = n.mul(o, c)),
                (p = n.mul(t, p)),
                (g = n.sub(h, p)),
                (g = n.mul(t, g)),
                (g = n.add(g, c)),
                (c = n.add(h, h)),
                (h = n.add(c, h)),
                (h = n.add(h, p)),
                (h = n.mul(h, g)),
                (l = n.add(l, h)),
                (p = n.mul(a, s)),
                (p = n.add(p, p)),
                (h = n.mul(p, g)),
                (u = n.sub(u, h)),
                (c = n.mul(p, d)),
                (c = n.add(c, c)),
                (c = n.add(c, c)),
                new f(u, l, c)
              )
            }
            add(t) {
              c(t)
              const { px: r, py: o, pz: i } = this,
                { px: a, py: s, pz: u } = t
              let l = n.ZERO,
                h = n.ZERO,
                d = n.ZERO
              const p = e.a,
                g = n.mul(e.b, Un)
              let m = n.mul(r, a),
                y = n.mul(o, s),
                b = n.mul(i, u),
                v = n.add(r, o),
                w = n.add(a, s)
              ;(v = n.mul(v, w)),
                (w = n.add(m, y)),
                (v = n.sub(v, w)),
                (w = n.add(r, i))
              let A = n.add(a, u)
              return (
                (w = n.mul(w, A)),
                (A = n.add(m, b)),
                (w = n.sub(w, A)),
                (A = n.add(o, i)),
                (l = n.add(s, u)),
                (A = n.mul(A, l)),
                (l = n.add(y, b)),
                (A = n.sub(A, l)),
                (d = n.mul(p, w)),
                (l = n.mul(g, b)),
                (d = n.add(l, d)),
                (l = n.sub(y, d)),
                (d = n.add(y, d)),
                (h = n.mul(l, d)),
                (y = n.add(m, m)),
                (y = n.add(y, m)),
                (b = n.mul(p, b)),
                (w = n.mul(g, w)),
                (y = n.add(y, b)),
                (b = n.sub(m, b)),
                (b = n.mul(p, b)),
                (w = n.add(w, b)),
                (m = n.mul(y, w)),
                (h = n.add(h, m)),
                (m = n.mul(A, w)),
                (l = n.mul(v, l)),
                (l = n.sub(l, m)),
                (m = n.mul(v, y)),
                (d = n.mul(A, d)),
                (d = n.add(d, m)),
                new f(l, h, d)
              )
            }
            subtract(t) {
              return this.add(t.negate())
            }
            is0() {
              return this.equals(f.ZERO)
            }
            wNAF(t) {
              return d.wNAFCached(this, l, t, (t) => {
                const e = n.invertBatch(t.map((t) => t.pz))
                return t.map((t, n) => t.toAffine(e[n])).map(f.fromAffine)
              })
            }
            multiplyUnsafe(t) {
              const r = f.ZERO
              if (t === Ln) return r
              if ((s(t), t === Fn)) return this
              const { endo: o } = e
              if (!o) return d.unsafeLadder(this, t)
              let { k1neg: i, k1: a, k2neg: u, k2: l } = o.splitScalar(t),
                c = r,
                h = r,
                p = this
              for (; a > Ln || l > Ln; )
                a & Fn && (c = c.add(p)),
                  l & Fn && (h = h.add(p)),
                  (p = p.double()),
                  (a >>= Fn),
                  (l >>= Fn)
              return (
                i && (c = c.negate()),
                u && (h = h.negate()),
                (h = new f(n.mul(h.px, o.beta), h.py, h.pz)),
                c.add(h)
              )
            }
            multiply(t) {
              s(t)
              let r,
                o,
                i = t
              const { endo: a } = e
              if (a) {
                const { k1neg: t, k1: e, k2neg: s, k2: u } = a.splitScalar(i)
                let { p: l, f: c } = this.wNAF(e),
                  { p: h, f: p } = this.wNAF(u)
                ;(l = d.constTimeNegate(t, l)),
                  (h = d.constTimeNegate(s, h)),
                  (h = new f(n.mul(h.px, a.beta), h.py, h.pz)),
                  (r = l.add(h)),
                  (o = c.add(p))
              } else {
                const { p: t, f: e } = this.wNAF(i)
                ;(r = t), (o = e)
              }
              return f.normalizeZ([r, o])[0]
            }
            multiplyAndAddUnsafe(t, e, n) {
              const r = f.BASE,
                o = (t, e) =>
                  e !== Ln && e !== Fn && t.equals(r)
                    ? t.multiply(e)
                    : t.multiplyUnsafe(e),
                i = o(this, e).add(o(t, n))
              return i.is0() ? void 0 : i
            }
            toAffine(t) {
              const { px: e, py: r, pz: o } = this,
                i = this.is0()
              null == t && (t = i ? n.ONE : n.inv(o))
              const a = n.mul(e, t),
                s = n.mul(r, t),
                u = n.mul(o, t)
              if (i) return { x: n.ZERO, y: n.ZERO }
              if (!n.eql(u, n.ONE)) throw new Error('invZ was invalid')
              return { x: a, y: s }
            }
            isTorsionFree() {
              const { h: t, isTorsionFree: n } = e
              if (t === Fn) return !0
              if (n) return n(f, this)
              throw new Error(
                'isTorsionFree() has not been declared for the elliptic curve',
              )
            }
            clearCofactor() {
              const { h: t, clearCofactor: n } = e
              return t === Fn ? this : n ? n(f, this) : this.multiplyUnsafe(e.h)
            }
            toRawBytes(t = !0) {
              return this.assertValidity(), r(f, this, t)
            }
            toHex(t = !0) {
              return Ye(this.toRawBytes(t))
            }
          }
          ;(f.BASE = new f(e.Gx, e.Gy, n.ONE)),
            (f.ZERO = new f(n.ZERO, n.ONE, n.ZERO))
          const h = e.nBitLength,
            d = (function (t, e) {
              const n = (t, e) => {
                  const n = e.negate()
                  return t ? n : e
                },
                r = (t) => ({
                  windows: Math.ceil(e / t) + 1,
                  windowSize: 2 ** (t - 1),
                })
              return {
                constTimeNegate: n,
                unsafeLadder(e, n) {
                  let r = t.ZERO,
                    o = e
                  for (; n > In; )
                    n & Bn && (r = r.add(o)), (o = o.double()), (n >>= Bn)
                  return r
                },
                precomputeWindow(t, e) {
                  const { windows: n, windowSize: o } = r(e),
                    i = []
                  let a = t,
                    s = a
                  for (let t = 0; t < n; t++) {
                    ;(s = a), i.push(s)
                    for (let t = 1; t < o; t++) (s = s.add(a)), i.push(s)
                    a = s.double()
                  }
                  return i
                },
                wNAF(e, o, i) {
                  const { windows: a, windowSize: s } = r(e)
                  let u = t.ZERO,
                    l = t.BASE
                  const c = BigInt(2 ** e - 1),
                    f = 2 ** e,
                    h = BigInt(e)
                  for (let t = 0; t < a; t++) {
                    const e = t * s
                    let r = Number(i & c)
                    ;(i >>= h), r > s && ((r -= f), (i += Bn))
                    const a = e,
                      d = e + Math.abs(r) - 1,
                      p = t % 2 != 0,
                      g = r < 0
                    0 === r ? (l = l.add(n(p, o[a]))) : (u = u.add(n(g, o[d])))
                  }
                  return { p: u, f: l }
                },
                wNAFCached(t, e, n, r) {
                  const o = t._WINDOW_SIZE || 1
                  let i = e.get(t)
                  return (
                    i ||
                      ((i = this.precomputeWindow(t, o)),
                      1 !== o && e.set(t, r(i))),
                    this.wNAF(o, i, n)
                  )
                },
              }
            })(f, e.endo ? Math.ceil(h / 2) : h)
          return {
            CURVE: e,
            ProjectivePoint: f,
            normPrivateKeyToScalar: u,
            weierstrassEquation: i,
            isWithinCurveOrder: a,
          }
        }
        function Gn(t) {
          const e = (function (t) {
              const e = Tn(t)
              return (
                hn(
                  e,
                  { hash: 'hash', hmac: 'function', randomBytes: 'function' },
                  {
                    bits2int: 'function',
                    bits2int_modN: 'function',
                    lowS: 'boolean',
                  },
                ),
                Object.freeze({ lowS: !0, ...e })
              )
            })(t),
            { Fp: n, n: r } = e,
            o = n.BYTES + 1,
            i = 2 * n.BYTES + 1
          function a(t) {
            return wn(t, r)
          }
          function s(t) {
            return En(t, r)
          }
          const {
              ProjectivePoint: u,
              normPrivateKeyToScalar: l,
              weierstrassEquation: c,
              isWithinCurveOrder: f,
            } = jn({
              ...e,
              toBytes(t, e, r) {
                const o = e.toAffine(),
                  i = n.toBytes(o.x),
                  a = an
                return r
                  ? a(Uint8Array.from([e.hasEvenY() ? 2 : 3]), i)
                  : a(Uint8Array.from([4]), i, n.toBytes(o.y))
              },
              fromBytes(t) {
                const e = t.length,
                  r = t[0],
                  a = t.subarray(1)
                if (e !== o || (2 !== r && 3 !== r)) {
                  if (e === i && 4 === r) {
                    return {
                      x: n.fromBytes(a.subarray(0, n.BYTES)),
                      y: n.fromBytes(a.subarray(n.BYTES, 2 * n.BYTES)),
                    }
                  }
                  throw new Error(
                    `Point of length ${e} was invalid. Expected ${o} compressed bytes or ${i} uncompressed bytes`,
                  )
                }
                {
                  const t = tn(a)
                  if (!(Ln < (s = t) && s < n.ORDER))
                    throw new Error('Point is not on curve')
                  const e = c(t)
                  let o = n.sqrt(e)
                  return (
                    !(1 & ~r) !== ((o & Fn) === Fn) && (o = n.neg(o)),
                    { x: t, y: o }
                  )
                }
                var s
              },
            }),
            h = (t) => Ye(nn(t, e.nByteLength))
          function d(t) {
            return t > r >> Fn
          }
          const p = (t, e, n) => tn(t.slice(e, n))
          class g {
            constructor(t, e, n) {
              ;(this.r = t),
                (this.s = e),
                (this.recovery = n),
                this.assertValidity()
            }
            static fromCompact(t) {
              const n = e.nByteLength
              return (
                (t = on('compactSignature', t, 2 * n)),
                new g(p(t, 0, n), p(t, n, 2 * n))
              )
            }
            static fromDER(t) {
              const { r: e, s: n } = Dn.toSig(on('DER', t))
              return new g(e, n)
            }
            assertValidity() {
              if (!f(this.r)) throw new Error('r must be 0 < r < CURVE.n')
              if (!f(this.s)) throw new Error('s must be 0 < s < CURVE.n')
            }
            addRecoveryBit(t) {
              return new g(this.r, this.s, t)
            }
            recoverPublicKey(t) {
              const { r, s: o, recovery: i } = this,
                l = v(on('msgHash', t))
              if (null == i || ![0, 1, 2, 3].includes(i))
                throw new Error('recovery id invalid')
              const c = 2 === i || 3 === i ? r + e.n : r
              if (c >= n.ORDER) throw new Error('recovery id 2 or 3 invalid')
              const f = 1 & i ? '03' : '02',
                d = u.fromHex(f + h(c)),
                p = s(c),
                g = a(-l * p),
                m = a(o * p),
                y = u.BASE.multiplyAndAddUnsafe(d, g, m)
              if (!y) throw new Error('point at infinify')
              return y.assertValidity(), y
            }
            hasHighS() {
              return d(this.s)
            }
            normalizeS() {
              return this.hasHighS()
                ? new g(this.r, a(-this.s), this.recovery)
                : this
            }
            toDERRawBytes() {
              return Xe(this.toDERHex())
            }
            toDERHex() {
              return Dn.hexFromSig({ r: this.r, s: this.s })
            }
            toCompactRawBytes() {
              return Xe(this.toCompactHex())
            }
            toCompactHex() {
              return h(this.r) + h(this.s)
            }
          }
          const m = {
            isValidPrivateKey(t) {
              try {
                return l(t), !0
              } catch (t) {
                return !1
              }
            },
            normPrivateKeyToScalar: l,
            randomPrivateKey: () => {
              const t = Cn(e.n)
              return (function (t, e, n = !1) {
                const r = t.length,
                  o = Pn(e),
                  i = Cn(e)
                if (r < 16 || r < i || r > 1024)
                  throw new Error(`expected ${i}-1024 bytes of input, got ${r}`)
                const a = wn(n ? tn(t) : en(t), e - pn) + pn
                return n ? rn(a, o) : nn(a, o)
              })(e.randomBytes(t), e.n)
            },
            precompute: (t = 8, e = u.BASE) => (
              e._setWindowSize(t), e.multiply(BigInt(3)), e
            ),
          }
          function y(t) {
            const e = t instanceof Uint8Array,
              n = 'string' == typeof t,
              r = (e || n) && t.length
            return e
              ? r === o || r === i
              : n
                ? r === 2 * o || r === 2 * i
                : t instanceof u
          }
          const b =
              e.bits2int ||
              function (t) {
                const n = tn(t),
                  r = 8 * t.length - e.nBitLength
                return r > 0 ? n >> BigInt(r) : n
              },
            v =
              e.bits2int_modN ||
              function (t) {
                return a(b(t))
              },
            w = sn(e.nBitLength)
          function A(t) {
            if ('bigint' != typeof t) throw new Error('bigint expected')
            if (!(Ln <= t && t < w))
              throw new Error(`bigint expected < 2^${e.nBitLength}`)
            return nn(t, e.nByteLength)
          }
          function x(t, r, o = E) {
            if (['recovered', 'canonical'].some((t) => t in o))
              throw new Error('sign() legacy options not supported')
            const { hash: i, randomBytes: c } = e
            let { lowS: h, prehash: p, extraEntropy: m } = o
            null == h && (h = !0),
              (t = on('msgHash', t)),
              p && (t = on('prehashed msgHash', i(t)))
            const y = v(t),
              w = l(r),
              x = [A(w), A(y)]
            if (null != m) {
              const t = !0 === m ? c(n.BYTES) : m
              x.push(on('extraEntropy', t))
            }
            const k = an(...x),
              R = y
            return {
              seed: k,
              k2sig: function (t) {
                const e = b(t)
                if (!f(e)) return
                const n = s(e),
                  r = u.BASE.multiply(e).toAffine(),
                  o = a(r.x)
                if (o === Ln) return
                const i = a(n * a(R + o * w))
                if (i === Ln) return
                let l = (r.x === o ? 0 : 2) | Number(r.y & Fn),
                  c = i
                return (
                  h &&
                    d(i) &&
                    ((c = (function (t) {
                      return d(t) ? a(-t) : t
                    })(i)),
                    (l ^= 1)),
                  new g(o, c, l)
                )
              },
            }
          }
          const E = { lowS: e.lowS, prehash: !1 },
            k = { lowS: e.lowS, prehash: !1 }
          return (
            u.BASE._setWindowSize(8),
            {
              CURVE: e,
              getPublicKey: function (t, e = !0) {
                return u.fromPrivateKey(t).toRawBytes(e)
              },
              getSharedSecret: function (t, e, n = !0) {
                if (y(t)) throw new Error('first arg must be private key')
                if (!y(e)) throw new Error('second arg must be public key')
                return u.fromHex(e).multiply(l(t)).toRawBytes(n)
              },
              sign: function (t, n, r = E) {
                const { seed: o, k2sig: i } = x(t, n, r),
                  a = e
                return cn(a.hash.outputLen, a.nByteLength, a.hmac)(o, i)
              },
              verify: function (t, n, r, o = k) {
                const i = t
                if (
                  ((n = on('msgHash', n)),
                  (r = on('publicKey', r)),
                  'strict' in o)
                )
                  throw new Error('options.strict was renamed to lowS')
                const { lowS: l, prehash: c } = o
                let f, h
                try {
                  if ('string' == typeof i || i instanceof Uint8Array)
                    try {
                      f = g.fromDER(i)
                    } catch (t) {
                      if (!(t instanceof Dn.Err)) throw t
                      f = g.fromCompact(i)
                    }
                  else {
                    if (
                      'object' != typeof i ||
                      'bigint' != typeof i.r ||
                      'bigint' != typeof i.s
                    )
                      throw new Error('PARSE')
                    {
                      const { r: t, s: e } = i
                      f = new g(t, e)
                    }
                  }
                  h = u.fromHex(r)
                } catch (t) {
                  if ('PARSE' === t.message)
                    throw new Error(
                      'signature must be Signature instance, Uint8Array or hex string',
                    )
                  return !1
                }
                if (l && f.hasHighS()) return !1
                c && (n = e.hash(n))
                const { r: d, s: p } = f,
                  m = v(n),
                  y = s(p),
                  b = a(m * y),
                  w = a(d * y),
                  A = u.BASE.multiplyAndAddUnsafe(h, b, w)?.toAffine()
                return !!A && a(A.x) === d
              },
              ProjectivePoint: u,
              Signature: g,
              utils: m,
            }
          )
        }
        function Hn(t) {
          return {
            hash: t,
            hmac: (e, ...n) => Sn(t, e, (0, Ae.Id)(...n)),
            randomBytes: Ae.po,
          }
        }
        const zn = BigInt(
            '0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f',
          ),
          Qn = BigInt(
            '0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141',
          ),
          Vn = BigInt(1),
          Wn = BigInt(2),
          Jn = (t, e) => (t + e / Wn) / e
        function Kn(t) {
          const e = zn,
            n = BigInt(3),
            r = BigInt(6),
            o = BigInt(11),
            i = BigInt(22),
            a = BigInt(23),
            s = BigInt(44),
            u = BigInt(88),
            l = (t * t * t) % e,
            c = (l * l * t) % e,
            f = (xn(c, n, e) * c) % e,
            h = (xn(f, n, e) * c) % e,
            d = (xn(h, Wn, e) * l) % e,
            p = (xn(d, o, e) * d) % e,
            g = (xn(p, i, e) * p) % e,
            m = (xn(g, s, e) * g) % e,
            y = (xn(m, u, e) * m) % e,
            b = (xn(y, s, e) * g) % e,
            v = (xn(b, n, e) * c) % e,
            w = (xn(v, a, e) * p) % e,
            A = (xn(w, r, e) * l) % e,
            x = xn(A, Wn, e)
          if (!qn.eql(qn.sqr(x), t)) throw new Error('Cannot find square root')
          return x
        }
        const qn = (function (t, e, n = !1, r = {}) {
            if (t <= dn) throw new Error(`Expected Field ORDER > 0, got ${t}`)
            const { nBitLength: o, nByteLength: i } = Nn(t, e)
            if (i > 2048)
              throw new Error('Field lengths over 2048 bytes are not supported')
            const a = kn(t),
              s = Object.freeze({
                ORDER: t,
                BITS: o,
                BYTES: i,
                MASK: sn(o),
                ZERO: dn,
                ONE: pn,
                create: (e) => wn(e, t),
                isValid: (e) => {
                  if ('bigint' != typeof e)
                    throw new Error(
                      'Invalid field element: expected bigint, got ' + typeof e,
                    )
                  return dn <= e && e < t
                },
                is0: (t) => t === dn,
                isOdd: (t) => (t & pn) === pn,
                neg: (e) => wn(-e, t),
                eql: (t, e) => t === e,
                sqr: (e) => wn(e * e, t),
                add: (e, n) => wn(e + n, t),
                sub: (e, n) => wn(e - n, t),
                mul: (e, n) => wn(e * n, t),
                pow: (t, e) =>
                  (function (t, e, n) {
                    if (n < dn) throw new Error('Expected power > 0')
                    if (n === dn) return t.ONE
                    if (n === pn) return e
                    let r = t.ONE,
                      o = e
                    for (; n > dn; )
                      n & pn && (r = t.mul(r, o)), (o = t.sqr(o)), (n >>= pn)
                    return r
                  })(s, t, e),
                div: (e, n) => wn(e * En(n, t), t),
                sqrN: (t) => t * t,
                addN: (t, e) => t + e,
                subN: (t, e) => t - e,
                mulN: (t, e) => t * e,
                inv: (e) => En(e, t),
                sqrt: r.sqrt || ((t) => a(s, t)),
                invertBatch: (t) =>
                  (function (t, e) {
                    const n = new Array(e.length),
                      r = e.reduce(
                        (e, r, o) => (t.is0(r) ? e : ((n[o] = e), t.mul(e, r))),
                        t.ONE,
                      ),
                      o = t.inv(r)
                    return (
                      e.reduceRight(
                        (e, r, o) =>
                          t.is0(r) ? e : ((n[o] = t.mul(e, n[o])), t.mul(e, r)),
                        o,
                      ),
                      n
                    )
                  })(s, t),
                cmov: (t, e, n) => (n ? e : t),
                toBytes: (t) => (n ? rn(t, i) : nn(t, i)),
                fromBytes: (t) => {
                  if (t.length !== i)
                    throw new Error(
                      `Fp.fromBytes: expected ${i}, got ${t.length}`,
                    )
                  return n ? en(t) : tn(t)
                },
              })
            return Object.freeze(s)
          })(zn, void 0, void 0, { sqrt: Kn }),
          Zn = (function (t, e) {
            const n = (e) => Gn({ ...t, ...Hn(e) })
            return Object.freeze({ ...n(e), create: n })
          })(
            {
              a: BigInt(0),
              b: BigInt(7),
              Fp: qn,
              n: Qn,
              Gx: BigInt(
                '55066263022277343669578718895168534326250603453777594175500187360389116729240',
              ),
              Gy: BigInt(
                '32670510020758816978083085130507043184471273380659243275938904335757337482424',
              ),
              h: BigInt(1),
              lowS: !0,
              endo: {
                beta: BigInt(
                  '0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee',
                ),
                splitScalar: (t) => {
                  const e = Qn,
                    n = BigInt('0x3086d221a7d46bcde86c90e49284eb15'),
                    r = -Vn * BigInt('0xe4437ed6010e88286f547fa90abfe4c3'),
                    o = BigInt('0x114ca50f7a8e2f3f657c1108d9d44cfd8'),
                    i = n,
                    a = BigInt('0x100000000000000000000000000000000'),
                    s = Jn(i * t, e),
                    u = Jn(-r * t, e)
                  let l = wn(t - s * n - u * o, e),
                    c = wn(-s * r - u * i, e)
                  const f = l > a,
                    h = c > a
                  if ((f && (l = e - l), h && (c = e - c), l > a || c > a))
                    throw new Error('splitScalar: Endomorphism failed, k=' + t)
                  return { k1neg: f, k1: l, k2neg: h, k2: c }
                },
              },
            },
            Oe,
          )
        BigInt(0)
        Zn.ProjectivePoint
        class Yn {
          #K
          constructor(t) {
            ;(0, l.MR)(
              32 === (0, p.pO)(t),
              'invalid private key',
              'privateKey',
              '[REDACTED]',
            ),
              (this.#K = (0, p.c$)(t))
          }
          get privateKey() {
            return this.#K
          }
          get publicKey() {
            return Yn.computePublicKey(this.#K)
          }
          get compressedPublicKey() {
            return Yn.computePublicKey(this.#K, !0)
          }
          sign(t) {
            ;(0, l.MR)(
              32 === (0, p.pO)(t),
              'invalid digest length',
              'digest',
              t,
            )
            const e = Zn.sign((0, p.Lm)(t), (0, p.Lm)(this.#K), { lowS: !0 })
            return z.from({
              r: (0, g.up)(e.r, 32),
              s: (0, g.up)(e.s, 32),
              v: e.recovery ? 28 : 27,
            })
          }
          computeSharedSecret(t) {
            const e = Yn.computePublicKey(t)
            return (0, p.c$)(
              Zn.getSharedSecret((0, p.Lm)(this.#K), (0, p.q5)(e), !1),
            )
          }
          static computePublicKey(t, e) {
            let n = (0, p.q5)(t, 'key')
            if (32 === n.length) {
              const t = Zn.getPublicKey(n, !!e)
              return (0, p.c$)(t)
            }
            if (64 === n.length) {
              const t = new Uint8Array(65)
              ;(t[0] = 4), t.set(n, 1), (n = t)
            }
            const r = Zn.ProjectivePoint.fromHex(n)
            return (0, p.c$)(r.toRawBytes(e))
          }
          static recoverPublicKey(t, e) {
            ;(0, l.MR)(
              32 === (0, p.pO)(t),
              'invalid digest length',
              'digest',
              t,
            )
            const n = z.from(e)
            let r = Zn.Signature.fromCompact((0, p.Lm)((0, p.xW)([n.r, n.s])))
            r = r.addRecoveryBit(n.yParity)
            const o = r.recoverPublicKey((0, p.Lm)(t))
            return (
              (0, l.MR)(
                null != o,
                'invalid signature for digest',
                'signature',
                e,
              ),
              '0x' + o.toHex(!1)
            )
          }
          static addPoints(t, e, n) {
            const r = Zn.ProjectivePoint.fromHex(
                Yn.computePublicKey(t).substring(2),
              ),
              o = Zn.ProjectivePoint.fromHex(
                Yn.computePublicKey(e).substring(2),
              )
            return '0x' + r.add(o).toHex(!!n)
          }
        }
        function $n(t) {
          let e = t.toString(16)
          for (; e.length < 2; ) e = '0' + e
          return '0x' + e
        }
        function Xn(t, e, n) {
          let r = 0
          for (let o = 0; o < n; o++) r = 256 * r + t[e + o]
          return r
        }
        function tr(t, e, n, r) {
          const o = []
          for (; n < e + 1 + r; ) {
            const i = er(t, n)
            o.push(i.result),
              (n += i.consumed),
              (0, l.vA)(
                n <= e + 1 + r,
                'child data too short',
                'BUFFER_OVERRUN',
                { buffer: t, length: r, offset: e },
              )
          }
          return { consumed: 1 + r, result: o }
        }
        function er(t, e) {
          ;(0, l.vA)(0 !== t.length, 'data too short', 'BUFFER_OVERRUN', {
            buffer: t,
            length: 0,
            offset: 1,
          })
          const n = (e) => {
            ;(0, l.vA)(
              e <= t.length,
              'data short segment too short',
              'BUFFER_OVERRUN',
              { buffer: t, length: t.length, offset: e },
            )
          }
          if (t[e] >= 248) {
            const r = t[e] - 247
            n(e + 1 + r)
            const o = Xn(t, e + 1, r)
            return n(e + 1 + r + o), tr(t, e, e + 1 + r, r + o)
          }
          if (t[e] >= 192) {
            const r = t[e] - 192
            return n(e + 1 + r), tr(t, e, e + 1, r)
          }
          if (t[e] >= 184) {
            const r = t[e] - 183
            n(e + 1 + r)
            const o = Xn(t, e + 1, r)
            n(e + 1 + r + o)
            return {
              consumed: 1 + r + o,
              result: (0, p.c$)(t.slice(e + 1 + r, e + 1 + r + o)),
            }
          }
          if (t[e] >= 128) {
            const r = t[e] - 128
            n(e + 1 + r)
            return {
              consumed: 1 + r,
              result: (0, p.c$)(t.slice(e + 1, e + 1 + r)),
            }
          }
          return { consumed: 1, result: $n(t[e]) }
        }
        function nr(t) {
          const e = (0, p.q5)(t, 'data'),
            n = er(e, 0)
          return (
            (0, l.MR)(
              n.consumed === e.length,
              'unexpected junk after rlp payload',
              'data',
              t,
            ),
            n.result
          )
        }
        function rr(t) {
          const e = []
          for (; t; ) e.unshift(255 & t), (t >>= 8)
          return e
        }
        function or(t) {
          if (Array.isArray(t)) {
            let e = []
            if (
              (t.forEach(function (t) {
                e = e.concat(or(t))
              }),
              e.length <= 55)
            )
              return e.unshift(192 + e.length), e
            const n = rr(e.length)
            return n.unshift(247 + n.length), n.concat(e)
          }
          const e = Array.prototype.slice.call((0, p.q5)(t, 'object'))
          if (1 === e.length && e[0] <= 127) return e
          if (e.length <= 55) return e.unshift(128 + e.length), e
          const n = rr(e.length)
          return n.unshift(183 + n.length), n.concat(e)
        }
        const ir = '0123456789abcdef'
        function ar(t) {
          let e = '0x'
          for (const n of or(t)) (e += ir[n >> 4]), (e += ir[15 & n])
          return e
        }
        function sr(t, e) {
          return (function (t) {
            let e
            return (
              (e =
                'string' == typeof t
                  ? Yn.computePublicKey(t, !1)
                  : t.publicKey),
              (0, f.b)((0, d.S)('0x' + e.substring(4)).substring(26))
            )
          })(Yn.recoverPublicKey(t, e))
        }
        const ur = BigInt(0),
          lr = BigInt(2),
          cr = BigInt(27),
          fr = BigInt(28),
          hr = BigInt(35),
          dr = BigInt(
            '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
          ),
          pr = 131072
        function gr(t, e) {
          let n = t.toString(16)
          for (; n.length < 2; ) n = '0' + n
          return (n += Ve(e).substring(4)), '0x' + n
        }
        function mr(t) {
          return '0x' === t ? null : (0, f.b)(t)
        }
        function yr(t, e) {
          try {
            return (0, T.$)(t)
          } catch (n) {
            ;(0, l.MR)(!1, n.message, e, t)
          }
        }
        function br(t, e) {
          try {
            if (!Array.isArray(t))
              throw new Error('authorizationList: invalid array')
            const e = []
            for (let n = 0; n < t.length; n++) {
              const r = t[n]
              if (!Array.isArray(r))
                throw new Error(`authorization[${n}]: invalid array`)
              if (6 !== r.length)
                throw new Error(`authorization[${n}]: wrong length`)
              if (!r[1]) throw new Error(`authorization[${n}]: null address`)
              e.push({
                address: mr(r[1]),
                nonce: wr(r[2], 'nonce'),
                chainId: wr(r[0], 'chainId'),
                signature: z.from({
                  yParity: vr(r[3], 'yParity'),
                  r: (0, p.nx)(r[4], 32),
                  s: (0, p.nx)(r[5], 32),
                }),
              })
            }
            return e
          } catch (n) {
            ;(0, l.MR)(!1, n.message, e, t)
          }
        }
        function vr(t, e) {
          return '0x' === t ? 0 : (0, g.WZ)(t, e)
        }
        function wr(t, e) {
          if ('0x' === t) return ur
          const n = (0, g.Ab)(t, e)
          return (0, l.MR)(n <= dr, 'value exceeds uint size', e, n), n
        }
        function Ar(t, e) {
          const n = (0, g.Ab)(t, 'value'),
            r = (0, g.c4)(n)
          return (0, l.MR)(r.length <= 32, 'value too large', `tx.${e}`, n), r
        }
        function xr(t) {
          return (0, T.$)(t).map((t) => [t.address, t.storageKeys])
        }
        function Er(t, e) {
          ;(0, l.MR)(Array.isArray(t), `invalid ${e}`, 'value', t)
          for (let e = 0; e < t.length; e++)
            (0, l.MR)(
              (0, p.Lo)(t[e], 32),
              'invalid ${ param } hash',
              `value[${e}]`,
              t[e],
            )
          return t
        }
        function kr(t, e) {
          let n
          try {
            if (((n = vr(e[0], 'yParity')), 0 !== n && 1 !== n))
              throw new Error('bad yParity')
          } catch (t) {
            ;(0, l.MR)(!1, 'invalid yParity', 'yParity', e[0])
          }
          const r = (0, p.nx)(e[1], 32),
            o = (0, p.nx)(e[2], 32),
            i = z.from({ r, s: o, yParity: n })
          t.signature = i
        }
        class Rr {
          #q
          #Z
          #c
          #Y
          #$
          #X
          #tt
          #et
          #nt
          #rt
          #ot
          #it
          #at
          #st
          #ut
          #lt
          #ct
          get type() {
            return this.#q
          }
          set type(t) {
            switch (t) {
              case null:
                this.#q = null
                break
              case 0:
              case 'legacy':
                this.#q = 0
                break
              case 1:
              case 'berlin':
              case 'eip-2930':
                this.#q = 1
                break
              case 2:
              case 'london':
              case 'eip-1559':
                this.#q = 2
                break
              case 3:
              case 'cancun':
              case 'eip-4844':
                this.#q = 3
                break
              case 4:
              case 'pectra':
              case 'eip-7702':
                this.#q = 4
                break
              default:
                ;(0, l.MR)(!1, 'unsupported transaction type', 'type', t)
            }
          }
          get typeName() {
            switch (this.type) {
              case 0:
                return 'legacy'
              case 1:
                return 'eip-2930'
              case 2:
                return 'eip-1559'
              case 3:
                return 'eip-4844'
              case 4:
                return 'eip-7702'
            }
            return null
          }
          get to() {
            const t = this.#Z
            return null == t && 3 === this.type ? at : t
          }
          set to(t) {
            this.#Z = null == t ? null : (0, f.b)(t)
          }
          get nonce() {
            return this.#Y
          }
          set nonce(t) {
            this.#Y = (0, g.WZ)(t, 'value')
          }
          get gasLimit() {
            return this.#$
          }
          set gasLimit(t) {
            this.#$ = (0, g.Ab)(t)
          }
          get gasPrice() {
            const t = this.#X
            return null != t || (0 !== this.type && 1 !== this.type) ? t : ur
          }
          set gasPrice(t) {
            this.#X = null == t ? null : (0, g.Ab)(t, 'gasPrice')
          }
          get maxPriorityFeePerGas() {
            const t = this.#tt
            return null == t
              ? 2 === this.type || 3 === this.type
                ? ur
                : null
              : t
          }
          set maxPriorityFeePerGas(t) {
            this.#tt = null == t ? null : (0, g.Ab)(t, 'maxPriorityFeePerGas')
          }
          get maxFeePerGas() {
            const t = this.#et
            return null == t
              ? 2 === this.type || 3 === this.type
                ? ur
                : null
              : t
          }
          set maxFeePerGas(t) {
            this.#et = null == t ? null : (0, g.Ab)(t, 'maxFeePerGas')
          }
          get data() {
            return this.#c
          }
          set data(t) {
            this.#c = (0, p.c$)(t)
          }
          get value() {
            return this.#nt
          }
          set value(t) {
            this.#nt = (0, g.Ab)(t, 'value')
          }
          get chainId() {
            return this.#rt
          }
          set chainId(t) {
            this.#rt = (0, g.Ab)(t)
          }
          get signature() {
            return this.#ot || null
          }
          set signature(t) {
            this.#ot = null == t ? null : z.from(t)
          }
          get accessList() {
            const t = this.#it || null
            return null == t
              ? 1 === this.type || 2 === this.type || 3 === this.type
                ? []
                : null
              : t
          }
          set accessList(t) {
            this.#it = null == t ? null : (0, T.$)(t)
          }
          get authorizationList() {
            const t = this.#ct || null
            return null == t && 4 === this.type ? [] : t
          }
          set authorizationList(t) {
            this.#ct = null == t ? null : t.map((t) => Q(t))
          }
          get maxFeePerBlobGas() {
            const t = this.#at
            return null == t && 3 === this.type ? ur : t
          }
          set maxFeePerBlobGas(t) {
            this.#at = null == t ? null : (0, g.Ab)(t, 'maxFeePerBlobGas')
          }
          get blobVersionedHashes() {
            let t = this.#st
            return null == t && 3 === this.type ? [] : t
          }
          set blobVersionedHashes(t) {
            if (null != t) {
              ;(0, l.MR)(
                Array.isArray(t),
                'blobVersionedHashes must be an Array',
                'value',
                t,
              ),
                (t = t.slice())
              for (let e = 0; e < t.length; e++)
                (0, l.MR)(
                  (0, p.Lo)(t[e], 32),
                  'invalid blobVersionedHash',
                  `value[${e}]`,
                  t[e],
                )
            }
            this.#st = t
          }
          get blobs() {
            return null == this.#lt
              ? null
              : this.#lt.map((t) => Object.assign({}, t))
          }
          set blobs(t) {
            if (null == t) return void (this.#lt = null)
            const e = [],
              n = []
            for (let r = 0; r < t.length; r++) {
              const o = t[r]
              if ((0, p.f)(o)) {
                ;(0, l.vA)(
                  this.#ut,
                  'adding a raw blob requires a KZG library',
                  'UNSUPPORTED_OPERATION',
                  { operation: 'set blobs()' },
                )
                let t = (0, p.q5)(o)
                if (
                  ((0, l.MR)(
                    t.length <= pr,
                    'blob is too large',
                    `blobs[${r}]`,
                    o,
                  ),
                  t.length !== pr)
                ) {
                  const e = new Uint8Array(pr)
                  e.set(t), (t = e)
                }
                const i = this.#ut.blobToKzgCommitment(t),
                  a = (0, p.c$)(this.#ut.computeBlobKzgProof(t, i))
                e.push({
                  data: (0, p.c$)(t),
                  commitment: (0, p.c$)(i),
                  proof: a,
                }),
                  n.push(gr(1, i))
              } else {
                const t = (0, p.c$)(o.commitment)
                e.push({
                  data: (0, p.c$)(o.data),
                  commitment: t,
                  proof: (0, p.c$)(o.proof),
                }),
                  n.push(gr(1, t))
              }
            }
            ;(this.#lt = e), (this.#st = n)
          }
          get kzg() {
            return this.#ut
          }
          set kzg(t) {
            this.#ut =
              null == t
                ? null
                : (function (t) {
                    return {
                      blobToKzgCommitment: (e) => {
                        if ('computeBlobProof' in t) {
                          if (
                            'blobToKzgCommitment' in t &&
                            'function' == typeof t.blobToKzgCommitment
                          )
                            return (0, p.q5)(
                              t.blobToKzgCommitment((0, p.c$)(e)),
                            )
                        } else if (
                          'blobToKzgCommitment' in t &&
                          'function' == typeof t.blobToKzgCommitment
                        )
                          return (0, p.q5)(t.blobToKzgCommitment(e))
                        if (
                          'blobToKZGCommitment' in t &&
                          'function' == typeof t.blobToKZGCommitment
                        )
                          return (0, p.q5)(t.blobToKZGCommitment((0, p.c$)(e)))
                        ;(0, l.MR)(!1, 'unsupported KZG library', 'kzg', t)
                      },
                      computeBlobKzgProof: (e, n) =>
                        'computeBlobProof' in t &&
                        'function' == typeof t.computeBlobProof
                          ? (0, p.q5)(
                              t.computeBlobProof((0, p.c$)(e), (0, p.c$)(n)),
                            )
                          : 'computeBlobKzgProof' in t &&
                              'function' == typeof t.computeBlobKzgProof
                            ? t.computeBlobKzgProof(e, n)
                            : 'computeBlobKZGProof' in t &&
                                'function' == typeof t.computeBlobKZGProof
                              ? (0, p.q5)(
                                  t.computeBlobKZGProof(
                                    (0, p.c$)(e),
                                    (0, p.c$)(n),
                                  ),
                                )
                              : void (0, l.MR)(
                                  !1,
                                  'unsupported KZG library',
                                  'kzg',
                                  t,
                                ),
                    }
                  })(t)
          }
          constructor() {
            ;(this.#q = null),
              (this.#Z = null),
              (this.#Y = 0),
              (this.#$ = ur),
              (this.#X = null),
              (this.#tt = null),
              (this.#et = null),
              (this.#c = '0x'),
              (this.#nt = ur),
              (this.#rt = ur),
              (this.#ot = null),
              (this.#it = null),
              (this.#at = null),
              (this.#st = null),
              (this.#ut = null),
              (this.#lt = null),
              (this.#ct = null)
          }
          get hash() {
            return null == this.signature ? null : (0, d.S)(this.#ft(!0, !1))
          }
          get unsignedHash() {
            return (0, d.S)(this.unsignedSerialized)
          }
          get from() {
            return null == this.signature
              ? null
              : sr(this.unsignedHash, this.signature)
          }
          get fromPublicKey() {
            return null == this.signature
              ? null
              : Yn.recoverPublicKey(this.unsignedHash, this.signature)
          }
          isSigned() {
            return null != this.signature
          }
          #ft(t, e) {
            ;(0, l.vA)(
              !t || null != this.signature,
              'cannot serialize unsigned transaction; maybe you meant .unsignedSerialized',
              'UNSUPPORTED_OPERATION',
              { operation: '.serialized' },
            )
            const n = t ? this.signature : null
            switch (this.inferType()) {
              case 0:
                return (function (t, e) {
                  const n = [
                    Ar(t.nonce, 'nonce'),
                    Ar(t.gasPrice || 0, 'gasPrice'),
                    Ar(t.gasLimit, 'gasLimit'),
                    t.to || '0x',
                    Ar(t.value, 'value'),
                    t.data,
                  ]
                  let r = ur
                  if (t.chainId != ur)
                    (r = (0, g.Ab)(t.chainId, 'tx.chainId')),
                      (0, l.MR)(
                        !e || null == e.networkV || e.legacyChainId === r,
                        'tx.chainId/sig.v mismatch',
                        'sig',
                        e,
                      )
                  else if (t.signature) {
                    const e = t.signature.legacyChainId
                    null != e && (r = e)
                  }
                  if (!e)
                    return (
                      r !== ur &&
                        (n.push((0, g.c4)(r)), n.push('0x'), n.push('0x')),
                      ar(n)
                    )
                  let o = BigInt(27 + e.yParity)
                  return (
                    r !== ur
                      ? (o = z.getChainIdV(r, e.v))
                      : BigInt(e.v) !== o &&
                        (0, l.MR)(!1, 'tx.chainId/sig.v mismatch', 'sig', e),
                    n.push((0, g.c4)(o)),
                    n.push((0, g.c4)(e.r)),
                    n.push((0, g.c4)(e.s)),
                    ar(n)
                  )
                })(this, n)
              case 1:
                return (function (t, e) {
                  const n = [
                    Ar(t.chainId, 'chainId'),
                    Ar(t.nonce, 'nonce'),
                    Ar(t.gasPrice || 0, 'gasPrice'),
                    Ar(t.gasLimit, 'gasLimit'),
                    t.to || '0x',
                    Ar(t.value, 'value'),
                    t.data,
                    xr(t.accessList || []),
                  ]
                  return (
                    e &&
                      (n.push(Ar(e.yParity, 'recoveryParam')),
                      n.push((0, g.c4)(e.r)),
                      n.push((0, g.c4)(e.s))),
                    (0, p.xW)(['0x01', ar(n)])
                  )
                })(this, n)
              case 2:
                return (function (t, e) {
                  const n = [
                    Ar(t.chainId, 'chainId'),
                    Ar(t.nonce, 'nonce'),
                    Ar(t.maxPriorityFeePerGas || 0, 'maxPriorityFeePerGas'),
                    Ar(t.maxFeePerGas || 0, 'maxFeePerGas'),
                    Ar(t.gasLimit, 'gasLimit'),
                    t.to || '0x',
                    Ar(t.value, 'value'),
                    t.data,
                    xr(t.accessList || []),
                  ]
                  return (
                    e &&
                      (n.push(Ar(e.yParity, 'yParity')),
                      n.push((0, g.c4)(e.r)),
                      n.push((0, g.c4)(e.s))),
                    (0, p.xW)(['0x02', ar(n)])
                  )
                })(this, n)
              case 3:
                return (function (t, e, n) {
                  const r = [
                    Ar(t.chainId, 'chainId'),
                    Ar(t.nonce, 'nonce'),
                    Ar(t.maxPriorityFeePerGas || 0, 'maxPriorityFeePerGas'),
                    Ar(t.maxFeePerGas || 0, 'maxFeePerGas'),
                    Ar(t.gasLimit, 'gasLimit'),
                    t.to || at,
                    Ar(t.value, 'value'),
                    t.data,
                    xr(t.accessList || []),
                    Ar(t.maxFeePerBlobGas || 0, 'maxFeePerBlobGas'),
                    Er(t.blobVersionedHashes || [], 'blobVersionedHashes'),
                  ]
                  return e &&
                    (r.push(Ar(e.yParity, 'yParity')),
                    r.push((0, g.c4)(e.r)),
                    r.push((0, g.c4)(e.s)),
                    n)
                    ? (0, p.xW)([
                        '0x03',
                        ar([
                          r,
                          n.map((t) => t.data),
                          n.map((t) => t.commitment),
                          n.map((t) => t.proof),
                        ]),
                      ])
                    : (0, p.xW)(['0x03', ar(r)])
                })(this, n, e ? this.blobs : null)
              case 4:
                return (function (t, e) {
                  const n = [
                    Ar(t.chainId, 'chainId'),
                    Ar(t.nonce, 'nonce'),
                    Ar(t.maxPriorityFeePerGas || 0, 'maxPriorityFeePerGas'),
                    Ar(t.maxFeePerGas || 0, 'maxFeePerGas'),
                    Ar(t.gasLimit, 'gasLimit'),
                    t.to || '0x',
                    Ar(t.value, 'value'),
                    t.data,
                    xr(t.accessList || []),
                    ((r = t.authorizationList || []),
                    r.map((t) => [
                      Ar(t.chainId, 'chainId'),
                      t.address,
                      Ar(t.nonce, 'nonce'),
                      Ar(t.signature.yParity, 'yParity'),
                      (0, g.c4)(t.signature.r),
                      (0, g.c4)(t.signature.s),
                    ])),
                  ]
                  var r
                  return (
                    e &&
                      (n.push(Ar(e.yParity, 'yParity')),
                      n.push((0, g.c4)(e.r)),
                      n.push((0, g.c4)(e.s))),
                    (0, p.xW)(['0x04', ar(n)])
                  )
                })(this, n)
            }
            ;(0, l.vA)(
              !1,
              'unsupported transaction type',
              'UNSUPPORTED_OPERATION',
              { operation: '.serialized' },
            )
          }
          get serialized() {
            return this.#ft(!0, !0)
          }
          get unsignedSerialized() {
            return this.#ft(!1, !1)
          }
          inferType() {
            const t = this.inferTypes()
            return t.indexOf(2) >= 0 ? 2 : t.pop()
          }
          inferTypes() {
            const t = null != this.gasPrice,
              e =
                null != this.maxFeePerGas || null != this.maxPriorityFeePerGas,
              n = null != this.accessList,
              r = null != this.#at || this.#st
            null != this.maxFeePerGas &&
              null != this.maxPriorityFeePerGas &&
              (0, l.vA)(
                this.maxFeePerGas >= this.maxPriorityFeePerGas,
                'priorityFee cannot be more than maxFee',
                'BAD_DATA',
                { value: this },
              ),
              (0, l.vA)(
                !e || (0 !== this.type && 1 !== this.type),
                'transaction type cannot have maxFeePerGas or maxPriorityFeePerGas',
                'BAD_DATA',
                { value: this },
              ),
              (0, l.vA)(
                0 !== this.type || !n,
                'legacy transaction cannot have accessList',
                'BAD_DATA',
                { value: this },
              )
            const o = []
            return (
              null != this.type
                ? o.push(this.type)
                : this.authorizationList && this.authorizationList.length
                  ? o.push(4)
                  : e
                    ? o.push(2)
                    : t
                      ? (o.push(1), n || o.push(0))
                      : n
                        ? (o.push(1), o.push(2))
                        : ((r && this.to) || (o.push(0), o.push(1), o.push(2)),
                          o.push(3)),
              o.sort(),
              o
            )
          }
          isLegacy() {
            return 0 === this.type
          }
          isBerlin() {
            return 1 === this.type
          }
          isLondon() {
            return 2 === this.type
          }
          isCancun() {
            return 3 === this.type
          }
          clone() {
            return Rr.from(this)
          }
          toJSON() {
            const t = (t) => (null == t ? null : t.toString())
            return {
              type: this.type,
              to: this.to,
              data: this.data,
              nonce: this.nonce,
              gasLimit: t(this.gasLimit),
              gasPrice: t(this.gasPrice),
              maxPriorityFeePerGas: t(this.maxPriorityFeePerGas),
              maxFeePerGas: t(this.maxFeePerGas),
              value: t(this.value),
              chainId: t(this.chainId),
              sig: this.signature ? this.signature.toJSON() : null,
              accessList: this.accessList,
            }
          }
          static from(t) {
            if (null == t) return new Rr()
            if ('string' == typeof t) {
              const e = (0, p.q5)(t)
              if (e[0] >= 127)
                return Rr.from(
                  (function (t) {
                    const e = nr(t)
                    ;(0, l.MR)(
                      Array.isArray(e) && (9 === e.length || 6 === e.length),
                      'invalid field count for legacy transaction',
                      'data',
                      t,
                    )
                    const n = {
                      type: 0,
                      nonce: vr(e[0], 'nonce'),
                      gasPrice: wr(e[1], 'gasPrice'),
                      gasLimit: wr(e[2], 'gasLimit'),
                      to: mr(e[3]),
                      value: wr(e[4], 'value'),
                      data: (0, p.c$)(e[5]),
                      chainId: ur,
                    }
                    if (6 === e.length) return n
                    const r = wr(e[6], 'v'),
                      o = wr(e[7], 'r'),
                      i = wr(e[8], 's')
                    if (o === ur && i === ur) n.chainId = r
                    else {
                      let t = (r - hr) / lr
                      t < ur && (t = ur),
                        (n.chainId = t),
                        (0, l.MR)(
                          t !== ur || r === cr || r === fr,
                          'non-canonical legacy v',
                          'v',
                          e[6],
                        ),
                        (n.signature = z.from({
                          r: (0, p.nx)(e[7], 32),
                          s: (0, p.nx)(e[8], 32),
                          v: r,
                        }))
                    }
                    return n
                  })(e),
                )
              switch (e[0]) {
                case 1:
                  return Rr.from(
                    (function (t) {
                      const e = nr((0, p.q5)(t).slice(1))
                      ;(0, l.MR)(
                        Array.isArray(e) && (8 === e.length || 11 === e.length),
                        'invalid field count for transaction type: 1',
                        'data',
                        (0, p.c$)(t),
                      )
                      const n = {
                        type: 1,
                        chainId: wr(e[0], 'chainId'),
                        nonce: vr(e[1], 'nonce'),
                        gasPrice: wr(e[2], 'gasPrice'),
                        gasLimit: wr(e[3], 'gasLimit'),
                        to: mr(e[4]),
                        value: wr(e[5], 'value'),
                        data: (0, p.c$)(e[6]),
                        accessList: yr(e[7], 'accessList'),
                      }
                      return 8 === e.length || kr(n, e.slice(8)), n
                    })(e),
                  )
                case 2:
                  return Rr.from(
                    (function (t) {
                      const e = nr((0, p.q5)(t).slice(1))
                      ;(0, l.MR)(
                        Array.isArray(e) && (9 === e.length || 12 === e.length),
                        'invalid field count for transaction type: 2',
                        'data',
                        (0, p.c$)(t),
                      )
                      const n = {
                        type: 2,
                        chainId: wr(e[0], 'chainId'),
                        nonce: vr(e[1], 'nonce'),
                        maxPriorityFeePerGas: wr(e[2], 'maxPriorityFeePerGas'),
                        maxFeePerGas: wr(e[3], 'maxFeePerGas'),
                        gasPrice: null,
                        gasLimit: wr(e[4], 'gasLimit'),
                        to: mr(e[5]),
                        value: wr(e[6], 'value'),
                        data: (0, p.c$)(e[7]),
                        accessList: yr(e[8], 'accessList'),
                      }
                      return 9 === e.length || kr(n, e.slice(9)), n
                    })(e),
                  )
                case 3:
                  return Rr.from(
                    (function (t) {
                      let e = nr((0, p.q5)(t).slice(1)),
                        n = '3',
                        r = null
                      if (4 === e.length && Array.isArray(e[0])) {
                        n = '3 (network format)'
                        const t = e[1],
                          o = e[2],
                          i = e[3]
                        ;(0, l.MR)(
                          Array.isArray(t),
                          'invalid network format: blobs not an array',
                          'fields[1]',
                          t,
                        ),
                          (0, l.MR)(
                            Array.isArray(o),
                            'invalid network format: commitments not an array',
                            'fields[2]',
                            o,
                          ),
                          (0, l.MR)(
                            Array.isArray(i),
                            'invalid network format: proofs not an array',
                            'fields[3]',
                            i,
                          ),
                          (0, l.MR)(
                            t.length === o.length,
                            'invalid network format: blobs/commitments length mismatch',
                            'fields',
                            e,
                          ),
                          (0, l.MR)(
                            t.length === i.length,
                            'invalid network format: blobs/proofs length mismatch',
                            'fields',
                            e,
                          ),
                          (r = [])
                        for (let n = 0; n < e[1].length; n++)
                          r.push({ data: t[n], commitment: o[n], proof: i[n] })
                        e = e[0]
                      }
                      ;(0, l.MR)(
                        Array.isArray(e) &&
                          (11 === e.length || 14 === e.length),
                        `invalid field count for transaction type: ${n}`,
                        'data',
                        (0, p.c$)(t),
                      )
                      const o = {
                        type: 3,
                        chainId: wr(e[0], 'chainId'),
                        nonce: vr(e[1], 'nonce'),
                        maxPriorityFeePerGas: wr(e[2], 'maxPriorityFeePerGas'),
                        maxFeePerGas: wr(e[3], 'maxFeePerGas'),
                        gasPrice: null,
                        gasLimit: wr(e[4], 'gasLimit'),
                        to: mr(e[5]),
                        value: wr(e[6], 'value'),
                        data: (0, p.c$)(e[7]),
                        accessList: yr(e[8], 'accessList'),
                        maxFeePerBlobGas: wr(e[9], 'maxFeePerBlobGas'),
                        blobVersionedHashes: e[10],
                      }
                      r && (o.blobs = r),
                        (0, l.MR)(
                          null != o.to,
                          `invalid address for transaction type: ${n}`,
                          'data',
                          t,
                        ),
                        (0, l.MR)(
                          Array.isArray(o.blobVersionedHashes),
                          'invalid blobVersionedHashes: must be an array',
                          'data',
                          t,
                        )
                      for (let e = 0; e < o.blobVersionedHashes.length; e++)
                        (0, l.MR)(
                          (0, p.Lo)(o.blobVersionedHashes[e], 32),
                          `invalid blobVersionedHash at index ${e}: must be length 32`,
                          'data',
                          t,
                        )
                      return 11 === e.length || kr(o, e.slice(11)), o
                    })(e),
                  )
                case 4:
                  return Rr.from(
                    (function (t) {
                      const e = nr((0, p.q5)(t).slice(1))
                      ;(0, l.MR)(
                        Array.isArray(e) &&
                          (10 === e.length || 13 === e.length),
                        'invalid field count for transaction type: 4',
                        'data',
                        (0, p.c$)(t),
                      )
                      const n = {
                        type: 4,
                        chainId: wr(e[0], 'chainId'),
                        nonce: vr(e[1], 'nonce'),
                        maxPriorityFeePerGas: wr(e[2], 'maxPriorityFeePerGas'),
                        maxFeePerGas: wr(e[3], 'maxFeePerGas'),
                        gasPrice: null,
                        gasLimit: wr(e[4], 'gasLimit'),
                        to: mr(e[5]),
                        value: wr(e[6], 'value'),
                        data: (0, p.c$)(e[7]),
                        accessList: yr(e[8], 'accessList'),
                        authorizationList: br(e[9], 'authorizationList'),
                      }
                      return 10 === e.length || kr(n, e.slice(10)), n
                    })(e),
                  )
              }
              ;(0, l.vA)(
                !1,
                'unsupported transaction type',
                'UNSUPPORTED_OPERATION',
                { operation: 'from' },
              )
            }
            const e = new Rr()
            return (
              null != t.type && (e.type = t.type),
              null != t.to && (e.to = t.to),
              null != t.nonce && (e.nonce = t.nonce),
              null != t.gasLimit && (e.gasLimit = t.gasLimit),
              null != t.gasPrice && (e.gasPrice = t.gasPrice),
              null != t.maxPriorityFeePerGas &&
                (e.maxPriorityFeePerGas = t.maxPriorityFeePerGas),
              null != t.maxFeePerGas && (e.maxFeePerGas = t.maxFeePerGas),
              null != t.maxFeePerBlobGas &&
                (e.maxFeePerBlobGas = t.maxFeePerBlobGas),
              null != t.data && (e.data = t.data),
              null != t.value && (e.value = t.value),
              null != t.chainId && (e.chainId = t.chainId),
              null != t.signature && (e.signature = z.from(t.signature)),
              null != t.accessList && (e.accessList = t.accessList),
              null != t.authorizationList &&
                (e.authorizationList = t.authorizationList),
              null != t.blobVersionedHashes &&
                (e.blobVersionedHashes = t.blobVersionedHashes),
              null != t.kzg && (e.kzg = t.kzg),
              null != t.blobs && (e.blobs = t.blobs),
              null != t.hash &&
                ((0, l.MR)(
                  e.isSigned(),
                  "unsigned transaction cannot define '.hash'",
                  'tx',
                  t,
                ),
                (0, l.MR)(e.hash === t.hash, 'hash mismatch', 'tx', t)),
              null != t.from &&
                ((0, l.MR)(
                  e.isSigned(),
                  "unsigned transaction cannot define '.from'",
                  'tx',
                  t,
                ),
                (0, l.MR)(
                  e.from.toLowerCase() === (t.from || '').toLowerCase(),
                  'from mismatch',
                  'tx',
                  t,
                )),
              e
            )
          }
        }
        var Nr = n(712)
        const Pr = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
        BigInt(0)
        const Cr = BigInt(58)
        function Or(t) {
          return (
            t.match(/^ipfs:\/\/ipfs\//i)
              ? (t = t.substring(12))
              : t.match(/^ipfs:\/\//i)
                ? (t = t.substring(7))
                : (0, l.MR)(!1, 'unsupported IPFS format', 'link', t),
            `https://gateway.ipfs.io/ipfs/${t}`
          )
        }
        class Sr {
          name
          constructor(t) {
            ;(0, m.n)(this, { name: t })
          }
          connect(t) {
            return this
          }
          supportsCoinType(t) {
            return !1
          }
          async encodeAddress(t, e) {
            throw new Error('unsupported coin')
          }
          async decodeAddress(t, e) {
            throw new Error('unsupported coin')
          }
        }
        const Ir = new RegExp('^(ipfs)://(.*)$', 'i'),
          Br = [
            new RegExp('^(https)://(.*)$', 'i'),
            new RegExp('^(data):(.*)$', 'i'),
            Ir,
            new RegExp('^eip155:[0-9]+/(erc[0-9]+):(.*)$', 'i'),
          ]
        class Tr {
          provider
          address
          name
          #ht
          #dt
          constructor(t, e, n) {
            ;(0, m.n)(this, { provider: t, address: e, name: n }),
              (this.#ht = null),
              (this.#dt = new st.NZ(
                e,
                [
                  'function supportsInterface(bytes4) view returns (bool)',
                  'function resolve(bytes, bytes) view returns (bytes)',
                  'function addr(bytes32) view returns (address)',
                  'function addr(bytes32, uint) view returns (bytes)',
                  'function text(bytes32, string) view returns (string)',
                  'function contenthash(bytes32) view returns (bytes)',
                ],
                t,
              ))
          }
          async supportsWildcard() {
            return (
              null == this.#ht &&
                (this.#ht = (async () => {
                  try {
                    return await this.#dt.supportsInterface('0x9061b923')
                  } catch (t) {
                    if ((0, l.bJ)(t, 'CALL_EXCEPTION')) return !1
                    throw ((this.#ht = null), t)
                  }
                })()),
              await this.#ht
            )
          }
          async #pt(t, e) {
            e = (e || []).slice()
            const n = this.#dt.interface
            e.unshift(be(this.name))
            let r = null
            ;(await this.supportsWildcard()) &&
              ((r = n.getFunction(t)),
              (0, l.vA)(r, 'missing fragment', 'UNKNOWN_ERROR', {
                info: { funcName: t },
              }),
              (e = [ve(this.name, 255), n.encodeFunctionData(r, e)]),
              (t = 'resolve(bytes,bytes)')),
              e.push({ enableCcipRead: !0 })
            try {
              const o = await this.#dt[t](...e)
              return r ? n.decodeFunctionResult(r, o)[0] : o
            } catch (t) {
              if (!(0, l.bJ)(t, 'CALL_EXCEPTION')) throw t
            }
            return null
          }
          async getAddress(t) {
            if ((null == t && (t = 60), 60 === t))
              try {
                const t = await this.#pt('addr(bytes32)')
                return null == t || t === at ? null : t
              } catch (t) {
                if ((0, l.bJ)(t, 'CALL_EXCEPTION')) return null
                throw t
              }
            if (t >= 0 && t < 2147483648) {
              let e = t + 2147483648
              const n = await this.#pt('addr(bytes32,uint)', [e])
              if ((0, p.Lo)(n, 20)) return (0, f.b)(n)
            }
            let e = null
            for (const n of this.provider.plugins)
              if (n instanceof Sr && n.supportsCoinType(t)) {
                e = n
                break
              }
            if (null == e) return null
            const n = await this.#pt('addr(bytes32,uint)', [t])
            if (null == n || '0x' === n) return null
            const r = await e.decodeAddress(t, n)
            if (null != r) return r
            ;(0, l.vA)(!1, 'invalid coin data', 'UNSUPPORTED_OPERATION', {
              operation: `getAddress(${t})`,
              info: { coinType: t, data: n },
            })
          }
          async getText(t) {
            const e = await this.#pt('text(bytes32,string)', [t])
            return null == e || '0x' === e ? null : e
          }
          async getContentHash() {
            const t = await this.#pt('contenthash(bytes32)')
            if (null == t || '0x' === t) return null
            const e = t.match(
              /^0x(e3010170|e5010172)(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/,
            )
            if (e) {
              const t = 'e3010170' === e[1] ? 'ipfs' : 'ipns',
                n = parseInt(e[4], 16)
              if (e[5].length === 2 * n)
                return `${t}://${(function (t) {
                  const e = (0, p.q5)(t)
                  let n = (0, g.Dg)(e),
                    r = ''
                  for (; n; ) (r = Pr[Number(n % Cr)] + r), (n /= Cr)
                  for (let t = 0; t < e.length && !e[t]; t++) r = Pr[0] + r
                  return r
                })('0x' + e[2])}`
            }
            const n = t.match(/^0xe40101fa011b20([0-9a-f]*)$/)
            if (n && 64 === n[1].length) return `bzz://${n[1]}`
            ;(0, l.vA)(
              !1,
              'invalid or unsupported content hash data',
              'UNSUPPORTED_OPERATION',
              { operation: 'getContentHash()', info: { data: t } },
            )
          }
          async getAvatar() {
            return (await this._getAvatar()).url
          }
          async _getAvatar() {
            const t = [{ type: 'name', value: this.name }]
            try {
              const e = await this.getText('avatar')
              if (null == e)
                return (
                  t.push({ type: '!avatar', value: '' }),
                  { url: null, linkage: t }
                )
              t.push({ type: 'avatar', value: e })
              for (let n = 0; n < Br.length; n++) {
                const r = e.match(Br[n])
                if (null == r) continue
                const o = r[1].toLowerCase()
                switch (o) {
                  case 'https':
                  case 'data':
                    return (
                      t.push({ type: 'url', value: e }), { linkage: t, url: e }
                    )
                  case 'ipfs': {
                    const n = Or(e)
                    return (
                      t.push({ type: 'ipfs', value: e }),
                      t.push({ type: 'url', value: n }),
                      { linkage: t, url: n }
                    )
                  }
                  case 'erc721':
                  case 'erc1155': {
                    const n =
                      'erc721' === o ? 'tokenURI(uint256)' : 'uri(uint256)'
                    t.push({ type: o, value: e })
                    const i = await this.getAddress()
                    if (null == i)
                      return (
                        t.push({ type: '!owner', value: '' }),
                        { url: null, linkage: t }
                      )
                    const a = (r[2] || '').split('/')
                    if (2 !== a.length)
                      return (
                        t.push({ type: `!${o}caip`, value: r[2] || '' }),
                        { url: null, linkage: t }
                      )
                    const s = a[1],
                      u = new st.NZ(
                        a[0],
                        [
                          'function tokenURI(uint) view returns (string)',
                          'function ownerOf(uint) view returns (address)',
                          'function uri(uint) view returns (string)',
                          'function balanceOf(address, uint256) view returns (uint)',
                        ],
                        this.provider,
                      )
                    if ('erc721' === o) {
                      const e = await u.ownerOf(s)
                      if (i !== e)
                        return (
                          t.push({ type: '!owner', value: e }),
                          { url: null, linkage: t }
                        )
                      t.push({ type: 'owner', value: e })
                    } else if ('erc1155' === o) {
                      const e = await u.balanceOf(i, s)
                      if (!e)
                        return (
                          t.push({ type: '!balance', value: '0' }),
                          { url: null, linkage: t }
                        )
                      t.push({ type: 'balance', value: e.toString() })
                    }
                    let l = await u[n](s)
                    if (null == l || '0x' === l)
                      return (
                        t.push({ type: '!metadata-url', value: '' }),
                        { url: null, linkage: t }
                      )
                    t.push({ type: 'metadata-url-base', value: l }),
                      'erc1155' === o &&
                        ((l = l.replace('{id}', (0, g.up)(s, 32).substring(2))),
                        t.push({ type: 'metadata-url-expanded', value: l })),
                      l.match(/^ipfs:/i) && (l = Or(l)),
                      t.push({ type: 'metadata-url', value: l })
                    let c = {}
                    const f = await new rt(l).send()
                    f.assertOk()
                    try {
                      c = f.bodyJson
                    } catch (e) {
                      try {
                        t.push({ type: '!metadata', value: f.bodyText })
                      } catch (e) {
                        const n = f.body
                        return (
                          n &&
                            t.push({ type: '!metadata', value: (0, p.c$)(n) }),
                          { url: null, linkage: t }
                        )
                      }
                      return { url: null, linkage: t }
                    }
                    if (!c)
                      return (
                        t.push({ type: '!metadata', value: '' }),
                        { url: null, linkage: t }
                      )
                    t.push({ type: 'metadata', value: JSON.stringify(c) })
                    let h = c.image
                    if ('string' != typeof h)
                      return (
                        t.push({ type: '!imageUrl', value: '' }),
                        { url: null, linkage: t }
                      )
                    if (h.match(/^(https:\/\/|data:)/i));
                    else {
                      if (null == h.match(Ir))
                        return (
                          t.push({ type: '!imageUrl-ipfs', value: h }),
                          { url: null, linkage: t }
                        )
                      t.push({ type: 'imageUrl-ipfs', value: h }), (h = Or(h))
                    }
                    return (
                      t.push({ type: 'url', value: h }), { linkage: t, url: h }
                    )
                  }
                }
              }
            } catch (t) {}
            return { linkage: t, url: null }
          }
          static async getEnsAddress(t) {
            const e = await t.getNetwork(),
              n = e.getPlugin('org.ethers.plugins.network.Ens')
            return (
              (0, l.vA)(
                n,
                'network does not support ENS',
                'UNSUPPORTED_OPERATION',
                { operation: 'getEnsAddress', info: { network: e } },
              ),
              n.address
            )
          }
          static async #gt(t, e) {
            const n = await Tr.getEnsAddress(t)
            try {
              const r = new st.NZ(
                  n,
                  ['function resolver(bytes32) view returns (address)'],
                  t,
                ),
                o = await r.resolver(be(e), { enableCcipRead: !0 })
              return o === at ? null : o
            } catch (t) {
              throw t
            }
          }
          static async fromName(t, e) {
            let n = e
            for (;;) {
              if ('' === n || '.' === n) return null
              if ('eth' !== e && 'eth' === n) return null
              const r = await Tr.#gt(t, n)
              if (null != r) {
                const o = new Tr(t, r, e)
                return n === e || (await o.supportsWildcard()) ? o : null
              }
              n = n.split('.').slice(1).join('.')
            }
          }
        }
        const _r = BigInt(0)
        function Mr(t, e) {
          return function (n) {
            return null == n ? e : t(n)
          }
        }
        function Dr(t, e) {
          return (n) => {
            if (e && null == n) return null
            if (!Array.isArray(n)) throw new Error('not an array')
            return n.map((e) => t(e))
          }
        }
        function Lr(t, e) {
          return (n) => {
            const r = {}
            for (const o in t) {
              let i = o
              if (e && o in e && !(i in n))
                for (const t of e[o])
                  if (t in n) {
                    i = t
                    break
                  }
              try {
                const e = t[o](n[i])
                void 0 !== e && (r[o] = e)
              } catch (t) {
                const e = t instanceof Error ? t.message : 'not-an-error'
                ;(0, l.vA)(
                  !1,
                  `invalid value for value.${o} (${e})`,
                  'BAD_DATA',
                  { value: n },
                )
              }
            }
            return r
          }
        }
        function Fr(t) {
          return (0, l.MR)((0, p.Lo)(t, !0), 'invalid data', 'value', t), t
        }
        function Ur(t) {
          return (0, l.MR)((0, p.Lo)(t, 32), 'invalid hash', 'value', t), t
        }
        const jr = Lr(
          {
            address: f.b,
            blockHash: Ur,
            blockNumber: g.WZ,
            data: Fr,
            index: g.WZ,
            removed: Mr(function (t) {
              switch (t) {
                case !0:
                case 'true':
                  return !0
                case !1:
                case 'false':
                  return !1
              }
              ;(0, l.MR)(
                !1,
                `invalid boolean; ${JSON.stringify(t)}`,
                'value',
                t,
              )
            }, !1),
            topics: Dr(Ur),
            transactionHash: Ur,
            transactionIndex: g.WZ,
          },
          { index: ['logIndex'] },
        )
        const Gr = Lr(
          {
            hash: Mr(Ur),
            parentHash: Ur,
            parentBeaconBlockRoot: Mr(Ur, null),
            number: g.WZ,
            timestamp: g.WZ,
            nonce: Mr(Fr),
            difficulty: g.Ab,
            gasLimit: g.Ab,
            gasUsed: g.Ab,
            stateRoot: Mr(Ur, null),
            receiptsRoot: Mr(Ur, null),
            blobGasUsed: Mr(g.Ab, null),
            excessBlobGas: Mr(g.Ab, null),
            miner: Mr(f.b),
            prevRandao: Mr(Ur, null),
            extraData: Fr,
            baseFeePerGas: Mr(g.Ab),
          },
          { prevRandao: ['mixHash'] },
        )
        const Hr = Lr(
          {
            transactionIndex: g.WZ,
            blockNumber: g.WZ,
            transactionHash: Ur,
            address: f.b,
            topics: Dr(Ur),
            data: Fr,
            index: g.WZ,
            blockHash: Ur,
          },
          { index: ['logIndex'] },
        )
        const zr = Lr(
          {
            to: Mr(f.b, null),
            from: Mr(f.b, null),
            contractAddress: Mr(f.b, null),
            index: g.WZ,
            root: Mr(p.c$),
            gasUsed: g.Ab,
            blobGasUsed: Mr(g.Ab, null),
            logsBloom: Mr(Fr),
            blockHash: Ur,
            hash: Ur,
            logs: Dr(function (t) {
              return Hr(t)
            }),
            blockNumber: g.WZ,
            cumulativeGasUsed: g.Ab,
            effectiveGasPrice: Mr(g.Ab),
            blobGasPrice: Mr(g.Ab, null),
            status: Mr(g.WZ),
            type: Mr(g.WZ, 0),
          },
          {
            effectiveGasPrice: ['gasPrice'],
            hash: ['transactionHash'],
            index: ['transactionIndex'],
          },
        )
        function Qr(t) {
          t.to &&
            (0, g.Ab)(t.to) === _r &&
            (t.to = '0x0000000000000000000000000000000000000000')
          const e = Lr(
            {
              hash: Ur,
              index: Mr(g.WZ, void 0),
              type: (t) => ('0x' === t || null == t ? 0 : (0, g.WZ)(t)),
              accessList: Mr(T.$, null),
              blobVersionedHashes: Mr(Dr(Ur, !0), null),
              authorizationList: Mr(
                Dr((t) => {
                  let e
                  if (t.signature) e = t.signature
                  else {
                    let n = t.yParity
                    '0x1b' === n ? (n = 0) : '0x1c' === n && (n = 1),
                      (e = Object.assign({}, t, { yParity: n }))
                  }
                  return {
                    address: (0, f.b)(t.address),
                    chainId: (0, g.Ab)(t.chainId),
                    nonce: (0, g.Ab)(t.nonce),
                    signature: z.from(e),
                  }
                }, !1),
                null,
              ),
              blockHash: Mr(Ur, null),
              blockNumber: Mr(g.WZ, null),
              transactionIndex: Mr(g.WZ, null),
              from: f.b,
              gasPrice: Mr(g.Ab),
              maxPriorityFeePerGas: Mr(g.Ab),
              maxFeePerGas: Mr(g.Ab),
              maxFeePerBlobGas: Mr(g.Ab, null),
              gasLimit: g.Ab,
              to: Mr(f.b, null),
              value: g.Ab,
              nonce: g.WZ,
              data: Fr,
              creates: Mr(f.b, null),
              chainId: Mr(g.Ab, null),
            },
            { data: ['input'], gasLimit: ['gas'], index: ['transactionIndex'] },
          )(t)
          if (
            (null == e.to &&
              null == e.creates &&
              (e.creates = (function (t) {
                const e = (0, f.b)(t.from)
                let n = (0, g.Ab)(t.nonce, 'tx.nonce').toString(16)
                return (
                  (n = '0' === n ? '0x' : n.length % 2 ? '0x0' + n : '0x' + n),
                  (0, f.b)((0, p.ZG)((0, d.S)(ar([e, n])), 12))
                )
              })(e)),
            (1 !== t.type && 2 !== t.type) ||
              null != t.accessList ||
              (e.accessList = []),
            t.signature
              ? (e.signature = z.from(t.signature))
              : (e.signature = z.from(t)),
            null == e.chainId)
          ) {
            const t = e.signature.legacyChainId
            null != t && (e.chainId = t)
          }
          return (
            e.blockHash &&
              (0, g.Ab)(e.blockHash) === _r &&
              (e.blockHash = null),
            e
          )
        }
        class Vr {
          name
          constructor(t) {
            ;(0, m.n)(this, { name: t })
          }
          clone() {
            return new Vr(this.name)
          }
        }
        class Wr extends Vr {
          effectiveBlock
          txBase
          txCreate
          txDataZero
          txDataNonzero
          txAccessListStorageKey
          txAccessListAddress
          constructor(t, e) {
            null == t && (t = 0),
              super(`org.ethers.network.plugins.GasCost#${t || 0}`)
            const n = { effectiveBlock: t }
            function r(t, r) {
              let o = (e || {})[t]
              null == o && (o = r),
                (0, l.MR)(
                  'number' == typeof o,
                  `invalud value for ${t}`,
                  'costs',
                  e,
                ),
                (n[t] = o)
            }
            r('txBase', 21e3),
              r('txCreate', 32e3),
              r('txDataZero', 4),
              r('txDataNonzero', 16),
              r('txAccessListStorageKey', 1900),
              r('txAccessListAddress', 2400),
              (0, m.n)(this, n)
          }
          clone() {
            return new Wr(this.effectiveBlock, this)
          }
        }
        class Jr extends Vr {
          address
          targetNetwork
          constructor(t, e) {
            super('org.ethers.plugins.network.Ens'),
              (0, m.n)(this, {
                address: t || '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
                targetNetwork: null == e ? 1 : e,
              })
          }
          clone() {
            return new Jr(this.address, this.targetNetwork)
          }
        }
        class Kr extends Vr {
          #T
          #mt
          get url() {
            return this.#T
          }
          get processFunc() {
            return this.#mt
          }
          constructor(t, e) {
            super('org.ethers.plugins.network.FetchUrlFeeDataPlugin'),
              (this.#T = t),
              (this.#mt = e)
          }
          clone() {
            return this
          }
        }
        const qr = new Map()
        class Zr {
          #yt
          #rt
          #bt
          constructor(t, e) {
            ;(this.#yt = t), (this.#rt = (0, g.Ab)(e)), (this.#bt = new Map())
          }
          toJSON() {
            return { name: this.name, chainId: String(this.chainId) }
          }
          get name() {
            return this.#yt
          }
          set name(t) {
            this.#yt = t
          }
          get chainId() {
            return this.#rt
          }
          set chainId(t) {
            this.#rt = (0, g.Ab)(t, 'chainId')
          }
          matches(t) {
            if (null == t) return !1
            if ('string' == typeof t) {
              try {
                return this.chainId === (0, g.Ab)(t)
              } catch (t) {}
              return this.name === t
            }
            if ('number' == typeof t || 'bigint' == typeof t) {
              try {
                return this.chainId === (0, g.Ab)(t)
              } catch (t) {}
              return !1
            }
            if ('object' == typeof t) {
              if (null != t.chainId) {
                try {
                  return this.chainId === (0, g.Ab)(t.chainId)
                } catch (t) {}
                return !1
              }
              return null != t.name && this.name === t.name
            }
            return !1
          }
          get plugins() {
            return Array.from(this.#bt.values())
          }
          attachPlugin(t) {
            if (this.#bt.get(t.name))
              throw new Error(`cannot replace existing plugin: ${t.name} `)
            return this.#bt.set(t.name, t.clone()), this
          }
          getPlugin(t) {
            return this.#bt.get(t) || null
          }
          getPlugins(t) {
            return this.plugins.filter((e) => e.name.split('#')[0] === t)
          }
          clone() {
            const t = new Zr(this.name, this.chainId)
            return (
              this.plugins.forEach((e) => {
                t.attachPlugin(e.clone())
              }),
              t
            )
          }
          computeIntrinsicGas(t) {
            const e =
              this.getPlugin('org.ethers.plugins.network.GasCost') || new Wr()
            let n = e.txBase
            if ((null == t.to && (n += e.txCreate), t.data))
              for (let r = 2; r < t.data.length; r += 2)
                '00' === t.data.substring(r, r + 2)
                  ? (n += e.txDataZero)
                  : (n += e.txDataNonzero)
            if (t.accessList) {
              const r = (0, T.$)(t.accessList)
              for (const t in r)
                n +=
                  e.txAccessListAddress +
                  e.txAccessListStorageKey * r[t].storageKeys.length
            }
            return n
          }
          static from(t) {
            if (
              ((function () {
                if (Xr) return
                function t(t, e, n) {
                  const r = function () {
                    const r = new Zr(t, e)
                    return (
                      null != n.ensNetwork &&
                        r.attachPlugin(new Jr(null, n.ensNetwork)),
                      r.attachPlugin(new Wr()),
                      (n.plugins || []).forEach((t) => {
                        r.attachPlugin(t)
                      }),
                      r
                    )
                  }
                  Zr.register(t, r),
                    Zr.register(e, r),
                    n.altNames &&
                      n.altNames.forEach((t) => {
                        Zr.register(t, r)
                      })
                }
                ;(Xr = !0),
                  t('mainnet', 1, { ensNetwork: 1, altNames: ['homestead'] }),
                  t('ropsten', 3, { ensNetwork: 3 }),
                  t('rinkeby', 4, { ensNetwork: 4 }),
                  t('goerli', 5, { ensNetwork: 5 }),
                  t('kovan', 42, { ensNetwork: 42 }),
                  t('sepolia', 11155111, { ensNetwork: 11155111 }),
                  t('holesky', 17e3, { ensNetwork: 17e3 }),
                  t('classic', 61, {}),
                  t('classicKotti', 6, {}),
                  t('arbitrum', 42161, { ensNetwork: 1 }),
                  t('arbitrum-goerli', 421613, {}),
                  t('arbitrum-sepolia', 421614, {}),
                  t('base', 8453, { ensNetwork: 1 }),
                  t('base-goerli', 84531, {}),
                  t('base-sepolia', 84532, {}),
                  t('bnb', 56, { ensNetwork: 1 }),
                  t('bnbt', 97, {}),
                  t('linea', 59144, { ensNetwork: 1 }),
                  t('linea-goerli', 59140, {}),
                  t('linea-sepolia', 59141, {}),
                  t('matic', 137, {
                    ensNetwork: 1,
                    plugins: [$r('https://gasstation.polygon.technology/v2')],
                  }),
                  t('matic-amoy', 80002, {}),
                  t('matic-mumbai', 80001, {
                    altNames: ['maticMumbai', 'maticmum'],
                    plugins: [
                      $r('https://gasstation-testnet.polygon.technology/v2'),
                    ],
                  }),
                  t('optimism', 10, { ensNetwork: 1, plugins: [] }),
                  t('optimism-goerli', 420, {}),
                  t('optimism-sepolia', 11155420, {}),
                  t('xdai', 100, { ensNetwork: 1 })
              })(),
              null == t)
            )
              return Zr.from('mainnet')
            if (
              ('number' == typeof t && (t = BigInt(t)),
              'string' == typeof t || 'bigint' == typeof t)
            ) {
              const e = qr.get(t)
              if (e) return e()
              if ('bigint' == typeof t) return new Zr('unknown', t)
              ;(0, l.MR)(!1, 'unknown network', 'network', t)
            }
            if ('function' == typeof t.clone) {
              return t.clone()
            }
            if ('object' == typeof t) {
              ;(0, l.MR)(
                'string' == typeof t.name && 'number' == typeof t.chainId,
                'invalid network object name or chainId',
                'network',
                t,
              )
              const e = new Zr(t.name, t.chainId)
              return (
                (t.ensAddress || null != t.ensNetwork) &&
                  e.attachPlugin(new Jr(t.ensAddress, t.ensNetwork)),
                e
              )
            }
            ;(0, l.MR)(!1, 'invalid network', 'network', t)
          }
          static register(t, e) {
            'number' == typeof t && (t = BigInt(t))
            const n = qr.get(t)
            n &&
              (0, l.MR)(
                !1,
                `conflicting network for ${JSON.stringify(n.name)}`,
                'nameOrChainId',
                t,
              ),
              qr.set(t, e)
          }
        }
        function Yr(t, e) {
          const n = String(t)
          if (!n.match(/^[0-9.]+$/)) throw new Error(`invalid gwei value: ${t}`)
          const r = n.split('.')
          if ((1 === r.length && r.push(''), 2 !== r.length))
            throw new Error(`invalid gwei value: ${t}`)
          for (; r[1].length < e; ) r[1] += '0'
          if (r[1].length > 9) {
            let t = BigInt(r[1].substring(0, 9))
            r[1].substring(9).match(/^0+$/) || t++, (r[1] = t.toString())
          }
          return BigInt(r[0] + r[1])
        }
        function $r(t) {
          return new Kr(t, async (t, e, n) => {
            let r
            n.setHeader('User-Agent', 'ethers')
            try {
              const [e, o] = await Promise.all([n.send(), t()])
              r = e
              const i = r.bodyJson.standard
              return {
                gasPrice: o.gasPrice,
                maxFeePerGas: Yr(i.maxFee, 9),
                maxPriorityFeePerGas: Yr(i.maxPriorityFee, 9),
              }
            } catch (t) {
              ;(0, l.vA)(
                !1,
                `error encountered with polygon gas station (${JSON.stringify(n.url)})`,
                'SERVER_ERROR',
                { request: n, response: r, error: t },
              )
            }
          })
        }
        let Xr = !1
        var to = n(9)
        function eo(t) {
          return JSON.parse(JSON.stringify(t))
        }
        class no {
          #vt
          #wt
          #At
          #xt
          constructor(t) {
            ;(this.#vt = t),
              (this.#wt = null),
              (this.#At = 4e3),
              (this.#xt = -2)
          }
          get pollingInterval() {
            return this.#At
          }
          set pollingInterval(t) {
            this.#At = t
          }
          async #Et() {
            try {
              const t = await this.#vt.getBlockNumber()
              if (-2 === this.#xt) return void (this.#xt = t)
              if (t !== this.#xt) {
                for (let e = this.#xt + 1; e <= t; e++) {
                  if (null == this.#wt) return
                  await this.#vt.emit('block', e)
                }
                this.#xt = t
              }
            } catch (t) {}
            null != this.#wt &&
              (this.#wt = this.#vt._setTimeout(this.#Et.bind(this), this.#At))
          }
          start() {
            this.#wt ||
              ((this.#wt = this.#vt._setTimeout(this.#Et.bind(this), this.#At)),
              this.#Et())
          }
          stop() {
            this.#wt && (this.#vt._clearTimeout(this.#wt), (this.#wt = null))
          }
          pause(t) {
            this.stop(), t && (this.#xt = -2)
          }
          resume() {
            this.start()
          }
        }
        class ro {
          #vt
          #Et
          #kt
          constructor(t) {
            ;(this.#vt = t),
              (this.#kt = !1),
              (this.#Et = (t) => {
                this._poll(t, this.#vt)
              })
          }
          async _poll(t, e) {
            throw new Error('sub-classes must override this')
          }
          start() {
            this.#kt ||
              ((this.#kt = !0), this.#Et(-2), this.#vt.on('block', this.#Et))
          }
          stop() {
            this.#kt && ((this.#kt = !1), this.#vt.off('block', this.#Et))
          }
          pause(t) {
            this.stop()
          }
          resume() {
            this.start()
          }
        }
        class oo extends ro {
          #Rt
          #Nt
          constructor(t, e) {
            super(t), (this.#Rt = e), (this.#Nt = -2)
          }
          pause(t) {
            t && (this.#Nt = -2), super.pause(t)
          }
          async _poll(t, e) {
            const n = await e.getBlock(this.#Rt)
            null != n &&
              (-2 === this.#Nt
                ? (this.#Nt = n.number)
                : n.number > this.#Nt &&
                  (e.emit(this.#Rt, n.number), (this.#Nt = n.number)))
          }
        }
        class io extends ro {
          #Pt
          constructor(t, e) {
            super(t), (this.#Pt = eo(e))
          }
          async _poll(t, e) {
            throw new Error('@TODO')
          }
        }
        class ao extends ro {
          #Ct
          constructor(t, e) {
            super(t), (this.#Ct = e)
          }
          async _poll(t, e) {
            const n = await e.getTransactionReceipt(this.#Ct)
            n && e.emit(this.#Ct, n)
          }
        }
        class so {
          #vt
          #Pt
          #wt
          #kt
          #xt
          constructor(t, e) {
            ;(this.#vt = t),
              (this.#Pt = eo(e)),
              (this.#wt = this.#Et.bind(this)),
              (this.#kt = !1),
              (this.#xt = -2)
          }
          async #Et(t) {
            if (-2 === this.#xt) return
            const e = eo(this.#Pt)
            ;(e.fromBlock = this.#xt + 1), (e.toBlock = t)
            const n = await this.#vt.getLogs(e)
            if (0 !== n.length)
              for (const t of n)
                this.#vt.emit(this.#Pt, t), (this.#xt = t.blockNumber)
            else this.#xt < t - 60 && (this.#xt = t - 60)
          }
          start() {
            this.#kt ||
              ((this.#kt = !0),
              -2 === this.#xt &&
                this.#vt.getBlockNumber().then((t) => {
                  this.#xt = t
                }),
              this.#vt.on('block', this.#wt))
          }
          stop() {
            this.#kt && ((this.#kt = !1), this.#vt.off('block', this.#wt))
          }
          pause(t) {
            this.stop(), t && (this.#xt = -2)
          }
          resume() {
            this.start()
          }
        }
        const uo = BigInt(2)
        function lo(t) {
          return t && 'function' == typeof t.then
        }
        function co(t, e) {
          return (
            t +
            ':' +
            JSON.stringify(e, (t, e) => {
              if (null == e) return 'null'
              if ('bigint' == typeof e) return `bigint:${e.toString()}`
              if ('string' == typeof e) return e.toLowerCase()
              if ('object' == typeof e && !Array.isArray(e)) {
                const t = Object.keys(e)
                return t.sort(), t.reduce((t, n) => ((t[n] = e[n]), t), {})
              }
              return e
            })
          )
        }
        class fo {
          name
          constructor(t) {
            ;(0, m.n)(this, { name: t })
          }
          start() {}
          stop() {}
          pause(t) {}
          resume() {}
        }
        function ho(t) {
          return (t = Array.from(new Set(t).values())).sort(), t
        }
        async function po(t, e) {
          if (null == t) throw new Error('invalid event')
          if ((Array.isArray(t) && (t = { topics: t }), 'string' == typeof t))
            switch (t) {
              case 'block':
              case 'debug':
              case 'error':
              case 'finalized':
              case 'network':
              case 'pending':
              case 'safe':
                return { type: t, tag: t }
            }
          if ((0, p.Lo)(t, 32)) {
            const e = t.toLowerCase()
            return { type: 'transaction', tag: co('tx', { hash: e }), hash: e }
          }
          if (t.orphan) {
            const e = t
            return {
              type: 'orphan',
              tag: co('orphan', e),
              filter: ((n = e), JSON.parse(JSON.stringify(n))),
            }
          }
          var n
          if (t.address || t.topics) {
            const n = t,
              r = {
                topics: (n.topics || []).map((t) =>
                  null == t
                    ? null
                    : Array.isArray(t)
                      ? ho(t.map((t) => t.toLowerCase()))
                      : t.toLowerCase(),
                ),
              }
            if (n.address) {
              const t = [],
                o = [],
                i = (n) => {
                  ;(0, p.Lo)(n)
                    ? t.push(n)
                    : o.push(
                        (async () => {
                          t.push(await (0, h.tG)(n, e))
                        })(),
                      )
                }
              Array.isArray(n.address) ? n.address.forEach(i) : i(n.address),
                o.length && (await Promise.all(o)),
                (r.address = ho(t.map((t) => t.toLowerCase())))
            }
            return { filter: r, tag: co('event', r), type: 'event' }
          }
          ;(0, l.MR)(!1, 'unknown ProviderEvent', 'event', t)
        }
        function go() {
          return new Date().getTime()
        }
        const mo = { cacheTimeout: 250, pollingInterval: 4e3 }
        class yo {
          #Ot
          #bt
          #St
          #It
          #Bt
          #Tt
          #_t
          #Mt
          #Dt
          #Lt
          #Ft
          #r
          constructor(t, e) {
            if (((this.#r = Object.assign({}, mo, e || {})), 'any' === t))
              (this.#Tt = !0), (this.#Bt = null)
            else if (t) {
              const e = Zr.from(t)
              ;(this.#Tt = !1),
                (this.#Bt = Promise.resolve(e)),
                setTimeout(() => {
                  this.emit('network', e, null)
                }, 0)
            } else (this.#Tt = !1), (this.#Bt = null)
            ;(this.#Mt = -1),
              (this.#_t = new Map()),
              (this.#Ot = new Map()),
              (this.#bt = new Map()),
              (this.#St = null),
              (this.#It = !1),
              (this.#Dt = 1),
              (this.#Lt = new Map()),
              (this.#Ft = !1)
          }
          get pollingInterval() {
            return this.#r.pollingInterval
          }
          get provider() {
            return this
          }
          get plugins() {
            return Array.from(this.#bt.values())
          }
          attachPlugin(t) {
            if (this.#bt.get(t.name))
              throw new Error(`cannot replace existing plugin: ${t.name} `)
            return this.#bt.set(t.name, t.connect(this)), this
          }
          getPlugin(t) {
            return this.#bt.get(t) || null
          }
          get disableCcipRead() {
            return this.#Ft
          }
          set disableCcipRead(t) {
            this.#Ft = !!t
          }
          async #Ut(t) {
            const e = this.#r.cacheTimeout
            if (e < 0) return await this._perform(t)
            const n = co(t.method, t)
            let r = this.#_t.get(n)
            return (
              r ||
                ((r = this._perform(t)),
                this.#_t.set(n, r),
                setTimeout(() => {
                  this.#_t.get(n) === r && this.#_t.delete(n)
                }, e)),
              await r
            )
          }
          async ccipReadFetch(t, e, n) {
            if (this.disableCcipRead || 0 === n.length || null == t.to)
              return null
            const r = t.to.toLowerCase(),
              o = e.toLowerCase(),
              i = []
            for (let e = 0; e < n.length; e++) {
              const a = n[e],
                s = a.replace('{sender}', r).replace('{data}', o),
                u = new rt(s)
              ;-1 === a.indexOf('{data}') && (u.body = { data: o, sender: r }),
                this.emit('debug', {
                  action: 'sendCcipReadFetchRequest',
                  request: u,
                  index: e,
                  urls: n,
                })
              let c,
                f = 'unknown error'
              try {
                c = await u.send()
              } catch (t) {
                i.push(t.message),
                  this.emit('debug', {
                    action: 'receiveCcipReadFetchError',
                    request: u,
                    result: { error: t },
                  })
                continue
              }
              try {
                const t = c.bodyJson
                if (t.data)
                  return (
                    this.emit('debug', {
                      action: 'receiveCcipReadFetchResult',
                      request: u,
                      result: t,
                    }),
                    t.data
                  )
                t.message && (f = t.message),
                  this.emit('debug', {
                    action: 'receiveCcipReadFetchError',
                    request: u,
                    result: t,
                  })
              } catch (t) {}
              ;(0, l.vA)(
                c.statusCode < 400 || c.statusCode >= 500,
                `response not found during CCIP fetch: ${f}`,
                'OFFCHAIN_FAULT',
                {
                  reason: '404_MISSING_RESOURCE',
                  transaction: t,
                  info: { url: a, errorMessage: f },
                },
              ),
                i.push(f)
            }
            ;(0, l.vA)(
              !1,
              `error encountered during CCIP fetch: ${i.map((t) => JSON.stringify(t)).join(', ')}`,
              'OFFCHAIN_FAULT',
              {
                reason: '500_SERVER_ERROR',
                transaction: t,
                info: { urls: n, errorMessages: i },
              },
            )
          }
          _wrapBlock(t, e) {
            return new to.eB(
              (function (t) {
                const e = Gr(t)
                return (
                  (e.transactions = t.transactions.map((t) =>
                    'string' == typeof t ? t : Qr(t),
                  )),
                  e
                )
              })(t),
              this,
            )
          }
          _wrapLog(t, e) {
            return new to.tG(
              (function (t) {
                return jr(t)
              })(t),
              this,
            )
          }
          _wrapTransactionReceipt(t, e) {
            return new to.z5(
              (function (t) {
                return zr(t)
              })(t),
              this,
            )
          }
          _wrapTransactionResponse(t, e) {
            return new to.uI(Qr(t), this)
          }
          _detectNetwork() {
            ;(0, l.vA)(
              !1,
              'sub-classes must implement this',
              'UNSUPPORTED_OPERATION',
              { operation: '_detectNetwork' },
            )
          }
          async _perform(t) {
            ;(0, l.vA)(
              !1,
              `unsupported method: ${t.method}`,
              'UNSUPPORTED_OPERATION',
              { operation: t.method, info: t },
            )
          }
          async getBlockNumber() {
            const t = (0, g.WZ)(
              await this.#Ut({ method: 'getBlockNumber' }),
              '%response',
            )
            return this.#Mt >= 0 && (this.#Mt = t), t
          }
          _getAddress(t) {
            return (0, h.tG)(t, this)
          }
          _getBlockTag(t) {
            if (null == t) return 'latest'
            switch (t) {
              case 'earliest':
                return '0x0'
              case 'finalized':
              case 'latest':
              case 'pending':
              case 'safe':
                return t
            }
            return (0, p.Lo)(t)
              ? (0, p.Lo)(t, 32)
                ? t
                : (0, g.nD)(t)
              : ('bigint' == typeof t && (t = (0, g.WZ)(t, 'blockTag')),
                'number' == typeof t
                  ? t >= 0
                    ? (0, g.nD)(t)
                    : this.#Mt >= 0
                      ? (0, g.nD)(this.#Mt + t)
                      : this.getBlockNumber().then((e) => (0, g.nD)(e + t))
                  : void (0, l.MR)(!1, 'invalid blockTag', 'blockTag', t))
          }
          _getFilter(t) {
            const e = (t.topics || []).map((t) =>
                null == t
                  ? null
                  : Array.isArray(t)
                    ? ho(t.map((t) => t.toLowerCase()))
                    : t.toLowerCase(),
              ),
              n = 'blockHash' in t ? t.blockHash : void 0,
              r = (t, r, o) => {
                let i
                switch (t.length) {
                  case 0:
                    break
                  case 1:
                    i = t[0]
                    break
                  default:
                    t.sort(), (i = t)
                }
                if (n && (null != r || null != o))
                  throw new Error('invalid filter')
                const a = {}
                return (
                  i && (a.address = i),
                  e.length && (a.topics = e),
                  r && (a.fromBlock = r),
                  o && (a.toBlock = o),
                  n && (a.blockHash = n),
                  a
                )
              }
            let o,
              i,
              a = []
            if (t.address)
              if (Array.isArray(t.address))
                for (const e of t.address) a.push(this._getAddress(e))
              else a.push(this._getAddress(t.address))
            return (
              'fromBlock' in t && (o = this._getBlockTag(t.fromBlock)),
              'toBlock' in t && (i = this._getBlockTag(t.toBlock)),
              a.filter((t) => 'string' != typeof t).length ||
              (null != o && 'string' != typeof o) ||
              (null != i && 'string' != typeof i)
                ? Promise.all([Promise.all(a), o, i]).then((t) =>
                    r(t[0], t[1], t[2]),
                  )
                : r(a, o, i)
            )
          }
          _getTransactionRequest(t) {
            const e = (0, to.VS)(t),
              n = []
            if (
              (['to', 'from'].forEach((t) => {
                if (null == e[t]) return
                const r = (0, h.tG)(e[t], this)
                lo(r)
                  ? n.push(
                      (async function () {
                        e[t] = await r
                      })(),
                    )
                  : (e[t] = r)
              }),
              null != e.blockTag)
            ) {
              const t = this._getBlockTag(e.blockTag)
              lo(t)
                ? n.push(
                    (async function () {
                      e.blockTag = await t
                    })(),
                  )
                : (e.blockTag = t)
            }
            return n.length
              ? (async function () {
                  return await Promise.all(n), e
                })()
              : e
          }
          async getNetwork() {
            if (null == this.#Bt) {
              const t = (async () => {
                try {
                  const t = await this._detectNetwork()
                  return this.emit('network', t, null), t
                } catch (e) {
                  throw (this.#Bt === t && (this.#Bt = null), e)
                }
              })()
              return (this.#Bt = t), (await t).clone()
            }
            const t = this.#Bt,
              [e, n] = await Promise.all([t, this._detectNetwork()])
            return (
              e.chainId !== n.chainId &&
                (this.#Tt
                  ? (this.emit('network', n, e),
                    this.#Bt === t && (this.#Bt = Promise.resolve(n)))
                  : (0, l.vA)(
                      !1,
                      `network changed: ${e.chainId} => ${n.chainId} `,
                      'NETWORK_ERROR',
                      { event: 'changed' },
                    )),
              e.clone()
            )
          }
          async getFeeData() {
            const t = await this.getNetwork(),
              e = async () => {
                const {
                  _block: e,
                  gasPrice: n,
                  priorityFee: r,
                } = await (0, m.k)({
                  _block: this.#jt('latest', !1),
                  gasPrice: (async () => {
                    try {
                      const t = await this.#Ut({ method: 'getGasPrice' })
                      return (0, g.Ab)(t, '%response')
                    } catch (t) {}
                    return null
                  })(),
                  priorityFee: (async () => {
                    try {
                      const t = await this.#Ut({ method: 'getPriorityFee' })
                      return (0, g.Ab)(t, '%response')
                    } catch (t) {}
                    return null
                  })(),
                })
                let o = null,
                  i = null
                const a = this._wrapBlock(e, t)
                return (
                  a &&
                    a.baseFeePerGas &&
                    ((i = null != r ? r : BigInt('1000000000')),
                    (o = a.baseFeePerGas * uo + i)),
                  new to.J9(n, o, i)
                )
              },
              n = t.getPlugin(
                'org.ethers.plugins.network.FetchUrlFeeDataPlugin',
              )
            if (n) {
              const t = new rt(n.url),
                r = await n.processFunc(e, this, t)
              return new to.J9(
                r.gasPrice,
                r.maxFeePerGas,
                r.maxPriorityFeePerGas,
              )
            }
            return await e()
          }
          async estimateGas(t) {
            let e = this._getTransactionRequest(t)
            return (
              lo(e) && (e = await e),
              (0, g.Ab)(
                await this.#Ut({ method: 'estimateGas', transaction: e }),
                '%response',
              )
            )
          }
          async #Gt(t, e, n) {
            ;(0, l.vA)(
              n < 10,
              'CCIP read exceeded maximum redirections',
              'OFFCHAIN_FAULT',
              {
                reason: 'TOO_MANY_REDIRECTS',
                transaction: Object.assign({}, t, {
                  blockTag: e,
                  enableCcipRead: !0,
                }),
              },
            )
            const r = (0, to.VS)(t)
            try {
              return (0, p.c$)(
                await this._perform({
                  method: 'call',
                  transaction: r,
                  blockTag: e,
                }),
              )
            } catch (t) {
              if (
                !this.disableCcipRead &&
                (0, l.E)(t) &&
                t.data &&
                n >= 0 &&
                'latest' === e &&
                null != r.to &&
                '0x556f1830' === (0, p.ZG)(t.data, 0, 4)
              ) {
                const o = t.data,
                  i = await (0, h.tG)(r.to, this)
                let a
                try {
                  a = (function (t) {
                    const e = {
                      sender: '',
                      urls: [],
                      calldata: '',
                      selector: '',
                      extraData: '',
                      errorArgs: [],
                    }
                    ;(0, l.vA)(
                      (0, p.pO)(t) >= 160,
                      'insufficient OffchainLookup data',
                      'OFFCHAIN_FAULT',
                      { reason: 'insufficient OffchainLookup data' },
                    )
                    const n = (0, p.ZG)(t, 0, 32)
                    ;(0, l.vA)(
                      (0, p.ZG)(n, 0, 12) === (0, p.ZG)(ko, 0, 12),
                      'corrupt OffchainLookup sender',
                      'OFFCHAIN_FAULT',
                      { reason: 'corrupt OffchainLookup sender' },
                    ),
                      (e.sender = (0, p.ZG)(n, 12))
                    try {
                      const n = [],
                        r = (0, g.WZ)((0, p.ZG)(t, 32, 64)),
                        o = (0, g.WZ)((0, p.ZG)(t, r, r + 32)),
                        i = (0, p.ZG)(t, r + 32)
                      for (let t = 0; t < o; t++) {
                        const e = bo(i, 32 * t)
                        if (null == e) throw new Error('abort')
                        n.push(e)
                      }
                      e.urls = n
                    } catch (t) {
                      ;(0, l.vA)(
                        !1,
                        'corrupt OffchainLookup urls',
                        'OFFCHAIN_FAULT',
                        { reason: 'corrupt OffchainLookup urls' },
                      )
                    }
                    try {
                      const n = vo(t, 64)
                      if (null == n) throw new Error('abort')
                      e.calldata = n
                    } catch (t) {
                      ;(0, l.vA)(
                        !1,
                        'corrupt OffchainLookup calldata',
                        'OFFCHAIN_FAULT',
                        { reason: 'corrupt OffchainLookup calldata' },
                      )
                    }
                    ;(0, l.vA)(
                      (0, p.ZG)(t, 100, 128) === (0, p.ZG)(ko, 0, 28),
                      'corrupt OffchainLookup callbaackSelector',
                      'OFFCHAIN_FAULT',
                      { reason: 'corrupt OffchainLookup callbaackSelector' },
                    ),
                      (e.selector = (0, p.ZG)(t, 96, 100))
                    try {
                      const n = vo(t, 128)
                      if (null == n) throw new Error('abort')
                      e.extraData = n
                    } catch (t) {
                      ;(0, l.vA)(
                        !1,
                        'corrupt OffchainLookup extraData',
                        'OFFCHAIN_FAULT',
                        { reason: 'corrupt OffchainLookup extraData' },
                      )
                    }
                    return (
                      (e.errorArgs = 'sender,urls,calldata,selector,extraData'
                        .split(/,/)
                        .map((t) => e[t])),
                      e
                    )
                  })((0, p.ZG)(t.data, 4))
                } catch (t) {
                  ;(0, l.vA)(!1, t.message, 'OFFCHAIN_FAULT', {
                    reason: 'BAD_DATA',
                    transaction: r,
                    info: { data: o },
                  })
                }
                ;(0, l.vA)(
                  a.sender.toLowerCase() === i.toLowerCase(),
                  'CCIP Read sender mismatch',
                  'CALL_EXCEPTION',
                  {
                    action: 'call',
                    data: o,
                    reason: 'OffchainLookup',
                    transaction: r,
                    invocation: null,
                    revert: {
                      signature:
                        'OffchainLookup(address,string[],bytes,bytes4,bytes)',
                      name: 'OffchainLookup',
                      args: a.errorArgs,
                    },
                  },
                )
                const s = await this.ccipReadFetch(r, a.calldata, a.urls)
                ;(0, l.vA)(
                  null != s,
                  'CCIP Read failed to fetch data',
                  'OFFCHAIN_FAULT',
                  {
                    reason: 'FETCH_FAILED',
                    transaction: r,
                    info: { data: t.data, errorArgs: a.errorArgs },
                  },
                )
                const u = {
                  to: i,
                  data: (0, p.xW)([a.selector, Eo([s, a.extraData])]),
                }
                this.emit('debug', {
                  action: 'sendCcipReadCall',
                  transaction: u,
                })
                try {
                  const t = await this.#Gt(u, e, n + 1)
                  return (
                    this.emit('debug', {
                      action: 'receiveCcipReadCallResult',
                      transaction: Object.assign({}, u),
                      result: t,
                    }),
                    t
                  )
                } catch (t) {
                  throw (
                    (this.emit('debug', {
                      action: 'receiveCcipReadCallError',
                      transaction: Object.assign({}, u),
                      error: t,
                    }),
                    t)
                  )
                }
              }
              throw t
            }
          }
          async #Ht(t) {
            const { value: e } = await (0, m.k)({
              network: this.getNetwork(),
              value: t,
            })
            return e
          }
          async call(t) {
            const { tx: e, blockTag: n } = await (0, m.k)({
              tx: this._getTransactionRequest(t),
              blockTag: this._getBlockTag(t.blockTag),
            })
            return await this.#Ht(this.#Gt(e, n, t.enableCcipRead ? 0 : -1))
          }
          async #zt(t, e, n) {
            let r = this._getAddress(e),
              o = this._getBlockTag(n)
            return (
              ('string' == typeof r && 'string' == typeof o) ||
                ([r, o] = await Promise.all([r, o])),
              await this.#Ht(
                this.#Ut(Object.assign(t, { address: r, blockTag: o })),
              )
            )
          }
          async getBalance(t, e) {
            return (0, g.Ab)(
              await this.#zt({ method: 'getBalance' }, t, e),
              '%response',
            )
          }
          async getTransactionCount(t, e) {
            return (0, g.WZ)(
              await this.#zt({ method: 'getTransactionCount' }, t, e),
              '%response',
            )
          }
          async getCode(t, e) {
            return (0, p.c$)(await this.#zt({ method: 'getCode' }, t, e))
          }
          async getStorage(t, e, n) {
            const r = (0, g.Ab)(e, 'position')
            return (0, p.c$)(
              await this.#zt({ method: 'getStorage', position: r }, t, n),
            )
          }
          async broadcastTransaction(t) {
            const {
                blockNumber: e,
                hash: n,
                network: r,
              } = await (0, m.k)({
                blockNumber: this.getBlockNumber(),
                hash: this._perform({
                  method: 'broadcastTransaction',
                  signedTransaction: t,
                }),
                network: this.getNetwork(),
              }),
              o = Rr.from(t)
            if (o.hash !== n)
              throw new Error('@TODO: the returned hash did not match')
            return this._wrapTransactionResponse(o, r).replaceableTransaction(e)
          }
          async #jt(t, e) {
            if ((0, p.Lo)(t, 32))
              return await this.#Ut({
                method: 'getBlock',
                blockHash: t,
                includeTransactions: e,
              })
            let n = this._getBlockTag(t)
            return (
              'string' != typeof n && (n = await n),
              await this.#Ut({
                method: 'getBlock',
                blockTag: n,
                includeTransactions: e,
              })
            )
          }
          async getBlock(t, e) {
            const { network: n, params: r } = await (0, m.k)({
              network: this.getNetwork(),
              params: this.#jt(t, !!e),
            })
            return null == r ? null : this._wrapBlock(r, n)
          }
          async getTransaction(t) {
            const { network: e, params: n } = await (0, m.k)({
              network: this.getNetwork(),
              params: this.#Ut({ method: 'getTransaction', hash: t }),
            })
            return null == n ? null : this._wrapTransactionResponse(n, e)
          }
          async getTransactionReceipt(t) {
            const { network: e, params: n } = await (0, m.k)({
              network: this.getNetwork(),
              params: this.#Ut({ method: 'getTransactionReceipt', hash: t }),
            })
            if (null == n) return null
            if (null == n.gasPrice && null == n.effectiveGasPrice) {
              const e = await this.#Ut({ method: 'getTransaction', hash: t })
              if (null == e)
                throw new Error(
                  'report this; could not find tx or effectiveGasPrice',
                )
              n.effectiveGasPrice = e.gasPrice
            }
            return this._wrapTransactionReceipt(n, e)
          }
          async getTransactionResult(t) {
            const { result: e } = await (0, m.k)({
              network: this.getNetwork(),
              result: this.#Ut({ method: 'getTransactionResult', hash: t }),
            })
            return null == e ? null : (0, p.c$)(e)
          }
          async getLogs(t) {
            let e = this._getFilter(t)
            lo(e) && (e = await e)
            const { network: n, params: r } = await (0, m.k)({
              network: this.getNetwork(),
              params: this.#Ut({ method: 'getLogs', filter: e }),
            })
            return r.map((t) => this._wrapLog(t, n))
          }
          _getProvider(t) {
            ;(0, l.vA)(
              !1,
              'provider cannot connect to target network',
              'UNSUPPORTED_OPERATION',
              { operation: '_getProvider()' },
            )
          }
          async getResolver(t) {
            return await Tr.fromName(this, t)
          }
          async getAvatar(t) {
            const e = await this.getResolver(t)
            return e ? await e.getAvatar() : null
          }
          async resolveName(t) {
            const e = await this.getResolver(t)
            return e ? await e.getAddress() : null
          }
          async lookupAddress(t) {
            const e = be(
              (t = (0, f.b)(t)).substring(2).toLowerCase() + '.addr.reverse',
            )
            try {
              const n = await Tr.getEnsAddress(this),
                r = new st.NZ(
                  n,
                  ['function resolver(bytes32) view returns (address)'],
                  this,
                ),
                o = await r.resolver(e)
              if (null == o || o === at) return null
              const i = new st.NZ(
                  o,
                  ['function name(bytes32) view returns (string)'],
                  this,
                ),
                a = await i.name(e)
              return (await this.resolveName(a)) !== t ? null : a
            } catch (t) {
              if ((0, l.bJ)(t, 'BAD_DATA') && '0x' === t.value) return null
              if ((0, l.bJ)(t, 'CALL_EXCEPTION')) return null
              throw t
            }
          }
          async waitForTransaction(t, e, n) {
            const r = null != e ? e : 1
            return 0 === r
              ? this.getTransactionReceipt(t)
              : new Promise(async (e, o) => {
                  let i = null
                  const a = async (n) => {
                    try {
                      const o = await this.getTransactionReceipt(t)
                      if (null != o && n - o.blockNumber + 1 >= r)
                        return e(o), void (i && (clearTimeout(i), (i = null)))
                    } catch (t) {
                      console.log('EEE', t)
                    }
                    this.once('block', a)
                  }
                  null != n &&
                    (i = setTimeout(() => {
                      null != i &&
                        ((i = null),
                        this.off('block', a),
                        o(
                          (0, l.xz)('timeout', 'TIMEOUT', {
                            reason: 'timeout',
                          }),
                        ))
                    }, n)),
                    a(await this.getBlockNumber())
                })
          }
          async waitForBlock(t) {
            ;(0, l.vA)(!1, 'not implemented yet', 'NOT_IMPLEMENTED', {
              operation: 'waitForBlock',
            })
          }
          _clearTimeout(t) {
            const e = this.#Lt.get(t)
            e && (e.timer && clearTimeout(e.timer), this.#Lt.delete(t))
          }
          _setTimeout(t, e) {
            null == e && (e = 0)
            const n = this.#Dt++,
              r = () => {
                this.#Lt.delete(n), t()
              }
            if (this.paused) this.#Lt.set(n, { timer: null, func: r, time: e })
            else {
              const t = setTimeout(r, e)
              this.#Lt.set(n, { timer: t, func: r, time: go() })
            }
            return n
          }
          _forEachSubscriber(t) {
            for (const e of this.#Ot.values()) t(e.subscriber)
          }
          _getSubscriber(t) {
            switch (t.type) {
              case 'debug':
              case 'error':
              case 'network':
                return new fo(t.type)
              case 'block': {
                const t = new no(this)
                return (t.pollingInterval = this.pollingInterval), t
              }
              case 'safe':
              case 'finalized':
                return new oo(this, t.type)
              case 'event':
                return new so(this, t.filter)
              case 'transaction':
                return new ao(this, t.hash)
              case 'orphan':
                return new io(this, t.filter)
            }
            throw new Error(`unsupported event: ${t.type}`)
          }
          _recoverSubscriber(t, e) {
            for (const n of this.#Ot.values())
              if (n.subscriber === t) {
                n.started && n.subscriber.stop(),
                  (n.subscriber = e),
                  n.started && e.start(),
                  null != this.#St && e.pause(this.#St)
                break
              }
          }
          async #Qt(t, e) {
            let n = await po(t, this)
            return (
              'event' === n.type &&
                e &&
                e.length > 0 &&
                !0 === e[0].removed &&
                (n = await po({ orphan: 'drop-log', log: e[0] }, this)),
              this.#Ot.get(n.tag) || null
            )
          }
          async #Vt(t) {
            const e = await po(t, this),
              n = e.tag
            let r = this.#Ot.get(n)
            if (!r) {
              ;(r = {
                subscriber: this._getSubscriber(e),
                tag: n,
                addressableMap: new WeakMap(),
                nameMap: new Map(),
                started: !1,
                listeners: [],
              }),
                this.#Ot.set(n, r)
            }
            return r
          }
          async on(t, e) {
            const n = await this.#Vt(t)
            return (
              n.listeners.push({ listener: e, once: !1 }),
              n.started ||
                (n.subscriber.start(),
                (n.started = !0),
                null != this.#St && n.subscriber.pause(this.#St)),
              this
            )
          }
          async once(t, e) {
            const n = await this.#Vt(t)
            return (
              n.listeners.push({ listener: e, once: !0 }),
              n.started ||
                (n.subscriber.start(),
                (n.started = !0),
                null != this.#St && n.subscriber.pause(this.#St)),
              this
            )
          }
          async emit(t, ...e) {
            const n = await this.#Qt(t, e)
            if (!n || 0 === n.listeners.length) return !1
            const r = n.listeners.length
            return (
              (n.listeners = n.listeners.filter(({ listener: n, once: r }) => {
                const o = new Nr.z(this, r ? null : n, t)
                try {
                  n.call(this, ...e, o)
                } catch (t) {}
                return !r
              })),
              0 === n.listeners.length &&
                (n.started && n.subscriber.stop(), this.#Ot.delete(n.tag)),
              r > 0
            )
          }
          async listenerCount(t) {
            if (t) {
              const e = await this.#Qt(t)
              return e ? e.listeners.length : 0
            }
            let e = 0
            for (const { listeners: t } of this.#Ot.values()) e += t.length
            return e
          }
          async listeners(t) {
            if (t) {
              const e = await this.#Qt(t)
              return e ? e.listeners.map(({ listener: t }) => t) : []
            }
            let e = []
            for (const { listeners: t } of this.#Ot.values())
              e = e.concat(t.map(({ listener: t }) => t))
            return e
          }
          async off(t, e) {
            const n = await this.#Qt(t)
            if (!n) return this
            if (e) {
              const t = n.listeners.map(({ listener: t }) => t).indexOf(e)
              t >= 0 && n.listeners.splice(t, 1)
            }
            return (
              (e && 0 !== n.listeners.length) ||
                (n.started && n.subscriber.stop(), this.#Ot.delete(n.tag)),
              this
            )
          }
          async removeAllListeners(t) {
            if (t) {
              const { tag: e, started: n, subscriber: r } = await this.#Vt(t)
              n && r.stop(), this.#Ot.delete(e)
            } else
              for (const [t, { started: e, subscriber: n }] of this.#Ot)
                e && n.stop(), this.#Ot.delete(t)
            return this
          }
          async addListener(t, e) {
            return await this.on(t, e)
          }
          async removeListener(t, e) {
            return this.off(t, e)
          }
          get destroyed() {
            return this.#It
          }
          destroy() {
            this.removeAllListeners()
            for (const t of this.#Lt.keys()) this._clearTimeout(t)
            this.#It = !0
          }
          get paused() {
            return null != this.#St
          }
          set paused(t) {
            !!t !== this.paused &&
              (this.paused ? this.resume() : this.pause(!1))
          }
          pause(t) {
            if (((this.#Mt = -1), null != this.#St)) {
              if (this.#St == !!t) return
              ;(0, l.vA)(
                !1,
                'cannot change pause type; resume first',
                'UNSUPPORTED_OPERATION',
                { operation: 'pause' },
              )
            }
            this._forEachSubscriber((e) => e.pause(t)), (this.#St = !!t)
            for (const t of this.#Lt.values())
              t.timer && clearTimeout(t.timer), (t.time = go() - t.time)
          }
          resume() {
            if (null != this.#St) {
              this._forEachSubscriber((t) => t.resume()), (this.#St = null)
              for (const t of this.#Lt.values()) {
                let e = t.time
                e < 0 && (e = 0), (t.time = go()), setTimeout(t.func, e)
              }
            }
          }
        }
        function bo(t, e) {
          try {
            const n = vo(t, e)
            if (n) return (0, V._v)(n)
          } catch (t) {}
          return null
        }
        function vo(t, e) {
          if ('0x' === t) return null
          try {
            const n = (0, g.WZ)((0, p.ZG)(t, e, e + 32)),
              r = (0, g.WZ)((0, p.ZG)(t, n, n + 32))
            return (0, p.ZG)(t, n + 32, n + 32 + r)
          } catch (t) {}
          return null
        }
        function wo(t) {
          const e = (0, g.c4)(t)
          if (e.length > 32) throw new Error('internal; should not happen')
          const n = new Uint8Array(32)
          return n.set(e, 32 - e.length), n
        }
        function Ao(t) {
          if (t.length % 32 == 0) return t
          const e = new Uint8Array(32 * Math.ceil(t.length / 32))
          return e.set(t), e
        }
        const xo = new Uint8Array([])
        function Eo(t) {
          const e = []
          let n = 0
          for (let r = 0; r < t.length; r++) e.push(xo), (n += 32)
          for (let r = 0; r < t.length; r++) {
            const o = (0, p.q5)(t[r])
            ;(e[r] = wo(n)),
              e.push(wo(o.length)),
              e.push(Ao(o)),
              (n += 32 + 32 * Math.ceil(o.length / 32))
          }
          return (0, p.xW)(e)
        }
        const ko =
          '0x0000000000000000000000000000000000000000000000000000000000000000'
        function Ro(t, e) {
          if (t.provider) return t.provider
          ;(0, l.vA)(!1, 'missing provider', 'UNSUPPORTED_OPERATION', {
            operation: e,
          })
        }
        async function No(t, e) {
          let n = (0, to.VS)(e)
          if ((null != n.to && (n.to = (0, h.tG)(n.to, t)), null != n.from)) {
            const e = n.from
            n.from = Promise.all([t.getAddress(), (0, h.tG)(e, t)]).then(
              ([t, e]) => (
                (0, l.MR)(
                  t.toLowerCase() === e.toLowerCase(),
                  'transaction from mismatch',
                  'tx.from',
                  e,
                ),
                t
              ),
            )
          } else n.from = t.getAddress()
          return await (0, m.k)(n)
        }
        class Po {
          provider
          constructor(t) {
            ;(0, m.n)(this, { provider: t || null })
          }
          async getNonce(t) {
            return Ro(this, 'getTransactionCount').getTransactionCount(
              await this.getAddress(),
              t,
            )
          }
          async populateCall(t) {
            return await No(this, t)
          }
          async populateTransaction(t) {
            const e = Ro(this, 'populateTransaction'),
              n = await No(this, t)
            null == n.nonce && (n.nonce = await this.getNonce('pending')),
              null == n.gasLimit && (n.gasLimit = await this.estimateGas(n))
            const r = await this.provider.getNetwork()
            if (null != n.chainId) {
              const e = (0, g.Ab)(n.chainId)
              ;(0, l.MR)(
                e === r.chainId,
                'transaction chainId mismatch',
                'tx.chainId',
                t.chainId,
              )
            } else n.chainId = r.chainId
            const o = null != n.maxFeePerGas || null != n.maxPriorityFeePerGas
            if (
              (null == n.gasPrice || (2 !== n.type && !o)
                ? (0 !== n.type && 1 !== n.type) ||
                  !o ||
                  (0, l.MR)(
                    !1,
                    'pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas',
                    'tx',
                    t,
                  )
                : (0, l.MR)(
                    !1,
                    'eip-1559 transaction do not support gasPrice',
                    'tx',
                    t,
                  ),
              (2 !== n.type && null != n.type) ||
                null == n.maxFeePerGas ||
                null == n.maxPriorityFeePerGas)
            )
              if (0 === n.type || 1 === n.type) {
                const t = await e.getFeeData()
                ;(0, l.vA)(
                  null != t.gasPrice,
                  'network does not support gasPrice',
                  'UNSUPPORTED_OPERATION',
                  { operation: 'getGasPrice' },
                ),
                  null == n.gasPrice && (n.gasPrice = t.gasPrice)
              } else {
                const t = await e.getFeeData()
                if (null == n.type)
                  if (null != t.maxFeePerGas && null != t.maxPriorityFeePerGas)
                    if (
                      (n.authorizationList && n.authorizationList.length
                        ? (n.type = 4)
                        : (n.type = 2),
                      null != n.gasPrice)
                    ) {
                      const t = n.gasPrice
                      delete n.gasPrice,
                        (n.maxFeePerGas = t),
                        (n.maxPriorityFeePerGas = t)
                    } else
                      null == n.maxFeePerGas &&
                        (n.maxFeePerGas = t.maxFeePerGas),
                        null == n.maxPriorityFeePerGas &&
                          (n.maxPriorityFeePerGas = t.maxPriorityFeePerGas)
                  else
                    null != t.gasPrice
                      ? ((0, l.vA)(
                          !o,
                          'network does not support EIP-1559',
                          'UNSUPPORTED_OPERATION',
                          { operation: 'populateTransaction' },
                        ),
                        null == n.gasPrice && (n.gasPrice = t.gasPrice),
                        (n.type = 0))
                      : (0, l.vA)(
                          !1,
                          'failed to get consistent fee data',
                          'UNSUPPORTED_OPERATION',
                          { operation: 'signer.getFeeData' },
                        )
                else
                  (2 !== n.type && 3 !== n.type && 4 !== n.type) ||
                    (null == n.maxFeePerGas &&
                      (n.maxFeePerGas = t.maxFeePerGas),
                    null == n.maxPriorityFeePerGas &&
                      (n.maxPriorityFeePerGas = t.maxPriorityFeePerGas))
              }
            else n.type = 2
            return await (0, m.k)(n)
          }
          async populateAuthorization(t) {
            const e = Object.assign({}, t)
            return (
              null == e.chainId &&
                (e.chainId = (
                  await Ro(this, 'getNetwork').getNetwork()
                ).chainId),
              null == e.nonce && (e.nonce = await this.getNonce()),
              e
            )
          }
          async estimateGas(t) {
            return Ro(this, 'estimateGas').estimateGas(
              await this.populateCall(t),
            )
          }
          async call(t) {
            return Ro(this, 'call').call(await this.populateCall(t))
          }
          async resolveName(t) {
            const e = Ro(this, 'resolveName')
            return await e.resolveName(t)
          }
          async sendTransaction(t) {
            const e = Ro(this, 'sendTransaction'),
              n = await this.populateTransaction(t)
            delete n.from
            const r = Rr.from(n)
            return await e.broadcastTransaction(await this.signTransaction(r))
          }
          authorize(t) {
            ;(0, l.vA)(
              !1,
              'authorization not implemented for this signer',
              'UNSUPPORTED_OPERATION',
              { operation: 'authorize' },
            )
          }
        }
        class Co {
          #vt
          #Wt
          #wt
          #kt
          #Jt
          #Kt
          constructor(t) {
            ;(this.#vt = t),
              (this.#Wt = null),
              (this.#wt = this.#Et.bind(this)),
              (this.#kt = !1),
              (this.#Jt = null),
              (this.#Kt = !1)
          }
          _subscribe(t) {
            throw new Error('subclasses must override this')
          }
          _emitResults(t, e) {
            throw new Error('subclasses must override this')
          }
          _recover(t) {
            throw new Error('subclasses must override this')
          }
          async #Et(t) {
            try {
              null == this.#Wt && (this.#Wt = this._subscribe(this.#vt))
              let t = null
              try {
                t = await this.#Wt
              } catch (t) {
                if (
                  !(0, l.bJ)(t, 'UNSUPPORTED_OPERATION') ||
                  'eth_newFilter' !== t.operation
                )
                  throw t
              }
              if (null == t)
                return (
                  (this.#Wt = null),
                  void this.#vt._recoverSubscriber(
                    this,
                    this._recover(this.#vt),
                  )
                )
              const e = await this.#vt.getNetwork()
              if ((this.#Jt || (this.#Jt = e), this.#Jt.chainId !== e.chainId))
                throw new Error('chaid changed')
              if (this.#Kt) return
              const n = await this.#vt.send('eth_getFilterChanges', [t])
              await this._emitResults(this.#vt, n)
            } catch (t) {
              console.log('@TODO', t)
            }
            this.#vt.once('block', this.#wt)
          }
          #qt() {
            const t = this.#Wt
            t &&
              ((this.#Wt = null),
              t.then((t) => {
                this.#vt.destroyed || this.#vt.send('eth_uninstallFilter', [t])
              }))
          }
          start() {
            this.#kt || ((this.#kt = !0), this.#Et(-2))
          }
          stop() {
            this.#kt &&
              ((this.#kt = !1),
              (this.#Kt = !0),
              this.#qt(),
              this.#vt.off('block', this.#wt))
          }
          pause(t) {
            t && this.#qt(), this.#vt.off('block', this.#wt)
          }
          resume() {
            this.start()
          }
        }
        class Oo extends Co {
          #Zt
          constructor(t, e) {
            var n
            super(t), (this.#Zt = ((n = e), JSON.parse(JSON.stringify(n))))
          }
          _recover(t) {
            return new so(t, this.#Zt)
          }
          async _subscribe(t) {
            return await t.send('eth_newFilter', [this.#Zt])
          }
          async _emitResults(t, e) {
            for (const n of e) t.emit(this.#Zt, t._wrapLog(n, t._network))
          }
        }
        class So extends Co {
          async _subscribe(t) {
            return await t.send('eth_newPendingTransactionFilter', [])
          }
          async _emitResults(t, e) {
            for (const n of e) t.emit('pending', n)
          }
        }
        const Io = 'bigint,boolean,function,number,string,symbol'.split(/,/g)
        function Bo(t) {
          if (null == t || Io.indexOf(typeof t) >= 0) return t
          if ('function' == typeof t.getAddress) return t
          if (Array.isArray(t)) return t.map(Bo)
          if ('object' == typeof t)
            return Object.keys(t).reduce((e, n) => ((e[n] = t[n]), e), {})
          throw new Error(`should not happen: ${t} (${typeof t})`)
        }
        function To(t) {
          return new Promise((e) => {
            setTimeout(e, t)
          })
        }
        function _o(t) {
          return t ? t.toLowerCase() : t
        }
        function Mo(t) {
          return t && 'number' == typeof t.pollingInterval
        }
        const Do = {
          polling: !1,
          staticNetwork: null,
          batchStallTime: 10,
          batchMaxSize: 1 << 20,
          batchMaxCount: 100,
          cacheTimeout: 250,
          pollingInterval: 4e3,
        }
        class Lo extends Po {
          address
          constructor(t, e) {
            super(t), (e = (0, f.b)(e)), (0, m.n)(this, { address: e })
          }
          connect(t) {
            ;(0, l.vA)(
              !1,
              'cannot reconnect JsonRpcSigner',
              'UNSUPPORTED_OPERATION',
              { operation: 'signer.connect' },
            )
          }
          async getAddress() {
            return this.address
          }
          async populateTransaction(t) {
            return await this.populateCall(t)
          }
          async sendUncheckedTransaction(t) {
            const e = Bo(t),
              n = []
            if (e.from) {
              const r = e.from
              n.push(
                (async () => {
                  const n = await (0, h.tG)(r, this.provider)
                  ;(0, l.MR)(
                    null != n && n.toLowerCase() === this.address.toLowerCase(),
                    'from address mismatch',
                    'transaction',
                    t,
                  ),
                    (e.from = n)
                })(),
              )
            } else e.from = this.address
            if (
              (null == e.gasLimit &&
                n.push(
                  (async () => {
                    e.gasLimit = await this.provider.estimateGas({
                      ...e,
                      from: this.address,
                    })
                  })(),
                ),
              null != e.to)
            ) {
              const t = e.to
              n.push(
                (async () => {
                  e.to = await (0, h.tG)(t, this.provider)
                })(),
              )
            }
            n.length && (await Promise.all(n))
            const r = this.provider.getRpcTransaction(e)
            return this.provider.send('eth_sendTransaction', [r])
          }
          async sendTransaction(t) {
            const e = await this.provider.getBlockNumber(),
              n = await this.sendUncheckedTransaction(t)
            return await new Promise((t, r) => {
              const o = [1e3, 100]
              let i = 0
              const a = async () => {
                try {
                  const r = await this.provider.getTransaction(n)
                  if (null != r) return void t(r.replaceableTransaction(e))
                } catch (t) {
                  if (
                    (0, l.bJ)(t, 'CANCELLED') ||
                    (0, l.bJ)(t, 'BAD_DATA') ||
                    (0, l.bJ)(t, 'NETWORK_ERROR') ||
                    (0, l.bJ)(t, 'UNSUPPORTED_OPERATION')
                  )
                    return (
                      null == t.info && (t.info = {}),
                      (t.info.sendTransactionHash = n),
                      void r(t)
                    )
                  if (
                    (0, l.bJ)(t, 'INVALID_ARGUMENT') &&
                    (i++,
                    null == t.info && (t.info = {}),
                    (t.info.sendTransactionHash = n),
                    i > 10)
                  )
                    return void r(t)
                  this.provider.emit(
                    'error',
                    (0, l.xz)(
                      'failed to fetch transation after sending (will try again)',
                      'UNKNOWN_ERROR',
                      { error: t },
                    ),
                  )
                }
                this.provider._setTimeout(() => {
                  a()
                }, o.pop() || 4e3)
              }
              a()
            })
          }
          async signTransaction(t) {
            const e = Bo(t)
            if (e.from) {
              const n = await (0, h.tG)(e.from, this.provider)
              ;(0, l.MR)(
                null != n && n.toLowerCase() === this.address.toLowerCase(),
                'from address mismatch',
                'transaction',
                t,
              ),
                (e.from = n)
            } else e.from = this.address
            const n = this.provider.getRpcTransaction(e)
            return await this.provider.send('eth_signTransaction', [n])
          }
          async signMessage(t) {
            const e = 'string' == typeof t ? (0, V.YW)(t) : t
            return await this.provider.send('personal_sign', [
              (0, p.c$)(e),
              this.address.toLowerCase(),
            ])
          }
          async signTypedData(t, e, n) {
            const r = Bo(n),
              o = await B.resolveNames(t, e, r, async (t) => {
                const e = await (0, h.tG)(t)
                return (
                  (0, l.MR)(
                    null != e,
                    'TypedData does not support null address',
                    'value',
                    t,
                  ),
                  e
                )
              })
            return await this.provider.send('eth_signTypedData_v4', [
              this.address.toLowerCase(),
              JSON.stringify(B.getPayload(o.domain, e, o.value)),
            ])
          }
          async unlock(t) {
            return this.provider.send('personal_unlockAccount', [
              this.address.toLowerCase(),
              t,
              null,
            ])
          }
          async _legacySignMessage(t) {
            const e = 'string' == typeof t ? (0, V.YW)(t) : t
            return await this.provider.send('eth_sign', [
              this.address.toLowerCase(),
              (0, p.c$)(e),
            ])
          }
        }
        class Fo extends yo {
          #r
          #Yt
          #$t
          #Xt
          #te
          #Jt
          #ee
          #ne() {
            if (this.#Xt) return
            const t =
              1 === this._getOption('batchMaxCount')
                ? 0
                : this._getOption('batchStallTime')
            this.#Xt = setTimeout(() => {
              this.#Xt = null
              const t = this.#$t
              for (this.#$t = []; t.length; ) {
                const e = [t.shift()]
                for (; t.length && e.length !== this.#r.batchMaxCount; ) {
                  e.push(t.shift())
                  if (
                    JSON.stringify(e.map((t) => t.payload)).length >
                    this.#r.batchMaxSize
                  ) {
                    t.unshift(e.pop())
                    break
                  }
                }
                ;(async () => {
                  const t =
                    1 === e.length ? e[0].payload : e.map((t) => t.payload)
                  this.emit('debug', { action: 'sendRpcPayload', payload: t })
                  try {
                    const n = await this._send(t)
                    this.emit('debug', {
                      action: 'receiveRpcResult',
                      result: n,
                    })
                    for (const { resolve: t, reject: r, payload: o } of e) {
                      if (this.destroyed) {
                        r(
                          (0, l.xz)(
                            'provider destroyed; cancelled request',
                            'UNSUPPORTED_OPERATION',
                            { operation: o.method },
                          ),
                        )
                        continue
                      }
                      const e = n.filter((t) => t.id === o.id)[0]
                      if (null == e) {
                        const t = (0, l.xz)(
                          'missing response for request',
                          'BAD_DATA',
                          { value: n, info: { payload: o } },
                        )
                        this.emit('error', t), r(t)
                        continue
                      }
                      'error' in e ? r(this.getRpcError(o, e)) : t(e.result)
                    }
                  } catch (t) {
                    this.emit('debug', { action: 'receiveRpcError', error: t })
                    for (const { reject: n } of e) n(t)
                  }
                })()
              }
            }, t)
          }
          constructor(t, e) {
            super(t, e),
              (this.#Yt = 1),
              (this.#r = Object.assign({}, Do, e || {})),
              (this.#$t = []),
              (this.#Xt = null),
              (this.#Jt = null),
              (this.#ee = null)
            {
              let t = null
              const e = new Promise((e) => {
                t = e
              })
              this.#te = { promise: e, resolve: t }
            }
            const n = this._getOption('staticNetwork')
            'boolean' == typeof n
              ? ((0, l.MR)(
                  !n || 'any' !== t,
                  "staticNetwork cannot be used on special network 'any'",
                  'options',
                  e,
                ),
                n && null != t && (this.#Jt = Zr.from(t)))
              : n &&
                ((0, l.MR)(
                  null == t || n.matches(t),
                  'staticNetwork MUST match network object',
                  'options',
                  e,
                ),
                (this.#Jt = n))
          }
          _getOption(t) {
            return this.#r[t]
          }
          get _network() {
            return (
              (0, l.vA)(
                this.#Jt,
                'network is not available yet',
                'NETWORK_ERROR',
              ),
              this.#Jt
            )
          }
          async _perform(t) {
            if ('call' === t.method || 'estimateGas' === t.method) {
              let e = t.transaction
              if (
                e &&
                null != e.type &&
                (0, g.Ab)(e.type) &&
                null == e.maxFeePerGas &&
                null == e.maxPriorityFeePerGas
              ) {
                const n = await this.getFeeData()
                null == n.maxFeePerGas &&
                  null == n.maxPriorityFeePerGas &&
                  (t = Object.assign({}, t, {
                    transaction: Object.assign({}, e, { type: void 0 }),
                  }))
              }
            }
            const e = this.getRpcRequest(t)
            return null != e
              ? await this.send(e.method, e.args)
              : super._perform(t)
          }
          async _detectNetwork() {
            const t = this._getOption('staticNetwork')
            if (t) {
              if (!0 !== t) return t
              if (this.#Jt) return this.#Jt
            }
            return this.#ee
              ? await this.#ee
              : this.ready
                ? ((this.#ee = (async () => {
                    try {
                      const t = Zr.from(
                        (0, g.Ab)(await this.send('eth_chainId', [])),
                      )
                      return (this.#ee = null), t
                    } catch (t) {
                      throw ((this.#ee = null), t)
                    }
                  })()),
                  await this.#ee)
                : ((this.#ee = (async () => {
                    const t = {
                      id: this.#Yt++,
                      method: 'eth_chainId',
                      params: [],
                      jsonrpc: '2.0',
                    }
                    let e
                    this.emit('debug', { action: 'sendRpcPayload', payload: t })
                    try {
                      ;(e = (await this._send(t))[0]), (this.#ee = null)
                    } catch (t) {
                      throw (
                        ((this.#ee = null),
                        this.emit('debug', {
                          action: 'receiveRpcError',
                          error: t,
                        }),
                        t)
                      )
                    }
                    if (
                      (this.emit('debug', {
                        action: 'receiveRpcResult',
                        result: e,
                      }),
                      'result' in e)
                    )
                      return Zr.from((0, g.Ab)(e.result))
                    throw this.getRpcError(t, e)
                  })()),
                  await this.#ee)
          }
          _start() {
            null != this.#te &&
              null != this.#te.resolve &&
              (this.#te.resolve(),
              (this.#te = null),
              (async () => {
                for (; null == this.#Jt && !this.destroyed; )
                  try {
                    this.#Jt = await this._detectNetwork()
                  } catch (t) {
                    if (this.destroyed) break
                    console.log(
                      'JsonRpcProvider failed to detect network and cannot start up; retry in 1s (perhaps the URL is wrong or the node is not started)',
                    ),
                      this.emit(
                        'error',
                        (0, l.xz)(
                          'failed to bootstrap network detection',
                          'NETWORK_ERROR',
                          {
                            event: 'initial-network-discovery',
                            info: { error: t },
                          },
                        ),
                      ),
                      await To(1e3)
                  }
                this.#ne()
              })())
          }
          async _waitUntilReady() {
            if (null != this.#te) return await this.#te.promise
          }
          _getSubscriber(t) {
            return 'pending' === t.type
              ? new So(this)
              : 'event' === t.type
                ? this._getOption('polling')
                  ? new so(this, t.filter)
                  : new Oo(this, t.filter)
                : 'orphan' === t.type && 'drop-log' === t.filter.orphan
                  ? new fo('orphan')
                  : super._getSubscriber(t)
          }
          get ready() {
            return null == this.#te
          }
          getRpcTransaction(t) {
            const e = {}
            return (
              [
                'chainId',
                'gasLimit',
                'gasPrice',
                'type',
                'maxFeePerGas',
                'maxPriorityFeePerGas',
                'nonce',
                'value',
              ].forEach((n) => {
                if (null == t[n]) return
                let r = n
                'gasLimit' === n && (r = 'gas'),
                  (e[r] = (0, g.nD)((0, g.Ab)(t[n], `tx.${n}`)))
              }),
              ['from', 'to', 'data'].forEach((n) => {
                null != t[n] && (e[n] = (0, p.c$)(t[n]))
              }),
              t.accessList && (e.accessList = (0, T.$)(t.accessList)),
              t.blobVersionedHashes &&
                (e.blobVersionedHashes = t.blobVersionedHashes.map((t) =>
                  t.toLowerCase(),
                )),
              t.authorizationList &&
                (e.authorizationList = t.authorizationList.map((t) => {
                  const e = Q(t)
                  return {
                    address: e.address,
                    nonce: (0, g.nD)(e.nonce),
                    chainId: (0, g.nD)(e.chainId),
                    yParity: (0, g.nD)(e.signature.yParity),
                    r: (0, g.nD)(e.signature.r),
                    s: (0, g.nD)(e.signature.s),
                  }
                })),
              e
            )
          }
          getRpcRequest(t) {
            switch (t.method) {
              case 'chainId':
                return { method: 'eth_chainId', args: [] }
              case 'getBlockNumber':
                return { method: 'eth_blockNumber', args: [] }
              case 'getGasPrice':
                return { method: 'eth_gasPrice', args: [] }
              case 'getPriorityFee':
                return { method: 'eth_maxPriorityFeePerGas', args: [] }
              case 'getBalance':
                return {
                  method: 'eth_getBalance',
                  args: [_o(t.address), t.blockTag],
                }
              case 'getTransactionCount':
                return {
                  method: 'eth_getTransactionCount',
                  args: [_o(t.address), t.blockTag],
                }
              case 'getCode':
                return {
                  method: 'eth_getCode',
                  args: [_o(t.address), t.blockTag],
                }
              case 'getStorage':
                return {
                  method: 'eth_getStorageAt',
                  args: [
                    _o(t.address),
                    '0x' + t.position.toString(16),
                    t.blockTag,
                  ],
                }
              case 'broadcastTransaction':
                return {
                  method: 'eth_sendRawTransaction',
                  args: [t.signedTransaction],
                }
              case 'getBlock':
                if ('blockTag' in t)
                  return {
                    method: 'eth_getBlockByNumber',
                    args: [t.blockTag, !!t.includeTransactions],
                  }
                if ('blockHash' in t)
                  return {
                    method: 'eth_getBlockByHash',
                    args: [t.blockHash, !!t.includeTransactions],
                  }
                break
              case 'getTransaction':
                return { method: 'eth_getTransactionByHash', args: [t.hash] }
              case 'getTransactionReceipt':
                return { method: 'eth_getTransactionReceipt', args: [t.hash] }
              case 'call':
                return {
                  method: 'eth_call',
                  args: [this.getRpcTransaction(t.transaction), t.blockTag],
                }
              case 'estimateGas':
                return {
                  method: 'eth_estimateGas',
                  args: [this.getRpcTransaction(t.transaction)],
                }
              case 'getLogs':
                return (
                  t.filter &&
                    null != t.filter.address &&
                    (Array.isArray(t.filter.address)
                      ? (t.filter.address = t.filter.address.map(_o))
                      : (t.filter.address = _o(t.filter.address))),
                  { method: 'eth_getLogs', args: [t.filter] }
                )
            }
            return null
          }
          getRpcError(t, e) {
            const { method: n } = t,
              { error: r } = e
            if ('eth_estimateGas' === n && r.message) {
              const e = r.message
              if (!e.match(/revert/i) && e.match(/insufficient funds/i))
                return (0, l.xz)('insufficient funds', 'INSUFFICIENT_FUNDS', {
                  transaction: t.params[0],
                  info: { payload: t, error: r },
                })
              if (e.match(/nonce/i) && e.match(/too low/i))
                return (0, l.xz)(
                  'nonce has already been used',
                  'NONCE_EXPIRED',
                  { transaction: t.params[0], info: { payload: t, error: r } },
                )
            }
            if ('eth_call' === n || 'eth_estimateGas' === n) {
              const e = jo(r),
                o = c.y.getBuiltinCallException(
                  'eth_call' === n ? 'call' : 'estimateGas',
                  t.params[0],
                  e ? e.data : null,
                )
              return (o.info = { error: r, payload: t }), o
            }
            const o = JSON.stringify(
              (function (t) {
                const e = []
                return Go(t, e), e
              })(r),
            )
            if (
              'string' == typeof r.message &&
              r.message.match(/user denied|ethers-user-denied/i)
            ) {
              const e = {
                eth_sign: 'signMessage',
                personal_sign: 'signMessage',
                eth_signTypedData_v4: 'signTypedData',
                eth_signTransaction: 'signTransaction',
                eth_sendTransaction: 'sendTransaction',
                eth_requestAccounts: 'requestAccess',
                wallet_requestAccounts: 'requestAccess',
              }
              return (0, l.xz)('user rejected action', 'ACTION_REJECTED', {
                action: e[n] || 'unknown',
                reason: 'rejected',
                info: { payload: t, error: r },
              })
            }
            if ('eth_sendRawTransaction' === n || 'eth_sendTransaction' === n) {
              const e = t.params[0]
              if (o.match(/insufficient funds|base fee exceeds gas limit/i))
                return (0, l.xz)(
                  'insufficient funds for intrinsic transaction cost',
                  'INSUFFICIENT_FUNDS',
                  { transaction: e, info: { error: r } },
                )
              if (o.match(/nonce/i) && o.match(/too low/i))
                return (0, l.xz)(
                  'nonce has already been used',
                  'NONCE_EXPIRED',
                  { transaction: e, info: { error: r } },
                )
              if (
                o.match(/replacement transaction/i) &&
                o.match(/underpriced/i)
              )
                return (0, l.xz)(
                  'replacement fee too low',
                  'REPLACEMENT_UNDERPRICED',
                  { transaction: e, info: { error: r } },
                )
              if (o.match(/only replay-protected/i))
                return (0, l.xz)(
                  'legacy pre-eip-155 transactions not supported',
                  'UNSUPPORTED_OPERATION',
                  {
                    operation: n,
                    info: { transaction: e, info: { error: r } },
                  },
                )
            }
            let i = !!o.match(/the method .* does not exist/i)
            return (
              i ||
                (r &&
                  r.details &&
                  r.details.startsWith('Unauthorized method:') &&
                  (i = !0)),
              i
                ? (0, l.xz)('unsupported operation', 'UNSUPPORTED_OPERATION', {
                    operation: t.method,
                    info: { error: r, payload: t },
                  })
                : (0, l.xz)('could not coalesce error', 'UNKNOWN_ERROR', {
                    error: r,
                    payload: t,
                  })
            )
          }
          send(t, e) {
            if (this.destroyed)
              return Promise.reject(
                (0, l.xz)(
                  'provider destroyed; cancelled request',
                  'UNSUPPORTED_OPERATION',
                  { operation: t },
                ),
              )
            const n = this.#Yt++,
              r = new Promise((r, o) => {
                this.#$t.push({
                  resolve: r,
                  reject: o,
                  payload: { method: t, params: e, id: n, jsonrpc: '2.0' },
                })
              })
            return this.#ne(), r
          }
          async getSigner(t) {
            null == t && (t = 0)
            const e = this.send('eth_accounts', [])
            if ('number' == typeof t) {
              const n = await e
              if (t >= n.length) throw new Error('no such account')
              return new Lo(this, n[t])
            }
            const { accounts: n } = await (0, m.k)({
              network: this.getNetwork(),
              accounts: e,
            })
            t = (0, f.b)(t)
            for (const e of n) if ((0, f.b)(e) === t) return new Lo(this, t)
            throw new Error('invalid account')
          }
          async listAccounts() {
            return (await this.send('eth_accounts', [])).map(
              (t) => new Lo(this, t),
            )
          }
          destroy() {
            this.#Xt && (clearTimeout(this.#Xt), (this.#Xt = null))
            for (const { payload: t, reject: e } of this.#$t)
              e(
                (0, l.xz)(
                  'provider destroyed; cancelled request',
                  'UNSUPPORTED_OPERATION',
                  { operation: t.method },
                ),
              )
            ;(this.#$t = []), super.destroy()
          }
        }
        class Uo extends Fo {
          #re
          constructor(t, e) {
            super(t, e)
            let n = this._getOption('pollingInterval')
            null == n && (n = Do.pollingInterval), (this.#re = n)
          }
          _getSubscriber(t) {
            const e = super._getSubscriber(t)
            return Mo(e) && (e.pollingInterval = this.#re), e
          }
          get pollingInterval() {
            return this.#re
          }
          set pollingInterval(t) {
            if (!Number.isInteger(t) || t < 0)
              throw new Error('invalid interval')
            ;(this.#re = t),
              this._forEachSubscriber((t) => {
                Mo(t) && (t.pollingInterval = this.#re)
              })
          }
        }
        function jo(t) {
          if (null == t) return null
          if (
            'string' == typeof t.message &&
            t.message.match(/revert/i) &&
            (0, p.Lo)(t.data)
          )
            return { message: t.message, data: t.data }
          if ('object' == typeof t) {
            for (const e in t) {
              const n = jo(t[e])
              if (n) return n
            }
            return null
          }
          if ('string' == typeof t)
            try {
              return jo(JSON.parse(t))
            } catch (t) {}
          return null
        }
        function Go(t, e) {
          if (null != t) {
            if (
              ('string' == typeof t.message && e.push(t.message),
              'object' == typeof t)
            )
              for (const n in t) Go(t[n], e)
            if ('string' == typeof t)
              try {
                return Go(JSON.parse(t), e)
              } catch (t) {}
          }
        }
        class Ho extends Uo {
          #W
          #oe
          constructor(t, e, n) {
            const r = Object.assign({}, null != n ? n : {}, {
              batchMaxCount: 1,
            })
            ;(0, l.MR)(
              t && t.request,
              'invalid EIP-1193 provider',
              'ethereum',
              t,
            ),
              super(e, r),
              (this.#oe = null),
              n && n.providerInfo && (this.#oe = n.providerInfo),
              (this.#W = async (e, n) => {
                const r = { method: e, params: n }
                this.emit('debug', { action: 'sendEip1193Request', payload: r })
                try {
                  const e = await t.request(r)
                  return (
                    this.emit('debug', {
                      action: 'receiveEip1193Result',
                      result: e,
                    }),
                    e
                  )
                } catch (t) {
                  const e = new Error(t.message)
                  throw (
                    ((e.code = t.code),
                    (e.data = t.data),
                    (e.payload = r),
                    this.emit('debug', {
                      action: 'receiveEip1193Error',
                      error: e,
                    }),
                    e)
                  )
                }
              })
          }
          get providerInfo() {
            return this.#oe
          }
          async send(t, e) {
            return await this._start(), await super.send(t, e)
          }
          async _send(t) {
            ;(0, l.MR)(
              !Array.isArray(t),
              'EIP-1193 does not support batch request',
              'payload',
              t,
            )
            try {
              const e = await this.#W(t.method, t.params || [])
              return [{ id: t.id, result: e }]
            } catch (e) {
              return [
                {
                  id: t.id,
                  error: { code: e.code, data: e.data, message: e.message },
                },
              ]
            }
          }
          getRpcError(t, e) {
            switch ((e = JSON.parse(JSON.stringify(e))).error.code || -1) {
              case 4001:
                e.error.message = `ethers-user-denied: ${e.error.message}`
                break
              case 4200:
                e.error.message = `ethers-unsupported: ${e.error.message}`
            }
            return super.getRpcError(t, e)
          }
          async hasSigner(t) {
            null == t && (t = 0)
            const e = await this.send('eth_accounts', [])
            return 'number' == typeof t
              ? e.length > t
              : ((t = t.toLowerCase()),
                0 !== e.filter((e) => e.toLowerCase() === t).length)
          }
          async getSigner(t) {
            if ((null == t && (t = 0), !(await this.hasSigner(t))))
              try {
                await this.#W('eth_requestAccounts', [])
              } catch (t) {
                const e = t.payload
                throw this.getRpcError(e, { id: e.id, error: t })
              }
            return await super.getSigner(t)
          }
          static async discover(t) {
            if ((null == t && (t = {}), t.provider)) return new Ho(t.provider)
            const e = t.window
              ? t.window
              : 'undefined' != typeof window
                ? window
                : null
            if (null == e) return null
            const n = t.anyProvider
            if (n && e.ethereum) return new Ho(e.ethereum)
            if (
              !(
                'addEventListener' in e &&
                'dispatchEvent' in e &&
                'removeEventListener' in e
              )
            )
              return null
            const r = t.timeout ? t.timeout : 300
            return 0 === r
              ? null
              : await new Promise((o, i) => {
                  let a = []
                  const s = (t) => {
                      a.push(t.detail), n && u()
                    },
                    u = () => {
                      if ((clearTimeout(c), a.length))
                        if (t && t.filter) {
                          const e = t.filter(
                            a.map((t) => Object.assign({}, t.info)),
                          )
                          if (null == e) o(null)
                          else if (e instanceof Ho) o(e)
                          else {
                            let t = null
                            if (e.uuid) {
                              t = a.filter((t) => e.uuid === t.info.uuid)[0]
                            }
                            if (t) {
                              const { provider: e, info: n } = t
                              o(new Ho(e, void 0, { providerInfo: n }))
                            } else
                              i(
                                (0, l.xz)(
                                  'filter returned unknown info',
                                  'UNSUPPORTED_OPERATION',
                                  { value: e },
                                ),
                              )
                          }
                        } else {
                          const { provider: t, info: e } = a[0]
                          o(new Ho(t, void 0, { providerInfo: e }))
                        }
                      else o(null)
                      e.removeEventListener('eip6963:announceProvider', s)
                    },
                    c = setTimeout(() => {
                      u()
                    }, r)
                  e.addEventListener('eip6963:announceProvider', s),
                    e.dispatchEvent(new Event('eip6963:requestProvider'))
                })
          }
        }
        const zo = (Qo = (t, e) => ({
          account: '',
          chainId: null,
          signer: null,
          provider: null,
          accounts: [],
          connect: async () => {
            if ('undefined' == typeof window || void 0 === window.ethereum)
              return (
                u.oR.error(
                  '请先安装 MetaMask 钱包或其他以太坊钱包扩展，后再刷新页面',
                ),
                !1
              )
            try {
              await window.ethereum.request({
                method: 'wallet_requestPermissions',
                params: [{ eth_accounts: {} }],
              })
              const n = await window.ethereum.request({
                method: 'eth_requestAccounts',
              })
              if (!n.length) throw new Error('用户拒绝了连接请求')
              return (
                t({ accounts: n, account: n[0] }),
                await e().initializeProviderAndSigner(n[0]),
                !0
              )
            } catch (t) {
              return (
                console.error('连接钱包失败', t),
                u.oR.error(t?.message || '连接钱包失败'),
                !1
              )
            }
          },
          disconnect: () => {
            t({
              account: '',
              chainId: null,
              signer: null,
              provider: null,
              accounts: [],
            }),
              'undefined' != typeof window &&
                (window.ethereum?.removeListener(
                  'accountsChanged',
                  e().handleAccountsChanged,
                ),
                window.ethereum?.removeListener(
                  'chainChanged',
                  e().handleChainChanged,
                ))
          },
          initializeProviderAndSigner: async (e) => {
            if ('undefined' == typeof window || !window.ethereum) return
            const n = new Ho(window.ethereum),
              r = await n.getNetwork(),
              o = await n.getSigner()
            t({
              signer: o,
              provider: n,
              account: e,
              chainId: Number(r.chainId),
            })
          },
          handleAccountsChanged: (n) => {
            if (!n || 0 === n.length) return void e().disconnect()
            const r = n[0]
            t({ accounts: n, account: r }), e().initializeProviderAndSigner(r)
          },
          handleChainChanged: async (n) => {
            const r = Number.parseInt(n, 16)
            t({ chainId: r }), console.log('连接网络变更', n, r)
            const o = e().account
            o && (await e().initializeProviderAndSigner(o)),
              u.oR.success(`已连接到网络: ${r}`)
          },
          switchNetwork: async (t) => {
            if ('undefined' == typeof window || !window.ethereum)
              return u.oR.error('未检测到以太坊钱包'), !1
            try {
              return (
                await window.ethereum.request({
                  method: 'wallet_switchEthereumChain',
                  params: [{ chainId: `0x${t.toString(16)}` }],
                }),
                !0
              )
            } catch (t) {
              return (
                4902 === t?.code
                  ? u.oR.error('当前钱包未添加该网络，请先在钱包中添加')
                  : u.oR.error(t?.message || '切换网络失败'),
                !1
              )
            }
          },
          checkIsWalletConnected: async () => {
            if ('undefined' != typeof window && void 0 !== window.ethereum)
              try {
                const n = await window.ethereum.request({
                  method: 'eth_accounts',
                })
                n.length > 0 &&
                  (t({ accounts: n, account: n[0] }),
                  await e().initializeProviderAndSigner(n[0]))
              } catch (t) {
                console.error('检查钱包连接状态失败', t),
                  u.oR.error('检查钱包连接状态失败')
              }
            else u.oR.error('请先安装 MetaMask 钱包，后再刷新页面')
          },
          selectAccount: async (n) =>
            !('undefined' == typeof window || !window.ethereum) &&
            !!e().accounts.includes(n) &&
            (t({ account: n }), await e().initializeProviderAndSigner(n), !0),
        }))
          ? s(Qo)
          : s
        var Qo
      },
      644: (t, e, n) => {
        'use strict'
        n.d(e, { S: () => N })
        var r = n(789),
          o = n(486),
          i = n(982)
        const [a, s, u] = [[], [], []],
          l = BigInt(0),
          c = BigInt(1),
          f = BigInt(2),
          h = BigInt(7),
          d = BigInt(256),
          p = BigInt(113)
        for (let t = 0, e = c, n = 1, r = 0; t < 24; t++) {
          ;([n, r] = [r, (2 * n + 3 * r) % 5]),
            a.push(2 * (5 * r + n)),
            s.push((((t + 1) * (t + 2)) / 2) % 64)
          let o = l
          for (let t = 0; t < 7; t++)
            (e = ((e << c) ^ ((e >> h) * p)) % d),
              e & f && (o ^= c << ((c << BigInt(t)) - c))
          u.push(o)
        }
        const [g, m] = (0, o.lD)(u, !0),
          y = (t, e, n) => (n > 32 ? (0, o.WM)(t, e, n) : (0, o.P5)(t, e, n)),
          b = (t, e, n) => (n > 32 ? (0, o.im)(t, e, n) : (0, o.B4)(t, e, n))
        class v extends i.Vw {
          constructor(t, e, n, o = !1, a = 24) {
            if (
              (super(),
              (this.blockLen = t),
              (this.suffix = e),
              (this.outputLen = n),
              (this.enableXOF = o),
              (this.rounds = a),
              (this.pos = 0),
              (this.posOut = 0),
              (this.finished = !1),
              (this.destroyed = !1),
              (0, r.ai)(n),
              0 >= this.blockLen || this.blockLen >= 200)
            )
              throw new Error('Sha3 supports only keccak-f1600 function')
            ;(this.state = new Uint8Array(200)),
              (this.state32 = (0, i.DH)(this.state))
          }
          keccak() {
            !(function (t, e = 24) {
              const n = new Uint32Array(10)
              for (let r = 24 - e; r < 24; r++) {
                for (let e = 0; e < 10; e++)
                  n[e] = t[e] ^ t[e + 10] ^ t[e + 20] ^ t[e + 30] ^ t[e + 40]
                for (let e = 0; e < 10; e += 2) {
                  const r = (e + 8) % 10,
                    o = (e + 2) % 10,
                    i = n[o],
                    a = n[o + 1],
                    s = y(i, a, 1) ^ n[r],
                    u = b(i, a, 1) ^ n[r + 1]
                  for (let n = 0; n < 50; n += 10)
                    (t[e + n] ^= s), (t[e + n + 1] ^= u)
                }
                let e = t[2],
                  o = t[3]
                for (let n = 0; n < 24; n++) {
                  const r = s[n],
                    i = y(e, o, r),
                    u = b(e, o, r),
                    l = a[n]
                  ;(e = t[l]), (o = t[l + 1]), (t[l] = i), (t[l + 1] = u)
                }
                for (let e = 0; e < 50; e += 10) {
                  for (let r = 0; r < 10; r++) n[r] = t[e + r]
                  for (let r = 0; r < 10; r++)
                    t[e + r] ^= ~n[(r + 2) % 10] & n[(r + 4) % 10]
                }
                ;(t[0] ^= g[r]), (t[1] ^= m[r])
              }
              n.fill(0)
            })(this.state32, this.rounds),
              (this.posOut = 0),
              (this.pos = 0)
          }
          update(t) {
            ;(0, r.t2)(this)
            const { blockLen: e, state: n } = this,
              o = (t = (0, i.ZJ)(t)).length
            for (let r = 0; r < o; ) {
              const i = Math.min(e - this.pos, o - r)
              for (let e = 0; e < i; e++) n[this.pos++] ^= t[r++]
              this.pos === e && this.keccak()
            }
            return this
          }
          finish() {
            if (this.finished) return
            this.finished = !0
            const { state: t, suffix: e, pos: n, blockLen: r } = this
            ;(t[n] ^= e),
              128 & e && n === r - 1 && this.keccak(),
              (t[r - 1] ^= 128),
              this.keccak()
          }
          writeInto(t) {
            ;(0, r.t2)(this, !1), (0, r.ee)(t), this.finish()
            const e = this.state,
              { blockLen: n } = this
            for (let r = 0, o = t.length; r < o; ) {
              this.posOut >= n && this.keccak()
              const i = Math.min(n - this.posOut, o - r)
              t.set(e.subarray(this.posOut, this.posOut + i), r),
                (this.posOut += i),
                (r += i)
            }
            return t
          }
          xofInto(t) {
            if (!this.enableXOF)
              throw new Error('XOF is not possible for this instance')
            return this.writeInto(t)
          }
          xof(t) {
            return (0, r.ai)(t), this.xofInto(new Uint8Array(t))
          }
          digestInto(t) {
            if (((0, r.CG)(t, this), this.finished))
              throw new Error('digest() was already called')
            return this.writeInto(t), this.destroy(), t
          }
          digest() {
            return this.digestInto(new Uint8Array(this.outputLen))
          }
          destroy() {
            ;(this.destroyed = !0), this.state.fill(0)
          }
          _cloneInto(t) {
            const {
              blockLen: e,
              suffix: n,
              outputLen: r,
              rounds: o,
              enableXOF: i,
            } = this
            return (
              t || (t = new v(e, n, r, i, o)),
              t.state32.set(this.state32),
              (t.pos = this.pos),
              (t.posOut = this.posOut),
              (t.finished = this.finished),
              (t.rounds = o),
              (t.suffix = n),
              (t.outputLen = r),
              (t.enableXOF = i),
              (t.destroyed = this.destroyed),
              t
            )
          }
        }
        const w = (t, e, n) => (0, i.ld)(() => new v(e, t, n)),
          A = w(1, 136, 32)
        var x = n(537)
        let E = !1
        const k = function (t) {
          return A(t)
        }
        let R = k
        function N(t) {
          const e = (0, x.q5)(t, 'data')
          return (0, x.c$)(R(e))
        }
        ;(N._ = k),
          (N.lock = function () {
            E = !0
          }),
          (N.register = function (t) {
            if (E) throw new TypeError('keccak256 is locked')
            R = t
          }),
          Object.freeze(N)
      },
      679: (t, e, n) => {
        'use strict'
        n.d(e, { id: () => i })
        var r = n(644),
          o = n(770)
        function i(t) {
          return (0, r.S)((0, o.YW)(t))
        }
      },
      696: (t, e, n) => {
        'use strict'
        function r(t, e, n) {
          const r = e.split('|').map((t) => t.trim())
          for (let n = 0; n < r.length; n++)
            switch (e) {
              case 'any':
                return
              case 'bigint':
              case 'boolean':
              case 'number':
              case 'string':
                if (typeof t === e) return
            }
          const o = new Error(`invalid value for type ${e}`)
          throw (
            ((o.code = 'INVALID_ARGUMENT'),
            (o.argument = `value.${n}`),
            (o.value = t),
            o)
          )
        }
        async function o(t) {
          const e = Object.keys(t)
          return (
            await Promise.all(e.map((e) => Promise.resolve(t[e])))
          ).reduce((t, n, r) => ((t[e[r]] = n), t), {})
        }
        function i(t, e, n) {
          for (let o in e) {
            let i = e[o]
            const a = n ? n[o] : null
            a && r(i, a, o),
              Object.defineProperty(t, o, {
                enumerable: !0,
                value: i,
                writable: !1,
              })
          }
        }
        n.d(e, { k: () => o, n: () => i })
      },
      712: (t, e, n) => {
        'use strict'
        n.d(e, { z: () => o })
        var r = n(696)
        class o {
          filter
          emitter
          #ie
          constructor(t, e, n) {
            ;(this.#ie = e), (0, r.n)(this, { emitter: t, filter: n })
          }
          async removeListener() {
            null != this.#ie && (await this.emitter.off(this.filter, this.#ie))
          }
        }
      },
      770: (t, e, n) => {
        'use strict'
        n.d(e, { YW: () => u, _v: () => l })
        var r = n(537),
          o = n(910)
        function i(t, e, n, r, o) {
          if ('BAD_PREFIX' === t || 'UNEXPECTED_CONTINUE' === t) {
            let t = 0
            for (let r = e + 1; r < n.length && n[r] >> 6 == 2; r++) t++
            return t
          }
          return 'OVERRUN' === t ? n.length - e - 1 : 0
        }
        const a = Object.freeze({
          error: function (t, e, n, r, i) {
            ;(0, o.MR)(!1, `invalid codepoint at offset ${e}; ${t}`, 'bytes', n)
          },
          ignore: i,
          replace: function (t, e, n, r, a) {
            return 'OVERLONG' === t
              ? ((0, o.MR)(
                  'number' == typeof a,
                  'invalid bad code point for replacement',
                  'badCodepoint',
                  a,
                ),
                r.push(a),
                0)
              : (r.push(65533), i(t, e, n))
          },
        })
        function s(t, e) {
          null == e && (e = a.error)
          const n = (0, r.q5)(t, 'bytes'),
            o = []
          let i = 0
          for (; i < n.length; ) {
            const t = n[i++]
            if (!(t >> 7)) {
              o.push(t)
              continue
            }
            let r = null,
              a = null
            if (192 == (224 & t)) (r = 1), (a = 127)
            else if (224 == (240 & t)) (r = 2), (a = 2047)
            else {
              if (240 != (248 & t)) {
                i += e(
                  128 == (192 & t) ? 'UNEXPECTED_CONTINUE' : 'BAD_PREFIX',
                  i - 1,
                  n,
                  o,
                )
                continue
              }
              ;(r = 3), (a = 65535)
            }
            if (i - 1 + r >= n.length) {
              i += e('OVERRUN', i - 1, n, o)
              continue
            }
            let s = t & ((1 << (8 - r - 1)) - 1)
            for (let t = 0; t < r; t++) {
              let t = n[i]
              if (128 != (192 & t)) {
                ;(i += e('MISSING_CONTINUE', i, n, o)), (s = null)
                break
              }
              ;(s = (s << 6) | (63 & t)), i++
            }
            null !== s &&
              (s > 1114111
                ? (i += e('OUT_OF_RANGE', i - 1 - r, n, o, s))
                : s >= 55296 && s <= 57343
                  ? (i += e('UTF16_SURROGATE', i - 1 - r, n, o, s))
                  : s <= a
                    ? (i += e('OVERLONG', i - 1 - r, n, o, s))
                    : o.push(s))
          }
          return o
        }
        function u(t, e) {
          ;(0, o.MR)('string' == typeof t, 'invalid string value', 'str', t),
            null != e && ((0, o.SP)(e), (t = t.normalize(e)))
          let n = []
          for (let e = 0; e < t.length; e++) {
            const r = t.charCodeAt(e)
            if (r < 128) n.push(r)
            else if (r < 2048) n.push((r >> 6) | 192), n.push((63 & r) | 128)
            else if (55296 == (64512 & r)) {
              e++
              const i = t.charCodeAt(e)
              ;(0, o.MR)(
                e < t.length && 56320 == (64512 & i),
                'invalid surrogate pair',
                'str',
                t,
              )
              const a = 65536 + ((1023 & r) << 10) + (1023 & i)
              n.push((a >> 18) | 240),
                n.push(((a >> 12) & 63) | 128),
                n.push(((a >> 6) & 63) | 128),
                n.push((63 & a) | 128)
            } else
              n.push((r >> 12) | 224),
                n.push(((r >> 6) & 63) | 128),
                n.push((63 & r) | 128)
          }
          return new Uint8Array(n)
        }
        function l(t, e) {
          return s(t, e)
            .map((t) =>
              t <= 65535
                ? String.fromCharCode(t)
                : ((t -= 65536),
                  String.fromCharCode(
                    55296 + ((t >> 10) & 1023),
                    56320 + (1023 & t),
                  )),
            )
            .join('')
        }
      },
      773: (t, e, n) => {
        'use strict'
        n.d(e, { NZ: () => Y })
        var r = n(246),
          o = n(644),
          i = n(679),
          a = n(696),
          s = n(910),
          u = n(537),
          l = n(926),
          c = n(300),
          f = n(595),
          h = n(471)
        class d {
          fragment
          name
          signature
          topic
          args
          constructor(t, e, n) {
            const r = t.name,
              o = t.format()
            ;(0, a.n)(this, {
              fragment: t,
              name: r,
              signature: o,
              topic: e,
              args: n,
            })
          }
        }
        class p {
          fragment
          name
          args
          signature
          selector
          value
          constructor(t, e, n, r) {
            const o = t.name,
              i = t.format()
            ;(0, a.n)(this, {
              fragment: t,
              name: o,
              args: n,
              signature: i,
              selector: e,
              value: r,
            })
          }
        }
        class g {
          fragment
          name
          args
          signature
          selector
          constructor(t, e, n) {
            const r = t.name,
              o = t.format()
            ;(0, a.n)(this, {
              fragment: t,
              name: r,
              args: n,
              signature: o,
              selector: e,
            })
          }
        }
        class m {
          hash
          _isIndexed
          static isIndexed(t) {
            return !(!t || !t._isIndexed)
          }
          constructor(t) {
            ;(0, a.n)(this, { hash: t, _isIndexed: !0 })
          }
        }
        const y = {
            0: 'generic panic',
            1: 'assert(false)',
            17: 'arithmetic overflow',
            18: 'division or modulo by zero',
            33: 'enum overflow',
            34: 'invalid encoded storage byte array accessed',
            49: 'out-of-bounds array access; popping on an empty array',
            50: 'out-of-bounds access of an array or bytesN',
            65: 'out of memory',
            81: 'uninitialized function',
          },
          b = {
            '0x08c379a0': {
              signature: 'Error(string)',
              name: 'Error',
              inputs: ['string'],
              reason: (t) => `reverted with reason string ${JSON.stringify(t)}`,
            },
            '0x4e487b71': {
              signature: 'Panic(uint256)',
              name: 'Panic',
              inputs: ['uint256'],
              reason: (t) => {
                let e = 'unknown panic code'
                return (
                  t >= 0 &&
                    t <= 255 &&
                    y[t.toString()] &&
                    (e = y[t.toString()]),
                  `reverted with panic code 0x${t.toString(16)} (${e})`
                )
              },
            },
          }
        class v {
          fragments
          deploy
          fallback
          receive
          #ae
          #se
          #ue
          #le
          constructor(t) {
            let e = []
            ;(e = 'string' == typeof t ? JSON.parse(t) : t),
              (this.#ue = new Map()),
              (this.#ae = new Map()),
              (this.#se = new Map())
            const n = []
            for (const t of e)
              try {
                n.push(h.FK.from(t))
              } catch (e) {
                console.log(
                  `[Warning] Invalid Fragment ${JSON.stringify(t)}:`,
                  e.message,
                )
              }
            ;(0, a.n)(this, { fragments: Object.freeze(n) })
            let r = null,
              o = !1
            ;(this.#le = this.getAbiCoder()),
              this.fragments.forEach((t, e) => {
                let n
                switch (t.type) {
                  case 'constructor':
                    return this.deploy
                      ? void console.log('duplicate definition - constructor')
                      : void (0, a.n)(this, { deploy: t })
                  case 'fallback':
                    return void (0 === t.inputs.length
                      ? (o = !0)
                      : ((0, s.MR)(
                          !r || t.payable !== r.payable,
                          'conflicting fallback fragments',
                          `fragments[${e}]`,
                          t,
                        ),
                        (r = t),
                        (o = r.payable)))
                  case 'function':
                    n = this.#ue
                    break
                  case 'event':
                    n = this.#se
                    break
                  case 'error':
                    n = this.#ae
                    break
                  default:
                    return
                }
                const i = t.format()
                n.has(i) || n.set(i, t)
              }),
              this.deploy ||
                (0, a.n)(this, { deploy: h.Pw.from('constructor()') }),
              (0, a.n)(this, { fallback: r, receive: o })
          }
          format(t) {
            const e = t ? 'minimal' : 'full'
            return this.fragments.map((t) => t.format(e))
          }
          formatJson() {
            const t = this.fragments.map((t) => t.format('json'))
            return JSON.stringify(t.map((t) => JSON.parse(t)))
          }
          getAbiCoder() {
            return c.y.defaultAbiCoder()
          }
          #ce(t, e, n) {
            if ((0, u.Lo)(t)) {
              const e = t.toLowerCase()
              for (const t of this.#ue.values()) if (e === t.selector) return t
              return null
            }
            if (-1 === t.indexOf('(')) {
              const o = []
              for (const [e, n] of this.#ue) e.split('(')[0] === t && o.push(n)
              if (e) {
                const t = e.length > 0 ? e[e.length - 1] : null
                let n = e.length,
                  i = !0
                r.V.isTyped(t) && 'overrides' === t.type && ((i = !1), n--)
                for (let t = o.length - 1; t >= 0; t--) {
                  const e = o[t].inputs.length
                  e === n || (i && e === n - 1) || o.splice(t, 1)
                }
                for (let t = o.length - 1; t >= 0; t--) {
                  const n = o[t].inputs
                  for (let i = 0; i < e.length; i++)
                    if (r.V.isTyped(e[i])) {
                      if (i >= n.length) {
                        if ('overrides' === e[i].type) continue
                        o.splice(t, 1)
                        break
                      }
                      if (e[i].type !== n[i].baseType) {
                        o.splice(t, 1)
                        break
                      }
                    }
                }
              }
              if (1 === o.length && e && e.length !== o[0].inputs.length) {
                const t = e[e.length - 1]
                ;(null == t || Array.isArray(t) || 'object' != typeof t) &&
                  o.splice(0, 1)
              }
              if (0 === o.length) return null
              if (o.length > 1 && n) {
                const e = o.map((t) => JSON.stringify(t.format())).join(', ')
                ;(0, s.MR)(
                  !1,
                  `ambiguous function description (i.e. matches ${e})`,
                  'key',
                  t,
                )
              }
              return o[0]
            }
            const o = this.#ue.get(h.hc.from(t).format())
            return o || null
          }
          getFunctionName(t) {
            const e = this.#ce(t, null, !1)
            return (0, s.MR)(e, 'no matching function', 'key', t), e.name
          }
          hasFunction(t) {
            return !!this.#ce(t, null, !1)
          }
          getFunction(t, e) {
            return this.#ce(t, e || null, !0)
          }
          forEachFunction(t) {
            const e = Array.from(this.#ue.keys())
            e.sort((t, e) => t.localeCompare(e))
            for (let n = 0; n < e.length; n++) {
              const r = e[n]
              t(this.#ue.get(r), n)
            }
          }
          #fe(t, e, n) {
            if ((0, u.Lo)(t)) {
              const e = t.toLowerCase()
              for (const t of this.#se.values()) if (e === t.topicHash) return t
              return null
            }
            if (-1 === t.indexOf('(')) {
              const o = []
              for (const [e, n] of this.#se) e.split('(')[0] === t && o.push(n)
              if (e) {
                for (let t = o.length - 1; t >= 0; t--)
                  o[t].inputs.length < e.length && o.splice(t, 1)
                for (let t = o.length - 1; t >= 0; t--) {
                  const n = o[t].inputs
                  for (let i = 0; i < e.length; i++)
                    if (r.V.isTyped(e[i]) && e[i].type !== n[i].baseType) {
                      o.splice(t, 1)
                      break
                    }
                }
              }
              if (0 === o.length) return null
              if (o.length > 1 && n) {
                const e = o.map((t) => JSON.stringify(t.format())).join(', ')
                ;(0, s.MR)(
                  !1,
                  `ambiguous event description (i.e. matches ${e})`,
                  'key',
                  t,
                )
              }
              return o[0]
            }
            const o = this.#se.get(h.Zp.from(t).format())
            return o || null
          }
          getEventName(t) {
            const e = this.#fe(t, null, !1)
            return (0, s.MR)(e, 'no matching event', 'key', t), e.name
          }
          hasEvent(t) {
            return !!this.#fe(t, null, !1)
          }
          getEvent(t, e) {
            return this.#fe(t, e || null, !0)
          }
          forEachEvent(t) {
            const e = Array.from(this.#se.keys())
            e.sort((t, e) => t.localeCompare(e))
            for (let n = 0; n < e.length; n++) {
              const r = e[n]
              t(this.#se.get(r), n)
            }
          }
          getError(t, e) {
            if ((0, u.Lo)(t)) {
              const e = t.toLowerCase()
              if (b[e]) return h.bp.from(b[e].signature)
              for (const t of this.#ae.values()) if (e === t.selector) return t
              return null
            }
            if (-1 === t.indexOf('(')) {
              const e = []
              for (const [n, r] of this.#ae) n.split('(')[0] === t && e.push(r)
              if (0 === e.length)
                return 'Error' === t
                  ? h.bp.from('error Error(string)')
                  : 'Panic' === t
                    ? h.bp.from('error Panic(uint256)')
                    : null
              if (e.length > 1) {
                const n = e.map((t) => JSON.stringify(t.format())).join(', ')
                ;(0, s.MR)(
                  !1,
                  `ambiguous error description (i.e. ${n})`,
                  'name',
                  t,
                )
              }
              return e[0]
            }
            if ('Error(string)' === (t = h.bp.from(t).format()))
              return h.bp.from('error Error(string)')
            if ('Panic(uint256)' === t) return h.bp.from('error Panic(uint256)')
            const n = this.#ae.get(t)
            return n || null
          }
          forEachError(t) {
            const e = Array.from(this.#ae.keys())
            e.sort((t, e) => t.localeCompare(e))
            for (let n = 0; n < e.length; n++) {
              const r = e[n]
              t(this.#ae.get(r), n)
            }
          }
          _decodeParams(t, e) {
            return this.#le.decode(t, e)
          }
          _encodeParams(t, e) {
            return this.#le.encode(t, e)
          }
          encodeDeploy(t) {
            return this._encodeParams(this.deploy.inputs, t || [])
          }
          decodeErrorResult(t, e) {
            if ('string' == typeof t) {
              const e = this.getError(t)
              ;(0, s.MR)(e, 'unknown error', 'fragment', t), (t = e)
            }
            return (
              (0, s.MR)(
                (0, u.ZG)(e, 0, 4) === t.selector,
                `data signature does not match error ${t.name}.`,
                'data',
                e,
              ),
              this._decodeParams(t.inputs, (0, u.ZG)(e, 4))
            )
          }
          encodeErrorResult(t, e) {
            if ('string' == typeof t) {
              const e = this.getError(t)
              ;(0, s.MR)(e, 'unknown error', 'fragment', t), (t = e)
            }
            return (0, u.xW)([
              t.selector,
              this._encodeParams(t.inputs, e || []),
            ])
          }
          decodeFunctionData(t, e) {
            if ('string' == typeof t) {
              const e = this.getFunction(t)
              ;(0, s.MR)(e, 'unknown function', 'fragment', t), (t = e)
            }
            return (
              (0, s.MR)(
                (0, u.ZG)(e, 0, 4) === t.selector,
                `data signature does not match function ${t.name}.`,
                'data',
                e,
              ),
              this._decodeParams(t.inputs, (0, u.ZG)(e, 4))
            )
          }
          encodeFunctionData(t, e) {
            if ('string' == typeof t) {
              const e = this.getFunction(t)
              ;(0, s.MR)(e, 'unknown function', 'fragment', t), (t = e)
            }
            return (0, u.xW)([
              t.selector,
              this._encodeParams(t.inputs, e || []),
            ])
          }
          decodeFunctionResult(t, e) {
            if ('string' == typeof t) {
              const e = this.getFunction(t)
              ;(0, s.MR)(e, 'unknown function', 'fragment', t), (t = e)
            }
            let n = 'invalid length for result data'
            const r = (0, u.Lm)(e)
            if (r.length % 32 == 0)
              try {
                return this.#le.decode(t.outputs, r)
              } catch (t) {
                n = 'could not decode result data'
              }
            ;(0, s.vA)(!1, n, 'BAD_DATA', {
              value: (0, u.c$)(r),
              info: { method: t.name, signature: t.format() },
            })
          }
          makeError(t, e) {
            const n = (0, u.q5)(t, 'data'),
              r = c.y.getBuiltinCallException('call', e, n)
            if (
              r.message.startsWith('execution reverted (unknown custom error)')
            ) {
              const t = (0, u.c$)(n.slice(0, 4)),
                e = this.getError(t)
              if (e)
                try {
                  const t = this.#le.decode(e.inputs, n.slice(4))
                  ;(r.revert = {
                    name: e.name,
                    signature: e.format(),
                    args: t,
                  }),
                    (r.reason = r.revert.signature),
                    (r.message = `execution reverted: ${r.reason}`)
                } catch (t) {
                  r.message =
                    'execution reverted (coult not decode custom error)'
                }
            }
            const o = this.parseTransaction(e)
            return (
              o &&
                (r.invocation = {
                  method: o.name,
                  signature: o.signature,
                  args: o.args,
                }),
              r
            )
          }
          encodeFunctionResult(t, e) {
            if ('string' == typeof t) {
              const e = this.getFunction(t)
              ;(0, s.MR)(e, 'unknown function', 'fragment', t), (t = e)
            }
            return (0, u.c$)(this.#le.encode(t.outputs, e || []))
          }
          encodeFilterTopics(t, e) {
            if ('string' == typeof t) {
              const e = this.getEvent(t)
              ;(0, s.MR)(e, 'unknown event', 'eventFragment', t), (t = e)
            }
            ;(0, s.vA)(
              e.length <= t.inputs.length,
              `too many arguments for ${t.format()}`,
              'UNEXPECTED_ARGUMENT',
              { count: e.length, expectedCount: t.inputs.length },
            )
            const n = []
            t.anonymous || n.push(t.topicHash)
            const r = (t, e) =>
              'string' === t.type
                ? (0, i.id)(e)
                : 'bytes' === t.type
                  ? (0, o.S)((0, u.c$)(e))
                  : ('bool' === t.type && 'boolean' == typeof e
                      ? (e = e ? '0x01' : '0x00')
                      : t.type.match(/^u?int/)
                        ? (e = (0, l.up)(e))
                        : t.type.match(/^bytes/)
                          ? (e = (0, u.X_)(e, 32))
                          : 'address' === t.type &&
                            this.#le.encode(['address'], [e]),
                    (0, u.nx)((0, u.c$)(e), 32))
            for (
              e.forEach((e, o) => {
                const i = t.inputs[o]
                i.indexed
                  ? null == e
                    ? n.push(null)
                    : 'array' === i.baseType || 'tuple' === i.baseType
                      ? (0, s.MR)(
                          !1,
                          'filtering with tuples or arrays not supported',
                          'contract.' + i.name,
                          e,
                        )
                      : Array.isArray(e)
                        ? n.push(e.map((t) => r(i, t)))
                        : n.push(r(i, e))
                  : (0, s.MR)(
                      null == e,
                      'cannot filter non-indexed parameters; must be null',
                      'contract.' + i.name,
                      e,
                    )
              });
              n.length && null === n[n.length - 1];
            )
              n.pop()
            return n
          }
          encodeEventLog(t, e) {
            if ('string' == typeof t) {
              const e = this.getEvent(t)
              ;(0, s.MR)(e, 'unknown event', 'eventFragment', t), (t = e)
            }
            const n = [],
              r = [],
              a = []
            return (
              t.anonymous || n.push(t.topicHash),
              (0, s.MR)(
                e.length === t.inputs.length,
                'event arguments/values mismatch',
                'values',
                e,
              ),
              t.inputs.forEach((t, s) => {
                const u = e[s]
                if (t.indexed)
                  if ('string' === t.type) n.push((0, i.id)(u))
                  else if ('bytes' === t.type) n.push((0, o.S)(u))
                  else {
                    if ('tuple' === t.baseType || 'array' === t.baseType)
                      throw new Error('not implemented')
                    n.push(this.#le.encode([t.type], [u]))
                  }
                else r.push(t), a.push(u)
              }),
              { data: this.#le.encode(r, a), topics: n }
            )
          }
          decodeEventLog(t, e, n) {
            if ('string' == typeof t) {
              const e = this.getEvent(t)
              ;(0, s.MR)(e, 'unknown event', 'eventFragment', t), (t = e)
            }
            if (null != n && !t.anonymous) {
              const e = t.topicHash
              ;(0, s.MR)(
                (0, u.Lo)(n[0], 32) && n[0].toLowerCase() === e,
                'fragment/topic mismatch',
                'topics[0]',
                n[0],
              ),
                (n = n.slice(1))
            }
            const r = [],
              o = [],
              i = []
            t.inputs.forEach((t, e) => {
              t.indexed
                ? 'string' === t.type ||
                  'bytes' === t.type ||
                  'tuple' === t.baseType ||
                  'array' === t.baseType
                  ? (r.push(h.aX.from({ type: 'bytes32', name: t.name })),
                    i.push(!0))
                  : (r.push(t), i.push(!1))
                : (o.push(t), i.push(!1))
            })
            const a = null != n ? this.#le.decode(r, (0, u.xW)(n)) : null,
              l = this.#le.decode(o, e, !0),
              c = [],
              d = []
            let p = 0,
              g = 0
            return (
              t.inputs.forEach((t, e) => {
                let n = null
                if (t.indexed)
                  if (null == a) n = new m(null)
                  else if (i[e]) n = new m(a[g++])
                  else
                    try {
                      n = a[g++]
                    } catch (t) {
                      n = t
                    }
                else
                  try {
                    n = l[p++]
                  } catch (t) {
                    n = t
                  }
                c.push(n), d.push(t.name || null)
              }),
              f.Q7.fromItems(c, d)
            )
          }
          parseTransaction(t) {
            const e = (0, u.q5)(t.data, 'tx.data'),
              n = (0, l.Ab)(null != t.value ? t.value : 0, 'tx.value'),
              r = this.getFunction((0, u.c$)(e.slice(0, 4)))
            if (!r) return null
            const o = this.#le.decode(r.inputs, e.slice(4))
            return new p(r, r.selector, o, n)
          }
          parseCallResult(t) {
            throw new Error('@TODO')
          }
          parseLog(t) {
            const e = this.getEvent(t.topics[0])
            return !e || e.anonymous
              ? null
              : new d(e, e.topicHash, this.decodeEventLog(e, t.data, t.topics))
          }
          parseError(t) {
            const e = (0, u.c$)(t),
              n = this.getError((0, u.ZG)(e, 0, 4))
            if (!n) return null
            const r = this.#le.decode(n.inputs, (0, u.ZG)(e, 4))
            return new g(n, n.selector, r)
          }
          static from(t) {
            return t instanceof v
              ? t
              : 'string' == typeof t
                ? new v(JSON.parse(t))
                : 'function' == typeof t.formatJson
                  ? new v(t.formatJson())
                  : 'function' == typeof t.format
                    ? new v(t.format('json'))
                    : new v(t)
          }
        }
        var w = n(443),
          A = n(9),
          x = n(712)
        class E extends A.tG {
          interface
          fragment
          args
          constructor(t, e, n) {
            super(t, t.provider)
            const r = e.decodeEventLog(n, t.data, t.topics)
            ;(0, a.n)(this, { args: r, fragment: n, interface: e })
          }
          get eventName() {
            return this.fragment.name
          }
          get eventSignature() {
            return this.fragment.format()
          }
        }
        class k extends A.tG {
          error
          constructor(t, e) {
            super(t, t.provider), (0, a.n)(this, { error: e })
          }
        }
        class R extends A.z5 {
          #he
          constructor(t, e, n) {
            super(n, e), (this.#he = t)
          }
          get logs() {
            return super.logs.map((t) => {
              const e = t.topics.length ? this.#he.getEvent(t.topics[0]) : null
              if (e)
                try {
                  return new E(t, this.#he, e)
                } catch (e) {
                  return new k(t, e)
                }
              return t
            })
          }
        }
        class N extends A.uI {
          #he
          constructor(t, e, n) {
            super(n, e), (this.#he = t)
          }
          async wait(t, e) {
            const n = await super.wait(t, e)
            return null == n ? null : new R(this.#he, this.provider, n)
          }
        }
        class P extends x.z {
          log
          constructor(t, e, n, r) {
            super(t, e, n), (0, a.n)(this, { log: r })
          }
          async getBlock() {
            return await this.log.getBlock()
          }
          async getTransaction() {
            return await this.log.getTransaction()
          }
          async getTransactionReceipt() {
            return await this.log.getTransactionReceipt()
          }
        }
        class C extends P {
          constructor(t, e, n, r, o) {
            super(t, e, n, new E(o, t.interface, r))
            const i = t.interface.decodeEventLog(
              r,
              this.log.data,
              this.log.topics,
            )
            ;(0, a.n)(this, { args: i, fragment: r })
          }
          get eventName() {
            return this.fragment.name
          }
          get eventSignature() {
            return this.fragment.format()
          }
        }
        const O = BigInt(0)
        function S(t) {
          return t && 'function' == typeof t.call
        }
        function I(t) {
          return t && 'function' == typeof t.estimateGas
        }
        function B(t) {
          return t && 'function' == typeof t.resolveName
        }
        function T(t) {
          return t && 'function' == typeof t.sendTransaction
        }
        function _(t) {
          if (null != t) {
            if (B(t)) return t
            if (t.provider) return t.provider
          }
        }
        class M {
          #Pt
          fragment
          constructor(t, e, n) {
            if (((0, a.n)(this, { fragment: e }), e.inputs.length < n.length))
              throw new Error('too many arguments')
            const r = D(t.runner, 'resolveName'),
              o = B(r) ? r : null
            this.#Pt = (async function () {
              const r = await Promise.all(
                e.inputs.map((t, e) =>
                  null == n[e]
                    ? null
                    : t.walkAsync(n[e], (t, e) =>
                        'address' === t
                          ? Array.isArray(e)
                            ? Promise.all(e.map((t) => (0, w.tG)(t, o)))
                            : (0, w.tG)(e, o)
                          : e,
                      ),
                ),
              )
              return t.interface.encodeFilterTopics(e, r)
            })()
          }
          getTopicFilter() {
            return this.#Pt
          }
        }
        function D(t, e) {
          return null == t
            ? null
            : 'function' == typeof t[e]
              ? t
              : t.provider && 'function' == typeof t.provider[e]
                ? t.provider
                : null
        }
        function L(t) {
          return null == t ? null : t.provider || null
        }
        async function F(t, e) {
          const n = r.V.dereference(t, 'overrides')
          ;(0, s.MR)(
            'object' == typeof n,
            'invalid overrides parameter',
            'overrides',
            t,
          )
          const o = (0, A.VS)(n)
          return (
            (0, s.MR)(
              null == o.to || (e || []).indexOf('to') >= 0,
              'cannot override to',
              'overrides.to',
              o.to,
            ),
            (0, s.MR)(
              null == o.data || (e || []).indexOf('data') >= 0,
              'cannot override data',
              'overrides.data',
              o.data,
            ),
            o.from && (o.from = o.from),
            o
          )
        }
        function U(t) {
          const e = async function (e) {
              const n = await F(e, ['data'])
              ;(n.to = await t.getAddress()),
                n.from && (n.from = await (0, w.tG)(n.from, _(t.runner)))
              const r = t.interface,
                o = (0, l.Ab)(n.value || O, 'overrides.value') === O,
                i = '0x' === (n.data || '0x')
              !r.fallback ||
                r.fallback.payable ||
                !r.receive ||
                i ||
                o ||
                (0, s.MR)(
                  !1,
                  'cannot send data to receive or send value to non-payable fallback',
                  'overrides',
                  e,
                ),
                (0, s.MR)(
                  r.fallback || i,
                  'cannot send data to receive-only contract',
                  'overrides.data',
                  n.data,
                )
              const a = r.receive || (r.fallback && r.fallback.payable)
              return (
                (0, s.MR)(
                  a || o,
                  'cannot send value to non-payable fallback',
                  'overrides.value',
                  n.value,
                ),
                (0, s.MR)(
                  r.fallback || i,
                  'cannot send data to receive-only contract',
                  'overrides.data',
                  n.data,
                ),
                n
              )
            },
            n = async function (n) {
              const r = t.runner
              ;(0, s.vA)(
                T(r),
                'contract runner does not support sending transactions',
                'UNSUPPORTED_OPERATION',
                { operation: 'sendTransaction' },
              )
              const o = await r.sendTransaction(await e(n)),
                i = L(t.runner)
              return new N(t.interface, i, o)
            },
            r = async (t) => await n(t)
          return (
            (0, a.n)(r, {
              _contract: t,
              estimateGas: async function (n) {
                const r = D(t.runner, 'estimateGas')
                return (
                  (0, s.vA)(
                    I(r),
                    'contract runner does not support gas estimation',
                    'UNSUPPORTED_OPERATION',
                    { operation: 'estimateGas' },
                  ),
                  await r.estimateGas(await e(n))
                )
              },
              populateTransaction: e,
              send: n,
              staticCall: async function (n) {
                const r = D(t.runner, 'call')
                ;(0, s.vA)(
                  S(r),
                  'contract runner does not support calling',
                  'UNSUPPORTED_OPERATION',
                  { operation: 'call' },
                )
                const o = await e(n)
                try {
                  return await r.call(o)
                } catch (e) {
                  if ((0, s.E)(e) && e.data)
                    throw t.interface.makeError(e.data, o)
                  throw e
                }
              },
            }),
            r
          )
        }
        function j(t, e) {
          const n = function (...n) {
              const r = t.interface.getFunction(e, n)
              return (
                (0, s.vA)(r, 'no matching fragment', 'UNSUPPORTED_OPERATION', {
                  operation: 'fragment',
                  info: { key: e, args: n },
                }),
                r
              )
            },
            o = async function (...e) {
              const o = n(...e)
              let i = {}
              if (
                (o.inputs.length + 1 === e.length &&
                  ((i = await F(e.pop())),
                  i.from && (i.from = await (0, w.tG)(i.from, _(t.runner)))),
                o.inputs.length !== e.length)
              )
                throw new Error(
                  "internal error: fragment inputs doesn't match arguments; should not happen",
                )
              const s = await (async function (t, e, n) {
                const o = D(t, 'resolveName'),
                  i = B(o) ? o : null
                return await Promise.all(
                  e.map((t, e) =>
                    t.walkAsync(
                      n[e],
                      (t, e) => (
                        (e = r.V.dereference(e, t)),
                        'address' === t ? (0, w.tG)(e, i) : e
                      ),
                    ),
                  ),
                )
              })(t.runner, o.inputs, e)
              return Object.assign(
                {},
                i,
                await (0, a.k)({
                  to: t.getAddress(),
                  data: t.interface.encodeFunctionData(o, s),
                }),
              )
            },
            i = async function (...t) {
              const e = await l(...t)
              return 1 === e.length ? e[0] : e
            },
            u = async function (...e) {
              const n = t.runner
              ;(0, s.vA)(
                T(n),
                'contract runner does not support sending transactions',
                'UNSUPPORTED_OPERATION',
                { operation: 'sendTransaction' },
              )
              const r = await n.sendTransaction(await o(...e)),
                i = L(t.runner)
              return new N(t.interface, i, r)
            },
            l = async function (...e) {
              const r = D(t.runner, 'call')
              ;(0, s.vA)(
                S(r),
                'contract runner does not support calling',
                'UNSUPPORTED_OPERATION',
                { operation: 'call' },
              )
              const i = await o(...e)
              let a = '0x'
              try {
                a = await r.call(i)
              } catch (e) {
                if ((0, s.E)(e) && e.data)
                  throw t.interface.makeError(e.data, i)
                throw e
              }
              const u = n(...e)
              return t.interface.decodeFunctionResult(u, a)
            },
            c = async (...t) =>
              n(...t).constant ? await i(...t) : await u(...t)
          return (
            (0, a.n)(c, {
              name: t.interface.getFunctionName(e),
              _contract: t,
              _key: e,
              getFragment: n,
              estimateGas: async function (...e) {
                const n = D(t.runner, 'estimateGas')
                return (
                  (0, s.vA)(
                    I(n),
                    'contract runner does not support gas estimation',
                    'UNSUPPORTED_OPERATION',
                    { operation: 'estimateGas' },
                  ),
                  await n.estimateGas(await o(...e))
                )
              },
              populateTransaction: o,
              send: u,
              staticCall: i,
              staticCallResult: l,
            }),
            Object.defineProperty(c, 'fragment', {
              configurable: !1,
              enumerable: !0,
              get: () => {
                const n = t.interface.getFunction(e)
                return (
                  (0, s.vA)(
                    n,
                    'no matching fragment',
                    'UNSUPPORTED_OPERATION',
                    { operation: 'fragment', info: { key: e } },
                  ),
                  n
                )
              },
            }),
            c
          )
        }
        const G = Symbol.for('_ethersInternal_contract'),
          H = new WeakMap()
        function z(t) {
          return H.get(t[G])
        }
        async function Q(t, e) {
          let n,
            r = null
          if (Array.isArray(e)) {
            const r = function (e) {
              if ((0, u.Lo)(e, 32)) return e
              const n = t.interface.getEvent(e)
              return (0, s.MR)(n, 'unknown fragment', 'name', e), n.topicHash
            }
            n = e.map((t) =>
              null == t ? null : Array.isArray(t) ? t.map(r) : r(t),
            )
          } else
            '*' === e
              ? (n = [null])
              : 'string' == typeof e
                ? (0, u.Lo)(e, 32)
                  ? (n = [e])
                  : ((r = t.interface.getEvent(e)),
                    (0, s.MR)(r, 'unknown fragment', 'event', e),
                    (n = [r.topicHash]))
                : (o = e) &&
                    'object' == typeof o &&
                    'getTopicFilter' in o &&
                    'function' == typeof o.getTopicFilter &&
                    o.fragment
                  ? (n = await e.getTopicFilter())
                  : 'fragment' in e
                    ? ((r = e.fragment), (n = [r.topicHash]))
                    : (0, s.MR)(!1, 'unknown event name', 'event', e)
          var o
          n = n.map((t) => {
            if (null == t) return null
            if (Array.isArray(t)) {
              const e = Array.from(
                new Set(t.map((t) => t.toLowerCase())).values(),
              )
              return 1 === e.length ? e[0] : (e.sort(), e)
            }
            return t.toLowerCase()
          })
          return {
            fragment: r,
            tag: n
              .map((t) =>
                null == t ? 'null' : Array.isArray(t) ? t.join('|') : t,
              )
              .join('&'),
            topics: n,
          }
        }
        async function V(t, e) {
          const { subs: n } = z(t)
          return n.get((await Q(t, e)).tag) || null
        }
        async function W(t, e, n) {
          const r = L(t.runner)
          ;(0, s.vA)(
            r,
            'contract runner does not support subscribing',
            'UNSUPPORTED_OPERATION',
            { operation: e },
          )
          const { fragment: o, tag: i, topics: a } = await Q(t, n),
            { addr: u, subs: l } = z(t)
          let c = l.get(i)
          if (!c) {
            const e = { address: u || t, topics: a },
              s = (e) => {
                let r = o
                if (null == r)
                  try {
                    r = t.interface.getEvent(e.topics[0])
                  } catch (t) {}
                if (r) {
                  const i = r,
                    a = o ? t.interface.decodeEventLog(o, e.data, e.topics) : []
                  K(t, n, a, (r) => new C(t, r, n, i, e))
                } else K(t, n, [], (r) => new P(t, r, n, e))
              }
            let f = []
            ;(c = {
              tag: i,
              listeners: [],
              start: () => {
                f.length || f.push(r.on(e, s))
              },
              stop: async () => {
                if (0 == f.length) return
                let t = f
                ;(f = []), await Promise.all(t), r.off(e, s)
              },
            }),
              l.set(i, c)
          }
          return c
        }
        let J = Promise.resolve()
        async function K(t, e, n, r) {
          try {
            await J
          } catch (t) {}
          const o = (async function (t, e, n, r) {
            await J
            const o = await V(t, e)
            if (!o) return !1
            const i = o.listeners.length
            return (
              (o.listeners = o.listeners.filter(({ listener: e, once: o }) => {
                const i = Array.from(n)
                r && i.push(r(o ? null : e))
                try {
                  e.call(t, ...i)
                } catch (t) {}
                return !o
              })),
              0 === o.listeners.length && (o.stop(), z(t).subs.delete(o.tag)),
              i > 0
            )
          })(t, e, n, r)
          return (J = o), await o
        }
        const q = ['then']
        class Z {
          target
          interface
          runner
          filters;
          [G]
          fallback
          constructor(t, e, n, r) {
            ;(0, s.MR)(
              'string' == typeof t || (0, w.$C)(t),
              'invalid value for Contract target',
              'target',
              t,
            ),
              null == n && (n = null)
            const o = v.from(e)
            let i
            ;(0, a.n)(this, { target: t, runner: n, interface: o }),
              Object.defineProperty(this, G, { value: {} })
            let l = null,
              c = null
            if (r) {
              const t = L(n)
              c = new N(this.interface, t, r)
            }
            let f = new Map()
            if ('string' == typeof t)
              if ((0, u.Lo)(t)) (l = t), (i = Promise.resolve(t))
              else {
                const e = D(n, 'resolveName')
                if (!B(e))
                  throw (0, s.xz)(
                    'contract runner does not support name resolution',
                    'UNSUPPORTED_OPERATION',
                    { operation: 'resolveName' },
                  )
                i = e.resolveName(t).then((e) => {
                  if (null == e)
                    throw (0, s.xz)(
                      'an ENS name used for a contract target must be correctly configured',
                      'UNCONFIGURED_NAME',
                      { value: t },
                    )
                  return (z(this).addr = e), e
                })
              }
            else
              i = t.getAddress().then((t) => {
                if (null == t) throw new Error('TODO')
                return (z(this).addr = t), t
              })
            var h, d
            ;(h = this),
              (d = { addrPromise: i, addr: l, deployTx: c, subs: f }),
              H.set(h[G], d)
            const p = new Proxy(
              {},
              {
                get: (t, e, n) => {
                  if ('symbol' == typeof e || q.indexOf(e) >= 0)
                    return Reflect.get(t, e, n)
                  try {
                    return this.getEvent(e)
                  } catch (t) {
                    if (
                      !(0, s.bJ)(t, 'INVALID_ARGUMENT') ||
                      'key' !== t.argument
                    )
                      throw t
                  }
                },
                has: (t, e) =>
                  q.indexOf(e) >= 0
                    ? Reflect.has(t, e)
                    : Reflect.has(t, e) || this.interface.hasEvent(String(e)),
              },
            )
            return (
              (0, a.n)(this, { filters: p }),
              (0, a.n)(this, {
                fallback: o.receive || o.fallback ? U(this) : null,
              }),
              new Proxy(this, {
                get: (t, e, n) => {
                  if ('symbol' == typeof e || e in t || q.indexOf(e) >= 0)
                    return Reflect.get(t, e, n)
                  try {
                    return t.getFunction(e)
                  } catch (t) {
                    if (
                      !(0, s.bJ)(t, 'INVALID_ARGUMENT') ||
                      'key' !== t.argument
                    )
                      throw t
                  }
                },
                has: (t, e) =>
                  'symbol' == typeof e || e in t || q.indexOf(e) >= 0
                    ? Reflect.has(t, e)
                    : t.interface.hasFunction(e),
              })
            )
          }
          connect(t) {
            return new Z(this.target, this.interface, t)
          }
          attach(t) {
            return new Z(t, this.interface, this.runner)
          }
          async getAddress() {
            return await z(this).addrPromise
          }
          async getDeployedCode() {
            const t = L(this.runner)
            ;(0, s.vA)(
              t,
              'runner does not support .provider',
              'UNSUPPORTED_OPERATION',
              { operation: 'getDeployedCode' },
            )
            const e = await t.getCode(await this.getAddress())
            return '0x' === e ? null : e
          }
          async waitForDeployment() {
            const t = this.deploymentTransaction()
            if (t) return await t.wait(), this
            if (null != (await this.getDeployedCode())) return this
            const e = L(this.runner)
            return (
              (0, s.vA)(
                null != e,
                'contract runner does not support .provider',
                'UNSUPPORTED_OPERATION',
                { operation: 'waitForDeployment' },
              ),
              new Promise((t, n) => {
                const r = async () => {
                  try {
                    if (null != (await this.getDeployedCode())) return t(this)
                    e.once('block', r)
                  } catch (t) {
                    n(t)
                  }
                }
                r()
              })
            )
          }
          deploymentTransaction() {
            return z(this).deployTx
          }
          getFunction(t) {
            'string' != typeof t && (t = t.format())
            return j(this, t)
          }
          getEvent(t) {
            return (
              'string' != typeof t && (t = t.format()),
              (function (t, e) {
                const n = function (...n) {
                    const r = t.interface.getEvent(e, n)
                    return (
                      (0, s.vA)(
                        r,
                        'no matching fragment',
                        'UNSUPPORTED_OPERATION',
                        { operation: 'fragment', info: { key: e, args: n } },
                      ),
                      r
                    )
                  },
                  r = function (...e) {
                    return new M(t, n(...e), e)
                  }
                return (
                  (0, a.n)(r, {
                    name: t.interface.getEventName(e),
                    _contract: t,
                    _key: e,
                    getFragment: n,
                  }),
                  Object.defineProperty(r, 'fragment', {
                    configurable: !1,
                    enumerable: !0,
                    get: () => {
                      const n = t.interface.getEvent(e)
                      return (
                        (0, s.vA)(
                          n,
                          'no matching fragment',
                          'UNSUPPORTED_OPERATION',
                          { operation: 'fragment', info: { key: e } },
                        ),
                        n
                      )
                    },
                  }),
                  r
                )
              })(this, t)
            )
          }
          async queryTransaction(t) {
            throw new Error('@TODO')
          }
          async queryFilter(t, e, n) {
            null == e && (e = 0), null == n && (n = 'latest')
            const { addr: r, addrPromise: o } = z(this),
              i = r || (await o),
              { fragment: a, topics: u } = await Q(this, t),
              l = { address: i, topics: u, fromBlock: e, toBlock: n },
              c = L(this.runner)
            return (
              (0, s.vA)(
                c,
                'contract runner does not have a provider',
                'UNSUPPORTED_OPERATION',
                { operation: 'queryFilter' },
              ),
              (await c.getLogs(l)).map((t) => {
                let e = a
                if (null == e)
                  try {
                    e = this.interface.getEvent(t.topics[0])
                  } catch (t) {}
                if (e)
                  try {
                    return new E(t, this.interface, e)
                  } catch (e) {
                    return new k(t, e)
                  }
                return new A.tG(t, c)
              })
            )
          }
          async on(t, e) {
            const n = await W(this, 'on', t)
            return n.listeners.push({ listener: e, once: !1 }), n.start(), this
          }
          async once(t, e) {
            const n = await W(this, 'once', t)
            return n.listeners.push({ listener: e, once: !0 }), n.start(), this
          }
          async emit(t, ...e) {
            return await K(this, t, e, null)
          }
          async listenerCount(t) {
            if (t) {
              const e = await V(this, t)
              return e ? e.listeners.length : 0
            }
            const { subs: e } = z(this)
            let n = 0
            for (const { listeners: t } of e.values()) n += t.length
            return n
          }
          async listeners(t) {
            if (t) {
              const e = await V(this, t)
              return e ? e.listeners.map(({ listener: t }) => t) : []
            }
            const { subs: e } = z(this)
            let n = []
            for (const { listeners: t } of e.values())
              n = n.concat(t.map(({ listener: t }) => t))
            return n
          }
          async off(t, e) {
            const n = await V(this, t)
            if (!n) return this
            if (e) {
              const t = n.listeners.map(({ listener: t }) => t).indexOf(e)
              t >= 0 && n.listeners.splice(t, 1)
            }
            return (
              (null != e && 0 !== n.listeners.length) ||
                (n.stop(), z(this).subs.delete(n.tag)),
              this
            )
          }
          async removeAllListeners(t) {
            if (t) {
              const e = await V(this, t)
              if (!e) return this
              e.stop(), z(this).subs.delete(e.tag)
            } else {
              const { subs: t } = z(this)
              for (const { tag: e, stop: n } of t.values()) n(), t.delete(e)
            }
            return this
          }
          async addListener(t, e) {
            return await this.on(t, e)
          }
          async removeListener(t, e) {
            return await this.off(t, e)
          }
          static buildClass(t) {
            return class extends Z {
              constructor(e, n = null) {
                super(e, t, n)
              }
            }
          }
          static from(t, e, n) {
            null == n && (n = null)
            return new this(t, e, n)
          }
        }
        class Y extends (function () {
          return Z
        })() {}
      },
      789: (t, e, n) => {
        'use strict'
        function r(t) {
          if (!Number.isSafeInteger(t) || t < 0)
            throw new Error(`Wrong positive integer: ${t}`)
        }
        function o(t, ...e) {
          if (!(t instanceof Uint8Array)) throw new Error('Expected Uint8Array')
          if (e.length > 0 && !e.includes(t.length))
            throw new Error(
              `Expected Uint8Array of length ${e}, not of length=${t.length}`,
            )
        }
        function i(t) {
          if ('function' != typeof t || 'function' != typeof t.create)
            throw new Error('Hash should be wrapped by utils.wrapConstructor')
          r(t.outputLen), r(t.blockLen)
        }
        function a(t, e = !0) {
          if (t.destroyed) throw new Error('Hash instance has been destroyed')
          if (e && t.finished)
            throw new Error('Hash#digest() has already been called')
        }
        function s(t, e) {
          o(t)
          const n = e.outputLen
          if (t.length < n)
            throw new Error(
              `digestInto() expects output buffer of length at least ${n}`,
            )
        }
        n.d(e, {
          CG: () => s,
          ai: () => r,
          ee: () => o,
          t2: () => a,
          tW: () => i,
        })
      },
      910: (t, e, n) => {
        'use strict'
        n.d(e, {
          vA: () => l,
          MR: () => c,
          dd: () => f,
          SP: () => d,
          gk: () => p,
          E: () => s,
          bJ: () => a,
          xz: () => u,
        })
        const r = '6.15.0'
        var o = n(696)
        function i(t, e) {
          if (null == t) return 'null'
          if ((null == e && (e = new Set()), 'object' == typeof t)) {
            if (e.has(t)) return '[Circular]'
            e.add(t)
          }
          if (Array.isArray(t))
            return '[ ' + t.map((t) => i(t, e)).join(', ') + ' ]'
          if (t instanceof Uint8Array) {
            const e = '0123456789abcdef'
            let n = '0x'
            for (let r = 0; r < t.length; r++)
              (n += e[t[r] >> 4]), (n += e[15 & t[r]])
            return n
          }
          if ('object' == typeof t && 'function' == typeof t.toJSON)
            return i(t.toJSON(), e)
          switch (typeof t) {
            case 'boolean':
            case 'number':
            case 'symbol':
              return t.toString()
            case 'bigint':
              return BigInt(t).toString()
            case 'string':
              return JSON.stringify(t)
            case 'object': {
              const n = Object.keys(t)
              return (
                n.sort(),
                '{ ' +
                  n.map((n) => `${i(n, e)}: ${i(t[n], e)}`).join(', ') +
                  ' }'
              )
            }
          }
          return '[ COULD NOT SERIALIZE ]'
        }
        function a(t, e) {
          return t && t.code === e
        }
        function s(t) {
          return a(t, 'CALL_EXCEPTION')
        }
        function u(t, e, n) {
          let a,
            s = t
          {
            const o = []
            if (n) {
              if ('message' in n || 'code' in n || 'name' in n)
                throw new Error(
                  `value will overwrite populated values: ${i(n)}`,
                )
              for (const t in n) {
                if ('shortMessage' === t) continue
                const e = n[t]
                o.push(t + '=' + i(e))
              }
            }
            o.push(`code=${e}`),
              o.push(`version=${r}`),
              o.length && (t += ' (' + o.join(', ') + ')')
          }
          switch (e) {
            case 'INVALID_ARGUMENT':
              a = new TypeError(t)
              break
            case 'NUMERIC_FAULT':
            case 'BUFFER_OVERRUN':
              a = new RangeError(t)
              break
            default:
              a = new Error(t)
          }
          return (
            (0, o.n)(a, { code: e }),
            n && Object.assign(a, n),
            null == a.shortMessage && (0, o.n)(a, { shortMessage: s }),
            a
          )
        }
        function l(t, e, n, r) {
          if (!t) throw u(e, n, r)
        }
        function c(t, e, n, r) {
          l(t, e, 'INVALID_ARGUMENT', { argument: n, value: r })
        }
        function f(t, e, n) {
          null == n && (n = ''),
            n && (n = ': ' + n),
            l(t >= e, 'missing argument' + n, 'MISSING_ARGUMENT', {
              count: t,
              expectedCount: e,
            }),
            l(t <= e, 'too many arguments' + n, 'UNEXPECTED_ARGUMENT', {
              count: t,
              expectedCount: e,
            })
        }
        const h = ['NFD', 'NFC', 'NFKD', 'NFKC'].reduce((t, e) => {
          try {
            if ('test' !== 'test'.normalize(e)) throw new Error('bad')
            if ('NFD' === e) {
              const t = String.fromCharCode(233).normalize('NFD')
              if (t !== String.fromCharCode(101, 769)) throw new Error('broken')
            }
            t.push(e)
          } catch (t) {}
          return t
        }, [])
        function d(t) {
          l(
            h.indexOf(t) >= 0,
            'platform missing String.prototype.normalize',
            'UNSUPPORTED_OPERATION',
            { operation: 'String.prototype.normalize', info: { form: t } },
          )
        }
        function p(t, e, n) {
          if ((null == n && (n = ''), t !== e)) {
            let t = n,
              e = 'new'
            n && ((t += '.'), (e += ' ' + n)),
              l(
                !1,
                `private constructor; use ${t}from* methods`,
                'UNSUPPORTED_OPERATION',
                { operation: e },
              )
          }
        }
      },
      926: (t, e, n) => {
        'use strict'
        n.d(e, {
          Ab: () => f,
          Dg: () => p,
          JJ: () => l,
          Ro: () => m,
          ST: () => u,
          WZ: () => g,
          c4: () => b,
          dK: () => c,
          nD: () => v,
          up: () => y,
        })
        var r = n(537),
          o = n(910)
        const i = BigInt(0),
          a = BigInt(1),
          s = 9007199254740991
        function u(t, e) {
          const n = h(t, 'value'),
            r = BigInt(g(e, 'width'))
          if (
            ((0, o.vA)(n >> r === i, 'overflow', 'NUMERIC_FAULT', {
              operation: 'fromTwos',
              fault: 'overflow',
              value: t,
            }),
            n >> (r - a))
          ) {
            return -((~n & ((a << r) - a)) + a)
          }
          return n
        }
        function l(t, e) {
          let n = f(t, 'value')
          const r = BigInt(g(e, 'width')),
            s = a << (r - a)
          if (n < i) {
            ;(n = -n),
              (0, o.vA)(n <= s, 'too low', 'NUMERIC_FAULT', {
                operation: 'toTwos',
                fault: 'overflow',
                value: t,
              })
            return (~n & ((a << r) - a)) + a
          }
          return (
            (0, o.vA)(n < s, 'too high', 'NUMERIC_FAULT', {
              operation: 'toTwos',
              fault: 'overflow',
              value: t,
            }),
            n
          )
        }
        function c(t, e) {
          const n = h(t, 'value'),
            r = BigInt(g(e, 'bits'))
          return n & ((a << r) - a)
        }
        function f(t, e) {
          switch (typeof t) {
            case 'bigint':
              return t
            case 'number':
              return (
                (0, o.MR)(Number.isInteger(t), 'underflow', e || 'value', t),
                (0, o.MR)(t >= -s && t <= s, 'overflow', e || 'value', t),
                BigInt(t)
              )
            case 'string':
              try {
                if ('' === t) throw new Error('empty string')
                return '-' === t[0] && '-' !== t[1]
                  ? -BigInt(t.substring(1))
                  : BigInt(t)
              } catch (n) {
                ;(0, o.MR)(
                  !1,
                  `invalid BigNumberish string: ${n.message}`,
                  e || 'value',
                  t,
                )
              }
          }
          ;(0, o.MR)(!1, 'invalid BigNumberish value', e || 'value', t)
        }
        function h(t, e) {
          const n = f(t, e)
          return (
            (0, o.vA)(
              n >= i,
              'unsigned value cannot be negative',
              'NUMERIC_FAULT',
              { fault: 'overflow', operation: 'getUint', value: t },
            ),
            n
          )
        }
        const d = '0123456789abcdef'
        function p(t) {
          if (t instanceof Uint8Array) {
            let e = '0x0'
            for (const n of t) (e += d[n >> 4]), (e += d[15 & n])
            return BigInt(e)
          }
          return f(t)
        }
        function g(t, e) {
          switch (typeof t) {
            case 'bigint':
              return (
                (0, o.MR)(t >= -s && t <= s, 'overflow', e || 'value', t),
                Number(t)
              )
            case 'number':
              return (
                (0, o.MR)(Number.isInteger(t), 'underflow', e || 'value', t),
                (0, o.MR)(t >= -s && t <= s, 'overflow', e || 'value', t),
                t
              )
            case 'string':
              try {
                if ('' === t) throw new Error('empty string')
                return g(BigInt(t), e)
              } catch (n) {
                ;(0, o.MR)(
                  !1,
                  `invalid numeric string: ${n.message}`,
                  e || 'value',
                  t,
                )
              }
          }
          ;(0, o.MR)(!1, 'invalid numeric value', e || 'value', t)
        }
        function m(t) {
          return g(p(t))
        }
        function y(t, e) {
          let n = h(t, 'value').toString(16)
          if (null == e) n.length % 2 && (n = '0' + n)
          else {
            const r = g(e, 'width')
            for (
              (0, o.vA)(
                2 * r >= n.length,
                `value exceeds width (${r} bytes)`,
                'NUMERIC_FAULT',
                { operation: 'toBeHex', fault: 'overflow', value: t },
              );
              n.length < 2 * r;
            )
              n = '0' + n
          }
          return '0x' + n
        }
        function b(t) {
          const e = h(t, 'value')
          if (e === i) return new Uint8Array([])
          let n = e.toString(16)
          n.length % 2 && (n = '0' + n)
          const r = new Uint8Array(n.length / 2)
          for (let t = 0; t < r.length; t++) {
            const e = 2 * t
            r[t] = parseInt(n.substring(e, e + 2), 16)
          }
          return r
        }
        function v(t) {
          let e = (0, r.c$)((0, r.f)(t) ? t : b(t)).substring(2)
          for (; e.startsWith('0'); ) e = e.substring(1)
          return '' === e && (e = '0'), '0x' + e
        }
      },
      935: function (t, e, n) {
        var r
        ;(t = n.nmd(t)),
          function () {
            var o,
              i = 'Expected a function',
              a = '__lodash_hash_undefined__',
              s = '__lodash_placeholder__',
              u = 16,
              l = 32,
              c = 64,
              f = 128,
              h = 256,
              d = 1 / 0,
              p = 9007199254740991,
              g = NaN,
              m = 4294967295,
              y = [
                ['ary', f],
                ['bind', 1],
                ['bindKey', 2],
                ['curry', 8],
                ['curryRight', u],
                ['flip', 512],
                ['partial', l],
                ['partialRight', c],
                ['rearg', h],
              ],
              b = '[object Arguments]',
              v = '[object Array]',
              w = '[object Boolean]',
              A = '[object Date]',
              x = '[object Error]',
              E = '[object Function]',
              k = '[object GeneratorFunction]',
              R = '[object Map]',
              N = '[object Number]',
              P = '[object Object]',
              C = '[object Promise]',
              O = '[object RegExp]',
              S = '[object Set]',
              I = '[object String]',
              B = '[object Symbol]',
              T = '[object WeakMap]',
              _ = '[object ArrayBuffer]',
              M = '[object DataView]',
              D = '[object Float32Array]',
              L = '[object Float64Array]',
              F = '[object Int8Array]',
              U = '[object Int16Array]',
              j = '[object Int32Array]',
              G = '[object Uint8Array]',
              H = '[object Uint8ClampedArray]',
              z = '[object Uint16Array]',
              Q = '[object Uint32Array]',
              V = /\b__p \+= '';/g,
              W = /\b(__p \+=) '' \+/g,
              J = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
              K = /&(?:amp|lt|gt|quot|#39);/g,
              q = /[&<>"']/g,
              Z = RegExp(K.source),
              Y = RegExp(q.source),
              $ = /<%-([\s\S]+?)%>/g,
              X = /<%([\s\S]+?)%>/g,
              tt = /<%=([\s\S]+?)%>/g,
              et = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
              nt = /^\w*$/,
              rt =
                /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
              ot = /[\\^$.*+?()[\]{}|]/g,
              it = RegExp(ot.source),
              at = /^\s+/,
              st = /\s/,
              ut = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
              lt = /\{\n\/\* \[wrapped with (.+)\] \*/,
              ct = /,? & /,
              ft = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
              ht = /[()=,{}\[\]\/\s]/,
              dt = /\\(\\)?/g,
              pt = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
              gt = /\w*$/,
              mt = /^[-+]0x[0-9a-f]+$/i,
              yt = /^0b[01]+$/i,
              bt = /^\[object .+?Constructor\]$/,
              vt = /^0o[0-7]+$/i,
              wt = /^(?:0|[1-9]\d*)$/,
              At = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
              xt = /($^)/,
              Et = /['\n\r\u2028\u2029\\]/g,
              kt = '\\ud800-\\udfff',
              Rt = '\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff',
              Nt = '\\u2700-\\u27bf',
              Pt = 'a-z\\xdf-\\xf6\\xf8-\\xff',
              Ct = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
              Ot = '\\ufe0e\\ufe0f',
              St =
                '\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
              It = "['’]",
              Bt = '[' + kt + ']',
              Tt = '[' + St + ']',
              _t = '[' + Rt + ']',
              Mt = '\\d+',
              Dt = '[' + Nt + ']',
              Lt = '[' + Pt + ']',
              Ft = '[^' + kt + St + Mt + Nt + Pt + Ct + ']',
              Ut = '\\ud83c[\\udffb-\\udfff]',
              jt = '[^' + kt + ']',
              Gt = '(?:\\ud83c[\\udde6-\\uddff]){2}',
              Ht = '[\\ud800-\\udbff][\\udc00-\\udfff]',
              zt = '[' + Ct + ']',
              Qt = '\\u200d',
              Vt = '(?:' + Lt + '|' + Ft + ')',
              Wt = '(?:' + zt + '|' + Ft + ')',
              Jt = "(?:['’](?:d|ll|m|re|s|t|ve))?",
              Kt = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
              qt = '(?:' + _t + '|' + Ut + ')' + '?',
              Zt = '[' + Ot + ']?',
              Yt =
                Zt +
                qt +
                ('(?:' +
                  Qt +
                  '(?:' +
                  [jt, Gt, Ht].join('|') +
                  ')' +
                  Zt +
                  qt +
                  ')*'),
              $t = '(?:' + [Dt, Gt, Ht].join('|') + ')' + Yt,
              Xt = '(?:' + [jt + _t + '?', _t, Gt, Ht, Bt].join('|') + ')',
              te = RegExp(It, 'g'),
              ee = RegExp(_t, 'g'),
              ne = RegExp(Ut + '(?=' + Ut + ')|' + Xt + Yt, 'g'),
              re = RegExp(
                [
                  zt +
                    '?' +
                    Lt +
                    '+' +
                    Jt +
                    '(?=' +
                    [Tt, zt, '$'].join('|') +
                    ')',
                  Wt + '+' + Kt + '(?=' + [Tt, zt + Vt, '$'].join('|') + ')',
                  zt + '?' + Vt + '+' + Jt,
                  zt + '+' + Kt,
                  '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
                  '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
                  Mt,
                  $t,
                ].join('|'),
                'g',
              ),
              oe = RegExp('[' + Qt + kt + Rt + Ot + ']'),
              ie =
                /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
              ae = [
                'Array',
                'Buffer',
                'DataView',
                'Date',
                'Error',
                'Float32Array',
                'Float64Array',
                'Function',
                'Int8Array',
                'Int16Array',
                'Int32Array',
                'Map',
                'Math',
                'Object',
                'Promise',
                'RegExp',
                'Set',
                'String',
                'Symbol',
                'TypeError',
                'Uint8Array',
                'Uint8ClampedArray',
                'Uint16Array',
                'Uint32Array',
                'WeakMap',
                '_',
                'clearTimeout',
                'isFinite',
                'parseInt',
                'setTimeout',
              ],
              se = -1,
              ue = {}
            ;(ue[D] =
              ue[L] =
              ue[F] =
              ue[U] =
              ue[j] =
              ue[G] =
              ue[H] =
              ue[z] =
              ue[Q] =
                !0),
              (ue[b] =
                ue[v] =
                ue[_] =
                ue[w] =
                ue[M] =
                ue[A] =
                ue[x] =
                ue[E] =
                ue[R] =
                ue[N] =
                ue[P] =
                ue[O] =
                ue[S] =
                ue[I] =
                ue[T] =
                  !1)
            var le = {}
            ;(le[b] =
              le[v] =
              le[_] =
              le[M] =
              le[w] =
              le[A] =
              le[D] =
              le[L] =
              le[F] =
              le[U] =
              le[j] =
              le[R] =
              le[N] =
              le[P] =
              le[O] =
              le[S] =
              le[I] =
              le[B] =
              le[G] =
              le[H] =
              le[z] =
              le[Q] =
                !0),
              (le[x] = le[E] = le[T] = !1)
            var ce = {
                '\\': '\\',
                "'": "'",
                '\n': 'n',
                '\r': 'r',
                '\u2028': 'u2028',
                '\u2029': 'u2029',
              },
              fe = parseFloat,
              he = parseInt,
              de =
                'object' == typeof n.g && n.g && n.g.Object === Object && n.g,
              pe =
                'object' == typeof self &&
                self &&
                self.Object === Object &&
                self,
              ge = de || pe || Function('return this')(),
              me = e && !e.nodeType && e,
              ye = me && t && !t.nodeType && t,
              be = ye && ye.exports === me,
              ve = be && de.process,
              we = (function () {
                try {
                  var t = ye && ye.require && ye.require('util').types
                  return t || (ve && ve.binding && ve.binding('util'))
                } catch (t) {}
              })(),
              Ae = we && we.isArrayBuffer,
              xe = we && we.isDate,
              Ee = we && we.isMap,
              ke = we && we.isRegExp,
              Re = we && we.isSet,
              Ne = we && we.isTypedArray
            function Pe(t, e, n) {
              switch (n.length) {
                case 0:
                  return t.call(e)
                case 1:
                  return t.call(e, n[0])
                case 2:
                  return t.call(e, n[0], n[1])
                case 3:
                  return t.call(e, n[0], n[1], n[2])
              }
              return t.apply(e, n)
            }
            function Ce(t, e, n, r) {
              for (var o = -1, i = null == t ? 0 : t.length; ++o < i; ) {
                var a = t[o]
                e(r, a, n(a), t)
              }
              return r
            }
            function Oe(t, e) {
              for (
                var n = -1, r = null == t ? 0 : t.length;
                ++n < r && !1 !== e(t[n], n, t);
              );
              return t
            }
            function Se(t, e) {
              for (
                var n = null == t ? 0 : t.length;
                n-- && !1 !== e(t[n], n, t);
              );
              return t
            }
            function Ie(t, e) {
              for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
                if (!e(t[n], n, t)) return !1
              return !0
            }
            function Be(t, e) {
              for (
                var n = -1, r = null == t ? 0 : t.length, o = 0, i = [];
                ++n < r;
              ) {
                var a = t[n]
                e(a, n, t) && (i[o++] = a)
              }
              return i
            }
            function Te(t, e) {
              return !!(null == t ? 0 : t.length) && ze(t, e, 0) > -1
            }
            function _e(t, e, n) {
              for (var r = -1, o = null == t ? 0 : t.length; ++r < o; )
                if (n(e, t[r])) return !0
              return !1
            }
            function Me(t, e) {
              for (
                var n = -1, r = null == t ? 0 : t.length, o = Array(r);
                ++n < r;
              )
                o[n] = e(t[n], n, t)
              return o
            }
            function De(t, e) {
              for (var n = -1, r = e.length, o = t.length; ++n < r; )
                t[o + n] = e[n]
              return t
            }
            function Le(t, e, n, r) {
              var o = -1,
                i = null == t ? 0 : t.length
              for (r && i && (n = t[++o]); ++o < i; ) n = e(n, t[o], o, t)
              return n
            }
            function Fe(t, e, n, r) {
              var o = null == t ? 0 : t.length
              for (r && o && (n = t[--o]); o--; ) n = e(n, t[o], o, t)
              return n
            }
            function Ue(t, e) {
              for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
                if (e(t[n], n, t)) return !0
              return !1
            }
            var je = Je('length')
            function Ge(t, e, n) {
              var r
              return (
                n(t, function (t, n, o) {
                  if (e(t, n, o)) return (r = n), !1
                }),
                r
              )
            }
            function He(t, e, n, r) {
              for (var o = t.length, i = n + (r ? 1 : -1); r ? i-- : ++i < o; )
                if (e(t[i], i, t)) return i
              return -1
            }
            function ze(t, e, n) {
              return e == e
                ? (function (t, e, n) {
                    var r = n - 1,
                      o = t.length
                    for (; ++r < o; ) if (t[r] === e) return r
                    return -1
                  })(t, e, n)
                : He(t, Ve, n)
            }
            function Qe(t, e, n, r) {
              for (var o = n - 1, i = t.length; ++o < i; )
                if (r(t[o], e)) return o
              return -1
            }
            function Ve(t) {
              return t != t
            }
            function We(t, e) {
              var n = null == t ? 0 : t.length
              return n ? Ze(t, e) / n : g
            }
            function Je(t) {
              return function (e) {
                return null == e ? o : e[t]
              }
            }
            function Ke(t) {
              return function (e) {
                return null == t ? o : t[e]
              }
            }
            function qe(t, e, n, r, o) {
              return (
                o(t, function (t, o, i) {
                  n = r ? ((r = !1), t) : e(n, t, o, i)
                }),
                n
              )
            }
            function Ze(t, e) {
              for (var n, r = -1, i = t.length; ++r < i; ) {
                var a = e(t[r])
                a !== o && (n = n === o ? a : n + a)
              }
              return n
            }
            function Ye(t, e) {
              for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n)
              return r
            }
            function $e(t) {
              return t ? t.slice(0, mn(t) + 1).replace(at, '') : t
            }
            function Xe(t) {
              return function (e) {
                return t(e)
              }
            }
            function tn(t, e) {
              return Me(e, function (e) {
                return t[e]
              })
            }
            function en(t, e) {
              return t.has(e)
            }
            function nn(t, e) {
              for (var n = -1, r = t.length; ++n < r && ze(e, t[n], 0) > -1; );
              return n
            }
            function rn(t, e) {
              for (var n = t.length; n-- && ze(e, t[n], 0) > -1; );
              return n
            }
            var on = Ke({
                À: 'A',
                Á: 'A',
                Â: 'A',
                Ã: 'A',
                Ä: 'A',
                Å: 'A',
                à: 'a',
                á: 'a',
                â: 'a',
                ã: 'a',
                ä: 'a',
                å: 'a',
                Ç: 'C',
                ç: 'c',
                Ð: 'D',
                ð: 'd',
                È: 'E',
                É: 'E',
                Ê: 'E',
                Ë: 'E',
                è: 'e',
                é: 'e',
                ê: 'e',
                ë: 'e',
                Ì: 'I',
                Í: 'I',
                Î: 'I',
                Ï: 'I',
                ì: 'i',
                í: 'i',
                î: 'i',
                ï: 'i',
                Ñ: 'N',
                ñ: 'n',
                Ò: 'O',
                Ó: 'O',
                Ô: 'O',
                Õ: 'O',
                Ö: 'O',
                Ø: 'O',
                ò: 'o',
                ó: 'o',
                ô: 'o',
                õ: 'o',
                ö: 'o',
                ø: 'o',
                Ù: 'U',
                Ú: 'U',
                Û: 'U',
                Ü: 'U',
                ù: 'u',
                ú: 'u',
                û: 'u',
                ü: 'u',
                Ý: 'Y',
                ý: 'y',
                ÿ: 'y',
                Æ: 'Ae',
                æ: 'ae',
                Þ: 'Th',
                þ: 'th',
                ß: 'ss',
                Ā: 'A',
                Ă: 'A',
                Ą: 'A',
                ā: 'a',
                ă: 'a',
                ą: 'a',
                Ć: 'C',
                Ĉ: 'C',
                Ċ: 'C',
                Č: 'C',
                ć: 'c',
                ĉ: 'c',
                ċ: 'c',
                č: 'c',
                Ď: 'D',
                Đ: 'D',
                ď: 'd',
                đ: 'd',
                Ē: 'E',
                Ĕ: 'E',
                Ė: 'E',
                Ę: 'E',
                Ě: 'E',
                ē: 'e',
                ĕ: 'e',
                ė: 'e',
                ę: 'e',
                ě: 'e',
                Ĝ: 'G',
                Ğ: 'G',
                Ġ: 'G',
                Ģ: 'G',
                ĝ: 'g',
                ğ: 'g',
                ġ: 'g',
                ģ: 'g',
                Ĥ: 'H',
                Ħ: 'H',
                ĥ: 'h',
                ħ: 'h',
                Ĩ: 'I',
                Ī: 'I',
                Ĭ: 'I',
                Į: 'I',
                İ: 'I',
                ĩ: 'i',
                ī: 'i',
                ĭ: 'i',
                į: 'i',
                ı: 'i',
                Ĵ: 'J',
                ĵ: 'j',
                Ķ: 'K',
                ķ: 'k',
                ĸ: 'k',
                Ĺ: 'L',
                Ļ: 'L',
                Ľ: 'L',
                Ŀ: 'L',
                Ł: 'L',
                ĺ: 'l',
                ļ: 'l',
                ľ: 'l',
                ŀ: 'l',
                ł: 'l',
                Ń: 'N',
                Ņ: 'N',
                Ň: 'N',
                Ŋ: 'N',
                ń: 'n',
                ņ: 'n',
                ň: 'n',
                ŋ: 'n',
                Ō: 'O',
                Ŏ: 'O',
                Ő: 'O',
                ō: 'o',
                ŏ: 'o',
                ő: 'o',
                Ŕ: 'R',
                Ŗ: 'R',
                Ř: 'R',
                ŕ: 'r',
                ŗ: 'r',
                ř: 'r',
                Ś: 'S',
                Ŝ: 'S',
                Ş: 'S',
                Š: 'S',
                ś: 's',
                ŝ: 's',
                ş: 's',
                š: 's',
                Ţ: 'T',
                Ť: 'T',
                Ŧ: 'T',
                ţ: 't',
                ť: 't',
                ŧ: 't',
                Ũ: 'U',
                Ū: 'U',
                Ŭ: 'U',
                Ů: 'U',
                Ű: 'U',
                Ų: 'U',
                ũ: 'u',
                ū: 'u',
                ŭ: 'u',
                ů: 'u',
                ű: 'u',
                ų: 'u',
                Ŵ: 'W',
                ŵ: 'w',
                Ŷ: 'Y',
                ŷ: 'y',
                Ÿ: 'Y',
                Ź: 'Z',
                Ż: 'Z',
                Ž: 'Z',
                ź: 'z',
                ż: 'z',
                ž: 'z',
                Ĳ: 'IJ',
                ĳ: 'ij',
                Œ: 'Oe',
                œ: 'oe',
                ŉ: "'n",
                ſ: 's',
              }),
              an = Ke({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#39;',
              })
            function sn(t) {
              return '\\' + ce[t]
            }
            function un(t) {
              return oe.test(t)
            }
            function ln(t) {
              var e = -1,
                n = Array(t.size)
              return (
                t.forEach(function (t, r) {
                  n[++e] = [r, t]
                }),
                n
              )
            }
            function cn(t, e) {
              return function (n) {
                return t(e(n))
              }
            }
            function fn(t, e) {
              for (var n = -1, r = t.length, o = 0, i = []; ++n < r; ) {
                var a = t[n]
                ;(a !== e && a !== s) || ((t[n] = s), (i[o++] = n))
              }
              return i
            }
            function hn(t) {
              var e = -1,
                n = Array(t.size)
              return (
                t.forEach(function (t) {
                  n[++e] = t
                }),
                n
              )
            }
            function dn(t) {
              var e = -1,
                n = Array(t.size)
              return (
                t.forEach(function (t) {
                  n[++e] = [t, t]
                }),
                n
              )
            }
            function pn(t) {
              return un(t)
                ? (function (t) {
                    var e = (ne.lastIndex = 0)
                    for (; ne.test(t); ) ++e
                    return e
                  })(t)
                : je(t)
            }
            function gn(t) {
              return un(t)
                ? (function (t) {
                    return t.match(ne) || []
                  })(t)
                : (function (t) {
                    return t.split('')
                  })(t)
            }
            function mn(t) {
              for (var e = t.length; e-- && st.test(t.charAt(e)); );
              return e
            }
            var yn = Ke({
              '&amp;': '&',
              '&lt;': '<',
              '&gt;': '>',
              '&quot;': '"',
              '&#39;': "'",
            })
            var bn = (function t(e) {
              var n,
                r = (e =
                  null == e ? ge : bn.defaults(ge.Object(), e, bn.pick(ge, ae)))
                  .Array,
                st = e.Date,
                kt = e.Error,
                Rt = e.Function,
                Nt = e.Math,
                Pt = e.Object,
                Ct = e.RegExp,
                Ot = e.String,
                St = e.TypeError,
                It = r.prototype,
                Bt = Rt.prototype,
                Tt = Pt.prototype,
                _t = e['__core-js_shared__'],
                Mt = Bt.toString,
                Dt = Tt.hasOwnProperty,
                Lt = 0,
                Ft = (n = /[^.]+$/.exec(
                  (_t && _t.keys && _t.keys.IE_PROTO) || '',
                ))
                  ? 'Symbol(src)_1.' + n
                  : '',
                Ut = Tt.toString,
                jt = Mt.call(Pt),
                Gt = ge._,
                Ht = Ct(
                  '^' +
                    Mt.call(Dt)
                      .replace(ot, '\\$&')
                      .replace(
                        /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                        '$1.*?',
                      ) +
                    '$',
                ),
                zt = be ? e.Buffer : o,
                Qt = e.Symbol,
                Vt = e.Uint8Array,
                Wt = zt ? zt.allocUnsafe : o,
                Jt = cn(Pt.getPrototypeOf, Pt),
                Kt = Pt.create,
                qt = Tt.propertyIsEnumerable,
                Zt = It.splice,
                Yt = Qt ? Qt.isConcatSpreadable : o,
                $t = Qt ? Qt.iterator : o,
                Xt = Qt ? Qt.toStringTag : o,
                ne = (function () {
                  try {
                    var t = di(Pt, 'defineProperty')
                    return t({}, '', {}), t
                  } catch (t) {}
                })(),
                oe = e.clearTimeout !== ge.clearTimeout && e.clearTimeout,
                ce = st && st.now !== ge.Date.now && st.now,
                de = e.setTimeout !== ge.setTimeout && e.setTimeout,
                pe = Nt.ceil,
                me = Nt.floor,
                ye = Pt.getOwnPropertySymbols,
                ve = zt ? zt.isBuffer : o,
                we = e.isFinite,
                je = It.join,
                Ke = cn(Pt.keys, Pt),
                vn = Nt.max,
                wn = Nt.min,
                An = st.now,
                xn = e.parseInt,
                En = Nt.random,
                kn = It.reverse,
                Rn = di(e, 'DataView'),
                Nn = di(e, 'Map'),
                Pn = di(e, 'Promise'),
                Cn = di(e, 'Set'),
                On = di(e, 'WeakMap'),
                Sn = di(Pt, 'create'),
                In = On && new On(),
                Bn = {},
                Tn = Ui(Rn),
                _n = Ui(Nn),
                Mn = Ui(Pn),
                Dn = Ui(Cn),
                Ln = Ui(On),
                Fn = Qt ? Qt.prototype : o,
                Un = Fn ? Fn.valueOf : o,
                jn = Fn ? Fn.toString : o
              function Gn(t) {
                if (ns(t) && !Va(t) && !(t instanceof Vn)) {
                  if (t instanceof Qn) return t
                  if (Dt.call(t, '__wrapped__')) return ji(t)
                }
                return new Qn(t)
              }
              var Hn = (function () {
                function t() {}
                return function (e) {
                  if (!es(e)) return {}
                  if (Kt) return Kt(e)
                  t.prototype = e
                  var n = new t()
                  return (t.prototype = o), n
                }
              })()
              function zn() {}
              function Qn(t, e) {
                ;(this.__wrapped__ = t),
                  (this.__actions__ = []),
                  (this.__chain__ = !!e),
                  (this.__index__ = 0),
                  (this.__values__ = o)
              }
              function Vn(t) {
                ;(this.__wrapped__ = t),
                  (this.__actions__ = []),
                  (this.__dir__ = 1),
                  (this.__filtered__ = !1),
                  (this.__iteratees__ = []),
                  (this.__takeCount__ = m),
                  (this.__views__ = [])
              }
              function Wn(t) {
                var e = -1,
                  n = null == t ? 0 : t.length
                for (this.clear(); ++e < n; ) {
                  var r = t[e]
                  this.set(r[0], r[1])
                }
              }
              function Jn(t) {
                var e = -1,
                  n = null == t ? 0 : t.length
                for (this.clear(); ++e < n; ) {
                  var r = t[e]
                  this.set(r[0], r[1])
                }
              }
              function Kn(t) {
                var e = -1,
                  n = null == t ? 0 : t.length
                for (this.clear(); ++e < n; ) {
                  var r = t[e]
                  this.set(r[0], r[1])
                }
              }
              function qn(t) {
                var e = -1,
                  n = null == t ? 0 : t.length
                for (this.__data__ = new Kn(); ++e < n; ) this.add(t[e])
              }
              function Zn(t) {
                var e = (this.__data__ = new Jn(t))
                this.size = e.size
              }
              function Yn(t, e) {
                var n = Va(t),
                  r = !n && Qa(t),
                  o = !n && !r && qa(t),
                  i = !n && !r && !o && cs(t),
                  a = n || r || o || i,
                  s = a ? Ye(t.length, Ot) : [],
                  u = s.length
                for (var l in t)
                  (!e && !Dt.call(t, l)) ||
                    (a &&
                      ('length' == l ||
                        (o && ('offset' == l || 'parent' == l)) ||
                        (i &&
                          ('buffer' == l ||
                            'byteLength' == l ||
                            'byteOffset' == l)) ||
                        wi(l, u))) ||
                    s.push(l)
                return s
              }
              function $n(t) {
                var e = t.length
                return e ? t[qr(0, e - 1)] : o
              }
              function Xn(t, e) {
                return Di(Io(t), ur(e, 0, t.length))
              }
              function tr(t) {
                return Di(Io(t))
              }
              function er(t, e, n) {
                ;((n !== o && !Ga(t[e], n)) || (n === o && !(e in t))) &&
                  ar(t, e, n)
              }
              function nr(t, e, n) {
                var r = t[e]
                ;(Dt.call(t, e) && Ga(r, n) && (n !== o || e in t)) ||
                  ar(t, e, n)
              }
              function rr(t, e) {
                for (var n = t.length; n--; ) if (Ga(t[n][0], e)) return n
                return -1
              }
              function or(t, e, n, r) {
                return (
                  dr(t, function (t, o, i) {
                    e(r, t, n(t), i)
                  }),
                  r
                )
              }
              function ir(t, e) {
                return t && Bo(e, Bs(e), t)
              }
              function ar(t, e, n) {
                '__proto__' == e && ne
                  ? ne(t, e, {
                      configurable: !0,
                      enumerable: !0,
                      value: n,
                      writable: !0,
                    })
                  : (t[e] = n)
              }
              function sr(t, e) {
                for (
                  var n = -1, i = e.length, a = r(i), s = null == t;
                  ++n < i;
                )
                  a[n] = s ? o : Ps(t, e[n])
                return a
              }
              function ur(t, e, n) {
                return (
                  t == t &&
                    (n !== o && (t = t <= n ? t : n),
                    e !== o && (t = t >= e ? t : e)),
                  t
                )
              }
              function lr(t, e, n, r, i, a) {
                var s,
                  u = 1 & e,
                  l = 2 & e,
                  c = 4 & e
                if ((n && (s = i ? n(t, r, i, a) : n(t)), s !== o)) return s
                if (!es(t)) return t
                var f = Va(t)
                if (f) {
                  if (
                    ((s = (function (t) {
                      var e = t.length,
                        n = new t.constructor(e)
                      e &&
                        'string' == typeof t[0] &&
                        Dt.call(t, 'index') &&
                        ((n.index = t.index), (n.input = t.input))
                      return n
                    })(t)),
                    !u)
                  )
                    return Io(t, s)
                } else {
                  var h = mi(t),
                    d = h == E || h == k
                  if (qa(t)) return Ro(t, u)
                  if (h == P || h == b || (d && !i)) {
                    if (((s = l || d ? {} : bi(t)), !u))
                      return l
                        ? (function (t, e) {
                            return Bo(t, gi(t), e)
                          })(
                            t,
                            (function (t, e) {
                              return t && Bo(e, Ts(e), t)
                            })(s, t),
                          )
                        : (function (t, e) {
                            return Bo(t, pi(t), e)
                          })(t, ir(s, t))
                  } else {
                    if (!le[h]) return i ? t : {}
                    s = (function (t, e, n) {
                      var r = t.constructor
                      switch (e) {
                        case _:
                          return No(t)
                        case w:
                        case A:
                          return new r(+t)
                        case M:
                          return (function (t, e) {
                            var n = e ? No(t.buffer) : t.buffer
                            return new t.constructor(
                              n,
                              t.byteOffset,
                              t.byteLength,
                            )
                          })(t, n)
                        case D:
                        case L:
                        case F:
                        case U:
                        case j:
                        case G:
                        case H:
                        case z:
                        case Q:
                          return Po(t, n)
                        case R:
                          return new r()
                        case N:
                        case I:
                          return new r(t)
                        case O:
                          return (function (t) {
                            var e = new t.constructor(t.source, gt.exec(t))
                            return (e.lastIndex = t.lastIndex), e
                          })(t)
                        case S:
                          return new r()
                        case B:
                          return (o = t), Un ? Pt(Un.call(o)) : {}
                      }
                      var o
                    })(t, h, u)
                  }
                }
                a || (a = new Zn())
                var p = a.get(t)
                if (p) return p
                a.set(t, s),
                  ss(t)
                    ? t.forEach(function (r) {
                        s.add(lr(r, e, n, r, t, a))
                      })
                    : rs(t) &&
                      t.forEach(function (r, o) {
                        s.set(o, lr(r, e, n, o, t, a))
                      })
                var g = f ? o : (c ? (l ? ai : ii) : l ? Ts : Bs)(t)
                return (
                  Oe(g || t, function (r, o) {
                    g && (r = t[(o = r)]), nr(s, o, lr(r, e, n, o, t, a))
                  }),
                  s
                )
              }
              function cr(t, e, n) {
                var r = n.length
                if (null == t) return !r
                for (t = Pt(t); r--; ) {
                  var i = n[r],
                    a = e[i],
                    s = t[i]
                  if ((s === o && !(i in t)) || !a(s)) return !1
                }
                return !0
              }
              function fr(t, e, n) {
                if ('function' != typeof t) throw new St(i)
                return Bi(function () {
                  t.apply(o, n)
                }, e)
              }
              function hr(t, e, n, r) {
                var o = -1,
                  i = Te,
                  a = !0,
                  s = t.length,
                  u = [],
                  l = e.length
                if (!s) return u
                n && (e = Me(e, Xe(n))),
                  r
                    ? ((i = _e), (a = !1))
                    : e.length >= 200 && ((i = en), (a = !1), (e = new qn(e)))
                t: for (; ++o < s; ) {
                  var c = t[o],
                    f = null == n ? c : n(c)
                  if (((c = r || 0 !== c ? c : 0), a && f == f)) {
                    for (var h = l; h--; ) if (e[h] === f) continue t
                    u.push(c)
                  } else i(e, f, r) || u.push(c)
                }
                return u
              }
              ;(Gn.templateSettings = {
                escape: $,
                evaluate: X,
                interpolate: tt,
                variable: '',
                imports: { _: Gn },
              }),
                (Gn.prototype = zn.prototype),
                (Gn.prototype.constructor = Gn),
                (Qn.prototype = Hn(zn.prototype)),
                (Qn.prototype.constructor = Qn),
                (Vn.prototype = Hn(zn.prototype)),
                (Vn.prototype.constructor = Vn),
                (Wn.prototype.clear = function () {
                  ;(this.__data__ = Sn ? Sn(null) : {}), (this.size = 0)
                }),
                (Wn.prototype.delete = function (t) {
                  var e = this.has(t) && delete this.__data__[t]
                  return (this.size -= e ? 1 : 0), e
                }),
                (Wn.prototype.get = function (t) {
                  var e = this.__data__
                  if (Sn) {
                    var n = e[t]
                    return n === a ? o : n
                  }
                  return Dt.call(e, t) ? e[t] : o
                }),
                (Wn.prototype.has = function (t) {
                  var e = this.__data__
                  return Sn ? e[t] !== o : Dt.call(e, t)
                }),
                (Wn.prototype.set = function (t, e) {
                  var n = this.__data__
                  return (
                    (this.size += this.has(t) ? 0 : 1),
                    (n[t] = Sn && e === o ? a : e),
                    this
                  )
                }),
                (Jn.prototype.clear = function () {
                  ;(this.__data__ = []), (this.size = 0)
                }),
                (Jn.prototype.delete = function (t) {
                  var e = this.__data__,
                    n = rr(e, t)
                  return (
                    !(n < 0) &&
                    (n == e.length - 1 ? e.pop() : Zt.call(e, n, 1),
                    --this.size,
                    !0)
                  )
                }),
                (Jn.prototype.get = function (t) {
                  var e = this.__data__,
                    n = rr(e, t)
                  return n < 0 ? o : e[n][1]
                }),
                (Jn.prototype.has = function (t) {
                  return rr(this.__data__, t) > -1
                }),
                (Jn.prototype.set = function (t, e) {
                  var n = this.__data__,
                    r = rr(n, t)
                  return (
                    r < 0 ? (++this.size, n.push([t, e])) : (n[r][1] = e), this
                  )
                }),
                (Kn.prototype.clear = function () {
                  ;(this.size = 0),
                    (this.__data__ = {
                      hash: new Wn(),
                      map: new (Nn || Jn)(),
                      string: new Wn(),
                    })
                }),
                (Kn.prototype.delete = function (t) {
                  var e = fi(this, t).delete(t)
                  return (this.size -= e ? 1 : 0), e
                }),
                (Kn.prototype.get = function (t) {
                  return fi(this, t).get(t)
                }),
                (Kn.prototype.has = function (t) {
                  return fi(this, t).has(t)
                }),
                (Kn.prototype.set = function (t, e) {
                  var n = fi(this, t),
                    r = n.size
                  return n.set(t, e), (this.size += n.size == r ? 0 : 1), this
                }),
                (qn.prototype.add = qn.prototype.push =
                  function (t) {
                    return this.__data__.set(t, a), this
                  }),
                (qn.prototype.has = function (t) {
                  return this.__data__.has(t)
                }),
                (Zn.prototype.clear = function () {
                  ;(this.__data__ = new Jn()), (this.size = 0)
                }),
                (Zn.prototype.delete = function (t) {
                  var e = this.__data__,
                    n = e.delete(t)
                  return (this.size = e.size), n
                }),
                (Zn.prototype.get = function (t) {
                  return this.__data__.get(t)
                }),
                (Zn.prototype.has = function (t) {
                  return this.__data__.has(t)
                }),
                (Zn.prototype.set = function (t, e) {
                  var n = this.__data__
                  if (n instanceof Jn) {
                    var r = n.__data__
                    if (!Nn || r.length < 199)
                      return r.push([t, e]), (this.size = ++n.size), this
                    n = this.__data__ = new Kn(r)
                  }
                  return n.set(t, e), (this.size = n.size), this
                })
              var dr = Mo(Ar),
                pr = Mo(xr, !0)
              function gr(t, e) {
                var n = !0
                return (
                  dr(t, function (t, r, o) {
                    return (n = !!e(t, r, o))
                  }),
                  n
                )
              }
              function mr(t, e, n) {
                for (var r = -1, i = t.length; ++r < i; ) {
                  var a = t[r],
                    s = e(a)
                  if (null != s && (u === o ? s == s && !ls(s) : n(s, u)))
                    var u = s,
                      l = a
                }
                return l
              }
              function yr(t, e) {
                var n = []
                return (
                  dr(t, function (t, r, o) {
                    e(t, r, o) && n.push(t)
                  }),
                  n
                )
              }
              function br(t, e, n, r, o) {
                var i = -1,
                  a = t.length
                for (n || (n = vi), o || (o = []); ++i < a; ) {
                  var s = t[i]
                  e > 0 && n(s)
                    ? e > 1
                      ? br(s, e - 1, n, r, o)
                      : De(o, s)
                    : r || (o[o.length] = s)
                }
                return o
              }
              var vr = Do(),
                wr = Do(!0)
              function Ar(t, e) {
                return t && vr(t, e, Bs)
              }
              function xr(t, e) {
                return t && wr(t, e, Bs)
              }
              function Er(t, e) {
                return Be(e, function (e) {
                  return $a(t[e])
                })
              }
              function kr(t, e) {
                for (var n = 0, r = (e = Ao(e, t)).length; null != t && n < r; )
                  t = t[Fi(e[n++])]
                return n && n == r ? t : o
              }
              function Rr(t, e, n) {
                var r = e(t)
                return Va(t) ? r : De(r, n(t))
              }
              function Nr(t) {
                return null == t
                  ? t === o
                    ? '[object Undefined]'
                    : '[object Null]'
                  : Xt && Xt in Pt(t)
                    ? (function (t) {
                        var e = Dt.call(t, Xt),
                          n = t[Xt]
                        try {
                          t[Xt] = o
                          var r = !0
                        } catch (t) {}
                        var i = Ut.call(t)
                        r && (e ? (t[Xt] = n) : delete t[Xt])
                        return i
                      })(t)
                    : (function (t) {
                        return Ut.call(t)
                      })(t)
              }
              function Pr(t, e) {
                return t > e
              }
              function Cr(t, e) {
                return null != t && Dt.call(t, e)
              }
              function Or(t, e) {
                return null != t && e in Pt(t)
              }
              function Sr(t, e, n) {
                for (
                  var i = n ? _e : Te,
                    a = t[0].length,
                    s = t.length,
                    u = s,
                    l = r(s),
                    c = 1 / 0,
                    f = [];
                  u--;
                ) {
                  var h = t[u]
                  u && e && (h = Me(h, Xe(e))),
                    (c = wn(h.length, c)),
                    (l[u] =
                      !n && (e || (a >= 120 && h.length >= 120))
                        ? new qn(u && h)
                        : o)
                }
                h = t[0]
                var d = -1,
                  p = l[0]
                t: for (; ++d < a && f.length < c; ) {
                  var g = h[d],
                    m = e ? e(g) : g
                  if (
                    ((g = n || 0 !== g ? g : 0), !(p ? en(p, m) : i(f, m, n)))
                  ) {
                    for (u = s; --u; ) {
                      var y = l[u]
                      if (!(y ? en(y, m) : i(t[u], m, n))) continue t
                    }
                    p && p.push(m), f.push(g)
                  }
                }
                return f
              }
              function Ir(t, e, n) {
                var r = null == (t = Oi(t, (e = Ao(e, t)))) ? t : t[Fi(Yi(e))]
                return null == r ? o : Pe(r, t, n)
              }
              function Br(t) {
                return ns(t) && Nr(t) == b
              }
              function Tr(t, e, n, r, i) {
                return (
                  t === e ||
                  (null == t || null == e || (!ns(t) && !ns(e))
                    ? t != t && e != e
                    : (function (t, e, n, r, i, a) {
                        var s = Va(t),
                          u = Va(e),
                          l = s ? v : mi(t),
                          c = u ? v : mi(e),
                          f = (l = l == b ? P : l) == P,
                          h = (c = c == b ? P : c) == P,
                          d = l == c
                        if (d && qa(t)) {
                          if (!qa(e)) return !1
                          ;(s = !0), (f = !1)
                        }
                        if (d && !f)
                          return (
                            a || (a = new Zn()),
                            s || cs(t)
                              ? ri(t, e, n, r, i, a)
                              : (function (t, e, n, r, o, i, a) {
                                  switch (n) {
                                    case M:
                                      if (
                                        t.byteLength != e.byteLength ||
                                        t.byteOffset != e.byteOffset
                                      )
                                        return !1
                                      ;(t = t.buffer), (e = e.buffer)
                                    case _:
                                      return !(
                                        t.byteLength != e.byteLength ||
                                        !i(new Vt(t), new Vt(e))
                                      )
                                    case w:
                                    case A:
                                    case N:
                                      return Ga(+t, +e)
                                    case x:
                                      return (
                                        t.name == e.name &&
                                        t.message == e.message
                                      )
                                    case O:
                                    case I:
                                      return t == e + ''
                                    case R:
                                      var s = ln
                                    case S:
                                      var u = 1 & r
                                      if (
                                        (s || (s = hn), t.size != e.size && !u)
                                      )
                                        return !1
                                      var l = a.get(t)
                                      if (l) return l == e
                                      ;(r |= 2), a.set(t, e)
                                      var c = ri(s(t), s(e), r, o, i, a)
                                      return a.delete(t), c
                                    case B:
                                      if (Un) return Un.call(t) == Un.call(e)
                                  }
                                  return !1
                                })(t, e, l, n, r, i, a)
                          )
                        if (!(1 & n)) {
                          var p = f && Dt.call(t, '__wrapped__'),
                            g = h && Dt.call(e, '__wrapped__')
                          if (p || g) {
                            var m = p ? t.value() : t,
                              y = g ? e.value() : e
                            return a || (a = new Zn()), i(m, y, n, r, a)
                          }
                        }
                        if (!d) return !1
                        return (
                          a || (a = new Zn()),
                          (function (t, e, n, r, i, a) {
                            var s = 1 & n,
                              u = ii(t),
                              l = u.length,
                              c = ii(e),
                              f = c.length
                            if (l != f && !s) return !1
                            var h = l
                            for (; h--; ) {
                              var d = u[h]
                              if (!(s ? d in e : Dt.call(e, d))) return !1
                            }
                            var p = a.get(t),
                              g = a.get(e)
                            if (p && g) return p == e && g == t
                            var m = !0
                            a.set(t, e), a.set(e, t)
                            var y = s
                            for (; ++h < l; ) {
                              var b = t[(d = u[h])],
                                v = e[d]
                              if (r)
                                var w = s
                                  ? r(v, b, d, e, t, a)
                                  : r(b, v, d, t, e, a)
                              if (
                                !(w === o ? b === v || i(b, v, n, r, a) : w)
                              ) {
                                m = !1
                                break
                              }
                              y || (y = 'constructor' == d)
                            }
                            if (m && !y) {
                              var A = t.constructor,
                                x = e.constructor
                              A == x ||
                                !('constructor' in t) ||
                                !('constructor' in e) ||
                                ('function' == typeof A &&
                                  A instanceof A &&
                                  'function' == typeof x &&
                                  x instanceof x) ||
                                (m = !1)
                            }
                            return a.delete(t), a.delete(e), m
                          })(t, e, n, r, i, a)
                        )
                      })(t, e, n, r, Tr, i))
                )
              }
              function _r(t, e, n, r) {
                var i = n.length,
                  a = i,
                  s = !r
                if (null == t) return !a
                for (t = Pt(t); i--; ) {
                  var u = n[i]
                  if (s && u[2] ? u[1] !== t[u[0]] : !(u[0] in t)) return !1
                }
                for (; ++i < a; ) {
                  var l = (u = n[i])[0],
                    c = t[l],
                    f = u[1]
                  if (s && u[2]) {
                    if (c === o && !(l in t)) return !1
                  } else {
                    var h = new Zn()
                    if (r) var d = r(c, f, l, t, e, h)
                    if (!(d === o ? Tr(f, c, 3, r, h) : d)) return !1
                  }
                }
                return !0
              }
              function Mr(t) {
                return (
                  !(!es(t) || ((e = t), Ft && Ft in e)) &&
                  ($a(t) ? Ht : bt).test(Ui(t))
                )
                var e
              }
              function Dr(t) {
                return 'function' == typeof t
                  ? t
                  : null == t
                    ? ou
                    : 'object' == typeof t
                      ? Va(t)
                        ? Hr(t[0], t[1])
                        : Gr(t)
                      : du(t)
              }
              function Lr(t) {
                if (!Ri(t)) return Ke(t)
                var e = []
                for (var n in Pt(t))
                  Dt.call(t, n) && 'constructor' != n && e.push(n)
                return e
              }
              function Fr(t) {
                if (!es(t))
                  return (function (t) {
                    var e = []
                    if (null != t) for (var n in Pt(t)) e.push(n)
                    return e
                  })(t)
                var e = Ri(t),
                  n = []
                for (var r in t)
                  ('constructor' != r || (!e && Dt.call(t, r))) && n.push(r)
                return n
              }
              function Ur(t, e) {
                return t < e
              }
              function jr(t, e) {
                var n = -1,
                  o = Ja(t) ? r(t.length) : []
                return (
                  dr(t, function (t, r, i) {
                    o[++n] = e(t, r, i)
                  }),
                  o
                )
              }
              function Gr(t) {
                var e = hi(t)
                return 1 == e.length && e[0][2]
                  ? Pi(e[0][0], e[0][1])
                  : function (n) {
                      return n === t || _r(n, t, e)
                    }
              }
              function Hr(t, e) {
                return xi(t) && Ni(e)
                  ? Pi(Fi(t), e)
                  : function (n) {
                      var r = Ps(n, t)
                      return r === o && r === e ? Cs(n, t) : Tr(e, r, 3)
                    }
              }
              function zr(t, e, n, r, i) {
                t !== e &&
                  vr(
                    e,
                    function (a, s) {
                      if ((i || (i = new Zn()), es(a)))
                        !(function (t, e, n, r, i, a, s) {
                          var u = Si(t, n),
                            l = Si(e, n),
                            c = s.get(l)
                          if (c) return void er(t, n, c)
                          var f = a ? a(u, l, n + '', t, e, s) : o,
                            h = f === o
                          if (h) {
                            var d = Va(l),
                              p = !d && qa(l),
                              g = !d && !p && cs(l)
                            ;(f = l),
                              d || p || g
                                ? Va(u)
                                  ? (f = u)
                                  : Ka(u)
                                    ? (f = Io(u))
                                    : p
                                      ? ((h = !1), (f = Ro(l, !0)))
                                      : g
                                        ? ((h = !1), (f = Po(l, !0)))
                                        : (f = [])
                                : is(l) || Qa(l)
                                  ? ((f = u),
                                    Qa(u)
                                      ? (f = bs(u))
                                      : (es(u) && !$a(u)) || (f = bi(l)))
                                  : (h = !1)
                          }
                          h && (s.set(l, f), i(f, l, r, a, s), s.delete(l))
                          er(t, n, f)
                        })(t, e, s, n, zr, r, i)
                      else {
                        var u = r ? r(Si(t, s), a, s + '', t, e, i) : o
                        u === o && (u = a), er(t, s, u)
                      }
                    },
                    Ts,
                  )
              }
              function Qr(t, e) {
                var n = t.length
                if (n) return wi((e += e < 0 ? n : 0), n) ? t[e] : o
              }
              function Vr(t, e, n) {
                e = e.length
                  ? Me(e, function (t) {
                      return Va(t)
                        ? function (e) {
                            return kr(e, 1 === t.length ? t[0] : t)
                          }
                        : t
                    })
                  : [ou]
                var r = -1
                e = Me(e, Xe(ci()))
                var o = jr(t, function (t, n, o) {
                  var i = Me(e, function (e) {
                    return e(t)
                  })
                  return { criteria: i, index: ++r, value: t }
                })
                return (function (t, e) {
                  var n = t.length
                  for (t.sort(e); n--; ) t[n] = t[n].value
                  return t
                })(o, function (t, e) {
                  return (function (t, e, n) {
                    var r = -1,
                      o = t.criteria,
                      i = e.criteria,
                      a = o.length,
                      s = n.length
                    for (; ++r < a; ) {
                      var u = Co(o[r], i[r])
                      if (u) return r >= s ? u : u * ('desc' == n[r] ? -1 : 1)
                    }
                    return t.index - e.index
                  })(t, e, n)
                })
              }
              function Wr(t, e, n) {
                for (var r = -1, o = e.length, i = {}; ++r < o; ) {
                  var a = e[r],
                    s = kr(t, a)
                  n(s, a) && to(i, Ao(a, t), s)
                }
                return i
              }
              function Jr(t, e, n, r) {
                var o = r ? Qe : ze,
                  i = -1,
                  a = e.length,
                  s = t
                for (t === e && (e = Io(e)), n && (s = Me(t, Xe(n))); ++i < a; )
                  for (
                    var u = 0, l = e[i], c = n ? n(l) : l;
                    (u = o(s, c, u, r)) > -1;
                  )
                    s !== t && Zt.call(s, u, 1), Zt.call(t, u, 1)
                return t
              }
              function Kr(t, e) {
                for (var n = t ? e.length : 0, r = n - 1; n--; ) {
                  var o = e[n]
                  if (n == r || o !== i) {
                    var i = o
                    wi(o) ? Zt.call(t, o, 1) : ho(t, o)
                  }
                }
                return t
              }
              function qr(t, e) {
                return t + me(En() * (e - t + 1))
              }
              function Zr(t, e) {
                var n = ''
                if (!t || e < 1 || e > p) return n
                do {
                  e % 2 && (n += t), (e = me(e / 2)) && (t += t)
                } while (e)
                return n
              }
              function Yr(t, e) {
                return Ti(Ci(t, e, ou), t + '')
              }
              function $r(t) {
                return $n(Gs(t))
              }
              function Xr(t, e) {
                var n = Gs(t)
                return Di(n, ur(e, 0, n.length))
              }
              function to(t, e, n, r) {
                if (!es(t)) return t
                for (
                  var i = -1, a = (e = Ao(e, t)).length, s = a - 1, u = t;
                  null != u && ++i < a;
                ) {
                  var l = Fi(e[i]),
                    c = n
                  if (
                    '__proto__' === l ||
                    'constructor' === l ||
                    'prototype' === l
                  )
                    return t
                  if (i != s) {
                    var f = u[l]
                    ;(c = r ? r(f, l, u) : o) === o &&
                      (c = es(f) ? f : wi(e[i + 1]) ? [] : {})
                  }
                  nr(u, l, c), (u = u[l])
                }
                return t
              }
              var eo = In
                  ? function (t, e) {
                      return In.set(t, e), t
                    }
                  : ou,
                no = ne
                  ? function (t, e) {
                      return ne(t, 'toString', {
                        configurable: !0,
                        enumerable: !1,
                        value: eu(e),
                        writable: !0,
                      })
                    }
                  : ou
              function ro(t) {
                return Di(Gs(t))
              }
              function oo(t, e, n) {
                var o = -1,
                  i = t.length
                e < 0 && (e = -e > i ? 0 : i + e),
                  (n = n > i ? i : n) < 0 && (n += i),
                  (i = e > n ? 0 : (n - e) >>> 0),
                  (e >>>= 0)
                for (var a = r(i); ++o < i; ) a[o] = t[o + e]
                return a
              }
              function io(t, e) {
                var n
                return (
                  dr(t, function (t, r, o) {
                    return !(n = e(t, r, o))
                  }),
                  !!n
                )
              }
              function ao(t, e, n) {
                var r = 0,
                  o = null == t ? r : t.length
                if ('number' == typeof e && e == e && o <= 2147483647) {
                  for (; r < o; ) {
                    var i = (r + o) >>> 1,
                      a = t[i]
                    null !== a && !ls(a) && (n ? a <= e : a < e)
                      ? (r = i + 1)
                      : (o = i)
                  }
                  return o
                }
                return so(t, e, ou, n)
              }
              function so(t, e, n, r) {
                var i = 0,
                  a = null == t ? 0 : t.length
                if (0 === a) return 0
                for (
                  var s = (e = n(e)) != e,
                    u = null === e,
                    l = ls(e),
                    c = e === o;
                  i < a;
                ) {
                  var f = me((i + a) / 2),
                    h = n(t[f]),
                    d = h !== o,
                    p = null === h,
                    g = h == h,
                    m = ls(h)
                  if (s) var y = r || g
                  else
                    y = c
                      ? g && (r || d)
                      : u
                        ? g && d && (r || !p)
                        : l
                          ? g && d && !p && (r || !m)
                          : !p && !m && (r ? h <= e : h < e)
                  y ? (i = f + 1) : (a = f)
                }
                return wn(a, 4294967294)
              }
              function uo(t, e) {
                for (var n = -1, r = t.length, o = 0, i = []; ++n < r; ) {
                  var a = t[n],
                    s = e ? e(a) : a
                  if (!n || !Ga(s, u)) {
                    var u = s
                    i[o++] = 0 === a ? 0 : a
                  }
                }
                return i
              }
              function lo(t) {
                return 'number' == typeof t ? t : ls(t) ? g : +t
              }
              function co(t) {
                if ('string' == typeof t) return t
                if (Va(t)) return Me(t, co) + ''
                if (ls(t)) return jn ? jn.call(t) : ''
                var e = t + ''
                return '0' == e && 1 / t == -1 / 0 ? '-0' : e
              }
              function fo(t, e, n) {
                var r = -1,
                  o = Te,
                  i = t.length,
                  a = !0,
                  s = [],
                  u = s
                if (n) (a = !1), (o = _e)
                else if (i >= 200) {
                  var l = e ? null : Yo(t)
                  if (l) return hn(l)
                  ;(a = !1), (o = en), (u = new qn())
                } else u = e ? [] : s
                t: for (; ++r < i; ) {
                  var c = t[r],
                    f = e ? e(c) : c
                  if (((c = n || 0 !== c ? c : 0), a && f == f)) {
                    for (var h = u.length; h--; ) if (u[h] === f) continue t
                    e && u.push(f), s.push(c)
                  } else o(u, f, n) || (u !== s && u.push(f), s.push(c))
                }
                return s
              }
              function ho(t, e) {
                return (
                  null == (t = Oi(t, (e = Ao(e, t)))) || delete t[Fi(Yi(e))]
                )
              }
              function po(t, e, n, r) {
                return to(t, e, n(kr(t, e)), r)
              }
              function go(t, e, n, r) {
                for (
                  var o = t.length, i = r ? o : -1;
                  (r ? i-- : ++i < o) && e(t[i], i, t);
                );
                return n
                  ? oo(t, r ? 0 : i, r ? i + 1 : o)
                  : oo(t, r ? i + 1 : 0, r ? o : i)
              }
              function mo(t, e) {
                var n = t
                return (
                  n instanceof Vn && (n = n.value()),
                  Le(
                    e,
                    function (t, e) {
                      return e.func.apply(e.thisArg, De([t], e.args))
                    },
                    n,
                  )
                )
              }
              function yo(t, e, n) {
                var o = t.length
                if (o < 2) return o ? fo(t[0]) : []
                for (var i = -1, a = r(o); ++i < o; )
                  for (var s = t[i], u = -1; ++u < o; )
                    u != i && (a[i] = hr(a[i] || s, t[u], e, n))
                return fo(br(a, 1), e, n)
              }
              function bo(t, e, n) {
                for (
                  var r = -1, i = t.length, a = e.length, s = {};
                  ++r < i;
                ) {
                  var u = r < a ? e[r] : o
                  n(s, t[r], u)
                }
                return s
              }
              function vo(t) {
                return Ka(t) ? t : []
              }
              function wo(t) {
                return 'function' == typeof t ? t : ou
              }
              function Ao(t, e) {
                return Va(t) ? t : xi(t, e) ? [t] : Li(vs(t))
              }
              var xo = Yr
              function Eo(t, e, n) {
                var r = t.length
                return (n = n === o ? r : n), !e && n >= r ? t : oo(t, e, n)
              }
              var ko =
                oe ||
                function (t) {
                  return ge.clearTimeout(t)
                }
              function Ro(t, e) {
                if (e) return t.slice()
                var n = t.length,
                  r = Wt ? Wt(n) : new t.constructor(n)
                return t.copy(r), r
              }
              function No(t) {
                var e = new t.constructor(t.byteLength)
                return new Vt(e).set(new Vt(t)), e
              }
              function Po(t, e) {
                var n = e ? No(t.buffer) : t.buffer
                return new t.constructor(n, t.byteOffset, t.length)
              }
              function Co(t, e) {
                if (t !== e) {
                  var n = t !== o,
                    r = null === t,
                    i = t == t,
                    a = ls(t),
                    s = e !== o,
                    u = null === e,
                    l = e == e,
                    c = ls(e)
                  if (
                    (!u && !c && !a && t > e) ||
                    (a && s && l && !u && !c) ||
                    (r && s && l) ||
                    (!n && l) ||
                    !i
                  )
                    return 1
                  if (
                    (!r && !a && !c && t < e) ||
                    (c && n && i && !r && !a) ||
                    (u && n && i) ||
                    (!s && i) ||
                    !l
                  )
                    return -1
                }
                return 0
              }
              function Oo(t, e, n, o) {
                for (
                  var i = -1,
                    a = t.length,
                    s = n.length,
                    u = -1,
                    l = e.length,
                    c = vn(a - s, 0),
                    f = r(l + c),
                    h = !o;
                  ++u < l;
                )
                  f[u] = e[u]
                for (; ++i < s; ) (h || i < a) && (f[n[i]] = t[i])
                for (; c--; ) f[u++] = t[i++]
                return f
              }
              function So(t, e, n, o) {
                for (
                  var i = -1,
                    a = t.length,
                    s = -1,
                    u = n.length,
                    l = -1,
                    c = e.length,
                    f = vn(a - u, 0),
                    h = r(f + c),
                    d = !o;
                  ++i < f;
                )
                  h[i] = t[i]
                for (var p = i; ++l < c; ) h[p + l] = e[l]
                for (; ++s < u; ) (d || i < a) && (h[p + n[s]] = t[i++])
                return h
              }
              function Io(t, e) {
                var n = -1,
                  o = t.length
                for (e || (e = r(o)); ++n < o; ) e[n] = t[n]
                return e
              }
              function Bo(t, e, n, r) {
                var i = !n
                n || (n = {})
                for (var a = -1, s = e.length; ++a < s; ) {
                  var u = e[a],
                    l = r ? r(n[u], t[u], u, n, t) : o
                  l === o && (l = t[u]), i ? ar(n, u, l) : nr(n, u, l)
                }
                return n
              }
              function To(t, e) {
                return function (n, r) {
                  var o = Va(n) ? Ce : or,
                    i = e ? e() : {}
                  return o(n, t, ci(r, 2), i)
                }
              }
              function _o(t) {
                return Yr(function (e, n) {
                  var r = -1,
                    i = n.length,
                    a = i > 1 ? n[i - 1] : o,
                    s = i > 2 ? n[2] : o
                  for (
                    a = t.length > 3 && 'function' == typeof a ? (i--, a) : o,
                      s && Ai(n[0], n[1], s) && ((a = i < 3 ? o : a), (i = 1)),
                      e = Pt(e);
                    ++r < i;
                  ) {
                    var u = n[r]
                    u && t(e, u, r, a)
                  }
                  return e
                })
              }
              function Mo(t, e) {
                return function (n, r) {
                  if (null == n) return n
                  if (!Ja(n)) return t(n, r)
                  for (
                    var o = n.length, i = e ? o : -1, a = Pt(n);
                    (e ? i-- : ++i < o) && !1 !== r(a[i], i, a);
                  );
                  return n
                }
              }
              function Do(t) {
                return function (e, n, r) {
                  for (var o = -1, i = Pt(e), a = r(e), s = a.length; s--; ) {
                    var u = a[t ? s : ++o]
                    if (!1 === n(i[u], u, i)) break
                  }
                  return e
                }
              }
              function Lo(t) {
                return function (e) {
                  var n = un((e = vs(e))) ? gn(e) : o,
                    r = n ? n[0] : e.charAt(0),
                    i = n ? Eo(n, 1).join('') : e.slice(1)
                  return r[t]() + i
                }
              }
              function Fo(t) {
                return function (e) {
                  return Le($s(Qs(e).replace(te, '')), t, '')
                }
              }
              function Uo(t) {
                return function () {
                  var e = arguments
                  switch (e.length) {
                    case 0:
                      return new t()
                    case 1:
                      return new t(e[0])
                    case 2:
                      return new t(e[0], e[1])
                    case 3:
                      return new t(e[0], e[1], e[2])
                    case 4:
                      return new t(e[0], e[1], e[2], e[3])
                    case 5:
                      return new t(e[0], e[1], e[2], e[3], e[4])
                    case 6:
                      return new t(e[0], e[1], e[2], e[3], e[4], e[5])
                    case 7:
                      return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6])
                  }
                  var n = Hn(t.prototype),
                    r = t.apply(n, e)
                  return es(r) ? r : n
                }
              }
              function jo(t) {
                return function (e, n, r) {
                  var i = Pt(e)
                  if (!Ja(e)) {
                    var a = ci(n, 3)
                    ;(e = Bs(e)),
                      (n = function (t) {
                        return a(i[t], t, i)
                      })
                  }
                  var s = t(e, n, r)
                  return s > -1 ? i[a ? e[s] : s] : o
                }
              }
              function Go(t) {
                return oi(function (e) {
                  var n = e.length,
                    r = n,
                    a = Qn.prototype.thru
                  for (t && e.reverse(); r--; ) {
                    var s = e[r]
                    if ('function' != typeof s) throw new St(i)
                    if (a && !u && 'wrapper' == ui(s)) var u = new Qn([], !0)
                  }
                  for (r = u ? r : n; ++r < n; ) {
                    var l = ui((s = e[r])),
                      c = 'wrapper' == l ? si(s) : o
                    u =
                      c && Ei(c[0]) && 424 == c[1] && !c[4].length && 1 == c[9]
                        ? u[ui(c[0])].apply(u, c[3])
                        : 1 == s.length && Ei(s)
                          ? u[l]()
                          : u.thru(s)
                  }
                  return function () {
                    var t = arguments,
                      r = t[0]
                    if (u && 1 == t.length && Va(r)) return u.plant(r).value()
                    for (var o = 0, i = n ? e[o].apply(this, t) : r; ++o < n; )
                      i = e[o].call(this, i)
                    return i
                  }
                })
              }
              function Ho(t, e, n, i, a, s, u, l, c, h) {
                var d = e & f,
                  p = 1 & e,
                  g = 2 & e,
                  m = 24 & e,
                  y = 512 & e,
                  b = g ? o : Uo(t)
                return function f() {
                  for (var v = arguments.length, w = r(v), A = v; A--; )
                    w[A] = arguments[A]
                  if (m)
                    var x = li(f),
                      E = (function (t, e) {
                        for (var n = t.length, r = 0; n--; ) t[n] === e && ++r
                        return r
                      })(w, x)
                  if (
                    (i && (w = Oo(w, i, a, m)),
                    s && (w = So(w, s, u, m)),
                    (v -= E),
                    m && v < h)
                  ) {
                    var k = fn(w, x)
                    return qo(t, e, Ho, f.placeholder, n, w, k, l, c, h - v)
                  }
                  var R = p ? n : this,
                    N = g ? R[t] : t
                  return (
                    (v = w.length),
                    l
                      ? (w = (function (t, e) {
                          var n = t.length,
                            r = wn(e.length, n),
                            i = Io(t)
                          for (; r--; ) {
                            var a = e[r]
                            t[r] = wi(a, n) ? i[a] : o
                          }
                          return t
                        })(w, l))
                      : y && v > 1 && w.reverse(),
                    d && c < v && (w.length = c),
                    this &&
                      this !== ge &&
                      this instanceof f &&
                      (N = b || Uo(N)),
                    N.apply(R, w)
                  )
                }
              }
              function zo(t, e) {
                return function (n, r) {
                  return (function (t, e, n, r) {
                    return (
                      Ar(t, function (t, o, i) {
                        e(r, n(t), o, i)
                      }),
                      r
                    )
                  })(n, t, e(r), {})
                }
              }
              function Qo(t, e) {
                return function (n, r) {
                  var i
                  if (n === o && r === o) return e
                  if ((n !== o && (i = n), r !== o)) {
                    if (i === o) return r
                    'string' == typeof n || 'string' == typeof r
                      ? ((n = co(n)), (r = co(r)))
                      : ((n = lo(n)), (r = lo(r))),
                      (i = t(n, r))
                  }
                  return i
                }
              }
              function Vo(t) {
                return oi(function (e) {
                  return (
                    (e = Me(e, Xe(ci()))),
                    Yr(function (n) {
                      var r = this
                      return t(e, function (t) {
                        return Pe(t, r, n)
                      })
                    })
                  )
                })
              }
              function Wo(t, e) {
                var n = (e = e === o ? ' ' : co(e)).length
                if (n < 2) return n ? Zr(e, t) : e
                var r = Zr(e, pe(t / pn(e)))
                return un(e) ? Eo(gn(r), 0, t).join('') : r.slice(0, t)
              }
              function Jo(t) {
                return function (e, n, i) {
                  return (
                    i && 'number' != typeof i && Ai(e, n, i) && (n = i = o),
                    (e = ps(e)),
                    n === o ? ((n = e), (e = 0)) : (n = ps(n)),
                    (function (t, e, n, o) {
                      for (
                        var i = -1, a = vn(pe((e - t) / (n || 1)), 0), s = r(a);
                        a--;
                      )
                        (s[o ? a : ++i] = t), (t += n)
                      return s
                    })(e, n, (i = i === o ? (e < n ? 1 : -1) : ps(i)), t)
                  )
                }
              }
              function Ko(t) {
                return function (e, n) {
                  return (
                    ('string' == typeof e && 'string' == typeof n) ||
                      ((e = ys(e)), (n = ys(n))),
                    t(e, n)
                  )
                }
              }
              function qo(t, e, n, r, i, a, s, u, f, h) {
                var d = 8 & e
                ;(e |= d ? l : c), 4 & (e &= ~(d ? c : l)) || (e &= -4)
                var p = [
                    t,
                    e,
                    i,
                    d ? a : o,
                    d ? s : o,
                    d ? o : a,
                    d ? o : s,
                    u,
                    f,
                    h,
                  ],
                  g = n.apply(o, p)
                return Ei(t) && Ii(g, p), (g.placeholder = r), _i(g, t, e)
              }
              function Zo(t) {
                var e = Nt[t]
                return function (t, n) {
                  if (
                    ((t = ys(t)), (n = null == n ? 0 : wn(gs(n), 292)) && we(t))
                  ) {
                    var r = (vs(t) + 'e').split('e')
                    return +(
                      (r = (vs(e(r[0] + 'e' + (+r[1] + n))) + 'e').split(
                        'e',
                      ))[0] +
                      'e' +
                      (+r[1] - n)
                    )
                  }
                  return e(t)
                }
              }
              var Yo =
                Cn && 1 / hn(new Cn([, -0]))[1] == d
                  ? function (t) {
                      return new Cn(t)
                    }
                  : lu
              function $o(t) {
                return function (e) {
                  var n = mi(e)
                  return n == R
                    ? ln(e)
                    : n == S
                      ? dn(e)
                      : (function (t, e) {
                          return Me(e, function (e) {
                            return [e, t[e]]
                          })
                        })(e, t(e))
                }
              }
              function Xo(t, e, n, a, d, p, g, m) {
                var y = 2 & e
                if (!y && 'function' != typeof t) throw new St(i)
                var b = a ? a.length : 0
                if (
                  (b || ((e &= -97), (a = d = o)),
                  (g = g === o ? g : vn(gs(g), 0)),
                  (m = m === o ? m : gs(m)),
                  (b -= d ? d.length : 0),
                  e & c)
                ) {
                  var v = a,
                    w = d
                  a = d = o
                }
                var A = y ? o : si(t),
                  x = [t, e, n, a, d, v, w, p, g, m]
                if (
                  (A &&
                    (function (t, e) {
                      var n = t[1],
                        r = e[1],
                        o = n | r,
                        i = o < 131,
                        a =
                          (r == f && 8 == n) ||
                          (r == f && n == h && t[7].length <= e[8]) ||
                          (384 == r && e[7].length <= e[8] && 8 == n)
                      if (!i && !a) return t
                      1 & r && ((t[2] = e[2]), (o |= 1 & n ? 0 : 4))
                      var u = e[3]
                      if (u) {
                        var l = t[3]
                        ;(t[3] = l ? Oo(l, u, e[4]) : u),
                          (t[4] = l ? fn(t[3], s) : e[4])
                      }
                      ;(u = e[5]) &&
                        ((l = t[5]),
                        (t[5] = l ? So(l, u, e[6]) : u),
                        (t[6] = l ? fn(t[5], s) : e[6]))
                      ;(u = e[7]) && (t[7] = u)
                      r & f && (t[8] = null == t[8] ? e[8] : wn(t[8], e[8]))
                      null == t[9] && (t[9] = e[9])
                      ;(t[0] = e[0]), (t[1] = o)
                    })(x, A),
                  (t = x[0]),
                  (e = x[1]),
                  (n = x[2]),
                  (a = x[3]),
                  (d = x[4]),
                  !(m = x[9] =
                    x[9] === o ? (y ? 0 : t.length) : vn(x[9] - b, 0)) &&
                    24 & e &&
                    (e &= -25),
                  e && 1 != e)
                )
                  E =
                    8 == e || e == u
                      ? (function (t, e, n) {
                          var i = Uo(t)
                          return function a() {
                            for (
                              var s = arguments.length,
                                u = r(s),
                                l = s,
                                c = li(a);
                              l--;
                            )
                              u[l] = arguments[l]
                            var f =
                              s < 3 && u[0] !== c && u[s - 1] !== c
                                ? []
                                : fn(u, c)
                            return (s -= f.length) < n
                              ? qo(
                                  t,
                                  e,
                                  Ho,
                                  a.placeholder,
                                  o,
                                  u,
                                  f,
                                  o,
                                  o,
                                  n - s,
                                )
                              : Pe(
                                  this && this !== ge && this instanceof a
                                    ? i
                                    : t,
                                  this,
                                  u,
                                )
                          }
                        })(t, e, m)
                      : (e != l && 33 != e) || d.length
                        ? Ho.apply(o, x)
                        : (function (t, e, n, o) {
                            var i = 1 & e,
                              a = Uo(t)
                            return function e() {
                              for (
                                var s = -1,
                                  u = arguments.length,
                                  l = -1,
                                  c = o.length,
                                  f = r(c + u),
                                  h =
                                    this && this !== ge && this instanceof e
                                      ? a
                                      : t;
                                ++l < c;
                              )
                                f[l] = o[l]
                              for (; u--; ) f[l++] = arguments[++s]
                              return Pe(h, i ? n : this, f)
                            }
                          })(t, e, n, a)
                else
                  var E = (function (t, e, n) {
                    var r = 1 & e,
                      o = Uo(t)
                    return function e() {
                      return (
                        this && this !== ge && this instanceof e ? o : t
                      ).apply(r ? n : this, arguments)
                    }
                  })(t, e, n)
                return _i((A ? eo : Ii)(E, x), t, e)
              }
              function ti(t, e, n, r) {
                return t === o || (Ga(t, Tt[n]) && !Dt.call(r, n)) ? e : t
              }
              function ei(t, e, n, r, i, a) {
                return (
                  es(t) &&
                    es(e) &&
                    (a.set(e, t), zr(t, e, o, ei, a), a.delete(e)),
                  t
                )
              }
              function ni(t) {
                return is(t) ? o : t
              }
              function ri(t, e, n, r, i, a) {
                var s = 1 & n,
                  u = t.length,
                  l = e.length
                if (u != l && !(s && l > u)) return !1
                var c = a.get(t),
                  f = a.get(e)
                if (c && f) return c == e && f == t
                var h = -1,
                  d = !0,
                  p = 2 & n ? new qn() : o
                for (a.set(t, e), a.set(e, t); ++h < u; ) {
                  var g = t[h],
                    m = e[h]
                  if (r) var y = s ? r(m, g, h, e, t, a) : r(g, m, h, t, e, a)
                  if (y !== o) {
                    if (y) continue
                    d = !1
                    break
                  }
                  if (p) {
                    if (
                      !Ue(e, function (t, e) {
                        if (!en(p, e) && (g === t || i(g, t, n, r, a)))
                          return p.push(e)
                      })
                    ) {
                      d = !1
                      break
                    }
                  } else if (g !== m && !i(g, m, n, r, a)) {
                    d = !1
                    break
                  }
                }
                return a.delete(t), a.delete(e), d
              }
              function oi(t) {
                return Ti(Ci(t, o, Wi), t + '')
              }
              function ii(t) {
                return Rr(t, Bs, pi)
              }
              function ai(t) {
                return Rr(t, Ts, gi)
              }
              var si = In
                ? function (t) {
                    return In.get(t)
                  }
                : lu
              function ui(t) {
                for (
                  var e = t.name + '',
                    n = Bn[e],
                    r = Dt.call(Bn, e) ? n.length : 0;
                  r--;
                ) {
                  var o = n[r],
                    i = o.func
                  if (null == i || i == t) return o.name
                }
                return e
              }
              function li(t) {
                return (Dt.call(Gn, 'placeholder') ? Gn : t).placeholder
              }
              function ci() {
                var t = Gn.iteratee || iu
                return (
                  (t = t === iu ? Dr : t),
                  arguments.length ? t(arguments[0], arguments[1]) : t
                )
              }
              function fi(t, e) {
                var n,
                  r,
                  o = t.__data__
                return (
                  'string' == (r = typeof (n = e)) ||
                  'number' == r ||
                  'symbol' == r ||
                  'boolean' == r
                    ? '__proto__' !== n
                    : null === n
                )
                  ? o['string' == typeof e ? 'string' : 'hash']
                  : o.map
              }
              function hi(t) {
                for (var e = Bs(t), n = e.length; n--; ) {
                  var r = e[n],
                    o = t[r]
                  e[n] = [r, o, Ni(o)]
                }
                return e
              }
              function di(t, e) {
                var n = (function (t, e) {
                  return null == t ? o : t[e]
                })(t, e)
                return Mr(n) ? n : o
              }
              var pi = ye
                  ? function (t) {
                      return null == t
                        ? []
                        : ((t = Pt(t)),
                          Be(ye(t), function (e) {
                            return qt.call(t, e)
                          }))
                    }
                  : mu,
                gi = ye
                  ? function (t) {
                      for (var e = []; t; ) De(e, pi(t)), (t = Jt(t))
                      return e
                    }
                  : mu,
                mi = Nr
              function yi(t, e, n) {
                for (var r = -1, o = (e = Ao(e, t)).length, i = !1; ++r < o; ) {
                  var a = Fi(e[r])
                  if (!(i = null != t && n(t, a))) break
                  t = t[a]
                }
                return i || ++r != o
                  ? i
                  : !!(o = null == t ? 0 : t.length) &&
                      ts(o) &&
                      wi(a, o) &&
                      (Va(t) || Qa(t))
              }
              function bi(t) {
                return 'function' != typeof t.constructor || Ri(t)
                  ? {}
                  : Hn(Jt(t))
              }
              function vi(t) {
                return Va(t) || Qa(t) || !!(Yt && t && t[Yt])
              }
              function wi(t, e) {
                var n = typeof t
                return (
                  !!(e = null == e ? p : e) &&
                  ('number' == n || ('symbol' != n && wt.test(t))) &&
                  t > -1 &&
                  t % 1 == 0 &&
                  t < e
                )
              }
              function Ai(t, e, n) {
                if (!es(n)) return !1
                var r = typeof e
                return (
                  !!('number' == r
                    ? Ja(n) && wi(e, n.length)
                    : 'string' == r && e in n) && Ga(n[e], t)
                )
              }
              function xi(t, e) {
                if (Va(t)) return !1
                var n = typeof t
                return (
                  !(
                    'number' != n &&
                    'symbol' != n &&
                    'boolean' != n &&
                    null != t &&
                    !ls(t)
                  ) ||
                  nt.test(t) || !et.test(t) ||
                  (null != e && t in Pt(e))
                )
              }
              function Ei(t) {
                var e = ui(t),
                  n = Gn[e]
                if ('function' != typeof n || !(e in Vn.prototype)) return !1
                if (t === n) return !0
                var r = si(n)
                return !!r && t === r[0]
              }
              ;((Rn && mi(new Rn(new ArrayBuffer(1))) != M) ||
                (Nn && mi(new Nn()) != R) ||
                (Pn && mi(Pn.resolve()) != C) ||
                (Cn && mi(new Cn()) != S) ||
                (On && mi(new On()) != T)) &&
                (mi = function (t) {
                  var e = Nr(t),
                    n = e == P ? t.constructor : o,
                    r = n ? Ui(n) : ''
                  if (r)
                    switch (r) {
                      case Tn:
                        return M
                      case _n:
                        return R
                      case Mn:
                        return C
                      case Dn:
                        return S
                      case Ln:
                        return T
                    }
                  return e
                })
              var ki = _t ? $a : yu
              function Ri(t) {
                var e = t && t.constructor
                return t === (('function' == typeof e && e.prototype) || Tt)
              }
              function Ni(t) {
                return t == t && !es(t)
              }
              function Pi(t, e) {
                return function (n) {
                  return null != n && n[t] === e && (e !== o || t in Pt(n))
                }
              }
              function Ci(t, e, n) {
                return (
                  (e = vn(e === o ? t.length - 1 : e, 0)),
                  function () {
                    for (
                      var o = arguments,
                        i = -1,
                        a = vn(o.length - e, 0),
                        s = r(a);
                      ++i < a;
                    )
                      s[i] = o[e + i]
                    i = -1
                    for (var u = r(e + 1); ++i < e; ) u[i] = o[i]
                    return (u[e] = n(s)), Pe(t, this, u)
                  }
                )
              }
              function Oi(t, e) {
                return e.length < 2 ? t : kr(t, oo(e, 0, -1))
              }
              function Si(t, e) {
                if (
                  ('constructor' !== e || 'function' != typeof t[e]) &&
                  '__proto__' != e
                )
                  return t[e]
              }
              var Ii = Mi(eo),
                Bi =
                  de ||
                  function (t, e) {
                    return ge.setTimeout(t, e)
                  },
                Ti = Mi(no)
              function _i(t, e, n) {
                var r = e + ''
                return Ti(
                  t,
                  (function (t, e) {
                    var n = e.length
                    if (!n) return t
                    var r = n - 1
                    return (
                      (e[r] = (n > 1 ? '& ' : '') + e[r]),
                      (e = e.join(n > 2 ? ', ' : ' ')),
                      t.replace(ut, '{\n/* [wrapped with ' + e + '] */\n')
                    )
                  })(
                    r,
                    (function (t, e) {
                      return (
                        Oe(y, function (n) {
                          var r = '_.' + n[0]
                          e & n[1] && !Te(t, r) && t.push(r)
                        }),
                        t.sort()
                      )
                    })(
                      (function (t) {
                        var e = t.match(lt)
                        return e ? e[1].split(ct) : []
                      })(r),
                      n,
                    ),
                  ),
                )
              }
              function Mi(t) {
                var e = 0,
                  n = 0
                return function () {
                  var r = An(),
                    i = 16 - (r - n)
                  if (((n = r), i > 0)) {
                    if (++e >= 800) return arguments[0]
                  } else e = 0
                  return t.apply(o, arguments)
                }
              }
              function Di(t, e) {
                var n = -1,
                  r = t.length,
                  i = r - 1
                for (e = e === o ? r : e; ++n < e; ) {
                  var a = qr(n, i),
                    s = t[a]
                  ;(t[a] = t[n]), (t[n] = s)
                }
                return (t.length = e), t
              }
              var Li = (function (t) {
                var e = Ma(t, function (t) {
                    return 500 === n.size && n.clear(), t
                  }),
                  n = e.cache
                return e
              })(function (t) {
                var e = []
                return (
                  46 === t.charCodeAt(0) && e.push(''),
                  t.replace(rt, function (t, n, r, o) {
                    e.push(r ? o.replace(dt, '$1') : n || t)
                  }),
                  e
                )
              })
              function Fi(t) {
                if ('string' == typeof t || ls(t)) return t
                var e = t + ''
                return '0' == e && 1 / t == -1 / 0 ? '-0' : e
              }
              function Ui(t) {
                if (null != t) {
                  try {
                    return Mt.call(t)
                  } catch (t) {}
                  try {
                    return t + ''
                  } catch (t) {}
                }
                return ''
              }
              function ji(t) {
                if (t instanceof Vn) return t.clone()
                var e = new Qn(t.__wrapped__, t.__chain__)
                return (
                  (e.__actions__ = Io(t.__actions__)),
                  (e.__index__ = t.__index__),
                  (e.__values__ = t.__values__),
                  e
                )
              }
              var Gi = Yr(function (t, e) {
                  return Ka(t) ? hr(t, br(e, 1, Ka, !0)) : []
                }),
                Hi = Yr(function (t, e) {
                  var n = Yi(e)
                  return (
                    Ka(n) && (n = o),
                    Ka(t) ? hr(t, br(e, 1, Ka, !0), ci(n, 2)) : []
                  )
                }),
                zi = Yr(function (t, e) {
                  var n = Yi(e)
                  return (
                    Ka(n) && (n = o), Ka(t) ? hr(t, br(e, 1, Ka, !0), o, n) : []
                  )
                })
              function Qi(t, e, n) {
                var r = null == t ? 0 : t.length
                if (!r) return -1
                var o = null == n ? 0 : gs(n)
                return o < 0 && (o = vn(r + o, 0)), He(t, ci(e, 3), o)
              }
              function Vi(t, e, n) {
                var r = null == t ? 0 : t.length
                if (!r) return -1
                var i = r - 1
                return (
                  n !== o &&
                    ((i = gs(n)), (i = n < 0 ? vn(r + i, 0) : wn(i, r - 1))),
                  He(t, ci(e, 3), i, !0)
                )
              }
              function Wi(t) {
                return (null == t ? 0 : t.length) ? br(t, 1) : []
              }
              function Ji(t) {
                return t && t.length ? t[0] : o
              }
              var Ki = Yr(function (t) {
                  var e = Me(t, vo)
                  return e.length && e[0] === t[0] ? Sr(e) : []
                }),
                qi = Yr(function (t) {
                  var e = Yi(t),
                    n = Me(t, vo)
                  return (
                    e === Yi(n) ? (e = o) : n.pop(),
                    n.length && n[0] === t[0] ? Sr(n, ci(e, 2)) : []
                  )
                }),
                Zi = Yr(function (t) {
                  var e = Yi(t),
                    n = Me(t, vo)
                  return (
                    (e = 'function' == typeof e ? e : o) && n.pop(),
                    n.length && n[0] === t[0] ? Sr(n, o, e) : []
                  )
                })
              function Yi(t) {
                var e = null == t ? 0 : t.length
                return e ? t[e - 1] : o
              }
              var $i = Yr(Xi)
              function Xi(t, e) {
                return t && t.length && e && e.length ? Jr(t, e) : t
              }
              var ta = oi(function (t, e) {
                var n = null == t ? 0 : t.length,
                  r = sr(t, e)
                return (
                  Kr(
                    t,
                    Me(e, function (t) {
                      return wi(t, n) ? +t : t
                    }).sort(Co),
                  ),
                  r
                )
              })
              function ea(t) {
                return null == t ? t : kn.call(t)
              }
              var na = Yr(function (t) {
                  return fo(br(t, 1, Ka, !0))
                }),
                ra = Yr(function (t) {
                  var e = Yi(t)
                  return Ka(e) && (e = o), fo(br(t, 1, Ka, !0), ci(e, 2))
                }),
                oa = Yr(function (t) {
                  var e = Yi(t)
                  return (
                    (e = 'function' == typeof e ? e : o),
                    fo(br(t, 1, Ka, !0), o, e)
                  )
                })
              function ia(t) {
                if (!t || !t.length) return []
                var e = 0
                return (
                  (t = Be(t, function (t) {
                    if (Ka(t)) return (e = vn(t.length, e)), !0
                  })),
                  Ye(e, function (e) {
                    return Me(t, Je(e))
                  })
                )
              }
              function aa(t, e) {
                if (!t || !t.length) return []
                var n = ia(t)
                return null == e
                  ? n
                  : Me(n, function (t) {
                      return Pe(e, o, t)
                    })
              }
              var sa = Yr(function (t, e) {
                  return Ka(t) ? hr(t, e) : []
                }),
                ua = Yr(function (t) {
                  return yo(Be(t, Ka))
                }),
                la = Yr(function (t) {
                  var e = Yi(t)
                  return Ka(e) && (e = o), yo(Be(t, Ka), ci(e, 2))
                }),
                ca = Yr(function (t) {
                  var e = Yi(t)
                  return (
                    (e = 'function' == typeof e ? e : o), yo(Be(t, Ka), o, e)
                  )
                }),
                fa = Yr(ia)
              var ha = Yr(function (t) {
                var e = t.length,
                  n = e > 1 ? t[e - 1] : o
                return (n = 'function' == typeof n ? (t.pop(), n) : o), aa(t, n)
              })
              function da(t) {
                var e = Gn(t)
                return (e.__chain__ = !0), e
              }
              function pa(t, e) {
                return e(t)
              }
              var ga = oi(function (t) {
                var e = t.length,
                  n = e ? t[0] : 0,
                  r = this.__wrapped__,
                  i = function (e) {
                    return sr(e, t)
                  }
                return !(e > 1 || this.__actions__.length) &&
                  r instanceof Vn &&
                  wi(n)
                  ? ((r = r.slice(n, +n + (e ? 1 : 0))).__actions__.push({
                      func: pa,
                      args: [i],
                      thisArg: o,
                    }),
                    new Qn(r, this.__chain__).thru(function (t) {
                      return e && !t.length && t.push(o), t
                    }))
                  : this.thru(i)
              })
              var ma = To(function (t, e, n) {
                Dt.call(t, n) ? ++t[n] : ar(t, n, 1)
              })
              var ya = jo(Qi),
                ba = jo(Vi)
              function va(t, e) {
                return (Va(t) ? Oe : dr)(t, ci(e, 3))
              }
              function wa(t, e) {
                return (Va(t) ? Se : pr)(t, ci(e, 3))
              }
              var Aa = To(function (t, e, n) {
                Dt.call(t, n) ? t[n].push(e) : ar(t, n, [e])
              })
              var xa = Yr(function (t, e, n) {
                  var o = -1,
                    i = 'function' == typeof e,
                    a = Ja(t) ? r(t.length) : []
                  return (
                    dr(t, function (t) {
                      a[++o] = i ? Pe(e, t, n) : Ir(t, e, n)
                    }),
                    a
                  )
                }),
                Ea = To(function (t, e, n) {
                  ar(t, n, e)
                })
              function ka(t, e) {
                return (Va(t) ? Me : jr)(t, ci(e, 3))
              }
              var Ra = To(
                function (t, e, n) {
                  t[n ? 0 : 1].push(e)
                },
                function () {
                  return [[], []]
                },
              )
              var Na = Yr(function (t, e) {
                  if (null == t) return []
                  var n = e.length
                  return (
                    n > 1 && Ai(t, e[0], e[1])
                      ? (e = [])
                      : n > 2 && Ai(e[0], e[1], e[2]) && (e = [e[0]]),
                    Vr(t, br(e, 1), [])
                  )
                }),
                Pa =
                  ce ||
                  function () {
                    return ge.Date.now()
                  }
              function Ca(t, e, n) {
                return (
                  (e = n ? o : e),
                  (e = t && null == e ? t.length : e),
                  Xo(t, f, o, o, o, o, e)
                )
              }
              function Oa(t, e) {
                var n
                if ('function' != typeof e) throw new St(i)
                return (
                  (t = gs(t)),
                  function () {
                    return (
                      --t > 0 && (n = e.apply(this, arguments)),
                      t <= 1 && (e = o),
                      n
                    )
                  }
                )
              }
              var Sa = Yr(function (t, e, n) {
                  var r = 1
                  if (n.length) {
                    var o = fn(n, li(Sa))
                    r |= l
                  }
                  return Xo(t, r, e, n, o)
                }),
                Ia = Yr(function (t, e, n) {
                  var r = 3
                  if (n.length) {
                    var o = fn(n, li(Ia))
                    r |= l
                  }
                  return Xo(e, r, t, n, o)
                })
              function Ba(t, e, n) {
                var r,
                  a,
                  s,
                  u,
                  l,
                  c,
                  f = 0,
                  h = !1,
                  d = !1,
                  p = !0
                if ('function' != typeof t) throw new St(i)
                function g(e) {
                  var n = r,
                    i = a
                  return (r = a = o), (f = e), (u = t.apply(i, n))
                }
                function m(t) {
                  var n = t - c
                  return c === o || n >= e || n < 0 || (d && t - f >= s)
                }
                function y() {
                  var t = Pa()
                  if (m(t)) return b(t)
                  l = Bi(
                    y,
                    (function (t) {
                      var n = e - (t - c)
                      return d ? wn(n, s - (t - f)) : n
                    })(t),
                  )
                }
                function b(t) {
                  return (l = o), p && r ? g(t) : ((r = a = o), u)
                }
                function v() {
                  var t = Pa(),
                    n = m(t)
                  if (((r = arguments), (a = this), (c = t), n)) {
                    if (l === o)
                      return (function (t) {
                        return (f = t), (l = Bi(y, e)), h ? g(t) : u
                      })(c)
                    if (d) return ko(l), (l = Bi(y, e)), g(c)
                  }
                  return l === o && (l = Bi(y, e)), u
                }
                return (
                  (e = ys(e) || 0),
                  es(n) &&
                    ((h = !!n.leading),
                    (s = (d = 'maxWait' in n) ? vn(ys(n.maxWait) || 0, e) : s),
                    (p = 'trailing' in n ? !!n.trailing : p)),
                  (v.cancel = function () {
                    l !== o && ko(l), (f = 0), (r = c = a = l = o)
                  }),
                  (v.flush = function () {
                    return l === o ? u : b(Pa())
                  }),
                  v
                )
              }
              var Ta = Yr(function (t, e) {
                  return fr(t, 1, e)
                }),
                _a = Yr(function (t, e, n) {
                  return fr(t, ys(e) || 0, n)
                })
              function Ma(t, e) {
                if (
                  'function' != typeof t ||
                  (null != e && 'function' != typeof e)
                )
                  throw new St(i)
                var n = function () {
                  var r = arguments,
                    o = e ? e.apply(this, r) : r[0],
                    i = n.cache
                  if (i.has(o)) return i.get(o)
                  var a = t.apply(this, r)
                  return (n.cache = i.set(o, a) || i), a
                }
                return (n.cache = new (Ma.Cache || Kn)()), n
              }
              function Da(t) {
                if ('function' != typeof t) throw new St(i)
                return function () {
                  var e = arguments
                  switch (e.length) {
                    case 0:
                      return !t.call(this)
                    case 1:
                      return !t.call(this, e[0])
                    case 2:
                      return !t.call(this, e[0], e[1])
                    case 3:
                      return !t.call(this, e[0], e[1], e[2])
                  }
                  return !t.apply(this, e)
                }
              }
              Ma.Cache = Kn
              var La = xo(function (t, e) {
                  var n = (e =
                    1 == e.length && Va(e[0])
                      ? Me(e[0], Xe(ci()))
                      : Me(br(e, 1), Xe(ci()))).length
                  return Yr(function (r) {
                    for (var o = -1, i = wn(r.length, n); ++o < i; )
                      r[o] = e[o].call(this, r[o])
                    return Pe(t, this, r)
                  })
                }),
                Fa = Yr(function (t, e) {
                  var n = fn(e, li(Fa))
                  return Xo(t, l, o, e, n)
                }),
                Ua = Yr(function (t, e) {
                  var n = fn(e, li(Ua))
                  return Xo(t, c, o, e, n)
                }),
                ja = oi(function (t, e) {
                  return Xo(t, h, o, o, o, e)
                })
              function Ga(t, e) {
                return t === e || (t != t && e != e)
              }
              var Ha = Ko(Pr),
                za = Ko(function (t, e) {
                  return t >= e
                }),
                Qa = Br(
                  (function () {
                    return arguments
                  })(),
                )
                  ? Br
                  : function (t) {
                      return (
                        ns(t) && Dt.call(t, 'callee') && !qt.call(t, 'callee')
                      )
                    },
                Va = r.isArray,
                Wa = Ae
                  ? Xe(Ae)
                  : function (t) {
                      return ns(t) && Nr(t) == _
                    }
              function Ja(t) {
                return null != t && ts(t.length) && !$a(t)
              }
              function Ka(t) {
                return ns(t) && Ja(t)
              }
              var qa = ve || yu,
                Za = xe
                  ? Xe(xe)
                  : function (t) {
                      return ns(t) && Nr(t) == A
                    }
              function Ya(t) {
                if (!ns(t)) return !1
                var e = Nr(t)
                return (
                  e == x ||
                  '[object DOMException]' == e ||
                  ('string' == typeof t.message &&
                    'string' == typeof t.name &&
                    !is(t))
                )
              }
              function $a(t) {
                if (!es(t)) return !1
                var e = Nr(t)
                return (
                  e == E ||
                  e == k ||
                  '[object AsyncFunction]' == e ||
                  '[object Proxy]' == e
                )
              }
              function Xa(t) {
                return 'number' == typeof t && t == gs(t)
              }
              function ts(t) {
                return 'number' == typeof t && t > -1 && t % 1 == 0 && t <= p
              }
              function es(t) {
                var e = typeof t
                return null != t && ('object' == e || 'function' == e)
              }
              function ns(t) {
                return null != t && 'object' == typeof t
              }
              var rs = Ee
                ? Xe(Ee)
                : function (t) {
                    return ns(t) && mi(t) == R
                  }
              function os(t) {
                return 'number' == typeof t || (ns(t) && Nr(t) == N)
              }
              function is(t) {
                if (!ns(t) || Nr(t) != P) return !1
                var e = Jt(t)
                if (null === e) return !0
                var n = Dt.call(e, 'constructor') && e.constructor
                return (
                  'function' == typeof n && n instanceof n && Mt.call(n) == jt
                )
              }
              var as = ke
                ? Xe(ke)
                : function (t) {
                    return ns(t) && Nr(t) == O
                  }
              var ss = Re
                ? Xe(Re)
                : function (t) {
                    return ns(t) && mi(t) == S
                  }
              function us(t) {
                return 'string' == typeof t || (!Va(t) && ns(t) && Nr(t) == I)
              }
              function ls(t) {
                return 'symbol' == typeof t || (ns(t) && Nr(t) == B)
              }
              var cs = Ne
                ? Xe(Ne)
                : function (t) {
                    return ns(t) && ts(t.length) && !!ue[Nr(t)]
                  }
              var fs = Ko(Ur),
                hs = Ko(function (t, e) {
                  return t <= e
                })
              function ds(t) {
                if (!t) return []
                if (Ja(t)) return us(t) ? gn(t) : Io(t)
                if ($t && t[$t])
                  return (function (t) {
                    for (var e, n = []; !(e = t.next()).done; ) n.push(e.value)
                    return n
                  })(t[$t]())
                var e = mi(t)
                return (e == R ? ln : e == S ? hn : Gs)(t)
              }
              function ps(t) {
                return t
                  ? (t = ys(t)) === d || t === -1 / 0
                    ? 17976931348623157e292 * (t < 0 ? -1 : 1)
                    : t == t
                      ? t
                      : 0
                  : 0 === t
                    ? t
                    : 0
              }
              function gs(t) {
                var e = ps(t),
                  n = e % 1
                return e == e ? (n ? e - n : e) : 0
              }
              function ms(t) {
                return t ? ur(gs(t), 0, m) : 0
              }
              function ys(t) {
                if ('number' == typeof t) return t
                if (ls(t)) return g
                if (es(t)) {
                  var e = 'function' == typeof t.valueOf ? t.valueOf() : t
                  t = es(e) ? e + '' : e
                }
                if ('string' != typeof t) return 0 === t ? t : +t
                t = $e(t)
                var n = yt.test(t)
                return n || vt.test(t)
                  ? he(t.slice(2), n ? 2 : 8)
                  : mt.test(t)
                    ? g
                    : +t
              }
              function bs(t) {
                return Bo(t, Ts(t))
              }
              function vs(t) {
                return null == t ? '' : co(t)
              }
              var ws = _o(function (t, e) {
                  if (Ri(e) || Ja(e)) Bo(e, Bs(e), t)
                  else for (var n in e) Dt.call(e, n) && nr(t, n, e[n])
                }),
                As = _o(function (t, e) {
                  Bo(e, Ts(e), t)
                }),
                xs = _o(function (t, e, n, r) {
                  Bo(e, Ts(e), t, r)
                }),
                Es = _o(function (t, e, n, r) {
                  Bo(e, Bs(e), t, r)
                }),
                ks = oi(sr)
              var Rs = Yr(function (t, e) {
                  t = Pt(t)
                  var n = -1,
                    r = e.length,
                    i = r > 2 ? e[2] : o
                  for (i && Ai(e[0], e[1], i) && (r = 1); ++n < r; )
                    for (
                      var a = e[n], s = Ts(a), u = -1, l = s.length;
                      ++u < l;
                    ) {
                      var c = s[u],
                        f = t[c]
                      ;(f === o || (Ga(f, Tt[c]) && !Dt.call(t, c))) &&
                        (t[c] = a[c])
                    }
                  return t
                }),
                Ns = Yr(function (t) {
                  return t.push(o, ei), Pe(Ms, o, t)
                })
              function Ps(t, e, n) {
                var r = null == t ? o : kr(t, e)
                return r === o ? n : r
              }
              function Cs(t, e) {
                return null != t && yi(t, e, Or)
              }
              var Os = zo(function (t, e, n) {
                  null != e &&
                    'function' != typeof e.toString &&
                    (e = Ut.call(e)),
                    (t[e] = n)
                }, eu(ou)),
                Ss = zo(function (t, e, n) {
                  null != e &&
                    'function' != typeof e.toString &&
                    (e = Ut.call(e)),
                    Dt.call(t, e) ? t[e].push(n) : (t[e] = [n])
                }, ci),
                Is = Yr(Ir)
              function Bs(t) {
                return Ja(t) ? Yn(t) : Lr(t)
              }
              function Ts(t) {
                return Ja(t) ? Yn(t, !0) : Fr(t)
              }
              var _s = _o(function (t, e, n) {
                  zr(t, e, n)
                }),
                Ms = _o(function (t, e, n, r) {
                  zr(t, e, n, r)
                }),
                Ds = oi(function (t, e) {
                  var n = {}
                  if (null == t) return n
                  var r = !1
                  ;(e = Me(e, function (e) {
                    return (e = Ao(e, t)), r || (r = e.length > 1), e
                  })),
                    Bo(t, ai(t), n),
                    r && (n = lr(n, 7, ni))
                  for (var o = e.length; o--; ) ho(n, e[o])
                  return n
                })
              var Ls = oi(function (t, e) {
                return null == t
                  ? {}
                  : (function (t, e) {
                      return Wr(t, e, function (e, n) {
                        return Cs(t, n)
                      })
                    })(t, e)
              })
              function Fs(t, e) {
                if (null == t) return {}
                var n = Me(ai(t), function (t) {
                  return [t]
                })
                return (
                  (e = ci(e)),
                  Wr(t, n, function (t, n) {
                    return e(t, n[0])
                  })
                )
              }
              var Us = $o(Bs),
                js = $o(Ts)
              function Gs(t) {
                return null == t ? [] : tn(t, Bs(t))
              }
              var Hs = Fo(function (t, e, n) {
                return (e = e.toLowerCase()), t + (n ? zs(e) : e)
              })
              function zs(t) {
                return Ys(vs(t).toLowerCase())
              }
              function Qs(t) {
                return (t = vs(t)) && t.replace(At, on).replace(ee, '')
              }
              var Vs = Fo(function (t, e, n) {
                  return t + (n ? '-' : '') + e.toLowerCase()
                }),
                Ws = Fo(function (t, e, n) {
                  return t + (n ? ' ' : '') + e.toLowerCase()
                }),
                Js = Lo('toLowerCase')
              var Ks = Fo(function (t, e, n) {
                return t + (n ? '_' : '') + e.toLowerCase()
              })
              var qs = Fo(function (t, e, n) {
                return t + (n ? ' ' : '') + Ys(e)
              })
              var Zs = Fo(function (t, e, n) {
                  return t + (n ? ' ' : '') + e.toUpperCase()
                }),
                Ys = Lo('toUpperCase')
              function $s(t, e, n) {
                return (
                  (t = vs(t)),
                  (e = n ? o : e) === o
                    ? (function (t) {
                        return ie.test(t)
                      })(t)
                      ? (function (t) {
                          return t.match(re) || []
                        })(t)
                      : (function (t) {
                          return t.match(ft) || []
                        })(t)
                    : t.match(e) || []
                )
              }
              var Xs = Yr(function (t, e) {
                  try {
                    return Pe(t, o, e)
                  } catch (t) {
                    return Ya(t) ? t : new kt(t)
                  }
                }),
                tu = oi(function (t, e) {
                  return (
                    Oe(e, function (e) {
                      ;(e = Fi(e)), ar(t, e, Sa(t[e], t))
                    }),
                    t
                  )
                })
              function eu(t) {
                return function () {
                  return t
                }
              }
              var nu = Go(),
                ru = Go(!0)
              function ou(t) {
                return t
              }
              function iu(t) {
                return Dr('function' == typeof t ? t : lr(t, 1))
              }
              var au = Yr(function (t, e) {
                  return function (n) {
                    return Ir(n, t, e)
                  }
                }),
                su = Yr(function (t, e) {
                  return function (n) {
                    return Ir(t, n, e)
                  }
                })
              function uu(t, e, n) {
                var r = Bs(e),
                  o = Er(e, r)
                null != n ||
                  (es(e) && (o.length || !r.length)) ||
                  ((n = e), (e = t), (t = this), (o = Er(e, Bs(e))))
                var i = !(es(n) && 'chain' in n && !n.chain),
                  a = $a(t)
                return (
                  Oe(o, function (n) {
                    var r = e[n]
                    ;(t[n] = r),
                      a &&
                        (t.prototype[n] = function () {
                          var e = this.__chain__
                          if (i || e) {
                            var n = t(this.__wrapped__)
                            return (
                              (n.__actions__ = Io(this.__actions__)).push({
                                func: r,
                                args: arguments,
                                thisArg: t,
                              }),
                              (n.__chain__ = e),
                              n
                            )
                          }
                          return r.apply(t, De([this.value()], arguments))
                        })
                  }),
                  t
                )
              }
              function lu() {}
              var cu = Vo(Me),
                fu = Vo(Ie),
                hu = Vo(Ue)
              function du(t) {
                return xi(t)
                  ? Je(Fi(t))
                  : (function (t) {
                      return function (e) {
                        return kr(e, t)
                      }
                    })(t)
              }
              var pu = Jo(),
                gu = Jo(!0)
              function mu() {
                return []
              }
              function yu() {
                return !1
              }
              var bu = Qo(function (t, e) {
                  return t + e
                }, 0),
                vu = Zo('ceil'),
                wu = Qo(function (t, e) {
                  return t / e
                }, 1),
                Au = Zo('floor')
              var xu,
                Eu = Qo(function (t, e) {
                  return t * e
                }, 1),
                ku = Zo('round'),
                Ru = Qo(function (t, e) {
                  return t - e
                }, 0)
              return (
                (Gn.after = function (t, e) {
                  if ('function' != typeof e) throw new St(i)
                  return (
                    (t = gs(t)),
                    function () {
                      if (--t < 1) return e.apply(this, arguments)
                    }
                  )
                }),
                (Gn.ary = Ca),
                (Gn.assign = ws),
                (Gn.assignIn = As),
                (Gn.assignInWith = xs),
                (Gn.assignWith = Es),
                (Gn.at = ks),
                (Gn.before = Oa),
                (Gn.bind = Sa),
                (Gn.bindAll = tu),
                (Gn.bindKey = Ia),
                (Gn.castArray = function () {
                  if (!arguments.length) return []
                  var t = arguments[0]
                  return Va(t) ? t : [t]
                }),
                (Gn.chain = da),
                (Gn.chunk = function (t, e, n) {
                  e = (n ? Ai(t, e, n) : e === o) ? 1 : vn(gs(e), 0)
                  var i = null == t ? 0 : t.length
                  if (!i || e < 1) return []
                  for (var a = 0, s = 0, u = r(pe(i / e)); a < i; )
                    u[s++] = oo(t, a, (a += e))
                  return u
                }),
                (Gn.compact = function (t) {
                  for (
                    var e = -1, n = null == t ? 0 : t.length, r = 0, o = [];
                    ++e < n;
                  ) {
                    var i = t[e]
                    i && (o[r++] = i)
                  }
                  return o
                }),
                (Gn.concat = function () {
                  var t = arguments.length
                  if (!t) return []
                  for (var e = r(t - 1), n = arguments[0], o = t; o--; )
                    e[o - 1] = arguments[o]
                  return De(Va(n) ? Io(n) : [n], br(e, 1))
                }),
                (Gn.cond = function (t) {
                  var e = null == t ? 0 : t.length,
                    n = ci()
                  return (
                    (t = e
                      ? Me(t, function (t) {
                          if ('function' != typeof t[1]) throw new St(i)
                          return [n(t[0]), t[1]]
                        })
                      : []),
                    Yr(function (n) {
                      for (var r = -1; ++r < e; ) {
                        var o = t[r]
                        if (Pe(o[0], this, n)) return Pe(o[1], this, n)
                      }
                    })
                  )
                }),
                (Gn.conforms = function (t) {
                  return (function (t) {
                    var e = Bs(t)
                    return function (n) {
                      return cr(n, t, e)
                    }
                  })(lr(t, 1))
                }),
                (Gn.constant = eu),
                (Gn.countBy = ma),
                (Gn.create = function (t, e) {
                  var n = Hn(t)
                  return null == e ? n : ir(n, e)
                }),
                (Gn.curry = function t(e, n, r) {
                  var i = Xo(e, 8, o, o, o, o, o, (n = r ? o : n))
                  return (i.placeholder = t.placeholder), i
                }),
                (Gn.curryRight = function t(e, n, r) {
                  var i = Xo(e, u, o, o, o, o, o, (n = r ? o : n))
                  return (i.placeholder = t.placeholder), i
                }),
                (Gn.debounce = Ba),
                (Gn.defaults = Rs),
                (Gn.defaultsDeep = Ns),
                (Gn.defer = Ta),
                (Gn.delay = _a),
                (Gn.difference = Gi),
                (Gn.differenceBy = Hi),
                (Gn.differenceWith = zi),
                (Gn.drop = function (t, e, n) {
                  var r = null == t ? 0 : t.length
                  return r
                    ? oo(t, (e = n || e === o ? 1 : gs(e)) < 0 ? 0 : e, r)
                    : []
                }),
                (Gn.dropRight = function (t, e, n) {
                  var r = null == t ? 0 : t.length
                  return r
                    ? oo(
                        t,
                        0,
                        (e = r - (e = n || e === o ? 1 : gs(e))) < 0 ? 0 : e,
                      )
                    : []
                }),
                (Gn.dropRightWhile = function (t, e) {
                  return t && t.length ? go(t, ci(e, 3), !0, !0) : []
                }),
                (Gn.dropWhile = function (t, e) {
                  return t && t.length ? go(t, ci(e, 3), !0) : []
                }),
                (Gn.fill = function (t, e, n, r) {
                  var i = null == t ? 0 : t.length
                  return i
                    ? (n &&
                        'number' != typeof n &&
                        Ai(t, e, n) &&
                        ((n = 0), (r = i)),
                      (function (t, e, n, r) {
                        var i = t.length
                        for (
                          (n = gs(n)) < 0 && (n = -n > i ? 0 : i + n),
                            (r = r === o || r > i ? i : gs(r)) < 0 && (r += i),
                            r = n > r ? 0 : ms(r);
                          n < r;
                        )
                          t[n++] = e
                        return t
                      })(t, e, n, r))
                    : []
                }),
                (Gn.filter = function (t, e) {
                  return (Va(t) ? Be : yr)(t, ci(e, 3))
                }),
                (Gn.flatMap = function (t, e) {
                  return br(ka(t, e), 1)
                }),
                (Gn.flatMapDeep = function (t, e) {
                  return br(ka(t, e), d)
                }),
                (Gn.flatMapDepth = function (t, e, n) {
                  return (n = n === o ? 1 : gs(n)), br(ka(t, e), n)
                }),
                (Gn.flatten = Wi),
                (Gn.flattenDeep = function (t) {
                  return (null == t ? 0 : t.length) ? br(t, d) : []
                }),
                (Gn.flattenDepth = function (t, e) {
                  return (null == t ? 0 : t.length)
                    ? br(t, (e = e === o ? 1 : gs(e)))
                    : []
                }),
                (Gn.flip = function (t) {
                  return Xo(t, 512)
                }),
                (Gn.flow = nu),
                (Gn.flowRight = ru),
                (Gn.fromPairs = function (t) {
                  for (
                    var e = -1, n = null == t ? 0 : t.length, r = {};
                    ++e < n;
                  ) {
                    var o = t[e]
                    r[o[0]] = o[1]
                  }
                  return r
                }),
                (Gn.functions = function (t) {
                  return null == t ? [] : Er(t, Bs(t))
                }),
                (Gn.functionsIn = function (t) {
                  return null == t ? [] : Er(t, Ts(t))
                }),
                (Gn.groupBy = Aa),
                (Gn.initial = function (t) {
                  return (null == t ? 0 : t.length) ? oo(t, 0, -1) : []
                }),
                (Gn.intersection = Ki),
                (Gn.intersectionBy = qi),
                (Gn.intersectionWith = Zi),
                (Gn.invert = Os),
                (Gn.invertBy = Ss),
                (Gn.invokeMap = xa),
                (Gn.iteratee = iu),
                (Gn.keyBy = Ea),
                (Gn.keys = Bs),
                (Gn.keysIn = Ts),
                (Gn.map = ka),
                (Gn.mapKeys = function (t, e) {
                  var n = {}
                  return (
                    (e = ci(e, 3)),
                    Ar(t, function (t, r, o) {
                      ar(n, e(t, r, o), t)
                    }),
                    n
                  )
                }),
                (Gn.mapValues = function (t, e) {
                  var n = {}
                  return (
                    (e = ci(e, 3)),
                    Ar(t, function (t, r, o) {
                      ar(n, r, e(t, r, o))
                    }),
                    n
                  )
                }),
                (Gn.matches = function (t) {
                  return Gr(lr(t, 1))
                }),
                (Gn.matchesProperty = function (t, e) {
                  return Hr(t, lr(e, 1))
                }),
                (Gn.memoize = Ma),
                (Gn.merge = _s),
                (Gn.mergeWith = Ms),
                (Gn.method = au),
                (Gn.methodOf = su),
                (Gn.mixin = uu),
                (Gn.negate = Da),
                (Gn.nthArg = function (t) {
                  return (
                    (t = gs(t)),
                    Yr(function (e) {
                      return Qr(e, t)
                    })
                  )
                }),
                (Gn.omit = Ds),
                (Gn.omitBy = function (t, e) {
                  return Fs(t, Da(ci(e)))
                }),
                (Gn.once = function (t) {
                  return Oa(2, t)
                }),
                (Gn.orderBy = function (t, e, n, r) {
                  return null == t
                    ? []
                    : (Va(e) || (e = null == e ? [] : [e]),
                      Va((n = r ? o : n)) || (n = null == n ? [] : [n]),
                      Vr(t, e, n))
                }),
                (Gn.over = cu),
                (Gn.overArgs = La),
                (Gn.overEvery = fu),
                (Gn.overSome = hu),
                (Gn.partial = Fa),
                (Gn.partialRight = Ua),
                (Gn.partition = Ra),
                (Gn.pick = Ls),
                (Gn.pickBy = Fs),
                (Gn.property = du),
                (Gn.propertyOf = function (t) {
                  return function (e) {
                    return null == t ? o : kr(t, e)
                  }
                }),
                (Gn.pull = $i),
                (Gn.pullAll = Xi),
                (Gn.pullAllBy = function (t, e, n) {
                  return t && t.length && e && e.length ? Jr(t, e, ci(n, 2)) : t
                }),
                (Gn.pullAllWith = function (t, e, n) {
                  return t && t.length && e && e.length ? Jr(t, e, o, n) : t
                }),
                (Gn.pullAt = ta),
                (Gn.range = pu),
                (Gn.rangeRight = gu),
                (Gn.rearg = ja),
                (Gn.reject = function (t, e) {
                  return (Va(t) ? Be : yr)(t, Da(ci(e, 3)))
                }),
                (Gn.remove = function (t, e) {
                  var n = []
                  if (!t || !t.length) return n
                  var r = -1,
                    o = [],
                    i = t.length
                  for (e = ci(e, 3); ++r < i; ) {
                    var a = t[r]
                    e(a, r, t) && (n.push(a), o.push(r))
                  }
                  return Kr(t, o), n
                }),
                (Gn.rest = function (t, e) {
                  if ('function' != typeof t) throw new St(i)
                  return Yr(t, (e = e === o ? e : gs(e)))
                }),
                (Gn.reverse = ea),
                (Gn.sampleSize = function (t, e, n) {
                  return (
                    (e = (n ? Ai(t, e, n) : e === o) ? 1 : gs(e)),
                    (Va(t) ? Xn : Xr)(t, e)
                  )
                }),
                (Gn.set = function (t, e, n) {
                  return null == t ? t : to(t, e, n)
                }),
                (Gn.setWith = function (t, e, n, r) {
                  return (
                    (r = 'function' == typeof r ? r : o),
                    null == t ? t : to(t, e, n, r)
                  )
                }),
                (Gn.shuffle = function (t) {
                  return (Va(t) ? tr : ro)(t)
                }),
                (Gn.slice = function (t, e, n) {
                  var r = null == t ? 0 : t.length
                  return r
                    ? (n && 'number' != typeof n && Ai(t, e, n)
                        ? ((e = 0), (n = r))
                        : ((e = null == e ? 0 : gs(e)),
                          (n = n === o ? r : gs(n))),
                      oo(t, e, n))
                    : []
                }),
                (Gn.sortBy = Na),
                (Gn.sortedUniq = function (t) {
                  return t && t.length ? uo(t) : []
                }),
                (Gn.sortedUniqBy = function (t, e) {
                  return t && t.length ? uo(t, ci(e, 2)) : []
                }),
                (Gn.split = function (t, e, n) {
                  return (
                    n && 'number' != typeof n && Ai(t, e, n) && (e = n = o),
                    (n = n === o ? m : n >>> 0)
                      ? (t = vs(t)) &&
                        ('string' == typeof e || (null != e && !as(e))) &&
                        !(e = co(e)) &&
                        un(t)
                        ? Eo(gn(t), 0, n)
                        : t.split(e, n)
                      : []
                  )
                }),
                (Gn.spread = function (t, e) {
                  if ('function' != typeof t) throw new St(i)
                  return (
                    (e = null == e ? 0 : vn(gs(e), 0)),
                    Yr(function (n) {
                      var r = n[e],
                        o = Eo(n, 0, e)
                      return r && De(o, r), Pe(t, this, o)
                    })
                  )
                }),
                (Gn.tail = function (t) {
                  var e = null == t ? 0 : t.length
                  return e ? oo(t, 1, e) : []
                }),
                (Gn.take = function (t, e, n) {
                  return t && t.length
                    ? oo(t, 0, (e = n || e === o ? 1 : gs(e)) < 0 ? 0 : e)
                    : []
                }),
                (Gn.takeRight = function (t, e, n) {
                  var r = null == t ? 0 : t.length
                  return r
                    ? oo(
                        t,
                        (e = r - (e = n || e === o ? 1 : gs(e))) < 0 ? 0 : e,
                        r,
                      )
                    : []
                }),
                (Gn.takeRightWhile = function (t, e) {
                  return t && t.length ? go(t, ci(e, 3), !1, !0) : []
                }),
                (Gn.takeWhile = function (t, e) {
                  return t && t.length ? go(t, ci(e, 3)) : []
                }),
                (Gn.tap = function (t, e) {
                  return e(t), t
                }),
                (Gn.throttle = function (t, e, n) {
                  var r = !0,
                    o = !0
                  if ('function' != typeof t) throw new St(i)
                  return (
                    es(n) &&
                      ((r = 'leading' in n ? !!n.leading : r),
                      (o = 'trailing' in n ? !!n.trailing : o)),
                    Ba(t, e, { leading: r, maxWait: e, trailing: o })
                  )
                }),
                (Gn.thru = pa),
                (Gn.toArray = ds),
                (Gn.toPairs = Us),
                (Gn.toPairsIn = js),
                (Gn.toPath = function (t) {
                  return Va(t) ? Me(t, Fi) : ls(t) ? [t] : Io(Li(vs(t)))
                }),
                (Gn.toPlainObject = bs),
                (Gn.transform = function (t, e, n) {
                  var r = Va(t),
                    o = r || qa(t) || cs(t)
                  if (((e = ci(e, 4)), null == n)) {
                    var i = t && t.constructor
                    n = o ? (r ? new i() : []) : es(t) && $a(i) ? Hn(Jt(t)) : {}
                  }
                  return (
                    (o ? Oe : Ar)(t, function (t, r, o) {
                      return e(n, t, r, o)
                    }),
                    n
                  )
                }),
                (Gn.unary = function (t) {
                  return Ca(t, 1)
                }),
                (Gn.union = na),
                (Gn.unionBy = ra),
                (Gn.unionWith = oa),
                (Gn.uniq = function (t) {
                  return t && t.length ? fo(t) : []
                }),
                (Gn.uniqBy = function (t, e) {
                  return t && t.length ? fo(t, ci(e, 2)) : []
                }),
                (Gn.uniqWith = function (t, e) {
                  return (
                    (e = 'function' == typeof e ? e : o),
                    t && t.length ? fo(t, o, e) : []
                  )
                }),
                (Gn.unset = function (t, e) {
                  return null == t || ho(t, e)
                }),
                (Gn.unzip = ia),
                (Gn.unzipWith = aa),
                (Gn.update = function (t, e, n) {
                  return null == t ? t : po(t, e, wo(n))
                }),
                (Gn.updateWith = function (t, e, n, r) {
                  return (
                    (r = 'function' == typeof r ? r : o),
                    null == t ? t : po(t, e, wo(n), r)
                  )
                }),
                (Gn.values = Gs),
                (Gn.valuesIn = function (t) {
                  return null == t ? [] : tn(t, Ts(t))
                }),
                (Gn.without = sa),
                (Gn.words = $s),
                (Gn.wrap = function (t, e) {
                  return Fa(wo(e), t)
                }),
                (Gn.xor = ua),
                (Gn.xorBy = la),
                (Gn.xorWith = ca),
                (Gn.zip = fa),
                (Gn.zipObject = function (t, e) {
                  return bo(t || [], e || [], nr)
                }),
                (Gn.zipObjectDeep = function (t, e) {
                  return bo(t || [], e || [], to)
                }),
                (Gn.zipWith = ha),
                (Gn.entries = Us),
                (Gn.entriesIn = js),
                (Gn.extend = As),
                (Gn.extendWith = xs),
                uu(Gn, Gn),
                (Gn.add = bu),
                (Gn.attempt = Xs),
                (Gn.camelCase = Hs),
                (Gn.capitalize = zs),
                (Gn.ceil = vu),
                (Gn.clamp = function (t, e, n) {
                  return (
                    n === o && ((n = e), (e = o)),
                    n !== o && (n = (n = ys(n)) == n ? n : 0),
                    e !== o && (e = (e = ys(e)) == e ? e : 0),
                    ur(ys(t), e, n)
                  )
                }),
                (Gn.clone = function (t) {
                  return lr(t, 4)
                }),
                (Gn.cloneDeep = function (t) {
                  return lr(t, 5)
                }),
                (Gn.cloneDeepWith = function (t, e) {
                  return lr(t, 5, (e = 'function' == typeof e ? e : o))
                }),
                (Gn.cloneWith = function (t, e) {
                  return lr(t, 4, (e = 'function' == typeof e ? e : o))
                }),
                (Gn.conformsTo = function (t, e) {
                  return null == e || cr(t, e, Bs(e))
                }),
                (Gn.deburr = Qs),
                (Gn.defaultTo = function (t, e) {
                  return null == t || t != t ? e : t
                }),
                (Gn.divide = wu),
                (Gn.endsWith = function (t, e, n) {
                  ;(t = vs(t)), (e = co(e))
                  var r = t.length,
                    i = (n = n === o ? r : ur(gs(n), 0, r))
                  return (n -= e.length) >= 0 && t.slice(n, i) == e
                }),
                (Gn.eq = Ga),
                (Gn.escape = function (t) {
                  return (t = vs(t)) && Y.test(t) ? t.replace(q, an) : t
                }),
                (Gn.escapeRegExp = function (t) {
                  return (t = vs(t)) && it.test(t) ? t.replace(ot, '\\$&') : t
                }),
                (Gn.every = function (t, e, n) {
                  var r = Va(t) ? Ie : gr
                  return n && Ai(t, e, n) && (e = o), r(t, ci(e, 3))
                }),
                (Gn.find = ya),
                (Gn.findIndex = Qi),
                (Gn.findKey = function (t, e) {
                  return Ge(t, ci(e, 3), Ar)
                }),
                (Gn.findLast = ba),
                (Gn.findLastIndex = Vi),
                (Gn.findLastKey = function (t, e) {
                  return Ge(t, ci(e, 3), xr)
                }),
                (Gn.floor = Au),
                (Gn.forEach = va),
                (Gn.forEachRight = wa),
                (Gn.forIn = function (t, e) {
                  return null == t ? t : vr(t, ci(e, 3), Ts)
                }),
                (Gn.forInRight = function (t, e) {
                  return null == t ? t : wr(t, ci(e, 3), Ts)
                }),
                (Gn.forOwn = function (t, e) {
                  return t && Ar(t, ci(e, 3))
                }),
                (Gn.forOwnRight = function (t, e) {
                  return t && xr(t, ci(e, 3))
                }),
                (Gn.get = Ps),
                (Gn.gt = Ha),
                (Gn.gte = za),
                (Gn.has = function (t, e) {
                  return null != t && yi(t, e, Cr)
                }),
                (Gn.hasIn = Cs),
                (Gn.head = Ji),
                (Gn.identity = ou),
                (Gn.includes = function (t, e, n, r) {
                  ;(t = Ja(t) ? t : Gs(t)), (n = n && !r ? gs(n) : 0)
                  var o = t.length
                  return (
                    n < 0 && (n = vn(o + n, 0)),
                    us(t)
                      ? n <= o && t.indexOf(e, n) > -1
                      : !!o && ze(t, e, n) > -1
                  )
                }),
                (Gn.indexOf = function (t, e, n) {
                  var r = null == t ? 0 : t.length
                  if (!r) return -1
                  var o = null == n ? 0 : gs(n)
                  return o < 0 && (o = vn(r + o, 0)), ze(t, e, o)
                }),
                (Gn.inRange = function (t, e, n) {
                  return (
                    (e = ps(e)),
                    n === o ? ((n = e), (e = 0)) : (n = ps(n)),
                    (function (t, e, n) {
                      return t >= wn(e, n) && t < vn(e, n)
                    })((t = ys(t)), e, n)
                  )
                }),
                (Gn.invoke = Is),
                (Gn.isArguments = Qa),
                (Gn.isArray = Va),
                (Gn.isArrayBuffer = Wa),
                (Gn.isArrayLike = Ja),
                (Gn.isArrayLikeObject = Ka),
                (Gn.isBoolean = function (t) {
                  return !0 === t || !1 === t || (ns(t) && Nr(t) == w)
                }),
                (Gn.isBuffer = qa),
                (Gn.isDate = Za),
                (Gn.isElement = function (t) {
                  return ns(t) && 1 === t.nodeType && !is(t)
                }),
                (Gn.isEmpty = function (t) {
                  if (null == t) return !0
                  if (
                    Ja(t) &&
                    (Va(t) ||
                      'string' == typeof t ||
                      'function' == typeof t.splice ||
                      qa(t) ||
                      cs(t) ||
                      Qa(t))
                  )
                    return !t.length
                  var e = mi(t)
                  if (e == R || e == S) return !t.size
                  if (Ri(t)) return !Lr(t).length
                  for (var n in t) if (Dt.call(t, n)) return !1
                  return !0
                }),
                (Gn.isEqual = function (t, e) {
                  return Tr(t, e)
                }),
                (Gn.isEqualWith = function (t, e, n) {
                  var r = (n = 'function' == typeof n ? n : o) ? n(t, e) : o
                  return r === o ? Tr(t, e, o, n) : !!r
                }),
                (Gn.isError = Ya),
                (Gn.isFinite = function (t) {
                  return 'number' == typeof t && we(t)
                }),
                (Gn.isFunction = $a),
                (Gn.isInteger = Xa),
                (Gn.isLength = ts),
                (Gn.isMap = rs),
                (Gn.isMatch = function (t, e) {
                  return t === e || _r(t, e, hi(e))
                }),
                (Gn.isMatchWith = function (t, e, n) {
                  return (
                    (n = 'function' == typeof n ? n : o), _r(t, e, hi(e), n)
                  )
                }),
                (Gn.isNaN = function (t) {
                  return os(t) && t != +t
                }),
                (Gn.isNative = function (t) {
                  if (ki(t))
                    throw new kt(
                      'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
                    )
                  return Mr(t)
                }),
                (Gn.isNil = function (t) {
                  return null == t
                }),
                (Gn.isNull = function (t) {
                  return null === t
                }),
                (Gn.isNumber = os),
                (Gn.isObject = es),
                (Gn.isObjectLike = ns),
                (Gn.isPlainObject = is),
                (Gn.isRegExp = as),
                (Gn.isSafeInteger = function (t) {
                  return Xa(t) && t >= -9007199254740991 && t <= p
                }),
                (Gn.isSet = ss),
                (Gn.isString = us),
                (Gn.isSymbol = ls),
                (Gn.isTypedArray = cs),
                (Gn.isUndefined = function (t) {
                  return t === o
                }),
                (Gn.isWeakMap = function (t) {
                  return ns(t) && mi(t) == T
                }),
                (Gn.isWeakSet = function (t) {
                  return ns(t) && '[object WeakSet]' == Nr(t)
                }),
                (Gn.join = function (t, e) {
                  return null == t ? '' : je.call(t, e)
                }),
                (Gn.kebabCase = Vs),
                (Gn.last = Yi),
                (Gn.lastIndexOf = function (t, e, n) {
                  var r = null == t ? 0 : t.length
                  if (!r) return -1
                  var i = r
                  return (
                    n !== o &&
                      (i = (i = gs(n)) < 0 ? vn(r + i, 0) : wn(i, r - 1)),
                    e == e
                      ? (function (t, e, n) {
                          for (var r = n + 1; r--; ) if (t[r] === e) return r
                          return r
                        })(t, e, i)
                      : He(t, Ve, i, !0)
                  )
                }),
                (Gn.lowerCase = Ws),
                (Gn.lowerFirst = Js),
                (Gn.lt = fs),
                (Gn.lte = hs),
                (Gn.max = function (t) {
                  return t && t.length ? mr(t, ou, Pr) : o
                }),
                (Gn.maxBy = function (t, e) {
                  return t && t.length ? mr(t, ci(e, 2), Pr) : o
                }),
                (Gn.mean = function (t) {
                  return We(t, ou)
                }),
                (Gn.meanBy = function (t, e) {
                  return We(t, ci(e, 2))
                }),
                (Gn.min = function (t) {
                  return t && t.length ? mr(t, ou, Ur) : o
                }),
                (Gn.minBy = function (t, e) {
                  return t && t.length ? mr(t, ci(e, 2), Ur) : o
                }),
                (Gn.stubArray = mu),
                (Gn.stubFalse = yu),
                (Gn.stubObject = function () {
                  return {}
                }),
                (Gn.stubString = function () {
                  return ''
                }),
                (Gn.stubTrue = function () {
                  return !0
                }),
                (Gn.multiply = Eu),
                (Gn.nth = function (t, e) {
                  return t && t.length ? Qr(t, gs(e)) : o
                }),
                (Gn.noConflict = function () {
                  return ge._ === this && (ge._ = Gt), this
                }),
                (Gn.noop = lu),
                (Gn.now = Pa),
                (Gn.pad = function (t, e, n) {
                  t = vs(t)
                  var r = (e = gs(e)) ? pn(t) : 0
                  if (!e || r >= e) return t
                  var o = (e - r) / 2
                  return Wo(me(o), n) + t + Wo(pe(o), n)
                }),
                (Gn.padEnd = function (t, e, n) {
                  t = vs(t)
                  var r = (e = gs(e)) ? pn(t) : 0
                  return e && r < e ? t + Wo(e - r, n) : t
                }),
                (Gn.padStart = function (t, e, n) {
                  t = vs(t)
                  var r = (e = gs(e)) ? pn(t) : 0
                  return e && r < e ? Wo(e - r, n) + t : t
                }),
                (Gn.parseInt = function (t, e, n) {
                  return (
                    n || null == e ? (e = 0) : e && (e = +e),
                    xn(vs(t).replace(at, ''), e || 0)
                  )
                }),
                (Gn.random = function (t, e, n) {
                  if (
                    (n && 'boolean' != typeof n && Ai(t, e, n) && (e = n = o),
                    n === o &&
                      ('boolean' == typeof e
                        ? ((n = e), (e = o))
                        : 'boolean' == typeof t && ((n = t), (t = o))),
                    t === o && e === o
                      ? ((t = 0), (e = 1))
                      : ((t = ps(t)),
                        e === o ? ((e = t), (t = 0)) : (e = ps(e))),
                    t > e)
                  ) {
                    var r = t
                    ;(t = e), (e = r)
                  }
                  if (n || t % 1 || e % 1) {
                    var i = En()
                    return wn(
                      t + i * (e - t + fe('1e-' + ((i + '').length - 1))),
                      e,
                    )
                  }
                  return qr(t, e)
                }),
                (Gn.reduce = function (t, e, n) {
                  var r = Va(t) ? Le : qe,
                    o = arguments.length < 3
                  return r(t, ci(e, 4), n, o, dr)
                }),
                (Gn.reduceRight = function (t, e, n) {
                  var r = Va(t) ? Fe : qe,
                    o = arguments.length < 3
                  return r(t, ci(e, 4), n, o, pr)
                }),
                (Gn.repeat = function (t, e, n) {
                  return (
                    (e = (n ? Ai(t, e, n) : e === o) ? 1 : gs(e)), Zr(vs(t), e)
                  )
                }),
                (Gn.replace = function () {
                  var t = arguments,
                    e = vs(t[0])
                  return t.length < 3 ? e : e.replace(t[1], t[2])
                }),
                (Gn.result = function (t, e, n) {
                  var r = -1,
                    i = (e = Ao(e, t)).length
                  for (i || ((i = 1), (t = o)); ++r < i; ) {
                    var a = null == t ? o : t[Fi(e[r])]
                    a === o && ((r = i), (a = n)), (t = $a(a) ? a.call(t) : a)
                  }
                  return t
                }),
                (Gn.round = ku),
                (Gn.runInContext = t),
                (Gn.sample = function (t) {
                  return (Va(t) ? $n : $r)(t)
                }),
                (Gn.size = function (t) {
                  if (null == t) return 0
                  if (Ja(t)) return us(t) ? pn(t) : t.length
                  var e = mi(t)
                  return e == R || e == S ? t.size : Lr(t).length
                }),
                (Gn.snakeCase = Ks),
                (Gn.some = function (t, e, n) {
                  var r = Va(t) ? Ue : io
                  return n && Ai(t, e, n) && (e = o), r(t, ci(e, 3))
                }),
                (Gn.sortedIndex = function (t, e) {
                  return ao(t, e)
                }),
                (Gn.sortedIndexBy = function (t, e, n) {
                  return so(t, e, ci(n, 2))
                }),
                (Gn.sortedIndexOf = function (t, e) {
                  var n = null == t ? 0 : t.length
                  if (n) {
                    var r = ao(t, e)
                    if (r < n && Ga(t[r], e)) return r
                  }
                  return -1
                }),
                (Gn.sortedLastIndex = function (t, e) {
                  return ao(t, e, !0)
                }),
                (Gn.sortedLastIndexBy = function (t, e, n) {
                  return so(t, e, ci(n, 2), !0)
                }),
                (Gn.sortedLastIndexOf = function (t, e) {
                  if (null == t ? 0 : t.length) {
                    var n = ao(t, e, !0) - 1
                    if (Ga(t[n], e)) return n
                  }
                  return -1
                }),
                (Gn.startCase = qs),
                (Gn.startsWith = function (t, e, n) {
                  return (
                    (t = vs(t)),
                    (n = null == n ? 0 : ur(gs(n), 0, t.length)),
                    (e = co(e)),
                    t.slice(n, n + e.length) == e
                  )
                }),
                (Gn.subtract = Ru),
                (Gn.sum = function (t) {
                  return t && t.length ? Ze(t, ou) : 0
                }),
                (Gn.sumBy = function (t, e) {
                  return t && t.length ? Ze(t, ci(e, 2)) : 0
                }),
                (Gn.template = function (t, e, n) {
                  var r = Gn.templateSettings
                  n && Ai(t, e, n) && (e = o),
                    (t = vs(t)),
                    (e = xs({}, e, r, ti))
                  var i,
                    a,
                    s = xs({}, e.imports, r.imports, ti),
                    u = Bs(s),
                    l = tn(s, u),
                    c = 0,
                    f = e.interpolate || xt,
                    h = "__p += '",
                    d = Ct(
                      (e.escape || xt).source +
                        '|' +
                        f.source +
                        '|' +
                        (f === tt ? pt : xt).source +
                        '|' +
                        (e.evaluate || xt).source +
                        '|$',
                      'g',
                    ),
                    p =
                      '//# sourceURL=' +
                      (Dt.call(e, 'sourceURL')
                        ? (e.sourceURL + '').replace(/\s/g, ' ')
                        : 'lodash.templateSources[' + ++se + ']') +
                      '\n'
                  t.replace(d, function (e, n, r, o, s, u) {
                    return (
                      r || (r = o),
                      (h += t.slice(c, u).replace(Et, sn)),
                      n && ((i = !0), (h += "' +\n__e(" + n + ") +\n'")),
                      s && ((a = !0), (h += "';\n" + s + ";\n__p += '")),
                      r &&
                        (h +=
                          "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"),
                      (c = u + e.length),
                      e
                    )
                  }),
                    (h += "';\n")
                  var g = Dt.call(e, 'variable') && e.variable
                  if (g) {
                    if (ht.test(g))
                      throw new kt(
                        'Invalid `variable` option passed into `_.template`',
                      )
                  } else h = 'with (obj) {\n' + h + '\n}\n'
                  ;(h = (a ? h.replace(V, '') : h)
                    .replace(W, '$1')
                    .replace(J, '$1;')),
                    (h =
                      'function(' +
                      (g || 'obj') +
                      ') {\n' +
                      (g ? '' : 'obj || (obj = {});\n') +
                      "var __t, __p = ''" +
                      (i ? ', __e = _.escape' : '') +
                      (a
                        ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"
                        : ';\n') +
                      h +
                      'return __p\n}')
                  var m = Xs(function () {
                    return Rt(u, p + 'return ' + h).apply(o, l)
                  })
                  if (((m.source = h), Ya(m))) throw m
                  return m
                }),
                (Gn.times = function (t, e) {
                  if ((t = gs(t)) < 1 || t > p) return []
                  var n = m,
                    r = wn(t, m)
                  ;(e = ci(e)), (t -= m)
                  for (var o = Ye(r, e); ++n < t; ) e(n)
                  return o
                }),
                (Gn.toFinite = ps),
                (Gn.toInteger = gs),
                (Gn.toLength = ms),
                (Gn.toLower = function (t) {
                  return vs(t).toLowerCase()
                }),
                (Gn.toNumber = ys),
                (Gn.toSafeInteger = function (t) {
                  return t ? ur(gs(t), -9007199254740991, p) : 0 === t ? t : 0
                }),
                (Gn.toString = vs),
                (Gn.toUpper = function (t) {
                  return vs(t).toUpperCase()
                }),
                (Gn.trim = function (t, e, n) {
                  if ((t = vs(t)) && (n || e === o)) return $e(t)
                  if (!t || !(e = co(e))) return t
                  var r = gn(t),
                    i = gn(e)
                  return Eo(r, nn(r, i), rn(r, i) + 1).join('')
                }),
                (Gn.trimEnd = function (t, e, n) {
                  if ((t = vs(t)) && (n || e === o))
                    return t.slice(0, mn(t) + 1)
                  if (!t || !(e = co(e))) return t
                  var r = gn(t)
                  return Eo(r, 0, rn(r, gn(e)) + 1).join('')
                }),
                (Gn.trimStart = function (t, e, n) {
                  if ((t = vs(t)) && (n || e === o)) return t.replace(at, '')
                  if (!t || !(e = co(e))) return t
                  var r = gn(t)
                  return Eo(r, nn(r, gn(e))).join('')
                }),
                (Gn.truncate = function (t, e) {
                  var n = 30,
                    r = '...'
                  if (es(e)) {
                    var i = 'separator' in e ? e.separator : i
                    ;(n = 'length' in e ? gs(e.length) : n),
                      (r = 'omission' in e ? co(e.omission) : r)
                  }
                  var a = (t = vs(t)).length
                  if (un(t)) {
                    var s = gn(t)
                    a = s.length
                  }
                  if (n >= a) return t
                  var u = n - pn(r)
                  if (u < 1) return r
                  var l = s ? Eo(s, 0, u).join('') : t.slice(0, u)
                  if (i === o) return l + r
                  if ((s && (u += l.length - u), as(i))) {
                    if (t.slice(u).search(i)) {
                      var c,
                        f = l
                      for (
                        i.global || (i = Ct(i.source, vs(gt.exec(i)) + 'g')),
                          i.lastIndex = 0;
                        (c = i.exec(f));
                      )
                        var h = c.index
                      l = l.slice(0, h === o ? u : h)
                    }
                  } else if (t.indexOf(co(i), u) != u) {
                    var d = l.lastIndexOf(i)
                    d > -1 && (l = l.slice(0, d))
                  }
                  return l + r
                }),
                (Gn.unescape = function (t) {
                  return (t = vs(t)) && Z.test(t) ? t.replace(K, yn) : t
                }),
                (Gn.uniqueId = function (t) {
                  var e = ++Lt
                  return vs(t) + e
                }),
                (Gn.upperCase = Zs),
                (Gn.upperFirst = Ys),
                (Gn.each = va),
                (Gn.eachRight = wa),
                (Gn.first = Ji),
                uu(
                  Gn,
                  ((xu = {}),
                  Ar(Gn, function (t, e) {
                    Dt.call(Gn.prototype, e) || (xu[e] = t)
                  }),
                  xu),
                  { chain: !1 },
                ),
                (Gn.VERSION = '4.17.21'),
                Oe(
                  [
                    'bind',
                    'bindKey',
                    'curry',
                    'curryRight',
                    'partial',
                    'partialRight',
                  ],
                  function (t) {
                    Gn[t].placeholder = Gn
                  },
                ),
                Oe(['drop', 'take'], function (t, e) {
                  ;(Vn.prototype[t] = function (n) {
                    n = n === o ? 1 : vn(gs(n), 0)
                    var r =
                      this.__filtered__ && !e ? new Vn(this) : this.clone()
                    return (
                      r.__filtered__
                        ? (r.__takeCount__ = wn(n, r.__takeCount__))
                        : r.__views__.push({
                            size: wn(n, m),
                            type: t + (r.__dir__ < 0 ? 'Right' : ''),
                          }),
                      r
                    )
                  }),
                    (Vn.prototype[t + 'Right'] = function (e) {
                      return this.reverse()[t](e).reverse()
                    })
                }),
                Oe(['filter', 'map', 'takeWhile'], function (t, e) {
                  var n = e + 1,
                    r = 1 == n || 3 == n
                  Vn.prototype[t] = function (t) {
                    var e = this.clone()
                    return (
                      e.__iteratees__.push({ iteratee: ci(t, 3), type: n }),
                      (e.__filtered__ = e.__filtered__ || r),
                      e
                    )
                  }
                }),
                Oe(['head', 'last'], function (t, e) {
                  var n = 'take' + (e ? 'Right' : '')
                  Vn.prototype[t] = function () {
                    return this[n](1).value()[0]
                  }
                }),
                Oe(['initial', 'tail'], function (t, e) {
                  var n = 'drop' + (e ? '' : 'Right')
                  Vn.prototype[t] = function () {
                    return this.__filtered__ ? new Vn(this) : this[n](1)
                  }
                }),
                (Vn.prototype.compact = function () {
                  return this.filter(ou)
                }),
                (Vn.prototype.find = function (t) {
                  return this.filter(t).head()
                }),
                (Vn.prototype.findLast = function (t) {
                  return this.reverse().find(t)
                }),
                (Vn.prototype.invokeMap = Yr(function (t, e) {
                  return 'function' == typeof t
                    ? new Vn(this)
                    : this.map(function (n) {
                        return Ir(n, t, e)
                      })
                })),
                (Vn.prototype.reject = function (t) {
                  return this.filter(Da(ci(t)))
                }),
                (Vn.prototype.slice = function (t, e) {
                  t = gs(t)
                  var n = this
                  return n.__filtered__ && (t > 0 || e < 0)
                    ? new Vn(n)
                    : (t < 0 ? (n = n.takeRight(-t)) : t && (n = n.drop(t)),
                      e !== o &&
                        (n = (e = gs(e)) < 0 ? n.dropRight(-e) : n.take(e - t)),
                      n)
                }),
                (Vn.prototype.takeRightWhile = function (t) {
                  return this.reverse().takeWhile(t).reverse()
                }),
                (Vn.prototype.toArray = function () {
                  return this.take(m)
                }),
                Ar(Vn.prototype, function (t, e) {
                  var n = /^(?:filter|find|map|reject)|While$/.test(e),
                    r = /^(?:head|last)$/.test(e),
                    i = Gn[r ? 'take' + ('last' == e ? 'Right' : '') : e],
                    a = r || /^find/.test(e)
                  i &&
                    (Gn.prototype[e] = function () {
                      var e = this.__wrapped__,
                        s = r ? [1] : arguments,
                        u = e instanceof Vn,
                        l = s[0],
                        c = u || Va(e),
                        f = function (t) {
                          var e = i.apply(Gn, De([t], s))
                          return r && h ? e[0] : e
                        }
                      c &&
                        n &&
                        'function' == typeof l &&
                        1 != l.length &&
                        (u = c = !1)
                      var h = this.__chain__,
                        d = !!this.__actions__.length,
                        p = a && !h,
                        g = u && !d
                      if (!a && c) {
                        e = g ? e : new Vn(this)
                        var m = t.apply(e, s)
                        return (
                          m.__actions__.push({
                            func: pa,
                            args: [f],
                            thisArg: o,
                          }),
                          new Qn(m, h)
                        )
                      }
                      return p && g
                        ? t.apply(this, s)
                        : ((m = this.thru(f)),
                          p ? (r ? m.value()[0] : m.value()) : m)
                    })
                }),
                Oe(
                  ['pop', 'push', 'shift', 'sort', 'splice', 'unshift'],
                  function (t) {
                    var e = It[t],
                      n = /^(?:push|sort|unshift)$/.test(t) ? 'tap' : 'thru',
                      r = /^(?:pop|shift)$/.test(t)
                    Gn.prototype[t] = function () {
                      var t = arguments
                      if (r && !this.__chain__) {
                        var o = this.value()
                        return e.apply(Va(o) ? o : [], t)
                      }
                      return this[n](function (n) {
                        return e.apply(Va(n) ? n : [], t)
                      })
                    }
                  },
                ),
                Ar(Vn.prototype, function (t, e) {
                  var n = Gn[e]
                  if (n) {
                    var r = n.name + ''
                    Dt.call(Bn, r) || (Bn[r] = []),
                      Bn[r].push({ name: e, func: n })
                  }
                }),
                (Bn[Ho(o, 2).name] = [{ name: 'wrapper', func: o }]),
                (Vn.prototype.clone = function () {
                  var t = new Vn(this.__wrapped__)
                  return (
                    (t.__actions__ = Io(this.__actions__)),
                    (t.__dir__ = this.__dir__),
                    (t.__filtered__ = this.__filtered__),
                    (t.__iteratees__ = Io(this.__iteratees__)),
                    (t.__takeCount__ = this.__takeCount__),
                    (t.__views__ = Io(this.__views__)),
                    t
                  )
                }),
                (Vn.prototype.reverse = function () {
                  if (this.__filtered__) {
                    var t = new Vn(this)
                    ;(t.__dir__ = -1), (t.__filtered__ = !0)
                  } else (t = this.clone()).__dir__ *= -1
                  return t
                }),
                (Vn.prototype.value = function () {
                  var t = this.__wrapped__.value(),
                    e = this.__dir__,
                    n = Va(t),
                    r = e < 0,
                    o = n ? t.length : 0,
                    i = (function (t, e, n) {
                      var r = -1,
                        o = n.length
                      for (; ++r < o; ) {
                        var i = n[r],
                          a = i.size
                        switch (i.type) {
                          case 'drop':
                            t += a
                            break
                          case 'dropRight':
                            e -= a
                            break
                          case 'take':
                            e = wn(e, t + a)
                            break
                          case 'takeRight':
                            t = vn(t, e - a)
                        }
                      }
                      return { start: t, end: e }
                    })(0, o, this.__views__),
                    a = i.start,
                    s = i.end,
                    u = s - a,
                    l = r ? s : a - 1,
                    c = this.__iteratees__,
                    f = c.length,
                    h = 0,
                    d = wn(u, this.__takeCount__)
                  if (!n || (!r && o == u && d == u))
                    return mo(t, this.__actions__)
                  var p = []
                  t: for (; u-- && h < d; ) {
                    for (var g = -1, m = t[(l += e)]; ++g < f; ) {
                      var y = c[g],
                        b = y.iteratee,
                        v = y.type,
                        w = b(m)
                      if (2 == v) m = w
                      else if (!w) {
                        if (1 == v) continue t
                        break t
                      }
                    }
                    p[h++] = m
                  }
                  return p
                }),
                (Gn.prototype.at = ga),
                (Gn.prototype.chain = function () {
                  return da(this)
                }),
                (Gn.prototype.commit = function () {
                  return new Qn(this.value(), this.__chain__)
                }),
                (Gn.prototype.next = function () {
                  this.__values__ === o && (this.__values__ = ds(this.value()))
                  var t = this.__index__ >= this.__values__.length
                  return {
                    done: t,
                    value: t ? o : this.__values__[this.__index__++],
                  }
                }),
                (Gn.prototype.plant = function (t) {
                  for (var e, n = this; n instanceof zn; ) {
                    var r = ji(n)
                    ;(r.__index__ = 0),
                      (r.__values__ = o),
                      e ? (i.__wrapped__ = r) : (e = r)
                    var i = r
                    n = n.__wrapped__
                  }
                  return (i.__wrapped__ = t), e
                }),
                (Gn.prototype.reverse = function () {
                  var t = this.__wrapped__
                  if (t instanceof Vn) {
                    var e = t
                    return (
                      this.__actions__.length && (e = new Vn(this)),
                      (e = e.reverse()).__actions__.push({
                        func: pa,
                        args: [ea],
                        thisArg: o,
                      }),
                      new Qn(e, this.__chain__)
                    )
                  }
                  return this.thru(ea)
                }),
                (Gn.prototype.toJSON =
                  Gn.prototype.valueOf =
                  Gn.prototype.value =
                    function () {
                      return mo(this.__wrapped__, this.__actions__)
                    }),
                (Gn.prototype.first = Gn.prototype.head),
                $t &&
                  (Gn.prototype[$t] = function () {
                    return this
                  }),
                Gn
              )
            })()
            ;(ge._ = bn),
              (r = function () {
                return bn
              }.call(e, n, e, t)) === o || (t.exports = r)
          }.call(this)
      },
      968: (t, e, n) => {
        'use strict'
        n.d(e, { $: () => s })
        var r = n(400),
          o = n(537),
          i = n(910)
        function a(t, e) {
          return {
            address: (0, r.b)(t),
            storageKeys: e.map(
              (t, e) => (
                (0, i.MR)(
                  (0, o.Lo)(t, 32),
                  'invalid slot',
                  `storageKeys[${e}]`,
                  t,
                ),
                t.toLowerCase()
              ),
            ),
          }
        }
        function s(t) {
          if (Array.isArray(t))
            return t.map((e, n) =>
              Array.isArray(e)
                ? ((0, i.MR)(
                    2 === e.length,
                    'invalid slot set',
                    `value[${n}]`,
                    e,
                  ),
                  a(e[0], e[1]))
                : ((0, i.MR)(
                    null != e && 'object' == typeof e,
                    'invalid address-slot set',
                    'value',
                    t,
                  ),
                  a(e.address, e.storageKeys)),
            )
          ;(0, i.MR)(
            null != t && 'object' == typeof t,
            'invalid access list',
            'value',
            t,
          )
          const e = Object.keys(t).map((e) => {
            const n = t[e].reduce((t, e) => ((t[e] = !0), t), {})
            return a(e, Object.keys(n).sort())
          })
          return e.sort((t, e) => t.address.localeCompare(e.address)), e
        }
      },
      982: (t, e, n) => {
        'use strict'
        n.d(e, {
          Vw: () => c,
          Id: () => l,
          O8: () => a,
          po: () => h,
          Ow: () => s,
          ZJ: () => u,
          DH: () => i,
          ld: () => f,
        })
        const r =
            'object' == typeof globalThis && 'crypto' in globalThis
              ? globalThis.crypto
              : void 0,
          o = (t) => t instanceof Uint8Array,
          i = (t) =>
            new Uint32Array(
              t.buffer,
              t.byteOffset,
              Math.floor(t.byteLength / 4),
            ),
          a = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength),
          s = (t, e) => (t << (32 - e)) | (t >>> e)
        if (!(68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0]))
          throw new Error('Non little-endian hardware is not supported')
        function u(t) {
          if (
            ('string' == typeof t &&
              (t = (function (t) {
                if ('string' != typeof t)
                  throw new Error(
                    'utf8ToBytes expected string, got ' + typeof t,
                  )
                return new Uint8Array(new TextEncoder().encode(t))
              })(t)),
            !o(t))
          )
            throw new Error('expected Uint8Array, got ' + typeof t)
          return t
        }
        function l(...t) {
          const e = new Uint8Array(t.reduce((t, e) => t + e.length, 0))
          let n = 0
          return (
            t.forEach((t) => {
              if (!o(t)) throw new Error('Uint8Array expected')
              e.set(t, n), (n += t.length)
            }),
            e
          )
        }
        class c {
          clone() {
            return this._cloneInto()
          }
        }
        function f(t) {
          const e = (e) => t().update(u(e)).digest(),
            n = t()
          return (
            (e.outputLen = n.outputLen),
            (e.blockLen = n.blockLen),
            (e.create = () => t()),
            e
          )
        }
        function h(t = 32) {
          if (r && 'function' == typeof r.getRandomValues)
            return r.getRandomValues(new Uint8Array(t))
          throw new Error('crypto.getRandomValues must be defined')
        }
      },
    },
    r = {}
  function o(t) {
    var e = r[t]
    if (void 0 !== e) return e.exports
    var i = (r[t] = { id: t, loaded: !1, exports: {} })
    return n[t].call(i.exports, i, i.exports, o), (i.loaded = !0), i.exports
  }
  ;(o.m = n),
    (o.n = (t) => {
      var e = t && t.__esModule ? () => t.default : () => t
      return o.d(e, { a: e }), e
    }),
    (o.d = (t, e) => {
      for (var n in e)
        o.o(e, n) &&
          !o.o(t, n) &&
          Object.defineProperty(t, n, { enumerable: !0, get: e[n] })
    }),
    (o.f = {}),
    (o.e = (t) =>
      Promise.all(Object.keys(o.f).reduce((e, n) => (o.f[n](t, e), e), []))),
    (o.u = (t) =>
      'scripts/' +
      t +
      '.' +
      { 353: 'f398f262', 577: 'f742d574' }[t] +
      '.bundle.js'),
    (o.miniCssF = (t) => {}),
    (o.g = (function () {
      if ('object' == typeof globalThis) return globalThis
      try {
        return this || new Function('return this')()
      } catch (t) {
        if ('object' == typeof window) return window
      }
    })()),
    (o.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (t = {}),
    (e = 'web3-spa:'),
    (o.l = (n, r, i, a) => {
      if (t[n]) t[n].push(r)
      else {
        var s, u
        if (void 0 !== i)
          for (
            var l = document.getElementsByTagName('script'), c = 0;
            c < l.length;
            c++
          ) {
            var f = l[c]
            if (
              f.getAttribute('src') == n ||
              f.getAttribute('data-webpack') == e + i
            ) {
              s = f
              break
            }
          }
        s ||
          ((u = !0),
          ((s = document.createElement('script')).charset = 'utf-8'),
          o.nc && s.setAttribute('nonce', o.nc),
          s.setAttribute('data-webpack', e + i),
          (s.src = n)),
          (t[n] = [r])
        var h = (e, r) => {
            ;(s.onerror = s.onload = null), clearTimeout(d)
            var o = t[n]
            if (
              (delete t[n],
              s.parentNode && s.parentNode.removeChild(s),
              o && o.forEach((t) => t(r)),
              e)
            )
              return e(r)
          },
          d = setTimeout(
            h.bind(null, void 0, { type: 'timeout', target: s }),
            12e4,
          )
        ;(s.onerror = h.bind(null, s.onerror)),
          (s.onload = h.bind(null, s.onload)),
          u && document.head.appendChild(s)
      }
    }),
    (o.r = (t) => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 })
    }),
    (o.nmd = (t) => ((t.paths = []), t.children || (t.children = []), t)),
    (o.p = '/'),
    (() => {
      var t = { 792: 0 }
      o.f.j = (e, n) => {
        var r = o.o(t, e) ? t[e] : void 0
        if (0 !== r)
          if (r) n.push(r[2])
          else {
            var i = new Promise((n, o) => (r = t[e] = [n, o]))
            n.push((r[2] = i))
            var a = o.p + o.u(e),
              s = new Error()
            o.l(
              a,
              (n) => {
                if (o.o(t, e) && (0 !== (r = t[e]) && (t[e] = void 0), r)) {
                  var i = n && ('load' === n.type ? 'missing' : n.type),
                    a = n && n.target && n.target.src
                  ;(s.message =
                    'Loading chunk ' + e + ' failed.\n(' + i + ': ' + a + ')'),
                    (s.name = 'ChunkLoadError'),
                    (s.type = i),
                    (s.request = a),
                    r[1](s)
                }
              },
              'chunk-' + e,
              e,
            )
          }
      }
      var e = (e, n) => {
          var r,
            i,
            [a, s, u] = n,
            l = 0
          if (a.some((e) => 0 !== t[e])) {
            for (r in s) o.o(s, r) && (o.m[r] = s[r])
            if (u) u(o)
          }
          for (e && e(n); l < a.length; l++)
            (i = a[l]), o.o(t, i) && t[i] && t[i][0](), (t[i] = 0)
        },
        n = (self.webpackChunkweb3_spa = self.webpackChunkweb3_spa || [])
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)))
    })(),
    (() => {
      'use strict'
      var t = o(70),
        e = o(576),
        n = o(76),
        r = o(594)
      o(369)
      function i() {
        return (0, t.jsxs)('div', {
          className:
            'min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden select-none',
          children: [
            (0, t.jsxs)('div', {
              className: 'absolute inset-0 overflow-hidden pointer-events-none',
              children: [
                (0, t.jsx)('div', {
                  className:
                    'absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse',
                }),
                (0, t.jsx)('div', {
                  className:
                    'absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-delay-700',
                }),
                (0, t.jsx)('div', {
                  className:
                    'absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse-delay-1000',
                }),
              ],
            }),
            (0, t.jsx)('div', {
              className: 'container mx-auto px-4 py-16 md:py-24 relative z-10',
              children: (0, t.jsxs)('div', {
                className: 'max-w-4xl mx-auto text-center space-y-8',
                children: [
                  (0, t.jsxs)('div', {
                    className:
                      'inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8',
                    children: [
                      (0, t.jsxs)('span', {
                        className: 'relative flex h-2 w-2',
                        children: [
                          (0, t.jsx)('span', {
                            className:
                              'animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75',
                          }),
                          (0, t.jsx)('span', {
                            className:
                              'relative inline-flex rounded-full h-2 w-2 bg-green-500',
                          }),
                        ],
                      }),
                      (0, t.jsx)('span', {
                        className:
                          'text-sm text-white/90 font-medium select-none',
                        children: 'Web3 Powered',
                      }),
                    ],
                  }),
                  (0, t.jsxs)('h1', {
                    className:
                      'text-5xl md:text-7xl font-bold text-white mb-6 leading-tight',
                    children: [
                      'Welcome to the Future of',
                      ' ',
                      (0, t.jsx)('span', {
                        className:
                          'bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent',
                        children: 'Decentralized Apps',
                      }),
                    ],
                  }),
                  (0, t.jsx)('p', {
                    className:
                      'text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto',
                    children:
                      'Experience seamless blockchain interactions with our modern, user-friendly Web3 platform',
                  }),
                ],
              }),
            }),
          ],
        })
      }
      var a = o(8)
      function s() {
        const {
          account: e,
          isConnected: r,
          connect: o,
          disconnect: i,
        } = (0, a.A)()
        return (0, t.jsx)('header', {
          className:
            'fixed top-0 left-0 right-0 z-50 bg-indigo-950/80 backdrop-blur-md border-b border-white/10',
          children: (0, t.jsx)('div', {
            className: 'container mx-auto px-4',
            children: (0, t.jsxs)('div', {
              className: 'flex items-center justify-between h-16',
              children: [
                (0, t.jsxs)(n.N_, {
                  to: '/',
                  className: 'flex items-center space-x-2 group',
                  children: [
                    (0, t.jsx)('div', {
                      className:
                        'w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform',
                      children: (0, t.jsx)('span', {
                        className: 'text-white font-bold text-lg',
                        children: 'W3',
                      }),
                    }),
                    (0, t.jsx)('span', {
                      className: 'text-white font-bold text-xl hidden sm:block',
                      children: 'Web3 DApp',
                    }),
                  ],
                }),
                (0, t.jsx)('nav', {
                  className: 'absolute left-1/2 -translate-x-1/2',
                  children: (0, t.jsx)(n.N_, {
                    to: '/dapp',
                    className:
                      'px-6 py-2 text-white/90 hover:text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-200',
                    children: 'Launch DApp',
                  }),
                }),
                r
                  ? (0, t.jsxs)('div', {
                      className: 'flex items-center gap-3',
                      children: [
                        (0, t.jsx)('span', {
                          className:
                            'px-3 py-1 rounded-md bg-white/10 text-white/90 font-mono text-sm',
                          children:
                            ((s = e),
                            s ? `${s.slice(0, 6)}...${s.slice(-4)}` : ''),
                        }),
                        (0, t.jsx)('button', {
                          onClick: i,
                          className:
                            'px-3 py-2 bg-white/10 hover:bg-white/20 text-white font-medium rounded-md border border-white/10 transition-colors',
                          children: 'Disconnect',
                        }),
                      ],
                    })
                  : (0, t.jsxs)('button', {
                      onClick: async () => {
                        r ? i() : await o()
                      },
                      className:
                        'px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2 cursor-pointer',
                      children: [
                        (0, t.jsx)('svg', {
                          className: 'w-5 h-5',
                          fill: 'none',
                          stroke: 'currentColor',
                          viewBox: '0 0 24 24',
                          children: (0, t.jsx)('path', {
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeWidth: 2,
                            d: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z',
                          }),
                        }),
                        (0, t.jsx)('span', {
                          className: 'hidden sm:inline',
                          children: 'Connect Wallet',
                        }),
                        (0, t.jsx)('span', {
                          className: 'sm:hidden',
                          children: 'Connect',
                        }),
                      ],
                    }),
              ],
            }),
          }),
        })
        var s
      }
      function u(e) {
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(s, {}),
            (0, t.jsx)('main', { className: 'pt-16', children: e.children }),
          ],
        })
      }
      function l() {
        return (0, t.jsx)('div', {
          className:
            'min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center',
          children: (0, t.jsxs)('div', {
            className: 'text-center space-y-8',
            children: [
              (0, t.jsxs)('div', {
                className: 'relative w-24 h-24 mx-auto',
                children: [
                  (0, t.jsx)('div', {
                    className:
                      'absolute inset-0 border-4 border-white/20 rounded-full',
                  }),
                  (0, t.jsx)('div', {
                    className:
                      'absolute inset-0 border-4 border-transparent border-t-blue-400 border-r-purple-400 rounded-full animate-spin',
                  }),
                  (0, t.jsx)('div', {
                    className:
                      'absolute inset-3 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full animate-pulse',
                  }),
                  (0, t.jsx)('div', {
                    className: 'absolute inset-8 bg-white rounded-full',
                  }),
                ],
              }),
              (0, t.jsxs)('div', {
                className: 'space-y-3',
                children: [
                  (0, t.jsx)('h2', {
                    className: 'text-2xl font-bold text-white',
                    children: 'Loading',
                  }),
                  (0, t.jsxs)('div', {
                    className: 'flex items-center justify-center gap-2',
                    children: [
                      (0, t.jsx)('span', {
                        className:
                          'w-2 h-2 bg-blue-400 rounded-full animate-bounce',
                      }),
                      (0, t.jsx)('span', {
                        className:
                          'w-2 h-2 bg-purple-400 rounded-full animate-bounce-delay-100',
                      }),
                      (0, t.jsx)('span', {
                        className:
                          'w-2 h-2 bg-pink-400 rounded-full animate-bounce-delay-200',
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)('p', {
                className: 'text-white/60 text-sm',
                children: 'Preparing your experience...',
              }),
            ],
          }),
        })
      }
      const c = (0, r.lazy)(() => o.e(353).then(o.bind(o, 353))),
        f = (0, r.lazy)(() => o.e(577).then(o.bind(o, 577)))
      function h() {
        return (0, t.jsx)(r.Suspense, {
          fallback: (0, t.jsx)(l, {}),
          children: (0, t.jsx)(u, { children: (0, t.jsx)(n.sv, {}) }),
        })
      }
      const d = [],
        p = {
          path: '/',
          element: (0, t.jsx)(h, {}),
          children: [
            { path: '/', element: (0, t.jsx)(i, {}) },
            { path: '/dapp', element: (0, t.jsx)(c, {}) },
            { path: '*', element: (0, t.jsx)(f, {}) },
            { path: '/404', element: (0, t.jsx)(f, {}) },
          ],
        }
      d.push(p)
      const g = d
      function m() {
        return (0, n.Ye)(g)
      }
      var y = (t, e, n, r, o, i, a, s) => {
          let u = document.documentElement,
            l = ['light', 'dark']
          function c(e) {
            ;(Array.isArray(t) ? t : [t]).forEach((t) => {
              let n = 'class' === t,
                r = n && i ? o.map((t) => i[t] || t) : o
              n
                ? (u.classList.remove(...r),
                  u.classList.add(i && i[e] ? i[e] : e))
                : u.setAttribute(t, e)
            }),
              (function (t) {
                s && l.includes(t) && (u.style.colorScheme = t)
              })(e)
          }
          if (r) c(r)
          else
            try {
              let t = localStorage.getItem(e) || n
              c(
                a && 'system' === t
                  ? window.matchMedia('(prefers-color-scheme: dark)').matches
                    ? 'dark'
                    : 'light'
                  : t,
              )
            } catch (t) {}
        },
        b = r.createContext(void 0),
        v = { setTheme: (t) => {}, themes: [] },
        w =
          (r.memo(
            ({
              forcedTheme: t,
              storageKey: e,
              attribute: n,
              enableSystem: o,
              enableColorScheme: i,
              defaultTheme: a,
              value: s,
              themes: u,
              nonce: l,
              scriptProps: c,
            }) => {
              let f = JSON.stringify([n, e, a, t, u, s, o, i]).slice(1, -1)
              return r.createElement('script', {
                ...c,
                suppressHydrationWarning: !0,
                nonce: 'undefined' == typeof window ? l : '',
                dangerouslySetInnerHTML: { __html: `(${y.toString()})(${f})` },
              })
            },
          ),
          o(136))
      const A = ({ ...e }) => {
          const { theme: n = 'system' } = null != (o = r.useContext(b)) ? o : v
          var o
          return (0, t.jsx)(w.l$, {
            theme: n,
            className: 'toaster group',
            style: {
              '--normal-bg': 'var(--popover)',
              '--normal-text': 'var(--popover-foreground)',
              '--normal-border': 'var(--border)',
            },
            ...e,
          })
        },
        x = document.getElementById('root')
      if (!x) throw new Error('Root element not found')
      ;(0, e.H)(x).render(
        (0, t.jsxs)(n.Kd, {
          basename: '/app',
          children: [
            (0, t.jsx)(m, {}),
            (0, t.jsx)(A, { richColors: !0, position: 'top-center' }),
          ],
        }),
      )
    })()
})()
//# sourceMappingURL=main.50ea3aa8.bundle.js.map
