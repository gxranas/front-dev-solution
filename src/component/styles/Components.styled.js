//import styled from "styled-components";

const color = {
    value: 'rgba(0,0,0,.9)',
    default: '#8c8c8c',
    theme: '#E97777',
    transparent: '#fff',
}

export const textColor = {
    value: `color: ${color.value}`,
    default: `color: ${color.default}`,
    theme: `color: ${color.theme}`,
    transparent: `color: ${color.transparent}`,
}

const Size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1075px',
    laptopL: '1440px',
    desktop: '2560px',
}

export const Device = {
    mobileS: `(max-width : ${Size.mobileS})`,
    mobileM: `(min-width : ${Size.mobileM})`,
    mobileL: `(min-width : ${Size.mobileL})`,
    tablet: `(min-width : ${Size.tablet})`,
    laptop: `(max-width : ${Size.laptop})`,
    laptopL: `(min-width : ${Size.laptopL})`,
    desktop: `(min-width : ${Size.desktop})`,
}