export default function ContactForm() {

    return (
        <div >
        <form className="flex flex-col justify-between items-center  px-2 text-center">
            <div className='flex flex-row justify-evenly'>
            <input type='text' id='name' placeholder='Name'/>
            <input type='email' id='email' placeholder='Email'/>
            </div>
            <input className='w-full' type='text' id='subject' placeholder='Subject'/>
            <textarea className='w-full' type='text' id='message' placeholder='Message'/>
        </form>
            </div>
    )
}