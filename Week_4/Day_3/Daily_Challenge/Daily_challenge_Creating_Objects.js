class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    watch() {
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}`);
    }
}

const video1 = new Video('Avatar', 'James Cameron', '4:30');
video1.watch();
const video2 = new Video('Matrix', 'Lana Wachowski', '2:30');

// const videos = [
//     ['quiet place', 'john wick', '1:30'],
//     ['star wars', 'george lucas', '2:00'],
//     ['avengers', 'joss whedon', '2:30'],
//     ['interstellar', 'cristopher nolan', '2:45'],
//     ['inception', 'cristopher nolan', '2:15']
// ];

// videos.forEach((video, index, arr) => arr[index] = new Video(video[0], video[1], video[2]));

const videos = [
    { title: 'quiet place', uploader: 'john wick', time: '1:30' },
    { title: 'star wars', uploader: 'george lucas', time: '2:00' },
    { title: 'avengers', uploader: 'joss whedon', time: '2:30' },
    { title: 'interstellar', uploader: 'cristopher nolan', time: '2:45' },
    { title: 'inception', uploader: 'cristopher nolan', time: '2:15' }
];

//videos.forEach((video, index, arr) => arr[index] = new Video(video.title, video.uploader, video.time));

videos.forEach((video, index, arr) => arr[index] = new Video(...Object.values(video)));
console.log(videos);
