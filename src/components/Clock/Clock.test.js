import React from 'react'
import { shallow } from 'enzyme'
import { Clock } from './Clock'


describe('<clock />', () => {
  /**
   * What test cases you recommended for this clock component?
   */
  it('renders', () => {
    const wrapper = shallow(<Clock />)
    expect(wrapper).toMatchSnapshot()
  })
})