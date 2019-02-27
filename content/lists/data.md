+++
date = "2016-12-28T13:37:53-05:00"
title = "Data List"
[menu.main]
  identifier = "lists"

[params]
  scripts = [
    "https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.4/isotope.pkgd.js"
  ]
  css = [
  ]
+++

# Datasets and Applications

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
            <option value=".repo">Repository</option>
        </optgroup>
    </select>
</div>

<div class="grid">
    <div class="deck repo">
        <div class="card" onclick="flip(this)">
            <div class="front">
                <img src="/images/lists/data/kaggle.png"></img>
                <h4>Kaggle</h4>
                <p>Kaggle has a number of datasets for public download. Kaggle
                    also hosts a number of data science related contests often with
                    significant cash prizes.</p>
            </div>
            <div class="back">
                <h4>Kaggle</h4>
                <hr>
                <p><strong>LINKS:</strong></p>
                <ul>
                    <li><a href="https://www.kaggle.com/datasets">Official Site</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="deck app">
        <div class="card" onclick="flip(this)">
            <div class="front">
                <img src="/images/lists/data/openrefine.png"></img>
                <h4>Open Refine</h4>
                <p>OpenRefine (formerly Google Refine) is a powerful tool for
                    working with messy data: cleaning it; transforming it from one
                    format into another; and extending it with web services and
                    external data.</p>
            </div>
            <div class="back">
                <h4>Open Refine</h4>
                <hr>
                <p><strong>LINKS:</strong></p>
                <ul>
                    <li><a href="http://openrefine.org/">Official Site</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="deck repo">
        <div class="card" onclick="flip(this)">
            <div class="front">
                <img src="/images/lists/data/kdnuggets.png"></img>
                <h4>KD Nuggets</h4>
                <p>KD Nuggets hosts a number of open datasets..</p>
            </div>
            <div class="back">
                <h4>KD Nuggets</h4>
                <hr>
                <p><strong>LINKS:</strong></p>
                <ul>
                    <li><a href="http://www.kdnuggets.com/datasets/index.html">Datasets</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="deck repo">
        <div class="card" onclick="flip(this)">
            <div class="front">
                <img src="/images/lists/data/dataworld.png"></img>
                <h4>Data World</h4>
                <p>Data World is a commercial site hosting thousands of datasets. It offers
                    search and hosting facilities with a free preview mode.</p>
            </div>
            <div class="back">
                <h4>Data World</h4>
                <hr>
                <p><strong>LINKS:</strong></p>
                <ul>
                    <li><a href="https://data.world/">Official Site</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="deck repo">
        <div class="card" onclick="flip(this)">
            <div class="front">
                <img src="/images/lists/data/data.png"></img>
                <h4>Awesome Public Datasets</h4>
                <p>An awesome list of public datasets hosted on Github.</p>
            </div>
            <div class="back">
                <h4>Awesome Public Datasets</h4>
                <hr>
                <p><strong>LINKS:</strong></p>
                <ul>
                    <li><a href="https://github.com/caesar0301/awesome-public-datasets">Github</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="deck repo">
        <div class="card" onclick="flip(this)">
            <div class="front">
                <img src="/images/lists/data/aws_datasets.png"></img>
                <h4>AWS Large Datasets</h4>
                <p>A collection of large datasets hosted on AWS.</p>
            </div>
            <div class="back">
                <h4>AWS Large Datasets</h4>
                <hr>
                <p><strong>LINKS:</strong></p>
                <ul>
                    <li><a href="https://aws.amazon.com/public-datasets/">Official Site</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="deck repo">
        <div class="card" onclick="flip(this)">
            <div class="front">
                <img src="/images/lists/data/data_gov.png"></img>
                <h4>data.gov</h4>
                <p>U.S. government open data tools and datasets.</p>
            </div>
            <div class="back">
                <h4>data.gov</h4>
                <hr>
                <p><strong>LINKS:</strong></p>
                <ul>
                    <li><a href="https://www.data.gov/">Official Site</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="deck repo">
        <div class="card" onclick="flip(this)">
            <div class="front">
                <img src="/images/lists/data/uci_mlr.png"></img>
                <h4>UCI Machine Learning Repo</h4>
                <p>UCI datasets for machine learning.</p>
            </div>
            <div class="back">
                <h4>UCI Machine Learning Repo</h4>
                <hr>
                <p><strong>LINKS:</strong></p>
                <ul>
                    <li><a href="http://archive.ics.uci.edu/ml/datasets.html">Official Site</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="deck app">
        <div class="card" onclick="flip(this)">
            <div class="front">
                <img src="/images/lists/data/talend.png"></img>
                <h4>Open Data Studio</h4>
                <p>Talend offers a free version of Open Data Studio.</p>
            </div>
            <div class="back">
                <h4>Open Data Studio</h4>
                <hr>
                <p><strong>LINKS:</strong></p>
                <ul>
                    <li><a href="https://sourceforge.net/projects/talend-studio/">Source Forge</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="deck app">
        <div class="card" onclick="flip(this)">
            <div class="front">
                <img src="/images/lists/data/r_studio.png"></img>
                <h4>R Studio</h4>
                <p>RStudio is a set of integrated tools designed to help you be more productive with R.</p>
            </div>
            <div class="back">
                <h4>R Studio</h4>
                <hr>
                <p><strong>LINKS:</strong></p>
                <ul>
                    <li><a href="https://www.rstudio.com/products/rstudio/download/">Official Site</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
