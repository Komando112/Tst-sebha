// بيانات الأذكار اليومية
const dailyAzkar = [
  {
    id: 1,
    name: "سبحان الله",
    arabic: "سُبْحَانَ اللَّهِ",
    count: 0,
    target: 33,
    color: "accent-blue",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-100",
    icon: "🕌",
    btnColor: "bg-blue-500 hover:bg-blue-600",
    category: "daily",
  },
  {
    id: 2,
    name: "الحمد لله",
    arabic: "الْحَمْدُ لِلَّهِ",
    count: 0,
    target: 33,
    color: "accent-green",
    bgColor: "bg-green-50",
    borderColor: "border-green-100",
    icon: "🌿",
    btnColor: "bg-green-500 hover:bg-green-600",
    category: "daily",
  },
  {
    id: 3,
    name: "الله أكبر",
    arabic: "اللَّهُ أَكْبَرُ",
    count: 0,
    target: 33,
    color: "accent-red",
    bgColor: "bg-red-50",
    borderColor: "border-red-100",
    icon: "☪️",
    btnColor: "bg-red-500 hover:bg-red-600",
    category: "daily",
  },
  {
    id: 4,
    name: "لا إله إلا الله",
    arabic: "لَا إِلَهَ إِلَّا اللَّهُ",
    count: 0,
    target: 100,
    color: "accent-purple",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-100",
    icon: "🌟",
    btnColor: "bg-purple-500 hover:bg-purple-600",
    category: "daily",
  },
  {
    id: 5,
    name: "أستغفر الله",
    arabic: "أَسْتَغْفِرُ اللَّهَ",
    count: 0,
    target: 100,
    color: "accent-teal",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-100",
    icon: "💧",
    btnColor: "bg-teal-500 hover:bg-teal-600",
    category: "daily",
  },
  {
    id: 6,
    name: "سبحان الله وبحمده",
    arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
    count: 0,
    target: 100,
    color: "accent-orange",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-100",
    icon: "🌅",
    btnColor: "bg-orange-500 hover:bg-orange-600",
    category: "daily",
  },
];

// بيانات أذكار الصباح
const morningAzkar = [
  {
    id: 101,
    name: "أصبحنا وأصبح الملك لله",
    arabic: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ",
    count: 0,
    target: 1,
    color: "accent-green",
    bgColor: "bg-green-50",
    borderColor: "border-green-100",
    icon: "🌅",
    btnColor: "bg-green-500 hover:bg-green-600",
    category: "morning",
  },
  {
    id: 102,
    name: "اللهم بك أصبحنا",
    arabic: "اللَّهُمَّ بِكَ أَصْبَحْنَا",
    count: 0,
    target: 1,
    color: "accent-blue",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-100",
    icon: "☀️",
    btnColor: "bg-blue-500 hover:bg-blue-600",
    category: "morning",
  },
  {
    id: 103,
    name: "سبحان الله وبحمده",
    arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
    count: 0,
    target: 100,
    color: "accent-teal",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-100",
    icon: "✨",
    btnColor: "bg-teal-500 hover:bg-teal-600",
    category: "morning",
  },
  {
    id: 104,
    name: "لا إله إلا الله وحده",
    arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ",
    count: 0,
    target: 10,
    color: "accent-purple",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-100",
    icon: "🕌",
    btnColor: "bg-purple-500 hover:bg-purple-600",
    category: "morning",
  },
];

// بيانات أذكار المساء
const eveningAzkar = [
  {
    id: 201,
    name: "أمسينا وأمسى الملك لله",
    arabic: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ",
    count: 0,
    target: 1,
    color: "accent-blue",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-100",
    icon: "🌙",
    btnColor: "bg-blue-500 hover:bg-blue-600",
    category: "evening",
  },
  {
    id: 202,
    name: "اللهم بك أمسينا",
    arabic: "اللَّهُمَّ بِكَ أَمْسَيْنَا",
    count: 0,
    target: 1,
    color: "accent-purple",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-100",
    icon: "⭐",
    btnColor: "bg-purple-500 hover:bg-purple-600",
    category: "evening",
  },
  {
    id: 203,
    name: "سبحان الله وبحمده",
    arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
    count: 0,
    target: 100,
    color: "accent-teal",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-100",
    icon: "✨",
    btnColor: "bg-teal-500 hover:bg-teal-600",
    category: "evening",
  },
  {
    id: 204,
    name: "لا إله إلا الله وحده",
    arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ",
    count: 0,
    target: 10,
    color: "accent-green",
    bgColor: "bg-green-50",
    borderColor: "border-green-100",
    icon: "🕌",
    btnColor: "bg-green-500 hover:bg-green-600",
    category: "evening",
  },
];

// بيانات أذكار بعد الصلاة
const afterPrayerAzkar = [
  {
    id: 301,
    name: "أستغفر الله",
    arabic: "أَسْتَغْفِرُ اللَّهَ",
    count: 0,
    target: 3,
    color: "accent-blue",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-100",
    icon: "🕌",
    btnColor: "bg-blue-500 hover:bg-blue-600",
    category: "afterPrayer",
  },
  {
    id: 302,
    name: "سبحان الله",
    arabic: "سُبْحَانَ اللَّهِ",
    count: 0,
    target: 33,
    color: "accent-green",
    bgColor: "bg-green-50",
    borderColor: "border-green-100",
    icon: "✨",
    btnColor: "bg-green-500 hover:bg-green-600",
    category: "afterPrayer",
  },
  {
    id: 303,
    name: "الحمد لله",
    arabic: "الْحَمْدُ لِلَّهِ",
    count: 0,
    target: 33,
    color: "accent-purple",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-100",
    icon: "🌟",
    btnColor: "bg-purple-500 hover:bg-purple-600",
    category: "afterPrayer",
  },
  {
    id: 304,
    name: "الله أكبر",
    arabic: "اللَّهُ أَكْبَرُ",
    count: 0,
    target: 33,
    color: "accent-red",
    bgColor: "bg-red-50",
    borderColor: "border-red-100",
    icon: "☪️",
    btnColor: "bg-red-500 hover:bg-red-600",
    category: "afterPrayer",
  },
];

// الإحصائيات
let totalCount = 0;
let todayCount = 0;
let streakDays = 1;
let completedSets = 0;
let lastSaveDate = null;

