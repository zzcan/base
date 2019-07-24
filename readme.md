## 玩转webpack

### entry、output、loaders、plugins、mode

### 解析ES6和React JSX、解析Css、Less、Sass、解析图片和字体

- `babel-loader css-loader less-loader ts-loader file-loader thread-loader(多进程打包)`

### 热更新及原理

### 文件指纹策略“ chunkshash、hash、contenthash

### SplitChunksPlugin

### Tree Shaking的使用和原理  mode:production默认开启 `SideEffectsFlagPlugin` `UglifyJsPlugin`

### Scope Hoisting的使用和原理  mode:production默认开启 `ModuleConcatenationPlugin`

- 原理：将所有模块的代码按照引用顺序放在一个函数作用域里，然后适当的重命名一些变量以防止变量名冲突

- 对比：通过scope hoisting 可以减少函数声明代码和内存开销

### 代码分割和动态import

- 动态import 安装babel插件 @babel/plugin-syntax-dynamic-import

### Eslint

- Eslint与CI/CD集成

- Eslint与webpack集成 eslint-loader

### webpack 打包库和组件 `rollup`更适合

- 需要打包压缩版和非压缩版

- 支持AMD/CJS/ESM 模块引入  libraryTarget

### 优化构建时命令行的显示日志 `friendly-errors-webpack-plugin`

### 构建异常和中断处理

- 如何主动捕获并处理构建错误？

### 构建配置包设计

#### 设计原则

- 通用性

  * 业务开发者无需关注构建配置

  * 统一团队构建脚本

- 可维护性

  * 构建配置合理的拆分

  * README文档 ChangeLog文档等

- 质量

  * 冒烟测试、单元测试、测试覆盖率

  * 持续集成

#### 设计

- 通过多个配置文件管理不同环境的`webpack`配置  （通过 `webpack-merge` 组合配置）

  * 基础配置: `webpack.base.js`

    + 资源解析：解析ES6、React、Css、Less、图片、字体

    + 样式增强：CSS前缀补齐、px转换成rem

    + 目录清理

    + 多页面打包

    + 命令行信息显示优化

    + 错误捕获和处理

    + CSS提取成一个单独的文件

  * 开发环境: `webpack.dev.js`

    + 代码热更新：CSS热更新、JS热更新

    + `sourcemap`

  * 生产环境: `webpack.prod.js`

    + 代码压缩

    + 文件指纹

    + `Tree Shaking`

    + `Scope Hoisting`

    + 速度优化：基础包CDN

    + 体积优化：代码分割

  * SSR环境: `webpack.ssr.js`

    + `output` 的 `libraryTarget` 设置

    + CSS解析 `ignore`

- 抽离成一个`npm`包统一管理

  * 规范: Git commit日志、README、ESLint规范、Semver规范

  * 质量: 冒烟测试、单元测试、测试覆盖率和CI

- 目录结构设计 `lib`放置源代码、`test`放置测试代码

  ```
  project
  │
  └───test 
  │
  └───lib
  │   │   webpack.base.js
  │   │   webpack.dev.js
  │   │   webpack.prod.js
  │   │   webpack.ssr.js
  │   │   ...
  │   
  └───README.md
  │
  └───CHANGELOG.md
  │
  └───.eslintrc.js
  │
  └───package.json
  │
  └───index.js
  ```