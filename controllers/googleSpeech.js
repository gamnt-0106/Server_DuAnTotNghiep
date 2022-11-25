

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

    const config = {
        encoding: 'LINEAR16',
        useEnhanced: true,
        model: 'default',
        languageCode: 'en-US',
        enableWordTimeOffsets: true,
        // enableWordConfidence: true,
        // enableAutomaticPunctuation: true,
        audioChannelCount: 2,
    };

    const request = {
        audio: audio,
        config: config,
    };

    const [operation] = await client.longRunningRecognize(request);

    const [response] = await operation.promise();
    response.results.forEach(result => {
        console.log(`Transcription: ${result.alternatives[0].transcript}`);
        result.alternatives[0].words.forEach(wordInfo => {
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

const path = require("path");
const { Storage } = require("@google-cloud/storage");
const Multer = require("multer");
// const fs = require('fs')
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path
var ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath)




const multer = Multer({
    storage: Multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024, // No larger than 5mb, change as you need
    },
});


let projectId = "golden-rite-363502"; // Get this from Google Cloud
let keyFilename = "speech-to-text-key.json"; // Get this from Google Cloud -> Credentials -> Service Accounts
const storage = new Storage({
    projectId,
    keyFilename,
});
const bucket = storage.bucket("vian_english"); // Get this from Google Cloud -> Storage

export const uploadAudio = async (req, res) => {
    console.log("Made it /upload");

    // ffmpeg(fs.createReadStream(req.file))
    //     .toFormat('wav')
    //     .on('error', (err) => {
    //         console.log('An error occurred: ' + err.message);
    //     })
    //     .on('progress', (progress) => {
    //         // console.log(JSON.stringify(progress));
    //         console.log('Processing: ' + progress.targetSize + ' KB converted');
    //     })
    //     .on('end', () => {
    //         console.log('Processing finished !');
    //     })
    //     // .save(newKey);
    //     .save('./hello.mp3');
    //     console.log("newKey", newKey);

    if (req.file) {
        console.log("File found, trying to upload...");
        var stream  = fs.createWriteStream(req.file.originalname);
        var stream2  = fs.createWriteStream(req.file.originalname);
        console.log("stream", stream);
        console.log("stream2", stream2);
        ffmpeg(req.file)
        // .addInput(req.file)
        .input(stream)
        .inputFormat("mp3")
        .audioCodec("pcm_u8") 
        .setStartTime(0)
        .setDuration(32)
        .format("wav")
        .audioChannels("1")
        .audioFrequency(8000)
        .output(stream2);
        // .save(`./${output}.wav`);
        console.log("stream 22", stream);
        console.log("stream2 22", stream2);


        // const blob = bucket.file(req.file.originalname);
        // const blobStream = blob.createWriteStream();
        // blobStream.on("finish", () => {
        //     res.status(200).send("Success");
        //     console.log("Success");
        // });
        // blobStream.end(req.file.buffer);
    } else throw "error with img";


    // try {
    //     if (req.file) {
    //         console.log("File found, trying to upload...");
    //         const blob = bucket.file(track.originalname);
    //         const blobStream = blob.createWriteStream();
    //         blobStream.on("finish", () => {
    //             res.status(200).send("Success");
    //             console.log("Success");
    //         });
    //         blobStream.end(track.buffer);
    //     } else throw "error with img";
    // } catch (error) {
    //     res.status(500).send(error);
    // }
}









