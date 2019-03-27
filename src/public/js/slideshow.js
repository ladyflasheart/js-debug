
/* global alert $ $JssorSlider$ */

$(document).ready(function () {
  // create slider instance with options set to disabled to start with
  let options = {
    $AutoPlay: 0,
    $Idle: 2000,
    $SlideDuration: 1000,
    $PauseOnHover: 3
  }
  let jssorSliderInstance = new $JssorSlider$('wackyslideshow', options)

  let validPictures = ['cats', 'dogs', 'guineapigs']

  let processGallery = function (data) {
    let newHtml = makeGalleryHtml(data)
    jssorSliderInstance.$ReloadSlides(newHtml)
    jssorSliderInstance.$AutoPlay(1)
  }

  let errorHandler = function () {
    alert('Sorry, an unexpected error occurred!')
  }

  let makeGalleryHtml = function (newImagesData) {
    let html = ''
    let limit = newImagesData.length
    for (let i = 0; i < limit; i++) {
      let photo = newImagesData[i]
      let srcAttribute = 'images/' + photo.src
      html += constructSlideHtml(srcAttribute, photo.alt)
    }
    return html
  }

  let constructSlideHtml = function (src, alt) {
    return '<div><img data-u="image" src="' + src + '" alt="' + alt + '" height="300" width="400">' + '</div>'
  }

  let getPictures = function () {
    let gallerySelect = $('#selectpictures')
    let selectedGallery = gallerySelect.val()
    if (!validPictures.includes(selectedGallery)) {
      alert('Please choose from one of the listed gallery options!')
      return
    }
    $.ajax({
      type: 'GET',
      url: 'api.php',
      data: { 'gallery': selectedGallery },
      dataType: 'json'
    })
      .then(processGallery, errorHandler)
  }

  $('#gobutton').on('click', getPictures)
})
