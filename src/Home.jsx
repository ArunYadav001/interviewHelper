import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    Typography, AppBar, Card, CardActions, CardContent,
    Button, CardMedia, CssBaseline, Grid, Toolbar, Container, FormControl
    , TextField
} from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import useStyles from './styles';

import { db } from './firebase-config';
import { collection, getDocs, addDoc } from 'firebase/firestore';


const Home = () => {

    const [newCom, setNewCom] = useState("");
    const [newExp, setNewExp] = useState("");
    const [users, setUsers] = useState([]);
    const userCollectionRef = collection(db, "companyInfo");
    useEffect(() => {
        const getInfo = async () => {
            const data = await getDocs(userCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getInfo()
    }, [])

    const toaster = () => {
        toast.success("Scroll down");
        <ToastContainer />
        console.log('cls');
    }

    const createExp = async () => {
        if (newCom !== "" || newExp !== "") {
            await addDoc(userCollectionRef, { cname: newCom, cexp: newExp });

        } else {
            toast.error("dskfj");
            <ToastContainer />
        }
    }


    const classes = useStyles();
    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera className={classes.icon} />
                    <Typography variant="h6">InterView Helper</Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center"
                            color="textPrimary" gutterBottom>InterView Helper</Typography>
                        <Typography variant="h6" align="center" color="textSecondary">
                            Your one stop destination to find all interview experiences </Typography>
                        <div className={classes.button}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        See Interview Experience
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button onClick={toaster}
                                        variant="outlined" color="primary">
                                        Write More
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {users.map((user) => (
                            <Grid item xs={12} sm={6} md={6} >
                                <Card className={classes.card}>
                                    <CardMedia className={classes.cardMedia}
                                        image={user.cimg}
                                        title="Image Title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterbottom variant="h5"
                                            style={{ fontWeight: 'bold' }}
                                        >
                                            {user.cname}
                                        </Typography>
                                        <Typography style={{ paddingTop: '8px' }} >
                                            {user.cexp}
                                        </Typography>
                                        <CardActions>
                                            {/* <Button size="small" color="primary">
                                                View More
                                            </Button>
                                            <Button size="small" color="primary">
                                                Edit
                                            </Button> */}
                                        </CardActions>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                <div className={classes.border}>
                </div>
            </main>
            <section className={classes.sec} >
                <Container className={classes.form}>
                    <Typography variant="h4"
                    >Write about your interview Experience ?</Typography>
                    <FormControl className={classes.formControl}>
                        <TextField
                            style={{ margin: '10px' }}
                            onChange={(event) => {
                                setNewCom(event.target.value);
                            }} id="outlined-basic" label="Company Name" variant="outlined" />
                        <TextField
                            style={{ margin: '5px' }}
                            onChange={(event) => {
                                setNewExp(event.target.value);
                            }}
                            id="outlined-basic" label="Description (Please write concise info)" variant="outlined"
                            multiline />
                        <Button style={{ margin: '5px' }}
                            color="primary" onClick={createExp} variant="contained">Add Experience</Button>
                    </FormControl>
                </Container>
            </section>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterbottom>
                    @Interview Helper
                </Typography>
            </footer>
        </>
    );
}

export default Home;