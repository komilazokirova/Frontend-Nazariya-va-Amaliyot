# 🚪 React Portals va Modallar Arxitekturasi

`ReactDOM.createPortal` komponentni o'zining ota DOM ierarxiyasidan tashqarida (odatda `document.body` da) render qilish imkonini beradi.

## Nega kerak?
Agar ota elementda `overflow: hidden` yoki `z-index` cheklovlari bo'lsa, ichki modal yoki tooltip to'g'ri ko'rinmay kesilib qoladi. Portal buni to'liq bartaraf etadi, shu bilan birga React Event Bubbling mexanizmini saqlab qoladi.
