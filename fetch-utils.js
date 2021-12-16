const SUPABASE_URL = 'https://covzqhpkybgkgziqqiyg.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTY4MTMwNSwiZXhwIjoxOTU1MjU3MzA1fQ.F22Z4UHL2-s8jZB9RfB3ya9Z9C6bO7TkTULVszB7sn0';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getUser() {
    return client.auth.session();
}

export async function checkAuth() {
    const user = await getUser();

    if (!user) location.replace('../'); 
}

export async function redirectIfLoggedIn() {
    if (await getUser()) {
        location.replace('./polls');
    }
}

export async function signUpUser(email, password){
    const response = await client
        .auth
        .signUp({ email, password });
    return response.user;
}

export async function signInUser(email, password){
    const response = await client
        .auth
        .signIn({ email, password });
    
    return response.user;
}

export async function logout() {
    await client.auth.signOut();
    return window.location.href = '../';
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}