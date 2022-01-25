import React from 'react'
import { shallow } from 'enzyme'
import App from '../../src/App'

describe('<App />', () => {
  it ('should render the <App /> successfuly', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.length).toBe(1)
  })
})
