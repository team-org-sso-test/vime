import React from 'react';
import { Player, Video, Ui, ClickToPlay, Spinner, Poster } from '@vime/react';
import { TapSidesToSeek } from './TapSidesToSeek';

const ClickPlayer = () => (
  <Player>
    <Video
      crossOrigin=""
      poster="https://files.vidstack.io/agent-327/poster.png"
    >
      <source
        data-src="https://files.vidstack.io/agent-327/720p.mp4"
        type="video/mp4"
      />
      <track
        default
        kind="subtitles"
        src="https://files.vidstack.io/agent-327/subs/english.vtt"
        srcLang="en"
        label="English"
      />
    </Video>

    <Ui>
      <ClickToPlay />
      <Spinner />
      <Poster />
      <TapSidesToSeek />
    </Ui>
  </Player>
);

export default ClickPlayer;
