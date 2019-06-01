import React from 'react';
import Slider from 'rc-slider';
import Sound from 'react-sound';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlayerActions } from '../../store/ducks/player';

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

const Player = ({
 player: { currentSong, status }, play, pause, next, prev, playing, duration, position
}) => (
  <Container>
    {
      !!currentSong && (
        <Sound
          url={currentSong.file}
          playStatus={status}
          onFinishedPlaying={next}
          onPlaying={playing}
          onLoad={() => {}}
        />
      )
    }

    <Current>
      {
        !!currentSong && (
          <>
            <img src={currentSong.thumbnail} alt={currentSong.title} />
            <div>
              <span>{currentSong.title}</span>
              <small>{currentSong.author}</small>
            </div>
          </>
        )
      }


    </Current>

    <Progress>
      <Controls>
        <button>
          <img src={ShuffleIcon} alt="shuffle" />
        </button>
        <button type="button" onClick={prev}>
          <img src={BackIcon} alt="back" />
        </button>
        {
          status === Sound.status.PLAYING ? (
            <button type="button" onClick={pause}>
              <img src={PauseIcon} alt="pause" />
            </button>
          ) : (
            <button type="button" onClick={play}>
              <img src={PlayIcon} alt="play" />
            </button>
          )
        }
        <button type="button" onClick={next}>
          <img src={ForwardIcon} alt="forward" />
        </button>
        <button>
          <img src={RepeatIcon} alt="repeat" />
        </button>
      </Controls>

      <Time>
        <span>{position}</span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: '#404040', borderRadius: 10 }}
            trackStyle={{ background: '#1ed760' }}
            handleStyle={{ border: 0 }}
            value={80}
          />
        </ProgressSlider>
        <span>{duration}</span>
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

const msToTime = (duration) => {
  let seconds = parseInt((duration / 1000) % 60, 10);
  const minutes = parseInt(((duration / (1000 * 60)) % 60), 10);

  seconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${minutes}:${seconds}`;
};

const mapStateToProps = ({ player }) => ({
  player,
  position: msToTime(player.position),
  duration: msToTime(player.duration)
});

const mapDispatchToProps = dispatch => bindActionCreators(PlayerActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Player);
