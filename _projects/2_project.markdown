---
layout: page
title: COVID-19 forecasting
description: Infectious disease prediction using machine learning
img: /assets/img/LSTM/project_pic.png
importance: 2
category: research
---

*How can we use data from a cross-sectional cohort of patients to predict COVID-19 rates at the national level?*

To answer this question, we collected data representative of the COVID-19 pandemic patients in Lebanon from Rafic Hariri University Hospital (RHUH). We analyzed said data for trends in COVID-19 incidence. The main indicator related to COVID-19 rates in this study is the cycle threshold (Ct) value obtained from Reverse-transcription quantitative polymerase chain reaction (RT-qPCR) tests conducted on the patients. This value is normally discarded and only the diagnostic result of the test is reported.

The figure below shows that a sharp rise in Ct leads to an increase in the number of cases observed nationwide. Although this result is expected, there is a lag between the two events. This is explained by population dynamics and the rate at which the disease spreads. Most machine learning models can capture the inverse relationship between the two features ($$n_\text{cases}$$, and Ct) but only recurrent neural networks (RNNs) can capture the 'lag' or  temporal effect.

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
            <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/LSTM/raw_data/animation_0.png' | relative_url }}" alt="" title="COVID simulation" hidden/>
            <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/LSTM/raw_data/animation_1.png' | relative_url }}" alt="" title="COVID simulation" hidden/>
            <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/LSTM/raw_data/animation_2.png' | relative_url }}" alt="" title="COVID simulation" hidden/>
            <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/LSTM/raw_data/animation_3.png' | relative_url }}" alt="" title="COVID simulation" hidden/>
        </div>
    </div>
</div>
<div class="caption">
    Tracking the COVID-19 pandemic in Lebanon and the corresponding Ct values of the patient cohort at Rafic Hariri University Hospital (RHUH)
</div>

An encoder RNN was used to capture the effects of Ct and past $$n_\text{cases}$$. A decoder RNN was used to forecast the future rise in $$n_\text{cases}$$. The structure of these networks is determining by their *hyperparameters*. Stochastic optimization <a href="https://arxiv.org/abs/1911.01012" target="_blank">`StoMADS`</a> was used to optimize the neural network's hyperparamters such that the validation error is minimized. This resulted in an impressively low value for the test score on the unseen dataset. The effect of optimization the hyperparameters is shown below for a few examples. Click the button below to cycle through the different models and their hyperparameters.

<script>
    // image sources in array. image[0] will have first image src, image[2] will have last src
    var images_1 = [
        "{{ '/assets/img/LSTM/HPO/model_scheme_001.png' | relative_url }}",
        "{{ '/assets/img/LSTM/HPO/model_scheme_002.png' | relative_url }}",
        "{{ '/assets/img/LSTM/HPO/model_scheme_003.png' | relative_url }}"
    ]

    var images_2 = [
        "{{ '/assets/img/LSTM/HPO/model_tuned_1.png' | relative_url }}",
        "{{ '/assets/img/LSTM/HPO/model_tuned_2.png' | relative_url }}",
        "{{ '/assets/img/LSTM/HPO/model_tuned_3.png' | relative_url }}"
    ]

    var step = 0;
    changeImage(); // set first image src after page loads

    function changeImage() {
        // exit if no images, or step = number of items in array
        if (typeof images_1 == "undefined" ||  step == images_1.length) return;     
        if (typeof images_2 == "undefined" ||  step == images_2.length) return; 

        document.getElementById('click_animation_1').src = images_1[step];
        document.getElementById('click_animation_2').src = images_2[step];
        if (step == 2) {
            step=0;
        } else {
            step++;
        }

    }
</script>

<div style="text-align: center; border: 0px solid">
    <button type="button" onclick="changeImage()">
        Cycle through models
    </button>
</div>

<p></p>

<div class="row justify-content-sm-center equal-height-medium ">
    <div class="col-sm-7 mt-1 mt-md-0">
        <img id="click_animation_1" class="img-fluid rounded z-depth-1" alt="" title="arbitrary policies"/>
    </div>
    <div class="col-sm-5 mt-1 mt-md-0">
        <img id="click_animation_2" class="img-fluid rounded z-depth-1" alt="" title="optimal policies"/>
    </div>
</div>
<div class="caption">
    Structure of the RNN encoder/decoder paradigm (left) and corresponding predictions (right)
</div>

The final trained model is made publicly available for inference on  <a href="https://covid-forecaster-lebanon.herokuapp.com/" target="_blank">`https://covid-forecaster-lebanon.herokuapp.com/`</a>.

<a href="https://www.mdpi.com/1999-4915/14/7/1414" target="_blank"><i class="fas fa-book"></i> publication</a>&nbsp;&nbsp;
<a href="https://covid-forecaster-lebanon.herokuapp.com/" target="_blank"> <i class="fab fa-github"></i> heroku app</a>

