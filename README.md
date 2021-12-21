# Alice's Adventures in TypeScriptLand

## Introduction

This lab is based on Alice's Adventures in Wonderland.

If you're not familiar with the story, things are going to seem extremely strange!

## Goal

The goal of the lab is to make it through Wonderland by fixing the code in each chapter in a way which allows you through to the next chapter.

❗ NOTE: _Each code change is very small and simple_. This isn't about writing tonnes of code. And it's not about writing difficult code. It's about understanding the code and making the changes required to get through to the next chapter. In the process, you'll build up familiarity with TypeScript. And hopefully have some fun too :)

## Creating your application

This app is a mini-adventure story which runs in the console.

👉 First, fork and clone this repository.

👉 Then run this command:

```
npm install
```

👉 You can then run

```
npm start
```

❗ NOTE: If you look in `package.json` you'll see that `npm start` is actually just an alias for `nodemon index.ts`

You should see a welcome message and a prompt to enter your name.

## Beginning your adventure

It seems that no matter what name you enter, you won't be allowed into Wonderland.

Let's take a look at the code in `index.ts` to understand why.

👉 Read `index.ts` and look at the functions called in `console.ts`

These files are pretty simple - mostly basic JavaScript, but note the use of TypeScript to provide typing on the various function parameters.

You'll have noticed the `// 👉 FIXME ❌` comment in `index.ts`.

Just like Alice had her DRINKME potions 🧉, you want to keep an eye out for these FIXME indicators - they are the places in each chapter that you'll have to change in order to solve the little puzzles.

In the case of `index.ts` our FIXME looks pretty clear. We're calling `failImmediately` as our callback function, which doesn't sound great. Perhaps `checkName` would be more appropriate?

👉 Replace the call to `failImmediately` with `checkName` in the "What's your name?" prompt in `index.ts`

Now if you enter a name you can enter Wonderland! Let's go down the rabbit hole in [activity 1](./docs/activity_1.md).
