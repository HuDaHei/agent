# agent

## Project setup

``` cmd
yarn install
```

### Compiles and hot-reloads for development

``` cmd
yarn serve
```

### Compiles and minifies for production

``` cmd
yarn build
```

### Lints and fixes files

``` cmd
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### 路由拆分自动加载views文件夹下的各个功能文件夹下router.js文件，sotre同理加载vuex_module.js

### 网络请求使用fetch

### 路由的权限在路由中的meta中permissionCode中控制好，code由后台给出， 不需要鉴权的路由设置permissionCode为freedom
