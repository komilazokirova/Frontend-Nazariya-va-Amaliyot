# 🧬 Prototiplar va Prototypal Inheritance

JavaScript — sinflarga emas, prototiplarga asoslangan obyektga yo'naltirilgan dasturlash tilidir.

## Prototip zanjiri (Prototype Chain):
Har bir obyektning yashirin `[[Prototype]]` (brauzerda `__proto__`) xususiyati bo'ladi.
Agar biror property obyektning o'zida topilmasa, dvigatel zanjir bo'ylab yuqoriga qarab qidiradi (`Object.prototype` gacha).

```javascript
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function() {
  return `${this.name} ovoz chiqarmoqda`;
};

// ES6 Class — bu aslida prototiplar ustidagi qulay "syntactic sugar":
class Dog extends Animal {
  speak() {
    return `${this.name} vovullamoqda`;
