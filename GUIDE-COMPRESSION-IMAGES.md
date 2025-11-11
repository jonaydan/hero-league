# 🖼️ Guide de Compression d'Images avec Squoosh

## Pourquoi compresser ?
- **Actuellement : 33.54 MB** → Temps de chargement lent (5-10 secondes sur mobile)
- **Objectif : ~8-10 MB** → Temps de chargement rapide (<2 secondes)
- **Impact SEO : Google pénalise les sites lents**

---

## 🚀 Méthode 1 : Squoosh (Recommandé pour débutants)

### Étapes :
1. **Ouvre** : https://squoosh.app/
2. **Glisse-dépose** une image dans la page
3. **Configure** :
   - Format : **WebP** (côté droit)
   - Qualité : **75-80%** (bon compromis qualité/poids)
4. **Compare** : Regarde la différence visuelle (gauche = original, droite = compressé)
5. **Télécharge** : Clique sur le bouton bleu en bas à droite
6. **Renomme** : Garde le même nom (ex: `home.png` → `home.webp`)

### Images à compresser par priorité :

#### 🔴 PRIORITÉ HAUTE (images lourdes) :
```
1. home.png (4.91 MB) → ~0.5 MB
2. home-tablet.png (4.13 MB) → ~0.4 MB  
3. home-phone.png (2.98 MB) → ~0.3 MB
4. hero-banner.png (2.46 MB) → ~0.3 MB
```

#### 🟡 PRIORITÉ MOYENNE (héros) :
```
5. carotte-woman.png (2.64 MB) → ~0.3 MB
6. oran-wu-tang-clan.png (2.55 MB) → ~0.3 MB
7. poulpy.png (2.36 MB) → ~0.25 MB
8. catastrophic.png (2.08 MB) → ~0.2 MB
9. ultraquenarde.png (1.89 MB) → ~0.2 MB
```

#### 🟢 PRIORITÉ BASSE (témoignages) :
```
10. testimony-4.png (1.89 MB) → ~0.15 MB
11. testimony-3.png (1.38 MB) → ~0.1 MB
12. testimony-2.png (1.11 MB) → ~0.1 MB
13. superime.png (1.11 MB) → ~0.1 MB
14. testimony-1.png (1.03 MB) → ~0.08 MB
```

---

## 💡 Alternative : TinyPNG (Plus simple mais moins de contrôle)

1. **Ouvre** : https://tinypng.com/
2. **Glisse jusqu'à 20 images** à la fois
3. **Télécharge** : Clique "Download all" (zip)
4. **Remplace** les anciennes images

**Note** : TinyPNG garde le format PNG, Squoosh permet de passer en WebP (plus léger).

---

## 📦 Où placer les images compressées ?

### Option A : Remplacer les PNG (plus simple)
```
C:\Users\barna\Desktop\heros-league\ressources\home.png
C:\Users\barna\Desktop\heros-league\ressources\images\carotte-woman.png
...
```
**Avantage** : Aucun changement de code nécessaire.

### Option B : Ajouter en WebP (meilleur)
```
C:\Users\barna\Desktop\heros-league\ressources\home.webp
C:\Users\barna\Desktop\heros-league\ressources\images\carotte-woman.webp
...
```
**Avantage** : Format moderne, 30% plus léger que PNG compressé.
**Inconvénient** : Je devrai mettre à jour le code HTML/JS.

---

## 🎯 Résultat attendu :
- **Avant** : 33.54 MB
- **Après** : ~8-10 MB (70% de réduction)
- **PageSpeed** : +40 points de score
- **Temps de chargement** : 5-10s → <2s

---

## ❓ Questions ?
1. Tu veux que je t'aide avec **Squoosh** (format WebP) ?
2. Ou tu préfères **TinyPNG** (garde le PNG) ?

**Recommandation débutant** : Commence avec TinyPNG pour les 5 premières images, c'est le plus simple !
