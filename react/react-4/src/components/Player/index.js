import React from 'react';
import Slider from 'rc-slider';

import {
 Container, Current, Volume, Progress, Controls, Time, ProgressSlider 
} from './styles';

import volume from '../../assets/images/volume.svg';
import ShuffleIcon from '../../assets/images/shuffle.svg';
import BackIcon from '../../assets/images/backward.svg';
import PlayIcon from '../../assets/images/play.svg';
import PauseIcon from '../../assets/images/pause.svg';
import ForwardIcon from '../../assets/images/forward.svg';
import RepeatIcon from '../../assets/images/repeat.svg';

const Player = () => (
  <Container>
    <Current>
      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Stone_sour.jpg/220px-Stone_sour.jpg" alt="Album" />
      <div>
        <span>Home Again</span>
        <small>Stone Sour</small>
      </div>
    </Current>

    <Progress>
      <Controls>
        <button>
          <img src={ShuffleIcon} alt="shuffle" />
        </button>
        <button>
          <img src={BackIcon} alt="back" />
        </button>
        <button>
          <img src={PlayIcon} alt="play" />
        </button>
        <button>
          <img src={ForwardIcon} alt="forward" />
        </button>
        <button>
          <img src={RepeatIcon} alt="repeat" />
        </button>
      </Controls>

      <Time>
        <span>0:45</span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: '#404040', borderRadius: 10 }}
            trackStyle={{ background: '#1ed760' }}
            handleStyle={{ border: 0 }}
            value={80}
          />
        </ProgressSlider>
        <span>5:32</span>
      </Time>
    </Progress>

    <Volume>
      <img src={volume} alt="volume" />
      <Slider
        railStyle={{ background: '#404040', borderRadius: 10 }}
        trackStyle={{ background: '#fff' }}
        handleStyle={{ display: 'none' }}
        value={80}
      />
    </Volume>
  </Container>
);

export default Player;
