# DevBox

Marketplace e-commerce moderne inspirée du style des grandes plateformes de vente en ligne.

## Présentation

DevBox est une application de démonstration de marketplace conçue pour présenter un storefront premium, un catalogue produits, une recherche rapide et un parcours d’achat simple.

## Fonctionnalités
- Landing page marketplace premium
- Catalogue de produits avec recherche et filtres
- Cartes produits avec prix, avis, promotions et badges
- Résumé du panier interactive
- Design responsive compatible mobile et desktop
- Architecture prête pour intégrer des sources de données externes et APIs fournisseur

## Stack
- Next.js 14
- React 18
- TypeScript

## Démarrage rapide

```bash
npm install
npm run dev
```

Puis ouvrez : http://localhost:3000

## Structure du projet
- `app/page.tsx` : page d’accueil principale
- `app/layout.tsx` : mise en page globale et métadonnées
- `data/products.ts` : données mock du catalogue
- `app/globals.css` : styles de l’interface

## Objectif
Créer une base solide pour une marketplace de type Alibaba/SHEIN avec :
- recherche de produits
- filtres par catégorie
- boutique / catalogue
- simulation de panier
- parcours d’achat prêt à évoluer vers des intégrations API réelles

## Remarque sur les APIs fournisseur
Cette version est un prototype fonctionnel et visuel. L’accès aux APIs officielles d’Alibaba, SHEIN et autres marketplaces exige des validations commerciales et techniques spécifiques, ainsi que des identifiants de production.