// قاعدة بيانات المدن للدول العربية
const citiesDatabase = {
  EG: [
    { arName: "القاهرة", enName: "Cairo" },
    { arName: "الجيزة", enName: "Giza" },
    { arName: "الإسكندرية", enName: "Alexandria" },
    { arName: "المنيا", enName: "Minya" },
    { arName: "الفيوم", enName: "Faiyum" },
    { arName: 'سيلا', enName: 'Seila' },
    { arName: 'طامية', enName: 'Tamiya' },
    { arName: 'سنورس', enName: 'Sannuris' },
    { arName: 'إطسا', enName: 'Itsa' },
    { arName: 'ابشواي', enName: 'Abushway' },
    { arName: "البحيرة", enName: "Beheira" },
    { arName: "الغربية", enName: "Gharbia" },
    { arName: "الدقهلية", enName: "Dakahlia" },
    { arName: "الشرقية", enName: "Sharqia" },
    { arName: "القليوبية", enName: "Qalyubia" },
    { arName: "كفر الشيخ", enName: "Kafr El Sheikh" },
    { arName: "المنوفية", enName: "Monufia" },
    { arName: "دمياط", enName: "Damietta" },
    { arName: "بورسعيد", enName: "Port Said" },
    { arName: "الإسماعيلية", enName: "Ismailia" },
    { arName: "السويس", enName: "Suez" },
    { arName: "شمال سيناء", enName: "North Sinai" },
    { arName: "جنوب سيناء", enName: "South Sinai" },
    { arName: "البحر الأحمر", enName: "Red Sea" },
    { arName: "بني سويف", enName: "Beni Suef" },
    { arName: "أسيوط", enName: "Asyut" },
    { arName: "سوهاج", enName: "Sohag" },
    { arName: "قنا", enName: "Qena" },
    { arName: "الأقصر", enName: "Luxor" },
    { arName: "أسوان", enName: "Aswan" },
    { arName: "الوادي الجديد", enName: "New Valley" },
    { arName: "مطروح", enName: "Matrouh" },
  ],
  SA: [
    { arName: "الرياض", enName: "Riyadh" },
    { arName: "جدة", enName: "Jeddah" },
    { arName: "مكة المكرمة", enName: "Makkah al Mukarramah" },
    { arName: "المدينة المنورة", enName: "Al Madinah al Munawwarah" },
    { arName: "الدمام", enName: "Ad Dammam" },
    { arName: "الطائف", enName: "At Taif" },
    { arName: "تبوك", enName: "Tabuk" },
    { arName: "أبها", enName: "Abha" },
    { arName: "بريدة", enName: "Buraydah" },
    { arName: "حائل", enName: "Hail" },
    { arName: "نجران", enName: "Najran" },
    { arName: "جازان", enName: "Jazan" },
    { arName: "عرعر", enName: "Arar" },
    { arName: "سكاكا", enName: "Sakaka" },
    { arName: "الباحة", enName: "Al Bahah" },
  ],
  AE: [
    { arName: "أبو ظبي", enName: "Abu Dhabi" },
    { arName: "دبي", enName: "Dubai" },
    { arName: "الشارقة", enName: "Sharjah" },
    { arName: "عجمان", enName: "Ajman" },
    { arName: "رأس الخيمة", enName: "Ras al-Khaimah" },
    { arName: "الفجيرة", enName: "Fujairah" },
    { arName: "أم القيوين", enName: "Umm al-Quwain" },
    { arName: "العين", enName: "Al Ain" },
    { arName: "خورفكان", enName: "Khor Fakkan" },
    { arName: "دبا", enName: "Dibba" },
    { arName: "الرويس", enName: "Ruwais" },
    { arName: "مدينة زايد", enName: "Zayed City" },
    { arName: "مدينة خليفة", enName: "Khalifa City" },
    { arName: "المرابع العربية", enName: "Al Murabba" },
    { arName: "مصفح", enName: "Musaffah" },
  ],
  KW: [
    { arName: "الكويت", enName: "Kuwait City" },
    { arName: "الفروانية", enName: "Al Farwaniyah" },
    { arName: "حولي", enName: "Hawalli" },
    { arName: "الأحمدي", enName: "Al Ahmadi" },
    { arName: "مبارك الكبير", enName: "Mubarak Al-Kabeer" },
    { arName: "الجهراء", enName: "Al Jahra" },
    { arName: "العاصمة", enName: "Al Asimah" },
  ],
  QA: [
    { arName: "الدوحة", enName: "Doha" },
    { arName: "الريان", enName: "Al Rayyan" },
    { arName: "الوكرة", enName: "Al Wakrah" },
    { arName: "أم صلال", enName: "Umm Salal" },
    { arName: "الخور", enName: "Al Khor" },
    { arName: "دخان", enName: "Dukhan" },
    { arName: "الشمّال", enName: "Al Shamal" },
    { arName: "مسيعيد", enName: "Mesaieed" },
  ],
  OM: [
    { arName: "مسقط", enName: "Muscat" },
    { arName: "صلالة", enName: "Salalah" },
    { arName: "صحار", enName: "Sohar" },
    { arName: "نزوى", enName: "Nizwa" },
    { arName: "صور", enName: "Sur" },
    { arName: "الرستاق", enName: "Rustaq" },
    { arName: "البريمي", enName: "Buraimi" },
    { arName: "عبري", enName: "Ibri" },
    { arName: "مطرح", enName: "Mutrah" },
    { arName: "بوشر", enName: "Bowsher" },
    { arName: "السيب", enName: "Al Seeb" },
    { arName: "قريات", enName: "Qurayyat" },
  ],
  JO: [
    { arName: "عمان", enName: "Amman" },
    { arName: "الزرقاء", enName: "Zarqa" },
    { arName: "إربد", enName: "Irbid" },
    { arName: "السلط", enName: "Salt" },
    { arName: "العقبة", enName: "Aqaba" },
    { arName: "الكرك", enName: "Karak" },
    { arName: "مادبا", enName: "Madaba" },
    { arName: "جرش", enName: "Jerash" },
    { arName: "المفرق", enName: "Mafraq" },
    { arName: "الطفيلة", enName: "Tafilah" },
    { arName: "معان", enName: "Ma'an" },
    { arName: "عجلون", enName: "Ajloun" },
  ],
  LB: [
    { arName: "بيروت", enName: "Beirut" },
    { arName: "طرابلس", enName: "Tripoli" },
    { arName: "صيدا", enName: "Sidon" },
    { arName: "زحلة", enName: "Zahle" },
    { arName: "صور", enName: "Tyre" },
    { arName: "جبيل", enName: "Byblos" },
    { arName: "بعبدا", enName: "Baabda" },
    { arName: "بعلبك", enName: "Baalbek" },
  ],
  SY: [
    { arName: "دمشق", enName: "Damascus" },
    { arName: "حلب", enName: "Aleppo" },
    { arName: "حمص", enName: "Homs" },
    { arName: "اللاذقية", enName: "Latakia" },
    { arName: "حماة", enName: "Hama" },
    { arName: "طرطوس", enName: "Tartus" },
    { arName: "الرقة", enName: "Raqqa" },
    { arName: "دير الزور", enName: "Deir ez-Zor" },
    { arName: "الحسكة", enName: "Al-Hasakah" },
    { arName: "السويداء", enName: "As-Suwayda" },
    { arName: "درعا", enName: "Daraa" },
    { arName: "إدلب", enName: "Idlib" },
  ],
  IQ: [
    { arName: "بغداد", enName: "Baghdad" },
    { arName: "البصرة", enName: "Basra" },
    { arName: "الموصل", enName: "Mosul" },
    { arName: "كركوك", enName: "Kirkuk" },
    { arName: "أربيل", enName: "Erbil" },
    { arName: "السليمانية", enName: "Sulaymaniyah" },
    { arName: "النجف", enName: "Najaf" },
    { arName: "كربلاء", enName: "Karbala" },
    { arName: "الحلة", enName: "Hillah" },
    { arName: "العمارة", enName: "Amara" },
    { arName: "ذي قار", enName: "Dhi Qar" },
    { arName: "الأنبار", enName: "Anbar" },
  ],
  DZ: [
    { arName: "الجزائر", enName: "Algiers" },
    { arName: "وهران", enName: "Oran" },
    { arName: "قسنطينة", enName: "Constantine" },
    { arName: "عنابة", enName: "Annaba" },
    { arName: "بجاية", enName: "Bejaia" },
    { arName: "باتنة", enName: "Batna" },
    { arName: "سطيف", enName: "Setif" },
    { arName: "البليدة", enName: "Blida" },
    { arName: "الشلف", enName: "Chlef" },
    { arName: "تلمسان", enName: "Tlemcen" },
    { arName: "تيارت", enName: "Tiaret" },
    { arName: "تيزي وزو", enName: "Tizi Ouzou" },
  ],
  MA: [
    { arName: "الرباط", enName: "Rabat" },
    { arName: "الدار البيضاء", enName: "Casablanca" },
    { arName: "فاس", enName: "Fes" },
    { arName: "مراكش", enName: "Marrakech" },
    { arName: "طنجة", enName: "Tangier" },
    { arName: "مكناس", enName: "Meknes" },
    { arName: "أكادير", enName: "Agadir" },
    { arName: "وجدة", enName: "Oujda" },
    { arName: "القنيطرة", enName: "Kenitra" },
    { arName: "تطوان", enName: "Tetouan" },
    { arName: "سلا", enName: "Salé" },
    { arName: "العيون", enName: "Laayoune" },
  ],
  TN: [
    { arName: "تونس", enName: "Tunis" },
    { arName: "صفاقس", enName: "Sfax" },
    { arName: "سوسة", enName: "Sousse" },
    { arName: "القيروان", enName: "Kairouan" },
    { arName: "بنزرت", enName: "Bizerte" },
    { arName: "قابس", enName: "Gabes" },
    { arName: "أريانة", enName: "Ariana" },
    { arName: "المنستير", enName: "Monastir" },
    { arName: "جربة", enName: "Djerba" },
    { arName: "نابل", enName: "Nabeul" },
    { arName: "القصرين", enName: "Kasserine" },
    { arName: "المهدية", enName: "Mahdia" },
  ],
  LY: [
    { arName: "طرابلس", enName: "Tripoli" },
    { arName: "بنغازي", enName: "Benghazi" },
    { arName: "مصراتة", enName: "Misrata" },
    { arName: "البيضاء", enName: "Al Bayda" },
    { arName: "الزاوية", enName: "Az Zawiyah" },
    { arName: "سبها", enName: "Sabha" },
    { arName: "غريان", enName: "Gharyan" },
    { arName: "درنة", enName: "Derna" },
    { arName: "طبرق", enName: "Tobruk" },
    { arName: "الجفرة", enName: "Al Jufra" },
    { arName: "المرج", enName: "Al Marj" },
    { arName: "الخمس", enName: "Khoms" },
  ],
  SD: [
    { arName: "الخرطوم", enName: "Khartoum" },
    { arName: "أم درمان", enName: "Omdurman" },
    { arName: "بحري", enName: "Bahri" },
    { arName: "بورتسودان", enName: "Port Sudan" },
    { arName: "كادوقلي", enName: "Kadugli" },
    { arName: "الفاشر", enName: "El Fasher" },
    { arName: "نيالا", enName: "Nyala" },
    { arName: "الأبيض", enName: "El Obeid" },
    { arName: "كسلا", enName: "Kassala" },
    { arName: "ود مدني", enName: "Wad Madani" },
    { arName: "جنينة", enName: "Geneina" },
    { arName: "القضارف", enName: "Gedaref" },
  ],
  YE: [
    { arName: "صنعاء", enName: "Sana'a" },
    { arName: "عدن", enName: "Aden" },
    { arName: "تعز", enName: "Taiz" },
    { arName: "الحديدة", enName: "Al Hudaydah" },
    { arName: "إب", enName: "Ibb" },
    { arName: "مأرب", enName: "Ma'rib" },
    { arName: "سيئون", enName: "Seiyun" },
    { arName: "المكلا", enName: "Al Mukalla" },
    { arName: "عمران", enName: "'Amran" },
    { arName: "ذمار", enName: "Dhamar" },
    { arName: "الشحر", enName: "Ash Shihr" },
    { arName: "بيت الفقيه", enName: "Bayt al-Faqih" },
  ],
  PS: [
    { arName: "القدس", enName: "Jerusalem" },
    { arName: "غزة", enName: "Gaza" },
    { arName: "رام الله", enName: "Ramallah" },
    { arName: "الخليل", enName: "Hebron" },
    { arName: "بيت لحم", enName: "Bethlehem" },
    { arName: "نابلس", enName: "Nablus" },
    { arName: "أريحا", enName: "Jericho" },
    { arName: "طولكرم", enName: "Tulkarm" },
    { arName: "قلقيلية", enName: "Qalqilya" },
    { arName: "سلفيت", enName: "Salfit" },
    { arName: "جنين", enName: "Jenin" },
    { arName: "رفح", enName: "Rafah" },
  ],
};

