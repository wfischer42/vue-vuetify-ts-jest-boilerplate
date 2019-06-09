import { shallowMount } from '@vue/test-utils'
import MyButton from '@/components/MyButton/index.vue'
import '@/plugins/vuetify'

describe('MyButton.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Button Text'
    const wrapper = shallowMount(MyButton, {
      slots: {
        default: msg,
      },
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
