import React from 'react'

export function SearchBar(props) {
    const style = {
        minHeight: props.dimensions.h
    };

    return (
        <li className="special-dropdown-item" style={style}>
            <input type="text" className="search-input" placeholder="Search company or symbol" />
            <button type="button" className="search-btn" onClick={props.search}>
                <svg className="ic" width={`${props.icon.width||24}px`} height={`${props.icon.height||24}px`}>
                    <use xlinkHref={`../media/icons/svg_icons.svg#${props.icon.name||"search"}`}></use>
                </svg>
            </button>
        </li>
    )
}