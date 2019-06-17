(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,function(e,t,n){},,,,,,,,function(e,t,n){e.exports=n(20)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(4),s=n.n(a),c=n(5),l=n(6),m=n(8),i=n(7),p=n(9);n(17);var d=function(){return r.a.createElement("div",{className:"header-container"},r.a.createElement("h1",{className:"header"},"React Cheat Sheet ",r.a.createElement("span",{className:"small"},"v16")))},u=n(1),h=n(10),g=function(e,t){return e.map(function(e){return Object(h.a)({},e,t)})},f=g([{name:"Children.map",example:"React.Children.map(this.props.children, (child, i) => {\n      return child;\n  })",reference:"https://reactjs.org/docs/react-api.html#reactchildrenmap"},{name:"Children.forEach",example:"React.Children.forEach(this.props.children, (child, i) => {\n    console.log(child + ' at index: ' + i);\n  })",reference:"https://reactjs.org/docs/react-api.html#reactchildrenforeach"},{name:"Children.count",example:"React.Children.count(this.props.children);",reference:"https://reactjs.org/docs/react-api.html#reactchildrencount"},{name:"Children.only",example:"React.Children.only(this.props.children);",reference:"https://reactjs.org/docs/react-api.html#reactchildrenonly"},{name:"Children.toArray",example:"React.Children.toArray(this.props.children)",reference:"https://reactjs.org/docs/react-api.html#reactchildrentoarray"}],{module:"react",category:"Children"}),C=g([{name:"render",example:"render() {\n    return <div />;\n  }",reference:"https://reactjs.org/docs/react-component.html#render"},{name:"constructor",example:"constructor(props) {\n    super(props);\n    this.state = {\n      list: props.initialList\n    };\n  }\n  \n  // where props aren't used in constructor\n  \n  constructor() {\n    super();\n    this.state = {\n      list: []\n    };\n  }",reference:"https://reactjs.org/docs/react-component.html#constructor"},{name:"componentWillMount",example:"componentWillMount() {\n    // invoked once.\n    // fires before initial 'render'\n  }",reference:"https://reactjs.org/docs/react-component.html#componentwillmount"},{name:"componentDidMount",example:"componentDidMount() {\n    // good for AJAX: fetch, ajax, or subscriptions.\n  \n    // invoked once (client-side only).\n    // fires before initial 'render'\n  }",reference:"https://reactjs.org/docs/react-component.html#componentdidmount"},{name:"componentWillReceiveProps",example:"componentWillReceiveProps(nextProps) {\n    // invoked every time component recieves new props.\n    // does not before initial 'render'\n  }",reference:"https://reactjs.org/docs/react-component.html#componentwillreceiveprops"},{name:"shouldComponentUpdate",example:"shouldComponentUpdate(nextProps, nextState) {\n    // invoked before every update (new props or state).\n    // does not fire before initial 'render'.\n  }",reference:"https://reactjs.org/docs/react-component.html#shouldcomponentupdate"},{name:"componentWillUpdate",example:"componentWillUpdate(nextProps, nextState) {\n    // invoked immediately before update (new props or state).\n    // does not fire before initial 'render'.\n  \n    // (see componentWillReceiveProps if you need to call setState)\n  }",reference:"https://reactjs.org/docs/react-component.html#componentwillupdate",notSupported:"this.setState"},{name:"componentDidUpdate",example:"componentDidUpdate(prevProps, prevState) {\n    // invoked immediately after DOM updates\n    // does not fire after initial 'render'\n  }",reference:"https://reactjs.org/docs/react-component.html#componentdidupdate"},{name:"componentWillUnmount",example:"componentWillUnmount() {\n    // invoked immediately before a component is unmounted.\n  }",reference:"https://reactjs.org/docs/react-component.html#componentwillunmount"},{name:"setState (function)",example:"// good for state transitions\n  \n  this.setState((prevState, props) => {\n    return {count: prevState.count + props.step};\n  });",reference:"https://reactjs.org/docs/react-component.html#setstate"},{name:"setState (object)",example:"// good for static values\n  \n  this.setState({mykey: 'my new value'});",reference:"https://reactjs.org/docs/react-component.html#setstate"},{name:"setState (optional callback)",example:"// fires after setState\n  // prefer componentDidUpdate\n  \n  this.setState(\n    (prevState, props) => ({ count: prevState.count + props.step }),\n    () => console.log(this.state.count)\n  );",reference:"https://reactjs.org/docs/react-component.html#setstate"},{name:"forceUpdate",example:"// forces a re-render; AVOID if possible\n  \n  this.forceUpdate();",reference:"https://reactjs.org/docs/react-component.html#forceupdate"},{name:"displayName",example:'displayName: "MyComponent"',reference:"https://reactjs.org/docs/react-component.html#defaultprops"},{name:"defaultProps",example:"class Greeting extends React.Component {\n        render() {\n          return <h1>Hi {this.props.name}</h1>\n        }\n      }\n      \n      CustomButton.defaultProps = {\n        name: 'guest'\n      };",reference:"https://reactjs.org/docs/react-component.html#defaultprops"}],{module:"react",category:"Component"}),y=g([{name:"Context (example)",example:'// requires \'prop-types\' library\n  \n  import { string } from "prop-types";\n  \n  class Cowboy extends React.Component {\n    childContextTypes: {\n      salutation: string\n    }\n  \n    getChildContext() {\n      return { salutation: "Howdy" };\n    }\n  \n    render() {\n      return React.Children.only(this.props.children);\n    }\n  }\n  \n  const Greeting = (props, context) =>\n    <div>{this.context.salutation} {this.props.name}.</div>\n  \n  Greeting.contextTypes = {\n    salutation: PropTypes.string\n  }\n  \n  // <Greeting name="Michael" />\n  // => Michael.\n  \n  // <Cowboy><Greeting name="Michael" /></Cowboy>\n  // => Howdy Michael.\n  ',reference:"https://facebook.github.io/react/docs/context.html"},{name:"contextTypes",example:"// add to the context-aware component\n  // requires 'prop-types' library\n  \n  contextTypes: {\n    color: PropTypes.string\n  },",reference:"https://facebook.github.io/react/docs/context.html"},{name:"childContextTypes",example:"// add to the context provider\n  // requires 'prop-types' library\n  \n  childContextTypes: {\n    color: PropTypes.string\n  },",reference:"https://facebook.github.io/react/docs/context.html"},{name:"getChildContext",example:'// add to the context provider\n  \n  getChildContext() {\n    return {color: "purple"};\n  }',reference:"https://facebook.github.io/react/docs/context.html"}],{module:"react",category:"Context"}),v=(n(18),[{name:"componentWillMount",setStateTriggersUpdate:"no",calledFor:"initial render()",useFor:".",receivesContext:"no"},{name:"componentDidMount",setStateTriggersUpdate:"yes",calledFor:"initial render()",useFor:"async setup, refs, DOM manipulation",receivesContext:"no"},{name:"componentWillReceiveProps",setStateTriggersUpdate:"yes",calledFor:"new props",useFor:"respond to props before update",receivesContext:"yes"},{name:"shouldComponentUpdate",setStateTriggersUpdate:"yes",calledFor:"new props/state",useFor:"performance. return false to skip update",receivesContext:"yes"},{name:"componentWillUpdate",setStateTriggersUpdate:"n/a",calledFor:"new props/state",useFor:"preparation before update",receivesContext:"yes"},{name:"componentDidUpdate",setStateTriggersUpdate:"yes",calledFor:"new props/state",useFor:"DOM manipulation after update",receivesContext:"no"},{name:"componentWillUnmount",setStateTriggersUpdate:"n/a",calledFor:"unmounting",useFor:"cleanup of componentDidMount setup",receivesContext:"no"}]),x=g([{name:"Lifecycle methods",chart:r.a.createElement(function(){return r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null," name "),r.a.createElement("th",null," called for "),r.a.createElement("th",null," receives context "),r.a.createElement("th",null," setState() triggers an update "))),r.a.createElement("tbody",null,v.map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",{"data-label":"name"},e.name),r.a.createElement("td",{"data-label":"called for"},e.calledFor),r.a.createElement("td",{"data-label":"receives context"},e.receivesContext),r.a.createElement("td",{"data-label":"setState() triggers an update"},e.setStateTriggersUpdate))})))},null),example:""},{name:"ref (class component)",example:"class AutoFocusTextInput extends React.Component {\n  componentDidMount() {\n    this.textInput.focus();\n  }\n\n  render() {\n    return (\n      <CustomTextInput\n        ref={(input) => { this.textInput = input; }} />\n    );\n  }\n}",reference:"https://facebook.github.io/react/docs/refs-and-the-dom.html#adding-a-ref-to-a-class-component"},{name:"ref (functional component)",example:'function CustomTextInput(props) {\n  let textInput = null;\n\n  function handleClick() {\n    textInput.focus();\n  }\n\n  return (\n    <div>\n      <input\n        type="text"\n        ref={(input) => { textInput = input; }} />\n      <input\n        type="button"\n        value="Focus the text input"\n        onClick={handleClick}\n      />\n    </div>\n  );\n}',reference:"https://facebook.github.io/react/docs/refs-and-the-dom.html#refs-and-functional-components"},{name:"functional component",example:"const Greeting = props => <div>Hello {props.name}</div>;",reference:"https://facebook.github.io/react/docs/reusable-components.html#stateless-functions",module:"react"},{name:"functional component (with context)",example:'import { string } from "prop-types";\n\nconst Greeting = (props, context) => (\n  <div>{context.salutation} {props.name}</div>\n);\n\nGreeting.contextTypes = { salutation: string };',reference:"https://facebook.github.io/react/docs/reusable-components.html#stateless-functions",module:"react"}],{category:"misc"}),b=g([{name:"render",example:'import { render } from "react-dom";\n  \n  render(\n    <MyComponent />,\n    document.getElementById("component-root"),\n    () => console.log("MyComponent mounted.")\n  );',reference:"https://reactjs.org/docs/react-dom.html#render",module:"react-dom"},{name:"hydrate",example:'import { hydrate } from "react-dom";\n  \n  hydrate(\n    <MyComponent />,\n    document.getElementById("component-root"),\n    () => console.log("MyComponent hydrated.")\n  );',reference:"https://reactjs.org/docs/react-dom.html#hydrate",module:"react-dom"},{name:"unmountComponentAtNode",example:"import { unmountComponentAtNode } from \"react-dom\";\n  \n  unmountComponentAtNode(document.getElementById('MyComponent'))",reference:"https://reactjs.org/docs/react-dom.html#unmountcomponentatnode",module:"react-dom"},{name:"findDOMNode",example:'import { findDOMNode } from "react-dom";\n  \n  findDOMNode(componentRef);',reference:"https://reactjs.org/docs/react-dom.html#finddomnode",module:"react-dom"},{name:"createPortal",example:'import { createPortal } from "react-dom";\n  \n  class MyPortalComponent extends React.Component {\n    render() {\n  \n      return createPortal(\n        this.props.children,\n        document.getElementById("portal-element"),\n      );\n    }\n  }',reference:"https://reactjs.org/docs/react-dom.html#createportal",module:"react-dom"},{name:"renderToString",example:'import { renderToString } from "react-dom/server";\n  ReactDOMServer.renderToString(<MyComponent />);',reference:"https://reactjs.org/docs/react-dom-server.html#rendertostring",module:"react-dom/server"},{name:"renderToStaticMarkup",example:'import {renderToStaticMarkup} from "react-dom/server";\n  renderToStaticMarkup(<MyComponent />);',reference:"https://reactjs.org/docs/react-dom-server.html#rendertostaticmarkup",module:"react-dom/server"},{name:"renderToNodeStream",example:'import { renderToNodeStream } from "react-dom/server";\n  renderToNodeStream(<MyComponent />);',reference:"https://reactjs.org/docs/react-dom-server.html#rendertonodestream",module:"react-dom/server"},{name:"renderToStaticNodeStream",example:'import { renderToStaticNodeStream } from "react-dom/server";\n  renderToStaticNodeStream(<MyComponent />);',reference:"https://reactjs.org/docs/react-dom-server.html#rendertostaticnodestream",module:"react-dom/server"}],{category:"react-dom"}),T=g([{name:"Simulate (basic)",example:"var subject = TestUtils.renderIntoDocument(\n    <div onClick={handleClick} />\n  );\n  \n  TestUtils.Simulate.click(subject);",reference:"https://facebook.github.io/react/docs/test-utils.html#simulate",playground:"http://jsbin.com/foxini/edit?html,js,console"},{name:"Simulate (with data)",example:'function handleChange (event) {\n    console.log(\'A change was simulated with key: \' + event.key);\n  }\n  \n  var subject = TestUtils.renderIntoDocument(\n    <input type="text" onChange={handleChange} />\n  );\n  \n  TestUtils.Simulate.change(subject, { key: "Enter" });',reference:"https://facebook.github.io/react/docs/test-utils.html#simulate",playground:"http://jsbin.com/wiqile/edit?html,js,console"},{name:"renderIntoDocument",example:"var componentTree = TestUtils.renderIntoDocument(<div><span /></div>);\n  \n  console.log('You mounted a component tree with a ' + componentTree.tagName + ' at the root!');",reference:"https://facebook.github.io/react/docs/test-utils.html#renderintodocument",playground:"http://jsbin.com/buzigo/edit?html,js,console"},{name:"mockComponent",example:"// no example",reference:"https://facebook.github.io/react/docs/test-utils.html#mockcomponent"},{name:"isElement",example:"expect(TestUtils.isElement(<div />)).toBe(true);",reference:"https://facebook.github.io/react/docs/test-utils.html#iselement",playground:"http://jsbin.com/jiyune/edit?html,js,console"},{name:"isElementOfType",example:"var MyComponent = React.createClass({\n    render () {\n      return <div />;\n    }\n  });\n  \n  expect(\n    TestUtils.isElementOfType(<MyComponent />, MyComponent)\n  ).toBe(true);",reference:"https://facebook.github.io/react/docs/test-utils.html#iselementoftype",playground:"http://jsbin.com/pasohi/edit?html,js,console"},{name:"isDOMComponent",example:"var subject = TestUtils.renderIntoDocument(<div />);\n  \n  expect(\n    TestUtils.isDOMComponent(subject)\n  ).toBe(true);",reference:"https://facebook.github.io/react/docs/test-utils.html#isdomcomponent",playground:"http://jsbin.com/fadoka/edit?html,js,console"},{name:"isCompositeComponent",example:"var subject = TestUtils.renderIntoDocument(\n    <CompositeComponent />\n  );\n  \n  expect(\n    TestUtils.isCompositeComponent(subject)\n  ).toBe(true);",reference:"https://facebook.github.io/react/docs/test-utils.html#iscompositecomponent",playground:"http://jsbin.com/vocofa/edit?html,js,console"},{name:"isCompositeComponentWithType",example:"var CompositeComponent = React.createClass({\n    render () {\n      return <div />;\n    }\n  });\n  \n  var subject = TestUtils.renderIntoDocument(\n    <CompositeComponent />\n  );\n  \n  expect(\n    TestUtils.isCompositeComponentWithType(\n      subject,\n      CompositeComponent\n    )\n  ).toBe(true);",reference:"https://facebook.github.io/react/docs/test-utils.html#iscompositecomponentwithtype",playground:"http://jsbin.com/kegoqe/edit?html,js,console"},{name:"findAllInRenderedTree",example:"var CompositeComponent = React.createClass({\n    render () {\n      return <div><div /></div>;\n    }\n  });\n  \n  var componentTree = TestUtils.renderIntoDocument(\n    <CompositeComponent />\n  );\n  \n  var allDivs = TestUtils.findAllInRenderedTree(\n    componentTree,\n    (c) => c.tagName === 'DIV'\n  )\n  \n  expect(allDivs).toBeAn('array');\n  expect(allDivs.length).toBe(2);",reference:"https://facebook.github.io/react/docs/test-utils.html#findallinrenderedtree",playground:"http://jsbin.com/dozevu/edit?html,js,console"},{name:"scryRenderedDOMComponentsWithClass",example:'var CompositeComponent = React.createClass({\n    render () {\n      return (\n        <div className="target">\n          <div className="not-target">\n            <div className="target" />\n          </div>\n        </div>\n      );\n    }\n  });\n  \n  var componentTree = TestUtils.renderIntoDocument(\n    <CompositeComponent />\n  );\n  \n  var allDOMComponentsWithMatchingClass = TestUtils.scryRenderedDOMComponentsWithClass(\n    componentTree,\n    \'target\'\n  );\n  \n  expect(allDOMComponentsWithMatchingClass).toBeAn(\'array\');\n  expect(allDOMComponentsWithMatchingClass.length).toBe(2);',reference:"https://facebook.github.io/react/docs/test-utils.html#scryrendereddomcomponentswithclass",playground:"http://jsbin.com/kujeda/edit?html,js,console"},{name:"findRenderedDOMComponentWithClass",example:"var MyCompositeComponent = React.createClass({\n    render () {\n      return <MyNestedComponent />;\n    }\n  });\n  \n  var MyNestedComponent = React.createClass({\n    render () {\n      return <div className=\"nested\"/>;\n    }\n  });\n  \n  var componentTree = TestUtils.renderIntoDocument(<MyCompositeComponent />);\n  \n  var singleComponentWithMatchedClass = TestUtils.findRenderedDOMComponentWithClass(\n    componentTree,\n    'nested'\n  );\n  \n  expect(singleComponentWithMatchedClass).toBeAn('object');\n  expect(singleComponentWithMatchedClass).toNotBeAn('array');\n  expect(singleComponentWithMatchedClass.className).toBe('nested');",reference:"https://facebook.github.io/react/docs/test-utils.html#findrendereddomcomponentwithclass",playground:"http://jsbin.com/kuteve/edit?html,js,console"},{name:"scryRenderedDOMComponentsWithTag",example:"var CompositeComponent = React.createClass({\n    render () {\n      return <div><div /></div>;\n    }\n  });\n  \n  var componentTree = TestUtils.renderIntoDocument(\n    <CompositeComponent />\n  );\n  \n  var allDivs = TestUtils.scryRenderedDOMComponentsWithTag(\n    componentTree,\n    'DIV'\n  );\n  \n  expect(allDivs).toBeAn('array');\n  expect(allDivs.length).toBe(2);",reference:"https://facebook.github.io/react/docs/test-utils.html#scryrendereddomcomponentswithtag",playground:"http://jsbin.com/hehede/edit?html,js,console"},{name:"findRenderedDOMComponentWithTag",example:"var MyCompositeComponent = React.createClass({\n    render () {\n      return <MyNestedComponent />;\n    }\n  });\n  \n  var MyNestedComponent = React.createClass({\n    render () {\n      return <div />;\n    }\n  });\n  \n  var componentTree = TestUtils.renderIntoDocument(<MyCompositeComponent />);\n  \n  var onlyDiv = TestUtils.findRenderedDOMComponentWithTag(\n    componentTree,\n    'div'\n  );\n  \n  expect(onlyDiv).toBeAn('object');\n  expect(onlyDiv).toNotBeAn('array');\n  expect(onlyDiv.tagName).toBe('DIV');",reference:"https://facebook.github.io/react/docs/test-utils.html#findrendereddomcomponentwithtag",playground:"http://jsbin.com/puhule/edit?html,js,console"},{name:"scryRenderedComponentsWithType",example:"var MyCompositeComponent = React.createClass({\n    render () {\n      return (\n        <div>\n          <Target />\n          <br />\n          <Target />\n        </div>\n      )\n    }\n  });\n  \n  var Target = React.createClass({\n    render () {\n      return <div />;\n    }\n  });\n  \n  var componentTree = TestUtils.renderIntoDocument(\n    <MyCompositeComponent />\n  );\n  \n  var allTargetComponents = TestUtils.scryRenderedComponentsWithType(\n    componentTree,\n    Target\n  );\n  \n  expect(allTargetComponents).toBeAn('array');\n  expect(allTargetComponents.length).toBe(2);",reference:"https://facebook.github.io/react/docs/test-utils.html#scryrenderedcomponentswithtype",playground:"http://jsbin.com/lesowo/edit?html,js,console"},{name:"findRenderedComponentWithType",example:"var MyCompositeComponent = React.createClass({\n    render () { return <TargetComponent /> }\n  });\n  \n  var TargetComponent = React.createClass({\n    render () { return <div /> }\n  });\n  \n  var componentTree = TestUtils.renderIntoDocument(\n    <MyCompositeComponent />\n  );\n  \n  var onlyTargetComponent = TestUtils.findRenderedComponentWithType(\n    componentTree,\n    TargetComponent\n  );\n  \n  expect(onlyTargetComponent).toBeAn('object');\n  expect(onlyTargetComponent).toNotBeAn('array');\n  expect(TestUtils.isCompositeComponentWithType(\n    onlyTargetComponent,\n    TargetComponent\n  )).toBe(true);",reference:"https://facebook.github.io/react/docs/test-utils.html#findrenderedcomponentwithtype",playground:"http://jsbin.com/wosane/edit?html,js,console"},{name:"Shallow rendering (basics)",example:"// 1. create a renderer\n  var renderer = TestUtils.createRenderer();\n  \n  // 2. render component into renderer\n  renderer.render(<MyComponent />);\n  \n  // 3. capture renderer output\n  var subject = renderer.getRenderOutput();\n  \n  // 4. make assertions\n  expect(subject.type).toBe('div');",reference:"https://facebook.github.io/react/docs/test-utils.html#shallow-rendering",playground:"http://jsbin.com/raloqu/edit?html,js,console"},{name:"Shallow rendering (type example)",example:"var renderer = TestUtils.createRenderer();\n  \n  renderer.render(<MyComponent />);\n  \n  var subject = renderer.getRenderOutput();\n  \n  expect(subject.type).toBe('div');  // => true",reference:"https://facebook.github.io/react/docs/test-utils.html#shallow-rendering",playground:"http://jsbin.com/xojudi/edit?html,js,console"},{name:"Shallow rendering (props example)",example:"var renderer = TestUtils.createRenderer();\n  \n  renderer.render(<MyComponent className=\"my-component\" />);\n  \n  var subject = renderer.getRenderOutput();\n  \n  expect(subject.props.className).toBe('my-component'); // => true",reference:"https://facebook.github.io/react/docs/test-utils.html#shallow-rendering",playground:"http://jsbin.com/najubu/edit?html,js,console"},{name:"Shallow rendering (child-count example)",example:"var renderer = TestUtils.createRenderer();\n  \n  renderer.render(\n    <MyList items={[1, 2, 3]} />\n  );\n  \n  var subject = renderer.getRenderOutput();\n  \n  var childCount = React.Children.count(subject.props.children);\n  \n  expect(childCount).toBe(3); // => true",reference:"https://facebook.github.io/react/docs/test-utils.html#shallow-rendering",playground:"http://jsbin.com/dayomi/edit?html,js,console"},{name:"Shallow rendering (child-equality example)",example:"var renderer = TestUtils.createRenderer();\n  \n  renderer.render(\n    <MyComponent>\n      <div>Thing 1</div>\n      <div>Thing 2</div>\n    </MyComponent>\n  );\n  \n  var subject = renderer.getRenderOutput();\n  \n  expect(subject.props.children).toEqual([\n    <div>Thing 1</div>,\n    <div>Thing 2</div>\n  ]); // => true",reference:"https://facebook.github.io/react/docs/test-utils.html#shallow-rendering",playground:"http://jsbin.com/sexeve/edit?html,js,console"},{name:"Shallow rendering (events example)",example:"var renderer = TestUtils.createRenderer();\n  \n  var spy = expect.createSpy();\n  \n  renderer.render(<MyComponent onClick={spy} />);\n  \n  var subject = renderer.getRenderOutput();\n  \n  expect(spy.call.length).toEqual(1); // => true",reference:"https://facebook.github.io/react/docs/test-utils.html#shallow-rendering",playground:"http://jsbin.com/quzeya/edit?html,js,console"},{name:"Shallow rendering (state changes example)",example:"var renderer = TestUtils.createRenderer();\n  \n  renderer.render(<ClickCounter />);\n  \n  // test initial rendering\n  var result = renderer.getRenderOutput();\n  \n  expect(result.props.children).toEqual(0);\n  \n  \n  // test post-click rendering\n  result.props.onClick();\n  \n  var clickedResult = renderer.getRenderOutput();\n  \n  expect(clickedResult.props.children).toEqual(1);",reference:"https://facebook.github.io/react/docs/test-utils.html#shallow-rendering",playground:"http://jsbin.com/nobavu/edit?html,js,console"}],{module:"react-dom/test-utils",category:"test-utils"}),j=[].concat(Object(u.a)(f),Object(u.a)(C),Object(u.a)(y),Object(u.a)(x),Object(u.a)(b),Object(u.a)(T));n(3);var k=function(e){var t=e.name,n=e.example,o=e.module,a=e.href,s=e.chart,c=e.playground,l=e.notSupported;return r.a.createElement("div",{className:"item"},r.a.createElement("h2",{className:"name"},t),r.a.createElement("div",null,r.a.createElement("div",{className:"floatRight"},c&&r.a.createElement("a",{className:"example",href:c,target:"_blank",rel:"noopener noreferrer"},"example"),a&&r.a.createElement("a",{className:"docs",href:a,rel:"noopener noreferrer",target:"_blank"},"docs")),r.a.createElement("div",{className:"module"},o)),n&&r.a.createElement("pre",{className:"pre"},r.a.createElement("code",{className:"pre-example"},n)),s&&r.a.createElement("div",{className:"chart"},s),l&&r.a.createElement("span",{className:"noSup"},r.a.createElement("strong",null,"\u2716 ".concat(l))))};var M=function(e){var t,n=e.items;return t=n.length?r.a.createElement("div",null,n.map(function(e,t){return r.a.createElement(k,{key:t,name:e.name,example:e.example,module:e.module,href:e.reference,chart:e.chart,playground:e.playground,notSupported:e.notSupported})})):r.a.createElement("div",{className:"noRes"},r.a.createElement("h2",{className:"noRes-content"},"No results")),r.a.createElement("div",{className:"results"},t)};n(19);var R=function(e){var t=e.handleInputChange;return r.a.createElement("form",{className:"form"},r.a.createElement("input",{className:"search",autoFocus:!0,type:"text",onChange:t,placeholder:"Filter by name"}))},w=function(e){function t(){var e,n;Object(c.a)(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=Object(m.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={data:j},n.handleInputChange=function(e){var t=e.target.value,o=j;o=n.filterByName(t,o),n.setState({data:o})},n.filterByName=function(e,t){return e=e.toLowerCase(),t.filter(function(t){return t.name.toLowerCase().includes(e)})},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement(R,{handleInputChange:this.handleInputChange}),r.a.createElement(M,{items:this.state.data}))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,1,2]]]);
//# sourceMappingURL=main.78c3e4a9.chunk.js.map