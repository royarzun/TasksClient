import React from 'react';
import Avatar from 'material-ui/Avatar';
import Toggle from 'material-ui/Toggle';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import { deepOrange300 } from 'material-ui/styles/colors';

import {head} from 'lodash';

const style = {
    avatar: { margin: 10 },
    toolbar: { padding: 10 }
};

const UserAvatar = ({user}) => {
    if (user.avatar_url) {
        return (
            <Avatar
                id="img-user-avatar"
                color={deepOrange300}
                style={style.avatar}
                src={user.avatar_url}
                size={30} />);
    } else
        return (
            <Avatar
                id="img-letter-avatar"
                color="black"
                style={style.avatar}
                size={30}
            >
                {head(user.full_name)}
            </Avatar>);
};

const Header = ({user, showingSnoozed, toggleFunc}) => (
    <Toolbar className="title-toolbar">
        <ToolbarGroup firstChild={true} style={style.toolbar}>
            <UserAvatar user={user} />
            <h3>{user.full_name}</h3>
        </ToolbarGroup>
        <ToolbarGroup>
            <Toggle
                label="Snoozed"
                toggled={showingSnoozed}
                onClick={() => toggleFunc()}
            />
        </ToolbarGroup>
    </Toolbar>
);

export default Header;
