import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { AddUser } from '../../../store/userData/user.action';
import Loading from '../../../component/loading';
import NavigateButton from '../../../component/navigate.button';

function CreateUser() {
    const userlist = useSelector((state) => state.dataUser.userlist)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => handleCreatUser(data);
    const [idArray, setIdArray] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (userlist !== undefined) {
            setLoading(true)
            setIdArray( userlist[userlist.length - 1].id + 1)
        }
        else {
            setLoading(false)
        }
    }, [userlist])


    function handleCreatUser(data) {

        const formData = {
            id: idArray,
            name: data.Name,
            username: data.UserName,
            email: data.Email,
            phone: data.Phone,
            website: data.Website || 'неизвестно',
            address: {
                city: data.City,
                geo: {
                    lat: data.lat || 'неизвестно',
                    lng: data.lng || 'неизвестно'
                },
                street: data.Street,
                suite: data.suite || 'неизвестно',
                zipcode: data.Zipcode || 'неизвестно',
            },
            company: {
                bs: data.bs || 'неизвестно',
                catchPhrase: data.Catchphrase || 'неизвестно',
                name: data.Companyname || 'неизвестно',
            },
        };

        dispatch(
            AddUser(formData)
        )
        setIdArray(idArray + 1)
        navigate("/UserData")

    }


    return (
        <>
            {
                loading !== false ?
                    <>
                        <div className='form_button'>
                            <NavigateButton url={"/UserData"} name='Close'  classis={"max_width"}/>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className='create_user'>
                            <div>
                                <input type="text" placeholder="Name" {...register("Name", { required: true, maxLength: 50 })} />
                                {
                                    errors.Name !== undefined ? <p> Name required</p> : null
                                }
                                <input type="text" placeholder="User Name" {...register("UserName", { required: true, maxLength: 35 })} />
                                {
                                    errors.UserName !== undefined ? <p>User Name required</p> : null
                                }
                                <input type="email" placeholder="Email" {...register("Email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i })} />
                                <input type="tel" placeholder="Phone" {...register("Phone", { required: true })} />
                                {
                                    errors.Phone !== undefined ? <p>Phone required</p> : null
                                }
                                <input type="text" placeholder="Web site" {...register("Website", {})} />
                                <input type="text" placeholder="City" {...register("City", { required: true })} />
                                {
                                    errors.City !== undefined ? <p>City required</p> : null
                                }
                                <input type="text" placeholder="lat" {...register("lat", { pattern: /^-?([1-8]?[0-9]\.{1}\d{1,6}|90\.{1}0{1,6})$/ })} />
                                {
                                    errors.lat !== undefined ? <p>Incorrect format.</p> : null
                                }
                            </div>
                            <div>
                                <input type="text" placeholder="lng" {...register("lng", { pattern: /^-?((([1-9]|[1-8][0-9])(\.\d{1,6})?)|90(\.0{1,6})?)$/ })} />
                                {
                                    errors.lng !== undefined ? <p>Incorrect format.</p> : null
                                }
                                <input type="text" placeholder="Street" {...register("Street", { required: true })} />
                                {
                                    errors.street !== undefined ? <p>Street required</p> : null
                                }
                                <input type="text" placeholder="suite" {...register("suite", {})} />
                                <input type="text" placeholder="Zip code" {...register("Zipcode", {})} />
                                <input type="text" placeholder="bs" {...register("bs", {})} />
                                <input type="text" placeholder="Catch phrase" {...register("Catchphrase", {})} />
                                <input type="text" placeholder="Company name" {...register("Companyname", {})} />
                            </div>
                            <input type="submit" />
                        </form>
                    </> : <Loading />

            }


        </>

    )
}
export default CreateUser