'use client';

import { useMemo, useState } from 'react';
import { categories, products } from '@/data/products';

const formatPrice = (value: number) => `${value.toFixed(0)} €`;

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState('Tout');
  const [searchTerm, setSearchTerm] = useState('');
  const [cartCount, setCartCount] = useState(2);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === 'Tout' || product.category === activeCategory;
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  const totalCart = useMemo(() => {
    return filteredProducts.slice(0, cartCount).reduce((sum, product) => sum + product.price, 0);
  }, [cartCount, filteredProducts]);

  return (
    <main className="page-shell">
      <header className="topbar">
        <div className="brand-block">
          <div className="brand-mark">D</div>
          <div>
            <p className="eyebrow">Marketplace</p>
            <h1>DevBox</h1>
          </div>
        </div>

        <nav className="nav-links">
          <a href="#">Accueil</a>
          <a href="#">Magasins</a>
          <a href="#">Promos</a>
          <a href="#">Support</a>
        </nav>

        <div className="actions">
          <button className="ghost-button">Connexion</button>
          <button className="primary-button">Panier ({cartCount})</button>
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow accent">Nouvelles tendances</p>
          <h2>Commerce mondial pour des millions d’achats</h2>
          <p>
            Trouvez les meilleures offres, des marques internationales et des
            produits premium pour votre boutique ou votre consommation directe.
          </p>

          <div className="hero-actions">
            <button className="primary-button">Acheter maintenant</button>
            <button className="ghost-button">Voir les promos</button>
          </div>

          <div className="stats-row">
            <div>
              <strong>1.2M+</strong>
              <span>Produits</span>
            </div>
            <div>
              <strong>82K</strong>
              <span>Marchands</span>
            </div>
            <div>
              <strong>4.9/5</strong>
              <span>Notes clients</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="product-showcase">
            <div className="showcase-image" />
            <div className="floating-card">
              <span>Best seller</span>
              <strong>Air Max Pro</strong>
              <small>178 €</small>
            </div>
          </div>
        </div>
      </section>

      <section className="catalogue">
        <div className="section-head">
          <div>
            <p className="eyebrow">Catalogue</p>
            <h3>Produits populaires</h3>
          </div>

          <div className="toolbar">
            <input
              type="text"
              placeholder="Rechercher un produit"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="filter-row">
          {categories.map((category) => (
            <button
              key={category}
              className={category === activeCategory ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <article key={product.id} className="product-card">
              <div className="card-image-wrap">
                {product.badge ? <span className="badge">{product.badge}</span> : null}
                <img src={product.image} alt={product.name} />
              </div>

              <div className="card-body">
                <div className="meta-row">
                  <span>{product.store}</span>
                  <span>{product.country}</span>
                </div>

                <h4>{product.name}</h4>

                <div className="rating-row">
                  <span>★ {product.rating}</span>
                  <small>({product.reviews})</small>
                </div>

                <div className="price-row">
                  <strong>{formatPrice(product.price)}</strong>
                  {product.originalPrice ? (
                    <span>{formatPrice(product.originalPrice)}</span>
                  ) : null}
                </div>

                <p className="shipping-line">{product.shipping}</p>

                <button className="add-cart" onClick={() => setCartCount((count) => count + 1)}>
                  Ajouter au panier
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <aside className="summary-panel">
        <p className="eyebrow">Résumé du panier</p>
        <h3>{cartCount} articles</h3>
        <div className="summary-list">
          {filteredProducts.slice(0, cartCount).map((product) => (
            <div key={product.id} className="summary-item">
              <span>{product.name}</span>
              <strong>{formatPrice(product.price)}</strong>
            </div>
          ))}
        </div>
        <div className="summary-total">
          <span>Total</span>
          <strong>{formatPrice(totalCart)}</strong>
        </div>
      </aside>
    </main>
  );
}
