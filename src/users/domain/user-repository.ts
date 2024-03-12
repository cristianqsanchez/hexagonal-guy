import { User } from '@users/domain/user'

export interface UserRepository {
	getByID(id: string): Promise<User | null>
}
