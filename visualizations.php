<?php include 'inc/header.php' ?>

<div class="container">
    <h1>Visualizaciones UC</h1>
    <div class="row">
        <div class="col-md-4 mb-60">
            <div class="uc-card">
                <div class="uc-card_body text-center">
                    <div id="donut-chart"></div>
                </div>
            </div>
        </div>
        <div class="col-md-4 mb-60">
            <div class="uc-card">
                <div class="uc-card_body text-center">
                    <div id="donut-chart-alt"></div>
                </div>
            </div>
        </div>
        <div class="col-lg-12 mb-32">
            <div class="uc-card">
                <div class="uc-card_body text-center">
                    <div id="uc-barchart"></div>
                </div>
            </div>
        </div>
        <div class="col-lg-6 mb-32">
            <div class="uc-card">
                <div class="uc-card_body text-center">
                    <div id="uc-sunburst-chart"></div>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="uc-card">
                <div class="uc-card_body text-center">
                    <svg id="uc-sunburst-chart-alt"></svg>
                </div>
            </div>
        </div>
    </div>
</div>

<?php include 'inc/footer.php' ?>
