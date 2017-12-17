# welink-cli

Simple CLI for scaffolding welink projects

## 使用

### 安装 welink-cli

```
$ npm install -g welink-cli
```

### 创建项目模板

**使用 `init` 命令来创建模板：**
```bash
$ welink init <模板名称> <本地项目名称>
```


**使用 `list` 命令来查看全部模板：**

```
$ welink list
```
目前可以创建下列模板：

- airMonitoring-JL3-template
- airPressure-JL3-template
- aircleaner-JL3-template
- airconditioner-JL3-templat
- airpurifier-JL3-template
- alarmbutton-JL3-template
- curtain-JL3-template
- dimmer-JL3-template
- floorHeating-JL3-template
- fridge-template
- inductionLight-JL3-template
- panelSwitch-JL3-template
- smartLock-JL3-template


### 示例

使用 welink-cli 创建并运行一个冰箱控制模板

```
$ npm install -g welink-cli             # 全局安装 welink-cli 工具，如果之前安装过了则不需要执行这一步
$ welink init fridge-template project   # 创建“冰箱控制模板”到本地 project 目录下
$ cd project                            # 进入 project 目录
$ npm install                           # 安装项目依赖，也使用 yarn 进行安装
$ npm run dev                           # 在本地运行项目
```


## Q&A

**1. 执行 npm install 命令安装项目依赖等待时间太久、或者依赖安装失败怎么办？**

这是因为在国内特殊的网络环境下连接 npm 官方镜像速度过慢引起的，解决方案是使用淘宝 npm 镜像来替代官方镜像。操作步骤非常简单：

```
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
```

之后用 `cnpm` 命令来替代 `npm` 命令即可。

```
$ cd project                            # 进入 project 目录
$ cnpm install                          # 用淘宝 npm 镜像来安装项目依赖
```

## Support

Thanks for vue-cli project that give us some inspiration.
