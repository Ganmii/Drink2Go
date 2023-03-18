const toggleClasses = (element, closedClass, openClass) => {
  if (element.classList.contains(closedClass)) {
    element.classList.remove(closedClass);
    element.classList.add(openClass);
  } else {
    element.classList.remove(openClass);
    element.classList.add(closedClass);
  }
};

export {toggleClasses};
