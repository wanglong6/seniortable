# Seniortable

基于 Web 的 JavaScript Canvas 电子表格，它拥有更好的运行和渲染性能，不依赖任何框架，只实现核心引擎，同时提供丰富便捷的 API 给予开发者快速操控引擎的能力。

> 本项目不提供工具栏界面，开发者需根据自己的场景结合 API 创造属于自己的电子表格应用。

![GitHub](https://img.shields.io/github/license/myliang/x-spreadsheet.svg)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/myliang/x-spreadsheet.svg)
[![Join the chat at https://gitter.im/x-datav/spreadsheet](https://badges.gitter.im/x-datav/spreadsheet.svg)](https://gitter.im/x-datav/spreadsheet?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)


## 特性
  - Canvas 高性能渲染
  - 丰富的公有 API
  - 灵活的插件扩展机制
  - 兼容 Excel 功能


## 安装

```shell
npm install seniortable
```

```html
<div id="seniortable-demo"></div>
```

```javascript
import Seniortable from "seniortable";

const ST = new Spreadsheet("#seniortable-demo");
ST.loadData({}); // 加载数据
ST.onChange(data => {
  // 检测到数据变化时可以保存到数据库
});
```

```javascript
// 默认配置项
{
  showGrid: true,
  view: {
    height: () => document.documentElement.clientHeight,
    width: () => document.documentElement.clientWidth,
  },
  row: {
    len: 100,
    height: 25,
  },
  col: {
    len: 26,
    width: 100,
    indexWidth: 60,
    minWidth: 60,
  },
  style: {
    bgcolor: '#ffffff',
    align: 'left',
    valign: 'middle',
    textwrap: false,
    strike: false,
    underline: false,
    color: '#0a0a0a',
    font: {
      name: 'Helvetica',
      size: 10,
      bold: false,
      italic: false,
    },
  },
}
```

## 开发环境

```sheel
git clone https://github.com/wanglong6/seniortable.git
cd seniortable
npm install
npm run dev
```

打开浏览器访问 http://127.0.0.1:8080

## API 参考手册

### 公有方法
<table>
<tr>
    <td>方法</td>
    <td>说明</td>
</tr>
<tr>
    <td>
      <b>loadData(data)</b>
      <div><sub>@param json data - 数据</sub></div>
    </td>
    <td>载入全部数据</td>
</tr>
<tr>
    <td>
      <div><b>getData()</b></div>
    </td>
    <td>获取全部数据</td>
</tr>
<tr>
    <td>
      <div><b>undo()</b></div>
    </td>
    <td>撤销</td>
</tr>
<tr>
    <td>
      <div><b>redo()</b></div>
    </td>
    <td>重做</td>
</tr>
<tr>
    <td>
      <div><b>render()</b></div>
    </td>
    <td>渲染重绘表格</td>
</tr>
<tr>
    <td>
      <div><b>getCell(ri, ci)</b></div>
      <div><sub>@param integer ri - 行索引</sub></div>
      <div><sub>@param integer ci - 列索引</sub></div>
    </td>
    <td>获取单元格数据</td>
</tr>
<tr>
    <td>
      <div><b>getSelectedCell()</b></div>
    </td>
    <td>获取选中的单元格数据，多个单元格只取左上角的</td>
</tr>
<tr>
    <td>
      <div><b>deleteSelectedRows()</b></div>
    </td>
    <td>删除选中的行</td>
</tr>
<tr>
    <td>
      <div><b>deleteSelectedColumns()</b></div>
    </td>
    <td>删除选中的列</td>
</tr>
<tr>
    <td>
      <div><b>setCellText(ri, ci, text)</b></div>
      <div><sub>@param integer ri - 行索引</sub></div>
      <div><sub>@param integer ci - 列索引</sub></div>
      <div><sub>@param string text - 文本</sub></div>
    </td>
    <td>设置单元格文本</td>
</tr>
<tr>
    <td>
      <div><b>setCellAttr(ri, ci, property, value)</b></div>
      <div><sub>@param integer ri - 行索引</sub></div>
      <div><sub>@param integer ci - 列索引</sub></div>
      <div><sub>@param string property - 属性</sub></div>
      <div><sub>@param string value - 值</sub></div>
    </td>
    <td>设置单元格属性</td>
</tr>
<tr>
    <td>
      <div><b>setSelectedCellAttr(property, value)</b></div>
      <div><sub>@param string property - 属性</sub></div>
      <div><sub>@param string value - 值</sub></div>
    </td>
    <td>设置单元格属性</td>
</tr>
<tr>
    <td>
      <div><b>mergeSelectedCells()</b></div>
    </td>
    <td>合并选中的单元格</td>
</tr>
<tr>
    <td>
      <div><b>unmergeSelectedCells()</b></div>
    </td>
    <td>拆分选中的单元格</td>
</tr>
<tr>
    <td>
      <div><b>formulaSelectedCell()</b></div>
    </td>
    <td>选中的单元格计算公式</td>
</tr>
<tr>
    <td>
      <div><b>freeze(ri, ci)</b></div>
      <div><sub>@param integer ri - 行索引</sub></div>
      <div><sub>@param integer ci - 列索引</sub></div>
    </td>
    <td>冻结指定行和列，设置(0,0) 可以解除冻结</td>
</tr>
</table> 

方法 | 说明
-|-
loadData(data) <br> @param json data: 数据 | 载入全部数据
getData() | 获取全部数据  
undo() | 撤销
redo() | 重做
render() | 渲染重绘表格
getCell(ri, ci) <br> @param int ri: 行索引<br>@param int ci: 列索引 | 获取单元格数据 |
getSelectedCell() | 获取选中的单元格数据，多个单元格只取左上角的 |
deleteSelectedRows() | 删除选中的行 |
deleteSelectedColumns() | 删除选中的列 |
setCellText(ri, ci, text) <br> @param int ri: 行索引<br>@param int ci: 列索引<br>@param string text: 文本 | 设置单元格文本
setCellAttr(ri, ci, property, value) <br> @param int ri: 行索引<br>@param int ci: 列索引<br>@param string property: 属性<br>@param string value: 值 | 设置单元格属性
setSelectedCellAttr(property, value) <br> @param string property: 属性<br>@param string value: 值 | 设置选中的单元格属性
mergeSelectedCells() | 合并选中的单元格
unmergeSelectedCells() | 拆分选中的单元格
formulaSelectedCell() | 选中的单元格计算公式
freeze(ri, ci) | 冻结指定行和列，设置(0,0) 可以解除冻结

#### 附录1. 参数含义对照表
参数 | 含义
-|-
ri | 行的索引
ci | 列的索引
data | 表格数据
property | 属性
value | 值

#### 附录2. 单元格属性列表
属性 | 值 | 说明
-|-|-
font-name | string | 文本字体
font-size | 8 ~ 20 | 文本字号（单位像素）
font-bold | true / false | 字体是否加粗
font-italic | true / false | 文本是否斜体
underline | true / false | 文本是否有下划线
strike | true / false | 文本是否有删除线
color | #FFFFFF | 文本颜色十六进制码
bgcolor | #FFFFFF | 单元格背景颜色十六进制码
align | left / center/ right | 文本水平对齐方式
valign | top / middle/ bottom | 文本垂直对齐方式
textwrap | true / false | 文本是否自动换行
border | {...} | 边框样式对象 `附录3`

#### 附录3. 单元格边框样式对象
属性 | 值 | 说明
-|-|-
mode | all / inside / horizontal / vertical / outside / top / bottom / left / right | 边线模式
style | thin / medium / thick / dashed / dotted | 边线样式
color | #FFFFFF | 边线颜色十六进制码

### 公有事件
事件 | 回调参数 |  说明
-|-|-
onChange(cb) | `$1` 全部数据 | 单元格内容改变时触发

## 浏览器支持

Modern browsers (chrome, firefox, Safari)

## 开源许可证

GNU General Public License
