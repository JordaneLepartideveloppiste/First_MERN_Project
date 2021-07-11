import React, { Component } from 'react';
import AudioPlayer from 'react-modular-audio-player';


    let playlist = [
        {
            src:"./audiofiles/busta_rhymes_-_oh_no.mp3",
            title:"Oh No",
            artist:"Busta Rhymes"
        }
    ]
    let rearrangedPlayer = [
      {
        className: "audio-player",
        style: { marginBottom: "0.3em" },
        innerComponents: [
          { type: "seek", style: { height: "2rem" } },
          { type: "name", style: { height: "2rem" } },
          { type: "time", style: { height: "2rem" } },
          { type: "loop" },
          { type: "rewind", style: { height: "4rem" } },
          { type: "play", style: { height: "18rem" } },
          { type: "forward", style: { height: "4rem" } },
          { type: "volume", style: { height: "3rem" } },
        ],
      },
    ];

class SongPlayer extends Component {
    render(){
        return (
          <div className="player-container">
            <div className="player-content">
              <AudioPlayer
                audioFiles={playlist}
                playerWidth="100%"
                loopPlaylist="true"
                hideSeeking="true"
                rewindIcon="./img/bouton_prev.png"
                rewindHoverIcon="./img/bouton_prev_hover.png"
                playIcon="./img/bouton_play.png"
                pauseIcon="./img/bouton_pause.png"
                pauseHoverIcon="./img/bouton_pause.png"
                playHoverIcon="./img/bouton_play_hover.png"
                forwardIcon="./img/bouton_next.png"
                forwardHoverIcon="./img/bouton_next_hover.png"
                volumeIcon="./img/volume.png"
                volumeEngagedIcon="./img/volume.png"
                muteIcon="./img/mute.png"
                muteEngagedIcon="./img/mute.png"
                loopIcon="./img/loop.png"
                loopEngagedIcon={playlist.length > 1 ? "./img/loop_all.png" : "./img/loop_one.png"}
                iconSize="100%"
              />
              <img
                src="./img/cadre_brush.png"
                alt="cadre"
                id="cadre"
                style={{ width: 120, height: 120 }}
              />
            </div>
          </div>
        );
    }
}

export default SongPlayer;