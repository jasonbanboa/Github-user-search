
// npm init -y
// npm i --save-dev typescript
// npx tsc --init
// package.json "start": "tsc --watch"
// tsconfig "outDir"
// tsconfig "module": "es6"


interface UserData2 {
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

// ? means undefined ! means no null assert that it cannot be null
// doesnt work since $form3 can be null
const $form2 = document.querySelector('form');
// $form2.submit();

// if you are 100% sure ! at the end insures it isnt null
const $form3 = document.querySelector('form')!;
$form3.submit();

// else could be null
const $form4 = document.querySelector('form');
$form4?.submit();

// as is an assertion + helpful for intelisense  but use sparingly 
const $form5 = document.querySelector('.form') as HTMLFormElement;

const $input1 = document.querySelector('.input1') as HTMLInputElement;
const $input2 = document.querySelector('.input2') as HTMLInputElement;

// Get values as different data types
const value1AsNumber: number = $input1.valueAsNumber;
const value2AsDate: Date | null = $input2.valueAsDate ?? null;
