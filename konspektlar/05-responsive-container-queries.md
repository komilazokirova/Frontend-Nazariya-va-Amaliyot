# 📱 Responsive Web Design va Container Queries

An'anaviy Media Queries faqat butun brauzer ekraniga qaraydi (`@media (min-width: 768px)`).
Container Queries esa komponentning **o'zining konteyner kengligiga** qarab stil berish imkonini beradi.

## Container Queries Sintaksisi:
```css
.card-wrapper {
  container-type: inline-size;
  container-name: card;
}

@container card (min-width: 450px) {
  .card {
    display: flex;
    flex-direction: row;
  }
}
```

## Modern Viewport Units:
* `dvh`, `dvw` (Dynamic Viewport): Mobil brauzerlarda manzil qatori (URL bar) ochilib-yopilganda sakramaydigan dinamik birliklar.
* `svh` (Smallest Viewport), `lvh` (Largest Viewport).
