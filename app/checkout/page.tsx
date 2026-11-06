'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { Product } from '@/data/products';

const formatPrice = (value: number) => `${value.toFixed(0)} €`;

export default function CartPage() {
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('devbox-cart') || '[]') as Product[];
    setItems(stored);
  }, []);

  const updateQuantity = (id: number, delta: number) => {
    setItems((current) => {
      const next = current.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: Math.max(0, (item.quantity ?? 1) + delta) };
        }
        return item;
      }).filter((item) => (item.quantity ?? 1) > 0);

      localStorage.setItem('devbox-cart', JSON.stringify(next));
      return next;
    });
  };

  const subtotal = items.reduce((sum, item) => sum + (item.price * (item.quantity ?? 1)), 0);

  return (
    <main className="cart-page">
      <div className="page-header">
        <h1>Mon panier</h1>
        <Link href="/" className="secondary-button">Continuer mes achats</Link>
      </div>

      <div className="cart-list">
        {items.length === 0 ? (
          <div className="cart-item">
            <p>Votre panier est vide.</p>
          </div>
        ) : (
          items.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>{item.store}</p>
                <p>{item.shipping}</p>
              </div>
              <div>
                <div className="quantity-box">
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity ?? 1}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
                <p style={{ marginTop: 12, fontWeight: 800 }}>{formatPrice(item.price * (item.quantity ?? 1))}</p>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="order-summary" style={{ marginTop: 24 }}>
        <div className="summary-line"><span>Sous-total</span><strong>{formatPrice(subtotal)}</strong></div>
        <div className="summary-line"><span>Livraison</span><strong>Gratuit</strong></div>
        <div className="summary-line summary-total-line"><span>Total</span><strong>{formatPrice(subtotal)}</strong></div>
        <Link href="/checkout" className="primary-button" style={{ display: 'inline-flex', marginTop: 18 }}>
          Passer la commande
        </Link>
      </div>
    </main>
  );
}
