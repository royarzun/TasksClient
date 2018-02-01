import React from 'react';
import PropTypes from 'prop-types';

import Toggle from 'material-ui/Toggle';

const style = {
    float: 'right',
    width: 150
};

const SnoozingToggle = ({showSnoozed, toggleCb}) => (
    <Toggle
        className="toggle-snooze"
        onClick={() => toggleCb()}
        toggled={showSnoozed}
        label={"Todas las tareas"}
        style={style}
    />
);

SnoozingToggle.propTypes = {
    showSnoozed: PropTypes.bool,
    toggleCb: PropTypes.func
};


export default SnoozingToggle;
