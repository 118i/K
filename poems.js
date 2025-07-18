// poems.js
const poems = [
  // الشعر الفصيح
  [
    "أنْسِيتِ رُوحِي بَيْنَ يَدَيْكِ حَبِيبَتِي",
    "وَأَضَاعَنِي الشَّوْقُ فِي عَيْنَيْكِ",
    "فَهَلْ مِنْ رَحْمَةٍ تُعِيدُ الرُّوحَ لِصَاحِبِهَا",
    "أَمْ سَتَبْقَيْنَ حَبِيبَتِي تَسْرِقِينَ الرُّوحَ مِنِّي؟"
  ],
  [
    "لَوْ تَدْرِي كَمْ أَشْتَاقُ لِرُؤْيَاكِ",
    "لَكُنْتِ تَرْحَمِينَ قَلْبِي مِنْ لَوْعَتِهِ",
    "فَيَا حَبِيبَتِي، يَا مَنْ أَخَذْتِ الرُّوحَ وَالقَلْبَ",
    "هَلْ مِنْ لِقَاءٍ يُطْفِئُ نَارَ اشْتِيَاقِي؟"
  ],
  [
    "فِي عَيْنَيْكِ حَكَايَةٌ لَا تَنْتَهِي",
    "وَفِي قَلْبِكِ عَشْقٌ لَا يَنْضَبُ",
    "فَكَيْفَ لِي أَنْ أَعِيشَ بِدُونِكِ",
    "وَكُلُّ نَبْضَاتِي لِاسْمِكِ تَنْتَسِبُ"
  ],
  [
    "يَا حَبِيبَةَ القَلْبِ، يَا أُنْسَ الوُجُودِ",
    "لَوْ تَعْلَمِينَ كَمْ يُعَانِي قَلْبِي الشَّجِي",
    "أَشْوَاقٌ تَمْلَأُ الأَوْتَارَ حَنِينًا",
    "وَدُمُوعٌ تَرْوِي أَحْلَامَ الهَوَى دَمِي"
  ],
  [
    "أَغَارُ عَلَيْكِ مِنَ النَّسِيمِ إِذَا هَبَّ",
    "وَمِنْ قَطْرَةِ المَطَرِ إِذَا عَلَى خَدِّكِ قَطَّ",
    "وَمِنْ كُلِّ شَيْءٍ يُلَامِسُ طَرْفَكِ",
    "فَكُلُّ الوَرَى عِنْدِي بِحُبِّكِ قَدْ سُحِرُوا"
  ],
  [
    "يَا بَدِيعَةَ الجَمَالِ، يَا مَلِيكَةَ القُلُوبِ",
    "لَكِ فِي قَلْبِي مَقَامٌ لَا يُضَاهَى",
    "أَنْتِ النُّورُ الَّذِي فِي ظُلْمَةِ الدُّنْيَا أَضَاءَ",
    "وَبِحُبِّكِ عَاشَ قَلْبِي وَاسْتَرَاحَ"
  ],
  [
    "لَوْ أَنَّ العُمْرَ مِلْءُ البَحْرِ أَيَّامًا",
    "وَلَوْ أَنَّ الكَوَاكِبَ فِي يَدِي تُمْسَكُ",
    "لَوَهَبْتُ العُمْرَ وَالكَوَاكِبَ كُلَّهَا",
    "لِأَقُولَ لَكِ يَا حُبِّي أَنْتِ أَغْلَى مَا مَلَكْتُ"
  ],
  [
    "يَا سَاحِرَةَ العُيُونِ وَالقُلُوبِ",
    "كَمْ أَشْتَهِي أَنْ أَعِيشَ مَعَكِ الأَبَدَ",
    "أَشْوَاقِي لَكِ تَمْلَأُ الدُّنْيَا سَعَادَةً",
    "وَبِحُبِّكِ يَعِيشُ قَلْبِي وَيَنْبَضُ"
  ],
  [
    "أَنْتِ الحُلْمُ الَّذِي طَالَمَا تَمَنَّيْتُ",
    "وَالنَّجْمَةُ الَّتِي فِي سَمَاءِ العُمْرِ أَشْرَقَتْ",
    "بِحُبِّكِ يَا حَيَاتِي قَدْ عَشِقْتُ الوُجُودَ",
    "وَبِقُرْبِكِ تَعَزَّى كُلُّ مَا فِي القَلْبِ أَوْجَعَ"
  ],
  [
    "يَا غَالِيَةَ النَّفْسِ، يَا قُرَّةَ العَيْنِ",
    "لَوْ تَدْرِينَ مَا فِي قَلْبِي مِنْ لَظَى",
    "أَشْوَاقٌ تَذُوبُ فِيهَا الأَرْوَاحُ",
    "وَهَوًى يَمْلَأُ الآفَاقَ سَعَادَةً وَسَنَا"
  ],
  [
    "كُلَّمَا ذَكَرْتُكِ يَا حُبِّي تَهَافَتَتْ",
    "أَمْوَاجُ الشَّوْقِ تَجْرِي فِي دِمَائِي",
    "أَشْتَاقُ لِرُؤْيَتِكِ كَالْغَائِبِ العَاشِقِ",
    "الَّذِي قَدْ فَارَقَ مَاءَ الحَيَاةِ وَمَاتَ"
  ],
  [
    "يَا حَبِيبَتِي، يَا نَبْضَ قَلْبِي وَرُوحِي",
    "أَنْتِ الحَيَاةُ الَّتِي فِي عَيْشِهَا أَحْلَمُ",
    "بِكِ عَشِقْتُ الجَمَالَ وَكُلَّ مَا فِي الوُجُودِ",
    "وَبِحُبِّكِ يَعِيشُ قَلْبِي وَيَتَرَنَّمُ"
  ],
  [
    "لَوْ أَنَّ القَلْبَ يُمْكِنُ أَنْ يَتَكَلَّمَ",
    "لَحَكَى عَنْ لَوْعَةٍ فِي الحُبِّ أَتْعَبَتْهُ",
    "وَلَحَكَى عَنْ هَوًى فِي الرُّوحِ كُتِبَ",
    "وَعَلَى أَجْفَانِهِ دَمْعٌ بِفَرْقَاكِ رَسَمْتُهُ"
  ],
  [
    "يَا بَدِيعَةَ الخِلَالِ، يَا فَرْدَةَ الدَّهْرِ",
    "كَيْفَ أَقْضِي الوَقْتَ بَعْدَ الفِرَاقِ؟",
    "أَيْنَ أَذْهَبُ وَأَيْنَ أَمْضِي",
    "وَكُلُّ مَسَارِحِ الدُّنْيَا بِفَقْدِكِ قَدْ أَوْحَشَتْ"
  ],
  [
    "أَنْتِ النَّدَى فِي الصَّبَاحِ البَاكِرِ",
    "أَنْتِ النَّسِيمُ عَلَى الأَفْيَاءِ يَمْرَحُ",
    "أَنْتِ الأَمَانُ الَّذِي فِي قَلْبِهِ يَحْلُمُ",
    "أَنْتِ الحَيَاةُ وَأَنْتِ العُمْرُ وَأَنْتِ الأَمَلُ"
  ],
  [
    "يَا مَنْ بِقَلْبِهَا أَسْكَنْتُ أَحْلَامِي",
    "وَبِجَمَالِهَا أَضَاءَتْ دُنْيَايَ",
    "لَوْ تَعْلَمِينَ كَمْ أَهْوَى نَظَرَاتِكِ",
    "وَكَمْ أَشْتَاقُ لِلَحْظَاتٍ مَعَكِ تَمُرُّ"
  ],
  [
    "أَغَارُ مِنَ اللَّيْلِ إِذَا جَلَّلَكِ بِسَوَادِهِ",
    "وَمِنَ الصَّبَاحِ إِذَا نَادَاكِ بِاسْمِهِ",
    "أَغَارُ مِنْ كُلِّ شَيْءٍ يُحِيطُ بِكِ",
    "وَيَشْغَلُكِ عَنِ الهَوَى الَّذِي فِي قَلْبِي"
  ],
  [
    "يَا حَبِيبَةَ القَلْبِ، يَا رُوحَ الوُجُودِ",
    "كَمْ أَتَمَنَّى أَنْ أَلِينَ كَالظِّلِّ لَكِ",
    "وَأَحْمِيكِ مِنْ كُلِّ شَرٍّ قَدْ يُؤْذِيكِ",
    "وَأَرْعَاكِ حَتَّى يَمُوتَ القَلْبُ فِي حُبِّكِ"
  ],
  [
    "لَكِ فِي قَلْبِي مَكَانٌ لَا يُزَاحِمُهُ أَحَدٌ",
    "وَفِي عَقْلِي سُكُونٌ لَا يُضَاهَى",
    "أَنْتِ الحُبُّ الَّذِي فِي كُلِّ شَيْءٍ أَرَاهُ",
    "وَبِذِكْرَاكِ تَحْيَا الأَرْوَاحُ وَتَرْتَاحُ"
  ],
  [
    "يَا مَلِيكَةَ القُلُوبِ، يَا جَمَالَ البَشَرِ",
    "كَيْفَ أَسْلُكُ دُرُوبَ الحُبِّ دُونَكِ؟",
    "وَكَيْفَ أَعِيشُ وَقَلْبِي قَدْ تَعَلَّقَ بِكِ",
    "وَفِي قُرْبِكِ يَجِدُ الهَوَى مَرَاحَهُ؟"
  ],
  [
    "أَشْوَاقِي لَكِ تَجْرِي كَالنَّهْرِ",
    "وَتَمْلَأُ كُلَّ جُزْءٍ فِي كِيَانِي",
    "يَا حَبِيبَتِي، يَا أُنْسَ الوُجُودِ",
    "بِحُبِّكِ عَاشَ قَلْبِي وَاسْتَرَاحَ"
  ],
  [
    "يَا فَتَاةَ العُرُوبَةِ، يَا جَمَالَ الزَّمَانِ",
    "أَنْتِ الشَّمْسُ فِي دُجَى لَيْلِي",
    "أَنْتِ القَمَرُ الَّذِي فِي سَمَاءِ العُمْرِ أَشْرَقَ",
    "وَبِنُورِكِ أَضَاءَتْ دُنْيَايَ"
  ],
  [
    "لَوْ أَنَّ العُمْرَ يُمْكِنُ أَنْ يُقَسَّمَ",
    "لَوَزَّعْتُهُ دُقَاقًا بَيْنَ لَحْظَاتِ قُرْبِكِ",
    "فَكُلُّ دَقِيقَةٍ فِي كَنْفِكِ تَعِيشُهَا",
    "تَعْدِلُ عُمْرًا مِنَ السَّعَادَةِ وَالهَنَاءِ"
  ],
  [
    "يَا حَبِيبَتِي، كَمْ أَشْتَاقُ إِلَى لَمْسَةٍ",
    "مِنْ يَدَيْكِ تَمْسَحُ الآلامَ عَنِّي",
    "وَنَظْرَةٍ مِنْ عَيْنَيْكِ تُنْعِشُ الرُّوحَ",
    "وَكَلِمَةٍ مِنْ فَمِكِ تَجْعَلُ الدُّنْيَا جَنَّةً"
  ],
  [
    "أَغَارُ عَلَيْكِ مِنْ عَيْنِي إِذَا نَظَرَتْ",
    "وَمِنْ قَلْبِي إِذَا فِي حُبِّكِ خَفَقَ",
    "أَغَارُ مِنْ نَفْسِي وَأَغَارُ مِنْ ظِلِّي",
    "فَكُلُّ شَيْءٍ قَرِيبٌ مِنْكِ قَدْ أَغَارَ"
  ],
  [
    "يَا سَكَنَ الرُّوحِ، يَا مَلْجَأَ العَاشِقِينَ",
    "أَنْتِ الحَنَانُ الَّذِي طَالَ اشْتِيَاقِي لَهُ",
    "بِكِ أَدْرَكْتُ مَعْنَى العِشْقِ الحَقِيقِي",
    "وَبِقُرْبِكِ عَرَفْتُ طَعْمَ السَّعَادَةِ"
  ],
  [
    "فِي عَيْنَيْكِ قِصَّةٌ لَمْ تُكْتَبْ بَعْدُ",
    "وَفِي ثَنَايَاكِ أَلْحَانٌ لَهَا تَعْزِفُ",
    "يَا أَجْمَلَ النِّسَاءِ، يَا بَدِيعَةَ الصُّوَرِ",
    "أَنْتِ الحَيَاةُ وَأَنْتِ الأَمَلُ وَالمُنَى"
  ],
  [
    "لَوْ تَعْلَمِينَ كَمْ تَعْنِي لِي حَرْفَةٌ",
    "مِنْ فَمِكِ العَذْبِ فِي أُذُنِي تَدُقُّ",
    "لَأَعْطَيْتِنِي سَهَرَ العُمْرِ لِسَمَاعِهَا",
    "وَلَأَعْطَيْتِنِي دُنْيَايَ فِدًى لِصَوْتِكِ"
  ],
  [
    "يَا حَبِيبَتِي، كُلَّمَا زَادَ بُعْدُكِ",
    "زَادَ شَوْقِي وَاحْتَرَاقِي فِي لَوْعَتِي",
    "فَارْحَمِي قَلْبًا بِحُبِّكِ قَدْ تَعِبَ",
    "وَبِفِرَاقِكِ قَدْ أَوْهَنَتْهُ لُوعَتِي"
  ],
  [
    "أَنْتِ الرَّبِيعُ الَّذِي فِي قَلْبِي أَزْهَرَ",
    "وَالنَّورُ الَّذِي فِي دُنْيَايَ أَشْرَقَ",
    "بِحُبِّكِ يَا غَالِيَتِي عَاشَ الوُجُودُ",
    "وَبِذِكْرَاكِ تَهْدَأُ الرِّيحُ وَتَسْكُنُ"
  ],
  [
    "يَا سَلاَمَ الفُؤَادِ، يَا طِيبَ الوُجُودِ",
    "أَنْتِ المَعْنَى الَّذِي فِي الحَيَاةِ أَبْتَغِي",
    "بِكِ يَا حُبِّي تَكْمُلُ أَجْزَاءُ قَلْبِي",
    "وَبِقُرْبِكِ يَهْنَأُ العُمْرُ وَيَرْقَى"
  ],
  [
    "لَوْ أَنَّ القَلْبَ يُمْكِنُ أَنْ يَصِفَ هَوَاكِ",
    "لَصَاغَ أَعْذَبَ أَشْعَارِ الغَرَامِ",
    "وَلَنَظَمَ الدُّرَّ فِي عِقْدِ الوِصَالِ",
    "وَلَغَنَّى بِاسْمِكِ أَحْلَى الأَنْغَامِ"
  ],
  [
    "يَا جَمَالاً فَاقَ كُلَّ الجَمَالِ",
    "يَا بَهَاءً زَادَ فِي الحُسْنِ بَهَاءً",
    "أَنْتِ النَّبْعُ الَّذِي مِنْهُ ارْتَوَيْتُ",
    "وَبِحُبِّكِ يَا حَيَاتِي عِشْتُ أَعْيَاءً"
  ],
  [
    "أَشْتَاقُ لِرَائِحَتِكِ كُلَّمَا هَبَّتْ نَسِيمَاتُ",
    "وَأَتَمَنَّى لَوْ أَنِّي كُنْتُ رِيحًا تَلُفُّكِ",
    "أَشْتَاقُ لِصَوْتِكِ كُلَّمَا سَكَتَتِ الأَرْضُ",
    "وَأَتَمَنَّى لَوْ أَنِّي كُنْتُ صَدًى فِي أُذُنِكِ"
  ],
  [
    "يَا قُرَّةَ العَيْنِ، يَا مَلْكَ المُلُوكِ",
    "أَنْتِ النَّعِيمُ الَّذِي فِي الدُّنْيَا أَرْجُوهُ",
    "بِكِ أَدْرَكْتُ مَعْنَى السَّعَادَةِ الحَقِيقَةِ",
    "وَبِحُبِّكِ يَا غَالِيَتِي أَحْيَا وَأَمُوتُ"
  ],
  [
    "لَكِ فِي قَلْبِي سِرَاجٌ لَا يُطْفَأُ",
    "وَلِذِكْرَاكِ نَهَارٌ لَا يُمْسِي",
    "أَنْتِ العُمْرُ كُلُّهُ فِي نَظْرَةٍ",
    "وَبِقُرْبِكِ يَا حَبِيبَتِي أَعِيشُ الأَبَدَ"
  ],
  [
    "يَا حَبِيبَةَ القَلْبِ، يَا أُمْنِيَةَ العُمْرِ",
    "كَمْ تَمَنَّيْتُ لَوْ أَنِّي أَقْدِرُ أَنْ أَعْبُرَ",
    "مَسَافَاتِ الزَّمَنِ لِأَكُونَ عِنْدَكِ",
    "وَأَحْضُنَ طَرْفَكِ قَبْلَ أَنْ يَغِيبَ القَمَرُ"
  ],
  [
    "أَنْتِ الحَنِينُ الَّذِي فِي أَعْمَاقِ قَلْبِي",
    "أَنْتِ الأُنْسُ الَّذِي فِي الوَحْدَةِ أَسْعَدَنِي",
    "أَنْتِ الحَيَاةُ وَأَنْتِ المَوْتُ بَعْدَكِ",
    "أَنْتِ كُلُّ شَيْءٍ فِي الدُّنْيَا وَأَنْتِ الأَمَلُ"
  ],
  [
    "يَا غَالِيَةَ النَّفْسِ، يَا قُرَّةَ العَيْنِ",
    "لَكِ فِي قَلْبِي مَحَطَّاتٌ مِنَ الشَّوْقِ",
    "كُلَّمَا زَادَ بُعْدُكِ زَادَتْ مَسَافَاتُهَا",
    "وَكُلَّمَا قَرُبْتِ زَادَ العِشْقُ فِي دَمِي"
  ],
  [
    "لَوْ تَعْلَمِينَ كَمْ أَشْتَاقُ لِوَصْلِكِ",
    "لَأَرْسَلْتِ الرِّيحَ تَأْتِينِي بِخَبَرِكِ",
    "وَلَأَرْسَلْتِ الشِّهَابَ يَنُوءُ بِحَمْلِهِ",
    "لِيُبَلِّغَنِي أَنَّ العِشْقَ فِي قَلْبِكِ"
  ],
  [
    "يَا بَدِيعَةَ الجَمَالِ، يَا رَوْعَةَ الخِلْقَةِ",
    "أَنْتِ النَّبْضُ الَّذِي فِي عُرُوقِي يَجْرِي",
    "أَنْتِ الحَنِينُ الَّذِي فِي أَعْمَاقِ رُوحِي",
    "وَبِحُبِّكِ يَا حَيَاتِي أَعِيشُ وَأَمُوتُ"
  ],
  [
    "أَغَارُ مِنَ الوُرُودِ إِذَا نَظَرَتْ إِلَيْكِ",
    "وَمِنَ الطُّيُورِ إِذَا عَلَى غُصْنِكِ قَضَّتْ",
    "أَغَارُ مِنَ الشَّمْسِ إِذَا لَمَسَتْ جَبْهَتَكِ",
    "وَمِنَ القَمَرِ إِذَا عَلَى خَدِّكِ سَكَنَ"
  ],
  [
    "يَا حَبِيبَتِي، يَا أُنْسَ الوُجُودِ",
    "كَيْفَ أَعِيشُ بَعْدَ أَنْ فَارَقْتُكِ؟",
    "أَيْنَ أَمْضِي وَأَيْنَ أَذْهَبُ",
    "وَكُلُّ دَرْبٍ دُونَكِ قَدْ أُغْلِقَ؟"
  ],
  [
    "فِي عَيْنَيْكِ بَحْرٌ مِنَ الهَوَى",
    "وَفِي ثَنَايَاكِ سِحْرٌ لَا يُفَسَّرُ",
    "يَا مَلِيكَةَ الجَمَالِ، يَا بَدِيعَةَ الحُسْنِ",
    "أَنْتِ العُمْرُ كُلُّهُ وَأَنْتِ الدَّهْرُ"
  ],
  [
    "لَكِ فِي قَلْبِي مَقَامٌ لَا يُزَاحِمُهُ أَحَدٌ",
    "وَفِي عَقْلِي سُكُونٌ لَا يُضَاهَى",
    "أَنْتِ الحُبُّ الَّذِي فِي كُلِّ شَيْءٍ أَرَاهُ",
    "وَبِذِكْرَاكِ تَحْيَا الأَرْوَاحُ وَتَرْتَاحُ"
  ],
  [
    "يَا سَلاَمَ الفُؤَادِ، يَا طِيبَ الوُجُودِ",
    "أَنْتِ المَعْنَى الَّذِي فِي الحَيَاةِ أَبْتَغِي",
    "بِكِ يَا حُبِّي تَكْمُلُ أَجْزَاءُ قَلْبِي",
    "وَبِقُرْبِكِ يَهْنَأُ العُمْرُ وَيَرْقَى"
  ],
  [
    "أَشْتَاقُ لِرَائِحَتِكِ كُلَّمَا هَبَّتْ نَسِيمَاتُ",
    "وَأَتَمَنَّى لَوْ أَنِّي كُنْتُ رِيحًا تَلُفُّكِ",
    "أَشْتَاقُ لِصَوْتِكِ كُلَّمَا سَكَتَتِ الأَرْضُ",
    "وَأَتَمَنَّى لَوْ أَنِّي كُنْتُ صَدًى فِي أُذُنِكِ"
  ],
  [
    "يَا قُرَّةَ العَيْنِ، يَا مَلْكَ المُلُوكِ",
    "أَنْتِ النَّعِيمُ الَّذِي فِي الدُّنْيَا أَرْجُوهُ",
    "بِكِ أَدْرَكْتُ مَعْنَى السَّعَادَةِ الحَقِيقَةِ",
    "وَبِحُبِّكِ يَا غَالِيَتِي أَحْيَا وَأَمُوتُ"
  ],
  [
    "لَكِ فِي قَلْبِي سِرَاجٌ لَا يُطْفَأُ",
    "وَلِذِكْرَاكِ نَهَارٌ لَا يُمْسِي",
    "أَنْتِ العُمْرُ كُلُّهُ فِي نَظْرَةٍ",
    "وَبِقُرْبِكِ يَا حَبِيبَتِي أَعِيشُ الأَبَدَ"
  ],
  [
    "يَا حَبِيبَةَ القَلْبِ، يَا أُمْنِيَةَ العُمْرِ",
    "كَمْ تَمَنَّيْتُ لَوْ أَنِّي أَقْدِرُ أَنْ أَعْبُرَ",
    "مَسَافَاتِ الزَّمَنِ لِأَكُونَ عِنْدَكِ",
    "وَأَحْضُنَ طَرْفَكِ قَبْلَ أَنْ يَغِيبَ القَمَرُ"
  ],
  [
    "أَنْتِ الحَنِينُ الَّذِي فِي أَعْمَاقِ قَلْبِي",
    "أَنْتِ الأُنْسُ الَّذِي فِي الوَحْدَةِ أَسْعَدَنِي",
    "أَنْتِ الحَيَاةُ وَأَنْتِ المَوْتُ بَعْدَكِ",
    "أَنْتِ كُلُّ شَيْءٍ فِي الدُّنْيَا وَأَنْتِ الأَمَلُ"
  ],
  [
    "يَا غَالِيَةَ النَّفْسِ، يَا قُرَّةَ العَيْنِ",
    "لَكِ فِي قَلْبِي مَحَطَّاتٌ مِنَ الشَّوْقِ",
    "كُلَّمَا زَادَ بُعْدُكِ زَادَتْ مَسَافَاتُهَا",
    "وَكُلَّمَا قَرُبْتِ زَادَ العِشْقُ فِي دَمِي"
  ],
  [
    "لَوْ تَعْلَمِينَ كَمْ أَشْتَاقُ لِوَصْلِكِ",
    "لَأَرْسَلْتِ الرِّيحَ تَأْتِينِي بِخَبَرِكِ",
    "وَلَأَرْسَلْتِ الشِّهَابَ يَنُوءُ بِحَمْلِهِ",
    "لِيُبَلِّغَنِي أَنَّ العِشْقَ فِي قَلْبِكِ"
  ],
  [
    "يَا بَدِيعَةَ الجَمَالِ، يَا رَوْعَةَ الخِلْقَةِ",
    "أَنْتِ النَّبْضُ الَّذِي فِي عُرُوقِي يَجْرِي",
    "أَنْتِ الحَنِينُ الَّذِي فِي أَعْمَاقِ رُوحِي",
    "وَبِحُبِّكِ يَا حَيَاتِي أَعِيشُ وَأَمُوتُ"
  ],
  [
    "أَغَارُ مِنَ الوُرُودِ إِذَا نَظَرَتْ إِلَيْكِ",
    "وَمِنَ الطُّيُورِ إِذَا عَلَى غُصْنِكِ قَضَّتْ",
    "أَغَارُ مِنَ الشَّمْسِ إِذَا لَمَسَتْ جَبْهَتَكِ",
    "وَمِنَ القَمَرِ إِذَا عَلَى خَدِّكِ سَكَنَ"
  ],
  [
    "يَا حَبِيبَتِي، يَا أُنْسَ الوُجُودِ",
    "كَيْفَ أَعِيشُ بَعْدَ أَنْ فَارَقْتُكِ؟",
    "أَيْنَ أَمْضِي وَأَيْنَ أَذْهَبُ",
    "وَكُلُّ دَرْبٍ دُونَكِ قَدْ أُغْلِقَ؟"
  ],
  [
    "فِي عَيْنَيْكِ بَحْرٌ مِنَ الهَوَى",
    "وَفِي ثَنَايَاكِ سِحْرٌ لَا يُفَسَّرُ",
    "يَا مَلِيكَةَ الجَمَالِ، يَا بَدِيعَةَ الحُسْنِ",
    "أَنْتِ العُمْرُ كُلُّهُ وَأَنْتِ الدَّهْرُ"
  ],
  [
    "لَكِ فِي قَلْبِي مَقَامٌ لَا يُزَاحِمُهُ أَحَدٌ",
    "وَفِي عَقْلِي سُكُونٌ لَا يُضَاهَى",
    "أَنْتِ الحُبُّ الَّذِي فِي كُلِّ شَيْءٍ أَرَاهُ",
    "وَبِذِكْرَاكِ تَحْيَا الأَرْوَاحُ وَتَرْتَاحُ"
  ],
  [
    "يَا سَلاَمَ الفُؤَادِ، يَا طِيبَ الوُجُودِ",
    "أَنْتِ المَعْنَى الَّذِي فِي الحَيَاةِ أَبْتَغِي",
    "بِكِ يَا حُبِّي تَكْمُلُ أَجْزَاءُ قَلْبِي",
    "وَبِقُرْبِكِ يَهْنَأُ العُمْرُ وَيَرْقَى"
  ],
  [
    "أَشْتَاقُ لِرَائِحَتِكِ كُلَّمَا هَبَّتْ نَسِيمَاتُ",
    "وَأَتَمَنَّى لَوْ أَنِّي كُنْتُ رِيحًا تَلُفُّكِ",
    "أَشْتَاقُ لِصَوْتِكِ كُلَّمَا سَكَتَتِ الأَرْضُ",
    "وَأَتَمَنَّى لَوْ أَنِّي كُنْتُ صَدًى فِي أُذُنِكِ"
  ],
  [
    "يَا قُرَّةَ العَيْنِ، يَا مَلْكَ المُلُوكِ",
    "أَنْتِ النَّعِيمُ الَّذِي فِي الدُّنْيَا أَرْجُوهُ",
    "بِكِ أَدْرَكْتُ مَعْنَى السَّعَادَةِ الحَقِيقَةِ",
    "وَبِحُبِّكِ يَا غَالِيَتِي أَحْيَا وَأَمُوتُ"
  ],
  [
    "لَكِ فِي قَلْبِي سِرَاجٌ لَا يُطْفَأُ",
    "وَلِذِكْرَاكِ نَهَارٌ لَا يُمْسِي",
    "أَنْتِ العُمْرُ كُلُّهُ فِي نَظْرَةٍ",
    "وَبِقُرْبِكِ يَا حَبِيبَتِي أَعِيشُ الأَبَدَ"
  ],
  [
    "يَا حَبِيبَةَ القَلْبِ، يَا أُمْنِيَةَ العُمْرِ",
    "كَمْ تَمَنَّيْتُ لَوْ أَنِّي أَقْدِرُ أَنْ أَعْبُرَ",
    "مَسَافَاتِ الزَّمَنِ لِأَكُونَ عِنْدَكِ",
    "وَأَحْضُنَ طَرْفَكِ قَبْلَ أَنْ يَغِيبَ القَمَرُ"
  ],
  [
    "أَنْتِ الحَنِينُ الَّذِي فِي أَعْمَاقِ قَلْبِي",
    "أَنْتِ الأُنْسُ الَّذِي فِي الوَحْدَةِ أَسْعَدَنِي",
    "أَنْتِ الحَيَاةُ وَأَنْتِ المَوْتُ بَعْدَكِ",
    "أَنْتِ كُلُّ شَيْءٍ فِي الدُّنْيَا وَأَنْتِ الأَمَلُ"
  ],
  [
    "يَا غَالِيَةَ النَّفْسِ، يَا قُرَّةَ العَيْنِ",
    "لَكِ فِي قَلْبِي مَحَطَّاتٌ مِنَ الشَّوْقِ",
    "كُلَّمَا زَادَ بُعْدُكِ زَادَتْ مَسَافَاتُهَا",
    "وَكُلَّمَا قَرُبْتِ زَادَ العِشْقُ فِي دَمِي"
  ],
  [
    "لَوْ تَعْلَمِينَ كَمْ أَشْتَاقُ لِوَصْلِكِ",
    "لَأَرْسَلْتِ الرِّيحَ تَأْتِينِي بِخَبَرِكِ",
    "وَلَأَرْسَلْتِ الشِّهَابَ يَنُوءُ بِحَمْلِهِ",
    "لِيُبَلِّغَنِي أَنَّ العِشْقَ فِي قَلْبِكِ"
  ],
  [
    "يَا بَدِيعَةَ الجَمَالِ، يَا رَوْعَةَ الخِلْقَةِ",
    "أَنْتِ النَّبْضُ الَّذِي فِي عُرُوقِي يَجْرِي",
    "أَنْتِ الحَنِينُ الَّذِي فِي أَعْمَاقِ رُوحِي",
    "وَبِحُبِّكِ يَا حَيَاتِي أَعِيشُ وَأَمُوتُ"
  ],
  [
    "أَغَارُ مِنَ الوُرُودِ إِذَا نَظَرَتْ إِلَيْكِ",
    "وَمِنَ الطُّيُورِ إِذَا عَلَى غُصْنِكِ قَضَّتْ",
    "أَغَارُ مِنَ الشَّمْسِ إِذَا لَمَسَتْ جَبْهَتَكِ",
    "وَمِنَ القَمَرِ إِذَا عَلَى خَدِّكِ سَكَنَ"
  ],
  [
    "يَا حَبِيبَتِي، يَا أُنْسَ الوُجُودِ",
    "كَيْفَ أَعِيشُ بَعْدَ أَنْ فَارَقْتُكِ؟",
    "أَيْنَ أَمْضِي وَأَيْنَ أَذْهَبُ",
    "وَكُلُّ دَرْبٍ دُونَكِ قَدْ أُغْلِقَ؟"
  ],
  [
    "فِي عَيْنَيْكِ بَحْرٌ مِنَ الهَوَى",
    "وَفِي ثَنَايَاكِ سِحْرٌ لَا يُفَسَّرُ",
    "يَا مَلِيكَةَ الجَمَالِ، يَا بَدِيعَةَ الحُسْنِ",
    "أَنْتِ العُمْرُ كُلُّهُ وَأَنْتِ الدَّهْرُ"
  ],
  [
    "لَكِ فِي قَلْبِي مَقَامٌ لَا يُزَاحِمُهُ أَحَدٌ",
    "وَفِي عَقْلِي سُكُونٌ لَا يُضَاهَى",
    "أَنْتِ الحُبُّ الَّذِي فِي كُلِّ شَيْءٍ أَرَاهُ",
    "وَبِذِكْرَاكِ تَحْيَا الأَرْوَاحُ وَتَرْتَاحُ"
  ]
];
