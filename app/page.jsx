export default function Home() {
  return (
    <div className='bg-gray-900 min-h-screen flex justify-center items-center'>
      <div className='bg-gray-800 text-white rounded-lg p-8 max-w-md w-full shadow-lg'>
        <h1 className='text-3xl font-bold mb-4'>Add a Grudge</h1>
        <form action={'addGrudge'}>
          <div className='mb-4'>
            <label htmlFor='grudgeName'>Name of Grudge</label>
            <input
              type='text'
              name='grudgeName'
              placeholder='Enter the name of your grudge'
              id='grudgeName'
              className='block w-full rounded-md bg-gray-700 text-white border-none py-2 px-4 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-500'
            />
          </div>
          <button
            type='submit'
            className='bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-500'
          >
            Add Grudge
          </button>
        </form>
      </div>
    </div>
  );
}
