import React from 'react';
import ProductCard from '../components/ProductCard';

function Product() {
  return (
    <>
      <header>
        <nav>
          <a
            data-testid="customer_products__element-navbar-link-products"
            href="/produtos"
          >
            PRODUTOS
          </a>
          <a
            data-testid="customer_products__element-navbar-link-orders"
            href="meus pedidios"
          >
            MEUS PEDIDOS
          </a>
          <a
            data-testid="customer_products__element-navbar-user-full-name"
            href="perfil"
          >
            PERFIL
          </a>
          <a
            data-testid="customer_products__element-navbar-link-logout"
            href="sair"
          >
            SAIR
          </a>
        </nav>
      </header>
      <main>
        <ProductCard />
      </main>
    </>
  );
}

export default Product;
