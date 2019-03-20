import React from 'react';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
});



class NewTask extends React.Component {

    constructor(props) {
            super(props);
            this.state = {
                navigate: false,
                referrer: null
            };
            this.state={status:"",description:"",dueDate:"",responsible:{ name:"", email:""}};
                    this.handleSubmit = this.handleSubmit.bind(this);
                    this.handleDescriptionTextChange=this.handleDescriptionTextChange.bind(this);
                    this.handleresponsibleNameTextChange=this.handleresponsibleNameTextChange.bind(this);
                    this.handleresponsibleEmailTextChange=this.handleresponsibleEmailTextChange.bind(this);
                    this.handleDueDateChange=this.handleDueDateChange.bind(this);
                    this.handleStatusChange=this.handleStatusChange.bind(this);

        }
    render(){
        const {classes} = this.props;

        return (
            <main className={classes.main}>
                <CssBaseline />
                <Paper className={classes.paper}>

                    <Typography component="h1" variant="h5">
                        New Task
                    </Typography>
                    <form className={classes.form}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="Description">Description</InputLabel>
                            <Input id="Description" name="Description" autoComplete="Description" autoFocus onChange={this.handleDescriptionTextChange} />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="name">Name</InputLabel>
                            <Input id="name" name="name" autoComplete="Name" autoFocus onChange={this.handleresponsibleNameTextChange} />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input id="email" name="email" autoComplete="email" autoFocus onChange={this.handleresponsibleEmailTextChange} />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>

                                  <TextField
                                    id="date"
                                    label="DueDate"
                                    type="date"
                                    defaultValue="2017-05-24"
                                    className={classes.textField}
                                    onChange={this.handleDueDateChange}
                                    InputLabelProps={{
                                      shrink: true,
                                    }}
                                  />

                         </FormControl>
                         <FormControl margin="normal" required fullWidth>

                                      <InputLabel htmlFor="satus-simple">Status</InputLabel>
                                      <Select
                                        value="Ready"
                                        onChange={this.handleStatusChange}
                                        inputProps={{
                                          name: 'Status',
                                          id: 'status-simple',
                                        }}
                                      >

                                        <MenuItem value="Done">Done</MenuItem>
                                        <MenuItem value="In Progress">In Progress</MenuItem>
                                        <MenuItem value="Ready">Ready</MenuItem>
                                      </Select>

                         </FormControl>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={this.handleSubmit}
                        >
                            Create New Task
                        </Button>
                    </form>
                </Paper>
            </main>
        );
    }
    handleSubmit(e) {
                if(localStorage.getItem("Tasks") === null){
                    let cardList = [];
                    cardList.push({

                        description: this.state.description,
                        responsible: {
                            name: this.state.responsible.name,
                            email: this.state.responsible.email
                        },
                        status: this.state.state,
                        dueDate: this.state.dueDate

                    });
                    localStorage.setItem("Tasks", JSON.stringify(cardList));
                }
                else{

                    let cardList = JSON.parse(localStorage.getItem("Tasks"));
                    cardList.push({

                        description: this.state.description,
                        responsible: {
                            name: this.state.responsible.name,
                            email: this.state.responsible.email
                        },
                        status: this.state.state,
                        dueDate: this.state.dueDate

                    });
                    localStorage.setItem("Tasks", JSON.stringify(cardList));
                }

                        console.log(localStorage.getItem("Tasks"));


                this.setState({status:"",description:"",dueDate:"",responsible: {name:"", email:""}});


        }

        handleDescriptionTextChange(e) {
            console.log(e.target.value);

            this.setState({
                description: e.target.value

            });
        }
        handleDueDateChange(e) {
                    console.log(e.target.value);

                    this.setState({
                        dueDate: e.target.value

                    });
                }
        handleresponsibleNameTextChange(e) {
                    console.log(e.target.value);

                    this.setState({
                        responsible: {name: e.target.value,
                                      email : this.state.responsible.email
                                    }

                    });
                }
        handleresponsibleEmailTextChange(e) {
                            console.log(e.target.value);

                            this.setState({
                                responsible: {name: e.target.value,
                                                email: e.target.value}

                            });
                        }
        handleStatusChange(e) {
                    console.log(e.target.value);

                    this.setState({
                        status: e.target.value

                    });
                }


}



export default withStyles(styles)(NewTask);