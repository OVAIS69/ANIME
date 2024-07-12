

const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': 'Ryomen Sukuna',
        'name': 'jjk1.mp4',
        'duration': '48:36',
    },
    {
        'id': 'a2',
        'title': 'For Myself',
        'name': 'jjk1.mp4',
        'duration': '50:10',
    },
    {
        'id': 'a3',
        'title': 'Girl of Steel',
        'name': 'jjk1.mp4',
        'duration': '50:33',
    },

    {
        'id': 'a4',
        'title': 'Curse Womb Must Die',
        'name': 'jjk1.mp4',
        'duration': '43:59',
    },
    {
        'id': 'a5',
        'title': 'Curse Womb Must Die – II',
        'name': 'jjk1.mp4',
        'duration': '49:25',
    },
    {
        'id': 'a6',
        'title': 'After Rain',
        'name': 'jjk1.mp4',
        'duration': '51:33',
    },
    {
        'id': 'a7',
        'title': 'Assault',
        'name': 'jjk1.mp4',
        'duration': '50:29',
    },

    {
        'id': 'a8',
        'title': 'Boredom',
        'name': 'jjk1.mp4',
        'duration': '51:12',
    },
    {
        'id': 'a9',
        'title': 'Small Fry and Reverse Retribution',
        'name': 'jjk1.mp4',
        'duration': '53:38',
    },
    {
        'id': 'a9',
        'title': 'Idle Transfiguration',
        'name': 'jjk1.mp4',
        'duration': '43:38',
    },
    
    {
        'id': 'a3',
        'title': 'Narrow-minded',
        'name': 'jjk1.mp4',
        'duration': '50:33',
    },

    {
        'id': 'a4',
        'title': 'To you, Someday',
        'name': 'jjk1.mp4',
        'duration': '43:59',
    },
    {
        'id': 'a5',
        'title': 'Tomorrow',
        'name': 'jjk1.mp4',
        'duration': '49:25',
    },
    {
        'id': 'a6',
        'title': 'Kyoto Sister School Exchange Event – Group Battle 0',
        'name': 'jjk1.mp4',
        'duration': '51:33',
    },
    {
        'id': 'a7',
        'title': 'Kyoto Sister School Exchange Event – Group Battle 1',
        'name': 'jjk1.mp4',
        'duration': '50:29',
    },

    {
        'id': 'a8',
        'title': 'Kyoto Sister School Exchange Event – Group Battle 2',
        'name': 'jjk1.mp4',
        'duration': '51:12',
    },
    {
        'id': 'a9',
        'title': 'Kyoto Sister School Exchange Event – Group Battle 3',
        'name': 'jjk1.mp4',
        'duration': '53:38',
    },
    {
        'id': 'a9',
        'title': 'Sage',
        'name': 'jjk1.mp4',
        'duration': '43:38',
    },
    {
        'id': 'a2',
        'title': 'Black Flassh',
        'name': 'jjk1.mp4',
        'duration': '50:10',
    },
    {
        'id': 'a7',
        'title': 'Nonstandard',
        'name': 'jjk1.mp4',
        'duration': '50:29',
    },

    {
        'id': 'a8',
        'title': 'Jujutsu Koshien',
        'name': 'jjk1.mp4',
        'duration': '51:12',
    },
    {
        'id': 'a9',
        'title': 'The Origin of Blind Obedience',
        'name': 'jjk1.mp4',
        'duration': '53:38',
    }, 
    {
        'id': 'a9',
        'title': 'The Origin of Blind Obedience 2',
        'name': 'jjk1.mp4',
        'duration': '53:38',
    },
    {
        'id': 'a9',
        'title': 'Accomplices',
        'name': 'jjk1.mp4',
        'duration': '43:38',
    },

];

data.forEach((video, i) => {
    let video_element = `
                <div class="video" data-id="${video.id}">
                    <img src="images/play.svg" alt="">
                    <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
                    <h3 class="title">${video.title}</h3>
                    <p class="time">${video.duration}</p>
                </div>
    `;
    video_playlist.innerHTML += video_element;
})

let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');
videos[0].querySelector('img').src = 'images/pause.svg';

videos.forEach(selected_video => {
    selected_video.onclick = () => {

        for (all_videos of videos) {
            all_videos.classList.remove('active');
            all_videos.querySelector('img').src = 'images/play.svg';

        }

        selected_video.classList.add('active');
        selected_video.querySelector('img').src = 'images/pause.svg';

        let match_video = data.find(video => video.id == selected_video.dataset.id);
        main_video.src = 'videos/' + match_video.name;
        main_video_title.innerHTML = match_video.title;
    }
});
window.addEventListener('scroll', function() {
    var nav = document.querySelector('.menu');
    if (window.scrollY > 0) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});
