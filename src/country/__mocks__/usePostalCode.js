import { POSTAL_CODE } from '../../constants'

export default {
  postalCodeFrom: POSTAL_CODE,
  fields: [
    {
      name: 'postalCode',
      fixedLabel: 'CEP',
      required: true,
      mask: '99999-999',
      regex: '^([\\d]{5})\\-?([\\d]{3})$',
      postalCodeAPI: true,
      forgottenURL: 'http://www.buscacep.correios.com.br/servicos/dnec/index.do',
      size: 'small',
    },
    {
      name: 'street',
      label: 'street',
      required: true,
      size: 'xlarge',
    },
    {
      name: 'number',
      label: 'number',
      required: true,
      size: 'mini',
    },
    {
      name: 'complement',
      label: 'complement',
      size: 'large',
    },
    {
      name: 'neighborhood',
      label: 'neighborhood',
      required: true,
      size: 'large',
    },
    {
      name: 'city',
      label: 'city',
      required: true,
      size: 'large',
    },
    {
      name: 'state',
      label: 'state',
      required: true,
      isUpperCase: true,
      optionsCaption: 'UF',
      options: ['AC', 'AL', 'AM'],
      size: 'mini',
    },
  ],
}
