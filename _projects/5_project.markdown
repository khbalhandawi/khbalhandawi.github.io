---
layout: page
title: Corrosion sensing
description: Corrosion detection using strain and photonic sensors
img: /assets/img/corrosion/corrosion_dp.png
importance: 5
category: research
---

Corrosion is an elusive quantity to measure accurately. This is because of all the electrodes that you would need to measure and record the corrosion current. This method is impractical when it comes to passive monitoring of structures that span several kilometers such as pipelines.

Passive strain sensors based on light on fiber optics can accomplish this task by measure the rate at which strain decreases when a structure corrodes. I used a simple pre-stressed beam to demonstrate this concept.

I found out that the rate of corrosion d&delta;/dt is proportional to the rate at which strain decreases d&epsilon;/dt.

<p>
\begin{equation*}
\dfrac{d\delta}{dt} = \dfrac{4L}{3\sin \alpha}\dfrac{d\varepsilon}{dt},
\end{equation*}
</p>

for a beam of length L, bent by an angle &alpha;. This concept is simulated below.
<div class="row justify-content-sm-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/corrosion/loading.gif' | relative_url }}" alt="" title="loading"/>
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/corrosion/corrosion.gif' | relative_url }}" alt="" title="corrosion"/>
    </div>
</div>
<div class="caption">
    Process of pre-stressed a metal beam (left) and subsequently corroding it (right) and their effect on strain
</div>

<a href="http://dx.doi.org/10.1016/j.snb.2016.05.167s" target="_blank"><i class="fas fa-book"></i> publication</a>&nbsp;&nbsp;