
const changeTab = (event) => {
  console.log('hi');
  const newTab = event.target.closest('.tab')
  const tabID = $(newTab).attr('id')
  if($(newTab).hasClass('sleep')) {
    const oldTab = $(newTab).siblings('.current')
    oldTab.removeClass('current').addClass('sleep')
    $(newTab).removeClass('sleep').addClass('current')
  }
  const newPanel = `.panel${tabID}`
  $('.panels').find('.show').removeClass('show').addClass('hidden')
  $('.panels').find(newPanel).removeClass('hidden').addClass('show')
}

$('.tabs').click((event) => changeTab(event))