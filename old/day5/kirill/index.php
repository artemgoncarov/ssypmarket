<!DOCTYPE html>
<html>
<head>
  <title>ЛШЮП Маркет</title>
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
  <header>
    <h1>ЛШЮП Маркет</h1>
    <nav>
      <ul>
        <li><a href="#">Главная</a></li>
        <li><button onclick="openPopularProducts()">Популярные товары</button></li>
        <li><button onclick="openCart()">Корзина</button></li>
      </ul>
    </nav>
  </header>

  <main>
    <section class="featured-products">
      <h2>Популярные товары</h2>
      <div class="product">
        <img src="product1.jpg" alt="Товар 1">
        <h3>Товар 1</h3>
        <p>Цена: $10</p>
        <button onclick="addToCart(1)">Добавить в корзину</button>
      </div>
      <div class="product">
        <img src="product2.jpg" alt="Товар 2">
        <h3>Товар 2</h3>
        <p>Цена: $15</p>
        <button onclick="addToCart(2)">Добавить в корзину</button>
      </div>
    </section>

    <section class="categories">
      <h2>Категории</h2>
      <ul>
        <li><a href="#">Категория 1</a></li>
        <li><a href="#">Категория 2</a></li>
        <li><a href="#">Категория 3</a></li>
      </ul>
    </section>
  </main>

  <footer>
    <p>&copy; 2023 ЛШЮП Маркет. Все права защищены.</p>
  </footer>

  <script>
    var popularProducts = [
      { id: 1, name: 'Товар 1', price: 10 },
      { id: 2, name: 'Товар 2', price: 15 }
    ];

    var cartItems = [];

    function addToCart(productId) {
      var product = getProductById(productId);
      cartItems.push(product);
    }

    function getProductById(productId) {
      for (var i = 0; i < popularProducts.length; i++) {
        if (popularProducts[i].id === productId) {
          return popularProducts[i];
        }
      }
      return null;
    }

    function openPopularProducts() {
      var popularProductsWindow = window.open('', '_blank');
      popularProductsWindow.document.write('<html><head><title>Популярные товары</title></head><body>');
      popularProductsWindow.document.write('<h1>Популярные товары</h1>');
      popularProductsWindow.document.write('<ul>');
      for (var i = 0; i < popularProducts.length; i++) {
        popularProductsWindow.document.write('<li>' + popularProducts[i].name + '</li>');
      }
      popularProductsWindow.document.write('</ul>');
      popularProductsWindow.document.write('</body></html>');
      popularProductsWindow.document.close();
    }

    function openCart() {
      var cartWindow = window.open('', '_blank');
      cartWindow.document.write('<html><head><title>Корзина</title></head><body>');
      cartWindow.document.write('<h1>Корзина</h1>');
      cartWindow.document.write('<ul>');
      for (var i = 0; i < cartItems.length; i++) {
        cartWindow.document.write('<li>' + cartItems[i].name + '</li>');
      }
      cartWindow.document.write('</ul>');
      cartWindow.document.write('</body></html>');
      cartWindow.document.close();
    }
  </script>
</body>
</html>
