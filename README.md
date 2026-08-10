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

---

## تحديث: تبويب "بيانات الفرع"

أُضيف ملف `branch.html` بتسجيل دخول منفصل (حساب "مسؤول الفروع")، وفيه قسم "الإصلاحات المطلوبة" شغال بالكامل، وقسم "التراخيص" جاهز شكليًا وهيتم استكمال حقوله لاحقًا.

### خطوة إضافية 1: حسابات مسؤولي الفروع
بدل ما تعمل حساب واحد يدوي، هنعمل الـ46 حساب (لكل فرع) دفعة واحدة بسكريبت — التفاصيل في قسم "46 حساب فرع دفعة واحدة" تحت.

### خطوة إضافية 2: تحديث قواعد الأمان (استبدل القواعد بالكامل)

في **Firestore Database → Rules**، امسح القواعد القديمة كلها وحط بدالها القواعد النهائية دي:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    match /pharmacists/{docId} {
      allow read: if request.auth != null && request.auth.token.role == 'admin';
      allow write: if true;
    }

    match /workers/{docId} {
      allow read: if request.auth != null && request.auth.token.role == 'admin';
      allow write: if true;
    }

    match /repairs/{docId} {
      allow read, update: if request.auth != null && (
        request.auth.token.role == 'admin' ||
        (request.auth.token.branchNumber != null &&
         string(request.auth.token.branchNumber) == resource.data.branchNumber)
      );
      allow create: if request.auth != null && (
        request.auth.token.role == 'admin' ||
        (request.auth.token.branchNumber != null &&
         string(request.auth.token.branchNumber) == request.resource.data.branchNumber)
      );
    }

    match /licenses/{docId} {
      allow read: if request.auth != null && (
        request.auth.token.role == 'admin' ||
        (request.auth.token.branchNumber != null &&
         string(request.auth.token.branchNumber) == resource.data.branchNumber)
      );
      allow write: if request.auth != null && (
        request.auth.token.role == 'admin' ||
        (request.auth.token.branchNumber != null &&
         string(request.auth.token.branchNumber) == request.resource.data.branchNumber)
      );
    }

  }
}
```

**معنى القواعد الجديدة:**
- **الصيادلة/العمال:** أي حد (حتى بدون تسجيل دخول) يقدر يكتب بياناته. القراءة الكاملة مقصورة على حساب المسؤول الأساسي بس (اللي عنده `role: admin`) — حسابات الفروع مش هتقدر تشوفها خالص.
- **الإصلاحات والتراخيص:** كل حساب فرع يشوف ويعدّل بيانات فرعه هو بس (بناءً على `branchNumber` المربوط بحسابه). حساب المسؤول الأساسي يشوف الكل.

---

## تحديث: 46 حساب فرع دفعة واحدة

بدل ما تعمل 46 حساب يدوي من الموقع (ومستحيل تظبط الصلاحيات الدقيقة دي يدويًا أصلاً)، جهزتلك سكريبت بيعملهم كلهم مرة واحدة، وملف Excel فيه كل بيانات الدخول محفوظة عندك.

### الملفات
- `branch-accounts-setup/create-branch-users.js` — السكريبت اللي بيعمل الحسابات
- `branch-accounts-setup/branch_accounts.json` — بيانات الـ46 فرع (يوزر نيم، إيميل، باسورد)
- `بيانات_دخول_الفروع.xlsx` — نفس البيانات في جدول Excel للحفظ والرجوع ليه وقت الحاجة

### طريقة التشغيل (محتاجة جهاز كمبيوتر فيه Node.js، مش من الموبايل)
1. من Firebase Console: **⚙️ Project settings → Service accounts → Generate new private key**، ونزّل الملف واحفظه باسم `service-account.json` جوه فولدر `branch-accounts-setup`
2. افتح ملف `create-branch-users.js` وغيّر السطر:
   `const MAIN_ADMIN_EMAIL = 'REPLACE_WITH_MAIN_ADMIN_EMAIL';`
   وحط مكانه إيميل حساب المسؤول الأساسي بتاعك بالظبط (اللي عملته قبل كده)
3. من الـ Terminal جوه فولدر `branch-accounts-setup`:
   ```bash
   npm install firebase-admin
   node create-branch-users.js
   ```
4. السكريبت هيطبعلك ✓ لكل فرع اتعمل بنجاح، و✗ لو فيه مشكلة في حساب معين

### اليوزر نيم بتاع كل فرع
كل فرع بيدخل بالإيميل (مش اليوزرنيم البسيط، لأن Firebase محتاج صيغة إيميل) بالشكل:
`moaz1@moazportal.com`, `moaz2@moazportal.com`, ... لحد `moaz46@moazportal.com`
وكلمة المرور موجودة قدام كل فرع في ملف Excel.

**ملاحظة أمان:** الباسوردات دي عشوائية وقوية، احتفظ بملف الـ Excel في مكان آمن ومتشاركوش إلا مع الشخص المسؤول عن كل فرع.
