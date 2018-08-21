import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import PostalCodeGetter from '../PostalCodeGetter'
import address from '../__mocks__/newAddress'
import usePostalCode from '../__mocks__/country/usePostalCode'
import useOneLevel from '../__mocks__/country/useOneLevel'
import useTwoLevels from '../__mocks__/country/useTwoLevels'
import useThreeLevels from '../__mocks__/country/useThreeLevels'

describe('PostalCodeGetter', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render(
      <PostalCodeGetter
        address={address}
        rules={usePostalCode}
        onChangeAddress={jest.fn()}
      />,
      div,
    )
  })

  it('render PostalCode', () => {
    const handleChange = jest.fn()

    const wrapper = shallow(
      <PostalCodeGetter
        address={address}
        rules={usePostalCode}
        onChangeAddress={handleChange}
      />,
    )
      .dive()
      .dive()

    expect(wrapper.find('InputFieldContainer')).toHaveLength(1)
  })

  it('render OneLevel', () => {
    const handleChange = jest.fn()

    const wrapper = shallow(
      <PostalCodeGetter
        address={address}
        rules={useOneLevel}
        onChangeAddress={handleChange}
      />,
    )
      .dive()
      .dive()

    expect(wrapper.find('OneLevel')).toHaveLength(1)
  })

  it('render TwoLevels', () => {
    const handleChange = jest.fn()

    const wrapper = shallow(
      <PostalCodeGetter
        address={address}
        rules={useTwoLevels}
        onChangeAddress={handleChange}
      />,
    )
      .dive()
      .dive()

    expect(wrapper.find('TwoLevels')).toHaveLength(1)
  })

  it('render ThreeLevels', () => {
    const handleChange = jest.fn()

    const wrapper = shallow(
      <PostalCodeGetter
        address={address}
        rules={useThreeLevels}
        onChangeAddress={handleChange}
      />,
    )
      .dive()
      .dive()

    expect(wrapper.find('ThreeLevels')).toHaveLength(1)
  })
})
