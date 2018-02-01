import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import SnoozingButton from '../snoozing-button.component';


describe('snoozing-button', () => {
    it('show unsnooze button when there is a system snooze', () => {
        let component = shallow(
                <SnoozingButton
                    isSnoozed={true}
                    snoozedSlots={[]}
                    snoozeTaskCb={() => {}}
                    unSnoozeTaskCb={() => {}}
                />
        );
        expect(component.find('#unsnooze-button')).to.have.length(1);
    });
    it('do not show unsnooze button when there is not a system snooze', () => {
        let component = shallow(
            <SnoozingButton
                isSnoozed={false}
                snoozedSlots={[]}
                snoozeTaskCb={() => {}}
                unSnoozeTaskCb={() => {}}
            />
        );
        expect(component.find('#unsnooze-button')).to.have.length(0);
    });
    it('shows snoozing slots properly', () => {
        let component = shallow(
            <SnoozingButton
                isSnoozed={false}
                snoozedSlots={[10, 90, 30]}
                snoozeTaskCb={() => {}}
                unSnoozeTaskCb={() => {}}
            />
        );
        let menu = component.find('#slots-dropdown-menu');
        expect(menu).to.have.length(1);
    });
});
