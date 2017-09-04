import React from 'react'
import { shallow, mount } from 'enzyme'
import Navigation from './Navigation'

describe('Navigation component', () => {

  beforeEach(() => {
    const wrapper = mount(<Navigation />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

})
