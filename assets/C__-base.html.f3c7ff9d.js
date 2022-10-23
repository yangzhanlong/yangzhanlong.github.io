import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,d as e}from"./app.6a6b0b18.js";const t={},p=e(`<h3 id="c-\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#c-\u57FA\u7840" aria-hidden="true">#</a> C++\u57FA\u7840</h3><h3 id="c-\u51FD\u6570\u9002\u914D\u5668" tabindex="-1"><a class="header-anchor" href="#c-\u51FD\u6570\u9002\u914D\u5668" aria-hidden="true">#</a> C++\u51FD\u6570\u9002\u914D\u5668</h3><ul><li><p><code>find_if</code> \u7684<code>equal_to</code>\u65E0\u6CD5\u76F4\u63A5\u67E5\u627E\u6307\u5B9A\u5B57\u7B26\u4E32</p></li><li><p>\u4F7F\u7528<code>bind2nd</code>\u51FD\u6570\u9002\u914D\u5668\u8FDB\u884C\u5305\u88F9<code>equal_to</code>\uFF0C\u4F1A\u628A\u5B57\u7B26\u4E32\u653E\u5230<code>equal_to</code>\u91CC\u9762\u8FDB\u884C\u6BD4\u8F83</p></li></ul><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token comment">// 1.C++\u7684\u51FD\u6570\u9002\u914D\u5668\u3002  \u7B2C\u4E00\u7248\u672C</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;set&gt;</span> <span class="token comment">// stl\u5305</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;algorithm&gt;</span> <span class="token comment">// \u7B97\u6CD5\u5305</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// std::cout &lt;&lt; &quot;\u7B97\u6CD5\u5305&quot; &lt;&lt; std::endl;</span>

  set<span class="token operator">&lt;</span>string<span class="token punctuation">,</span> less<span class="token operator">&lt;</span>string<span class="token operator">&gt;&gt;</span> setVar<span class="token punctuation">;</span>
  setVar<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token string">&quot;AAAA&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  setVar<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token string">&quot;BBBB&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  setVar<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token string">&quot;CCCC&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span>set<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span><span class="token double-colon punctuation">::</span>iterator iteratorVar <span class="token operator">=</span> setVar<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> iteratorVar <span class="token operator">!=</span> setVar<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span> iteratorVar<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>iteratorVar <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// find_if</span>
  <span class="token comment">// equal_to \u6BD4\u8F83\u7528\u7684</span>
  set<span class="token operator">&lt;</span>string<span class="token punctuation">,</span> less<span class="token operator">&lt;</span>string<span class="token operator">&gt;&gt;</span><span class="token double-colon punctuation">::</span>iterator iteratorResult <span class="token operator">=</span>

          <span class="token comment">// \u89E3\u51B3\u5C34\u5C2C\u7684\u95EE\u9898  equal_to \u9700\u8981\u6BD4\u8F83\u7684 \u5185\u5BB9\u6CA1\u6709 \u4F7F\u7528 \u51FD\u6570\u9002\u914D\u5668 \u89E3\u51B3</span>
          <span class="token comment">// \u73B0\u5728\u7684\u95EE\u9898\u662F\uFF1A \u6CA1\u6709\u529E\u6CD5\u628A CCCC \u4F20\u9012\u7ED9 const _Tp&amp; __y\uFF0C\u5C31\u6CA1\u6CD5\u53BB\u6BD4\u8F83</span>
          <span class="token comment">// find_if(setVar.begin(), setVar.end(), equal_to&lt;string&gt;(&quot;CCCC&quot;), &quot;CCCC&quot;);</span>

          <span class="token comment">// \u4F7F\u7528\u51FD\u6570\u9002\u914D\u5668\u540E\uFF0C\u5C31\u80FD\u591F CCCC \u4F20\u9012\u7ED9\u4E86  const _Tp&amp; __y\uFF0C</span>
          <span class="token comment">// setVar.begin(), setVar.end() \u4F1A\u628A\u8FD9\u4E9B\u5143\u7D20\u53D6\u51FA\u6765 const _Tp&amp; __x</span>
          <span class="token comment">// x == y \u7684\u6BD4\u8F83</span>
          <span class="token function">find_if</span><span class="token punctuation">(</span>setVar<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> setVar<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">bind2nd</span><span class="token punctuation">(</span><span class="token generic-function"><span class="token function">equal_to</span><span class="token generic class-name"><span class="token operator">&lt;</span>string<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;CCCC&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>iteratorResult <span class="token operator">!=</span> setVar<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u67E5\u627E\u5230\u4E86&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u6CA1\u6709\u67E5\u627E\u5230&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>template <span class="token operator">&lt;</span>class _InputIterator<span class="token punctuation">,</span> class _Predicate<span class="token operator">&gt;</span>
<span class="token function">find_if</span><span class="token punctuation">(</span>_InputIterator __first<span class="token punctuation">,</span> _InputIterator __last<span class="token punctuation">,</span> _Predicate __pred<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> __first <span class="token operator">!=</span> __last<span class="token punctuation">;</span> <span class="token operator">++</span>__first<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">__pred</span><span class="token punctuation">(</span><span class="token operator">*</span>__first<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> __first<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>template <span class="token operator">&lt;</span>class __Operation<span class="token operator">&gt;</span>
class binder2nd <span class="token operator">:</span> public unary_function<span class="token operator">&lt;</span>typename __Operation<span class="token operator">::</span>first_argument_type<span class="token punctuation">,</span>
                            typename __Operation<span class="token operator">::</span>result_type<span class="token operator">&gt;</span>
<span class="token punctuation">{</span>
protected<span class="token operator">:</span>
    __Operation                                op<span class="token punctuation">;</span>
    typename __Operation<span class="token operator">::</span>second_argument_type value<span class="token punctuation">;</span>
public<span class="token operator">:</span>
    <span class="token function">binder2nd</span><span class="token punctuation">(</span><span class="token keyword">const</span> __Operation<span class="token operator">&amp;</span> __x<span class="token punctuation">,</span> <span class="token keyword">const</span> typename __Operation<span class="token operator">::</span>second_argument_type __y<span class="token punctuation">)</span>
        <span class="token operator">:</span> <span class="token function">op</span><span class="token punctuation">(</span>__x<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">value</span><span class="token punctuation">(</span>__y<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
                                
    <span class="token comment">// \u4F7F\u7528\u4EFF\u51FD\u6570</span>
    typename __Operation<span class="token operator">::</span>result_type <span class="token function">operator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>typename __Operation<span class="token operator">::</span>first_argument_type<span class="token operator">&amp;</span> __x<span class="token punctuation">)</span> <span class="token keyword">const</span>
            <span class="token punctuation">{</span>
        		<span class="token keyword">return</span> <span class="token function">op</span><span class="token punctuation">(</span>__x<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8FD9\u91CC\u7684op \u5C31\u662F equal_to</span>
            <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


template <span class="token operator">&lt;</span>class __Operation<span class="token punctuation">,</span> class _Tp<span class="token operator">&gt;</span>
binder2nd<span class="token operator">&lt;</span>__Operation<span class="token operator">&gt;</span>
<span class="token function">bind2nd</span><span class="token punctuation">(</span><span class="token keyword">const</span> __Operation<span class="token operator">&amp;</span> __op<span class="token punctuation">,</span> <span class="token keyword">const</span> _Tp<span class="token operator">&amp;</span> __x<span class="token punctuation">)</span>
    <span class="token punctuation">{</span><span class="token keyword">return</span> binder2nd<span class="token operator">&lt;</span>__Operation<span class="token operator">&gt;</span><span class="token punctuation">(</span>__op<span class="token punctuation">,</span> __x<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5F15\u7528\u8FDB\u9636" tabindex="-1"><a class="header-anchor" href="#\u5F15\u7528\u8FDB\u9636" aria-hidden="true">#</a> \u5F15\u7528\u8FDB\u9636</h3><ol><li><p>\u5F15\u7528\u7684\u672C\u8D28\u5C31\u662F\u6307\u9488</p></li><li><p>\u5DE6\u503C-&gt;\u83B7\u53D6\uFF0C\u53F3\u503C-&gt;\u4FEE\u6539</p></li><li><p>\u4F8B\u5B50\uFF1A</p><ul><li><code>string getInfo()</code>\u662F\u503C\u4F20\u9012\uFF0C\u4F7F\u7528\u53F3\u503C\u65E0\u6CD5\u4FEE\u6539</li><li><code>string &amp; getInfo_front()</code>\u662F\u5F15\u7528\u4F20\u9012\uFF0C\u4F7F\u7528\u53F3\u503C\u53EF\u4EE5\u4FEE\u6539</li></ul></li></ol><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token comment">// 1.\u5F15\u7528\u8FDB\u9636\u3002</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;vector&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>


<span class="token comment">// ============================ [\u5DE6\u503C \u53F3\u503C \u5F15\u7528]</span>
<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
<span class="token keyword">private</span><span class="token operator">:</span>
    string  info <span class="token operator">=</span> <span class="token string">&quot;AAA&quot;</span><span class="token punctuation">;</span> <span class="token comment">// \u65E7\u53D8\u91CF</span>

    <span class="token comment">// TODO \u7B2C\u4E00\u79CD\u60C5\u51B5\u3010getInfo\u51FD\u6570\u7684info \u4E0E main\u51FD\u6570\u7684result \u662F\u65E7\u4E0E\u65B0\u7684\u4E24\u4E2A\u53D8\u91CF\u800C\u5DF2\uFF0C\u4ED6\u4EEC\u662F\u503C\u4F20\u9012\uFF0C\u6240\u4EE5\u53F3\u503C\u4FEE\u6539\u65F6\uFF0C\u5F71\u54CD\u4E0D\u4E86\u91CC\u9762\u7684\u65E7\u53D8\u91CF\u3011</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    string <span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token operator">-&gt;</span>info<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// TODO \u7B2C\u4E8C\u79CD\u60C5\u51B5\u3010getInfo\u51FD\u6570\u7684info \u4E0E main\u51FD\u6570\u7684result \u662F\u5F15\u7528\u5173\u7CFB\uFF0C\u4E00\u5757\u5185\u5B58\u7A7A\u95F4 \u6709\u591A\u4E2A\u522B\u540D\u800C\u5DF2\uFF0C\u6240\u4EE5\u53F3\u503C\u4FEE\u6539\u65F6\uFF0C\u76F4\u63A5\u5F71\u54CD\u65E7\u53D8\u91CF\u3011</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    string <span class="token operator">&amp;</span> <span class="token function">getInfo_front</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token operator">-&gt;</span>info<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/*vector&lt;int&gt; v;
    int r = v.front(); // \u5DE6\u503C \u83B7\u53D6
    v.front() = 88; // \u53F3\u503C \u4FEE\u6539*/</span>

    Student student<span class="token punctuation">;</span>

    <span class="token comment">// TODO \u7B2C\u4E00\u79CD\u60C5\u51B5</span>
    student<span class="token punctuation">.</span><span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&quot;\u4E5D\u9633\u795E\u529F&quot;</span><span class="token punctuation">;</span>
    string result <span class="token operator">=</span> student<span class="token punctuation">.</span><span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u7B2C\u4E00\u79CD\u60C5\u51B5:&quot;</span> <span class="token operator">&lt;&lt;</span> result <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    <span class="token comment">// TODO \u7B2C\u4E8C\u79CD\u60C5\u51B5</span>
    student<span class="token punctuation">.</span><span class="token function">getInfo_front</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&quot;\u4E09\u5206\u5F52\u5143\u6C14&quot;</span><span class="token punctuation">;</span> <span class="token comment">// \u53F3\u503C \u4FEE\u6539\u5185\u5BB9</span>
    result <span class="token operator">=</span> student<span class="token punctuation">.</span><span class="token function">getInfo_front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5DE6\u503C \u83B7\u53D6\u5185\u5BB9</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u7B2C\u4E8C\u79CD\u60C5\u51B5:&quot;</span> <span class="token operator">&lt;&lt;</span> result <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7EBF\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u7EBF\u7A0B" aria-hidden="true">#</a> \u7EBF\u7A0B</h3><ol><li>\u521B\u5EFA\u7EBF\u7A0B<code>pthread_create(&amp;pthreadID, 0, customPthreadTask, &amp;number);</code></li><li>\u53C2\u6570\u8BF4\u660E:</li></ol><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">pthread_create</span> <span class="token punctuation">(</span><span class="token class-name">pthread_t</span> <span class="token operator">*</span><span class="token punctuation">,</span>  <span class="token comment">// \u53C2\u6570\u4E00\uFF1A\u7EBF\u7A0BID</span>
                  	<span class="token keyword">const</span> <span class="token class-name">pthread_attr_t</span> <span class="token operator">*</span><span class="token punctuation">,</span> <span class="token comment">// \u53C2\u6570\u4E8C\uFF1A\u7EBF\u7A0B\u5C5E\u6027</span>
                  	<span class="token keyword">void</span> <span class="token operator">*</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// \u53C2\u6570\u4E09\uFF1A\u51FD\u6570\u6307\u9488\u7684\u89C4\u5219</span>
                  	<span class="token keyword">void</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u53C2\u6570\u56DB\uFF1A\u7ED9\u51FD\u6570\u6307\u9488\u4F20\u9012\u7684\u5185\u5BB9\uFF0Cvoid * \u53EF\u4EE5\u4F20\u9012\u4EFB\u4F55\u5185\u5BB9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>\u7EBF\u7A0B\u963B\u585E\uFF1A<code>pthread_join(pthreadID, 0);</code></li><li>\u5206\u79BB\u7EBF\u7A0B\uFF1Amain\u51FD\u6570\u4E0D\u7B49\u5F85\u7EBF\u7A0B\u7EE7\u7EED\u6267\u884C</li><li>\u975E\u5206\u79BB\u7EBF\u7A0B\uFF1Amain\u51FD\u6570\u7B49\u5F85\u5F02\u6B65\u7EBF\u7A0B\u6267\u884C\u5B8C\u518D\u7EE7\u7EED\u6267\u884C\uFF0C\u4F7F\u7528<code>pthread_join</code></li><li>\u5E94\u7528\u573A\u666F: <ul><li>\u591A\u7EBF\u7A0B\uFF0C\u4F7F\u7528\u5206\u79BB\u7EBF\u7A0B\uFF0C\u7EBF\u7A0B\u95F4\u4E92\u4E0D\u5F71\u54CD</li><li>\u534F\u4F5C\uFF0C\u4F7F\u7528\u975E\u5206\u79BB\u7EBF\u7A0B\uFF0C\u9700\u8981\u963B\u585E</li></ul></li><li>\u7EBF\u7A0B\u6848\u4F8B:</li></ol><blockquote><p>\u521B\u5EFA\u4E00\u4E2A\u7EBF\u7A0B\uFF0C\u628A\u53C2\u65704\u7684\u503C\u5E26\u5230\u53C2\u65703\u7684\u51FD\u6570\u53BB\u6267\u884C\uFF0C \u56E0\u4E3A\u51FD\u6570\u6307\u9488\u63A5\u53D7\u7684\u662F<code>void *</code>\uFF0C\u8868\u793A\u4EFB\u4F55\u7C7B\u578B\u7684\u5730\u5740\uFF0C\u6240\u4EE5\u9700\u8981\u4F7F\u7528<code>static_cast</code>\u6765\u8F6C\u6362\u7C7B\u578B\uFF0C\u7136\u540E\u8FDB\u884C\u53D6\u503C</p></blockquote><blockquote><p><strong>\u6CE8\u610F\uFF1A\u53C2\u65703\u7684\u51FD\u6570\u5FC5\u987B\u8FD4\u56DE0\uFF0C\u4E0D\u7136\u4F1A\u62A5\u9519</strong></p></blockquote><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">// pthreads \u6211\u4EEC\u5FC5\u987B\u638C\u63E1\u7684\u5185\u5BB9</span>

<span class="token comment">// pthreads \u6700\u7B80\u5355\u7684\u6848\u4F8B</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;pthread.h&gt;</span> <span class="token comment">// Derry Cygwin \u6709 pthreads\u652F\u6301</span></span>
using namespace std<span class="token punctuation">;</span>

<span class="token comment">// void *(*)(void *)</span>
<span class="token keyword">void</span> <span class="token operator">*</span> <span class="token function">customPthreadTask</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span> pVoid<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u5F02\u6B65\u7EBF\u7A0B  \u76F8\u5F53\u4E8EJava\u7684Thread.run\u51FD\u6570\u4E00\u6837</span>
    <span class="token comment">// C++\u8F6C\u6362static_cast  \u8F6C\u6362\u6307\u9488\u64CD\u4F5C\u7684</span>
    <span class="token keyword">int</span> <span class="token operator">*</span> number <span class="token operator">=</span> static_cast<span class="token operator">&lt;</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>pVoid<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// pVoid==number int\u7684\u5730\u5740\uFF0C\u6240\u4EE5\u6211\u7528int*\u63A5\u6536\uFF0C\u5F88\u5408\u7406</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u5F02\u6B65\u7EBF\u7A0B\u6267\u884C\u4E86:&quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>number <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// \u5751 \u5751 \u5751\uFF0C\u5FC5\u987B\u8FD4\u56DE\uFF0C\u5426\u5219\u6709\u9519\u8BEF\uFF0C\u4E0D\u597D\u67E5\u8BE2</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> number <span class="token operator">=</span> <span class="token number">9527</span><span class="token punctuation">;</span>

    <span class="token comment">/**
      int pthread_create (pthread_t *,  // \u53C2\u6570\u4E00\uFF1A\u7EBF\u7A0BID
                        const pthread_attr_t *, // \u53C2\u6570\u4E8C\uFF1A\u7EBF\u7A0B\u5C5E\u6027
		                void *(*)(void *), // \u53C2\u6570\u4E09\uFF1A\u51FD\u6570\u6307\u9488\u7684\u89C4\u5219
		                void *); // \u53C2\u6570\u56DB\uFF1A\u7ED9\u51FD\u6570\u6307\u9488\u4F20\u9012\u7684\u5185\u5BB9\uFF0Cvoid * \u53EF\u4EE5\u4F20\u9012\u4EFB\u4F55\u5185\u5BB9
     */</span>
    <span class="token class-name">pthread_t</span> pthreadID<span class="token punctuation">;</span> <span class="token comment">// \u7EBF\u7A0BID\uFF0C\u6BCF\u4E2A\u7EBF\u7A0B\u90FD\u9700\u8981\u6709\u7684\u7EBF\u7A0BID</span>

    <span class="token function">pthread_create</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>pthreadID<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> customPthreadTask<span class="token punctuation">,</span> <span class="token operator">&amp;</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u963B\u585E\u7EBF\u7A0B\uFF0C\u7B49\u7EBF\u7A0B\u6267\u884C\u5B8C\u7EE7\u7EED\u6267\u884C</span>
    <span class="token function">pthread_join</span><span class="token punctuation">(</span>pthreadID<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;main\u51FD\u6570\u5373\u5C06\u5F39\u6808...&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E92\u65A5\u9501" tabindex="-1"><a class="header-anchor" href="#\u4E92\u65A5\u9501" aria-hidden="true">#</a> \u4E92\u65A5\u9501</h3><ol><li><p>C++ \u4E92\u65A5\u9501(<code>pthread_mutex_t</code>) == Java\u7248\u672C\uFF08<code>synchronize</code>\uFF09 \u591A\u7EBF\u7A0B\u64CD\u4F5C\u7684\u5B89\u5168 \xA0\u6301\u6709\u5185\u7F6E\u9501</p></li><li><p>\u4F7F\u7528\u6B65\u9AA4\uFF1A</p><ul><li><p>\u5B9A\u4E49\u4E92\u65A5\u9501-&gt; <code>pthread_mutex_t mutex;</code> \xA0\u5FC5\u987B\u662F\u5168\u5C40\u7684</p></li><li><p>\u521D\u59CB\u5316\u4E92\u65A5\u9501-&gt;<code>pthread_mutex_lock(&amp;mutex)</code></p></li><li><p>\u83B7\u53D6\u9501-&gt;<code>pthread_mutex_lock(&amp;mutex);</code></p></li><li><p>\u91CA\u653E\u9501-&gt;<code>pthread_mutex_unlock(&amp;mutex);</code></p></li><li><p>\u9500\u6BC1\u9501-&gt;<code>pthread_mutex_destroy(&amp;mutex);</code></p></li></ul></li><li><p>\u4F7F\u7528\u6848\u4F8B\uFF1A</p></li></ol><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">// TODO  C++ \u4E92\u65A5\u9501 == Java\u7248\u672C\uFF08synchronize\uFF09 \u591A\u7EBF\u7A0B\u64CD\u4F5C\u7684\u5B89\u5168  \u6301\u6709\u5185\u7F6E\u9501</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;pthread.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;queue&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unistd.h&gt;</span> <span class="token comment">// sleep\uFF08\u79D2\uFF09</span></span>

using namespace std<span class="token punctuation">;</span>

queue<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> queueData<span class="token punctuation">;</span> <span class="token comment">// \u5B9A\u4E49\u4E00\u4E2A\u5168\u5C40\u7684\u961F\u5217\uFF0C\u7528\u4E8E \u5B58\u50A8/\u83B7\u53D6</span>

<span class="token class-name">pthread_mutex_t</span> mutex<span class="token punctuation">;</span> <span class="token comment">// \u5B9A\u4E49\u4E00\u4E2A\u4E92\u65A5\u9501\uFF0C\u6CE8\u610F\uFF1A\uFF08Cygwin\u5E73\u53F0 \u6B64\u4E92\u65A5\u9501\uFF0C\u4E0D\u80FD\u6709\u91CE\u6307\u9488\uFF0C\u5751\uFF09</span>

<span class="token comment">// void *(*)(void *)</span>
<span class="token keyword">void</span> <span class="token operator">*</span> <span class="token function">task</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span> pVoid<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">/*synchronize(\u9501) {
        // code
    }*/</span>

    <span class="token function">pthread_mutex_lock</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>mutex<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u9501\u4F4F</span>

    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u5F02\u6B65\u7EBF\u7A0B-\u5F53\u524D\u7EBF\u7A0B\u7684\u6807\u8BB0\u662F:&quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>static_cast<span class="token operator">&lt;</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>pVoid<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u5F02\u6B65\u7EBF\u7A0B&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>queueData<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u6709\u5143\u7D20</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u5F02\u6B65\u7EBF\u7A0B-\u83B7\u53D6\u961F\u5217\u7684\u6570\u636E:%d\\n&quot;</span><span class="token punctuation">,</span> queueData<span class="token punctuation">.</span><span class="token function">front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        queueData<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u628A\u6570\u636E\u5F39\u51FA\u53BB\uFF0C\u5220\u9664\u7684\u610F\u601D</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">// \u6CA1\u6709\u5143\u7D20</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u5F02\u6B65\u7EBF\u7A0B-\u961F\u5217\u4E2D\u6CA1\u6709\u6570\u636E\u4E86\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// sleep(0.2);</span>

    <span class="token function">pthread_mutex_unlock</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>mutex<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u89E3\u9501</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// \u521D\u59CB\u5316 \u4E92\u65A5\u9501</span>
    <span class="token function">pthread_mutex_init</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>mutex<span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u7ED9\u961F\u5217 \u521D\u59CB\u5316\u6570\u636E \u624B\u52A8\u589E\u52A0\u6570\u636E\u8FDB\u53BB</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">10001</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10011</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        queueData<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u4E00\u6B21\u6027\u5B9A\u4E4910\u4E2A\u7EBF\u7A0B</span>
    <span class="token class-name">pthread_t</span> pthreadIDArray<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">pthread_create</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>pthreadIDArray<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> task<span class="token punctuation">,</span> <span class="token operator">&amp;</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// \u4E0D\u80FD\u4F7F\u7528 join\uFF0C\u5982\u679C\u4F7F\u7528\uFF08\u5C31\u53D8\u6210\u987A\u5E8F\u7684\u65B9\u5F0F\uFF0C\u5C31\u6CA1\u6709\u591A\u7EBF\u7A0B\u7684\u610F\u4E49\u4E86\uFF0C\u6240\u4EE5\u4E0D\u80FD\u5199join\uFF09</span>
        <span class="token comment">// pthread_join(pthreadIDArray[i], 0);</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// main\u51FD\u6570\u7B49 \u5F02\u6B65\u7EBF\u7A0B</span>
    <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u9500\u6BC1 \u4E92\u65A5\u9501</span>
    <span class="token function">pthread_mutex_destroy</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>mutex<span class="token punctuation">)</span><span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;main\u51FD\u6570\u5373\u5C06\u5F39\u6808...&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    <span class="token comment">// \u6BCF\u6B21\u8FD0\u884C \u6548\u679C\u90FD\u4E0D\u540C\uFF1A1\uFF0C8\uFF0C9\uFF0C10\uFF0C3\uFF0C2\uFF0C5\uFF0C8</span>
    <span class="token comment">// \u6BCF\u6B21\u8FD0\u884C \u6548\u679C\u90FD\u662F\u9519\u4E71</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6761\u4EF6\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u6761\u4EF6\u53D8\u91CF" aria-hidden="true">#</a> \u6761\u4EF6\u53D8\u91CF</h3><ol><li><p>C++ \u6761\u4EF6\u53D8\u91CF(<code>pthread_cond_t</code>)+\u4E92\u65A5\u9501(<code>pthread_mutex_t</code>) == Java\u7248\u672C\u7684\uFF08<code>notify</code> \u4E0E <code>wait</code> \u64CD\u4F5C\uFF09</p></li><li><p>\u6761\u4EF6\u53D8\u91CF\uFF0C\u4E3A\u4E86\u5B9E\u73B0 \u7B49\u5F85 \u8BFB\u53D6 \u7B49\u529F\u80FD</p></li><li><p>\u4F7F\u7528\u6B65\u9AA4\uFF1A</p><ol><li><p>\u521D\u59CB\u5316</p><ul><li>\u5B9A\u4E49\u6761\u4EF6\u53D8\u91CF-&gt;<code>pthread_cond_t cond;</code></li><li>\u5B9A\u4E49\u4E92\u65A5\u9501-&gt; <code>pthread_mutex_t mutex;</code></li><li>\u521D\u59CB\u5316\u6761\u4EF6\u53D8\u91CF-&gt;<code>pthread_cond_init(&amp;cond, 0);</code></li><li>\u521D\u59CB\u5316\u4E92\u65A5\u9501-&gt;<code>pthread_mutex_init(&amp;mutex, 0);</code></li></ul></li><li><p>add\u52A0\u5165\u961F\u5217\u4E2D</p><ul><li>\u4F7F\u7528\u9501-&gt;<code>pthread_mutex_lock(&amp;mutex);</code></li><li>\u901A\u77E5\u6761\u4EF6\u53D8\u91CF-&gt;<code>pthread_cond_signal(&amp;cond)</code> \u7B49\u540CJava notify \u5355\u4E2A\u7684</li><li>\u6216\u8005-&gt;<code>pthread_cond_broadcast(&amp;cond);</code>\u7B49\u540CJava notifyAll \u6240\u6709\u7684</li><li>\u91CA\u653E\u9501-&gt;<code>pthread_mutex_unlock(&amp;mutex);</code></li></ul></li><li><p>get\u4ECE\u961F\u5217\u4E2D\u83B7\u53D6</p><ul><li>\u4F7F\u7528\u9501-&gt;<code>pthread_mutex_lock(&amp;mutex);</code></li><li>\u7B49\u5F85-&gt;<code>pthread_cond_wait(&amp;cond, &amp;mutex);</code>\u7B49\u540C\u76F8\u5F53\u4E8E Java\u7684 wait \u7B49\u5F85\u4E86[\u6709\u53EF\u80FD\u88AB\u7CFB\u7EDF\u5524\u9192]</li><li>\u91CA\u653E\u9501-&gt;<code>pthread_mutex_unlock(&amp;mutex);</code></li></ul></li><li><p>\u56DE\u6536\u9501\u548C\u6761\u4EF6\u53D8\u91CF</p><ul><li>\u56DE\u6536\u9501<code>pthread_mutex_destroy(&amp;mutex);</code></li><li>\u56DE\u6536\u6761\u4EF6\u53D8\u91CF<code>pthread_cond_destroy(&amp;cond);</code></li></ul></li></ol></li><li><p>\u4F7F\u7528\u6848\u4F8B\uFF1A</p></li></ol><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">// \u751F\u4EA7\u8005 \u6D88\u8D39\u8005 \u5DE5\u5177\u7C7B   \u64AD\u653E\u5668 \u6709\u7528</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifndef</span> <span class="token expression">CPPCLIONPROJECT_SAFE_QUEUE_TOO_H</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">CPPCLIONPROJECT_SAFE_QUEUE_TOO_H</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span> <span class="token comment">//CPPCLIONPROJECT_SAFE_QUEUE_TOO_H</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">pragma</span> <span class="token expression">once </span><span class="token comment">// \u9632\u6B62\u91CD\u590D\u5199 include \u7684\u63A7\u5236</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;pthread.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;queue&gt;</span></span>

using namespace std<span class="token punctuation">;</span>

<span class="token comment">// \u5B9A\u4E49\u6A21\u7248\u51FD\u6570 int double float == Java\u7684\u6CDB\u578B</span>
template<span class="token operator">&lt;</span>typename T<span class="token operator">&gt;</span>

class SafeQueueClass <span class="token punctuation">{</span>
private<span class="token operator">:</span>
    queue<span class="token operator">&lt;</span>T<span class="token operator">&gt;</span> queue<span class="token punctuation">;</span> <span class="token comment">// \u5B9A\u4E49\u961F\u5217</span>
    <span class="token class-name">pthread_mutex_t</span>  mutex<span class="token punctuation">;</span> <span class="token comment">// \u5B9A\u4E49\u4E92\u65A5\u9501\uFF08\u4E0D\u5141\u8BB8\u6709\u91CE\u6307\u9488\uFF09</span>
    <span class="token class-name">pthread_cond_t</span> cond<span class="token punctuation">;</span> <span class="token comment">// \u6761\u4EF6\u53D8\u91CF\uFF0C\u4E3A\u4E86\u5B9E\u73B0 \u7B49\u5F85 \u8BFB\u53D6 \u7B49\u529F\u80FD \uFF08\u4E0D\u5141\u8BB8\u6709\u91CE\u6307\u9488\uFF09</span>

public<span class="token operator">:</span>
    <span class="token function">SafeQueueClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u521D\u59CB\u5316 \u4E92\u65A5\u9501</span>
        <span class="token function">pthread_mutex_init</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>mutex<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// \u521D\u59CB\u5316 \u6761\u4EF6\u53D8\u91CF</span>
        <span class="token function">pthread_cond_init</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>cond<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token operator">~</span><span class="token function">SafeQueueClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u56DE\u6536 \u4E92\u65A5\u9501</span>
        <span class="token function">pthread_mutex_destroy</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>mutex<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// \u56DE\u6536 \u6761\u4EF6\u53D8\u91CF</span>
        <span class="token function">pthread_cond_destroy</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>cond<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// TODO \u52A0\u5165\u5230\u961F\u5217\u4E2D\uFF08\u8FDB\u884C\u751F\u6210\uFF09</span>
    <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span>T t<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u4E3A\u4E86\u5B89\u5168 \u52A0\u9501</span>
        <span class="token function">pthread_mutex_lock</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>mutex<span class="token punctuation">)</span><span class="token punctuation">;</span>

        queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u628A\u6570\u636E\u52A0\u5165\u5230\u961F\u5217\u4E2D</span>

        <span class="token comment">// \u544A\u8BC9\u6D88\u8D39\u8005\uFF0C\u6211\u5DF2\u7ECF\u751F\u4EA7\u597D\u4E86</span>
        <span class="token comment">// pthread_cond_signal(&amp;cond) // Java notify \u5355\u4E2A\u7684</span>
        <span class="token function">pthread_cond_broadcast</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>cond<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Java notifyAll \u6240\u6709\u7684\u7684</span>

        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;add queue.push \u6211\u5DF2\u7ECFnotifyAll\u6240\u6709\u7B49\u5F85\u7EBF\u7A0B\u4E86&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

        <span class="token comment">// \u89E3\u9501</span>
        <span class="token function">pthread_mutex_unlock</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>mutex<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// TODO \u4ECE\u961F\u5217\u4E2D\u83B7\u53D6\uFF08\u8FDB\u884C\u6D88\u8D39\uFF09 \u5916\u9762\u7684\u4EBA\u6D88\u8D39 \u4F60\u53EF\u4EE5\u76F4\u63A5\u8FD4\u56DE\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u91C7\u7528\u5F15\u7528</span>
    <span class="token keyword">void</span> <span class="token function">get</span><span class="token punctuation">(</span>T <span class="token operator">&amp;</span> t<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u4E3A\u4E86\u5B89\u5168 \u52A0\u9501</span>
        <span class="token function">pthread_mutex_lock</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>mutex<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;get empty \u6211\u5DF2\u7ECF\u4E56\u4E56\u7B49\u5F85\u4E2D..&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
            <span class="token function">pthread_cond_wait</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>cond<span class="token punctuation">,</span> <span class="token operator">&amp;</span>mutex<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u76F8\u5F53\u4E8E Java\u7684 wait \u7B49\u5F85\u4E86[\u6709\u53EF\u80FD\u88AB\u7CFB\u7EDF\u5524\u9192]</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// \u8BC1\u660E\u88AB\u5524\u9192\u4E86</span>
        t <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5F97\u5230 \u961F\u5217\u4E2D\u7684\u5143\u7D20\u6570\u636E \u4EC5\u6B64\u800C\u5DF2</span>
        queue<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5220\u9664\u5143\u7D20</span>

        <span class="token comment">// \u89E3\u9501</span>
        <span class="token function">pthread_mutex_unlock</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>mutex<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token comment">// TODO C++ \u6761\u4EF6\u53D8\u91CF+\u4E92\u65A5\u9501 == Java\u7248\u672C\u7684\uFF08notify \u4E0E wait \u64CD\u4F5C\uFF09</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">pragma</span> <span class="token expression">once</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;safe_queue_too.h&quot;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
SafeQueueClass<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> sq<span class="token punctuation">;</span>

<span class="token comment">// TODO \u6A21\u62DF\u6F14\u793A \u6D88\u8D39\u8005</span>
<span class="token keyword">void</span> <span class="token operator">*</span> <span class="token function">getMethod</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;getMethod\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span>  value<span class="token punctuation">;</span>
        sq<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u6D88\u8D39\u8005get \u5F97\u5230\u7684\u6570\u636E:%d\\n&quot;</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// \u4F60\u53EA\u8981\u4F20\u5165 -1 \u5C31\u7ED3\u675F\u5F53\u524D\u5FAA\u73AF</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span> <span class="token operator">==</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u6D88\u8D39\u8005get \u5168\u90E8\u6267\u884C\u5B8C\u6BD5\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// TODO \u6A21\u62DF\u6F14\u793A \u751F\u4EA7\u8005</span>
<span class="token keyword">void</span> <span class="token operator">*</span> <span class="token function">setMethod</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;setMethod\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span> value<span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u4F60\u8981\u751F\u6210\u7684\u4FE1\u606F:\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        cin <span class="token operator">&gt;&gt;</span> value<span class="token punctuation">;</span>

        <span class="token comment">// \u4F60\u53EA\u8981\u4F20\u5165 -1 \u5C31\u7ED3\u675F\u5F53\u524D\u5FAA\u73AF</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span> <span class="token operator">==</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            sq<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u4E3A\u4E86\u8BA9\u6D88\u8D39\u8005 \u53EF\u4EE5\u7ED3\u675F\u5FAA\u73AF</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u6D88\u8D39\u8005get \u5168\u90E8\u6267\u884C\u5B8C\u6BD5\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        sq<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pthread_t pthreadGet<span class="token punctuation">;</span>
    <span class="token function">pthread_create</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>pthreadGet<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> getMethod<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// pthread_join(pthreadGet, 0); \u4E0D\u80FD\u8FD9\u6837\u5199\uFF0C\u5426\u5219\uFF0C\u4E0B\u9762\u7684\u4EE3\u7801\uFF0C\u53EF\u80FD\u65E0\u6CD5\u6709\u673A\u4F1A\u6267\u884C</span>

    pthread_t pthreadSet<span class="token punctuation">;</span>
    <span class="token function">pthread_create</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>pthreadSet<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> setMethod<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token function">pthread_join</span><span class="token punctuation">(</span>pthreadGet<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">pthread_join</span><span class="token punctuation">(</span>pthreadSet<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u667A\u80FD\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#\u667A\u80FD\u6307\u9488" aria-hidden="true">#</a> \u667A\u80FD\u6307\u9488</h3><ol><li>\u667A\u80FD\u6307\u9488\u81EA\u52A8\u91CA\u653E\u5806\u533A\u7684\u5BF9\u8C61\uFF0C\u65E0\u9700\u5F00\u53D1\u8005\u5199<code>delete</code></li><li>\u667A\u80FD\u6307\u9488\u7684\u7C7B\u578B\uFF1A<code>shared_ptr</code>,<code>weak_ptr</code>,<code>unique_ptr</code></li></ol><h4 id="\u667A\u80FD\u6307\u9488\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u667A\u80FD\u6307\u9488\u7684\u4F7F\u7528" aria-hidden="true">#</a> \u667A\u80FD\u6307\u9488\u7684\u4F7F\u7528</h4><ul><li><code>shared_ptr</code></li></ul><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token comment">// TODO \u667A\u80FD\u6307\u9488\u521D\u63A2 \u5185\u90E8\u673A\u5236\u539F\u7406</span>

<span class="token comment">// \u5728\u771F\u5B9E\u5F00\u53D1\u8FC7\u7A0B\u4E2D\uFF0C\u624D\u80FD\u4F53\u7CFB\u667A\u80FD\u6307\u9488\u7684\u7528\u9014\uFF0C\u5426\u5219\u5199demo\u65E0\u6CD5\u4F53\u73B0\uFF0C\u4E3A\u4EC0\u4E48\uFF1F</span>
<span class="token comment">// \u56E0\u4E3A\u771F\u5B9E\u5F00\u53D1\u8FC7\u7A0B\u4E2D\uFF0C\u5F88\u5F88\u591A\u7684\u4EE3\u7801\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u4F60\u5FD8\u8BB0\u5199 delete \u5BF9\u8C61\uFF1B</span>
<span class="token comment">// new \u5BF9\u8C61  \u6211\u5C31\u9A6C\u4E0A \u52A0\u5165\u5230 \u667A\u80FD\u6307\u9488  \u6211\u5C31\u4E0D\u4F1A\u5FD8\u8BB0\u4E86</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;memory&gt;</span> <span class="token comment">// \u667A\u80FD\u6307\u9488\u7684\u5934\u6587\u4EF6\u5F15\u5165</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token operator">~</span><span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Person \u6790\u6784\u51FD\u6570&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;C++\u6700\u540E\u4E00\u8282\u8BFE&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>

    Person <span class="token operator">*</span> person1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5806\u533A\u5F00\u8F9F</span>
    Person <span class="token operator">*</span> person2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5806\u533A\u5F00\u8F9F</span>

    <span class="token comment">// \u4EE5\u524D\uFF1A</span>
    <span class="token comment">// delete person1; \u5FD8\u8BB0\u5199\u4E86\uFF0C\u600E\u4E48\u529E\uFF0C\u975E\u5E38\u4E25\u91CD\u7684\u95EE\u9898\uFF0C\u6CA1\u6CD5\u91CA\u653E</span>

    <span class="token comment">// \u73B0\u5728\uFF1A</span>
    <span class="token comment">// shared_ptr&lt;Person&gt; sharedPtr1(person1); // \u667A\u80FD\u6307\u9488\u5E2E\u4F60\u91CA\u653E\u5806\u533A\u5F00\u8F9F\u7684 --&gt; Person \u6790\u6784\u51FD\u6570</span>

    <span class="token comment">/*
     *
     *
     *   10000\u884C\u4EE3\u7801
     *
     *
     *
     */</span>
    <span class="token comment">// \u6700\u540E\uFF0C\u5C31\u5FD8\u8BB0\u7ED9\u4EBA\u5BB6 delete person1</span>
    <span class="token comment">// \u5982\u679C \u52A0\u5165\u5230 \u667A\u80FD\u6307\u9488\uFF0C\u6211\u5C31\u4E0D\u7528\u7BA1\u4E86</span>

    shared_ptr<span class="token operator">&lt;</span>Person<span class="token operator">&gt;</span> <span class="token function">sharedPtr1</span><span class="token punctuation">(</span>person1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6808\u533A\u5F00\u8F9FsharedPtr1\uFF0C \u52A01 \u7B49\u4E8E1 \u5F15\u7528\u8BA1\u6570</span>
    shared_ptr<span class="token operator">&lt;</span>Person<span class="token operator">&gt;</span> <span class="token function">sharedPtr2</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6808\u533A\u5F00\u8F9FsharedPtr2  \u52A01 \u7B49\u4E8E1 \u5F15\u7528\u8BA1\u6570</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// main\u51FD\u6570\u5F39\u6808\uFF0C\u4F1A\u91CA\u653E \u6240\u6709\u7684\u6808\u6210\u5458 sharedPtr1 \u8C03\u7528 sharedPtr1\u6790\u6784\u51FD\u6570 \u51CF1 \u7B49\u4E8E0  \u76F4\u63A5\u91CA\u653Eperson1</span>
<span class="token comment">// main\u51FD\u6570\u5F39\u6808\uFF0C\u4F1A\u91CA\u653E \u6240\u6709\u7684\u6808\u6210\u5458 sharedPtr2 \u8C03\u7528 sharedPtr2\u6790\u6784\u51FD\u6570 \u51CF1 \u7B49\u4E8E0  \u76F4\u63A5\u91CA\u653Eperson2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><code>shared_ptr</code>\u76F8\u4E92\u4F9D\u8D56\u7684\u95EE\u9898</p></li><li><p>\u89E3\u51B3\u76F8\u4E92\u4F9D\u8D56\u7684\u95EE\u9898\uFF0C\u4F7F\u7528<code>weak_ptr</code> \u667A\u80FD\u6307\u9488</p></li></ul><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token comment">// TODO \u667A\u80FD\u6307\u9488 \u4F7F\u7528\u9891\u7387\u9AD8\u4E0D\u9AD8  1  2</span>
<span class="token comment">// \u667A\u80FD\u6307\u9488 \u6709\u5FAA\u73AF\u4F9D\u8D56\u7684\u95EE\u9898\uFF0C\u4F60\u8981\u7528\u5C31\u7528\u597D\uFF0C\u4E0D\u8981\u7528\u7684\u590D\u6742\uFF0C\u5FAA\u73AF\u4F9D\u8D56\u7684\u95EE\u9898</span>
<span class="token comment">// TODO \u667A\u80FD\u6307\u9488 \u5FAA\u73AF\u4F9D\u8D56\u95EE\u9898\uFF0C\u6545\u610F\u5236\u4F5C</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;memory&gt;</span> <span class="token comment">// \u667A\u80FD\u6307\u9488\u7684\u5934\u6587\u4EF6\u5F15\u5165</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Person2</span><span class="token punctuation">;</span> <span class="token comment">// \u5148\u58F0\u660E Person2 \u8BA9\u6211\u4EEC\u7684Person1 \u76F4\u63A5\u627E\u5230</span>

<span class="token keyword">class</span> <span class="token class-name">Person1</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    shared_ptr<span class="token operator">&lt;</span>Person2<span class="token operator">&gt;</span> person2<span class="token punctuation">;</span> <span class="token comment">// Person2\u667A\u80FD\u6307\u9488  shared_ptr \u5F15\u7528\u8BA1\u6570+1</span>
    <span class="token operator">~</span><span class="token function">Person1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Person1 \u6790\u6784\u51FD\u6570&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Person2</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    shared_ptr<span class="token operator">&lt;</span>Person1<span class="token operator">&gt;</span> person1<span class="token punctuation">;</span>  <span class="token comment">// Person1\u667A\u80FD\u6307\u9488  shared_ptr \u5F15\u7528\u8BA1\u6570+1</span>
    <span class="token operator">~</span><span class="token function">Person2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Person2 \u6790\u6784\u51FD\u6570&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Person1 <span class="token operator">*</span> person1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">Person1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5806\u533A\u5F00\u8F9F</span>
    Person2 <span class="token operator">*</span> person2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">Person2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5806\u533A\u5F00\u8F9F</span>

    shared_ptr<span class="token operator">&lt;</span>Person1<span class="token operator">&gt;</span> <span class="token function">sharedPtr1</span><span class="token punctuation">(</span>person1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// +1 = 1</span>
    shared_ptr<span class="token operator">&lt;</span>Person2<span class="token operator">&gt;</span> <span class="token function">sharedPtr2</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// +1 = 1</span>

    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u524D sharedPtr1\u7684\u5F15\u7528\u8BA1\u6570\u662F:&quot;</span> <span class="token operator">&lt;&lt;</span> sharedPtr1<span class="token punctuation">.</span><span class="token function">use_count</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u524D sharedPtr2\u7684\u5F15\u7528\u8BA1\u6570\u662F:&quot;</span> <span class="token operator">&lt;&lt;</span> sharedPtr2<span class="token punctuation">.</span><span class="token function">use_count</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    <span class="token comment">// \u7ED9Person2\u667A\u80FD\u6307\u9488\u8D4B\u503C</span>
    person1<span class="token operator">-&gt;</span>person2 <span class="token operator">=</span> sharedPtr2<span class="token punctuation">;</span>
    <span class="token comment">// \u7ED9Person1\u667A\u80FD\u6307\u9488\u8D4B\u503C</span>
    person2<span class="token operator">-&gt;</span>person1 <span class="token operator">=</span> sharedPtr1<span class="token punctuation">;</span>

    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u540E sharedPtr1\u7684\u5F15\u7528\u8BA1\u6570\u662F:&quot;</span> <span class="token operator">&lt;&lt;</span> sharedPtr1<span class="token punctuation">.</span><span class="token function">use_count</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u540E sharedPtr2\u7684\u5F15\u7528\u8BA1\u6570\u662F:&quot;</span> <span class="token operator">&lt;&lt;</span> sharedPtr2<span class="token punctuation">.</span><span class="token function">use_count</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token comment">// \u51CF1 = 0 \u91CA\u653E\u5BF9\u8C61</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>weak_ptr</code>\u7684\u4F7F\u7528</li></ul><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token comment">// TODO \u667A\u80FD\u6307\u9488 \u89E3\u51B3\u5FAA\u73AF\u4F9D\u8D56\u7684\u95EE\u9898  weak \u667A\u80FD\u6307\u9488 \u6CA1\u6709\u5F15\u7528\u8BA1\u6570</span>

<span class="token comment">// C++ 11\u540E \u63A8\u51FA\u667A\u80FD\u6307\u9488\uFF0C\u4E3A\u4EC0\u4E48\u8981\u63A8\u51FA\uFF1F  JVM\u975E\u5E38\u5389\u5BB3\uFF0C\u5B8C\u5168\u4E0D\u7528\u7BA1\u5BF9\u8C61\u7684\u56DE\u6536\u7684\u95EE\u9898</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;memory&gt;</span> <span class="token comment">// \u667A\u80FD\u6307\u9488\u7684\u5934\u6587\u4EF6\u5F15\u5165</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Person2</span><span class="token punctuation">;</span> <span class="token comment">// \u5148\u58F0\u660E Person2 \u8BA9\u6211\u4EEC\u7684Person1 \u76F4\u63A5\u627E\u5230</span>

<span class="token keyword">class</span> <span class="token class-name">Person1</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    weak_ptr<span class="token operator">&lt;</span>Person2<span class="token operator">&gt;</span> person2<span class="token punctuation">;</span> <span class="token comment">// Person2\u667A\u80FD\u6307\u9488  \u6CA1\u6709\u5F15\u7528\u8BA1\u6570 \u65E0\u6CD5+1</span>
    <span class="token operator">~</span><span class="token function">Person1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Person1 \u6790\u6784\u51FD\u6570&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Person2</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    weak_ptr<span class="token operator">&lt;</span>Person1<span class="token operator">&gt;</span> person1<span class="token punctuation">;</span>  <span class="token comment">// Person1\u667A\u80FD\u6307\u9488  \u6CA1\u6709\u5F15\u7528\u8BA1\u6570 \u65E0\u6CD5+1</span>
    <span class="token operator">~</span><span class="token function">Person2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Person2 \u6790\u6784\u51FD\u6570&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Person1 <span class="token operator">*</span> person1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">Person1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5806\u533A\u5F00\u8F9F</span>
    Person2 <span class="token operator">*</span> person2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">Person2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5806\u533A\u5F00\u8F9F</span>

    shared_ptr<span class="token operator">&lt;</span>Person1<span class="token operator">&gt;</span> <span class="token function">sharedPtr1</span><span class="token punctuation">(</span>person1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// +1 = 1</span>
    shared_ptr<span class="token operator">&lt;</span>Person2<span class="token operator">&gt;</span> <span class="token function">sharedPtr2</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// +1 = 1</span>

    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u524D sharedPtr1\u7684\u5F15\u7528\u8BA1\u6570\u662F:&quot;</span> <span class="token operator">&lt;&lt;</span> sharedPtr1<span class="token punctuation">.</span><span class="token function">use_count</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u524D sharedPtr2\u7684\u5F15\u7528\u8BA1\u6570\u662F:&quot;</span> <span class="token operator">&lt;&lt;</span> sharedPtr2<span class="token punctuation">.</span><span class="token function">use_count</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    <span class="token comment">// \u7ED9Person2\u667A\u80FD\u6307\u9488\u8D4B\u503C</span>
    person1<span class="token operator">-&gt;</span>person2 <span class="token operator">=</span> sharedPtr2<span class="token punctuation">;</span>
    <span class="token comment">// \u7ED9Person1\u667A\u80FD\u6307\u9488\u8D4B\u503C</span>
    person2<span class="token operator">-&gt;</span>person1 <span class="token operator">=</span> sharedPtr1<span class="token punctuation">;</span>

    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u540E sharedPtr1\u7684\u5F15\u7528\u8BA1\u6570\u662F:&quot;</span> <span class="token operator">&lt;&lt;</span> sharedPtr1<span class="token punctuation">.</span><span class="token function">use_count</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u540E sharedPtr2\u7684\u5F15\u7528\u8BA1\u6570\u662F:&quot;</span> <span class="token operator">&lt;&lt;</span> sharedPtr2<span class="token punctuation">.</span><span class="token function">use_count</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token comment">// \u51CF1 = 0 \u91CA\u653E\u5BF9\u8C61</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>unique</code>\u7684\u4F7F\u7528</li></ul><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token comment">// TODO unique \u667A\u80FD\u6307\u9488  \u8BBE\u8BA1\u7684\u591F\u7B80\u5355\uFF0C\u6BCF\u4E00\u90A3\u4E48\u591A\u529F\u80FD  [\u72EC\u5360\u5F0F\u667A\u80FD\u6307\u9488]</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;memory&gt;</span> <span class="token comment">// \u667A\u80FD\u6307\u9488\u7684\u5934\u6587\u4EF6\u5F15\u5165</span></span>

<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Person <span class="token operator">*</span> person1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    Person <span class="token operator">*</span> person2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    std<span class="token double-colon punctuation">::</span>unique_ptr<span class="token operator">&lt;</span>Person<span class="token operator">&gt;</span> <span class="token function">uniquePtr1</span><span class="token punctuation">(</span>person1<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u4E25\u683C\u7981\u6B62</span>
    <span class="token comment">// std::unique_ptr&lt;Person&gt; uniquePtr2 = uniquePtr1;  unique\u4E0D\u5141\u8BB8\uFF0C\u56E0\u4E3A\u662F\u72EC\u5360\u7684</span>

    <span class="token comment">// shared_ptr \u662F\u53EF\u4EE5\u7684\uFF0C\u4F1A\u9020\u6210\u9690\u60A3\u95EE\u9898</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u624B\u5199\u667A\u80FD\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#\u624B\u5199\u667A\u80FD\u6307\u9488" aria-hidden="true">#</a> \u624B\u5199\u667A\u80FD\u6307\u9488</h3><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token comment">// TODO  \u624B\u5199\u667A\u80FD\u6307\u9488</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;memory&gt;</span> <span class="token comment">// \u667A\u80FD\u6307\u9488\u7684\u5934\u6587\u4EF6\u5F15\u5165</span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Person <span class="token operator">*</span> person1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// Person * person2 = new Person();</span>

    <span class="token comment">// shared_ptr&lt;Person&gt; sharedPtr0;</span>

    shared_ptr<span class="token operator">&lt;</span>Person<span class="token operator">&gt;</span> <span class="token function">sharedPtr1</span><span class="token punctuation">(</span>person1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// +1 \u5F15\u7528\u8BA1\u6570</span>

    <span class="token comment">// \u7B2C\u4E00\u79CD\u60C5\u51B5 \u4F1A\u8C03\u7528\u62F7\u8D1D\u6784\u9020\u51FD\u6570</span>
    <span class="token comment">// shard_ptr\u667A\u80FD\u6307\u9488\u7684\u7279\u6027</span>
    <span class="token comment">// shared_ptr&lt;Person&gt; sharedPtr2 = sharedPtr1;  // +1 \u518D\u5F15\u7528\u8BA1\u6570  \u4E0D\u4F1A\u8C03\u7528\u6784\u9020\u51FD\u6570\uFF0C\u53EA\u80FD\u6267\u884C\u62F7\u8D1D\u6784\u9020\u51FD\u6570</span>

    <span class="token comment">// \u7B2C\u4E8C\u79CD\u60C5\u51B5 \u4E0D\u4F1A\u8C03\u7528\u62F7\u8D1D\u6784\u9020\u51FD\u6570</span>
    shared_ptr<span class="token operator">&lt;</span>Person<span class="token operator">&gt;</span> sharedPtr2<span class="token punctuation">;</span>  <span class="token comment">// +1 \u518D\u5F15\u7528\u8BA1\u6570   \u5148\u6784\u9020\u51FD\u6570 \u5F00\u8F9FsharedPtr2\u5BF9\u8C61</span>

    <span class="token comment">// \u7ED9sharedPtr2\u5BF9\u8C61 \u4ECE\u65B0\u8D4B\u503C</span>
    sharedPtr2 <span class="token operator">=</span> sharedPtr1<span class="token punctuation">;</span> <span class="token comment">// \u81EA\u5B9A\u4E49 =\u53F7\u8FD0\u7B97\u7B26\u91CD\u8F7D</span>


    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// main\u51FD\u6570\u5F39\u6808 sharedPtr1\u6808\u6210\u5458  ---&gt; \u6790\u6784\u51FD\u6570 --\u7B49\u4E8E0 \u5C31\u91CA\u653E\u5BF9\u8C61</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifndef</span> <span class="token expression">CPPCLIONPROJECT_CUSTOMPTR_H</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">CPPCLIONPROJECT_CUSTOMPTR_H</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">pragma</span> <span class="token expression">once</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;memory&gt;</span> <span class="token comment">// \u667A\u80FD\u6307\u9488\u7684</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">template</span><span class="token operator">&lt;</span><span class="token keyword">typename</span> <span class="token class-name">T</span><span class="token operator">&gt;</span>
<span class="token keyword">class</span> <span class="token class-name">Ptr</span> <span class="token punctuation">{</span>
<span class="token keyword">private</span><span class="token operator">:</span>
    T <span class="token operator">*</span> object<span class="token punctuation">;</span> <span class="token comment">// \u7528\u4E8E\u667A\u80FD\u6307\u9488\u6307\u5411\u7BA1\u7406\u7684\u5BF9\u8C61  Person Student</span>
    <span class="token keyword">int</span> <span class="token operator">*</span> count<span class="token punctuation">;</span> <span class="token comment">// \u5F15\u7528\u8BA1\u6570</span>

<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token function">Ptr</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        count <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// new \u7684\u5BF9\u8C61 \u5FC5\u987B *\u6307\u9488   \u3010new\u53EA\u662F\u4E3A\u4E86\u540E\u9762\u64CD\u4F5C\u65B9\u4FBF\u3011</span>
        object <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// \u56E0\u4E3A\u4F60\u6CA1\u6709\u7ED9\u4ED6\u5BF9\u8C61\u5440\uFF0C\u4EBA\u5BB6\u4E5F\u6CA1\u6709\u5BF9\u8C61\u5440\uFF0C\u6CA1\u529E\u6CD5</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// t = Person Student</span>
    <span class="token function">Ptr</span><span class="token punctuation">(</span>T <span class="token operator">*</span> t<span class="token punctuation">)</span> <span class="token operator">:</span><span class="token function">object</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u53EA\u6709\u4F60\u5B58\u5165\u5BF9\u8C61\uFF0C\u90A3\u4E48\u5F15\u7528\u8BA1\u6570\u4E3A1\uFF0C\u8FD9\u4E2A\u662F\u5F88\u5408\u7406\u7684</span>
        count <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u6790\u6784\u51FD\u6570</span>
    <span class="token operator">~</span><span class="token function">Ptr</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5F15\u7528\u8BA1\u6570\u51CF1\uFF0C\u4E3A0\u6807\u8BC6\u53EF\u4EE5\u91CA\u653Eobject\u4E86</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">--</span><span class="token punctuation">(</span><span class="token operator">*</span>count<span class="token punctuation">)</span> <span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>object<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">delete</span> object<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// \u5F52\u96F6</span>
            <span class="token keyword">delete</span> count<span class="token punctuation">;</span>
            object <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u62F7\u8D1D\u6784\u9020\u51FD\u6570</span>
    <span class="token function">Ptr</span><span class="token punctuation">(</span><span class="token keyword">const</span> Ptr<span class="token operator">&lt;</span>T<span class="token operator">&gt;</span> <span class="token operator">&amp;</span> p<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u62F7\u8D1D\u6784\u9020\u51FD\u6570&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

        <span class="token comment">// sharedPtr1 == p \u7684\u5F15\u7528\u8BA1\u6570 +1  = 2</span>
        <span class="token operator">++</span><span class="token punctuation">(</span><span class="token operator">*</span>p<span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>

        object <span class="token operator">=</span> p<span class="token punctuation">.</span>object<span class="token punctuation">;</span>
        count <span class="token operator">=</span> p<span class="token punctuation">.</span>count<span class="token punctuation">;</span> <span class="token comment">// \u6700\u7EC8\u662F\u4E0D\u662F p.count==2 \u7ED9 count==2</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u81EA\u5B9A\u4E49 =\u53F7\u8FD0\u7B97\u7B26\u91CD\u8F7D</span>
    Ptr<span class="token operator">&lt;</span>T<span class="token operator">&gt;</span> <span class="token operator">&amp;</span> <span class="token keyword">operator</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">const</span> Ptr<span class="token operator">&lt;</span>T<span class="token operator">&gt;</span> <span class="token operator">&amp;</span> p<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;=\u53F7\u8FD0\u7B97\u7B26\u91CD\u8F7D&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

        <span class="token operator">++</span><span class="token punctuation">(</span><span class="token operator">*</span>p<span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// \u8FD9\u4E2A\u70B9\u975E\u5E38\u7ED5  \u8DF3\u8FC7  \u770B\u4E0D\u61C2\u6CA1\u6709\u5173\u7CFB\uFF0C\u540E\u9762\u4E13\u95E8\u89E3\u91CA (\u914D\u5408\u4EE3\u7801)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">--</span><span class="token punctuation">(</span><span class="token operator">*</span>count<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>object<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">delete</span> object<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">delete</span> count<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        object <span class="token operator">=</span> p<span class="token punctuation">.</span>object<span class="token punctuation">;</span>
        count <span class="token operator">=</span> p<span class="token punctuation">.</span>count<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token operator">*</span><span class="token keyword">this</span><span class="token punctuation">;</span> <span class="token comment">// \u8FD0\u7B97\u7B26\u91CD\u8F7D\u7684\u8FD4\u56DE</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u8FD4\u56DE\u5F15\u7528\u8BA1\u6570\u7684\u6570\u503C</span>
    <span class="token keyword">int</span> <span class="token function">use_count</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token operator">*</span><span class="token keyword">this</span><span class="token operator">-&gt;</span>count<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span> <span class="token comment">//CPPCLIONPROJECT_CUSTOMPTR_H</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u624B\u5199\u667A\u80FD\u6307\u94882" tabindex="-1"><a class="header-anchor" href="#\u624B\u5199\u667A\u80FD\u6307\u94882" aria-hidden="true">#</a> \u624B\u5199\u667A\u80FD\u6307\u94882</h3><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token comment">// TODO  \u624B\u5199\u667A\u80FD\u6307\u9488 2</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;CustomPtr.h&quot;</span></span>

<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token operator">~</span><span class="token function">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u6790\u6784\u51FD\u6570 \u91CA\u653EStudent&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// TODO \u667A\u80FD\u6307\u9488\u5185\u7F6E\u7684</span>
<span class="token keyword">void</span> <span class="token function">action</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Student <span class="token operator">*</span>student1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    Student <span class="token operator">*</span>student2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// TODO \u7B2C\u4E00\u79CD\u60C5\u51B5</span>
    <span class="token comment">/*shared_ptr&lt;Student&gt; sharedPtr1(student1);
    shared_ptr&lt;Student&gt; sharedPtr2(student2);*/</span>

    <span class="token comment">// TODO \u7B2C\u4E8C\u79CD\u60C5\u51B5</span>
    <span class="token comment">/*shared_ptr&lt;Student&gt; sharedPtr1 (student1);
    shared_ptr&lt;Student&gt; sharedPtr2 = sharedPtr1;*/</span>

    <span class="token comment">// TODO \u901A\u7528\u7684\u6253\u5370</span>
    <span class="token comment">/*cout &lt;&lt; &quot;\u667A\u80FD\u6307\u9488\u5185\u7F6E\u7684 sharedPtr1:&quot; &lt;&lt; sharedPtr1.use_count() &lt;&lt; endl;
    cout &lt;&lt; &quot;\u667A\u80FD\u6307\u9488\u5185\u7F6E\u7684 sharedPtr2:&quot; &lt;&lt; sharedPtr2.use_count() &lt;&lt; endl;*/</span>
<span class="token punctuation">}</span>

<span class="token comment">// TODO  \u624B\u5199\u7684\u667A\u80FD\u6307\u9488</span>
<span class="token keyword">void</span> <span class="token function">action2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Student <span class="token operator">*</span>student1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    Student <span class="token operator">*</span>student2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// TODO \u7B2C\u4E00\u79CD\u60C5\u51B5</span>
    <span class="token comment">/*Ptr&lt;Student&gt; sharedPtr1(student1);
    Ptr&lt;Student&gt; sharedPtr2(student2);*/</span>

    <span class="token comment">// TODO \u7B2C\u4E8C\u79CD\u60C5\u51B5</span>
    <span class="token comment">/*Ptr&lt;Student&gt; sharedPtr1 (student1);
    Ptr&lt;Student&gt; sharedPtr2 = sharedPtr1;*/</span>

    <span class="token comment">// TODO \u7B2C\u4E8C\u79CD\u60C5\u51B5</span>
    <span class="token comment">// TODO \u60C5\u51B5\u4E00</span>
    <span class="token comment">/*Ptr&lt;Student&gt; sharedPtr1 (student1); // sharedPtr1\u6784\u5EFA\u5BF9\u8C61
    Ptr&lt;Student&gt; sharedPtr2; // sharedPtr2\u4E5F\u4F1A\u6784\u5EFA\u5BF9\u8C61\uFF0C \u6B64\u5BF9\u8C61\u6307\u5411\u4E86object \u4E0E count\uFF0C\u5FC5\u987B\u91CA\u653E

    // \u5728\u4F60\u5199\u4E0B\u9762\u8FD9\u4E2A\u4E4B\u524D\uFF0C\u6211\u5FC5\u987B\u662F\u53D1 sharedPtr2 \u7684\u6240\u6709 object count \u5168\u90E8\u91CA\u653E
    // sharedPtr2\u5B8C\u5168\u91CA\u653E\u5E72\u51C0\u540E\uFF0C\u6211\u624D\u653E\u5FC3\u7136\u4F60\u8D4B\u503C sharedPtr2 = sharedPtr1
    sharedPtr2 = sharedPtr1;*/</span>


    <span class="token comment">// TODO \u60C5\u51B5\u4E8C</span>
    Ptr<span class="token operator">&lt;</span>Student<span class="token operator">&gt;</span> <span class="token function">sharedPtr1</span> <span class="token punctuation">(</span>student1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// sharedPtr1\u6784\u5EFA\u5BF9\u8C61</span>
    <span class="token comment">// student2 \u6210\u4E3A\u91CE\u5BF9\u8C61\uFF08\u6BCF\u4E00\u88AB\u667A\u80FD\u6307\u9488\u7BA1\u7406\u7684\u5BF9\u8C61 \u79F0\u4E3A \u91CE\u5BF9\u8C61\uFF09</span>
    Ptr<span class="token operator">&lt;</span>Student<span class="token operator">&gt;</span> <span class="token function">sharedPtr2</span> <span class="token punctuation">(</span>student2<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u5728\u4F60\u5199\u4E0B\u9762\u8FD9\u4E2A\u4E4B\u524D\uFF0C\u6211\u5FC5\u987B\u662F\u53D1 sharedPtr2 \u7684 \u7684 student2 \u5168\u90E8\u91CA\u653E\u6210\u529F</span>
    <span class="token comment">// sharedPtr2\u5B8C\u5168\u91CA\u653E\u5E72\u51C0\u540E,\u624D\u653E\u5FC3\u7136\u4F60\u8D4B\u503C sharedPtr2 = sharedPtr1</span>

    sharedPtr2 <span class="token operator">=</span> sharedPtr1<span class="token punctuation">;</span>

    <span class="token comment">// delete student2; // \u5982\u679C--\u54EA\u4E9B\u903B\u8F91\u4E0D\u5199\uFF0C\u5C31\u5FC5\u987B\u624B\u52A8\u662F\u5426 student2</span>

    <span class="token comment">// TODO \u901A\u7528\u7684\u6253\u5370</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u624B\u5199\u7684\u667A\u80FD\u6307\u9488 sharedPtr1:&quot;</span> <span class="token operator">&lt;&lt;</span> sharedPtr1<span class="token punctuation">.</span><span class="token function">use_count</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u624B\u5199\u7684\u667A\u80FD\u6307\u9488 sharedPtr2:&quot;</span> <span class="token operator">&lt;&lt;</span> sharedPtr2<span class="token punctuation">.</span><span class="token function">use_count</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u4E0B\u9762\u662F C++\u5185\u7F6E\u667A\u80FD\u6307\u9488 ===========&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token comment">// action();</span>
    cout <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u4E0B\u9762\u662F \u81EA\u5B9A\u4E49\u7684\u667A\u80FD\u6307\u9488 ===========&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token function">action2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7C7B\u578B\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u8F6C\u6362" aria-hidden="true">#</a> \u7C7B\u578B\u8F6C\u6362</h3><h4 id="const-cast" tabindex="-1"><a class="header-anchor" href="#const-cast" aria-hidden="true">#</a> const_cast</h4><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token comment">// 3.\u56DB\u79CD\u7C7B\u578B\u8F6C\u6362\u3002 const_cast     const\u4FEE\u9970\u7684 \u90FD\u53EF\u4EE5\u53BB\u8F6C\u6362</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    string name <span class="token operator">=</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> Person <span class="token operator">*</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// p1-&gt;name = &quot;Derry&quot;; // \u62A5\u9519\uFF1A\u5E38\u91CF\u6307\u9488\uFF0C\u4E0D\u5199\u4FEE\u6539\u503C</span>

    Person <span class="token operator">*</span> p2 <span class="token operator">=</span> <span class="token generic-function"><span class="token function">const_cast</span><span class="token generic class-name"><span class="token operator">&lt;</span>Person <span class="token operator">*</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>p1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8F6C\u6210 \u975E\u5E38\u91CF\u6307\u9488</span>
    p2<span class="token operator">-&gt;</span>name <span class="token operator">=</span> <span class="token string">&quot;Derry&quot;</span><span class="token punctuation">;</span>

    cout <span class="token operator">&lt;&lt;</span> p1<span class="token operator">-&gt;</span>name <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span> <span class="token comment">// Derry</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="static-cast" tabindex="-1"><a class="header-anchor" href="#static-cast" aria-hidden="true">#</a> static_cast</h4><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token comment">// 3.\u56DB\u79CD\u7C7B\u578B\u8F6C\u6362\u3002 static_cast   \u6307\u9488\u76F8\u5173\u7684\u64CD\u4F5C \u53EF\u4EE5\u7528 static_cast</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">FuClass</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;fu show&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">ZiClass</span>  <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">FuClass</span></span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;zi show&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> n <span class="token operator">=</span> <span class="token number">88</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token operator">*</span> pVoid <span class="token operator">=</span> <span class="token operator">&amp;</span>n<span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token operator">*</span> number <span class="token operator">=</span> <span class="token generic-function"><span class="token function">static_cast</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>pVoid<span class="token punctuation">)</span><span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>number <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    <span class="token comment">// ====================</span>

    FuClass <span class="token operator">*</span> fuClass <span class="token operator">=</span> <span class="token keyword">new</span> FuClass<span class="token punctuation">;</span>
    <span class="token comment">// fuClass-&gt;show();</span>

    <span class="token comment">// static_cast(\u7F16\u8BD1\u671F) \u770B\u5DE6\u8FB9 ZiClass *</span>
    ZiClass <span class="token operator">*</span> ziClass <span class="token operator">=</span> <span class="token generic-function"><span class="token function">static_cast</span><span class="token generic class-name"><span class="token operator">&lt;</span>ZiClass <span class="token operator">*</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>fuClass<span class="token punctuation">)</span><span class="token punctuation">;</span>
    ziClass<span class="token operator">-&gt;</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">delete</span> fuClass<span class="token punctuation">;</span> <span class="token comment">// \u56DE\u6536\u89C4\u5219\uFF1A\u4E00\u5B9A\u662F\u8C01new\u4E86\uFF0C\u6211\u5C31delete\u8C01</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="dynamic-cast" tabindex="-1"><a class="header-anchor" href="#dynamic-cast" aria-hidden="true">#</a> dynamic_cast</h4><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token comment">// 3.\u56DB\u79CD\u7C7B\u578B\u8F6C\u6362\u3002 dynamic \u5B57\u7B26\u7C7B\u591A\u6001 \u8FD0\u884C\u671F \u8F6C\u6362</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">FuClass</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token comment">// \u52A8\u6001\u8F6C\u6362\u5FC5\u987B\u8BA9\u7236\u7C7B\u6210\u4E3A\u865A\u51FD\u6570</span>
    <span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;fu show&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">ZiClass</span>  <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">FuClass</span></span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;zi show&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u52A8\u6001\u7C7B\u578B\u8F6C\u6362\u7684\u65F6\u5019\uFF0C\u5728\u8FD0\u884C\u671F \u7531\u4E8EfuClass \u662Fnew \u7236\u7C7B\u7684\uFF0C\u5DF2\u6210\u5B9A\u5C40\uFF0C\u5C31\u4E0D\u80FD\u8F6C\u6362\u5B50\u7C7B</span>
    <span class="token comment">// FuClass * fuClass = new FuClass(); // \u5931\u8D25</span>

    FuClass <span class="token operator">*</span> fuClass <span class="token operator">=</span> <span class="token keyword">new</span> ZiClass<span class="token punctuation">;</span> <span class="token comment">// \u5DF2\u6210\u5B9A\u5C40 \u662F\u5B50\u7C7B</span>
    ZiClass <span class="token operator">*</span> ziClass <span class="token operator">=</span> <span class="token generic-function"><span class="token function">dynamic_cast</span><span class="token generic class-name"><span class="token operator">&lt;</span>ZiClass <span class="token operator">*</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>fuClass<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// TODO \u5B50\u7C7B\u8F6C\u7236\u7C7B\u4E0D\u884C\u7684\uFF0C\u540C\u5B66\u4EEC\u81EA\u5DF1\u53BB\u8BD5\u4E00\u8BD5</span>

    <span class="token comment">// \u52A8\u6001\u8F6C\u6362\u662F\u6709\u8FD4\u56DE\u503C\uFF0C null \u8F6C\u6362\u5931\u8D25</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>ziClass<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// ziClass != null</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u606D\u559C\uFF0C\u8F6C\u6362\u6210\u529F &quot;</span> <span class="token punctuation">;</span>
        ziClass<span class="token operator">-&gt;</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u4E0D\u606D\u559C \u8F6C\u6362\u5931\u8D25&quot;</span> <span class="token operator">&lt;&lt;</span> endl <span class="token punctuation">;</span>
    <span class="token punctuation">}</span>



    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="reinterpret-cast" tabindex="-1"><a class="header-anchor" href="#reinterpret-cast" aria-hidden="true">#</a> reinterpret_cast</h4><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token comment">// 3.\u56DB\u79CD\u7C7B\u578B\u8F6C\u6362\u3002 reinterpret_cast \u5F3A\u5236\u8F6C\u6362 \u6BD4 static_cast\u8981\u5F3A\u5927\uFF0C static_cast\u80FD\u591F\u505A\u7684\u4E8B\u60C5\uFF0C</span>
<span class="token comment">// reinterpret_cast\u5F3A\u5236\u8F6C\u6362\u90FD\u53EF\u4EE5\uFF0C\u540C\u65F6\u5E76\u4E14\u9644\u52A0 \u65B0\u529F\u80FD</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">pragma</span> <span class="token expression">once</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">DerryPlayer</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;DerryPlayer&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    DerryPlayer <span class="token operator">*</span> derryPlayer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">DerryPlayer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">long</span> playerValue <span class="token operator">=</span> <span class="token generic-function"><span class="token function">reinterpret_cast</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token keyword">long</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>derryPlayer<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u628A\u5BF9\u8C61\u53D8\u6210\u6570\u503C</span>

    <span class="token comment">// \u901A\u8FC7\u6570\u503C \u53D8\u6210\u5BF9\u8C61</span>
    DerryPlayer <span class="token operator">*</span> derryPlayer2 <span class="token operator">=</span> <span class="token generic-function"><span class="token function">reinterpret_cast</span><span class="token generic class-name"><span class="token operator">&lt;</span>DerryPlayer <span class="token operator">*</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>playerValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    derryPlayer2<span class="token operator">-&gt;</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;derryPlayer:%p\\n&quot;</span><span class="token punctuation">,</span> derryPlayer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;derryPlayer2:%p\\n&quot;</span><span class="token punctuation">,</span> derryPlayer2<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u524D\u9762\u7684\u53EA\u662F\uFF1A\u4E3A\u4EC0\u4E48\u4E0D\u4E00\u6837\uFF1A\u56E0\u4E3A\u6307\u9488\u5B58\u653E\u5730\u5740\uFF0C\u540C\u65F6\u6307\u9488\u6709\u81EA\u5DF1\u7684\u5730\u5740\uFF0C\u800C\u4F60\u6253\u5370\u4E86\u81EA\u5DF1\u7684\u7684\u5730\u5740\uFF0C\u80FD\u4E00\u6837\uFF1F</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;derryPlayer:%p\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>derryPlayer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;derryPlayer2:%p\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>derryPlayer2<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="nullptr" tabindex="-1"><a class="header-anchor" href="#nullptr" aria-hidden="true">#</a> nullptr</h4><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; show(int * i) &quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token keyword">int</span>  i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; show(int  i) &quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">show</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">show</span><span class="token punctuation">(</span><span class="token keyword">nullptr</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// C++11 \u540E\u7684\u7279\u6027\uFF1A \u539F\u672C\u672C\u610F\u4EE3\u66FFNULL\uFF0C\u9664\u4E86\u4EE3\u66FFNULL\uFF0C\u8FD8\u6709\u6B64\u529F\u80FD</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9884\u5904\u7406\u5668" tabindex="-1"><a class="header-anchor" href="#\u9884\u5904\u7406\u5668" aria-hidden="true">#</a> \u9884\u5904\u7406\u5668</h3><h4 id="if-elif-endif" tabindex="-1"><a class="header-anchor" href="#if-elif-endif" aria-hidden="true">#</a> <code>#if</code> <code>#elif</code> <code>#endif</code></h4><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token comment">// TODO \u9884\u5904\u7406\u5668\u4E0D\u662F\u7F16\u8BD1\u5668\uFF0C\u9884\u5904\u7406\u5668\u4E3B\u8981\u5B8C\u6210\u6587\u672C\u66FF\u6362\u7684\u64CD\u4F5C\uFF08\u6587\u672C\u66FF\u6362\uFF0C\u4EE5\u540E\u4E13\u95E8\u5728Linux\u4E2D\u53BB\u8BB2\uFF09\uFF0C\u9884\u5904\u7406\u5668\u90FD\u662F\u7528 #xxx \u7684\u5199\u6CD5\uFF0C\u5E76\u4E0D\u662F\u6CE8\u91CA\u54E6</span>

<span class="token comment">/*
                                #include  \u5BFC\u5165\u5934\u6587\u4EF6
                                #if       if\u5224\u65AD\u64CD\u4F5C  \u3010if\u7684\u8303\u7574 \u5FC5\u987Bendif\u3011
                                #elif     else if
                                #else     else
                                #endif    \u7ED3\u675Fif
          #define   \u5B9A\u4E49\u4E00\u4E2A\u5B8F
          #ifdef    \u5982\u679C\u5B9A\u4E49\u4E86\u8FD9\u4E2A\u5B8F \u3010if\u7684\u8303\u7574 \u5FC5\u987Bendif\u3011
          #ifndef   \u5982\u679C\u6CA1\u6709\u5B9A\u4E49\u8FD9\u4E2A\u5B8F \u3010if\u7684\u8303\u7574 \u5FC5\u987Bendif\u3011
          #undef    \u53D6\u6D88\u5B8F\u5B9A\u4E49
          #pragma   \u8BBE\u5B9A\u7F16\u8BD1\u5668\u7684\u72B6\u6001
 */</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// std::cout &lt;&lt; &quot;\u5B8F&quot; &lt;&lt; std::endl;</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">if</span> <span class="token expression"><span class="token number">1</span> </span><span class="token comment">// if</span></span>
    cout <span class="token operator">&lt;&lt;</span>  <span class="token string">&quot;\u771F&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">elif</span> <span class="token expression"><span class="token number">0</span> </span><span class="token comment">// else if</span></span>
    cout <span class="token operator">&lt;&lt;</span>  <span class="token string">&quot;\u5047&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">else</span></span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u90FD\u4E0D\u6EE1\u8DB3&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span> <span class="token comment">// \u7ED3\u675Fif</span></span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u7ED3\u675Fif&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>#ifndef</code> <code>#define</code></p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifndef</span> <span class="token expression">CLIONCPPPROJECT_T2_H </span><span class="token comment">// \u5982\u679C\u6CA1\u6709\u5B9A\u4E49\u8FD9\u4E2A\u5B8F  \u89E3\u51B3\u5FAA\u73AF\u62F7\u8D1D\u7684\u95EE\u9898</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">CLIONCPPPROJECT_T2_H</span> <span class="token comment">// \u6211\u5C31\u5B9A\u4E49\u8FD9\u4E2A\u5B8F</span></span>

<span class="token comment">// 100 \u884C\u4EE3\u7801</span>
<span class="token comment">// \u7B2C\u4E00\u6B21\u80FD\u591F\u8FDB\u6765</span>
<span class="token comment">// \u7B2C\u4E8C\u6B21  \u7B2Cn\u6B64\u8FDB\u4E0D\u6765    \u76F4\u63A5 \u89E3\u51B3\u5FAA\u73AF\u62F7\u8D1D\u7684\u95EE\u9898\u4E86</span>

<span class="token comment">// ---------------</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifndef</span> <span class="token expression">isRelease </span><span class="token comment">// \u5982\u679C\u6CA1\u6709isRelease\u8FD9\u4E2A\u5B8F</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">isRelease</span> <span class="token expression"><span class="token number">1</span> </span><span class="token comment">// \u662F\u5426\u662F\u6B63\u5F0F\u73AF\u5883\u4E0B \u3010\u6211\u5C31\u5B9A\u4E49isRelease\u8FD9\u4E2A\u5B8F\u3011</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">if</span> <span class="token expression">isRelease <span class="token operator">==</span> <span class="token boolean">true</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">RELEASE</span> <span class="token comment">// \u6B63\u5F0F\u73AF\u5883\u4E0B \u5B9A\u4E49RELEASE\u5B8F</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">elif</span> <span class="token expression">isRelease <span class="token operator">==</span> <span class="token boolean">false</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">DEBUG</span> <span class="token comment">// \u6D4B\u8BD5\u73AF\u5883\u4E0B  \u5B9A\u4E49DEBUG\u5B8F</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span> <span class="token comment">// \u7ED3\u675F\u91CC\u9762\u7684if</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span> <span class="token comment">// \u7ED3\u675F\u91CC\u9762\u7684if</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span> <span class="token comment">//CLIONCPPPROJECT_T2_H // \u7ED3\u675F\u5916\u9762\u7684if</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;T2.h&quot;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// if \u6761\u4EF6\u5224\u65AD</span>
    <span class="token comment">// ifdef xxx \u662F\u5426\u5B9A\u4E49\u4E86xxx\u8FD9\u4E2A\u5B8F</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifdef</span> <span class="token expression">DEBUG </span><span class="token comment">// \u662F\u5426\u5B9A\u4E49\u4E86DEBUG\u8FD9\u4E2A\u5B8F</span></span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u5728\u6D4B\u8BD5\u73AF\u5883\u4E0B\uFF0C\u8FED\u4EE3\u529F\u80FD&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token comment">// \u7701\u7565 500\u884C ...</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">else</span> <span class="token expression">RELEASE</span></span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u5728\u6B63\u5F0F\u73AF\u5883\u4E0B\uFF0C\u529F\u80FD\u4E0A\u4E0B\u4E2D&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token comment">// \u7701\u7565 500\u884C ...</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span> <span class="token comment">// \u7ED3\u675FIF</span></span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>#undef</code></p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token comment">// \u5B8F\u7684\u53D6\u6D88 #undef \u5B8F</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifndef</span> <span class="token expression">DERRY </span><span class="token comment">// \u5982\u679C\u6CA1\u6709\u5B9A\u4E49\u8FD9\u4E2A\u5B8F</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">DERRY</span> <span class="token comment">// \u6211\u5C31\u5B9A\u4E49\u5B8F</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifdef</span> <span class="token expression">DERRY </span><span class="token comment">// \u662F\u5426\u5B9A\u4E49\u4E86\u8FD9\u4E2A\u5B8F</span></span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">6</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Derry 1&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u7701\u7565 500\u884C ...</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifdef</span> <span class="token expression">DERRY </span><span class="token comment">// \u662F\u5426\u5B9A\u4E49\u4E86\u8FD9\u4E2A\u5B8F</span></span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">6</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Derry 2&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u7701\u7565 500\u884C ...</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">undef</span> <span class="token expression">DERRY </span><span class="token comment">// \u53D6\u6D88\u5B8F\u7684\u5B9A\u4E49\uFF0C\u4E0B\u9762\u7684\u4EE3\u7801\uFF0C\u5C31\u6CA1\u6CD5\u7528\u8FD9\u4E2A\u5B8F\u4E86\uFF0C\u76F8\u5F53\u4E8E\uFF1A\u6CA1\u6709\u5B9A\u4E49\u8FC7DERRY\u5B8F</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifdef</span> <span class="token expression">DERRY</span></span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u4F60\u5B9A\u4E49\u4E86Derry\u5B8F&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">else</span></span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u4F60\u6CA1\u6709\u5B9A\u4E49\u4E86Derry\u5B8F&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7F16\u8F91\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8F91\u8FC7\u7A0B" aria-hidden="true">#</a> \u7F16\u8F91\u8FC7\u7A0B</h3><ul><li>\u9884\u5904\u7406(\u5B8F\u5C55\u5F00\uFF0C\u5B8F\u66FF\u6362)-&gt;\u9884\u7F16\u8BD1\uFF0C\u68C0\u67E5\u4EE3\u7801-&gt;\u6C47\u7F16\u9636\u6BB5-&gt;\u94FE\u63A5\u9636\u6BB5(.a, .so)-&gt;\u751F\u6210.exe</li></ul><h3 id="\u5B8F\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u5B8F\u53D8\u91CF" aria-hidden="true">#</a> \u5B8F\u53D8\u91CF</h3><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token comment">// \u5B8F\u51FD\u6570 \u771F\u5B9E\u5F00\u53D1\u4E2D\uFF1A\u5B8F\u51FD\u6570\u90FD\u662F\u5927\u5199</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">SHOW</span><span class="token expression"><span class="token punctuation">(</span>V<span class="token punctuation">)</span> cout <span class="token operator">&lt;&lt;</span> V <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span> </span><span class="token comment">// \u53C2\u6570\u5217\u8868 \u65E0\u9700\u7C7B\u578B  \u8FD4\u56DE\u503C \u770B\u4E0D\u5230</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">ADD</span><span class="token expression"><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">)</span> n1 <span class="token operator">+</span> n2</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">CHE</span><span class="token expression"><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">)</span> n1 <span class="token operator">*</span> n2 </span><span class="token comment">// \u6545\u610F\u5236\u4F5C\u95EE\u9898 \uFF0C\u5B8F\u51FD\u6570\u7684\u6CE8\u610F\u4E8B\u9879</span></span>

<span class="token comment">// \u590D\u6742\u7684\u5B8F\u51FD\u6570</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">LOGIN</span><span class="token expression"><span class="token punctuation">(</span>V<span class="token punctuation">)</span> <span class="token keyword">if</span><span class="token punctuation">(</span>V<span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>                         </span><span class="token punctuation">\\</span>
    <span class="token expression">cout <span class="token operator">&lt;&lt;</span> </span><span class="token string">&quot;\u6EE1\u8DB3 \u4F60\u4E2A\u8D27\u8F93\u5165\u7684\u662F:&quot;</span> <span class="token expression"><span class="token operator">&lt;&lt;</span> V <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>        </span><span class="token punctuation">\\</span>
<span class="token expression"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>                                             </span><span class="token punctuation">\\</span>
    <span class="token expression">cout <span class="token operator">&lt;&lt;</span> </span><span class="token string">&quot;\u4E0D\u6EE1\u8DB3 \u4F60\u4E2A\u8D27\u8F93\u5165\u7684\u662F:&quot;</span> <span class="token expression"><span class="token operator">&lt;&lt;</span> V <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>       </span><span class="token punctuation">\\</span>
<span class="token expression"><span class="token punctuation">}</span> </span><span class="token comment">// \u8FD9\u4E2A\u662F\u7ED3\u5C3E\uFF0C\u4E0D\u9700\u8981\u52A0 \\
</span></span>
<span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">SHOW</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">SHOW</span><span class="token punctuation">(</span><span class="token number">8.8f</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">SHOW</span><span class="token punctuation">(</span><span class="token number">8.99</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">int</span> r <span class="token operator">=</span> <span class="token function">ADD</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> r <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    r <span class="token operator">=</span> <span class="token function">ADD</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token operator">+</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> r <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    <span class="token comment">// r = CHE(1+1, 2+2);</span>
    r <span class="token operator">=</span> <span class="token number">1</span><span class="token operator">+</span><span class="token number">1</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token operator">+</span><span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// \u6587\u672C\u66FF\u6362\uFF1A1+1 * 2+2  \u5148\u7B97\u4E58\u6CD5  \u6700\u7EC8\u7B49\u4E8E 5</span>
    cout <span class="token operator">&lt;&lt;</span> r <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span> <span class="token comment">// \u6211\u4EEC\u8BA4\u4E3A\u7684\u662F8\uFF0C   \u4F46\u662F\u6253\u53705</span>

    <span class="token function">LOGIN</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">LOGIN</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">LOGIN</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">LOGIN</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">LOGIN</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">LOGIN</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u4F1A\u5BFC\u81F4\u4EE3\u7801\u4F53\u79EF\u589E\u5927</span>

    <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u666E\u901A\u51FD\u6570\uFF0C\u6BCF\u6B21\u90FD\u4F1A\u8FDB\u6808 \u5F39\u6808 \uFF0C\u4E0D\u4F1A\u5BFC\u81F4\u4EE3\u7801\u4F53\u79EF\u589E\u5927</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5B8F\u51FD\u6570</span>
<span class="token comment">/*
 * \u4F18\u70B9\uFF1A
 *   1.\u6587\u672C\u66FF\u6362\uFF0C\u4E0D\u4F1A\u9020\u6210\u51FD\u6570\u7684\u8C03\u7528\u5F00\u9500(\u5F00\u8F9F\u6808\u7A7A\u95F4\uFF0C\u5F62\u53C2\u538B\u6808\uFF0C\u51FD\u6570\u5F39\u6808\u91CA\u653E ..)
 *
 * \u7F3A\u70B9\uFF1A
 *   1.\u4F1A\u5BFC\u81F4\u4EE3\u7801\u4F53\u79EF\u589E\u5927
 *
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c-\u5F02\u5E38" tabindex="-1"><a class="header-anchor" href="#c-\u5F02\u5E38" aria-hidden="true">#</a> C++\u5F02\u5E38</h3><ul><li>c++\u5F02\u5E38\u5FC5\u987B\u662F\u6839\u636E\u7C7B\u578B\u6765\u629B\u51FA\u5F02\u5E38</li></ul><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">exceptionMethod01</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token string">&quot;\u6211\u62A5\u5E9F\u4E86&quot;</span><span class="token punctuation">;</span> <span class="token comment">// const char *</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">char</span> <span class="token operator">*</span> <span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;\u81EA\u5B9A\u4E49&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">exceptionMethod02</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Student student<span class="token punctuation">;</span>
    <span class="token keyword">throw</span> student<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token function">exceptionMethod01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span> <span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span> <span class="token operator">&amp;</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u6355\u83B7\u5230\u5F02\u5E381\uFF1A&quot;</span> <span class="token operator">&lt;&lt;</span> msg <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token function">exceptionMethod02</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>Student <span class="token operator">&amp;</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;\u6355\u83B7\u5230\u5F02\u5E382\uFF1A&quot;</span> <span class="token operator">&lt;&lt;</span> msg<span class="token punctuation">.</span><span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,65),o=[p];function c(l,i){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","C++-base.html.vue"]]);export{d as default};