// طرق الحساب لكل دولة
const calculationMethods = {
  SA: { method: 4, school: 0, name: "أم القرى، مكة" },
  EG: { method: 5, school: 0, name: "هيئة المساحة المصرية" },
  AE: { method: 3, school: 0, name: "دبي" },
  KW: { method: 5, school: 0, name: "الكويت" },
  QA: { method: 3, school: 0, name: "قطر" },
  OM: { method: 3, school: 0, name: "عمان" },
  JO: { method: 2, school: 0, name: "الجمعية الإسلامية" },
  LB: { method: 2, school: 0, name: "لبنان" },
  SY: { method: 2, school: 0, name: "سوريا" },
  IQ: { method: 3, school: 0, name: "العراق" },
  DZ: { method: 1, school: 0, name: "جامعة العلوم الإسلامية" },
  MA: { method: 1, school: 0, name: "المغرب" },
  TN: { method: 1, school: 0, name: "تونس" },
  LY: { method: 1, school: 0, name: "ليبيا" },
  SD: { method: 1, school: 0, name: "السودان" },
  YE: { method: 1, school: 0, name: "اليمن" },
  PS: { method: 2, school: 0, name: "فلسطين" },
};

// متغيرات مواقيت الصلاة
let currentPrayerTimes = null;
let prayerTimer = null;
let showCountdownDetails = false;

