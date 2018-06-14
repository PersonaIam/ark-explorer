# PersonaIm Explorer 3.0

> Designed and developed from the ground-up, using lean & fast developmental frameworks (Tailwind CSS & Vue.JS).

You can access it at [https://explorer.persona.im/](https://explorer.persona.im/).

## Build Setup

### 1. Clone the repository

```bash
git clone https://github.com/PersonaIam/persona-explorer
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Build for Production

#### 3.1 Mainnet

```bash
npm run build:mainnet
```

#### 3.2 Devnet

```bash
npm run build:devnet
```

#### 3.3 Custom

```bash
npm run build --network my-custom-network
```

If you wish to remove the `/#/` from your URLs you can follow those steps https://router.vuejs.org/en/essentials/history-mode.html.

### 4.1 Build

```bash
npm run build:mainnet --history
```

### 4.2 Development

```bash
npm run dev --env.routerMode=history
```

> Keep in mind that this requires you to run your own server and a running instance of nginx.

## 5. Development

#### Mainnet

```bash
npm run dev # or npm run dev:mainnet
```

#### Devnet

```bash
npm run dev:devnet
```

#### Custom

```bash
npm run dev --env.network=custom
```

#### Change Router Mode

```bash
npm run dev --env.routerMode=history
```

## 6. Testing

``` bash
$ npm run test
```

## 7. Security

If you discover a security vulnerability within this package, please send an e-mail to security@persona.im. All security vulnerabilities will be promptly addressed.

## 8. Contributing

* If you find any bugs, submit an [issue](../../issues) or open a [pull-request](../../pulls), helping us catch and fix them.
* Engage with other users and developers on [ARK Slack](https://ark.io/slack/).
* Join our [gitter](https://gitter.im/ark-developers/Lobby).
* [Contribute bounties](https://github.com/ArkEcosystem/ARK-Bounty-Program).

## 9. Credits

- [Brian Faust](https://github.com/faustbrian)
- [Lúcio Rubens](https://github.com/luciorubeens)
- [Alex Barnsley](https://github.com/alexbarnsley)
- [All Contributors](../../contributors)

## 10. License

[MIT](LICENSE)
