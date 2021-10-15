const Form = ({
   fieldErrors,
   handleChange,
   handleOnSubmit,
   inputs,
   renderFieldError,
   serverState,
}) => {
   const input =
      'w-full text-2xl p-4 rounded-lg outline-none border-2 border-transparent focus:border-rose-300'
   const errInput =
      'w-full text-2xl p-4 rounded-lg outline-none border-2 border-red-500 focus:border-rose-300'
   const successMsg = 'text-3xl text-gray-700'
   const errorMsg = 'text-3xl text-red-500'

   return (
      <>
         <form
            className='space-y-6 2xl:space-y-10'
            onSubmit={handleOnSubmit}
            noValidate
         >
            <div className=''>
               {/*'htmlFor links input to label by corresponding id for screen readers */}
               <label htmlFor='name'>
                  <input
                     id='name'
                     type='text'
                     className={fieldErrors.name ? errInput : input}
                     placeholder='Name'
                     name='name'
                     onChange={handleChange}
                     value={inputs.name}
                  />
                  {renderFieldError('name')}
               </label>
            </div>
            <div className=''>
               <label htmlFor='email'>
                  <input
                     id='email'
                     type='email'
                     className={fieldErrors.email ? errInput : input}
                     placeholder='Email'
                     name='email'
                     onChange={handleChange}
                     value={inputs.email}
                  />
                  {renderFieldError('email')}
               </label>
            </div>
            <div className=''>
               <label htmlFor='message'>
                  <textarea
                     id='message'
                     type='text'
                     className={fieldErrors.message ? errInput : input}
                     placeholder='Message'
                     name='message'
                     rows='7'
                     onChange={handleChange}
                     value={inputs.message}
                  />
                  {renderFieldError('message')}
               </label>
               <input type='text' name='_gotcha' className='hidden' />
            </div>
            <button
               type='submit'
               className='py-3 px-4 bg-blue hover:bg-blue-light active:bg-blue border border-blue hover:border-transparent md:text-2xl text-white uppercase tracking-wider rounded-md transition duration-150 focus:outline-none focus:border-white shadow-md'
            >
               Submit
            </button>
            {serverState.status && (
               <p className={!serverState.status.ok ? errorMsg : successMsg}>
                  {serverState.status.msg}
               </p>
            )}
         </form>
      </>
   )
}

export default Form
