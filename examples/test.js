const { generateVideo, Logger } = require('../dist');
const path = require('path');

Logger.enabled = true;
generateVideo(
  {
    provider: 'gpt4js',
    termsNum: 6,
    subtitleMaxWidth: 35,
    videoClipDuration: 10,
    //ttsProxy: 'http:127.0.0.1:1080',
    voiceName: 'vi-VN-NamMinhNeural',
    bgMusic: path.join(__dirname, './assets/songs/m3.mp3'),
    output: path.join(__dirname, './output'),
    pexels: {
      // Register at https://www.pexels.com/api/ to get your API key.
      apiKey: 'tmLrkxFipcPRz5BCCaKgOT8HOFsMsMWJ7Dyn3fCLZI73BoECbx7NB2Tq',
    },
    /* azureTTSSettings: {
      subscriptionKey: 'Bq5zO8jE5yNCMPiMmht16yUo7IM9oI2BQZ8fvwNCEbUnQDxqpcgjJQQJ99AJACqBBLyXJ3w3AAAYACOGMKuS',
      serviceRegion: 'southeastasia',
    }, */
    fontSize : 9,
    textBottom: 80,
    lineSplit: true,
    removeCache: false,
    videoScript: `Hạ Anh luôn là một cô gái kiên cường, nhưng bên trong cô lại chứa đựng một nỗi sợ rất lớn: sợ thất bại. Từ nhỏ, cô luôn cố gắng làm mọi thứ thật hoàn hảo, vì sợ rằng nếu mình làm sai, người khác sẽ đánh giá và không còn yêu quý mình nữa. Điều này khiến cô luôn cảm thấy mình không đủ tốt, dù thực tế cô đã rất nỗ lực.

Một ngày, Hạ Anh nhận được một lời mời tham gia buổi thuyết trình trong một hội nghị quan trọng. Cô đã chuẩn bị rất kỹ, nhưng mỗi khi nghĩ đến việc đứng trước đám đông, trái tim cô lại đập loạn xạ, bàn tay ướt đẫm mồ hôi. Cô bắt đầu cảm thấy tự ti, tự hỏi liệu mình có thể làm được không.

Tối hôm trước buổi thuyết trình, Hạ Anh ngồi một mình trong phòng, nhìn vào gương. Cô tự hỏi: "Nếu lần này thất bại thì sao? Mình sẽ chẳng bao giờ dám thử lại nữa?" Nhưng rồi, cô chợt nhận ra điều gì đó rất quan trọng. Nỗi sợ không phải là thứ tồn tại bên ngoài cô, mà là thứ được tạo ra bởi chính những suy nghĩ tiêu cực trong đầu mình.

Cô hít thở sâu, rồi tự nhủ với chính mình: "Nếu mình không thử, mình sẽ chẳng bao giờ biết được mình có thể làm được điều gì." Hạ Anh quyết định đối mặt với nỗi sợ, bước ra khỏi phòng và chuẩn bị cho buổi thuyết trình.

Ngày hôm đó, khi đứng trước khán giả, những lời đầu tiên có phần lạc nhịp và run rẩy. Nhưng rồi, cô bắt đầu dần lấy lại bình tĩnh, và tiếp tục chia sẻ câu chuyện của mình một cách tự tin. Sau buổi thuyết trình, cô nhận được những tràng pháo tay nồng nhiệt.

Nhìn lại, Hạ Anh nhận ra một điều quan trọng: nỗi sợ chỉ là thứ cản bước bạn nếu bạn để nó điều khiển. Khi bạn đối diện và bước qua nó, bạn sẽ nhận ra sức mạnh thực sự bên trong mình. Và từ đó, mỗi lần đối mặt với thử thách, Hạ Anh không còn sợ hãi nữa, bởi cô đã học cách chiến thắng nỗi sợ lớn nhất: chính là bản thân mình.

Câu chuyện này nhấn mạnh rằng đôi khi, nỗi sợ lớn nhất của chúng ta là những suy nghĩ tự giới hạn trong chính đầu óc mình, và chỉ khi dám đối diện và vượt qua, chúng ta mới có thể thực sự phát huy tiềm năng của mình.`,
    videoTerms: [
      'Russia Ukraine conflict',
      'Military conflict',
      'Donald Trump',
      'Winter spring conflict',
      'Cold war Europe',
      'Alexander Lukashevich',
      'Tổng thống Biden'
    ],
    localSources : ['D:\\VideoTools\\FFAIVideo\\examples\\localSources'],
    thumbnail : {
      title : {
        text : 'VTV News',
        fontSize : 20,
        position : 'top'
      },
      source : "sources_screenshot" //image_path
    }
  },
  progress => {
    console.log(progress);
  },
);
