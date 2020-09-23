import React from 'react'
import { shallow } from 'enzyme'
import { Clock } from './Clock'


describe('<clock />', () => {
  /**
   * 
   * For this exercise you will have to use jest-date-mock
   * It's already in the project so follow the usage instructions
   * https://github.com/hustcc/jest-date-mock#readme
   * 
   */
  it('should display the right time', () => {
    const wrapper = shallow(<Clock />)
    expect(wrapper).toMatchSnapshot()
  })
})