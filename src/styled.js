import styled from 'styled-components';
import { Segment, Loader, Grid } from 'semantic-ui-react';

export const HeadSegment = styled( Segment )`
    box-shadow: none !important;
    border-radius: 0 !important;
    background-color: #f7f7f7 !important;
    border: 0 !important;
    margin-bottom: 48px !important;

    & h1 {
        font-weight: normal !important;
        font-family: inherit !important;
        font-size: 32px;
        letter-spacing: 1em;
    }
    & h3 {
        margin: 0;
        font-weight: normal !important;
        font-family: inherit !important;
        font-size: 24px;
        letter-spacing: 2px;
    }
    
`;

export const ModLoader = styled( Loader )`
    position: relative !important;
    top: 15px !important;
    &:after {
        border-color: #fff transparent transparent !important;
    }
`;

export const ModSegment = styled( Segment )`
    text-align: left;
    & div:nth-child(1) {
        font-size: 16px;
        text-transform: uppercase;
        line-height: initial;
    }
    & div:nth-child(2) {
        font-size: 30px;
        font-weight: bold;
        line-height: initial;
    }
    & i {
        position: absolute;
        right: 8px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 48px;
        line-height: initial;
        opacity: 0.5;
    }
`;

export const CaseSection = styled.div`
    margin: 0 !important;
    padding: 0 !important;
    text-align: left !important;
    #label-rank {
        line-height: 24px;
        font-weight: 500;
        color: brown;
    }
    .label {
        margin-right: 1em;
        cursor: pointer;
        background-color: transparent;
        box-shadow: 1px 2px 3px 1px #e0e0e0;
    }
    .label:nth-child(1).active {
        background-color: moccasin;
    }
    .label:nth-child(2).active {
        background-color: #bcffbc;
    }
    .label:nth-child(3).active {
        background-color: #ffd0d0;
    }
`;

export const CountryTable = styled( Segment )`
    max-height: 300px;
    overflow-y: auto;
    margin-bottom: 36px !important;
    & table thead tr th:nth-child(1) {
        text-align: center;
    }
    & table tbody tr {
        cursor: pointer;
        & td:nth-child(1) {
            text-align: center;
        }
        & td:nth-child(2) {
            width: 56px;
            text-align: center;
        }
        &.negative {
            font-weight: bold;
        }
        & img {
            width: 20px;
            margin-right: 1em;
            box-shadow: 2px 1px 5px 1px #cfcfcf;
        }
    }
`;

export const ProvinsiTable = styled( Segment )`
    max-height: 300px;
    overflow-y: auto;
    margin-bottom: 36px !important;
    & table thead tr th:nth-child(1) {
        text-align: center;
    }
    & table tbody tr {
        cursor: pointer;
        & td:nth-child(1) {
            text-align: center;
        }
    }
`;

export const HeadSection = styled.div`
    margin-bottom: 32px;
    & .header {
        letter-spacing: 2px;
        margin: 0 !important;
        & .sub.header {
            margin: 10px 0 !important;
        }
        & i {
            color: #b22222;
            line-height: normal;
        }
        & img {
            width: 28px;
            margin-right: 10px;
            box-shadow: 2px 1px 5px 1px #cfcfcf;
        }
    }
`;

export const ChartChoice = styled.div`
    margin: 24px 0;
    & button {
        margin: 0 8px;
    }
`;

export const LastUpdated = styled.div`
    position: absolute;
    top: -8px;
    left: 50%;
    font-size: 12px;
    color: grey;
    transform: translateX(-50%);
`;

export const FootMask = styled( Segment )`
    margin-top: 10% !important;
    background-color: black !important;
    border-radius: 30px 30px 0 0 !important;
    color: #fff;
    & a {
        color: #fff;
        &:hover {
            color: #ed143d;
        }
    }
    & h4 {
        font-weight: normal;
        // margin: 1em 0;
    }
    & span:nth-child(1) {
        margin: 0 5px;
        color: #ed143d;
    }
    & span:nth-child(2) {
        margin: 0 5px;
        color: #1e90ff;
        font-weight: bold;
    }
    & span:nth-child(3) {
        margin-right: 5px;
    }
`;

export const GridApi = styled( Grid )`
    margin-bottom: 48px;
    & .column {
        & .card{
            padding: 16px 8px;
            & span {
                font-size: 16px;
                font-weight: 600;
                color: #000;
                & img {
                    position: absolute;
                    top: 10%;
                    left: 5px;
                    transform: translateY(-10%);
                    height: 16px;
                    opacity: 0.5;
                }
            }
        }
        & .segment {
            min-height: 100px;
            & img {
                max-height: 50px;
                max-width: 100px;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            }
        }
    }
`;

export const TitleSection = styled.h2`
    text-align: left;
    margin-top: 48px;
`;


