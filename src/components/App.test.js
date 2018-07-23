import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
    const app = shallow(<App />);

    it('renders the flashcardpro title', () => {
        expect(app.find('h2').text()).toEqual('Flashcard Pro');
    });

    it('renders the stacklist', () => {
        console.log(app.debug());
        expect(app.find('Connect(Stacklist)').exists()).toBe(true);
    });

    it('renders a link to create new stacks', () => {
        expect(app.find('Link h4').text()).toEqual('Create a new stack');
    });
})