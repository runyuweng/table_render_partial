## Version

antd@2.13.3

## Environment

- macbook pro   
- macOS Sierra 10.12.6  
- chrome 61.0.3163.100（正式版本）64bit

## Reproduction link

https://github.com/wengwengweng/table_render_partial

## Steps to reproduce
```
- npm i
- npm start
```

## What is expected?

When the page slides down,the table should render normally instead of just showing the section

## What is actually happening?
![](screen_shot/table.png)

## How to solve?
I found two ways to solve this problem：
1. Add transform: translate3d (0, 0, 0) for the DOM containing the table element;
2. Modify the value of overflow-x and overflow-y in .ant-table-scroll to initial;

## What case this problem?
I think it may be related to this：
https://bibwild.wordpress.com/2015/07/04/long-standing-bug-in-chrome-webkit-on-page-not-being-drawn-scrollauto-retina/