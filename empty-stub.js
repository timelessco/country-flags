// `vinext init` aliases the `sharp` specifier to this file, but does not create
// it. workerd cannot load sharp's native binary, and nothing in this app needs
// it at request time, so an empty module is the correct target.
export default {};
