const { generateVideo, Logger } = require('../dist');
const path = require('path');

Logger.enabled = true;
generateVideo(
  {
    provider: 'gpt4js',
    termsNum: 6,
    subtitleMaxWidth: 9,
    videoClipDuration: 10,
    //ttsProxy: 'http:127.0.0.1:1080',
    voiceName: 'vi-VN-NamMinhNeural',
    bgMusic: path.join(__dirname, './assets/songs/m3.mp3'),
    output: path.join(__dirname, './output'),
    lineSplit : false,
    pexels: {
      // Register at https://www.pexels.com/api/ to get your API key.
      apiKey: 'tmLrkxFipcPRz5BCCaKgOT8HOFsMsMWJ7Dyn3fCLZI73BoECbx7NB2Tq',
    },
   azureTTSSettings: {
      subscriptionKey: 'Bq5zO8jE5yNCMPiMmht16yUo7IM9oI2BQZ8fvwNCEbUnQDxqpcgjJQQJ99AJACqBBLyXJ3w3AAAYACOGMKuS',
      serviceRegion: 'southeastasia',
    },
    videoScript: `Cuộc xung đột Nga-Ukraine đang bước vào giai đoạn then chốt trong mùa Đông - Xuân này. Các quan chức Ukraine cho biết, 4-5 tháng tới sẽ quyết định lập trường của cả hai bên trong các cuộc đàm phán hòa bình. Đặc biệt, sự trở lại Nhà Trắng của Donald Trump khiến Ukraine phải tính toán lại chiến lược vì lo ngại gia nhập NATO sẽ khó khăn hơn, và viện trợ quân sự có thể bị giảm.
Trong khi đó, Nga tiếp tục chỉ trích NATO phá hoại an ninh châu Âu bằng cách mở rộng quân sự và cung cấp vũ khí cho Ukraine. Phái viên Nga tại OSCE, ông Alexander Lukashevich, khẳng định an ninh cần được đảm bảo cho tất cả, không chỉ một phía.
Các chuyên gia phân tích rằng phe 'diều hâu' trong NATO có thể cố kéo dài xung đột trong những tháng cuối nhiệm kỳ của Tổng thống Biden, gây khó khăn cho chính sách đối ngoại của Trump nếu ông trở lại. Liệu giai đoạn mùa Đông này sẽ đem lại cơ hội hòa bình, hay tiếp tục leo thang căng thẳng? Hãy cùng theo dõi
    `,
    videoTerms: [
      'Russia Ukraine conflict',
      'Military conflict',
      'Donald Trump',
      'Winter spring conflict',
      'Cold war Europe',
      'Alexander Lukashevich',
      'Tổng thống Biden',
    ]
  },
  progress => {
    console.log(progress);
  },
);