// ===== دوال الأذكار =====

// تحميل البيانات المحفوظة
function loadData() {
  try {
    const saved = localStorage.getItem("masbahaData");
    if (saved) {
      const data = JSON.parse(saved);

      totalCount = data.totalCount || 0;
      todayCount = data.todayCount || 0;
      streakDays = data.streakDays || 1;
      completedSets = data.completedSets || 0;
      lastSaveDate = data.lastSaveDate;

      // تحميل الأذكار اليومية
      if (data.dailyAzkar) {
        data.dailyAzkar.forEach((saved, index) => {
          if (dailyAzkar[index]) {
            dailyAzkar[index].count = saved.count || 0;
          }
        });
      }

      updateStats();
      console.log("تم تحميل البيانات المحفوظة");
    }
  } catch (error) {
    console.error("خطأ في تحميل البيانات:", error);
  }
}

// حفظ البيانات
function saveData() {
  try {
    const today = new Date().toISOString().split("T")[0];

    const data = {
      totalCount,
      todayCount,
      streakDays,
      completedSets,
      lastSaveDate: today,
      dailyAzkar: dailyAzkar.map((a) => ({ count: a.count })),
    };

    localStorage.setItem("masbahaData", JSON.stringify(data));
    console.log("تم حفظ البيانات");
  } catch (error) {
    console.error("خطأ في حفظ البيانات:", error);
  }
}

// تحديث الإحصائيات
function updateStats() {
  const totalCountElement = document.getElementById("totalCount");
  const todayCountElement = document.getElementById("todayCount");
  const streakDaysElement = document.getElementById("streakDays");
  const completedSetsElement = document.getElementById("completedSets");

  if (totalCountElement)
    totalCountElement.textContent = totalCount.toLocaleString();
  if (todayCountElement)
    todayCountElement.textContent = todayCount.toLocaleString();
  if (streakDaysElement) streakDaysElement.textContent = streakDays;
  if (completedSetsElement) completedSetsElement.textContent = completedSets;
}

// التحقق من إعادة تعيين العد اليومي
function checkDayReset() {
  const today = new Date().toISOString().split("T")[0];

  if (lastSaveDate !== today) {
    // إعادة تعيين العد اليومي
    todayCount = 0;

    // زيادة عدد الأيام المتتالية إذا كان اليوم التالي
    if (lastSaveDate) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split("T")[0];

      if (lastSaveDate === yesterdayStr) {
        streakDays++;
      } else {
        streakDays = 1;
      }
    }

    lastSaveDate = today;
    saveData();
    updateStats();

    console.log("تم إعادة تعيين العد اليومي");
  }
}

// عرض الأذكار اليومية
function renderDailyAzkar() {
  const grid = document.getElementById("azkarGrid");
  if (!grid) return;

  // تحديد عدد الأعمدة بناءً على حجم الشاشة
  let gridCols = "grid-cols-1";
  if (window.innerWidth >= 640) gridCols = "grid-cols-2";
  if (window.innerWidth >= 1024) gridCols = "grid-cols-3";

  grid.className = `grid ${gridCols} gap-4 md:gap-6 max-w-6xl mx-auto`;

  grid.innerHTML = dailyAzkar
    .map((azkar) => {
      const progress = Math.min((azkar.count / azkar.target) * 100, 100);

      // ضبط أحجام الخطوط للشاشات الصغيرة
      const titleSize = window.innerWidth <= 640 ? "text-base" : "text-lg";
      const countSize = window.innerWidth <= 640 ? "text-xl" : "text-2xl";
      const buttonText = window.innerWidth <= 640 ? "إضافة" : "إضافة ذكر";

      return `
            <div class="${azkar.bgColor} ${
        azkar.borderColor
      } border rounded-xl p-4 md:p-5 card-hover">
                <div class="flex items-center justify-between mb-3 md:mb-4">
                    <div class="flex items-center gap-2 md:gap-3">
                        <div class="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-white flex items-center justify-center shadow-sm">
                            <span class="text-lg md:text-xl ${azkar.color}">${
        azkar.icon
      }</span>
                        </div>
                        <div class="text-right">
                            <h4 class="font-bold text-gray-800 ${titleSize}">${
        azkar.name
      }</h4>
                            <p class="text-xs text-muted">${azkar.arabic}</p>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="${countSize} font-bold text-gray-800">${
        azkar.count
      }</div>
                        <div class="text-xs text-muted">من ${azkar.target}</div>
                    </div>
                </div>
                
                <div class="mb-4 md:mb-5">
                    <div class="progress-bar bg-gray-200">
                        <div class="progress-fill ${
                          azkar.btnColor.replace("hover:", "").split(" ")[0]
                        }" style="width: ${progress}%"></div>
                    </div>
                    <div class="flex justify-between text-xs text-muted mt-1">
                        <span>0</span>
                        <span>${azkar.target}</span>
                    </div>
                </div>
                
                <button onclick="incrementAzkar(${
                  azkar.id
                }, 'daily')" class="btn-soft ${
        azkar.btnColor
      } text-white px-3 py-2 md:px-4 md:py-3 rounded-lg font-medium w-full flex items-center justify-center gap-2 touch-button text-sm md:text-base">
                    <i class="fas fa-plus"></i>
                    ${buttonText}
                </button>
            </div>
        `;
    })
    .join("");
}

