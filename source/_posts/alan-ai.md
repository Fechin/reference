---
title: Alan AI
date: 2023-03-03 6:00:00
background: bg-[#4aa181]
tags:
  - AI
  - AlanAI
  - Prompts
  - Tips
categories:
  - Toolkit
intro:
  This cheat sheet covers all major script concepts, client API methods, handlers and other tools to create a multimodal
  conversational experience with Alan AI
---

### Legend

- `pattern` — phrase to invoke a voice/text command or a response to be played
- `value` — specified value
- `params` — passed parameters
- `action` — action to be performed
- `output` — data outcome
- `[...]` — optional data or parameters

## Dialog script

### Intents & patterns

Define a voice/text command to play a response

```{.wrap}
intent('pattern'[, 'patternN'], reply('pattern'))
```

Define a voice/text command to play a response or perform an action

```{.wrap}
intent('pattern'[, 'patternN'], p => { action })
```

Define alternatives

```{.wrap}
intent('phrase1|phrase2')
```

Define optional words and phrases

```{.wrap}
intent('pattern (optional phrase|)')
```

### Response functions

Play a response (in case of multiple patterns, a response is picked at random)

```{.wrap}
reply('pattern'[, 'patternN'])
```

Play a response

```{.wrap}
p.play('pattern')
```

Define voice settings for the assistant reply: `accent (en, fr, de, it, ru, es)`, `gender (male/female)`, `voice type`,
`speaking pitch`, `speaking rate`

```{.wrap}
p.play([voice(code, gender, type, pitch, rate), ]'pattern')
```

Define play options: `force:true` (execute if the button is inactive), `activate:true` (activate the button before),
`deactivate:true` (deactivate the button after)

```{.wrap}
p.play('pattern'[, opts(options)])
```

Send a command to the app

```{.wrap}
p.play({command:data})
```

### User-defined slots

Define a static list of values expected in the input

```{.wrap}
$(SLOTNAME value1|value2) => p.SLOTNAME.value
```

Provide labels to classify or identify the slot values

```{.wrap}
$(SLOTNAME value1~label1|value2~label2) => p.SLOTNAME.label
```

Enable fuzzy matching to capture similar variants

```{.wrap}
$(SLOTNAME~ value1|value2) => p.SLOTNAME.value
```

Make a slot optional

```{.wrap}
$(SLOTNAME value1|value2|)
```

Capture several slot values

```{.wrap}
intent('$(SLOTNAME value1|value2) and $(SLOTNAME value1|value2 )') => p.SLOTNAME_ (array), p.SLOTNAME_[0].value, p.SLOTNAME_[1].value
```

### Predefined slots

Capture date values

```{.wrap}
$(DATE) => p.DATE.value, p.DATE.moment, p.DATE.luxon
```

Capture time values

```{.wrap}
$(TIME) => p.TIME.value, p.TIME.moment
```

Capture cardinal numbers

```{.wrap}
$(NUMBER) => p.NUMBER.value, p.NUMBER.number
```

Capture ordinal numbers

```{.wrap}
$(ORDINAL) => p.ORDINAL.value, p.ORDINAL.number
```

Capture locations

```{.wrap}
$(LOC) => p.LOC.value
```

Capture names

```{.wrap}
$(NAME) => p.NAME.value
```

### Dynamic slots

Define a dynamic slot at the project level

```{.wrap}
project.name = {en: "value1|value2|value3"}
$(SLOTNAME p:name) => p.SLOTNAME.value
```

Define a dynamic slot at the dialog session level

```{.wrap}
p.userData.name = {en: "value1|value2|value3"}
$(SLOTNAME u:name) => p.SLOTNAME.value
```

Get data for a dynamic slot with the visual state

```{.wrap}
let name = ["value1|value2|value3"]
p.visual.data = {en: name};
$(SLOTNAME v:name) => p.SLOTNAME.value
```

Define a dynamic slot in a short form

```{.wrap}
project.name = {en: "value1|value2|value3"}
$(p:name) => p.SLOTNAME.value
```

Define labels for dynamic slots: see [User-defined slots](#user-defined-slots).

Enable fuzzy matching for dynamic slots: see [User-defined slots](#user-defined-slots).

Make a dynamic slot optional: see [User-defined slots](#user-defined-slots).

Capture several slot values: see [User-defined slots](#user-defined-slots).

### RegEx slots

Capture digit and/or letter combination

```{.wrap}
const reg = "([A-Za-z]{1}\\s?){6}"
$(SLOTNAME* ${reg}) => p.SLOTNAME.value
```

Capture any user’s input

```{.wrap}
$(SLOTNAME* .+) => p.SLOTNAME.value
```

### Contexts

Define a context

```{.wrap}
let contextName = context(() => { action })
```

Activate a context

```{.wrap}
intent('pattern', p => {..., p.then(contextName)}
```

Pass data to the context

```{.wrap}
p.then(contextName, state: {data:yourData}) => p.state.data
```

Resolve a context

```{.wrap}
p.resolve([data:yourData])
```

Reset a context

```{.wrap}
p.resetContext()
```

Define intents to be matched at any time without switching the current context

```{.wrap}
intent(noctx, 'pattern', ...) or noContext(() => {intent(...)})
```

Play a prompt for an expected input

```{.wrap}
fallback('pattern1'[, 'patternN'])
```

Title a context

```{.wrap}
title('contextName')
```

### Predefined objects

Store static device- and user-specific data passed from the client app

```{.wrap}
authData.data => p.authData.data
```

Store state data to be available globally at the project scope

```{.wrap}
project.info = {data:yourData} => project.info.data
```

Store the intent match score

```{.wrap}
p.score
```

Store data to be passed between contexts

```{.wrap}
p.state.data
```

Store visual context data to be passed from the client app with `setVisualState()`

```{.wrap}
p.visual.data
```

Store user-specific state data to be accessible during the dialog session

```{.wrap}
p.userData.data
```

### Predefined callbacks

Define actions to be performed when the script is saved and dialog model is built

```{.wrap}
onCreateProject(() => { action })
```

Define actions to be performed when the dialog session starts

```{.wrap}
onCreateUser((p) => { action })
```

Define actions to be performed when the dialog session ends

```{.wrap}
onCleanupUser((p) => { action })
```

Define actions to be performed when the visual state is set

```{.wrap}
onVisualState((p, s) => { action })
```

Define actions to be performed when a user event is triggered in the client app: `buttonReady`, `buttonClicked`,
`micPermissionPrompt`, `micAllowed`, `firstActivate`, `showPopup`, `popupCloseClicked`, `recognized`

```{.wrap}
onUserEvent((p, e) => { action })
```

Define actions to be performed when a context is activated

```{.wrap}
onEnter((p) => { action })
```

### Q&A service

Define a URL of a resource to be indexed

```{.wrap}
corpus({url: url, depth: depthLevel})
```

Define text corpus to be used by the assistant in the dialog

```{.wrap}
corpus('text')
```

### Built-in JS libraries

Make API calls

```{.wrap}
axios, request
```

Work with time

```{.wrap}
moment-timezone, luxon
```

Work with arrays, numbers, objects, strings and so on

```{.wrap}
lodash
```

### Other

Provide a list of hints to help recognize specific terms

```{.wrap}
recognitionHints('hint'[, 'hintN'])
```

Write info messages to Alan Studio logs

```{.wrap}
console.log(data)
```

Write error messages to Alan Studio logs

```{.wrap}
console.error(data)
```

## Client SDK

### Client API methods

Send information about the visual state from the client app to the dialog script

```{.wrap}
setVisualState(visualStateData:object)
```

Send data or perform actions without a voice/text command

```{.wrap}
projectAPI.method = function(p, param, callback) {
  p.userData.data = param.data;
  callback();
};

callProjectApi(method:string, data:object, callback:function)
```

Play a text message in the client app

```{.wrap}
playText(text:string)
```

Send a text message to Alan as the user’s input

```{.wrap}
sendText(text:string)
```

Execute a command in the client app

```{.wrap}
playCommand(command:object)
```

### Client API methods (continued)

Activate the Alan button programmatically

```{.wrap}
activate()
```

Deactivate the Alan button programmatically

```{.wrap}
deactivate()
```

Check the Alan button state

```{.wrap}
isActive()
```

Remove the Alan button from the parent element, page (supported on Web, Ionic)

```{.wrap}
remove()
```

Check the state of the wake word (supported on iOS, Android)

```{.wrap}
getWakewordEnabled()
```

Set the state of the wake word (supported on iOS, Android)

```{.wrap}
setWakewordEnabled(enabled:boolean)
```

### Handlers

// Examples are provided for the Web platform

Handle commands sent from the dialog script to the client app

```{.wrap}
onCommand: function (commandData) { action }
```

Handle Alan button state changes

```{.wrap}
onButtonState: function (e) { action }
```

Handle connection status to the virtual assistant project in the Alan Cloud

```{.wrap}
onConnectionStatus: function (e) { action }
```

Handle events received from Alan

```{.wrap}
onEvent: function (e) { action }
```

## Also see

- [Alan AI website](https://alan.app)
- [About the Alan Platform](https://alan.app/platform)
- [Alan AI documentation](https://alan.app/docs)
