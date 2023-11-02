---
layout: page
title: Design space exploration
description: Eliciting and analyzing conceptual designs
img: /assets/img/DSE/TRS_exploded.png
importance: 1
category: research
---

<link rel="stylesheet" type="text/css" href="{{ 'lib/d3.parcoords.css' | relative_url }}">
<style>
/* data table styles */
#gridDOE { height: 198px; display: grid; text-align: center; overflow: auto;}
#gridConcept { height: 198px; display: grid; text-align: center; overflow: auto;}
.row, .header { 
  clear: left; 
  font-size: 12px; 
  /* line-height: 18px; 
  height: 18px; */
 }
.row:nth-child(odd) { background: rgba(0,0,0,0.05); }
.header { font-weight: bold; }
.header > .cell { width: 67px; }
.cell { float: left; overflow: hidden; white-space: nowrap; width: 67px; height: 18px; flex-basis: auto; }
#gridConcept > .row > .cell { float: left; overflow: hidden; white-space: nowrap; width: 60px; height: 18px; flex-basis: auto; }
#gridConcept > .header > .cell { width: 60px  ; }

</style>
<!-- <script src="https://d3js.org/d3.v4.js"></script> -->
<script src="{{ 'lib/d3.js' | relative_url }}"></script>
<script src="{{ 'lib/d3.svg.multibrush.js' | relative_url }}"></script>
<script src="{{ 'lib/d3.parcoords.js' | relative_url }}"></script>
<script src="{{ 'lib/divgrid.js' | relative_url }}"></script>
<!-- <script src="{{ 'lib/scatterplot.js' | relative_url }}"></script> -->
In a project with collaborators from the <a href="https://systemsengineering.design/" target="_blank">Systems Engineering Design (SED) group</a> in Sweden and the <a href="https://www.auckland.ac.nz/en.html" target="_blank">University of Auckland</a>, we set out to explore conceptual design spaces in a systematic and quantitative manner to narrow them down to a handful of feasible and valuable concepts for further development and detailed design. We pose the question:

*How can we analyze conceptual designs and quantify their ability to absorb a change in design requirements?*

To answer this question, we first looked at a number of concept generation tools (known as functional models) and converged to the Enhanced Function-Means (EF-M) tree because of its suitability for redesign scenarios (i.e., a design already exists and we wish to iterate on it).

We used the example of an aeroengine component to demonstrate our proposed concept synthesis and analysis method. We enumerated four concepts by combining the available vane cross-sections with the lean configuration of the struts shown below. We analyze each of the four concepts in terms of their **design margins**. These margins are present in each concept due to the discrete nature of each concept's available means (e.g., choices for vanes and lean angles). The more margin is present, the more change can be absorbed but the worse is the performance of the strut (e.g, the weight and manufacturing costs of the strut).

We use the <a href="https://link.springer.com/article/10.1007/s00163-020-00335-8" target="_blank">margin value method</a> by Brahma and Wynn and a <a href="https://sed-group.github.io/mvmlib/" target="_blank">library</a> which implements it to quantify these effects and plot the results on a parallel coordinates plot (PCP) for comparison.

<div class="container" style="display: flex;  justify-content: space-around;">  
  <div class="rows-wrapper">  
  <div class="row justify-content-sm-center" style="background: rgba(0,0,0,0.0);">
      <div class="col-sm-6 mt-3 mt-md-0 equal-height-medium">
          <img id=lean0 class="img-fluid rounded z-depth-1" src="{{ 'assets/img/DSE/trs_upright.svg' | relative_url }}" alt="lean_0" title="lean angle = 0" style="height: 60%;"/>
          <div class="caption">lean angle &theta;=0<sup>o</sup></div>
      </div>
      <div class="col-sm-6 mt-3 mt-md-0 equal-height-medium">
          <img id=lean30 class="img-fluid rounded z-depth-1" src="{{ 'assets/img/DSE/trs_lean.svg' | relative_url }}" alt="lean_0" title="lean angle = 30" style="height: 60%;"/>
          <div class="caption">lean angle &theta;=30<sup>o</sup></div>
      </div>
  </div>
  <div class="row justify-content-sm-center" style="background: rgba(0,0,0,0.0); ">
      <div class="col-sm-6 mt-3 mt-md-0 equal-height-shorter">
          <img id=vanethin class="img-fluid rounded z-depth-1" src="{{ 'assets/img/DSE/vane_thin.svg' | relative_url }}" alt="thin vane" title="vanethin"/>
          <div class="caption">height = 15mm</div>
      </div>
      <div class="col-sm-6 mt-3 mt-md-0 equal-height-shorter">
          <img id=vanethick class="img-fluid rounded z-depth-1" src="{{ 'assets/img/DSE/vane_thick.svg' | relative_url }}" alt="vanethick" title="thick vane"/>
          <div class="caption">height = 17mm</div>
      </div>
  </div>
  </div>
  <div id="scatterConcept" class="scatter" style="width:1150px;height:350px; margin: 0 auto; justify-content: center; flex-grow: 1;"></div>  
</div>
<div id="pcpConcept" class="parcoords" style="width:750px;height:300px; margin: 0 auto; justify-content: center; overflow: hidden;"></div>
<div id="gridConcept" style="width:750px;height:200px; margin: 0 auto; justify-content: center;"></div>
<div class="caption">Try hovering over the rows above to visualize each conceptual design.</div>

The most valuable design is the one that corresponds to the red line in the PCP and red dot on the scatter plot. It is trivial to analyze and choose the most suitable design(s) when our selection is limited to just four concepts. However, our method is most useful when the number of combinations grows large. We demonstrate this on an example with 6,552 concepts shown below. Using PCP, the designer can pinch and narrow their selection down to a few candidates.

<div id="doe" class="parcoords" style="width:750px;height:200px; margin: 0 auto; justify-content: center;"></div>
<div id="gridDOE" style="width:750px;height:200px; margin: 0 auto; justify-content: center;"></div>
<div class="caption">PCP of more than 3000 different conceptual alternative. Try pinching each vertical axis by clicking and dragging. You can also reorder the vertical axes by dragging the axis title.</div>

<script src="{{ 'assets/js/paracoords_DOE.js' | relative_url }}"></script>
<script src="{{ 'assets/js/paracoords_concepts.js' | relative_url }}"></script>

<a href="https://sed-group.github.io/mvmlib/" target="_blank"> <i class="fab fa-github"></i> library</a>