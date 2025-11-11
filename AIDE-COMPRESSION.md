# ⚡ AIDE-MÉMOIRE : Compression Images TinyPNG

## 🎯 OBJECTIF
Réduire 33.54 MB → 8-10 MB (-70%)

---

## 📋 CHECKLIST (Coche au fur et à mesure)

### Images dans `ressources/` (9 fichiers)
- [ ] home.png (4.91 MB) → ~0.5 MB ⭐ PRIORITÉ
- [ ] home-tablet.png (4.13 MB) → ~0.4 MB ⭐ PRIORITÉ
- [ ] home-phone.png (2.98 MB) → ~0.3 MB ⭐ PRIORITÉ
- [ ] header.png (0.79 MB) → ~0.1 MB
- [ ] hover-hero.png (0.21 MB) → ~0.03 MB
- [ ] footer-menu-hover.png (0.01 MB) → ~0.01 MB (déjà OK)
- [ ] menu-hover.png (0.01 MB) → ~0.01 MB (déjà OK)
- [ ] button-hover.png (0 MB) → ~0 MB (déjà OK)
- [ ] input-focus.png (0 MB) → ~0 MB (déjà OK)

### Images dans `ressources/images/` (11 fichiers)
- [ ] hero-banner.png (2.46 MB) → ~0.3 MB ⭐ PRIORITÉ
- [ ] carotte-woman.png (2.64 MB) → ~0.3 MB ⭐ PRIORITÉ
- [ ] oran-wu-tang-clan.png (2.55 MB) → ~0.3 MB
- [ ] poulpy.png (2.36 MB) → ~0.25 MB
- [ ] catastrophic.png (2.08 MB) → ~0.2 MB
- [ ] ultraquenarde.png (1.89 MB) → ~0.2 MB
- [ ] testimony-4.png (1.89 MB) → ~0.15 MB
- [ ] testimony-3.png (1.38 MB) → ~0.1 MB
- [ ] testimony-2.png (1.11 MB) → ~0.1 MB
- [ ] superime.png (1.11 MB) → ~0.1 MB
- [ ] testimony-1.png (1.03 MB) → ~0.08 MB

---

## 🚀 ÉTAPES SIMPLES

### Méthode 1 : Par lots (RECOMMANDÉ - Plus rapide)

1. **Ouvre TinyPNG** : https://tinypng.com/
   ✅ Fenêtre déjà ouverte !

2. **Glisse 5 images prioritaires d'abord** :
   - `ressources/home.png`
   - `ressources/home-tablet.png`
   - `ressources/home-phone.png`
   - `ressources/images/hero-banner.png`
   - `ressources/images/carotte-woman.png`

3. **Attends** que la compression se termine (barre verte)

4. **Clique** "Download all" (bouton vert en bas)

5. **Extrais** le ZIP téléchargé

6. **Remplace** les fichiers originaux :
   - Copie les nouveaux fichiers
   - Colle dans `c:\Users\barna\Desktop\heros-league\ressources\`
   - Windows demandera : "Remplacer ?" → Clique **OUI**

7. **Répète** pour les 9 images restantes (par lots de 5-10)

---

### Méthode 2 : Une par une (Plus lent mais plus sûr)

1. **Ouvre TinyPNG** : https://tinypng.com/

2. **Glisse 1 image**

3. **Attends** la compression

4. **Clique** sur l'image compressée

5. **Télécharge**

6. **Remplace** dans le dossier

7. **Répète** pour les 19 autres images

---

## 🎯 ORDRE DE PRIORITÉ

### Batch 1 (5 images - Impact maximal)
```
ressources/home.png
ressources/home-tablet.png
ressources/home-phone.png
ressources/images/hero-banner.png
ressources/images/carotte-woman.png
```
**Impact : -17 MB (50% du gain total)**

### Batch 2 (5 images - Héros)
```
ressources/images/oran-wu-tang-clan.png
ressources/images/poulpy.png
ressources/images/catastrophic.png
ressources/images/ultraquenarde.png
ressources/images/superime.png
```
**Impact : -9 MB**

### Batch 3 (4 images - Témoignages)
```
ressources/images/testimony-1.png
ressources/images/testimony-2.png
ressources/images/testimony-3.png
ressources/images/testimony-4.png
```
**Impact : -5 MB**

### Batch 4 (5 images - Petits fichiers)
```
ressources/header.png
ressources/hover-hero.png
ressources/footer-menu-hover.png
ressources/menu-hover.png
ressources/button-hover.png
```
**Impact : -0.5 MB**

---

## ✅ APRÈS COMPRESSION

### Vérifier les tailles
```powershell
cd c:\Users\barna\Desktop\heros-league
Get-ChildItem -Recurse *.png | Measure-Object -Property Length -Sum

# Tu devrais voir ~10-12 MB au lieu de 33.54 MB
```

### Commit Git
```powershell
git add ressources/
git commit -m "Perf: Compresser toutes les images PNG -70% (33MB→10MB)"
git push
```

### Attendre le déploiement (2-3 min)
GitHub Actions va automatiquement déployer la nouvelle version.

### Tester la performance
1. Va sur https://pagespeed.web.dev/
2. Entre : `https://jonaydan.github.io/hero-league/`
3. Regarde le score (cible : 85-90/100)

---

## 💡 ASTUCES

### Si TinyPNG refuse une image
- L'image est peut-être déjà compressée
- Ou trop petite (<1 KB)
- Pas grave, passe à la suivante !

### Si tu perds les fichiers téléchargés
- Ils sont dans `C:\Users\barna\Downloads\`
- Cherche `tinypng-*.zip`

### Si tu veux annuler
- Les fichiers originaux sont sur GitHub
- Tu peux toujours les récupérer avec `git checkout`

---

## 🎉 RÉSULTAT ATTENDU

### Avant
```
❌ 33.54 MB total
❌ Chargement : 5-10 secondes
❌ PageSpeed : 60/100
```

### Après
```
✅ 8-10 MB total (-70%)
✅ Chargement : <2 secondes
✅ PageSpeed : 85-90/100
```

---

## 🆘 PROBLÈMES ?

### "Je ne trouve pas les fichiers téléchargés"
```powershell
explorer C:\Users\barna\Downloads\
# Cherche "tinypng" ou trie par date
```

### "J'ai remplacé le mauvais fichier"
```powershell
cd c:\Users\barna\Desktop\heros-league
git checkout ressources/FICHIER.png
# Restaure le fichier original
```

### "Je veux recommencer"
```powershell
git checkout ressources/
# Restaure TOUS les fichiers originaux
```

---

## ⏱️ TEMPS ESTIMÉ

- Batch 1 (5 images) : 5 minutes
- Batch 2 (5 images) : 5 minutes
- Batch 3 (4 images) : 4 minutes
- Batch 4 (5 images) : 3 minutes

**TOTAL : 15-20 minutes** (pas 45 min !)

---

## 🚀 APRÈS COMPRESSION

Dis-moi : **"J'ai compressé les images !"**

Et on passera à :
1. ✅ Vérifier les tailles
2. ✅ Git commit + push
3. ✅ Soumettre à Google Search Console
4. ✅ Tester PageSpeed
5. 🎉 Célébrer le site production-ready !

---

**TU AS TOUT CE QU'IL FAUT ! MAINTENANT GLISSE-DÉPOSE LES 5 PREMIÈRES IMAGES ! 🔥**
