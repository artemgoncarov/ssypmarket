<?php
require_once(__DIR__."/../../parts/header.php");
require_once(__DIR__."/../../parts/admin/password.php");
require_once(__DIR__."/../../parts/admin/product/product_form.php");
require_once(__DIR__."/../../parts/admin/product/product_list.php");

?>
<script>
new AdminPasswordComponent();
new AdminProductsFormComponent();
</script>
<?php
require_once(__DIR__."/../../parts/foot.php");
?> 