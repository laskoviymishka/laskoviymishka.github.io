function componentInit(componentName, direction) {
  var link = document.getElementById(componentName + '-link');
  link.addEventListener('click', (event) => {
    var body = document.getElementsByTagName('body')[0];
    body.className = '';
    body.classList.add('opened');
    body.classList.add(direction);
    var componentsToClose = document.getElementsByClassName('component');
    for (var i = 0; i < componentsToClose.length; i++) {
      var elem = componentsToClose[i];
      elem.classList.remove('open');
    }

    var component = document.getElementById(componentName);
    component.classList.add('open');
  });
}

componentInit('about', 'left');
componentInit('resume', 'right');
componentInit('portfolio', 'left');
componentInit('contact', 'right');
