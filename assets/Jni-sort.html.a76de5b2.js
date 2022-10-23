import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,d as e}from"./app.6a6b0b18.js";const t={},i=e(`<h1 id="jni-\u6570\u7EC4\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#jni-\u6570\u7EC4\u6392\u5E8F" aria-hidden="true">#</a> JNI \u6570\u7EC4\u6392\u5E8F</h1><ul><li>MainActivity.kt</li></ul><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">val</span> arr <span class="token operator">=</span> <span class="token function">intArrayOf</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
Log<span class="token punctuation">.</span><span class="token function">i</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;Yang&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">&quot;\u6392\u5E8F\u524D\uFF1A&quot;</span></span><span class="token punctuation">)</span>
<span class="token function">print</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
<span class="token function">sort</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
Log<span class="token punctuation">.</span><span class="token function">i</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;Yang&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">&quot;\u6392\u5E8F\u540E:&quot;</span></span><span class="token punctuation">)</span>
<span class="token function">print</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>native-lib.cpp</li></ul><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token keyword">extern</span> <span class="token string">&quot;C&quot;</span>
JNIEXPORT <span class="token keyword">void</span> JNICALL
<span class="token function">Java_com_multi_jnistudy_MainActivity_sort</span><span class="token punctuation">(</span>JNIEnv <span class="token operator">*</span>env<span class="token punctuation">,</span> jobject thiz<span class="token punctuation">,</span> jintArray list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// list \u8FDB\u884C\u6392\u5E8F</span>
    <span class="token comment">// 1. \u83B7\u53D6list\u96C6\u5408, \u4F7F\u7528jint* \u63A5\u6536</span>
    jint <span class="token operator">*</span> arr <span class="token operator">=</span> env<span class="token operator">-&gt;</span><span class="token function">GetIntArrayElements</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> <span class="token keyword">nullptr</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 2. \u83B7\u53D6\u6570\u7EC4\u7684\u957F\u5EA6</span>
    <span class="token keyword">int</span> length <span class="token operator">=</span> env<span class="token operator">-&gt;</span><span class="token function">GetArrayLength</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * 3. \u8C03\u7528\u6392\u5E8F\u51FD\u6570
     *   \u53C2\u65701\uFF1A void* \u6570\u7EC4\u7684\u9996\u5730\u5740
     *   \u53C2\u65702\uFF1A \u6570\u7EC4\u7684\u5927\u5C0F\u957F\u5EA6
     *   \u53C2\u65703\uFF1A \u6570\u7EC4\u5143\u7D20\u6570\u636E\u7C7B\u578B\u7684\u5927\u5C0F
     *   \u53C2\u65704\uFF1A \u6570\u7EC4\u7684\u4E00\u4E2A\u6BD4\u8F83\u65B9\u6CD5\u6307\u9488(Comparable)
     */</span>
    <span class="token function">qsort</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> length<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token generic-function"><span class="token function">reinterpret_cast</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token keyword">int</span> <span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">void</span> <span class="token operator">*</span><span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">void</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>compare<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/**
     * 4. \u6267\u884CReleaseIntArrayElements\uFF0C\u540C\u6B65\u5230java\u8FDB\u884C\u6570\u636E\u66F4\u65B0
     *  \u53C2\u65703\uFF1Amode\u8BF4\u660E
     *  0-&gt;\u65E2\u8981\u540C\u6B65\u6570\u636E\u7ED9 arr ,\u53C8\u8981\u91CA\u653E intArray\uFF0C\u4F1A\u6392\u5E8F
     *  JNI_COMMIT-&gt;\u4F1A\u540C\u6B65\u6570\u636E\u7ED9 arr \uFF0C\u4F46\u662F\u4E0D\u4F1A\u91CA\u653E intArray\uFF0C\u4F1A\u6392\u5E8F
     *  JNI_ABORT-&gt;\u4E0D\u540C\u6B65\u6570\u636E\u7ED9 arr \uFF0C\u4F46\u662F\u4F1A\u91CA\u653E intArray\uFF0C\u6240\u4EE5\u4E0A\u5C42\u770B\u5230\u5C31\u5E76\u4E0D\u4F1A\u6392\u5E8F
     */</span>
     env<span class="token operator">-&gt;</span><span class="token function">ReleaseIntArrayElements</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> arr<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>I/Yang: \u6392\u5E8F\u524D\uFF1A
I/Yang: 5
I/Yang: 6
I/Yang: 8
I/Yang: 9
I/Yang: 0
I/Yang: 1
I/Yang: 2
I/Yang: \u6392\u5E8F\u540E:
I/Yang: 0
I/Yang: 1
I/Yang: 2
I/Yang: 5
I/Yang: 6
I/Yang: 8
I/Yang: 9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),p=[i];function l(c,o){return s(),a("div",null,p)}const d=n(t,[["render",l],["__file","Jni-sort.html.vue"]]);export{d as default};
