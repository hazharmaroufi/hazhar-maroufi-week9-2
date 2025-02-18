const chars = ["A", "B", "C", "D", "E", "F"];
// برای ساخت یکی از ۶ عدد مورد نیاز برای رنگ هگزا
const randomNumbers = function () {
  let randomnumber = Math.floor(Math.random() * 16);
  if (randomnumber == 10) {
    randomnumber = chars[0];
  } else if (randomnumber == 11) {
    randomnumber = chars[1];
  } else if (randomnumber == 12) {
    randomnumber = chars[2];
  } else if (randomnumber == 13) {
    randomnumber = chars[3];
  } else if (randomnumber == 14) {
    randomnumber = chars[4];
  } else if (randomnumber == 15) {
    randomnumber = chars[5];
  }
  return randomnumber;
};

// برای ترکیب هر ۶ عدد هگزای رندوم بالا به یک کد رنگ
const colorCodes = function () {
  let rand1 = randomNumbers().toString();
  let rand2 = randomNumbers().toString();
  let rand3 = randomNumbers().toString();
  let rand4 = randomNumbers().toString();
  let rand5 = randomNumbers().toString();
  let rand6 = randomNumbers().toString();
  const colorCode = "#" + rand1 + rand2 + rand3 + rand4 + rand5 + rand6;
  return colorCode;
};

// انتخاب باکس های ساخته شده توسط سی اس اس گرید
const box1 = document.querySelector(".box-1");
const box2 = document.querySelector(".box-2");
const box3 = document.querySelector(".box-3");
const box4 = document.querySelector(".box-4");
const box5 = document.querySelector(".box-5");

//  انتخاب متن اول که کد رنگ رو در اون نمایش میدیم
const clCode1 = document.querySelector(".clCode1");
const clCode2 = document.querySelector(".clCode2");
const clCode3 = document.querySelector(".clCode3");
const clCode4 = document.querySelector(".clCode4");
const clCode5 = document.querySelector(".clCode5");

//  انتخاب متن دوم که اسم رنگ رو توش نمایش میدیم
const clName1 = document.querySelector(".clName1");
const clName2 = document.querySelector(".clName2");
const clName3 = document.querySelector(".clName3");
const clName4 = document.querySelector(".clName4");
const clName5 = document.querySelector(".clName5");

//  تبدیل ماوس در باکس های رنگ به اشاره گر دست
box1.style.cursor = "pointer";
box2.style.cursor = "pointer";
box3.style.cursor = "pointer";
box4.style.cursor = "pointer";
box5.style.cursor = "pointer";

//  لیسنر های باکس ها برای تغییر رنگ و نمایش کد رنگ و اسم رنگ جدید
// ntc.js برای تبدیل کد رنگ به اسم رنگ استفاده شده
box1.addEventListener("click", () => {
  const theColor = colorCodes();
  box1.style.backgroundColor = theColor;
  clCode1.textContent = ntc.name(theColor)[0];
  clName1.textContent = ntc.name(theColor)[1];
});
box2.addEventListener("click", () => {
  const theColor = colorCodes();
  box2.style.backgroundColor = theColor;
  clCode2.textContent = ntc.name(theColor)[0];
  clName2.textContent = ntc.name(theColor)[1];
});
box3.addEventListener("click", () => {
  const theColor = colorCodes();
  box3.style.backgroundColor = theColor;
  clCode3.textContent = ntc.name(theColor)[0];
  clName3.textContent = ntc.name(theColor)[1];
});
box4.addEventListener("click", () => {
  const theColor = colorCodes();
  box4.style.backgroundColor = theColor;
  clCode4.textContent = ntc.name(theColor)[0];
  clName4.textContent = ntc.name(theColor)[1];
});
box5.addEventListener("click", () => {
  const theColor = colorCodes();
  box5.style.backgroundColor = theColor;
  clCode5.textContent = ntc.name(theColor)[0];
  clName5.textContent = ntc.name(theColor)[1];
});
