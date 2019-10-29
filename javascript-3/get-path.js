function getNth (sib) {
  let nth = 1
  while (sib && sib.nodeType === Node.ELEMENT_NODE) {
    sib = sib.previousElementSibling
    if (!sib) break
    nth++
  }
  return nth
}

function getPath (el) {
  if (el.nodeType !== Node.ELEMENT_NODE) return
  const selectors = []
  while (el && el.nodeType === Node.ELEMENT_NODE) {
    let selector = el.nodeName.toLowerCase()
    selector += ':nth-child(' + getNth(el) + ')'
    selectors.unshift(selector)
    el = el.parentElement
  }
  return selectors.join('>')
}