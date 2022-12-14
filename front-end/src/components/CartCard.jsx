import PropTypes from 'prop-types';
import React from 'react';
import { useCart } from 'react-use-cart';
import { MdRemoveShoppingCart } from 'react-icons/md';

function CartCard({ data, i }) {
  const { getItem, removeItem } = useCart();
  const { id } = data;
  const prod = getItem(id);
  const itemTot = String(prod.itemTotal.toFixed(2));

  return (
    <div className="cartCard">
      <p
        data-testid={ `customer_checkout__element-order-table-item-number-${i}` }
      >
        {i + 1}
      </p>
      <p data-testid={ `customer_checkout__element-order-table-name-${i}` }>
        {prod.name}
      </p>
      <p data-testid={ `customer_checkout__element-order-table-quantity-${i}` }>
        {prod.quantity}
      </p>
      <div className="price">
        <span>R$: </span>
        <span data-testid={ `customer_checkout__element-order-table-unit-price-${i}` }>
          {prod.price.replace(/\./, ',')}
        </span>
      </div>
      <div className="price">
        <span>R$: </span>
        <span data-testid={ `customer_checkout__element-order-table-sub-total-${i}` }>
          {itemTot.replace(/\./, ',')}
        </span>
      </div>
      <button
        type="button"
        data-testid={ `customer_checkout__element-order-table-remove-${i}` }
        onClick={ () => removeItem(id) }
      >
        <MdRemoveShoppingCart/>
      </button>
    </div>
  );
}

CartCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
  }),
  i: PropTypes.number,
};

CartCard.defaultProps = {
  data: PropTypes.shape({
    id: PropTypes.number,
  }),
  i: PropTypes.number,
};

export default CartCard;
