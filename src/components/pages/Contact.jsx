import { useState, useEffect } from 'react';
import { Form, Typewriter } from '../core';

const Contact = () => {
  const [inputs, setInputs] = useState({ name: '', email: '', message: '' });
  const [fieldErrors, setFieldErrors] = useState({});
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });

  const handleServerResponse = (ok, msg) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });

    if (ok) {
      setFieldErrors({}); // clear field errs
      setInputs({
        name: '',
        email: '',
        message: '',
      });
    }
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  // validation rules for each input
  const validationRules = {
    name: (val) => !!val, // similar to "required"
    email: (val) => val && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
    message: (val) => !!val, // similar to "required"
  };

  // updating state and returning true if all pass
  const validate = () => {
    const errors = {};
    let hasErrors = false;

    Object.keys(inputs).forEach((k) => {
      errors[k] = !validationRules[k](inputs[k]);
      hasErrors = hasErrors || errors[k];
    });
    setFieldErrors((prev) => ({ ...prev, ...errors }));

    return !hasErrors;
  };

  //  display fields errs
  const renderFieldError = (field) => {
    if (fieldErrors[field]) {
      return (
        <p className="text-red-900 text-2xl pt-2">
          * Please enter a valid
          {' '}
          {field}
          .
        </p>
      );
    }

    return null;
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    setServerState({ submitting: true });

    try {
      const res = await fetch('https://formspree.io/f/xleakrjb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: inputs }),
      });

      await res.json();
      handleServerResponse(true, 'Thanks!');
    } catch (err) {
      handleServerResponse(false, err.response.data.error);
    }
  };

  useEffect(() => {
    // Only perform interactive validation after submit
    if (Object.keys(fieldErrors).length > 0) {
      validate();
    }
  }, [inputs]);

  // change form bg color once page styling is finished
  return (
    <section className="bg-airplane-wing bg-cover bg-no-repeat object-cover h-full flex flex-col items-center w-full">
      <h1 className="h-20 capitalize font-lucky-typewriter text-7xl 2xl:text-8xl mt-8 text-blue-dark md:animate-fade-in">
        <Typewriter textToType={ 'let\'s connect!' } />
      </h1>
      <div className="w-11/12 md:w-1/2 lg:w-2/5 2xl:w-1/4 xl:h-1/2 2xl:h-2/5 py-20 px-12 my-10 mx-2 bg-white bg-opacity-60 rounded-lg shadow-xl">
        <Form
          inputs={ inputs }
          handleOnSubmit={ handleOnSubmit }
          handleChange={ handleChange }
          fieldErrors={ fieldErrors }
          renderFieldError={ renderFieldError }
          serverState={ serverState }
        />
      </div>
    </section>
  );
};

export default Contact;
