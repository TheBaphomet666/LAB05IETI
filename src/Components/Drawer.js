import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from "@material-ui/core/Avatar";
import CreateIcon from '@material-ui/icons/Create';
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import { withStyles } from '@material-ui/core/styles';
import Card from "./Card"
import Cardlist from "./CardList"


const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    menuButton: {
        marginRight: 20,
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
});

class ResponsiveDrawer extends React.Component {
    state = {
        mobileOpen: false,
    };

    constructor(props) {
            super(props);
            this.handleLogout = this.handleLogout.bind(this);
            this.handleNewTask = this.handleNewTask.bind(this);
        this.state = {
            cardList: [],
        };
        this.getTaks = this.getTaks.bind(this);

    }
    componentDidMount() {
        this.getTaks();
    }

    getTaks(query) {
        /*fetch('https://www.googleapis.com/books/v1/volumes?q=' + query)
            .then(response => response.json())
            .then(data => {
                let booksList = [];
                data.items.forEach(function (book) {
                    booksList.push({
                        title: book.volumeInfo.title,
                        image: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "",
                        language: book.volumeInfo.language
                    })

                });
                this.setState({booksList: booksList});
            });*/
           // console.log(localStorage.getItem("Tasks") === null);
        if(!(localStorage.getItem("Tasks") === null)){
            let cardList = JSON.parse(localStorage.getItem("Tasks"));
            this.setState({cardList: cardList});
            //console.log(this.state.cardList);
        }



    }
    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };

    render() {
        const { classes, theme } = this.props;

        const drawer = (
            <div>
                <div className={classes.toolbar} />
                <Divider/>
                <List className={classes.avatarBox}>

                    <ListItem alignItems="left">
                        <ListItemAvatar style={{
                            left: -5,
                        }}>
                            <Avatar>N</Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Oscar Pinto"
                            secondary="moka117@hotmail.com"
                        />
                        <ListItemSecondaryAction style={{
                            position: 'absolute',
                            left: 190,
                            top: '30%',
                            transform: 'translateY(-50%)',
                        }}>
                            <IconButton onClick="">
                                <CreateIcon/>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>

                </List>
                <Divider />
                <List>
                    <ListItem button key={"New Task"} onClick={this.handleNewTask}>
                        <ListItemIcon> <MailIcon /></ListItemIcon>
                        <ListItemText primary={"New Task"} />
                    </ListItem>
                    <ListItem button key={"Log-Out"} onClick={this.handleLogout}>
                        <ListItemIcon><InboxIcon /> </ListItemIcon>
                        <ListItemText primary={"Log-Out"} />
                    </ListItem>

                </List>

            </div>
        );

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap>
                            Tasks
                        </Typography>
                    </Toolbar>
                </AppBar>
                <nav className={classes.drawer}>
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Hidden smUp implementation="css">

                        <Drawer
                            container={this.props.container}
                            variant="temporary"
                            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                            open={this.state.mobileOpen}
                            onClose={this.handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Drawer
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            variant="permanent"
                            open
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                </nav>
                <main className={classes.content}>

                    <div className={classes.toolbar} />
                    <Cardlist cardsList={this.state.cardList} />


                </main>
            </div>
        );
    }
        handleLogout(e) {
                    //localStorage.setItem('Called', "true");
                   localStorage.setItem('IsLoggedIn', "false");
                   window.location.reload(false); 



            }
         handleNewTask(e) {
                 //localStorage.setItem('Called', "true");

                window.location.replace("/NewTask");



         }


}

ResponsiveDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    // Injected by the documentation to work in an iframe.
    // You won't need it on your project.
    container: PropTypes.object,
    theme: PropTypes.object.isRequired,
};

Array.prototype.unique = function() {
    var a = this.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);