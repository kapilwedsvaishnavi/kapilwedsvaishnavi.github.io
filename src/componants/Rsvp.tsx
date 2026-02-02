import kapil_vaishnavi from '../assets/kapi-vaishnavi.jpeg'

const Rsvp = () => {
  return (
    <section id="rsvp" className="rsvp-section p-5">
        <div className="container flex flex-col lg:flex-row mx-auto w-full">
            <div className='w-full lg:w-[50%] border-1 border-green-500 p-5 flex justify-center items-center'>
                 <form 
                    action="https://formspree.io/f/mnqylzbp" 
                    method="POST"   
                    className="flex flex-col gap-4 border border-green-500 p-6"
                >
                    <h2 className="text-2xl font-serif text-green-500 mb-4 playwrite-au-tas-wedding">
                        Are you attending our wedding?
                    </h2>

                    <div className="relative z-0 w-full mb-5 group text-green-500">
                        <input type="name" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-1 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " required />
                        <label className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Name</label>
                    </div>


                    <div className="relative z-0 w-full mb-5 group text-green-500">
                        <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-1 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " required />
                        <label className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email</label>
                    </div>

                    <div className="mb-5 text-green-500">
                        <label className="inline-flex items-center mr-6">
                            <input type="radio" className="form-radio text-green-500" name="attendance" value="yes" required />
                            <span className="ml-2">Yes, I will attend</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input type="radio" className="form-radio text-green-500" name="attendance" value="no" required />
                            <span className="ml-2">No, I can't make it</span>
                        </label>
                    </div>

                    <button type="submit" className="m-auto w-30 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors">
                        RSVP
                    </button>
                </form>
            </div>
            <div className="w-full lg:w-[50%] justify-center items-center relative">
                <img src={kapil_vaishnavi} alt="Rsvp" className="w-full h-auto" style={{width: '100%'}}/>
                <div className='w-[90%] h-[90%] absolute border border-green-800 top-[5%] left-[5%]'></div>
            </div>
        </div>
     </section>
  )
}

export default Rsvp