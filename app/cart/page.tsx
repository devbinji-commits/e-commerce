'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { products, type Product } from '@/data/products';

const formatPrice = (value: number) => `${value.toFixed(0)} €`;

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = useMemo(() => {
    return products.find((item) => item.id === Number(params.id));
  }, [params.id]);

  if (!product) {
    return (
      <main className="product-page">
        <div className="product-info">
          <h1>Produit introuvable</h1>
          <Link href="/" className="primary-button">
            Retour à l’accueil
          </Link>
        </div>
      </main>
    );
  }

  const addToCart = (item: Product) => {
    const stored = JSON.parse(localStorage.getItem('devbox-cart') || '[]') as Product[];
    const existing = stored.find((entry) => entry.id === item.id);

    if (existing) {
      existing.quantity = (existing.quantity ?? 1) + 1;
    } else {
      stored.push({ ...item, quantity: 1 });
    }

    localStorage.setItem('devbox-cart', JSON.stringify(stored));
  };

  return (
    <main className="product-page">
      <div className="page-header">
        <Link href="/" className="secondary-button">← Retour</Link>
        <Link href="/cart" className="primary-button">Panier</Link>
      </div>

      <div className="product-layout">
        <div className="product-gallery">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-info">
          <p className="eyebrow">{product.store}</p>
          <h1>{product.name}</h1>

          <div className="product-meta">
            <span>★ {product.rating}</span>
            <span>{product.reviews} avis</span>
            <span>{product.country}</span>
          </div>

          <div className="product-price">
            <strong>{formatPrice(product.price)}</strong>
            {product.originalPrice ? <span>{formatPrice(product.originalPrice)}</span> : null}
          </div>

          <p className="product-description">{product.description}</p>

          <ul className="feature-list">
            {(product.features || []).map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          <div className="action-stack">
            <button className="primary-button" onClick={() => addToCart(product)}>
              Ajouter au panier
            </button>
            <Link href="/checkout" className="secondary-button">Acheter maintenant</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
