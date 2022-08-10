---
layout: page
title: Scalable designs
description: optimal designs for dynamic design requirements
img: /assets/img/TRS/TRS_dp.png
importance: 3
category: research
---

*How do you design a component when the design requirements can change at any moment and without advance notice?*

That is the question my dissertation tries to answer. To do so, I came up with design metrics for qualitative descriptions such as flexibility and robustness. I used optimization, automation and machine learning to obtain thousands of possible designs. This is a **1000 fold** increase in the number of alternatives that are presented during client meetings in the industry.

<div class="row justify-content-sm-center equal-height">
    <div class="col-sm-5 mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/TRS/designs.gif' | relative_url }}" alt="" title="parametric designs"/>
    </div>
    <div class="col-sm-7 mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/TRS/tradespace.gif' | relative_url }}" alt="" title="tradespace"/>
    </div>
</div>
<div class="caption">
    Examples of some of the parametric optimal designs (left) and the tradeoff between different design requirements (right).
</div>

I also developed an [online tool](https://scale-am.herokuapp.com/) to help support decision making and identify *scalable* designs (a form of flexibility when remanufacturing is an option). The tools relies on machine learning models (as surrogates for physics-based models) to estimate the sensitivity of the design to external changes (loads, specs, etc.) and whether it can be scaled to fulfil said changes.

<script>
    var index = 0;

    function changeBanner() {

        loop_imgs = document.getElementById("animation").children;
        
        [].forEach.call(loop_imgs, function(v, i) {
            loop_imgs[i].hidden = i !== index
        });
        index = (index + 1) % loop_imgs.length;
    }
    window.onload = function() {
        setInterval(changeBanner, 1000)
    };
</script>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <div id="animation">
            <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/TRS/0_example_trs.png' | relative_url }}" alt="" title="WEB APP" hidden/>
            <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/TRS/1_example_trs.png' | relative_url }}" alt="" title="WEB APP" hidden/>
            <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/TRS/2_example_trs.png' | relative_url }}" alt="" title="WEB APP" hidden/>
            <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/TRS/3_example_trs.png' | relative_url }}" alt="" title="WEB APP" hidden/>
            <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/TRS/4_example_trs.png' | relative_url }}" alt="" title="WEB APP" hidden/>
            <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/TRS/5_example_trs.png' | relative_url }}" alt="" title="WEB APP" hidden/>
        </div>
    </div>
</div>
<div class="caption">
    Overview of the web app tool for scalability assessment
</div>

By exploring all these alternatives, potential cost savings can be made over a period of decades. My research culminated in a technology transfer at [GKN Aerospace Engine Systems](https://www.gknaerospace.com/en/about-gkn-aerospace/locations/gkn-aerospace-in-europe/gkn-aerospace-in-sweden/) so that engineers can go to work, incorporating these algorithms in their workflows and give GKN a **competitive edge**.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1 center-block" src="{{ '/assets/img/TRS/pic1_K.JPG' | relative_url }}" alt="" title="tech transfer"/>
    </div>
</div>
<div class="caption">
    Technology transfer at GKN Aerospace Engine Systems, Trollhättan, Sweden
</div>

The research also resulted in a best paper award in the ASME Journal of Mechanical Design for 2021. The award was presented at the IDECT-2022 conference in St. Louis, Missouri, USA. 

<a href="https://asmedigitalcollection.asme.org/mechanicaldesign/article/doi/10.1115/1.4047908/1085767/Scalable-Setbased-Design-Optimization-and" target="_blank"><i class="fas fa-book"></i> publication</a>&nbsp;&nbsp;
<a href="https://github.com/khbalhandawi/DM_SBD_OPT" target="_blank"> <i class="fab fa-github"></i> open source code</a>