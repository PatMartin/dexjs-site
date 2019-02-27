+++
date = "2016-12-28T13:37:53-05:00"
title = "Data Visualization List"
[menu.main]
  identifier = "lists"

[params]
  scripts = [
    "https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.4/isotope.pkgd.js"
  ]
  css = [
  ]
+++

# Data Visualization

<div>
    <label>Condition:</label>
    <div id="operation" class="btn-group" data-toggle="buttons">
        <label class="btn btn-primary">
            <input type="radio" name="options" value="and"> And </input>
        </label>
        <label class="btn btn-primary active">
            <input type="radio" name="options" value="or"> Or </input>
        </label>
    </div>
    <label>Categories:</label>
    <select id="filter-selector" multiple="multiple">
        <optgroup label="Type">
            <option value=".app">Application</option>
            <option value=".framework">Framework</option>
            <option value=".utility">Utility</option>
            <option value=".blog">Blog</option>
        </optgroup>
        <optgroup label="Technology">
            <option value=".javascript">Javascript</option>
            <option value=".java">Java</option>
            <option value=".html">HTML/CSS</option>
            <option value=".webgl">WebGL</option>
        </optgroup>
    </select>
</div>

<div class="grid">
    <div class="deck java webgl app">
        <div class="card" onclick="flip(this)">
            <div class="front">
                <img src="/images/lists/viz/dex.png"></img>
                <h4>Dex : The Data Explorer</h4>
                <p>Dex is a Java application which provides ETL and powerful
                    data visualization capabilities without the need for programming.</p>
            </div>
            <div class="back">
                <h4>Dex : The Data Explorer</h4>
                <hr>
                <p><strong>TYPE: </strong>Application</p>
                <p><strong>TECHNOLOGY: </strong>Java</p>
                <p><strong>LICENSE: </strong>APL 2.0</p>
                <p><strong>LINKS:</strong></p>
                <ul>
                    <li><a href="https://dexvis.net/">Official Site</a></li>
                    <li><a href="https://github.com/PatMartin/dex">Source</a></li>
                    <li><a href="https://dexvis.wordpress.com/">Blog</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="deck javascript webgl framework">
        <div class="card" onclick="flip(this)">
            <div class="front">
                <img src="/images/lists/viz/dexjs.png"></img>
                <h4>dex.js</h4>
                <p>dex.js is a JavaScript framework designed for embedding into
                    other tools by providing a consistent interface with external
                    hooks for configuration, filtering and visual control.</p>
            </div>
            <div class="back">
                <h4>dex.js</h4>
                <hr>
                <p><strong>TYPE: </strong>Framework</p>
                <p><strong>TECHNOLOGY: </strong>Javascript</p>
                <p><strong>LICENSE: </strong>APL 2.0</p>
                <p><strong>LINKS:</strong></p>
                <ul>
                    <li><a href="https://dexjs.net/">Official Site</a></li>
                    <li><a href="https://github.com/PatMartin/dexjs">Source</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="deck javascript framework">
        <div class="card" onclick="flip(this)">
            <div class="front">
                <img src="/images/lists/viz/d3.png"></img>
                <h4>D3.js</h4>
                <p>D3.js is a JavaScript library for manipulating documents based on data.
                    D3 helps you bring data to life using HTML, SVG, and CSS with an emphasis on
                    web standards.</p>
            </div>
            <div class="back">
                <h4>D3.js</h4>
                <hr>
                <p><strong>TYPE: </strong>Framework</p>
                <p><strong>TECHNOLOGY: </strong>Javascript</p>
                <p><strong>LICENSE: </strong>BSD</p>
                <p><strong>LINKS:</strong></p>
                <ul>
                    <li><a href="https://d3js.org/">Official Site</a></li>
                    <li><a href="https://github.com/d3/d3">Source</a></li>
                    <li><a href="https://bost.ocks.org/mike/">Blog</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="deck javascript framework">
        <div class="card" onclick="flip(this)">
            <div class="front">
                <img src="/images/lists/viz/visjs.png"></img>
                <h4>Vis.js</h4>
                <p>A dynamic, browser based visualization library; designed to be easy to use,
                    to handle large amounts of dynamic data, and to enable manipulation of
                    and interaction with the data.</p>
            </div>
            <div class="back">
                <h4>Vis.js</h4>
                <hr>
                <p><strong>TYPE: </strong>Framework</p>
                <p><strong>TECHNOLOGY: </strong>Javascript</p>
                <p><strong>LICENSE: </strong>APL 2.0</p>
                <p><strong>LINKS:</strong></p>
                <ul>
                    <li><a href="https://visjs.org/">Official Site</a></li>
                    <li><a href="https://github.com/almende/vis">Source</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="deck javascript webgl framework">
        <div class="card" onclick="flip(this)">
            <div class="front">
                <img src="/images/lists/viz/echarts.png"></img>
                <h4>ECharts</h4>
                <p>ECharts is a powerful charting and visualization library offering
                    intuitive, interactive, and highly customizable charts.
                    Written in pure JavaScript and based on zrender; a custom, lightweight
                    high performance canvas library.</p>
            </div>
            <div class="back">
                <h4>ECharts</h4>
                <hr>
                <p><strong>TYPE: </strong>Framework</p>
                <p><strong>TECHNOLOGY: </strong>Javascript</p>
                <p><strong>LICENSE: </strong>BSD 3</p>
                <p><strong>LINKS:</strong></p>
                <ul>
                    <li><a href="http://echarts.baidu.com/">Official Site</a></li>
                    <li><a href="https://github.com/ecomfe/echarts">Source</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="deck javascript framework">
        <div class="card" onclick="flip(this)">
            <div class="front">
                <img src="/images/lists/viz/taucharts.png"></img>
                <h4>TauCharts</h4>
                <p>A powerful visualization framework designed on the principles of the
                    Grammar of Graphics. Excellent design, surprisingly flexible and great
                    attention to filtering and multiples (facets).</p>
            </div>
            <div class="back">
                <h4>TauCharts</h4>
                <hr>
                <p><strong>TYPE: </strong>Framework</p>
                <p><strong>TECHNOLOGY: </strong>Javascript</p>
                <p><strong>LICENSE: </strong>APL 2.0</p>
                <p><strong>LINKS:</strong></p>
                <ul>
                    <li><a href="https://www.taucharts.com/">Official Site</a></li>
                    <li><a href="https://github.com/TargetProcess/tauCharts">Source</a></li>
                    <li><a href="https://blog.taucharts.com/">Blog</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="deck javascript framework">
        <div class="card" onclick="flip(this)">
            <div class="front">
                <img src="/images/lists/viz/nvd3.png"></img>
                <h4>NVD3</h4>
                <p>NVD3 is a superb visualization library built on top of D3.js (v3). It
                    offers a number of polished basic charts which are very easy to use.</p>
            </div>
            <div class="back">
                <h4>NVD3</h4>
                <hr>
                <p><strong>TYPE: </strong>Framework</p>
                <p><strong>TECHNOLOGY: </strong>Javascript</p>
                <p><strong>LICENSE: </strong>APL 2.0</p>
                <p><strong>LINKS:</strong></p>
                <ul>
                    <li><a href="http://nvd3.org/index.html">Official Site</a></li>
                    <li><a href="https://github.com/novus/nvd3">Source</a></li>
                    <li><a href="http://nvd3.org/blog/archives/">Blog</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="deck javascript framework">
        <div class="card" onclick="flip(this)">
            <div class="front">
                <img src="/images/lists/viz/c3js.png"></img>
                <h4>C3.js</h4>
                <p>C3js provides a number of very polished and highly configurable
                    reusable charts based upon D3.js (v3).</p>
            </div>
            <div class="back">
                <h4>C3.js</h4>
                <hr>
                <p><strong>TYPE: </strong>Framework</p>
                <p><strong>TECHNOLOGY: </strong>Javascript</p>
                <p><strong>LICENSE: </strong>MIT</p>
                <p><strong>LINKS:</strong></p>
                <ul>
                    <li><a href="http://c3js.org/">Official Site</a></li>
                    <li><a href="https://github.com/c3js/c3">Source</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="deck javascript webgl framework">
        <div class="card" onclick="flip(this)">
            <div class="front">
                <img src="/images/lists/viz/processingjs.png"></img>
                <h4>Processing.js</h4>
                <p>Processing.js is an implementation of the Processing language for
                    the browser. It provides powerful canvas and webgl visualization
                    capabilities.</p>
            </div>
            <div class="back">
                <h4>Processing.js</h4>
                <hr>
                <p><strong>TYPE: </strong>Framework</p>
                <p><strong>TECHNOLOGY: </strong>Javascript</p>
                <p><strong>LICENSE: </strong>MIT</p>
                <p><strong>LINKS:</strong></p>
                <ul>
                    <li><a href="http://processingjs.org/">Official Site</a></li>
                    <li><a href="https://github.com/processing-js/processing-js/">Source</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="deck javascript webgl framework">
        <div class="card" onclick="flip(this)">
            <div class="front">
                <img src="/images/lists/viz/vivagraph.png"></img>
                <h4>VivaGraph</h4>
                <p>VivaGraph is a WebGL based force network implementation which scales
                    to much larger networks than other browser based network implementations.</p>
            </div>
            <div class="back">
                <h4>VivaGraph</h4>
                <hr>
                <p><strong>TYPE: </strong>Framework</p>
                <p><strong>TECHNOLOGY: </strong>Javascript</p>
                <p><strong>LICENSE: </strong>BSD 3</p>
                <p><strong>LINKS:</strong></p>
                <ul>
                    <li><a href="https://github.com/anvaka/VivaGraphJS">Source</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="deck javascript framework">
        <div class="card" onclick="flip(this)">
            <div class="front">
                <img src="/images/lists/viz/vega.png"></img>
                <h4>Vega</h4>
                <p>Vega is a visualization grammar, a declarative language for creating,
                    saving, and sharing interactive visualization designs.</p>
            </div>
            <div class="back">
                <h4>Vega</h4>
                <hr>
                <p><strong>TYPE: </strong>Framework</p>
                <p><strong>TECHNOLOGY: </strong>Javascript</p>
                <p><strong>LICENSE: </strong>BSD 3</p>
                <p><strong>LINKS:</strong></p>
                <ul>
                    <li><a href="https://vega.github.io/vega/">Official Site</a></li>
                    <li><a href="https://github.com/vega/vega">Source</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="deck javascript webgl framework">
        <div class="card" onclick="flip(this)">
            <div class="front">
                <img src="/images/lists/viz/threejs.png"></img>
                <h4>Three.js</h4>
                <p>Three.js is an amazing library for simplifying the creation of
                    WebGL visualizations.</p>
            </div>
            <div class="back">
                <h4>Three.js</h4>
                <hr>
                <p><strong>TYPE: </strong>Framework</p>
                <p><strong>TECHNOLOGY: </strong>Javascript</p>
                <p><strong>LICENSE: </strong>MIT</p>
                <p><strong>LINKS:</strong></p>
                <ul>
                    <li><a href="https://threejs.org/">Official Site</a></li>
                    <li><a href="https://github.com/mrdoob/three.js/">Source</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="deck javascript framework">
        <div class="card" onclick="flip(this)">
            <div class="front">
                <img src="/images/lists/viz/d3plus.png"></img>
                <h4>D3plus</h4>
                <p>D3plus is a javascript library based upon D3.js which provides a number
                    of reusable charts; some unique to D3plus.</p>
            </div>
            <div class="back">
                <h4>Three.js</h4>
                <hr>
                <p><strong>TYPE: </strong>Framework</p>
                <p><strong>TECHNOLOGY: </strong>Javascript</p>
                <p><strong>LICENSE: </strong>MIT</p>
                <p><strong>LINKS:</strong></p>
                <ul>
                    <li><a href="https://d3plus.org/">Official Site</a></li>
                    <li><a href="https://github.com/alexandersimoes/d3plus">Source</a></li>
                    <li><a href="https://d3plus.org/blog/">Blog</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="deck javascript utility">
        <div class="card" onclick="flip(this)">
            <div class="front">
                <img src="/images/lists/viz/colajs.png"></img>
                <h4>cola.js</h4>
                <p>cola.js is a javascript based constraint based layout manager which
                    can be plugged into other frameworks such as D3, Cytoscape and Three.js.</p>
            </div>
            <div class="back">
                <h4>cola.js</h4>
                <hr>
                <p><strong>TYPE: </strong>Utility</p>
                <p><strong>TECHNOLOGY: </strong>Javascript</p>
                <p><strong>LICENSE: </strong>MIT</p>
                <p><strong>LINKS:</strong></p>
                <ul>
                    <li><a href="http://marvl.infotech.monash.edu/webcola/">Official Site</a></li>
                    <li><a href="https://github.com/tgdwyer/WebCola">Source</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="deck java app">
        <div class="card" onclick="flip(this)">
            <div class="front">
                <img src="/images/lists/viz/gephi.png"></img>
                <h4>Gephi</h4>
                <p>Gephi is a powerful open source network exploration and visualization
                    framework capabile of complex analysis.</p>
            </div>
            <div class="back">
                <h4>Gephi</h4>
                <hr>
                <p><strong>TYPE: </strong>Application</p>
                <p><strong>TECHNOLOGY: </strong>Java</p>
                <p><strong>LICENSE: </strong>CDDL 1.0 and GPL v3</p>
                <p><strong>LINKS:</strong></p>
                <ul>
                    <li><a href="https://gephi.org/">Official Site</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="deck blog">
        <div class="card" onclick="flip(this)">
            <div class="front">
                <img src="/images/lists/viz/data_imaginist.png"></img>
                <h4>Data Imaginist</h4>
                <p>A data visualization blog by data scientist: Thomas Lin Pedersen.</p>
            </div>
            <div class="back">
                <h4>Data Imaginist</h4>
                <hr>
                <p><strong>TYPE: </strong>Blog</p>
                <p><strong>TECHNOLOGY: </strong>R</p>
                <p><strong>LINKS:</strong></p>
                <ul>
                    <li><a href="http://www.data-imaginist.com/">Official Site</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
