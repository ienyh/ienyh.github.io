
function position () {
  console.log('click');
  // navigator?.geolocation?.getCurrentPosition?.(res => {
  //   console.log(res);
  //   const posEl = document.querySelector('#position');
  //   posEl.appendChild(res ?? 'null');
  // }, err => {
  //   console.log(err);
  // });
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(res => {
      console.log(res);
    }, console.log)
  } else {
    console.log('no')
  }
}

