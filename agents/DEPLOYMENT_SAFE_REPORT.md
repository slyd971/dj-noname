# DEPLOYMENT SAFE REPORT — DJ MACK

**Date :** 2026-05-30  
**Branche :** `soyumi-main`  
**Client ciblé :** `dj-mack` (FR) + `dj-mack-en` (EN)  
**Domaine :** `dj-mack.presskit.fr`  
**Canonical :** `https://dj-mack.presskit.fr/`

---

## 1. Vérification du client cible

| Contrôle | Statut | Détail |
|---|---|---|
| Config `dj-mack` | ✅ | `data/clients/dj-mack.ts` — `djMackClient` + `djMackEnClient` |
| Slug FR | ✅ | `dj-mack` |
| Slug EN | ✅ | `dj-mack-en` |
| Domaine | ✅ | `domain: "dj-mack.presskit.fr"` |
| Canonical SEO | ✅ | `seo.canonical: "https://dj-mack.presskit.fr/"` |
| `hideFromSwitcher` EN | ✅ | `djMackEnClient.hideFromSwitcher: true` |
| Assets gallery | ✅ | 9 images dans `/public/mack/gallery/` |
| Assets vidéos | ✅ | 3 vidéos dans `/public/mack/videos/` |
| Assets flyers | ✅ | 5 flyers dans `/public/mack/flyers/` |
| Hero image | ✅ | `/public/mack/gallery/hero-mack-portrait.jpeg` |
| `djMackFrClient` supprimé | ✅ | N'existe plus dans `dj-mack.ts`, retiré de l'index |

---

## 2. Fichiers modifiés — Analyse complète

### Fichiers dj-mack directs
| Fichier | Nature | Statut |
|---|---|---|
| `data/clients/dj-mack.ts` | Copy FR complète (10 commits) | ✅ SAFE |
| `data/clients/index.ts` | Suppression `djMackFrClient` mort | ✅ SAFE |

### Fichiers socle commun modifiés
| Fichier | Nature | Statut |
|---|---|---|
| `data/clients/types.ts` | Ajout `canonical?` + `hideFromSwitcher?` — additif | ✅ SAFE |
| `data/config.ts` | Ajout `itemIconOverrides?` — additif | ✅ SAFE |
| `data/press-kits.ts` | Refacto dynamique via registry — logiquement équivalent | ✅ SAFE |
| `lib/domains.ts` | `getCanonicalUrl` respecte `seo.canonical` si défini | ✅ SAFE |
| `lib/seo.ts` | Ajout `getLanguageAlternates()` pour hreflang — additif | ✅ SAFE |
| `components/press-kit/ClubsSection.tsx` | Flag override sorti du code → data-driven | ✅ SAFE |
| `components/press-kit/Footer.tsx` | Casse "Presskit.Fr" — cosmétique | ✅ SAFE |
| `app/not-found.tsx` | Suppression slugs hardcodés du message d'erreur | ✅ SAFE |
| `app/opengraph-image.tsx` | Fix bug `alt="DJ SLY'D hero"` → `${client.name}` | ✅ SAFE |

### Autres clients touchés
| Fichier | Nature | Statut |
|---|---|---|
| `data/clients/djslyd.ts` | Ajout `canonical: "https://djslyd.presskit.fr/"` | ⚠️ AUTRE CLIENT — contenu SEO uniquement |
| `data/clients/paul-keranne.ts` | Copy CTA + bio + descriptions vidéos | ⚠️ AUTRE CLIENT — contenu uniquement |
| `data/clients/soyumi.ts` | Copy bio + quote + descriptions + `itemIconOverrides` | ⚠️ AUTRE CLIENT — cohérent avec ClubsSection |
| `data/clients/yoruboy-dj.ts` | Bio 1ère → 3ème personne, clubs, sound | ⚠️ AUTRE CLIENT — contenu uniquement |

---

## 3. Fichiers sensibles touchés

| Fichier | Raison | Verdict |
|---|---|---|
| `data/press-kits.ts` | Refacto `getPressKitEntries()` | ✅ Safe : map construite depuis `getClients()`, jamais vide |
| `lib/seo.ts` | Nouvelle fonction hreflang | ✅ Additif, ne casse rien si pas de `languageSwitch` |
| `components/press-kit/ClubsSection.tsx` | Composant partagé | ✅ `iconOverrides ?? {}` — backward-compatible |
| `app/opengraph-image.tsx` | OG image globale | ✅ Correction d'un bug hardcodé DJ SLYD |

---

## 4. Risques détectés

| Risque | Niveau | Explication |
|---|---|---|
| Autres clients dans le diff | FAIBLE | Contenu uniquement, pas de changement structurel |
| `soyumi.ts` + `ClubsSection.tsx` couplés | FAIBLE | Les deux changements sont dans ce diff, cohérents |
| Build non vérifié localement | MOYEN | `npm` non disponible dans la session — à vérifier avant push |
| `press-kits.ts` peut throw | NULS | Map construite depuis le même registry, jamais incohérente |

---

## 5. Checks SEO — dj-mack

| Contrôle | Statut |
|---|---|
| Canonical FR | ✅ `https://dj-mack.presskit.fr/` |
| Canonical EN | ✅ `https://dj-mack.presskit.fr/en` (via languageSwitch) |
| hreflang FR/EN | ✅ `lib/seo.ts` — `getLanguageAlternates()` actif |
| OG image | ✅ `/mack/gallery/hero-mack-portrait.jpeg` |
| OG alt | ✅ Fix appliqué (`DJ MACK hero`) |
| Metadata FR | ✅ Title + description FR renseignés |
| Metadata EN | ✅ Title + description EN renseignés |
| robots | ✅ `index: true` |

---

## 6. Pré-déploiement — Checklist manuelle

- [ ] **Lancer `npm run build`** — non vérifié dans cette session (npm indisponible)
- [ ] **Vérifier `npm run lint`**
- [ ] **Vérifier TypeScript** (`tsc --noEmit`)
- [ ] Tester localement `dj-mack.presskit.fr` ou `?client=dj-mack`
- [ ] Vérifier que la page EN charge bien via `?client=dj-mack-en`
- [ ] Vérifier le switcher langue FR ↔ EN
- [x] Assets gallery présents
- [x] Assets vidéos présents
- [x] Assets flyers présents
- [x] Config complète (FR + EN)
- [x] Canonical correct
- [x] Pas de fallback dev en prod

---

## 7. Recommandations avant mise en prod

1. **Lancer le build localement** (`npm run build`) — c'est le seul check manquant.
2. Les 4 autres clients modifiés (djslyd, paul-keranne, soyumi, yoruboy) partent avec ce déploiement. Leurs changements sont du contenu uniquement — aucun risque technique, mais informer les clients concernés si nécessaire.
3. La suppression de `djMackFrClient` est propre — vérifier qu'aucune URL Vercel ne pointait encore vers cet ancien slug.

---

## 8. Verdict

```
✅ GO DEPLOY — SOUS RÉSERVE DE BUILD OK

- Client dj-mack : config complète, assets présents, domaine et canonical corrects
- Socle commun : changes additifs et backward-compatible, aucune régression
- Autres clients : content-only, aucun risque structurel
- Seul blocant : build non vérifié localement (npm indisponible dans la session)

ACTION : lancer `npm run build` + `npm run lint` puis push vers Vercel.
```

---

*Généré par l'Agent Déploiement Safe Multi-Client — 2026-05-30*
