---
layout: page
title: Photoelastic decoder
description: Experimental stress measurement using CNNs
img: /assets/img/Photoelastic/photo_dp.bmp
importance: 5
category: research
---

Photoelasticity is well-known technique for measuring the principal stresses in a specimen spatially. If you ever help up a transparent plastic spoon against the sun and started twisting it you will notice rainbow like patterns in the spoon. The stresses in transparent material such as the Polystyrene in your spoon alter the wavelength of light causing this patterns to appear. These patterns can be interpreted to estimate the stresses in the spoon and estimate how close it is to breaking.

In experimental settings, an experienced technician interprets these patterns and translates them into stress. This makes this method a bit unaccessible to non-specialists. I thought about using convolution neural networks (CNNs) to map photoelastic fringes to stress maps. The training data for this algorithm is generated from known analytical stress profiles. I show an example below for a 3 point beam bend test.

<div class="row justify-content-sm-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        <p>
            The measured intensity I of light is given in terms of celerity c, thickness of material h, principal stress difference &sigma;<sub>1</sub> - &sigma;<sub>2</sub>, and wavelength &lambda;

            \begin{equation*}
            I = \sin^2\left(\dfrac{ch\pi(\sigma_1-\sigma_2)}{\lambda}\right).
            \end{equation*}

            The top image shows the principal stress difference &sigma;<sub>1</sub> - &sigma;<sub>2</sub>, while the bottom image shows I. Solving for &sigma;<sub>1</sub> - &sigma;<sub>2</sub> is not straight forward because of the sin<sup>2</sup> term.
        </p>
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/Photoelastic/example_stress.gif' | relative_url }}" alt="" title="stress"/>&nbsp;&nbsp;
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/Photoelastic/ex_fringes.gif' | relative_url }}" alt="" title="light intensity"/>
    </div>
</div>

This is a work in progress and the code and repository will be made publicly available once I have implemented the CNN decoder.

<a href="https://github.com/khbalhandawi/photoelastic_gen" target="_blank"> <i class="fab fa-github"></i> open source code</a>