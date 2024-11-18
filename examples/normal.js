const { generateVideo, Logger } = require('../dist');
const path = require('path');

Logger.enabled = true;
console.log('Before running the example, please make sure to apply for and obtain the relevant API keys required.');
generateVideo(
  {
    // Get your API key at https://platform.openai.com/api-keys
    // Or Visit https://platform.moonshot.cn/console/api-keys to get your API key.
    // provider: 'moonshot',
    // moonshot: {
    //   apiKey: 'xxxxxxxx',
    //   modelName: 'moonshot-v1-8k',
    // },
    azureTTSSettings: {
      subscriptionKey: '*',
      serviceRegion: 'southeastasia',
    },
    termsNum: 8,
    subtitleMaxWidth: 9,
    videoClipDuration: 10,
    // error WSServerHandshakeError: 403
    // https://github.com/rany2/edge-tts/issues/290
    voiceName: 'zh-CN-XiaoxiaoNeural',
    fontSize: 16,
    textColor: '#ffffff',
    strokeColor: '#30004a',
    fontsDir: path.join(__dirname, './assets/font/'),
    fontName: '071-上首锐锋体',
    bgMusic: path.join(__dirname, './assets/songs/m2.mp3'),
    output: path.join(__dirname, './output'),
    pexels: {
      // Register at https://www.pexels.com/api/ to get your API key.
      apiKey: 'cuXVffUOm1A5ZSkvdrhJVd4wsgqgelD8EBOsgFNe8koKkGoncRJuE9z2',
    },
    videoScript: `Tư duy làm chủ là gì ?
Ngày xưa, trong một ngôi làng nhỏ, có một chàng trai tên An luôn mơ ước trở thành người giàu có. Nhưng mọi người xung quanh đều bảo rằng anh không thể làm được, vì gia đình anh vốn nghèo khó và không có tài sản gì quý giá.
Một ngày nọ, An tình cờ gặp một nhà hiền triết đang đi ngang qua làng. Nhà hiền triết nghe An bộc bạch về ước mơ của mình, bèn cười và nói: “Ta sẽ kể cho cậu nghe câu chuyện về hạt giống của sự giàu có.”
Nhà hiền triết nói: “Có một vị vua muốn chọn người thừa kế ngôi báu, nên trao cho ba hoàng tử ba hạt giống và nói rằng ai trồng được cây lớn nhất sẽ trở thành người kế vị. Ba hoàng tử mang hạt giống về trồng trong vườn riêng. Hai hoàng tử đầu, để cây nhanh lớn, đã dùng nhiều phân bón và cắt tỉa cây mỗi ngày. Nhưng khi đến mùa thu hoạch, cây của họ yếu ớt và dễ gãy.
Còn hoàng tử thứ ba không chỉ chăm sóc cây mà còn nghiên cứu về loại đất, về cách tưới nước và đảm bảo cây phát triển tự nhiên nhất. Đến ngày quyết định, cây của hoàng tử thứ ba mạnh mẽ, tươi tốt hơn cả.”
Nhà hiền triết quay sang An và nói, “Muốn thành công, đừng chỉ nghĩ đến kết quả nhanh chóng, mà hãy vun đắp từng ngày. Hãy coi mỗi hành động nhỏ là một hạt giống và chăm chỉ nuôi dưỡng nó. Cậu sẽ thấy ‘cây thành công’ của mình sẽ sớm lớn lên, vững vàng.”
An ghi nhớ lời dạy đó, bắt đầu học hỏi từ những việc nhỏ, từng bước tiết kiệm, học cách kinh doanh và kết nối với mọi người. Nhiều năm sau, An trở thành một doanh nhân thành công và được người dân trong làng kính trọng. Anh hiểu rằng, làm chủ không chỉ là thành công nhanh chóng, mà là từng bước gieo hạt và kiên trì nuôi dưỡng chúng mỗi ngày.
  `,
  },
  progress => {
    console.log(progress);
  },
).then(videoPath => {
  console.log(videoPath);
});
