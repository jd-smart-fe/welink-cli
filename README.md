# welink-cli

Simple CLI for scaffolding welink projects

## 使用

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
$ npm install -g welink-cli             # 全局安装 welink-cli 工具
$ welink init fridge-template project   # 创建“冰箱控制模板”到本地 project 目录下
$ cd project                            # 进入 project 目录
$ npm install                           # 安装项目依赖，也使用 yarn 进行安装
$ npm run dev                           # 在本地运行项目
```


## Support

Thanks for vue-cli project that give us some inspiration.
