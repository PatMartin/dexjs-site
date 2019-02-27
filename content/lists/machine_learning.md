+++
date = "2016-12-28T13:37:53-05:00"
title = "Machine Learning List"
[menu.main]
  identifier = "lists"

[params]
  scripts = [
    "https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.4/isotope.pkgd.js"
  ]
  css = [
  ]
+++

# Machine Learning

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
            <option value=".reference">Reference</option>
            <option value=".framework">Framework</option>
        </optgroup>
        <optgroup label="Technology">
            <option value=".javascript">Javascript</option>
            <option value=".java">Java</option>
        </optgroup>
    </select>
</div>

<div class="grid">
    <div class="deck java framework">
        <div class="card" onclick="flip(this)">
            <div class="front">
                <img src="/images/lists/ml/smile_ml.png"></img>
                <h4>Smile ML</h4>
                    <p>SMILE is an amazing and comprehensive machine learning platform written in Java.</p>
            </div>
            <div class="back">
                <h4>Introduction to ML in JS</h4>
                <hr>
                <p><strong>TYPE: </strong>Framework</p>
                <p><strong>TECHNOLOGY: </strong>Java</p>
                <p><strong>LICENSE: APL 2.0</strong>N/A</p>
                <p><strong>LINKS:</strong></p>
                <ul>
                    <li><a href="https://haifengl.github.io/smile/">Official Site</a></li>
                    <li><a href="https://github.com/haifengl/smile">GitHub</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="deck java framework">
        <div class="card" onclick="flip(this)">
            <div class="front">
                <img src="/images/lists/ml/datum_box.png"></img>
                <h4>Datum Box</h4>
                    <p>Datumbox offers a powerful open-source Machine Learning Framework written in Java.
                    Datumbox offers a large collection of algorithms, models, statistical tests and tools.</p>
            </div>
            <div class="back">
                <h4>Introduction to ML in JS</h4>
                <hr>
                <p><strong>TYPE: </strong>Framework</p>
                <p><strong>TECHNOLOGY: </strong>Java</p>
                <p><strong>LICENSE: APL 2.0</strong>N/A</p>
                <p><strong>LINKS:</strong></p>
                <ul>
                    <li><a href="http://www.datumbox.com/">Official Site</a></li>
                    <li><a href="https://github.com/datumbox">GitHub</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="deck java app">
        <div class="card" onclick="flip(this)">
            <div class="front">
                <img src="/images/lists/ml/weka.png"></img>
                <h4>Weka</h4>
                <p>Weka is a collection of machine learning algorithms for data
                    mining tasks. Weka contains tools for data pre-processing,
                    classification, regression, clustering,
                    association rules, and visualization.</p>
            </div>
            <div class="back">
                <h4>Weka</h4>
                <hr>
                <p><strong>TYPE: </strong>Application</p>
                <p><strong>TECHNOLOGY: </strong>Java</p>
                <p><strong>LICENSE: </strong>GPL v3</p>
                <p><strong>LINKS:</strong></p>
                <ul>
                    <li><a href="http://www.cs.waikato.ac.nz/ml/weka/">Official Site</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="deck java app">
        <div class="card" onclick="flip(this)">
            <div class="front">
                <img src="/images/lists/ml/rapidminer.png"></img>
                <h4>Rapid Miner</h4>
                <p>RapidMiner is a polished application for preparing and analyzing data.
                    All in a single platform, no coding required.</p>
            </div>
            <div class="back">
                <h4>Rapid Miner</h4>
                <hr>
                <p><strong>TYPE: </strong>Application</p>
                <p><strong>TECHNOLOGY: </strong>Java</p>
                <p><strong>LICENSE: </strong>AGPL v3 / Commercial</p>
                <p><strong>LINKS:</strong></p>
                <ul>
                    <li><a href="https://rapidminer.com/">Official Site</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="deck javascript reference">
        <div class="card" onclick="flip(this)">
            <div class="front">
                <img src="/images/lists/ml/ml.png"></img>
                <h4>Introduction to ML in JS</h4>
                <p>A series of blog articles with code in JavaScript implementing a number
                    of reference ML algorithms.</p>
            </div>
            <div class="back">
                <h4>Introduction to ML in JS</h4>
                <hr>
                <p><strong>TYPE: </strong>Application</p>
                <p><strong>TECHNOLOGY: </strong>Javascript</p>
                <p><strong>LICENSE: </strong>N/A</p>
                <p><strong>LINKS:</strong></p>
                <ul>
                    <li><a href="https://www.burakkanber.com/blog/machine-learning-in-other-languages-introduction/">Official
                        Site</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>