// زيادة العداد
function incrementAzkar(id, category) {
  let azkar;

  switch (category) {
    case "daily":
      azkar = dailyAzkar.find((a) => a.id === id);
      break;
    default:
      return;
  }

  if (!azkar) return;

  azkar.count++;
  totalCount++;
  todayCount++;

  if (azkar.count % azkar.target === 0) {
    completedSets++;

    const timesCompleted = azkar.count / azkar.target;
    const message = `أكملت ${azkar.name} ${timesCompleted} ${
      timesCompleted === 1 ? "مرة" : "مرات"
    }`;

    showModal("إنجاز رائع! 🎉", message);
  }

  // تحديث الواجهة
  updateStats();
  renderDailyAzkar();

  // حفظ البيانات
  saveData();

  // إظهار إشعار
  showToast(
    `تم إضافة ${azkar.name} (${azkar.count}/${azkar.target})`,
    "success"
  );
}

// ===== دوال مواقيت الصلاة =====

// تحديث قائمة المدن بناءً على الدولة المختارة
function updateCities() {
  const countrySelect = document.getElementById("countrySelect");
  const citySelect = document.getElementById("citySelect");

  if (!countrySelect || !citySelect) return;

  const countryCode = countrySelect.value;
  const cities = citiesDatabase[countryCode] || citiesDatabase["SA"];

  citySelect.innerHTML = cities
    .map((city) => `<option value="${city.enName}">${city.arName}</option>`)
    .join("");
}

