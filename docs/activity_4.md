# Activity 4 - The Queen's Croquet

## Generics

In Wonderland, croquet is played by using a flamingo to push a hedgehog through an arch made of playing cards.

🏑 🦩 🦔 ♥♦♠♣

Of course!

![Play Croquet](../images/croquet.jpg)

👉 Read `4_croquet.ts`

Notice the generic `hit<T,U>` function which operates on two generic types, one for the ball and one for the mallet.

⚠ In reality, this isn't a particularly sensible use of generics - since we know we'd only ever want a Flamingo and a Hedgehog it would be better to write a function like `hit(ball: Hedgehog, mallet: Flamingo)`. A generic function should be able to do something useful with whatever type you pass to it!

However, the Queen of Hearts's dodgy `hit` function gives us a chance to play a bit with generic functions, and, in particular, to remind ourselves that generics _don't actually exist at runtime_ - only when we're writing the code.

Let's pass her challenge!

# FIXME

Currently, the `Croquet<T,U>` interface is taking `<number, number>` rather than using our custom types for ball and mallet.

👉 At the first FIXME, Change `<number, number>` to use the provided custom types `<Ball, Mallet>`

👉 Notice that this immediately breaks the parameters below - the numbers we were passing in are no longer the correct type.

👉 Fix the parameters - TypeScript will only let you pass in one possible value for Ball, and one possible value for Mallet. The call will look like this:

```JavaScript
game.hit("Hedgehog", "Flamingo")
```

❗ At the time of writing the code, TypeScript understands that the custom type `Ball` is represented by the string "Hedgehog". But notice in the `hit` function below that _when the code actually runs_ the type is "string".

These two little changes are enough to pass by the croquet challenge.

# Lessons to take from this chapter:

-   This isn't a good use case for generics. Writing a generic function that only works if you pass in the right combination of types is obviously silly! The whole point of generics is that the function does the same thing using many different types, which is the opposite of this case. Seeing a bad example of generics is useful to spot them in future!

-   Familiarity with generic syntax in interfaces and functions.

-   The custom types `Ball` and `Mallet` are really strings when the code is running.

Unfortunately, following our croquet victory, it's time to stand trial for theft in [activity 5](./activity_5.md).
