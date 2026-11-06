html {
  scroll-behavior: smooth;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background: linear-gradient(180deg, #f5f7fb 0%, #eef3ff 100%);
  color: #1a1f2e;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input {
  font: inherit;
}

.page-shell {
  max-width: 1280px;
  margin: 0 auto;
  padding: 24px 20px 60px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(148, 163, 184, 0.2);
  backdrop-filter: blur(18px);
  border-radius: 22px;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.06);
}

.brand-block {
  display: flex;
  align-items: center;
  gap: 14px;
}

.brand-mark {
  width: 42px;
  height: 42px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  font-weight: 800;
  color: white;
  background: linear-gradient(135deg, #1d4ed8, #7c3aed);
}

.brand-block h1 {
  margin: 0;
  font-size: 1.4rem;
}

.eyebrow {
  margin: 0 0 6px;
  color: #64748b;
  font-size: 0.72rem;
  letter-spacing: 0.08rem;
  text-transform: uppercase;
}

.eyebrow.accent {
  color: #4f46e5;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 30px;
  color: #475569;
  font-weight: 600;
}

.actions {
  display: flex;
  gap: 12px;
}

.primary-button,
.ghost-button,
.filter-btn,
.add-cart {
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.2s ease;
}

.primary-button {
  background: linear-gradient(135deg, #1d4ed8, #7c3aed);
  color: white;
  padding: 12px 18px;
  font-weight: 700;
}

.ghost-button {
  background: #eef2ff;
  color: #1e293b;
  padding: 12px 18px;
  font-weight: 700;
}

.primary-button:hover,
.ghost-button:hover,
.filter-btn:hover,
.add-cart:hover {
  transform: translateY(-1px);
}

.hero-section {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 28px;
  align-items: center;
  padding: 46px 0 26px;
}

.hero-copy h2 {
  margin: 0;
  font-size: clamp(2.7rem, 5vw, 4.5rem);
  line-height: 1.02;
  letter-spacing: -0.05em;
}

.hero-copy p {
  margin-top: 18px;
  max-width: 650px;
  font-size: 1.06rem;
  line-height: 1.8;
  color: #475569;
}

.hero-actions {
  display: flex;
  gap: 14px;
  margin-top: 28px;
}

.stats-row {
  display: flex;
  gap: 32px;
  margin-top: 28px;
  flex-wrap: wrap;
}

.stats-row div {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stats-row strong {
  font-size: 1.3rem;
}

.stats-row span {
  color: #64748b;
}

.hero-visual {
  display: flex;
  justify-content: center;
}

.product-showcase {
  position: relative;
  width: min(100%, 500px);
  height: 470px;
  border-radius: 32px;
  background: linear-gradient(135deg, #e2e8f0, #dbeafe, #e9d5ff);
  border: 1px solid rgba(148, 163, 184, 0.3);
  box-shadow: 0 24px 60px rgba(59, 130, 246, 0.14);
  overflow: hidden;
}

.showcase-image {
  width: 100%;
  height: 100%;
  background-image: url('https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80');
  background-size: cover;
  background-position: center;
  filter: saturate(1.1);
}

.floating-card {
  position: absolute;
  right: 24px;
  bottom: 24px;
  background: rgba(15, 23, 42, 0.75);
  color: white;
  border-radius: 18px;
  padding: 16px 18px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  backdrop-filter: blur(10px);
}

.floating-card span {
  color: #cbd5e1;
  font-size: 0.75rem;
}

.floating-card strong {
  font-size: 1.2rem;
}

.catalogue {
  margin-top: 18px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(148, 163, 184, 0.2);
  padding: 28px 24px 30px;
  border-radius: 28px;
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.04);
}

.section-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
}

.section-head h3 {
  margin: 0;
  font-size: clamp(1.75rem, 3vw, 2.5rem);
}

.toolbar {
  display: flex;
  gap: 12px;
}

.toolbar input {
  width: min(100%, 320px);
  padding: 12px 16px;
  border: 1px solid #dfe7f5;
  border-radius: 12px;
  background: #f8fafc;
}

.filter-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
}

.filter-btn {
  background: #f1f5f9;
  color: #334155;
  padding: 10px 14px;
  font-weight: 700;
}

.filter-btn.active {
  background: #dbeafe;
  color: #1d4ed8;
}

.product-grid {
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 24px;
}

.product-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 14px 32px rgba(15, 23, 42, 0.06);
}

.card-image-wrap {
  position: relative;
  height: 220px;
  overflow: hidden;
}

.card-image-wrap img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.badge {
  position: absolute;
  top: 12px;
  left: 12px;
  background: rgba(15, 23, 42, 0.8);
  color: white;
  border-radius: 999px;
  padding: 8px 10px;
  font-size: 0.72rem;
  font-weight: 700;
  z-index: 1;
}

.card-body {
  padding: 18px 16px 16px;
}

.meta-row,
.rating-row,
.price-row,
.summary-item,
.summary-total {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.meta-row {
  font-size: 0.76rem;
  color: #64748b;
}

.card-body h4 {
  margin: 12px 0 10px;
  font-size: 1.15rem;
}

.rating-row {
  justify-content: flex-start;
  color: #f59e0b;
  font-weight: 700;
}

.rating-row small {
  color: #64748b;
  font-weight: 600;
}

.price-row {
  margin-top: 12px;
}

.price-row strong {
  font-size: 1.5rem;
}

.price-row span {
  color: #94a3b8;
  text-decoration: line-through;
  font-weight: 600;
}

.shipping-line {
  margin: 12px 0 16px;
  font-size: 0.8rem;
  color: #475569;
}

.add-cart {
  width: 100%;
  background: #eef2ff;
  color: #1d4ed8;
  font-weight: 800;
  padding: 12px 14px;
}

.summary-panel {
  margin-top: 24px;
  background: rgba(15, 23, 42, 0.96);
  color: white;
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 26px 60px rgba(15, 23, 42, 0.18);
}

.summary-panel h3 {
  margin: 0 0 18px;
  font-size: 2rem;
}

.summary-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 16px 0;
}

.summary-item {
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(148, 163, 184, 0.2);
  font-size: 0.95rem;
}

.summary-item span {
  max-width: 70%;
}

.summary-total {
  margin-top: 18px;
  font-size: 1.2rem;
}

@media (max-width: 920px) {
  .topbar,
  .nav-links,
  .actions,
  .section-head,
  .hero-section {
    flex-direction: column;
    align-items: flex-start;
  }

  .topbar {
    gap: 20px;
  }

  .hero-section {
    display: block;
  }

  .hero-copy {
    margin-bottom: 24px;
  }

  .product-showcase {
    height: 360px;
  }
}
