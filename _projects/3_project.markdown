---
layout: page
title: Public health policy
description: Infectious disease prediction and control
img: /assets/img/COVID/COVID_dp.png
importance: 3
category: research
---

*How can we apply the principles of design and decision making to help bring the pandemic under control?*

To answer this question, I modeled how an infectious disease spreads in a small population. Diseases such as COVID-19 spread through social interaction. I programmed intelligent agents to model a complex social system.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/COVID/example_use_compressed.gif' | relative_url }}" alt="" title="COVID simulation"/>
    </div>
</div>
<div class="caption">
    Interactive C++ simulation of an infectious disease 
</div>

Optimization can be used to determine the critical amount of intervention necessary to keep the disease in check. 
I used <a href="https://arxiv.org/abs/1911.01012" target="_blank">`StoMADS`</a>, a derivative free stochastic optimization algorithm to reduce the number of hospitalizations beneath the healthcare capacity while reducing the socio-economic cost of interventions by up to **5 times** compared to a complete lock-down. The effect of the optimal health policies on the trajectory of the disease is shown below.

<div class="row justify-content-sm-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/COVID/I_compare.png' | relative_url }}" alt="" title="arbitrary policies"/>
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/COVID/I_compare_opt.png' | relative_url }}" alt="" title="optimal policies"/>
    </div>
</div>
<div class="caption">
    The trajectory of the number of infections shown for arbitrary health policies (left) and optimal health policies (right).
</div>

<a href="https://ieeexplore.ieee.org/document/9532002" target="_blank"><i class="fas fa-book"></i> publication</a>&nbsp;&nbsp;
<a href="https://github.com/khbalhandawi/COVID_SIM_GPU" target="_blank"> <i class="fab fa-github"></i> open source code</a>

