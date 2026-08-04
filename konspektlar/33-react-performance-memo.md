# ⚡ React Performance: `useMemo` va `useCallback`

* `useMemo`: Qimmatli hisob-kitob natijasini keshlaydi.
* `useCallback`: Funksiyaning referensini keshlaydi (farzand komponentlarga prop uzatilganda re-renderni kamaytiradi).

## ⚠️ Noto'g'ri foydalanish oqibatlari:
Oddiy hisob-kitoblar (masalan `2 + 2` yoki kichik massiv filtri) uchun `useMemo` ishlatish xotira va qo'shimcha tekshiruvlar hisobiga dasturni **sekinlashtiradi**!
Faqat chindan ham qimmatli (minglab qatorlar) amallarda yoki komponent referens tengligiga tayanayotgandagina qo'llang.
