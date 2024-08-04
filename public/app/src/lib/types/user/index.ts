export interface UserInterface {
    id: number | null;
    username: string | null;
    avatar: string | null;
    fullName: string;
    profile: Record<string, any>;
    roles: string[];
    permissions: string[];
    token: string;
}
