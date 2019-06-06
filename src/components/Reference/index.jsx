import React from 'react';
import ReferenceItem from './ReferenceItem';
import './style.css'

function Reference(props) {
    const { items } = props
    let result
    if (!items.length) {
        result = (
            <div className="noRes">
                <h2 className="noRes-content">No results</h2>
            </div>
        )
    } else {
        result = (
            <div>
                {items.map((item, index) =>(
                    <ReferenceItem 
                        key={index}
                        name={item.name}
                        example={item.example}
                        module={item.module}
                        href={item.reference}
                        chart={item.chart}
                        playground={item.playground}
                        notSupported={item.notSupported}
                    />
                ))}
            </div>
        )
    }

    return (
        <div className="results">{result}</div>
    )

}

export default Reference
