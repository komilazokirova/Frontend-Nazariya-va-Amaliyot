# 🧩 Compound Components Pattern

Komponentlarni xuddi `<select>` va `<option>` kabi bir-biri bilan tabiiy ishlaydigan qilish:

```tsx
<Tabs defaultValue="tab1">
  <Tabs.List>
    <Tabs.Trigger value="tab1">Umumiy</Tabs.Trigger>
    <Tabs.Trigger value="tab2">Sozlamalar</Tabs.Trigger>
