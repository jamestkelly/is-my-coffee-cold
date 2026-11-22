export const languages = {
  en: 'English', fr: 'Français', es: 'Español', 'zh-Hans': '简体中文',
  ja: '日本語', ko: '한국어', vi: 'Tiếng Việt',
};
export type Locale = keyof typeof languages;
export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && Object.hasOwn(languages, value);
}

export const copy = {
  en: {
    title: 'Is my coffee cold?', language: 'Language', estimate: 'Cooling estimate', fields: 'Temperatures',
    cutoff: 'Too cold for me at', coffee: 'Coffee temperature', air: 'Room / outdoors',
    increase: 'Increase: {field}', decrease: 'Decrease: {field}',
    about: 'About', less: 'Less than', one: '{n} minute', other: '{n} minutes', until: 'Until your coffee reaches {t} °C.',
    cold: 'Already too cold.', unreachable: 'Won’t reach that temperature here.', incomplete: 'Enter all three temperatures.',
    weather: 'Use outdoor temperature', loading: 'Getting weather…', consent: 'Use your approximate location to get the outdoor temperature from Open-Meteo?',
    allow: 'Use my location', failed: 'Outdoor temperature unavailable. You can enter it above.', source: 'Outdoor reading from {source}.',
    note: 'An estimate, not a timer. A lid or insulated mug can change the cooling time.',
  },
  fr: {
    title: 'Mon café est-il froid ?', language: 'Langue', estimate: 'Temps de refroidissement estimé', fields: 'Températures',
    cutoff: 'Trop froid pour moi à', coffee: 'Température du café', air: 'Ambiante / extérieure',
    increase: 'Augmenter : {field}', decrease: 'Diminuer : {field}',
    about: 'Environ', less: 'Moins de', one: '{n} minute', other: '{n} minutes', until: 'Avant que votre café atteigne {t} °C.',
    cold: 'Déjà trop froid.', unreachable: 'Votre café n’atteindra pas cette température ici.', incomplete: 'Saisissez les trois températures.',
    weather: 'Utiliser la température extérieure', loading: 'Météo en cours…', consent: 'Utiliser votre position approximative pour obtenir la température extérieure auprès d’Open-Meteo ?',
    allow: 'Utiliser ma position', failed: 'Température extérieure indisponible. Vous pouvez la saisir ci-dessus.', source: 'Température extérieure fournie par {source}.',
    note: 'C’est une estimation, pas un minuteur. Un couvercle ou une tasse isotherme peut modifier le temps de refroidissement.',
  },
  es: {
    title: '¿Está frío mi café?', language: 'Idioma', estimate: 'Tiempo estimado de enfriamiento', fields: 'Temperaturas',
    cutoff: 'Demasiado frío para mí a', coffee: 'Temperatura del café', air: 'Ambiente / exterior',
    increase: 'Aumentar: {field}', decrease: 'Reducir: {field}',
    about: 'Aproximadamente', less: 'Menos de', one: '{n} minuto', other: '{n} minutos', until: 'Para que el café llegue a {t} °C.',
    cold: 'Ya está demasiado frío.', unreachable: 'Aquí no alcanzará esa temperatura.', incomplete: 'Introduce las tres temperaturas.',
    weather: 'Usar la temperatura exterior', loading: 'Consultando el tiempo…', consent: '¿Quieres usar tu ubicación aproximada para consultar la temperatura exterior en Open-Meteo?',
    allow: 'Usar mi ubicación', failed: 'Temperatura exterior no disponible. Puedes introducirla arriba.', source: 'Temperatura exterior según {source}.',
    note: 'Es una estimación, no un temporizador. Una tapa o una taza térmica puede cambiar el tiempo de enfriamiento.',
  },
  'zh-Hans': {
    title: '我的咖啡凉了吗？', language: '语言', estimate: '预计冷却时间', fields: '温度',
    cutoff: '低于这个温度我就觉得凉了', coffee: '咖啡温度', air: '室内 / 室外温度',
    increase: '调高：{field}', decrease: '调低：{field}',
    about: '大约还需', less: '不到', one: '{n} 分钟', other: '{n} 分钟', until: '咖啡将降至 {t} °C。',
    cold: '已经太凉了。', unreachable: '在当前环境下不会降到这个温度。', incomplete: '请输入三个温度。',
    weather: '使用室外温度', loading: '正在获取天气…', consent: '允许使用大致位置从 Open-Meteo 获取室外温度吗？',
    allow: '使用我的位置', failed: '无法获取室外温度，请在上方手动输入。', source: '室外温度来源：{source}。',
    note: '这是估算，并非计时器。杯盖或保温杯会影响冷却时间。',
  },
  ja: {
    title: 'コーヒー、もう冷めた？', language: '言語', estimate: '冷めるまでの目安', fields: '温度',
    cutoff: '冷めたと感じる温度', coffee: 'コーヒーの温度', air: '室温・外気温',
    increase: '{field}を上げる', decrease: '{field}を下げる',
    about: '残り約', less: '残り時間', one: '{n}分', other: '{n}分', underMinute: '{n}分未満', until: 'コーヒーが {t} °C になるまで。',
    cold: 'もう冷めています。', unreachable: 'この環境ではその温度まで冷めません。', incomplete: '3つの温度を入力してください。',
    weather: '外気温を使う', loading: '天気を取得中…', consent: 'おおよその位置情報を使って Open-Meteo から外気温を取得しますか？',
    allow: '現在地を使う', failed: '外気温を取得できません。上の欄に入力してください。', source: '外気温の提供元：{source}',
    note: 'タイマーではなく目安です。ふたや保温マグを使うと冷めるまでの時間が変わります。',
  },
  ko: {
    title: '내 커피, 벌써 식었을까?', language: '언어', estimate: '예상 냉각 시간', fields: '온도',
    cutoff: '커피가 식었다고 느끼는 온도', coffee: '커피 온도', air: '실내 / 실외 온도',
    increase: '{field} 올리기', decrease: '{field} 내리기',
    about: '앞으로 약', less: '남은 시간', one: '{n}분', other: '{n}분', underMinute: '{n}분 미만', until: '커피가 {t} °C까지 식는 데 걸리는 시간입니다.',
    cold: '이미 너무 식었어요.', unreachable: '이 환경에서는 그 온도까지 식지 않아요.', incomplete: '온도 세 가지를 모두 입력해 주세요.',
    weather: '실외 온도 사용', loading: '날씨 확인 중…', consent: '대략적인 위치를 사용해 Open-Meteo에서 실외 온도를 가져올까요?',
    allow: '내 위치 사용', failed: '실외 온도를 가져오지 못했어요. 위에 직접 입력해 주세요.', source: '실외 온도 출처: {source}',
    note: '타이머가 아닌 예상 시간입니다. 뚜껑이나 보온 머그를 사용하면 식는 시간이 달라질 수 있어요.',
  },
  vi: {
    title: 'Cà phê của tôi nguội chưa?', language: 'Ngôn ngữ', estimate: 'Thời gian nguội ước tính', fields: 'Nhiệt độ',
    cutoff: 'Tôi thấy quá nguội ở mức', coffee: 'Nhiệt độ cà phê', air: 'Trong nhà / ngoài trời',
    increase: 'Tăng: {field}', decrease: 'Giảm: {field}',
    about: 'Còn khoảng', less: 'Còn chưa đến', one: '{n} phút', other: '{n} phút', until: 'Đến khi cà phê nguội xuống {t} °C.',
    cold: 'Cà phê đã quá nguội.', unreachable: 'Cà phê sẽ không nguội đến mức đó ở đây.', incomplete: 'Hãy nhập đủ ba mức nhiệt độ.',
    weather: 'Dùng nhiệt độ ngoài trời', loading: 'Đang lấy dữ liệu thời tiết…', consent: 'Dùng vị trí gần đúng của bạn để lấy nhiệt độ ngoài trời từ Open-Meteo?',
    allow: 'Dùng vị trí của tôi', failed: 'Không lấy được nhiệt độ ngoài trời. Bạn có thể nhập ở trên.', source: 'Nhiệt độ ngoài trời do {source} cung cấp.',
    note: 'Đây là ước tính, không phải đồng hồ đếm ngược. Nắp đậy hoặc cốc giữ nhiệt có thể làm thay đổi thời gian nguội.',
  },
};
