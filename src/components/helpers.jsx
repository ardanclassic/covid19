import React from 'react';
import { Icon, Header, Table, Divider, Placeholder,
         Statistic, Grid, Segment } from 'semantic-ui-react';
import { ModLoader, HeadSection } from '../styled';

export const headTitle = (data) => {
    let transform = null;
    if (data.icon === 'phone') transform = 'rotate(90deg)';
    return (
        <HeadSection>
            <Header as='h2'>
                <span><Icon name={ data.icon } style={{ transform, margin: 0 }} /></span> { data.text }
                <Header.Subheader>{ data.subtitle }</Header.Subheader>
            </Header>
            <Divider />
        </HeadSection>
    )
}

export const InfoStatus = (data, status) => {
    if (data) {
        let ico = null;
        if (status === 'Total Positif') {
            ico = <Icon name="wheelchair" />
            data = NumFormat(data.cases);
        } else if (status === 'Total Sembuh') {
            ico = <Icon name="child" />
            data = NumFormat(data.recovered);
        } else {
            ico = <Icon name="bed" />
            data = NumFormat(data.deaths);
        }
        return (
            <React.Fragment>
                <div>{ status }</div>
                <div>{ data }</div>
                { ico }
            </React.Fragment>
        )
    } else {
        return <ModLoader active />
    }
}

export const cellAdjust = (data) => {
    if (window.innerWidth < 500) {
        return <Table.Cell collapsing>{ data }</Table.Cell>
    } else {
        return <Table.Cell>{ data }</Table.Cell>
    }
}

export const timeConverter = (timestamp, status) => {
  const a = new Date(timestamp);
  const months = ['Januari','Februari','Maret','April','Mei',
                  'Juni','Juli','Agustus','September','Oktober','November','Desember'];
  const year = a.getFullYear();
  const month = months[a.getMonth()];
  const date = a.getDate();
  var hours = a.getHours();
  var minutes = "0" + a.getMinutes();
  var seconds = "0" + a.getSeconds();
  
  let time = date + ' ' + month + ' ' + year;
  if (status === 'long') {
      time = date + ' ' + month + ' ' + year + ' ' +
                   hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2) ;
  }

  return time;
}

export const setInfo = (data) => {
    if (data) {
        return (
            <Segment>
                <h2>{ data.country }</h2>
                <Divider />
                <Grid>
                    <Grid.Column width={16}>
                        <Statistic color='red'>
                            <Statistic.Value>{ data.cases }</Statistic.Value>
                            <Statistic.Label>Positif</Statistic.Label>
                        </Statistic>
                    </Grid.Column>
                    <Grid.Column width={16}>
                        <Statistic color='green'>
                            <Statistic.Value>{ data.recovered }</Statistic.Value>
                            <Statistic.Label>Sembuh</Statistic.Label>
                        </Statistic>
                    </Grid.Column>
                    <Grid.Column width={16}>
                        <Statistic color='violet'>
                            <Statistic.Value>{ data.deaths }</Statistic.Value>
                            <Statistic.Label>Meninggal</Statistic.Label>
                        </Statistic>
                    </Grid.Column>
                </Grid>
            </Segment>
        )
    }
}

export const setDataChart = (data) => {
    let tc = [], tr = [], td = [], newSeries = [];
    /** set data & x-axis */
    data.map(ca => tc.push(ca[1].confirmed));
    data.map(re => tr.push(re[1].recovered));
    data.map(de => td.push(de[1].deaths));
    
    /** set highest value (y-axis) */
    const conArr = [tc, td, tr];
    const maxRow = conArr.map(row => { return Math.max.apply(Math, row); });
    const maxVal = Math.max.apply(null, maxRow);

    newSeries = [
        { name: "Positif", data: tc },
        { name: "Sembuh", data: tr },
        { name: "Meninggal", data: td }
    ]

    return { maxVal, newSeries }
}

export const LoadStatistic = () => {
    return (
        <Placeholder fluid>
            <Placeholder.Line style={{ marginBottom: 16 }} />
            <Placeholder.Line style={{ marginBottom: 24 }} />
            <Placeholder.Image />
        </Placeholder>
    )
}

export const LoadTable = () => {
    return (
        <Placeholder fluid>
            <Placeholder.Line length='full' style={{ marginBottom: 18 }} />
            <Placeholder.Line length='full' style={{ marginBottom: 18 }} />
            <Placeholder.Line length='full' style={{ marginBottom: 18 }} />
            <Placeholder.Line length='full' style={{ marginBottom: 18 }} />
            <Placeholder.Line length='full' style={{ marginBottom: 18 }} />
            <Placeholder.Line length='full' style={{ marginBottom: 18 }} />
        </Placeholder>
    )
}

export const NumFormat = (data) => {
    let	number_string = data.toString();
	let sisa 	= number_string.length % 3;
	let ribuan 	= number_string.substr(sisa).match(/\d{3}/g);
	let current	= number_string.substr(0, sisa);
		
    if (ribuan) {
        const separator = sisa ? '.' : '';
        current += separator + ribuan.join('.');
    }

    return current;
}