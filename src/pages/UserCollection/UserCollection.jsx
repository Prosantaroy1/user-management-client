function UserCollection() {
    return (
        <>

            <div className="overflow-x-auto">
                <table className="table">
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
                                            <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                               royproak@gmail.com
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">delete</button>
                            </th>
                            <th>
                                <button className="btn btn-ghost btn-xs">update user</button>
                            </th>
                        </tr>
                      
                      
                    </tbody>
                   
                   

                </table>
            </div>

        </>
    )
}
export default UserCollection;