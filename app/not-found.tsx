'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { Product } from '@/data/products';

const formatPrice = (value: number) => `${value.toFixed(0)} €`;

export default function CheckoutPage() {
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('devbox-cart') || '[]') as Product[];
    setItems(stored);
  }, []);

  const subtotal = items.reduce((sum, item) => sum + (item.price * (item.quantity ?? 1)), 0);

  return (
    <main className="checkout-page">
      <div className="page-header">
        <h1>Finaliser la commande</h1>
        <Link href="/cart" className="secondary-button">Retour au panier</Link>
      </div>

      <div className="checkout-layout">
        <section className="checkout-box">
          <div className="cart-item">
            <h3>Informations de livraison</h3>
            <div className="form-grid">
              <input className="input-field" placeholder="Prénom" />
              <input className="input-field" placeholder="Nom" />
              <input className="input-field" placeholder="Email" />
              <input className="input-field" placeholder="Téléphone" />
              <input className="input-field" style={{ gridColumn: '1 / -1' }} placeholder="Adresse" />
              <input className="input-field" placeholder="Ville" />
              <input className="input-field" placeholder="Code postal" />
              <select className="select-field" style={{ gridColumn: '1 / -1' }}>
                <option>France</option>
                <option>Belgique</option>
                <option>Allemagne</option>
                <option>Espagne</option>
              </select>
            </div>
          </div>
        </section>

        <aside className="order-summary">
          <h3>Résumé</h3>
          {items.map((item) => (
            <div key={item.id} className="summary-line">
              <span>{item.name} x {item.quantity ?? 1}</span>
              <strong>{formatPrice(item.price * (item.quantity ?? 1))}</strong>
            </div>
          ))}
          <div className="summary-line"><span>Sous-total</span><strong>{formatPrice(subtotal)}</strong></div>
          <div className="summary-line"><span>Livraison</span><strong>Gratuit</strong></div>
          <div className="summary-line summary-total-line"><span>Total</span><strong>{formatPrice(subtotal)}</strong></div>
          <button className="primary-button" style={{ width: '100%', marginTop: 18 }}>
            Confirmer la commande
          </button>
        </aside>
      </div>
    </main>
  );
}






































































































































































































































































































