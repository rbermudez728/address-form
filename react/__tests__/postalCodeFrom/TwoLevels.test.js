import React from 'react'
import { shallow } from 'enzyme'
import TwoLevels from '../../postalCodeFrom/TwoLevels'
import useTwoLevels from '../../__mocks__/country/useTwoLevels'
import address from '../../__mocks__/newAddress'
import MockInput from '../../__mocks__/inputs/DefaultInput/Input'

describe('TwoLevels', () => {
  it('render it right', () => {
    const wrapper = shallow(
      <TwoLevels
        Input={MockInput}
        address={address}
        rules={useTwoLevels}
        onChangeAddress={jest.fn()}
      />,
    )

    expect(wrapper.find('SelectLevel')).toHaveLength(1)
    expect(wrapper.find('SelectPostalCode')).toHaveLength(1)
  })
})
