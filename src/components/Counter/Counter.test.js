import React from 'react'
import { shallow } from 'enzyme'
import { Counter } from './Counter'

/**
 * What can we do to make the test more readable?
 */
describe('<Counter />', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Counter />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should increase counter by clicking + button', () => {
    const wrapper = shallow(<Counter />)
    wrapper.find('button').last().simulate('click')
    expect(wrapper.find('span').text()).toBe(' 1 ')
  })
  it('should decreate counter by clicking - button', () => {
    const wrapper = shallow(<Counter />)
    wrapper.find('button').first().simulate('click')
    expect(wrapper.find('span').text()).toBe(' -1 ')
  })
})