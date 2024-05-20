// clickOutside.js
export default {
  bind(el, binding) {
    el.__vueClickOutside__ = (event) => {
      if (!el.contains(event.target)) {
        binding.value(event)
        event.stopPropagation()
      }
    }
    document.body.addEventListener('click', el.__vueClickOutside__)
  },
  unbind(el) {
    document.body.removeEventListener('click', el.__vueClickOutside__)
  },
}
