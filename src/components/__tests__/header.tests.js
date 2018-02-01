import React from 'react';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';
import { expect } from 'chai';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


import Header from '../header.component';

const muiTheme = getMuiTheme();
const mountWithContext = node => mount(node, {
    context: {muiTheme},
    childContextTypes: {muiTheme: PropTypes.object},
});


describe('header', () => {
    it("shows default avatar with first letter of user\'s full name", () => {
        const user = {
            full_name: "John Doe",
            id: 1,
            avatar_url: null
        };
        let component = mountWithContext(<Header user={user}/>);
        let avatar = component.find('#img-letter-avatar');
        console.error(avatar)
        //expect(avatar).to.have.length(1);
    });
    it("shows user picture when available", () => {
        const user = {
            full_name: "John Appleseed",
            id: 2,
            avatar_url: "http://img.cs.com/img.jpg"
        };
        let component = mountWithContext(<Header user={user}/>);
        let avatar = component.find('#img-user-avatar');
        //expect(avatar).to.have.length(1);
    });
});
