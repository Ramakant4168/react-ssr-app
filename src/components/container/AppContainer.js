import React, { Component } from 'react';
import styles from './styles.css'
import Axios from 'axios';
import { connect } from 'react-redux'
import { fetchMissions } from '../../actions/index'
import { bindActionCreators } from 'redux';

import ListComponent from '../list/ListComponent'
import MenuComponent from '../menu/MenuComponent'
import Loader from '../loader'
import { getBrowserUrl, getUrlBasedOnSate } from '../../utils/utils'

class AppConatiner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedYear: null,
      selectedLaunch: null,
      selectedLand: null,
      response: [],
      dataApi: [],
      error: false,
      isLoading: true,
      buttonProp: false
    }
  }

  componentDidMount() {

    if (this.props.missions.list) {
      let list = this.props.missions.list
      this.setState({
        dataApi: list,
        isLoading: false
      })
    }
  }


  handleYearClick = (year) => {

    let url = window.location.pathname

    let browserUrl;
    let selectedYear = this.state.selectedYear

    if (selectedYear === year) {
      this.setState({
        selectedYear: null
      }, () => {
        browserUrl = getBrowserUrl(url, { key: 'yr', value: '0' })
        window.history.replaceState(null, null, `${browserUrl}`)
        const { selectedYear, selectedLaunch, selectedLand } = this.state
        this.fetchMissionData(getUrlBasedOnSate(selectedYear, selectedLaunch, selectedLand))
      })
    }
    else {
      this.setState({
        selectedYear: year
      }, () => {
        browserUrl = getBrowserUrl(url, { key: 'yr', value: year })
        window.history.replaceState(null, null, `${browserUrl}`)
        const { selectedYear, selectedLaunch, selectedLand } = this.state
        this.fetchMissionData(getUrlBasedOnSate(selectedYear, selectedLaunch, selectedLand))
      })
    }

  }

  handleLaunchClick = (launch) => {

    let selectedLaunch = this.state.selectedLaunch
    let url = window.location.pathname
    let browserUrl;

    if (selectedLaunch === launch) {
      this.setState({
        selectedLaunch: null
      }, () => {
        browserUrl = getBrowserUrl(url, { key: 'lau', value: 0 })
        window.history.replaceState(null, null, `${browserUrl}`)
        const { selectedYear, selectedLaunch, selectedLand } = this.state
        this.fetchMissionData(getUrlBasedOnSate(selectedYear, selectedLaunch, selectedLand))
      })
    }
    else {
      this.setState({
        selectedLaunch: launch
      }, () => {
        browserUrl = getBrowserUrl(url, { key: 'lau', value: launch })
        window.history.replaceState(null, null, `${browserUrl}`)
        const { selectedYear, selectedLaunch, selectedLand } = this.state
        this.fetchMissionData(getUrlBasedOnSate(selectedYear, selectedLaunch, selectedLand))
      })
    }
  }

  handleLandClick = (land) => {

    let selectedLand = this.state.selectedLand
    let url = window.location.pathname
    let browserUrl;

    if (selectedLand === land) {
      this.setState({
        selectedLand: null
      }, () => {
        browserUrl = getBrowserUrl(url, { key: 'lnd', value: 0 })
        window.history.replaceState(null, null, `${browserUrl}`)
        const { selectedYear, selectedLaunch, selectedLand } = this.state
        this.fetchMissionData(getUrlBasedOnSate(selectedYear, selectedLaunch, selectedLand))
      })
    }
    else {
      this.setState({
        selectedLand: land
      }, () => {
        browserUrl = getBrowserUrl(url, { key: 'lnd', value: land })
        window.history.replaceState(null, null, `${browserUrl}`)
        const { selectedYear, selectedLaunch, selectedLand } = this.state
        this.fetchMissionData(getUrlBasedOnSate(selectedYear, selectedLaunch, selectedLand))
      })
    }
  }

  fetchMissionData = (url) => {

    this.setState({
      isLoading: true
    }, () => {
      Axios.get(url)
        .then((result) => {
          this.setState({
            dataApi: result.data,
            response: result.data,
            error: false,
            isLoading: false,
            buttonProp: !this.state.buttonProp
          })
        })
        .catch((error) => {
          this.setState({
            dataApi: [],
            error: true,
            isLoading: false,
            buttonProp: !this.state.buttonProp
          })
        })
    })

  }

  render() {
    let { dataApi, 
      isLoading, 
      selectedYear,
      selectedLaunch,
      selectedLand
     } = this.state;

    return (
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <p5>SpaceX Launch Programs</p5>
        </div>
        <div className={styles.container}>
          <div className={styles.menu}>
            <MenuComponent
              selectedYear = {selectedYear}
              selectedLaunch = {selectedLaunch}
              selectedLand = {selectedLand}
              handleYearClick={this.handleYearClick}
              handleLaunchClick={this.handleLaunchClick}
              handleLandClick={this.handleLandClick}
            />
          </div>
          <div className={styles.content}>
            {isLoading ? <Loader></Loader> : <ListComponent dataApi={dataApi}></ListComponent>}
          </div>
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchMissions,
    },
    dispatch,
  );

const mapStateToProps = state => {
  const { missions } = state
  return {
    missions
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppConatiner)
