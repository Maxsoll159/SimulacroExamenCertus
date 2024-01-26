export const TableUsers = ({ listUsers, indicador }) => {

    return (
        <div>
            <table>
                <thead>
                    <th>Foto</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Pais</th>
                    <th>Acciones</th>
                </thead>
                <tbody>
                    {
                        listUsers.map((user, index) => {
                            const color = index % 2 === 0 ? "red" : "blue"
                            const pintar = indicador ? color : ""
                            return (
                                <tr key={user.email} style={{ background: pintar }}>
                                    <td><img src={user.picture.medium} alt="" /></td>
                                    <td>{user.name.first}</td>
                                    <td>{user.name.last}</td>
                                    <td>{user.location.country}</td>
                                    <td><button>Eliminar</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>



        </div>
    )
}
