import React from 'react'
import renderer from 'react-test-renderer'
import PostalCode from './PostalCode'
import { shallow } from 'enzyme'
import usePostalCode from '../country/__mocks__/usePostalCode'
import address from '../__mocks__/newAddress'

describe('Postal Code', () => {
  it('show postal code', () => {
    const tree = renderer
      .create(
        <PostalCode
          address={address}
          rules={usePostalCode}
          onChangeAddress={jest.fn()}
        />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should change the postal code', () => {
    const handleChange = jest.fn()
    const wrapper = shallow(
      <PostalCode
        address={{
          ...address,
          postalCode: '',
        }}
        rules={usePostalCode}
        onChangeAddress={handleChange}
      />
    )

    const event = { target: { value: '2' } }
    wrapper.find('input').simulate('change', event)

    expect(handleChange).toHaveBeenCalledWith({
      ...address,
      postalCode: '2',
    })
  })
})
