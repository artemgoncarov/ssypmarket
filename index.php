<?php
require_once(__DIR__ . '/parts/header_clean.php');
require_once(__DIR__ . '/parts/main/product_list.php');
?>
<div class="row-1">
    <div class="not-mob text-1 items-end mt-3" style="height: 600px; margin-top: 3.5rem; background-position: center; background-attachment: fixed; background-position-y: 42px; background-image: url('/public/img/cover.jpg');">
        <div class="container flex justify-end">
            <div class="radius bg-secondary-container w-300 p-3 pt-3 text-1-5 justify-center" style="margin-top: 10rem;">
                <!--ЛШЮП-маркет — это место, где ты приходишь за сухариками,
                а уходишь с чемоданом полным вещей и огромной улыбкой на лице.
                Это как магический портал, где твой кошелек сокращается,
                а счастье увеличивается в геометрической прогрессии! -->
                <b>ЛШЮП-маркет</b> - это пазл программирования,
                где каждый модуль - это кусочек головоломки, 
                и только собрав их вместе, можно увидеть полную картину успеха!
            </div>
        </div>
    </div>

</div>
<div  class="container">
<div id="content" style="padding-top: 7rem; padding-bottom: 7rem;"></div>
</div>
<script>
    new ProductCardsComponent();
</script>
<?php
require_once(__DIR__ . '/parts/foot.php');
?>