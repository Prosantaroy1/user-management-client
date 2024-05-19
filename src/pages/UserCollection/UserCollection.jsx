import { useState } from "react";

function UserCollection() {

    const [users, setUsers] = useState([]);

    fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data => {
            //console.log(data)
            setUsers(data)
        })
    console.log(users)

    return (
        <>

            <div className="overflow-x-auto">
                {
                    users.map((user, idx) => {
                        <table key={idx} user={user} className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Favorite Color</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>

                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={user.photoUrl} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{user.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {user.email}
                                    </td>
                                    <td>{user.color}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">delete</button>
                                    </th>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">update user</button>
                                    </th>
                                </tr>


                            </tbody>



                        </table>
                    })
                }
            </div>

        </>
    )
}
export default UserCollection;