/* eslint-disable */

var GRID_REMS = 1.5

/**
 * This function will augment arbitrary block objects not to break baseline text
 * flow if they have height that is not a straight mutiple of baseline grid size.
 * It is primarily meant for images which have arbitrary height that
 * will break the baseline flow of text that follows after them.
 *
 * Imagine you have baseline grid of 16px and image has height of 72px. This
 * would make all the trailing text shifted against baseline by 8px (72 - 16 * 4 = 8).
 *
 * For images, this function will fix their height to a integer rem value (floored).
 *
 * For other objects, This function will add either positive or negative margin
 * to the object whichever is closer to the next baseline grid line.
 *
 * @param {HTMLElement} element
 */
function fixBaseline(element) {
  function _fix() {
    // Get actual size of 1 rem in px
    var remSize = parseFloat(
      getComputedStyle(document.documentElement).fontSize
    )
    var gridUnitSize = remSize * GRID_REMS

    var elemStyle = element.currentStyle || getComputedStyle(element)
    // Actual element height *without* the margin.
    var elemBoundingHeight = element.getBoundingClientRect().height
    // Current margin of the element in px.
    var elemBottomMargin = elemStyle.marginBottom
      ? parseFloat(elemStyle.marginBottom)
      : 0
    // Total height of the element in px.
    var elemHeight = elemBoundingHeight + elemBottomMargin

    var elemHeightInGu = elemHeight / gridUnitSize
    var marginBottomInGu = elemBottomMargin / gridUnitSize

    // Fix images using setting their height to a direct multiple of 1rem
    if (element instanceof HTMLImageElement) {
      if (elemHeightInGu % gridUnitSize !== 0) {
        element.style.height = Math.floor(elemHeightInGu) * GRID_REMS + "rem"
      }
    }
    // Fix other elements by adjusting their margin
    else {
      // Height difference to nearest grid unit.
      var heightDecimalPartInGu = elemHeightInGu % 1
      // Compensated margin.
      var newMarginInGu =
        heightDecimalPartInGu > 0.5
          ? 1 - heightDecimalPartInGu + marginBottomInGu
          : marginBottomInGu - heightDecimalPartInGu
      element.style.marginBottom = newMarginInGu * GRID_REMS + "rem"
    }
  }

  // Wait for image to load.
  if (element instanceof HTMLImageElement) {
    element.complete ? _fix() : (element.onload = _fix)
  } else {
    _fix()
  }
}

var handlers = [
  // {query: '.js-fix-baseline, .typeset h1, .typeset h2, .typeset h3, .typeset h4, .article-typeset h1, .article-typset h2, .article-typset h3, .article-typeset h4', handler: fixBaseline},
]
