import React from 'react';
import GLHead from './smaller/global/headSection';
import GLChart from './smaller/global/chartSection';
import GLTable from './smaller/global/tableSection';
import IDHead from './smaller/idn/headSection';
import IDTable from './smaller/idn/tableSection';
import IDChart from './smaller/idn/chartSection';
import CHead from './smaller/compare/headSection';
import CChart from './smaller/compare/chartSection';
import HLHead from './smaller/hotline/headSection';
import HLBody from './smaller/hotline/bodySection';
import SHead from './smaller/sumber/headSection';
import SBody from './smaller/sumber/bodySection';

export const globalPage = () => {
    return (
        <React.Fragment>
            <GLHead />
            <GLChart />
            <GLTable />
        </React.Fragment>
    )
}

export const idnPage = () => {
    return (
        <React.Fragment>
            <IDHead />
            <IDChart />
            <IDTable />
        </React.Fragment>
    )
}

export const compPage = () => {
    return (
        <React.Fragment>
            <CHead />
            <CChart />
        </React.Fragment>
    )
}

export const HotlinePage = () => {
    return (
        <React.Fragment>
            <HLHead />
            <HLBody />
        </React.Fragment>
    )
}

export const SourcePage = () => {
    return (
        <React.Fragment>
            <SHead />
            <SBody />
        </React.Fragment>
    )
}





