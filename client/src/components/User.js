import React, { PureComponent } from 'react';
import { UserPropType } from '../PropTypes/propTypes';
import StatusIcon from '../assets/circle.svg';

class User extends PureComponent {
  render() {
    const { user } = this.props;
    const statusClass = user.isAway ? 'user--away' : 'user--online';
    return (
      <div
        className="users__list__item"
        data-nickname={user.nickname}
      >
        <span className="user__nickname">{user.nickname}</span>
        <figure className={`user__status ${statusClass}`}>
          <StatusIcon color="#FFF" />
        </figure>
      </div>
    );
  }
}

User.propTypes = {
  user: UserPropType.isRequired,
};

export default User;