// حساب الوقت المتبقي مع إرجاع الثواني
function calculateTimeRemaining(prayerTime) {
  if (!prayerTime || prayerTime === "--:--") {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0,
      totalHours: 0,
      totalMinutes: 0,
      totalSeconds: 0,
      formattedTime: "--:--:--",
      hasPassed: false,
    };
  }

  const now = new Date();
  const [hours, minutes] = prayerTime.split(":").map(Number);

  const prayerDate = new Date(now);
  prayerDate.setHours(hours, minutes, 0, 0);

  // إذا كان وقت الصلاة قد مضى، أضف 24 ساعة (اليوم التالي)
  if (prayerDate < now) {
    prayerDate.setDate(prayerDate.getDate() + 1);
  }

  const diffMs = prayerDate - now;

  // حساب الثواني والدقائق والساعات
  const totalSeconds = Math.max(0, Math.floor(diffMs / 1000));
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);

  const remainingHours = totalHours;
  const remainingMinutes = totalMinutes % 60;
  const remainingSeconds = totalSeconds % 60;

  // حساب الوقت المتبقي بالتنسيق 00:00:00
  const formattedTime = `${remainingHours
    .toString()
    .padStart(2, "0")}:${remainingMinutes
    .toString()
    .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;

  return {
    hours: remainingHours,
    minutes: remainingMinutes,
    seconds: remainingSeconds,
    totalHours: totalHours,
    totalMinutes: totalMinutes,
    totalSeconds: totalSeconds,
    formattedTime: formattedTime,
    hasPassed: diffMs <= 0,
  };
}

// تنسيق الوقت من API
function formatTime(timeStr) {
  if (!timeStr || timeStr === "--:--") return "--:--";

  const match = timeStr.match(/(\d{1,2}):(\d{2})/);
  if (!match) return timeStr;

  let hours = parseInt(match[1]);
  const minutes = match[2];

  if (timeStr.toLowerCase().includes("pm") && hours < 12) hours += 12;
  if (timeStr.toLowerCase().includes("am") && hours === 12) hours = 0;

  return `${hours.toString().padStart(2, "0")}:${minutes}`;
}

// الحصول على الصلاة القادمة
function getNextPrayer(timings) {
  const prayers = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];
  const now = new Date();

  for (const prayer of prayers) {
    const time = formatTime(timings[prayer]);
    const [hours, minutes] = time.split(":").map(Number);

    const prayerDate = new Date(now);
    prayerDate.setHours(hours, minutes, 0, 0);

    if (prayerDate > now) {
      return prayer;
    }
  }

  // إذا مرت جميع الصلوات، نأخذ الفجر غداً
  return "Fajr";
}

// تحديث الصلاة القادمة مع الثواني
function updateNextPrayer(timings) {
  const nextPrayer = getNextPrayer(timings);
  const nextPrayerTime = timings[nextPrayer];
  const timeRemaining = calculateTimeRemaining(nextPrayerTime);

  const container = document.getElementById("nextPrayerContainer");
  const infoElement = document.getElementById("nextPrayerInfo");
  const countdownElement = document.getElementById("nextPrayerCountdown");
  const hoursElement = document.getElementById("countdownHours");
  const minutesElement = document.getElementById("countdownMinutes");
  const secondsElement = document.getElementById("countdownSeconds");

  if (!container || !infoElement || !countdownElement) return;

  const prayerNames = {
    Fajr: "الفجر",
    Dhuhr: "الظهر",
    Asr: "العصر",
    Maghrib: "المغرب",
    Isha: "العشاء",
  };

  infoElement.textContent = `الصلاة القادمة: ${prayerNames[nextPrayer]}`;
  countdownElement.textContent = timeRemaining.formattedTime;

  // تحديث العناصر التفصيلية
  if (hoursElement)
    hoursElement.textContent = timeRemaining.hours.toString().padStart(2, "0");
  if (minutesElement)
    minutesElement.textContent = timeRemaining.minutes
      .toString()
      .padStart(2, "0");
  if (secondsElement)
    secondsElement.textContent = timeRemaining.seconds
      .toString()
      .padStart(2, "0");

  // تلوين الخلفية حسب الوقت المتبقي
  if (timeRemaining.totalMinutes <= 5) {
    // 5 دقائق أو أقل
    container.className =
      "p-4 md:p-6 rounded-xl border border-red-200 bg-gradient-to-r from-red-50 to-orange-50 critical-pulse";
    countdownElement.classList.add("text-red-600");
    countdownElement.classList.remove("text-blue-700");
  } else if (timeRemaining.totalMinutes <= 15) {
    // 15 دقيقة أو أقل
    container.className =
      "p-4 md:p-6 rounded-xl border border-yellow-200 bg-gradient-to-r from-yellow-50 to-orange-50";
    countdownElement.classList.add("text-yellow-600");
    countdownElement.classList.remove("text-blue-700");
  } else if (timeRemaining.totalMinutes <= 60) {
    // ساعة أو أقل
    container.className =
      "p-4 md:p-6 rounded-xl border border-green-200 bg-gradient-to-r from-green-50 to-teal-50";
    countdownElement.classList.add("text-green-600");
    countdownElement.classList.remove("text-blue-700");
  } else {
    container.className =
      "p-4 md:p-6 rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50 to-teal-50";
    countdownElement.classList.add("text-blue-700");
  }

  // تحديث العنوان
  updateTitleCountdown(timings);

  // التحقق من الإشعارات
  checkPrayerNotifications(timings);
}

// تحديث العد التنازلي في عنوان الصفحة
function updateTitleCountdown(timings) {
  const nextPrayer = getNextPrayer(timings);
  const nextPrayerTime = timings[nextPrayer];
  const timeRemaining = calculateTimeRemaining(nextPrayerTime);

  const prayerNames = {
    Fajr: "الفجر",
    Dhuhr: "الظهر",
    Asr: "العصر",
    Maghrib: "المغرب",
    Isha: "العشاء",
  };

  document.title = `${timeRemaining.formattedTime} - ${prayerNames[nextPrayer]} | المسبحة`;
}

// جلب مواقيت الصلاة
async function loadPrayerTimes() {
  const countrySelect = document.getElementById("countrySelect");
  const citySelect = document.getElementById("citySelect");

  if (!countrySelect || !citySelect) {
    showToast("الرجاء اختيار الدولة والمدينة", "error");
    return;
  }

  const countryCode = countrySelect.value;
  const city = citySelect.value;

  if (!city) {
    showToast("الرجاء اختيار المدينة", "error");
    return;
  }

  try {
    // إظهار حالة التحميل
    const button = document.querySelector(
      'button[onclick="loadPrayerTimes()"]'
    );
    if (button) {
      button.innerHTML =
        '<i class="fas fa-spinner fa-spin mr-2"></i> جاري التحميل...';
      button.disabled = true;
    }

    const settings =
      calculationMethods[countryCode] || calculationMethods["SA"];
    const url = `https://api.aladhan.com/v1/timingsByCity?city=${encodeURIComponent(
      city
    )}&country=${countryCode}&method=${settings.method}&school=${
      settings.school
    }`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`خطأ في الشبكة: ${response.status}`);
    }

    const data = await response.json();

    if (data.code !== 200) {
      throw new Error(`خطأ في API: ${data.status}`);
    }

    currentPrayerTimes = {
      success: true,
      timings: data.data.timings,
      date: data.data.date,
      meta: data.data.meta,
      method: settings,
      city: city,
      countryCode: countryCode,
    };

    updatePrayerUI();
    savePrayerPreferences();

    showToast(
      `تم تحميل مواقيت الصلاة لـ ${getCurrentCityName(city, countryCode)}`,
      "success"
    );
  } catch (error) {
    console.error("خطأ في جلب المواقيت:", error);
    showToast(`❌ ${error.message}`, "error");
    showEmptyPrayerState();
  } finally {
    // إعادة حالة الزر
    const button = document.querySelector(
      'button[onclick="loadPrayerTimes()"]'
    );
    if (button) {
      button.innerHTML =
        '<i class="fas fa-sync-alt mr-2"></i> تحميل مواقيت الصلاة';
      button.disabled = false;
    }
  }
}

// تحديث واجهة مواقيت الصلاة
function updatePrayerUI() {
  if (!currentPrayerTimes || !currentPrayerTimes.success) return;

  const { timings, date } = currentPrayerTimes;

  // تحديث التاريخ
  updateDate(date);

  // تحديث بطاقات الصلوات
  updatePrayerCards(timings);

  // تحديث الصلاة القادمة
  updateNextPrayer(timings);

  // تحديث مؤقتات جميع الصلوات
  createAllPrayerCountdowns(timings);

  // تحديث الجدول التفصيلي
  updateDetailedTable(timings);

  // بدء العد التنازلي
  startPrayerCountdown();
}

// تحديث التاريخ
function updateDate(date) {
  const hijriElement = document.getElementById("hijriDate");
  const gregorianElement = document.getElementById("gregorianDate");

  if (hijriElement) {
    hijriElement.textContent = `${date.hijri.day} ${date.hijri.month.ar} ${date.hijri.year} هـ`;
  }

  if (gregorianElement) {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const dateObj = new Date(date.gregorian.date);
    gregorianElement.textContent = dateObj.toLocaleDateString("ar-SA", options);
  }
}

// تحديث بطاقات الصلوات
function updatePrayerCards(timings) {
  const grid = document.getElementById("prayerTimesGrid");
  if (!grid) return;

  // تحديد عدد الأعمدة بناءً على حجم الشاشة
  let gridCols = "grid-cols-2";
  if (window.innerWidth >= 640) gridCols = "grid-cols-3";
  if (window.innerWidth >= 768) gridCols = "grid-cols-6";

  grid.className = `grid ${gridCols} gap-2 md:gap-4`;

  const prayers = {
    Fajr: { name: "الفجر", icon: "🌅", color: "from-blue-100 to-blue-50" },
    Sunrise: {
      name: "الشروق",
      icon: "☀️",
      color: "from-orange-100 to-orange-50",
    },
    Dhuhr: { name: "الظهر", icon: "🕌", color: "from-yellow-100 to-yellow-50" },
    Asr: { name: "العصر", icon: "🕰️", color: "from-green-100 to-green-50" },
    Maghrib: {
      name: "المغرب",
      icon: "🌙",
      color: "from-purple-100 to-purple-50",
    },
    Isha: { name: "العشاء", icon: "⭐", color: "from-indigo-100 to-indigo-50" },
  };

  // ضبط الأحجام للشاشات الصغيرة
  const iconSize = window.innerWidth <= 640 ? "text-2xl" : "text-3xl";
  const titleSize = window.innerWidth <= 640 ? "text-sm" : "text-lg";
  const timeSize = window.innerWidth <= 640 ? "text-xl" : "text-2xl";
  const padding = window.innerWidth <= 640 ? "p-3" : "p-4";

  grid.innerHTML = Object.entries(prayers)
    .map(([key, info]) => {
      const time = formatTime(timings[key]);

      return `
            <div class="text-center transform transition-transform duration-300 hover:scale-105">
                <div class="bg-gradient-to-br ${
                  info.color
                } ${padding} rounded-xl md:rounded-2xl shadow-lg border border-white">
                    <div class="${iconSize} mb-1 md:mb-2">${info.icon}</div>
                    <h4 class="font-bold text-gray-800 ${titleSize} mb-1">${
        info.name
      }</h4>
                    <div class="${timeSize} font-bold mb-1 font-mono direction-ltr">${time}</div>
                    <div class="text-xs text-gray-600">${getCurrentCityName()}</div>
                </div>
            </div>
        `;
    })
    .join("");
}

// تحديث الجدول التفصيلي
function updateDetailedTable(timings) {
  const container = document.getElementById("detailedPrayerTimes");
  if (!container) return;

  const prayers = [
    {
      key: "Fajr",
      name: "الفجر",
      icon: "🌅",
      desc: "من طلوع الفجر إلى طلوع الشمس",
    },
    {
      key: "Sunrise",
      name: "الشروق",
      icon: "☀️",
      desc: "طلوع الشمس، يبدأ وقت صلاة الضحى",
    },
    {
      key: "Dhuhr",
      name: "الظهر",
      icon: "🕌",
      desc: "من زوال الشمس إلى أن يصير ظل كل شيء مثله",
    },
    {
      key: "Asr",
      name: "العصر",
      icon: "🕰️",
      desc: "من انتهاء وقت الظهر إلى غروب الشمس",
    },
    {
      key: "Maghrib",
      name: "المغرب",
      icon: "🌙",
      desc: "من غروب الشمس إلى مغيب الشفق الأحمر",
    },
    {
      key: "Isha",
      name: "العشاء",
      icon: "⭐",
      desc: "من مغيب الشفق الأحمر إلى منتصف الليل",
    },
  ];

  const nextPrayerKey = getNextPrayer(timings);

  container.innerHTML = prayers
    .map((prayer) => {
      const time = formatTime(timings[prayer.key]);
      const isNext = prayer.key === nextPrayerKey;

      return `
            <div class="flex items-center justify-between p-3 ${
              isNext ? "bg-blue-50 border-r-4 border-blue-500" : "bg-gray-50"
            } rounded-lg transition-all duration-300">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm">
                        <span class="text-xl">${prayer.icon}</span>
                    </div>
                    <div>
                        <h5 class="font-bold ${
                          isNext ? "text-blue-700" : "text-gray-800"
                        }">${prayer.name}</h5>
                        <p class="text-xs text-gray-500">${prayer.desc}</p>
                    </div>
                </div>
                <div class="text-center">
                    <div class="text-xl font-bold ${
                      isNext ? "text-blue-700" : "text-gray-800"
                    } font-mono direction-ltr">${time}</div>
                    ${
                      isNext
                        ? '<div class="text-xs text-blue-600 mt-1">الصلاة القادمة</div>'
                        : ""
                    }
                </div>
            </div>
        `;
    })
    .join("");
}

// إنشاء مؤقتات للصلوات الأخرى
function createAllPrayerCountdowns(timings) {
  const prayers = [
    { key: "Fajr", name: "الفجر", time: timings.Fajr },
    { key: "Dhuhr", name: "الظهر", time: timings.Dhuhr },
    { key: "Asr", name: "العصر", time: timings.Asr },
    { key: "Maghrib", name: "المغرب", time: timings.Maghrib },
    { key: "Isha", name: "العشاء", time: timings.Isha },
  ];

  const container = document.getElementById("allPrayersCountdown");
  if (!container) return;

  const nextPrayerKey = getNextPrayer(timings);

  container.innerHTML = prayers
    .map((prayer) => {
      const timeRemaining = calculateTimeRemaining(prayer.time);
      const isNext = prayer.key === nextPrayerKey;

      return `
            <div class="flex items-center justify-between p-3 ${
              isNext ? "bg-blue-50 border-r-4 border-blue-500" : "bg-gray-50"
            } rounded-lg mb-2">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-lg ${
                      isNext ? "bg-blue-100" : "bg-gray-100"
                    } flex items-center justify-center">
                        <span class="${
                          isNext ? "text-blue-600" : "text-gray-600"
                        }">${getPrayerIcon(prayer.key)}</span>
                    </div>
                    <div>
                        <h5 class="font-bold ${
                          isNext ? "text-blue-700" : "text-gray-800"
                        }">${prayer.name}</h5>
                        <p class="text-xs text-gray-500">${formatTime(
                          timings[prayer.key]
                        )}</p>
                    </div>
                </div>
                <div class="text-center">
                    <div class="font-bold ${
                      isNext ? "text-blue-700" : "text-gray-800"
                    } font-mono direction-ltr text-sm">
                        ${timeRemaining.formattedTime}
                    </div>
                    <div class="text-xs ${
                      isNext ? "text-blue-600" : "text-gray-500"
                    } mt-1">
                        ${timeRemaining.hours}س ${timeRemaining.minutes}د ${
        timeRemaining.seconds
      }ث
                    </div>
                </div>
            </div>
        `;
    })
    .join("");
}

// الحصول على أيقونة الصلاة
function getPrayerIcon(prayerKey) {
  const icons = {
    Fajr: "🌅",
    Dhuhr: "🕌",
    Asr: "🕰️",
    Maghrib: "🌙",
    Isha: "⭐",
  };
  return icons[prayerKey] || "🕌";
}

// إظهار حالة فارغة لمواقيت الصلاة
function showEmptyPrayerState() {
  const grid = document.getElementById("prayerTimesGrid");
  if (!grid) return;

  grid.innerHTML = `
        <div class="col-span-6 text-center py-12">
            <div class="text-4xl text-gray-300 mb-4">🕌</div>
            <h4 class="text-lg font-bold text-gray-600 mb-2">لم يتم تحميل مواقيت الصلاة</h4>
            <p class="text-gray-500 mb-4">حدث خطأ في جلب البيانات. حاول مرة أخرى.</p>
        </div>
    `;
}

// بدء العد التنازلي
function startPrayerCountdown() {
  if (prayerTimer) clearInterval(prayerTimer);

  prayerTimer = setInterval(() => {
    if (currentPrayerTimes && currentPrayerTimes.timings) {
      updateNextPrayer(currentPrayerTimes.timings);
      createAllPrayerCountdowns(currentPrayerTimes.timings);
    }
  }, 1000); // تحديث كل ثانية
}

// الحصول على اسم المدينة الحالية
function getCurrentCityName() {
  if (!currentPrayerTimes) return "";

  const countryCode = currentPrayerTimes.countryCode;
  const city = currentPrayerTimes.city;
  const cities = citiesDatabase[countryCode];

  if (cities) {
    const cityObj = cities.find((c) => c.enName === city);
    if (cityObj) return cityObj.arName;
  }
  return city;
}

// حفظ تفضيلات الصلاة
function savePrayerPreferences() {
  if (!currentPrayerTimes) return;

  const countrySelect = document.getElementById("countrySelect");
  const citySelect = document.getElementById("citySelect");

  if (!countrySelect || !citySelect) return;

  const prefs = {
    country: countrySelect.value,
    city: citySelect.value,
    lastUpdate: new Date().toISOString(),
  };

  localStorage.setItem("prayerPreferences", JSON.stringify(prefs));
}

// تحميل تفضيلات الصلاة
function loadPrayerPreferences() {
  try {
    const saved = localStorage.getItem("prayerPreferences");
    if (saved) {
      const prefs = JSON.parse(saved);
      const countrySelect = document.getElementById("countrySelect");
      const citySelect = document.getElementById("citySelect");

      if (countrySelect && prefs.country) {
        countrySelect.value = prefs.country;
        updateCities();

        // انتظر قليلاً ثم عين قيمة المدينة
        setTimeout(() => {
          if (citySelect && prefs.city) {
            citySelect.value = prefs.city;
          }
        }, 100);
      }
    }
  } catch (error) {
    console.error("خطأ في تحميل تفضيلات الصلاة:", error);
  }
}

// ===== دوال عامة =====

// التحكم في عرض تفاصيل الوقت المتبقي
function toggleCountdownDetails() {
  showCountdownDetails = !showCountdownDetails;
  const detailsElement = document.getElementById("nextPrayerDetails");
  const toggleBtn = document.getElementById("toggleDetailsBtn");

  if (detailsElement && toggleBtn) {
    if (showCountdownDetails) {
      detailsElement.classList.remove("hidden");
      toggleBtn.innerHTML =
        '<i class="fas fa-chevron-up"></i><span>إخفاء تفاصيل الوقت المتبقي</span>';

      // إذا لم تكن هناك بيانات حالية، قم بتحديثها
      if (currentPrayerTimes && currentPrayerTimes.timings) {
        updateNextPrayer(currentPrayerTimes.timings);
      }
    } else {
      detailsElement.classList.add("hidden");
      toggleBtn.innerHTML =
        '<i class="fas fa-chevron-down"></i><span>عرض تفاصيل الوقت المتبقي</span>';
    }
  }
}

// إرسال إشعارات عندما تقترب الصلاة
function checkPrayerNotifications(timings) {
  const nextPrayer = getNextPrayer(timings);
  const timeRemaining = calculateTimeRemaining(timings[nextPrayer]);

  const prayerNames = {
    Fajr: "الفجر",
    Dhuhr: "الظهر",
    Asr: "العصر",
    Maghrib: "المغرب",
    Isha: "العشاء",
  };

  // إرسال إشعار عند 5 دقائق من الصلاة
  if (timeRemaining.totalMinutes === 5 && timeRemaining.seconds === 0) {
    showToast(`⏰ باقي 5 دقائق على صلاة ${prayerNames[nextPrayer]}`, "warning");
  }

  // إرسال إشعار عند دقيقة واحدة من الصلاة
  if (timeRemaining.totalMinutes === 1 && timeRemaining.seconds === 0) {
    showToast(
      `⏰ باقي دقيقة واحدة على صلاة ${prayerNames[nextPrayer]}`,
      "error"
    );
  }

  // إرسال إشعار عند وصول وقت الصلاة
  if (timeRemaining.totalSeconds === 0 && timeRemaining.hasPassed === false) {
    showToast(`🕌 حان وقت صلاة ${prayerNames[nextPrayer]}`, "success");
  }
}

// إظهار رسالة
function showToast(message, type = "info", duration = 3000) {
  // تنظيف الإشعارات القديمة
  const oldToasts = document.querySelectorAll("#toastContainer > div");
  if (oldToasts.length > 3) {
    oldToasts[0].remove();
  }

  const toast = document.createElement("div");
  toast.className = `px-4 py-3 rounded-lg shadow-lg transform transition-all duration-300 mb-2 ${
    type === "success"
      ? "bg-green-500"
      : type === "error"
      ? "bg-red-500"
      : type === "warning"
      ? "bg-yellow-500"
      : "bg-blue-500"
  } text-white`;
  toast.textContent = message;
  toast.style.maxWidth = window.innerWidth <= 640 ? "250px" : "300px";
  toast.style.zIndex = "9999";

  const container = document.getElementById("toastContainer");
  if (container) {
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(100px)";
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }
}

// إظهار نافذة منبثقة
function showModal(title, message) {
  const modal = document.getElementById("successModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalMessage = document.getElementById("modalMessage");

  if (modal && modalTitle && modalMessage) {
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  }
}

// إغلاق النافذة المنبثقة
function closeModal() {
  const modal = document.getElementById("successModal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
}

// ضبط التخطيط للموبايل
function adjustLayoutForMobile() {
  // إضافة كلاس mobile للأجهزة الصغيرة
  if (window.innerWidth <= 768) {
    document.body.classList.add("mobile-view");
    document.body.classList.remove("desktop-view");
  } else {
    document.body.classList.remove("mobile-view");
    document.body.classList.add("desktop-view");
  }
}

// تهيئة التطبيق
function initApp() {
  loadData();
  checkDayReset();

  renderDailyAzkar();
  updateStats();

  // تحميل تفضيلات الصلاة
  loadPrayerPreferences();

  // ضبط التخطيط للموبايل
  adjustLayoutForMobile();

  // إضافة مستمع لتغير حجم الشاشة
  window.addEventListener("resize", adjustLayoutForMobile);

  console.log("تم تهيئة تطبيق الأذكار ومواقيت الصلاة");
}

// عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", function () {
  initApp();

  // إظهار رسالة ترحيب بعد ثانية
  setTimeout(() => {
    showToast("مرحباً بك في المسبحة الإلكترونية", "info");
  }, 1000);
});

// تصدير الدوال للاستخدام العام
window.incrementAzkar = incrementAzkar;
window.updateCities = updateCities;
window.loadPrayerTimes = loadPrayerTimes;
window.openTab = openTab;
window.closeModal = closeModal;
window.toggleCountdownDetails = toggleCountdownDetails;
window.toggleMobileMenu = toggleMobileMenu;
window.closeMobileMenu = closeMobileMenu;
