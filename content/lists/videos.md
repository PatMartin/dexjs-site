+++
date = "2016-12-28T13:37:53-05:00"
title = "Lists"
[menu.main]
  identifier = "lists"

[params]
  scripts = [
    "https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.4/isotope.pkgd.js"
  ]
  css = [
  ]
+++

# Videos
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
            <option value=".journalism">Journalism</option>
        </optgroup>
    </select>
</div>
<hr>

<div class="grid">
  <div class="deck journalism">
    <div class="card" onclick="flip(this)">
      <div class="front">
        <img src="/images/lists/videos/viz_and_journalism.png"></img>
        <h4>Visualization and Journalism</h4>
        <p>Archived video from the 2016 Computation + Journalism Symposium
        at Stanford University.</p>
      </div>
      <div class="back">
        <h4>Visualization and Journalism</h4>
        <hr>
        <p><strong>LINKS:</strong></p>
        <ul>
          <li><a href="https://www.youtube.com/watch?list=PL96WC0mmhVkwbLXFDN9jKVsfdbKfy1MCw&v=UKihJzHqipc">YouTube Video</a></li>
          <li><a href="http://www.cs.ubc.ca/~tmm/talks/cj16/cj16.pdf">PDF Slides</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>