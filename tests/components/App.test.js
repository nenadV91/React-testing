import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import App from 'App';
import Form from 'Form';


describe('App', () => {
	let app;

	beforeEach(() => {
		app = shallow(<App />);
	})

	describe('layout', () => {
		it('has id app', () => {
			expect(app).to.have.id('app');
		});

		it('renders form component', () => {
			expect(app.find(Form)).to.exist;
		});
	});
});