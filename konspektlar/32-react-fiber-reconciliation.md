# 🌳 React Fiber Tree va Reconciliation Algoritmi

React qanday qilib butun sahifani qayta chizmasdan minimal DOM operatsiyalarini bajaradi?

## 1. Virtual DOM (VDOM):
Haqiqiy DOM ning xotiradagi yengil JavaScript obyekt nusxasi.

## 2. Fiber Architecture:
React 16 dan boshlab joriy etilgan ikki bosqichli render tizimi:
* **Render (Reconciliation) bosqichi**: Asinxron va uzib qo'yilishi mumkin. Fiber daraxti bo'ylab o'zgarishlar diff qilinadi.
* **Commit bosqichi**: Sinxron. Haqiqiy DOM ga o'zgarishlar tatbiq etiladi.
