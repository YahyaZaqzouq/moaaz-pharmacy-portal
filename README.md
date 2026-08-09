# بوابة بيانات الفروع — صيدلية معاذ

## الملفات
- `index.html` — الصفحة الرئيسية (اختيار الدور)
- `pharmacist.html` — فورم بيانات الصيادلة
- `worker.html` — فورم بيانات العمال
- `admin.html` — لوحة تحكم المسؤول (دخول + عرض + تصدير Excel)
- `firebase-config.js` — إعدادات الاتصال بـ Firebase (لازم تعدله أنت)
- `styles.css` — التصميم المشترك لكل الصفحات

---

## خطوة 1: ظبط Firebase

1. من [Firebase Console](https://console.firebase.google.com) افتح مشروعك (أو أنشئ مشروع جديد مجاني).
2. من **Project settings → General → Your apps**، أضف تطبيق ويب (</> Web app) لو مش مضاف قبل كده.
3. هيديك كائن `firebaseConfig` — انسخه وحطه مكان القيم في ملف `firebase-config.js`.
4. من القائمة الجانبية افتح **Build → Firestore Database** واعمل **Create database** (اختر وضع الإنتاج Production mode).
5. من **Build → Authentication → Sign-in method** فعّل **Email/Password**.
6. من تبويب **Users** في Authentication، أضف مستخدم واحد بإيميل وباسورد — ده هيكون حساب المسؤول اللي هيدخل بيه على `admin.html`.

---

## خطوة 2: قواعد أمان Firestore

في **Firestore Database → Rules**، حط القواعد دي بالظبط:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /pharmacists/{docId} {
      allow read: if request.auth != null;
      allow write: if true;
    }
    match /workers/{docId} {
      allow read: if request.auth != null;
      allow write: if true;
    }
  }
}
```

**معنى القواعد:** أي حد يقدر يكتب بياناته (يملي الفورم) بدون تسجيل دخول، لكن القراءة (عرض كل البيانات في لوحة التحكم) متاحة بس لمستخدم مسجل دخول — يعني المسؤول بس.

---

## خطوة 3: النشر المجاني

أسهل طريقة (نفس مشروع Firebase بتاعك):

```bash
npm install -g firebase-tools
firebase login
firebase init hosting     # اختر مجلد المشروع ده كـ public directory
firebase deploy
```

هيديك رابط زي: `https://your-project.web.app`

**بديل:** ارفع نفس الملفات على GitHub Pages أو Netlify مجانًا — الكود بيتصل بـ Firebase مباشرة من المتصفح فمش لازم يكون على استضافة Firebase نفسها.

---

## ملاحظات مهمة

- **الصيادلة/العمال:** بيدخلوا برقم الهوية/الإقامة كمفتاح. لو الرقم موجود قبل كده، البيانات بتتحمل تلقائي للتعديل. لو جديد، بيتسجل سجل جديد.
- **المسؤول:** بيسجل دخول بالإيميل والباسورد اللي عملته في خطوة 1، وبيقدر يشوف الصيادلة والعمال، يبحث بالاسم أو رقم الفرع، ويصدّر Excel بضغطة زرار.
- **بيانات الفروع والإصلاحات:** لسه معمولاش، هنضيفها في مرحلة تانية.
- الباقة المجانية من Firebase (Spark) بتكفي بيانات فرع صيدلية بالحجم ده براحة.
