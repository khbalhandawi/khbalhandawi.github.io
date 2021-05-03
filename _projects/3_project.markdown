---
layout: page
title: Manufacturing simulation
description: Modeling distortion due to additive manufacturing
img: /assets/img/thermomechanical/thermomechanical_dp.png
importance: 3
category: research
---

When redesigning a product and remanufacturing it, one must consider the stresses that are stored in the structure as a result of the manufacturing process. Additive manufacturing can out a lot of strain on the structure due to the large temperatures needed to melt and deposit material on the structure.

I managed to model the additive manufacturing process on part of an aeroengine component, where we attempt to increase the thickness of the outer casing of a turbine rear structure.
Temperatures are described by a moving Gaussian heat source:

<div class="row justify-content-sm-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        <p>
            \begin{equation*}
            Q(r,\theta,t) = \dfrac{P}{\pi{r_l}^2 D}e^{-2\left(\frac{r-{V}t}{r_l}\right)^2},
            \end{equation*}

            where r<sub>l</sub> is the laser beam radius, P is the laser power and D is the depth of penetration of the laser source. The coordinates r and &theta; are defined on the surface of the deposit as shown to the right
        </p>
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/thermomechanical/Heat_source.png' | relative_url }}" alt="" title="Guassian heat source"/>
    </div>
</div>
&nbsp;&nbsp;
<p>The moving guassian heat source is used to compute the temperature gradients on the surface of the turbine rear structure as shown below. The thermal expansion due to the temperatures is also computed. The deformed structure that remains at the end of the deposition process is then used in further simulation and testing to ensure that the product can still meet its operational requirements.</p>

<div class="row justify-content-sm-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/thermomechanical/temperature.gif' | relative_url }}" alt="" title="temperature"/>
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/thermomechanical/deformation.gif' | relative_url }}" alt="" title="displacement"/>
    </div>
</div>
<div class="caption">
    Temperature gradients (left) and thermal expansion (right) on surface of the turbine rear structure.
</div>

<a href="https://www.designsociety.org/publication/40873/Integrating+additive+manufacturing+and+repair+strategies+of+aeroengine+components+in+the+computational+multi-disciplinary+engineering+design+process" target="_blank"><i class="fas fa-book"></i> publication</a>&nbsp;&nbsp;