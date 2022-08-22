
import { Provider } from '@idealight-labs/anyweb-js-sdk'

const provider = new Provider({
    logger: console,
    appId: '',
})

console.log(provider)

export function cfx_login() {
    provider.request({
        method: 'cfx_accounts',
        params: [{
            availableNetwork: [1, 1029],
            scopes: ['baseInfo', 'identity'],
        }],
    }).then((data) => {
        const {chainId, networkId, address, code} = data
        console.log(
            'DApp 获取到的授权结果',
            chainId,
            networkId,
            address,
            code
        )
    }).catch((e) => {
        console.error('调用失败', e)
    })
}

export function cfx_logout() {
    provider.request({
        method: 'exit_accounts'
    }).then(() => {
        // 后续操作
    }).catch((e) => {
        console.error('调用失败', e)
    })
}

