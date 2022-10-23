import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as t,d as e}from"./app.6a6b0b18.js";const s={},i=e(`<h1 id="\u81EA\u5B9A\u4E49\u6CE8\u89E3" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u6CE8\u89E3" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u6CE8\u89E3</h1><h2 id="\u6CE8\u89E3\u7684\u57FA\u672C\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u89E3\u7684\u57FA\u672C\u5143\u7D20" aria-hidden="true">#</a> \u6CE8\u89E3\u7684\u57FA\u672C\u5143\u7D20</h2><p>\u4E00\u4E2A\u7B80\u5355\u7684\u6CE8\u89E3\u7684\u4F8B\u5B50:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">BindView</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>\u4FEE\u9970\u7B26 \u8BBF\u95EE\u4FEE\u9970\u7B26\u5FC5\u987B\u4E3Apublic,\u4E0D\u5199\u9ED8\u8BA4\u4E3Apubic</p></li><li><p>\u5173\u952E\u5B57 <code>@interface</code></p></li><li><p>\u6CE8\u89E3\u540D\u79F0 \u81EA\u5B9A\u4E49\u6CE8\u89E3\u7684\u540D\u79F0 <code>BindView</code></p></li><li><p>\u6CE8\u89E3\u7C7B\u578B\u5143\u7D20 \u6CE8\u89E3\u7684\u5185\u5BB9 <code>int value()</code></p></li></ul><h2 id="\u4F7F\u7528\u5143\u6CE8\u89E3\u4FEE\u9970\u6CE8\u89E3" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u5143\u6CE8\u89E3\u4FEE\u9970\u6CE8\u89E3" aria-hidden="true">#</a> \u4F7F\u7528\u5143\u6CE8\u89E3\u4FEE\u9970\u6CE8\u89E3</h2><ul><li>@Target \u8868\u793A\u8BE5\u6CE8\u89E3\u5E94\u7528\u5230\u7684\u76EE\u6807\u7C7B\u578B</li><li>@Retention \u8868\u793A\u8BE5\u6CE8\u89E3\u5E94\u7528\u5230\u7684\u751F\u547D\u5468\u671F</li><li>@Document \u8868\u793A\u8BE5\u6CE8\u89E3\u88ABJavadoc \u6216\u7C7B\u4F3C\u7684\u5DE5\u5177\u6587\u6863\u5316</li><li>@Inherited \u8868\u793A\u6240\u6807\u8BB0\u7684\u7C7B\u7684\u5B50\u7C7B\u4E5F\u4F1A\u62E5\u6709\u8FD9\u4E2A\u6CE8\u89E3</li></ul><h4 id="target" tabindex="-1"><a class="header-anchor" href="#target" aria-hidden="true">#</a> @Target</h4><table><thead><tr><th>\u7C7B\u578B</th><th>\u4F5C\u7528</th></tr></thead><tbody><tr><td>ElementType.TYPE</td><td>\u5E94\u7528\u4E8E\u7C7B\u3001\u63A5\u53E3\uFF08\u5305\u62EC\u6CE8\u89E3\u7C7B\u578B\uFF09\u3001\u679A\u4E3E</td></tr><tr><td>ElementType.FIELD</td><td>\u5E94\u7528\u4E8E\u5C5E\u6027\uFF08\u5305\u62EC\u679A\u4E3E\u4E2D\u7684\u5E38\u91CF\uFF09</td></tr><tr><td>ElementType.METHOD</td><td>\u5E94\u7528\u4E8E\u65B9\u6CD5</td></tr><tr><td>ElementType.PARAMETER</td><td>\u5E94\u7528\u4E8E\u65B9\u6CD5\u7684\u5F62\u53C2</td></tr><tr><td>ElementType.CONSTRUCTOR</td><td>\u5E94\u7528\u4E8E\u6784\u9020\u51FD\u6570</td></tr><tr><td>ElementType.LOCAL_VARIABLE</td><td>\u5E94\u7528\u4E8E\u5C40\u90E8\u53D8\u91CF</td></tr><tr><td>ElementType.ANNOTATION_TYPE</td><td>\u5E94\u7528\u4E8E\u6CE8\u89E3\u7C7B\u578B</td></tr><tr><td>ElementType.PACKAGE</td><td>\u5E94\u7528\u4E8E\u5305</td></tr><tr><td>ElementType.TYPE_PARAMETER</td><td>1.8\u7248\u672C\u65B0\u589E\uFF0C\u5E94\u7528\u4E8E\u7C7B\u578B\u53D8\u91CF</td></tr><tr><td>ElementType.TYPE_USE</td><td>1.8\u7248\u672C\u65B0\u589E\uFF0C\u5E94\u7528\u4E8E\u4EFB\u4F55\u4F7F\u7528\u7C7B\u578B\u7684\u8BED\u53E5\u4E2D\uFF08\u4F8B\u5982\u58F0\u660E\u8BED\u53E5\u3001\u6CDB\u578B\u548C\u5F3A\u5236\u8F6C\u6362\u8BED\u53E5\u4E2D\u7684\u7C7B\u578B\uFF09</td></tr></tbody></table><h4 id="retention" tabindex="-1"><a class="header-anchor" href="#retention" aria-hidden="true">#</a> @Retention</h4><p>RetentionPolicy.SOURCE Java\u6E90\u6587\u4EF6\u9636\u6BB5</p><p>RetentionPolicy.CLASS \u7F16\u8BD1\u5230class\u6587\u4EF6\u9636\u6BB5</p><p>RetentionPolicy.RUNTIME \u8FD0\u884C\u671F\u9636\u6BB5</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">FIELD</span><span class="token punctuation">)</span> <span class="token comment">// \u5E94\u7528\u4E8E\u5C5E\u6027</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">SOURCE</span><span class="token punctuation">)</span> <span class="token comment">// Java\u6E90\u6587\u4EF6\u9636\u6BB5</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">BindView</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),c=[i];function p(d,l){return a(),t("div",null,c)}const u=n(s,[["render",p],["__file","\u81EA\u5B9A\u4E49\u6CE8\u89E3.html.vue"]]);export{u as default};
