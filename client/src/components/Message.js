import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { MessagePropType } from '../PropTypes/propTypes';
import { youTubeRegex, twitchRegex } from '../utils/regex';

class Message extends PureComponent {
  extractLinkAndId = (str) => {
    const youtubeLinks = str.match(youTubeRegex);
    const twitchLinks = str.match(twitchRegex);
    const platform = youtubeLinks ? 'YouTube' : 'Twitch';

    if (youtubeLinks || twitchLinks) {
      const links = youtubeLinks || twitchLinks;
      return {
        platform,
        link: links[0],
        id: links[1],
      };
    }
    return false;
  }

  render() {
    const { message, nickname, color } = this.props;
    const canBeEmbeded = this.extractLinkAndId(message.body);
    /* eslint-disable no-nested-ternary */
    const classes = message.type === 'admin'
      ? 'message--admin' : message.nickname === nickname
        ? 'message--self' : 'message--user';
    /* eslint-ename no-nested-ternary */
    const videoSrc = canBeEmbeded.platform === 'YouTube'
      ? 'https://www.youtube.com/embed/'
      : 'https://clips.twitch.tv/embed?clip=';
    return (
      <div className={`message ${classes}`}>
        <time className="message__time">{moment(message.timestamp).format('hh:mm:ss')}</time>
        {message.nickname
          && <span className="message__nickname" style={{ color }}>{`${message.nickname}:`}</span>
        }
        <span className="message__body">{message.body.replace(canBeEmbeded.link, '')}</span>
        {canBeEmbeded
          && (
            <iframe
              className="message__iframe"
              src={`${videoSrc}${canBeEmbeded.id}`}
              title={`${canBeEmbeded.platform} video`}
              type="text/html"
              frameBorder="0"
              width="100%"
              height="360"
              allowFullScreen
            />
          )
        }
      </div>
    );
  }
}

Message.propTypes = {
  message: MessagePropType.isRequired,
  nickname: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  nickname: state.nickname,
});

export default connect(mapStateToProps)(Message);
