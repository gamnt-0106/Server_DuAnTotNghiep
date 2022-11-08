const speech = require('@google-cloud/speech');
const fs = require('fs');
// Instantiates a client
const client = new speech.SpeechClient();



export const transcribeSpeech = async (req, res) => {



    // The path to the remote LINEAR16 file
    // const gcsUri = 'gs://cloud-samples-data/speech/brooklyn_bridge.raw';
    // const gcsUri = 'gs://vian_english/audio-files/play_sound.mp3';
    // const gcsUri = 'gs://vian_english/test/what-are-you-doing-22344.mp3';
        // const gcsUri = 'gs://vian_english/test/what-are-you-doing-22344.wav';
        const gcsUri = 'gs://vian_english/audio-files/Luyện-nói-Tiếng-Anh-qua-phim__Harry-Potter-và-hòn-đá-phù-thủy.wav';
        

    const audio = {
        uri: gcsUri,
    };

    // The audio file's encoding, sample rate in hertz, and BCP-47 language code
    const config = {
        encoding: 'LINEAR16',
        // encoding: 'MP3',
        // sampleRateHertz: 16000,
        // sampleRateHertz: 24000,
        // sampleRateHertz:  48000,
        useEnhanced: true,
        model: 'phone_call',
        languageCode: 'en-US',
        enableWordTimeOffsets: true,
        // enableWordConfidence: true,
        // enableAutomaticPunctuation: true,
        audioChannelCount: 2,
        // enableSeparateRecognitionPerChannel: true,
    };

    const request = {
        audio: audio,
        config: config,
    };

    // Detects speech in the audio file
    // const [response] = await client.recognize(request);
    // const transcription = response.results
    //     .map(result => result.alternatives[0].transcript)
    //     .join('\n');

    // const flag = response.results
    // const flag2 = response
    // const flag3 = response
    // console.log(`flag2`, flag2);
    // console.log(`flag: ${flag}`);
    // console.log(`Transcription: ${transcription}`);
    // res.json({ flag })




    //---------------
    // const filename = 'gs://cloud-samples-data/speech/brooklyn_bridge.raw';
    // // Số lượng kênh có trong âm thanh của bạn. Nếu không đúng sẽ raise error
    // const audioChannelCount = 2;
    // // Khai báo encoding
    // const encoding = 'FLAC';
    // // Tỉ lệ mẫu tính bằng Hertz của audio, nêú không đúng sẽ raise error
    // const sampleRateHertz = 44100;
    // // Khai báo code ngôn ngữ cần nhận dạng
    // const languageCode = 'en-US';

    // const config = {
    //     audioChannelCount: audioChannelCount,
    //     encoding: encoding,
    //     sampleRateHertz: sampleRateHertz,
    //     languageCode: languageCode,
    // };
    // const audio = {
    //     content: fs.readFileSync(filename).toString('base64'),
    // };

    // const request = {
    //     config: config,
    //     audio: audio,
    // };

    // // Phát hiện giọng nói trong audio
    // const [response] = await client.recognize(request);
    // const transcription = response.results
    //     .map(result => result.alternatives[0].transcript)
    //     .join('\n');
    // console.log('Transcription: ', transcription);



    // try {
    //     const audio = {
    //         uri: gcsUri,
    //     };

    //     // The audio file's encoding, sample rate in hertz, and BCP-47 language code
    //     const config = {
    //         encoding: 'LINEAR16',
    //         sampleRateHertz: 16000,
    //         languageCode: 'en-US',
    //     };

    //     const request = {
    //         audio: audio,
    //         config: config,
    //     };

    //     // Detects speech in the audio file
    //     const [response] = await client.recognize(request);
    //     const transcription = response.results
    //         .map(result => result.alternatives[0].transcript)
    //         .join('\n');

    //     const flag = response.results
    //     const flag2 = response
    //     const flag3 = response
    //     console.log(`flag2`, flag2);
    //     console.log(`flag: ${flag}`);
    //     console.log(`Transcription: ${transcription}`);
    //     res.json({ transcription })
    // } catch (error) {
    //     res.status(400).json({ message: "Gặp lỗi khi đang chuyển âm thanh sang text" })
    // }


    // const [response] = await client.recognize(request);
    // const transcription = response.results
    //     .map(result => result.alternatives[0].transcript)
    //     .join('\n');
    // const confidence = response.results
    //     .map(result => result.alternatives[0].confidence)
    //     .join('\n');
    // console.log(`Transcription: ${transcription} \n Confidence: ${confidence}`);

    // console.log('Word-Level-Confidence:');
    // const words = response.results.map(result => result.alternatives[0]);
    // words[0].words.forEach(a => {
    //     console.log(` word: ${a.word}, confidence: ${a.confidence}`);
    // });
    // res.json({ response })

    // Detects speech in the audio file. This creates a recognition job that you
    // can wait for now, or get its result later.
    const [operation] = await client.longRunningRecognize(request);

    // Get a Promise representation of the final result of the job
    const [response] = await operation.promise();
    response.results.forEach(result => {
        console.log(`Transcription: ${result.alternatives[0].transcript}`);
        result.alternatives[0].words.forEach(wordInfo => {
            // NOTE: If you have a time offset exceeding 2^32 seconds, use the
            // wordInfo.{x}Time.seconds.high to calculate seconds.
            const startSecs =
                `${wordInfo.startTime.seconds}` +
                '.' +
                wordInfo.startTime.nanos / 100000000;
            const endSecs =
                `${wordInfo.endTime.seconds}` +
                '.' +
                wordInfo.endTime.nanos / 100000000;
            console.log(`Word: ${wordInfo.word}`);
            console.log(`\t ${startSecs} secs - ${endSecs} secs`);
        });
    });
    res.json({ response })
}

