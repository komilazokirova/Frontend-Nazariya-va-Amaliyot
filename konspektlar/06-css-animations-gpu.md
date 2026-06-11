# ⚡ CSS Animations, Transitions va GPU Optimizatsiyasi

60 FPS (va 120 FPS) silliq animatsiyalar yaratish qoidalari.

## Браузер qanday chizadi?
1. **Layout (Reflow)**: Geometriya va o'lchamlarni hisoblash (`width`, `height`, `top`, `left`). Juda og'ir!
2. **Paint (Repaint)**: Ranglar, soyalar chizish (`background`, `color`, `box-shadow`).
3. **Composite (GPU)**: Qatlamlarni birlashtirish (`transform`, `opacity`, `filter`). **Eng tez va yengil!**

