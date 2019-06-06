import React from 'react';
import './style.css';

function ReferenceItem(props) {
    const { name, example, module, href, chart, playground, notSupported } = props

    return(
        <div className="item">
            <h2 className="name">{name}</h2>
            <div>
                <div className="floatRight">
                    {playground && 
                        <a 
                            className="example"
                            href={playground}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                        example
                        </a>
                    }
                    {href &&
                        <a
                            className="docs"
                            href={href}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                        docs
                        </a>
                    }
                </div>
                <div className="module">{module}</div>
            </div>
            
            {example &&
                <pre className="pre">
                    <code className="pre-example">{example}</code>
                </pre>
            }
            {chart &&
                <div className="chart">{chart}</div>
            }
            {notSupported &&
                <span className="noSup"><strong>{`\u2716 ${notSupported}`}</strong></span>
            }
        </div>
    )
}

export default ReferenceItem