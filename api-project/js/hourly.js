//choose random of the three songs for each corresponding hour
const hours = {
  zero: function zero(min, max) {
    min = Math.ceil(1);
    max = Math.floor(3);
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  one: function one(min, max) {
    min = Math.ceil(4);
    max = Math.floor(6);
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  two: function two(min, max) {
    min = Math.ceil(7);
    max = Math.floor(9);
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  three: function three(min, max) {
    min = Math.ceil(10);
    max = Math.floor(12);
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  four: function four(min, max) {
    min = Math.ceil(13);
    max = Math.floor(15);
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  five: function five(min, max) {
    min = Math.ceil(16);
    max = Math.floor(18);
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  six: function six(min, max) {
    min = Math.ceil(19);
    max = Math.floor(21);
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  seven: function seven(min, max) {
    min = Math.ceil(22);
    max = Math.floor(24);
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  eight: function eight(min, max) {
    min = Math.ceil(25);
    max = Math.floor(27);
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  nine: function nine(min, max) {
    min = Math.ceil(28);
    max = Math.floor(30);
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  ten: function ten(min, max) {
    min = Math.ceil(31);
    max = Math.floor(33);
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  eleven: function eleven(min, max) {
    min = Math.ceil(34);
    max = Math.floor(36);
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  twelve: function twelve(min, max) {
    min = Math.ceil(37);
    max = Math.floor(39);
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  thirteen: function thirteen(min, max) {
    min = Math.ceil(40);
    max = Math.floor(42);
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  fourteen: function fourteen(min, max) {
    min = Math.ceil(43);
    max = Math.floor(45);
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  fifteen: function fifteen(min, max) {
    min = Math.ceil(46);
    max = Math.floor(48);
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  sixteen: function sixteen(min, max) {
    min = Math.ceil(49);
    max = Math.floor(51);
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  seventeen: function seventeen(min, max) {
    min = Math.ceil(52);
    max = Math.floor(54);
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  eighteen: function eighteen(min, max) {
    min = Math.ceil(55);
    max = Math.floor(57);
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  nineteen: function nineteen(min, max) {
    min = Math.ceil(58);
    max = Math.floor(60);
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  twenty: function twenty(min, max) {
    min = Math.ceil(61);
    max = Math.floor(63);
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  twentyone: function twentyone(min, max) {
    min = Math.ceil(64);
    max = Math.floor(66);
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  twentytwo: function twentytwo(min, max) {
    min = Math.ceil(67);
    max = Math.floor(69);
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  twentythree: function twentythree(min, max) {
    min = Math.ceil(70);
    max = Math.floor(72);
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
};

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

export { hours, sleep };
