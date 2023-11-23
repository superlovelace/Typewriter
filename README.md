# Typewriter

一个非常流畅顺滑的打字机效果

## 快速使用

### 1、导入

将`typewriter.css`和`typewriter.js`文件下载到本地

然后分别复制到目标项目的`css`和`js`文件夹

在网页代码中引入文件

```html
<link rel="stylesheet" type="text/css" href="css/typewriter.css">
<script type="text/javascript" src="js/typewriter.js"></script>
```

### 2、应用方法

- 在要实现此功能的元素上添加`id`标签：`text`
- 在这个元素的上层元素添加`id`标签：`output-container`
- 在元素上填充你要显示的文字，其中用`#`来表示换行

实例代码：

```html
<div id="output-container">
	<span id="text">
		Dear Bieber,#Words cannot express how excited I feel at this moment when I hear that you are going to visit China, and it is also my honor to recommend Beijing, one of the most popular traveling cities, to you.#Beijing, as the capital of 7 dynasties, is full of ancient relics. Architectures, towers and sculptures which reflect the profoundness of history can be seen everywhere. Moreover, snacks in Beijing, such as Roast duck, Soybean cake and Stewed Liver will offer a wonderful experience of tastes. Besides, you will be surely welcomed in this strange city, because people here are always friendly and warm-hearted.#When it comes to the way of traveling, you can choose a group tour. However, to get more fun, you might as well select self-service tour. I sincerely hope that you could take my recommendation into consideration and that you could enjoy your staying in Beijing.#Truly yours,#Li Ming
	</span>
</div>
```

然后回到浏览器即可查看效果

### 3、效果图


