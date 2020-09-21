import React from 'react'
import { shallow } from 'enzyme'
import { Clock } from './Clock'


describe('<clock />', () => {
  /**
   * 
   * What is the problem with this test? 
   * What other test we can include?
   * 
   */
  it('renders', () => {
    const wrapper = shallow(<Clock />)
    expect(wrapper).toMatchSnapshot()
  })
})