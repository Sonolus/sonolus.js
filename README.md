# Sonolus.js

TypeScript based Developer Toolkit for Sonolus.

## Links

-   [Sonolus Website](https://sonolus.com)
-   [Sonolus Wiki](https://github.com/NonSpicyBurrito/sonolus-wiki)

## Features

-   Author Sonolus code in JavaScript/TypeScript and utilize their rich existing IDE tooling and ecosystem.
-   Static type checking with TypeScript.
-   Built-in definitions and autocomplete.
-   Simplified and friendlier syntax, functions, and helpers.
-   Meta programming: use code to write code.
-   No-setup development server for quick prototyping.
-   Debug marker.

## Installation

```
npm install sonolus.js --save-dev
```

## Examples

```ts
// Visualize compiled code

const minDist = 0.02

console.log(
    visualize(
        If(
            And(GreaterOr(Time, 4.95), LessOr(Time, 5.05)),
            [Play(EffectClip.Perfect, minDist), DebugPause()],
            DebugLog(Time)
        )
    )
)

// Result:
// If(
//     And(GreaterOr(Get(1, 0), 4.95), LessOr(Get(1, 0), 5.05)),
//     Execute(Play(1, 0.02), DebugPause()),
//     DebugLog(Get(1, 0))
// )
```

```ts
// Use meta programming to sum 1 to 5 with EntityMemory[63] as temporary variable

const temp = EntityMemory.to<number>(63)

const code: Code = [temp.set(0)]
for (let i = 1; i <= 5; i++) {
    code.push(temp.set(Add(temp, i)))
}
code.push(DebugLog(temp))

console.log(visualize(code))

// Result:
// Execute(
//     Set(21, 63, 0),
//     Set(21, 63, Add(Get(21, 63), 1)),
//     Set(21, 63, Add(Get(21, 63), 2)),
//     Set(21, 63, Add(Get(21, 63), 3)),
//     Set(21, 63, Add(Get(21, 63), 4)),
//     Set(21, 63, Add(Get(21, 63), 5)),
//     DebugLog(Get(21, 63))
// )
```

```ts
// Build engine and level from source

const buildOutput = build({
    engine: {
        configuration: { ... },
        data: { ... },
    },
    level: {
        data: { ... },
    },
})

// EngineConfiguration, EngineData, and LevelData available in buildOutput and can be saved to files
```

```ts
// Build and start a development server

const buildOutput = build({ ... })

serve(buildOutput)

// Development server available to connect using Sonolus app
```
