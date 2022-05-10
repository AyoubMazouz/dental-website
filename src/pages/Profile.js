// context Imports.
import { useAuth } from '../contexts/AuthContext'

export default function Profile() {
    const { currentUser } = useAuth()
    return (
        <div>{JSON.stringify(currentUser)}</div>
    )
}
