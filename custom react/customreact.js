const element = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click to visit google",
};

function renderElement(container, element) {
  const domElement = document.createElement(element.type);
  domElement.innerHTML = element.children;

  for (let prop in element.props) {
    console.log(prop);
    domElement.setAttribute(prop, element.props[prop]);
  }

  container.appendChild(domElement);
}

const customContainer = document.getElementById("root");

renderElement(customContainer, element);
