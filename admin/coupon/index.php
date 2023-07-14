<?php
require_once(__DIR__."/../../parts/header.php");
require_once(__DIR__."/../../parts/admin/password.php");
require_once(__DIR__."/../../parts/admin/coupon/coupon_form.php");
require_once(__DIR__."/../../parts/admin/coupon/coupon_list.php");
?>
<script>
new AdminPasswordComponent();
new AdminCouponFormComponent();
</script>
<?php
require_once(__DIR__."/../../parts/foot.php");
?> 