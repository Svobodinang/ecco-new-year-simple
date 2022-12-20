import './app.scss';

import Swipers from './js/swipers';
import insertVideo from './js/insertVideo';
import data from './data/basic.json';
import processInputs from './js/processInputs';

function start() {
    // some js here
    // eslint-disable-next-line
    const swipers = new Swipers();

    const videoBlockId = 'video';

    insertVideo(videoBlockId, data.video.link, data.video.poster, data.video.ptLink, data.video.posterPt);

    processInputs();
}

start();
