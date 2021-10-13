---
layout: page
title: Hexapod
description: A hydraulic powered hexapod
img: /assets/img/hexapod/Hexapod_dp.jpg
importance: 9
category: fun
---

I designed and developed of a six-legged hexapod platform that employed a hydraulic system to actuate each of the six robotic manipulators used for locomotion. 

The robotic manipulator (a leg of the hexapod) was reverse engineered and repurposed for walking from a used hydraulic excavator manufactured by JCB. I made a faithful reproduction of the 3D CAD model in SOLIDWORKS by taking measurements from the physical excavator so that the necessary modifications can be designed and manufactured.

Once the mechanical setup was built, I used kinematics, and rotation matrices to compute the necessary actuation for tracking a given trajectory.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/hexapod/animation.gif' | relative_url }}" alt="" title="kinematics"/>
    </div>
</div>
<div class="caption">
    Forward and inverse kinematics of a RRR robotic manipulator when used for walking
</div>

I used and configured a microcontroller (Arduino) to provide the actuation signal to the servo-valves that distribute hydraulic power throughout the hexapod and achieved smooth tracking of the target trajectory that I provided.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0 equal-height-hexapod">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/hexapod/test_rig.png' | relative_url }}" alt="" title="test rig"/>
    </div>
    <div class="col-sm-4 mt-3 mt-md-0 equal-height-hexapod">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/hexapod/working_arm.gif' | relative_url }}" alt="" title="in action"/>
    </div>
</div>