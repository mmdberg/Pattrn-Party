
const changeTab = (event) => {
  const newTab = event.target.closest('.tab')
  const tabID = $(newTab).attr('id')
  if($(newTab).hasClass('sleep')) {
    const oldTab = $(newTab).siblings('.current')
    oldTab.removeClass('current').addClass('sleep')
    $(newTab).removeClass('sleep').addClass('current')
  }
  const newPanel = `.panel${tabID}`
  console.log($('.panels').find('.show'))
  $('.panels').find('.show').removeClass('show').addClass('hidden')
  const displayedPanel = $('.panels').find(newPanel)
  displayedPanel.removeClass('hidden').addClass('show')
  if($(window).width() <= 525) {
    const gridRow = parseInt(tabID) + 1
    console.log(gridRow);
    displayedPanel.parent().css('grid-row', `${gridRow}`)
  }
}

$('.accordian').click((event) => changeTab(event))