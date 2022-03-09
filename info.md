第三方库/框架列表（全部存储在本地项目中）：

+ bootstrap-4.6.1（css样式库，文章页面主要库）
+ FontAwesome.Pro.5.15.1.Web
+ JQueryUI（UI界面库，滚动条插件前置库）
+ malihu-custom-scrollbar.js（鼠标滚动插件）
+ animate.css（css动画库）
+ highlight.js（代码高亮库）
+ clipboard.js（剪贴板库）
+ JQuery.js（基础框架运行库）
+ vanta系插件（暂未使用，动态背景库）
+ three.r119.js（WebGl渲染插件，vanta的前置库，暂未使用）
+ vue.js（暂未使用）

<hr>

section/section11|22|33|44/中，以数字命名的html文件为文章内容，小章（如1.1，1.2）单独占一个文件，小章的所有子章（如2.1.1，2.2.2，2.2.3）共用一个文件。

小章结构：

```html
<div class="container">
	<div class="row">
        <div class="col-md-12">
            <p>
                //这里写内容
            </p>
        </div>
        <table class='table table-bordered table-striped table-hover'>
            <tr class='table-primary'>
               <th>//表格头</th>
            </tr>
            <tr>
                <td>//表格</td>
            </tr>
        </table>
        <div class='col-md-12'>
                <pre class='language-xml text-left'>（language-xml可以换成language-javascript等其他语言，但是必须在language-xml所在es文件夹内引入相对应的js文件）
                <button type='button' class='btn btn-outline-primary' id='copy-button1' data-clipboard-target='.copyTarget1' name='copy'>Copy</button>
                <code class='copyTarget1'>//这里写代码；每个copyTarget值必须独一无二（例：代码块i：copyTarget1,代码块2：copyTarget2，代码块3：copyTarget3以此类推，），copy-button1与copyTarget的命名规则相同。
                </code>
             </pre>
             <p>//这里可以写文字</p>
             <img src="./img/2.3.11-4.jpg" alt="">//这里放图片
         </div>
    </div>
</div>
```

<hr/>

小章的子章结构：

```html
<div class="container">//主容器
    <div class="row">
         <div class="col-md-12">
             //这里写主容器内容
         	<div class="container">//子容器1
    			<div class="row">
            		<div class="col-md-12">
                        //这里写子容器1的内容
        			</div>
    			</div>
			</div>
             <div class="container">//子容器2
    			<div class="row">
            		<div class="col-md-12">
                        //这里写子容器2的内容
        			</div>
    			</div>
			</div>  
             <div class="container">//子容器3
    			<div class="row">
            		<div class="col-md-12">
                        //这里写子容器3的内容
        			</div>
    			</div>
			</div>
             ......
        </div>
    </div>
</div>
```



<hr>

文件夹列表：

![code](code.png)
