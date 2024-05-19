import UserCollection from "./pages/UserCollection/UserCollection"


function App() {

  const handleAdd=(e)=>{
     e.preventDefault();
     const form=e.target;
     const name=form.name.value;
     const email=form.email.value;
     const photoUrl=form.photo.value;
     const color=form.color.value;
     const userData={name,email,photoUrl,color};

     console.log(userData)

     fetch('http://localhost:5000/users',{
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(userData)
     })
     .then(res=>res.json())
     .then(data=>{
      console.log(data)
     }) 

  }

  return (
    <div className="px-14">
      <h2 className="text-center text-3xl text-amber-500">User management System</h2>
      { /**User searchbar  */}
      <div className="flex justify-center items-center gap-8 py-4">
        {/* user search */}
        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
        {/* Modal btn user add */}
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>Add User</button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="text-xl">Add to User</h3>
            <form onSubmit={handleAdd} className="space-y-5 pt-4">
              <label className="input input-bordered flex items-center gap-2">
                Name
                <input type="text" name="name" className="grow" placeholder="Daisy" />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                Email
                <input type="text" name="email" className="grow" placeholder="daisy@site.com" />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                PhotoUrl
                <input type="text" name="photo" className="grow" placeholder="photoUrl" />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                Favorite Color
                <input type="text" name="color" className="grow" placeholder="Favorite Color" />
              </label>
              <input type="submit" className="w-1/2 mx-auto rounded-2xl bg-black text-white" value="Add User" />
            </form>
          </div>
        </dialog>
      </div>
      <UserCollection />
    </div>
  )
}

export default App
