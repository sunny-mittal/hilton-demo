import { mount } from 'enzyme'
import React from 'react'
import 'react-native'

import App from '../../src/components/App'

describe('App', () => {
  it('renders correctly', () => {
    const wrapper = mount(<App />)

    expect(wrapper.text()).toContain('Hilton Demo App')
  })
})
