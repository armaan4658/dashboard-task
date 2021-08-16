import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AttachMoneyRoundedIcon from '@material-ui/icons/AttachMoneyRounded';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';
import QuestionAnswerRoundedIcon from '@material-ui/icons/QuestionAnswerRounded';
import React from 'react';
const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 5,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#36b9cc',
    },
  }))(LinearProgress);


export function MainContent(){
    return(
        <>
        <Grid className="middle bg">
            <Grid item xs={6} sm={6} md={6} lg={6} xl={6} style={{display:'flex',justifyContent:'flex-start'}}><h1>Dashboard</h1></Grid>
            <Grid item xs={6} sm={6} md={6} lg={6} xl={6} style={{display:'flex',justifyContent:'flex-end'}} id="mobileButton">
                <Button variant="contained" color="primary" href="#contained-buttons">
                    Generate report
                </Button>
            </Grid>
        </Grid>
        <Grid className="middle bg" style={{flexWrap:'wrap'}}>
            <Grid item xs={10} sm={6} md={3} lg={3} xl={3} className="card" id="one">
                <div>
                    <h4>EARNINGS (MONTHLY)</h4>
                    <h3>$40,000</h3>
                </div>
                <div>
                    <CalendarTodayIcon fontSize="large"/>
                </div>
            </Grid>
            <Grid item xs={10} sm={6} md={3} lg={3} xl={3} className="card" id="two">
                <div>
                    <h4>EARNINGS (ANNUAL)</h4>
                    <h3>$2,15,000</h3>
                </div>
                <div>
                    <AttachMoneyRoundedIcon fontSize="large"/>
                </div>
            </Grid>
            <Grid item xs={10} sm={6} md={3} lg={3} xl={3} className="card" id="three">
                <div>
                    <h4>TASKS</h4>
                    <h3 style={{display:'inline-block',margin:'0 0 11px 0'}}>50% <BorderLinearProgress variant="determinate" value={50} /></h3>
                        
                </div>
                <div>
                    <AttachMoneyRoundedIcon fontSize="large"/>
                </div>
            </Grid>
            <Grid item xs={10} sm={6} md={3} lg={3} xl={3} className="card" id="four">
                <div>
                    <h4>PENDING REQUESTS</h4>
                    <h3>18</h3>
                </div>
                <div>
                    <QuestionAnswerRoundedIcon fontSize="large"/>
                </div>
            </Grid>
        </Grid>
        </>
    )
}