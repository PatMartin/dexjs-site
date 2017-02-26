+++
date = "2016-12-31T12:46:08-05:00"
title = "December 2016 Update"
class = "post"
[menu.main]
  identifier = "posts"
+++

# December 2016 Update

Periodically I will share my ongoing work and intended direction
around the dex.js project.

Over the Christmas holidays, I was fortunate enough to steal enough
time to give the project the attention it has needed for awhile.

One of my main focuses over the Christmas holidays was getting dex.js in a
state where it was easier for people to consume.  One of the main issues I
had (and still have) was documentation.  While dex.js is a foundation
technology for it's parent project [Dex](http://dexvis.net/), it is a
separate project with a separate audience in it's own right.

So I decided to provide it via it's own dedicated site.  However, I really
wanted to focus on content and knowledge transfer rather than wrestle with
HTML all the time, so I looked into static site generators.

## Static Site Generation

After looking at a large number of approaches to static site generation,
I finally decided to use Hugo.  While Jekyll is slightly more popular in
this arena, I found it's intricate set of rubygem dependencies and it's
greater learning curve to be more than I have time to contend with.

Hugo comes in a single bundle and allowed me to get running pretty
quickly with plenty of control over my content.

Now that I am using Hugo, I no longer have to make static shots of my
visuals which link over to dynamic ones hosted elsewhere.  I now have
greater control over my content.

## Multi-Component Tenancy

Once I started creating pages with 20 or more visuals on a single page, 
flaws started to emerge.  There were lots of assumptions of single
visualization per page in my code.  I think I have most of it taken care
of, however, I am sure there's a bit left to address.

Typically, this kind of assumption comes in the form of a selector which
assumes something like:

 `d3.selectAll("rect").doSomething();`

Instead of something like:

 `chartContainer.seletAll("rect").doSomething()`
 
While it's a fairly easy fix, it's all over and I am working to address this.

## Interoperability

I am working to add more hooks where charts can interoperate; where one chart
can communicate changes to other charts.

## Bug fixes

There have been too many bug fixes to discuss in detail.  However, it is
evident that I need to centralize some of the basic things such as margins
and resize behavior into a core parent class such as "Component".

## Javascript and Framework Evolution

I attempted to follow [Mike Bostock's lead in adopting ES2005 modules] and tried
to upgrade some of the charts to D3 v4.

I had to abort for now due to the large number of visuals that would be impacted.
It also seems that my modular naming convention won't really work when I migrate,
so I am hoping that the community solves my problem so I don't have to.

The main problem lies in the core differences between CommonJS module conventions
and ES2005 modules.  While rollup could be employed to address this, it was
evident that the change was going to run quite a bit deeper than I was ready to
address.

To make matters worse, D3v4 isn't backward compatible either; in part due to
future proofing for ECMAScript 6.  So I remain in a holding pattern until I
get enough time to ensure I can address the whole framework at once.

## Other Stuff

I deprecated a few of the components I felt were visually redundant.  For example,
the C3 based line and bar charts were far superior to the ones I had adopted
from the D3 community.  So I selected best of breed and eliminated (for now) the
less suitable candidates.

I also deprecated the D3 force diagram in favor of the much more flexible and
downright cool Vis.js one.

# Future Direction

My focus will be primarily on:

  * Future proofing
    * Adopting the latest [D3](https://d3js.org/)
    * Adopting [ES2015 modules](http://www.2ality.com/2014/09/es6-modules-final.html) and [rollup](http://rollupjs.org/)
  * More visualizations
  * Better iteroperability
  * Better tool-hooks for things like Dex.
  
That's it for now, thanks for listening!

- Pat