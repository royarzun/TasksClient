import React from 'react';
import PropTypes from 'prop-types';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import SocialNotificationsPaused from 'material-ui/svg-icons/social/notifications-paused';
import SocialNotificationsOff from 'material-ui/svg-icons/social/notifications-off';


const style = {
    position: 'absolute',
    top: '-10px',
    right: '30px'
};


const slotRounding = (slotToRound) => {
    let slot = Object.assign({}, slotToRound);
    if (slot >= 60) {
        if (slot % 60 === 0) {
            slot /= 60;
            return slot.toFixed(0) + " Hrs";
        } else {
            slot /= 60;
            return slot.toFixed(1) + " Hrs";
        }
    } else return slot + " minutos";
};


const SnoozingButton = ({isSnoozed, snoozedSlots, snoozeTaskCb, unSnoozeTaskCb}) => {

    if (isSnoozed) {
        return (
            <IconButton style={style} tooltip="Unsnooze tarea">
                <SocialNotificationsOff id="unsnooze-button" onClick={() => unSnoozeTaskCb()}/>
            </IconButton>
        );
    } else {
        return (
            <IconMenu
                id="slots-dropdown-menu"
                style={style}
                iconButtonElement={
                    <IconButton tooltip="Snooze tarea">
                        <SocialNotificationsPaused/>
                    </IconButton>
                }
            >
            {snoozedSlots.map((slot, index) =>
                <MenuItem
                    key={index}
                    primaryText={slotRounding(slot)}
                    onClick={() => snoozeTaskCb(slot)}/>)
            }
            </IconMenu>
        );
    }
};


SnoozingButton.propTypes = {
    inSnoozed: PropTypes.bool,
    snoozedSlots: PropTypes.array,
    snoozeTaskCb: PropTypes.func,
    unSnoozeTaskCb: PropTypes.func
};


export default SnoozingButton;
