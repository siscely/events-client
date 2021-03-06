import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faMeetup, faGithub, faSlack } from '@fortawesome/free-brands-svg-icons'
import {
  withStyles,
  Grid,
} from '@material-ui/core'
import A from 'ui/ui-elements/A'

const TVCLinks = ({ classes }) => {
  return (
    <div className={classes.logoGrid}>
      <Grid
        item
        container
        xs={12}
        justify='center'
      >
        <Grid
          item
          xs={6}
          sm={3}
          container
          justify='center'
        >
          <A href='https://www.meetup.com/trivalleycoders/'><FontAwesomeIcon className={classes.meetup} icon={faMeetup} /></A>
        </Grid>
        <Grid
          item
          xs={6}
          sm={3}
          container
          justify='center'
        >
          <A href='https://github.com/trivalleycoders-org'><FontAwesomeIcon className={classes.github} icon={faGithub} /></A>
        </Grid>
        <Grid
          item
          xs={6}
          sm={3}
          container
          justify='center'
        >
          <A href='https://join.slack.com/t/trivalleycoders/shared_invite/enQtMjk2NDY3NDAwMjI1LWU0YjFjNjE5MDgwYzYwYmUwMWJlNjk1NDU4YmI5ZmZjZGU0ZDcwY2E2Y2RlNmU0MWFlZTUyODFkYzM1NGVlYTQ'><FontAwesomeIcon className={classes.slack} icon={faSlack} /></A>
        </Grid>
        <Grid
          item
          xs={6}
          sm={3}
          container
          justify='center'
        >
          <A href='https://www.facebook.com/groups/free.code.camp.sanramon/'><FontAwesomeIcon className={classes.facebook} icon={faFacebook} /></A>
        </Grid>
      </Grid>
      </div>
  )
}

const styles = theme => {
  const leftRightMargin = theme.spacing.unit * 4
  const topBottomMargin = theme.spacing.unit * 4
  const logoMargin = `${topBottomMargin}px ${leftRightMargin}px ${topBottomMargin}px ${leftRightMargin}px`
  return ({
    logoGrid: {
      // backgroundColor: 'green',
    },
    meetup: {
      color: '#f64060',
      fontSize: '3em',
      margin: logoMargin
    },
    github: {
      color: 'white',
      fontSize: '3em',
      margin: logoMargin
    },
    slack: {
      color: 'white',
      fontSize: '3em',
      margin: logoMargin
    },
    facebook: {
      color: '#3e5b99',
      fontSize: '3em',
      margin: logoMargin
    },
  })
}

export default withStyles(styles)(TVCLinks)