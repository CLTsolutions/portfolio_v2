const Contact = () => {
   // change form bg color once page styling is finished
   return (
      <section className='flex flex-col items-center w-full'>
         <h1 className='text-transform: capitalize font-shadows-into-light text-8xl mt-8 text-blue-light md:animate-fade-in'>
            Contact Me!
         </h1>
         <div className='w-11/12 md:w-1/2 lg:w-2/5 2xl:w-1/4 xl:h-1/2 2xl:h-2/5 py-20 px-12 my-10 mx-2 bg-blue rounded-lg shadow-xl'>
            <form className='space-y-6 2xl:space-y-10'>
               <div className=''>
                  {/*'htmlFor links input to label by corresponding id for screen readers */}
                  <label htmlFor='name'>
                     <input
                        id='name'
                        required
                        type='text'
                        className='w-full text-2xl border-2 border-gray-200
                  p-4 rounded outline-none focus:border-lavender-dark'
                        placeholder='Name'
                        name='name'
                        // onChange={this.handleChange}
                        // onInput={this.inputToUppercase}
                     />
                  </label>
               </div>
               <div className=''>
                  <label htmlFor='email'>
                     <input
                        id='email'
                        required
                        type='email'
                        className='w-full text-2xl border-2 border-gray-200
                        p-4 rounded-sm outline-none focus:border-lavender-dark'
                        placeholder='Email'
                        name='email'
                        // onChange={this.handleChange}
                        // onInput={this.inputToUppercase}
                     />
                  </label>
               </div>
               <div className=''>
                  <label htmlFor='message'>
                     <textarea
                        id='message'
                        type='text'
                        className='w-full text-2xl border-2 border-gray-200
                        p-4 rounded outline-none focus:border-lavender-dark'
                        placeholder='Message'
                        name='message'
                        rows='7'
                        // onChange={this.handleChange}
                        // onInput={this.inputToUppercase}
                     />
                  </label>
               </div>
               <button
                  type='submit'
                  className='py-3 px-4 bg-lavender-dark hover:bg-lavender active:bg-blue border border-lavender hover:border-transparent active:border-none md:text-2xl text-white uppercase tracking-wider rounded-md transition duration-150 focus:outline-none focus:ring-4 focus:ring-blush-light focus:ring-opacity-50'
               >
                  Submit
               </button>
            </form>
         </div>
      </section>
   )
}

export default Contact
