import './app.scss';

import Swipers from './js/swipers';
import insertVideo from './js/insertVideo';
import data from './data/basic.json';

function start() {
    // some js here
    // eslint-disable-next-line
    const swipers = new Swipers();

    const videoBlockId = 'video';

    insertVideo(videoBlockId, data.video.link, data.video.poster, data.video.ptLink, data.video.posterPt);
}

start();
