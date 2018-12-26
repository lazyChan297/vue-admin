import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'

// register
Vue.component('svg-icon', SvgIcon)

const requireAll = requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)