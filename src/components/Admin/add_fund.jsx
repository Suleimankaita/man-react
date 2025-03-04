
import React, { useState, useEffect } from 'react';
import { Paper, Typography, TextField, Button, Grid, Container } from '@mui/material';
import { useAdd_TransMutation, useGetpostQuery, useAmountMutation } from '../../features/appslice';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import img from '../../assets/images/hero_1.jpg';

const AddUserFund = () => {
    const [add, { isSuccess }] = useAmountMutation();
    const dispatch = useDispatch();
    const { data } = useGetpostQuery('', {
        pollingInterval: 1000,
        refetchOnFocus: true,
    });

    const [formData, setFormData] = useState({
        account_no: '',
        amount: '',
        description: '',
        account: '',
        username: '',
        phone: '',
        img: null,
        id: null,
        ms: [],
    });

    const [isConfirmed, setIsConfirmed] = useState(false);
    const [notFound, setNotFound] = useState(false);

    const handleConfirm = () => {
        if (!data) return;

        const { ids, entities } = data;
        const all = ids.map(id => entities[id]);
        const ms = all.filter(res => res.account_no === Number(formData.account_no));

        if (ms.length > 0) {
            const user = ms[0];
            setFormData(prevState => ({
                ...prevState,
                account: user.account_no,
                username: user.email,
                id: user.id,
                phone:user.phone,
                img: user.img,
                ms: [user],
            }));
            setNotFound(false);
            setIsConfirmed(true);
        } else {
            setFormData(prevState => ({
                ...prevState,
                ms: [],
                account: '',
                username: '',
                phone:'',
                id: null,
                img: null,
            }));
            setNotFound(true);
            setIsConfirmed(false);
        }
    };

    useEffect(() => {
        if (isSuccess) {
            toast(`✅ Transfer of ${formData.amount} to ${formData.account_no} is successful`);
        }
    }, [isSuccess]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));

        // Reset confirmation when changing account number
        if (name === "account_no") {
          setFormData(pr=>({...pr,
             ms: [],
            account: '',
            username: '',
            id: null,
            phone:'',
            img: null,}))
            setIsConfirmed(false);
            setNotFound(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(add({
            username: formData.username,
            amount: Number(formData.amount),
            id1: formData.id,
            id: formData.id,
        }));
        console.log('Form Data Submitted:', formData);
    };

    return (
        <div style={{ display: "flex",flexFlow:"row wrap",overflowY:"auto",overflowX:"hidden", justifyContent: "center", alignItems: "center", height: "80vh" }}>
            <ToastContainer />
            <Container maxWidth="sm">
                <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                    <Typography variant="h5" align="center" gutterBottom>
                        Add User Fund
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Account Number"
                                    name="account_no"
                                    value={formData.account_no}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" color="secondary"
                                sx={isConfirmed?{display:"none"}:null} fullWidth onClick={handleConfirm}>
                                    Confirm
                                </Button>
                            </Grid>

                            {notFound && (
                                <Grid item xs={12} style={{ textAlign: 'center', color: 'red' }}>
                                    ❌ User not found!
                                </Grid>
                            )}

                            {isConfirmed && (
                                <>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Amount"
                                            name="amount"
                                            type="number"
                                            value={formData.amount}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Description"
                                            name="description"
                                            value={formData.description}
                                            onChange={handleChange}
                                            multiline
                                            rows={4}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button type="submit" variant="contained" color="primary" fullWidth disabled={isConfirmed===false}>
                                            Add Fund
                                        </Button>
                                    </Grid>
                                </>
                            )}
                        </Grid>
                    </form>
                </Paper>
            </Container>

            {isConfirmed && formData.ms.length > 0 && (
                <div className="user_details_2">
                    <br />
                    <h1>KS Bank</h1>
                    <div className="User_img">
                         <p>profile</p>
                        <img src={formData.img ? `http://localhost:4000/image/${formData.img}` : img} alt="" width={70} height={70} />
                    </div>
                    <div className="User_img">
                        <p>Username:</p>
                        <p>{formData.username.slice(0,formData.username.indexOf("@"))}</p>
                    </div>
                    <div className="User_img">
                        <p>ID:</p>
                        <p>{formData.id}</p>
                    </div>
                    <div className="User_img">
                        <p>Phone:</p>
                        <p>{formData.phone}</p>
                    </div>
                    <div className="User_img">
                        <p>Account Number:</p>
                        <p>{formData.account}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddUserFund;
