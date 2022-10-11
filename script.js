const element = React.createElement(
  'h1',
  {
    className: 'title',
    onClick: () => {console.log('clicked');},
    style: { fontFamily: 'sans-serif', color: 'rgb(255, 100, 100)'}  
  },
  'Hello World!'
);

ReactDOM.render(
  element,
  document.getElementById('root')
);

ReactDOM.render(
  element,
  document.getElementById('root2')
);

document.querySelectorAll('.button')
.forEach(domNode => {
  const messageId = parseInt(domNode.dataset.messageId);
  ReactDOM.render(
    React.createElement(
      'button',
      {
        onClick: () => {
          console.log(`liked message: ${messageId}`);}
      },
        'Like'
    ),
    domNode
  )
});