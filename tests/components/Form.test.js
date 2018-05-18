import React from 'react';
import {expect} from 'chai';
import {mount, shallow, render} from 'enzyme';
import Form from 'Form';

describe('Form', () => {
	describe('layout', () => {
		let component = render(<Form />);

		it('renders form', () => {
			expect(component.is('form')).to.equal(true);
		});
	});


	describe('functionality', () => {
		let component = mount(<Form />);
		let text = 'Test text';

		it('updates state on input change', () => {
			component.find('input').simulate('change', {target: {value: text}});
			expect(component.state().text).to.equal(text);
			expect(component.find('input')).to.have.value(text);
		});

		it('clears state and input value on submit', () => {
			component.simulate('submit');
			expect(component.state().text).to.equal("");
			expect(component.find('input')).to.have.value("");
		});

		it('submits form on button click', () => {
			component.find('input').simulate('change', {target: {value: text}});
			const button = component.find('button').simulate('click')

			expect(component.state().text).to.equal("");
			expect(component.find('input')).to.have.value("");
		});
	});


	describe('methods', () => {
		let component;

		beforeEach(() => {
			component = shallow(<Form />);
			component.setState({text: 'Initial text.'})
		});

		it('test handleChange', () => {
			let newText = 'Update.';
			component.instance().handleChange({target: {value: newText}});
			expect(component.state().text).to.equal(newText);
		});

		it('test handleSubmit', () => {
			component.instance().handleSubmit({preventDefault: () => {}});
			expect(component.state()).to.deep.equal({text: ""})
		});
	});
});
