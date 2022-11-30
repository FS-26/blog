import React, { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../css/register.css';
import 'boxicons';


export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        photo:'',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
      setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
  };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            
<section className="background-radial-gradient overflow-hidden ">

  <div className="container px-4 py-2 px-md-5 text-center text-lg-start my-5">
    <div className="row gx-lg-5 align-items-center mb-5">
      <div className="col-lg-6 mb-5 mb-lg-0" style={{zIndex: 10}}>
        <h1 className="my-5 display-5 fw-bold ls-tight" style={{color: '#247E16'}}>
          Vivre la passion de voyage <br />
          <span style={{color: 'hsl(218, 81%, 75%)'}}>avec tes amis</span>
        </h1>
        <p className="mb-4 opacity-70" style={{color: '#0C325B',fontWeight:800}}>
        Vous n’en pouvez plus de votre routine métro-boulot-dodo ? Vous avez besoin de changement, voire carrément d’une rupture totale de plusieurs semaines pour retrouver votre bien-être ? Il n’y a rien de mieux que le voyage pour laisser ses soucis derrière soi et aller au-devant de nouvelles aventures. Mais où partir ? Liligo vous révèle sa sélection des meilleures destinations de rêve où s’évader du quotidien…
        </p>
      </div>

      <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
        <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
        <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

        <div className="card bg-glass">
          <div className="card-body px-2 py-3 px-md-5">
            <form onSubmit={submit} >
              
              <div className='text-center pb-4'>
                <h1>Register</h1>
              </div>

             
              <div className="form-outline mb-4">
                
                 <InputLabel forInput="name" value="Name" />

                    <TextInput
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full form-control"
                        autoComplete="name"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />
                <InputError message={errors.name} className="mt-2" />
              </div>

              <div className="form-outline mb-4">
                
                <InputLabel forInput="email" value="Email" />

                    <TextInput
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full form-control"
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
                    />
                <InputError message={errors.email} className="mt-2" />
              </div>

              
              <div className="form-outline mb-4">
                
                <InputLabel forInput="password" value="Password" />

                    <TextInput
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full form-control"
                        autoComplete="new-password "
                        handleChange={onHandleChange}
                        required
                    />
                <InputError message={errors.password} className="mt-2" />
              </div>

              <div className="form-outline mb-4">
               
                 <InputLabel forInput="password_confirmation" value="Confirm Password" />

                    <TextInput
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full form-control"
                        handleChange={onHandleChange}
                        required
                    />
                <InputError message={errors.password_confirmation} className="mt-2" />
              </div>

              <div className="form-outline mb-4">
                
                 <InputLabel forInput="photo" value="Photo" />

                    <TextInput 
                        type="file"
                        name="photo"
                        value={data.photo}
                        className="mt-1 block w-full form-control"
                        handleChange={onHandleChange}
                        required
                    />
                <InputError message={errors.photo} className="mt-2" />
              </div>
              
              <div className="form-check d-flex  mb-4">
                <input className="form-check-input me-2" type="checkbox"  id="form2Example33"  />
                <label className="form-check-label" htmlFor="form2Example33">
                  Subscribe to our newsletter
                </label>
              </div>
              
             

              <div className='text-center'>
                 <button type="submit" className="btn btn-primary btn-block mb-4 center">
                    Register
                </button>
              </div>
             
                
              
             
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </GuestLayout>
    );
}
