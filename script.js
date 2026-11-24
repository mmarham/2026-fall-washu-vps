const colors = ["lemonchiffon", "palegoldenrod", "honeydew", "lavender", "mistyrose"]

const randomColor = colors[Math.floor(Math.random() * colors.length)];

document.body.style.backgroundColor = randomColor;

const fonts = ["Arial", "Verdana", "Helvetica", "Georgia", "Times New Roman"];

const randomFont = fonts[Math.floor(Math.random() * fonts.length)];

document.body.style.fontFamily = randomFont;