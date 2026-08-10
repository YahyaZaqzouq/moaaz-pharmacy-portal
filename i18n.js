// ==============================================================
// نظام دعم اللغتين — بوابة بيانات فروع صيدلية معاذ
// Bilingual (AR/EN) support for the Moaz Pharmacy data portal
// ==============================================================

export const dict = {
  ar: {
    // مشترك
    brand: "صيدلية معاذ",
    backLink: "→ رجوع للرئيسية",
    langToggle: "English",

    // الصفحة الرئيسية
    title_index: "بوابة بيانات الفروع — صيدلية معاذ",
    portalTitle: "بوابة بيانات الفروع",
    chooseRole: "اختر الدور اللي هتدخل بيه",
    roleTitle_pharmacist: "صيدلي",
    roleDesc_pharmacist: "تسجيل أو تعديل بياناتك كصيدلي في أحد الفروع",
    roleTitle_worker: "عامل",
    roleDesc_worker: "تسجيل أو تعديل بياناتك كعامل في أحد الفروع",
    roleTitle_admin: "المسؤول",
    roleTitle_branch: "بيانات الفرع",
    roleDesc_branch: "تسجيل دخول مسؤول الفروع لإدارة التراخيص والإصلاحات",
    roleArrow: "‹",
    footerNote: "بياناتك بتتحفظ مباشرة، ولو بعتها تاني بنفس رقم الهوية/الإقامة بتستبدل القديمة تلقائي",

    // صفحة الصيادلة
    title_pharmacist: "بيانات الصيادلة — صيدلية معاذ",
    pageHeading_pharmacist: "بيانات الصيادلة",
    formEyebrow: "تسجيل / تحديث البيانات",
    hint_resubmit: "لو سبق وسجلت بياناتك، وابعتها تاني بنفس رقم الهوية، هتستبدل القديمة تلقائي بالجديدة.",
    label_fullName: "الاسم رباعي",
    ph_fullName: "الاسم الأول الأب الجد العائلة",
    label_nationality: "الجنسية",
    ph_nationality: "مثال: سعودي",
    label_branchNumber: "رقم الفرع",
    ph_branchNumber: "مثال: 29",
    label_idNumber: "رقم الهوية / الإقامة",
    ph_idNumber: "مثال: 1023456789",
    label_licenseNumber: "رقم التسجيل المهني",
    ph_licenseNumber: "رقم التسجيل المهني",
    label_licenseExpiry: "تاريخ انتهاء التسجيل المهني",
    label_mobile: "رقم الجوال",
    ph_mobile: "05XXXXXXXX",
    label_workHours: "عدد ساعات العمل",
    ph_workHours: "مثال: 8",
    saveBtn: "حفظ البيانات",
    saving: "جاري الحفظ...",
    successMsg: "تم حفظ بياناتك بنجاح ✓",
    errRequired_pharmacist: "من فضلك املا على الأقل: رقم الهوية، الاسم، رقم الفرع، رقم الجوال",
    errPrefix: "حصل خطأ أثناء الحفظ: ",

    // صفحة العمال
    title_worker: "بيانات العمال — صيدلية معاذ",
    pageHeading_worker: "بيانات العمال",
    label_idExpiry: "تاريخ انتهاء الهوية / الإقامة",
    label_sponsor: "الكفالة",
    sponsor_placeholder: "اختر الكفالة",
    sponsor_moaz: "معاذ",
    sponsor_shamail: "شمائل الحجاز",
    sponsor_other: "أخرى",
    label_sponsorOther: "اسم الكفيل",
    ph_sponsorOther: "اكتب اسم الكفيل",
    errRequired_worker: "من فضلك املا على الأقل: رقم الهوية، الاسم، رقم الفرع، رقم الجوال، الكفالة",

    // صفحة المسؤول
    title_admin: "لوحة تحكم المسؤول — صيدلية معاذ",
    pageHeading_admin: "لوحة تحكم المسؤول",
    loginEyebrow: "تسجيل دخول المسؤول",
    label_email: "البريد الإلكتروني",
    label_password: "كلمة المرور",
    loginBtn: "دخول",
    loginError: "فشل تسجيل الدخول: تأكد من البيانات وحاول تاني",
    statPharm: "عدد الصيادلة",
    statWork: "عدد العمال",
    statBranches: "عدد الفروع المختلفة",
    tab_pharmacists: "الصيادلة",
    tab_workers: "العمال",
    searchPlaceholder: "بحث بالاسم أو رقم الفرع...",
    exportBtn: "تصدير Excel",
    refreshBtn: "تحديث",
    logoutBtn: "خروج",
    emptyState: "لا توجد بيانات لعرضها بعد",

    col_fullName: "الاسم رباعي",
    col_nationality: "الجنسية",
    col_idNumber: "رقم الهوية/الإقامة",
    col_licenseNumber: "رقم التسجيل المهني",
    col_licenseExpiry: "انتهاء التسجيل",
    col_branchNumber: "رقم الفرع",
    col_mobile: "رقم الجوال",
    col_workHours: "عدد ساعات العمل",
    col_idExpiry: "انتهاء الهوية",
    col_sponsor: "الكفالة",
    col_sponsorOther: "اسم الكفيل",
    sheetName_pharmacists: "الصيادلة",
    sheetName_workers: "العمال",
    fileName_pharmacists: "بيانات_الصيادلة",
    fileName_workers: "بيانات_العمال",

    // صفحة بيانات الفرع
    title_branch: "بيانات الفرع — صيدلية معاذ",
    pageHeading_branch: "بيانات الفرع",
    loginEyebrow_branch: "تسجيل دخول مسؤول الفروع",
    tab_repairs: "الإصلاحات المطلوبة",
    tab_licenses: "التراخيص",
    newRepairEyebrow: "تسجيل عطل جديد",
    label_repairDesc: "وصف العطل",
    ph_repairDesc: "مثال: تكييف الفرع معطل",
    label_reportDate: "تاريخ البلاغ",
    addRepairBtn: "إضافة البلاغ",
    errRequired_repair: "من فضلك املا رقم الفرع، وصف العطل، وتاريخ البلاغ",
    licensesPlaceholder: "قسم التراخيص هيتم تجهيزه بمجرد ما نحدد الحقول المطلوبة",
    col_repairDesc: "وصف العطل",
    col_reportDate: "تاريخ البلاغ",
    col_status: "الحالة"
  },

  en: {
    brand: "Moaz Pharmacy",
    backLink: "← Back to Home",
    langToggle: "العربية",

    title_index: "Branch Data Portal — Moaz Pharmacy",
    portalTitle: "Branch Data Portal",
    chooseRole: "Choose the role you want to enter as",
    roleTitle_pharmacist: "Pharmacist",
    roleDesc_pharmacist: "Register or update your data as a pharmacist at a branch",
    roleTitle_worker: "Worker",
    roleDesc_worker: "Register or update your data as a worker at a branch",
    roleTitle_admin: "Admin",
    roleTitle_branch: "Branch Data",
    roleDesc_branch: "Branch manager login to manage licenses and repairs",
    roleArrow: "›",
    footerNote: "Your data is saved directly — resubmitting with the same ID/Iqama number automatically replaces the old entry",

    title_pharmacist: "Pharmacist Data — Moaz Pharmacy",
    pageHeading_pharmacist: "Pharmacist Data",
    formEyebrow: "Register / Update Data",
    hint_resubmit: "If you've already registered, resubmitting with the same ID number will automatically replace your old data.",
    label_fullName: "Full Name (4 parts)",
    ph_fullName: "First, Father, Grandfather, Family",
    label_nationality: "Nationality",
    ph_nationality: "e.g. Saudi",
    label_branchNumber: "Branch Number",
    ph_branchNumber: "e.g. 29",
    label_idNumber: "ID / Iqama Number",
    ph_idNumber: "e.g. 1023456789",
    label_licenseNumber: "Professional Registration Number",
    ph_licenseNumber: "Professional Registration Number",
    label_licenseExpiry: "Registration Expiry Date",
    label_mobile: "Mobile Number",
    ph_mobile: "05XXXXXXXX",
    label_workHours: "Working Hours",
    ph_workHours: "e.g. 8",
    saveBtn: "Save Data",
    saving: "Saving...",
    successMsg: "Your data was saved successfully ✓",
    errRequired_pharmacist: "Please fill in at least: ID number, name, branch number, mobile number",
    errPrefix: "An error occurred while saving: ",

    title_worker: "Worker Data — Moaz Pharmacy",
    pageHeading_worker: "Worker Data",
    label_idExpiry: "ID / Iqama Expiry Date",
    label_sponsor: "Sponsor",
    sponsor_placeholder: "Select sponsor",
    sponsor_moaz: "Moaz",
    sponsor_shamail: "Shamail Al Hijaz",
    sponsor_other: "Other",
    label_sponsorOther: "Sponsor Name",
    ph_sponsorOther: "Enter sponsor name",
    errRequired_worker: "Please fill in at least: ID number, name, branch number, mobile number, sponsor",

    title_admin: "Admin Dashboard — Moaz Pharmacy",
    pageHeading_admin: "Admin Dashboard",
    loginEyebrow: "Admin Login",
    label_email: "Email",
    label_password: "Password",
    loginBtn: "Login",
    loginError: "Login failed: please check your credentials and try again",
    statPharm: "Pharmacists",
    statWork: "Workers",
    statBranches: "Branches",
    tab_pharmacists: "Pharmacists",
    tab_workers: "Workers",
    searchPlaceholder: "Search by name or branch number...",
    exportBtn: "Export Excel",
    refreshBtn: "Refresh",
    logoutBtn: "Logout",
    emptyState: "No data to display yet",

    col_fullName: "Full Name",
    col_nationality: "Nationality",
    col_idNumber: "ID/Iqama Number",
    col_licenseNumber: "License Number",
    col_licenseExpiry: "License Expiry",
    col_branchNumber: "Branch Number",
    col_mobile: "Mobile Number",
    col_workHours: "Working Hours",
    col_idExpiry: "ID Expiry",
    col_sponsor: "Sponsor",
    col_sponsorOther: "Sponsor Name",
    sheetName_pharmacists: "Pharmacists",
    sheetName_workers: "Workers",
    fileName_pharmacists: "pharmacists_data",
    fileName_workers: "workers_data",

    // Branch data page
    title_branch: "Branch Data — Moaz Pharmacy",
    pageHeading_branch: "Branch Data",
    loginEyebrow_branch: "Branch Manager Login",
    tab_repairs: "Required Repairs",
    tab_licenses: "Licenses",
    newRepairEyebrow: "Report a New Issue",
    label_repairDesc: "Issue Description",
    ph_repairDesc: "e.g. Branch AC not working",
    label_reportDate: "Report Date",
    addRepairBtn: "Add Report",
    errRequired_repair: "Please fill in branch number, issue description, and report date",
    licensesPlaceholder: "The licenses section will be set up once the required fields are defined",
    col_repairDesc: "Issue Description",
    col_reportDate: "Report Date",
    col_status: "Status"
  }
};

export function getLang(){
  return localStorage.getItem('portalLang') || 'ar';
}

export function setLang(lang){
  localStorage.setItem('portalLang', lang);
}

export function applyLang(lang){
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if(dict[lang][key] !== undefined) el.textContent = dict[lang][key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if(dict[lang][key] !== undefined) el.placeholder = dict[lang][key];
  });

  const titleEl = document.querySelector('title[data-i18n]');
  if(titleEl && dict[lang][titleEl.getAttribute('data-i18n')]){
    document.title = dict[lang][titleEl.getAttribute('data-i18n')];
  }

  const toggleBtn = document.getElementById('langToggle');
  if(toggleBtn) toggleBtn.textContent = dict[lang]['langToggle'];
}

export function initLangToggle(){
  let lang = getLang();
  applyLang(lang);
  const toggleBtn = document.getElementById('langToggle');
  if(toggleBtn){
    toggleBtn.addEventListener('click', () => {
      lang = lang === 'ar' ? 'en' : 'ar';
      setLang(lang);
      applyLang(lang);
    });
  }
  return lang;
}
