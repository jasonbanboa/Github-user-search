
interface UserData {
  avatar_url: string,
  name: string,
  login: string,
  created_at: string,
  bio: string | null,

  public_repos: number,
  followers: number,
  following: number,

  location: string, 
  twitter_username: string | null,
  blog: string | null,
  company: string | null,
}

async function fetchUserData(username: string): Promise<UserData> {
  const {
    avatar_url,
    name,
    login,
    created_at,
    bio,
    public_repos,
    followers,
    following,
    location,
    twitter_username,
    blog,
    company,
  } = await fetch(`https://api.github.com/users/${username}`).then(res => res.json());

  return {
    avatar_url,
    name,
    login,
    created_at,
    bio,
    public_repos,
    followers,
    following,
    location,
    twitter_username,
    blog,
    company,
  };
}

async function main() {
  const userData: UserData = await fetchUserData('jasonbanboa');
  console.log(userData);
}

main();